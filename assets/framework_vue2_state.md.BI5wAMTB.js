import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue2 状态管理","description":"","frontmatter":{},"headers":[{"level":2,"title":"状态管理概念","slug":"状态管理概念","link":"#状态管理概念","children":[]},{"level":2,"title":"组件内状态管理","slug":"组件内状态管理","link":"#组件内状态管理","children":[{"level":3,"title":"data 与 props","slug":"data-与-props","link":"#data-与-props","children":[]},{"level":3,"title":"事件总线","slug":"事件总线","link":"#事件总线","children":[]}]},{"level":2,"title":"Vuex 核心概念","slug":"vuex-核心概念","link":"#vuex-核心概念","children":[{"level":3,"title":"Vuex 架构图","slug":"vuex-架构图","link":"#vuex-架构图","children":[]},{"level":3,"title":"Store 基本结构","slug":"store-基本结构","link":"#store-基本结构","children":[]},{"level":3,"title":"State","slug":"state","link":"#state","children":[]},{"level":3,"title":"Getters","slug":"getters","link":"#getters","children":[]},{"level":3,"title":"Mutations","slug":"mutations","link":"#mutations","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]},{"level":2,"title":"Modules","slug":"modules","link":"#modules","children":[{"level":3,"title":"命名空间","slug":"命名空间","link":"#命名空间","children":[]}]},{"level":2,"title":"辅助函数","slug":"辅助函数","link":"#辅助函数","children":[]},{"level":2,"title":"插件开发","slug":"插件开发","link":"#插件开发","children":[]},{"level":2,"title":"严格模式","slug":"严格模式","link":"#严格模式","children":[]},{"level":2,"title":"项目结构建议","slug":"项目结构建议","link":"#项目结构建议","children":[]},{"level":2,"title":"测试策略","slug":"测试策略","link":"#测试策略","children":[]}],"relativePath":"framework/vue2/state.md","filePath":"framework/vue2/state.md"}'),o={name:"framework/vue2/state.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue2/state.md for this page in Markdown format</div><h1 id="vue2-状态管理" tabindex="-1">Vue2 状态管理 <a class="header-anchor" href="#vue2-状态管理" aria-label="Permalink to &quot;Vue2 状态管理&quot;">​</a></h1><p>Vue2 应用的状态管理主要解决组件间数据共享和状态维护的问题，确保应用状态的可预测性和可维护性。</p><h2 id="状态管理概念" tabindex="-1">状态管理概念 <a class="header-anchor" href="#状态管理概念" aria-label="Permalink to &quot;状态管理概念&quot;">​</a></h2><p>在 Vue2 应用中，状态管理处理组件间共享数据的流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件A → 状态变更 → 状态容器 ← 状态变更 → 组件B</span></span>
<span class="line"><span>        ↓                    ↓</span></span>
<span class="line"><span>    统一管理状态          响应式更新</span></span></code></pre></div><h2 id="组件内状态管理" tabindex="-1">组件内状态管理 <a class="header-anchor" href="#组件内状态管理" aria-label="Permalink to &quot;组件内状态管理&quot;">​</a></h2><h3 id="data-与-props" tabindex="-1">data 与 props <a class="header-anchor" href="#data-与-props" aria-label="Permalink to &quot;data 与 props&quot;">​</a></h3><p>组件内部状态使用 data，父子组件通信使用 props。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sharedData: </span><span style="color:#9ECBFF;">&#39;共享数据&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;child-component :message=&quot;sharedData&quot; /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;child-component :message=&quot;sharedData&quot; /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">&#39;&lt;div&gt;{{ message }}&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>局限性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>深层嵌套组件通信困难</span></span>
<span class="line"><span>兄弟组件通信复杂</span></span>
<span class="line"><span>跨组件状态同步繁琐</span></span></code></pre></div><h3 id="事件总线" tabindex="-1">事件总线 <a class="header-anchor" href="#事件总线" aria-label="Permalink to &quot;事件总线&quot;">​</a></h3><p>通过 Vue 实例作为事件中心实现组件间通信。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// event-bus.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> EventBus</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件A - 发送事件</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    sendMessage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      EventBus.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message-sent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Hello World&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件B - 接收事件</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    EventBus.</span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message-sent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleMessage)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  beforeDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    EventBus.</span><span style="color:#B392F0;">$off</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message-sent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleMessage)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    handleMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到消息:&#39;</span><span style="color:#E1E4E8;">, message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>事件总线示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件A --$emit--&gt; 事件总线 --$on--&gt; 组件B</span></span>
<span class="line"><span>组件C --$emit--&gt;        --$on--&gt; 组件D</span></span></code></pre></div><h2 id="vuex-核心概念" tabindex="-1">Vuex 核心概念 <a class="header-anchor" href="#vuex-核心概念" aria-label="Permalink to &quot;Vuex 核心概念&quot;">​</a></h2><p>Vuex 是 Vue2 官方的状态管理库，采用集中式存储管理应用的所有组件的状态。</p><h3 id="vuex-架构图" tabindex="-1">Vuex 架构图 <a class="header-anchor" href="#vuex-架构图" aria-label="Permalink to &quot;Vuex 架构图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件 → Actions → Mutations → State ← Getters ← 组件</span></span>
<span class="line"><span>   ↓        ↓         ↓        ↓        ↓</span></span>
<span class="line"><span>  Dispatch  Commit   Mutate   Render   Access</span></span></code></pre></div><h3 id="store-基本结构" tabindex="-1">Store 基本结构 <a class="header-anchor" href="#store-基本结构" aria-label="Permalink to &quot;Store 基本结构&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vuex </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    user: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#B392F0;">    doubleCount</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#B392F0;">    incrementAsync</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> fetchUser</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">getUser</span><span style="color:#E1E4E8;">(userId)</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setUser&#39;</span><span style="color:#E1E4E8;">, user)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-label="Permalink to &quot;State&quot;">​</a></h3><p>单一状态树，包含所有应用层级状态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    todos: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习Vue&#39;</span><span style="color:#E1E4E8;">, done: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习Vuex&#39;</span><span style="color:#E1E4E8;">, done: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件中访问</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#B392F0;">    count</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$store.state.count</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    todos</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$store.state.todos</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="getters" tabindex="-1">Getters <a class="header-anchor" href="#getters" aria-label="Permalink to &quot;Getters&quot;">​</a></h3><p>基于 state 的派生状态，类似计算属性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    todos: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习Vue&#39;</span><span style="color:#E1E4E8;">, done: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;学习Vuex&#39;</span><span style="color:#E1E4E8;">, done: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基本getter</span></span>
<span class="line"><span style="color:#B392F0;">    doneTodos</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.todos.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">todo</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> todo.done)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 带参数的getter</span></span>
<span class="line"><span style="color:#B392F0;">    getTodoById</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#FFAB70;"> id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.todos.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">todo</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> todo.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用其他getter</span></span>
<span class="line"><span style="color:#B392F0;">    doneTodosCount</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">getters</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> getters.doneTodos.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件中使用</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#B392F0;">    doneTodos</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$store.getters.doneTodos</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    todo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.$store.getters.</span><span style="color:#B392F0;">getTodoById</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="mutations" tabindex="-1">Mutations <a class="header-anchor" href="#mutations" aria-label="Permalink to &quot;Mutations&quot;">​</a></h3><p>更改 state 的唯一方法，必须是同步函数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 不带载荷</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 带载荷</span></span>
<span class="line"><span style="color:#B392F0;">    incrementBy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> payload.amount</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用常量类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#79B8FF;">SOME_MUTATION</span><span style="color:#E1E4E8;">](</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 更新state</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件中提交mutation</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    incrementBy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;incrementBy&#39;</span><span style="color:#E1E4E8;">, { amount })</span></span>
<span class="line"><span style="color:#6A737D;">      // 或对象风格</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;incrementBy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        amount</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>Mutation 规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>必须是同步函数</span></span>
<span class="line"><span>通过 commit 调用</span></span>
<span class="line"><span>直接修改 state</span></span></code></pre></div><h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h3><p>处理异步操作，提交 mutations 来改变状态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    user: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基本action</span></span>
<span class="line"><span style="color:#B392F0;">    incrementAsync</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 带参数的action</span></span>
<span class="line"><span style="color:#B392F0;">    incrementByAsync</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">, amount)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 异步action</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> fetchUser</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">getUser</span><span style="color:#E1E4E8;">(userId)</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setUser&#39;</span><span style="color:#E1E4E8;">, response.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取用户失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 组合action</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> actionA</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dispatch</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gotData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> getData</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> actionB</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">dispatch</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;actionA&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 等待actionA完成</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gotOtherData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> getOtherData</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件中分发action</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    incrementAsync</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;incrementAsync&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    fetchUser</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetchUser&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>Action 与 Mutation 区别：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Action:   异步操作 → commit → Mutation</span></span>
<span class="line"><span>Mutation: 同步修改 → State</span></span></code></pre></div><h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><p>将 store 分割成模块，每个模块拥有自己的 state、getters、mutations、actions。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#B392F0;">    doubleCount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 访问根状态</span></span>
<span class="line"><span style="color:#B392F0;">    sumWithRootCount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">getters</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rootState</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rootState.count</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 上下文对象包含局部状态</span></span>
<span class="line"><span style="color:#B392F0;">    incrementIfOdd</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (state.count </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleB</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    updateMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: moduleA,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: moduleB</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h3><p>默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> moduleA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用命名空间</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#B392F0;">    isAdmin</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; getters[&#39;moduleA/isAdmin&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#B392F0;">    login</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; dispatch(&#39;moduleA/login&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    login</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// -&gt; commit(&#39;moduleA/login&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件中使用命名空间</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">      a</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> state.a</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;isAdmin&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapActions</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;login&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapMutations</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;login&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="辅助函数" tabindex="-1">辅助函数 <a class="header-anchor" href="#辅助函数" aria-label="Permalink to &quot;辅助函数&quot;">​</a></h2><p>Vuex 提供了 mapState、mapGetters、mapActions、mapMutations 辅助函数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mapState, mapGetters, mapActions, mapMutations } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对象展开运算符混入</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapState</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">      count</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> state.count,</span></span>
<span class="line"><span style="color:#6A737D;">      // 传字符串参数等同于 state =&gt; state.count</span></span>
<span class="line"><span style="color:#E1E4E8;">      countAlias: </span><span style="color:#9ECBFF;">&#39;count&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用函数访问局部状态</span></span>
<span class="line"><span style="color:#B392F0;">      countPlusLocalState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> state.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.localCount</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;doneTodosCount&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;anotherGetter&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      doneCount: </span><span style="color:#9ECBFF;">&#39;doneTodosCount&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapActions</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;increment&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 this.increment() 映射为 this.$store.dispatch(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;incrementBy&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapActions</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      add: </span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#6A737D;"> // 将 this.add() 映射为 this.$store.dispatch(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#B392F0;">mapMutations</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;increment&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 this.increment() 映射为 this.$store.commit(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;incrementBy&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ])</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="插件开发" tabindex="-1">插件开发 <a class="header-anchor" href="#插件开发" aria-label="Permalink to &quot;插件开发&quot;">​</a></h2><p>Vuex store 接受 plugins 选项，在每个 mutation 后调用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 日志插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> loggerPlugin</span><span style="color:#F97583;"> =</span><span style="color:#FFAB70;"> store</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mutation:&#39;</span><span style="color:#E1E4E8;">, mutation.type)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;payload:&#39;</span><span style="color:#E1E4E8;">, mutation.payload)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;state:&#39;</span><span style="color:#E1E4E8;">, state)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 持久化插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> persistencePlugin</span><span style="color:#F97583;"> =</span><span style="color:#FFAB70;"> store</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 从本地存储恢复状态</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> savedState</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> localStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;vuex-state&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (savedState) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    store.</span><span style="color:#B392F0;">replaceState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(savedState))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 订阅mutation，保存状态到本地存储</span></span>
<span class="line"><span style="color:#E1E4E8;">  store.</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;vuex-state&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(state))</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [loggerPlugin, persistencePlugin]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="严格模式" tabindex="-1">严格模式 <a class="header-anchor" href="#严格模式" aria-label="Permalink to &quot;严格模式&quot;">​</a></h2><p>开启严格模式，在状态变更不是由 mutation 函数引起时抛出错误。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  strict: process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> !==</span><span style="color:#9ECBFF;"> &#39;production&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>严格模式限制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>不要在发布环境下启用严格模式</span></span>
<span class="line"><span>严格模式会深度监测状态树来检测不合规的状态变更</span></span></code></pre></div><h2 id="项目结构建议" tabindex="-1">项目结构建议 <a class="header-anchor" href="#项目结构建议" aria-label="Permalink to &quot;项目结构建议&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── store/</span></span>
<span class="line"><span>│   ├── index.js          # 组装模块并导出store</span></span>
<span class="line"><span>│   ├── actions.js        # 根级别的action</span></span>
<span class="line"><span>│   ├── mutations.js      # 根级别的mutation</span></span>
<span class="line"><span>│   └── modules/</span></span>
<span class="line"><span>│       ├── user.js       # 用户模块</span></span>
<span class="line"><span>│       └── products.js   # 产品模块</span></span>
<span class="line"><span>└── components/</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// store/modules/user.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  namespaced: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    profile: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    token: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutations: {</span></span>
<span class="line"><span style="color:#B392F0;">    SET_PROFILE</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">profile</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.profile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> profile</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    SET_TOKEN</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">token</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.token </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> token</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> login</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">credentials</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">(credentials)</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SET_TOKEN&#39;</span><span style="color:#E1E4E8;">, response.token)</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SET_PROFILE&#39;</span><span style="color:#E1E4E8;">, response.user)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    logout</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">commit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SET_TOKEN&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">      commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SET_PROFILE&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#B392F0;">    isLoggedIn</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">state.token,</span></span>
<span class="line"><span style="color:#B392F0;">    userName</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> state.profile?.name</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="测试策略" tabindex="-1">测试策略 <a class="header-anchor" href="#测试策略" aria-label="Permalink to &quot;测试策略&quot;">​</a></h2><p>Vuex store 的单元测试：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createLocalVue } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vue/test-utils&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vuex </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { cloneDeep } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;lodash&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> localVue</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createLocalVue</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">localVue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user store module&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> store</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userModule</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> cloneDeep</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/store/modules/user&#39;</span><span style="color:#E1E4E8;">).default)</span></span>
<span class="line"><span style="color:#E1E4E8;">    store </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        user: userModule</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;should set token when login&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user/login&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      username: </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;test&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(store.state.user.token).</span><span style="color:#B392F0;">toBeTruthy</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;should clear state when logout&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user/SET_TOKEN&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user/SET_PROFILE&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;Test User&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user/logout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(store.state.user.token).</span><span style="color:#B392F0;">toBeNull</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(store.state.user.profile).</span><span style="color:#B392F0;">toBeNull</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div>`,62)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
