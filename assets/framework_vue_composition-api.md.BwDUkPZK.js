import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"Composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"为什么需要 Composition API？","slug":"为什么需要-composition-api","link":"#为什么需要-composition-api","children":[{"level":3,"title":"Options API 的局限性","slug":"options-api-的局限性","link":"#options-api-的局限性","children":[]},{"level":3,"title":"Composition API 的优势","slug":"composition-api-的优势","link":"#composition-api-的优势","children":[]}]},{"level":2,"title":"核心概念：setup() 函数与响应式引用","slug":"核心概念-setup-函数与响应式引用","link":"#核心概念-setup-函数与响应式引用","children":[{"level":3,"title":"setup() 函数详解","slug":"setup-函数详解","link":"#setup-函数详解","children":[]},{"level":3,"title":"响应式数据定义","slug":"响应式数据定义","link":"#响应式数据定义","children":[]}]},{"level":2,"title":"生命周期钩子在 setup 中的使用","slug":"生命周期钩子在-setup-中的使用","link":"#生命周期钩子在-setup-中的使用","children":[{"level":3,"title":"生命周期渲染流程示意图","slug":"生命周期渲染流程示意图","link":"#生命周期渲染流程示意图","children":[]},{"level":3,"title":"生命周期对比表","slug":"生命周期对比表","link":"#生命周期对比表","children":[]},{"level":3,"title":"在 setup 中使用生命周期","slug":"在-setup-中使用生命周期","link":"#在-setup-中使用生命周期","children":[]}]},{"level":2,"title":"逻辑复用利器：自定义 Hook","slug":"逻辑复用利器-自定义-hook","link":"#逻辑复用利器-自定义-hook","children":[{"level":3,"title":"什么是自定义 Hook？","slug":"什么是自定义-hook","link":"#什么是自定义-hook","children":[]},{"level":3,"title":"封装 useMouse Hook","slug":"封装-usemouse-hook","link":"#封装-usemouse-hook","children":[]},{"level":3,"title":"使用自定义 Hook","slug":"使用自定义-hook","link":"#使用自定义-hook","children":[]},{"level":3,"title":"更复杂的示例：useFetch","slug":"更复杂的示例-usefetch","link":"#更复杂的示例-usefetch","children":[]},{"level":3,"title":"在多个组件中复用","slug":"在多个组件中复用","link":"#在多个组件中复用","children":[]}]}],"relativePath":"framework/vue/composition-api.md","filePath":"framework/vue/composition-api.md"}'),o={name:"framework/vue/composition-api.md"};function e(t,s,c,r,E,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/composition-api.md for this page in Markdown format</div><h1 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;Composition API&quot;">​</a></h1><h2 id="为什么需要-composition-api" tabindex="-1">为什么需要 Composition API？ <a class="header-anchor" href="#为什么需要-composition-api" aria-label="Permalink to &quot;为什么需要 Composition API？&quot;">​</a></h2><h3 id="options-api-的局限性" tabindex="-1">Options API 的局限性 <a class="header-anchor" href="#options-api-的局限性" aria-label="Permalink to &quot;Options API 的局限性&quot;">​</a></h3><p>在 Vue 2 中，我们使用 Options API 来组织组件代码，将数据、方法、计算属性等分别放在不同的选项中。这种方式在简单组件中表现良好，但随着组件复杂度增加，问题逐渐显现：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Options API 的&quot;碎片化&quot;问题示例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 功能A相关的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      listA: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      filterA: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 功能B相关的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      listB: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      filterB: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 功能C相关的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      error: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 功能A的计算属性</span></span>
<span class="line"><span style="color:#B392F0;">    filteredListA</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能B的计算属性</span></span>
<span class="line"><span style="color:#B392F0;">    filteredListB</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能C的计算属性</span></span>
<span class="line"><span style="color:#B392F0;">    hasError</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 功能A的方法</span></span>
<span class="line"><span style="color:#B392F0;">    fetchDataA</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    updateFilterA</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能B的方法</span></span>
<span class="line"><span style="color:#B392F0;">    fetchDataB</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    updateFilterB</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能C的方法</span></span>
<span class="line"><span style="color:#B392F0;">    handleError</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 功能A的初始化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fetchDataA</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能B的初始化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fetchDataB</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>这种“碎片化”的组织方式导致相关逻辑被分散在不同选项中，理解和维护复杂组件变得困难。</p><h3 id="composition-api-的优势" tabindex="-1">Composition API 的优势 <a class="header-anchor" href="#composition-api-的优势" aria-label="Permalink to &quot;Composition API 的优势&quot;">​</a></h3><p>Composition API 通过基于逻辑功能而非选项类型来组织代码，解决了上述问题：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed, onMounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 功能A：数据列表管理</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">listA</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">filterA</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">filteredListA</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">fetchDataA</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useFeatureA</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能B：另一个数据列表管理</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">listB</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">filterB</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">filteredListB</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">fetchDataB</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useFeatureB</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 功能C：状态管理</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">hasError</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">handleError</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useFeatureC</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      fetchDataA</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">      fetchDataB</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 功能A</span></span>
<span class="line"><span style="color:#E1E4E8;">      listA,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filterA,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filteredListA,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fetchDataA,</span></span>
<span class="line"><span style="color:#6A737D;">      // 功能B</span></span>
<span class="line"><span style="color:#E1E4E8;">      listB,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filterB,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filteredListB,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fetchDataB,</span></span>
<span class="line"><span style="color:#6A737D;">      // 功能C</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading,</span></span>
<span class="line"><span style="color:#E1E4E8;">      error,</span></span>
<span class="line"><span style="color:#E1E4E8;">      hasError,</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleError,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="核心概念-setup-函数与响应式引用" tabindex="-1">核心概念：<code>setup()</code> 函数与响应式引用 <a class="header-anchor" href="#核心概念-setup-函数与响应式引用" aria-label="Permalink to &quot;核心概念：\`setup()\` 函数与响应式引用&quot;">​</a></h2><h3 id="setup-函数详解" tabindex="-1"><code>setup()</code> 函数详解 <a class="header-anchor" href="#setup-函数详解" aria-label="Permalink to &quot;\`setup()\` 函数详解&quot;">​</a></h3><p><code>setup()</code> 是 Composition API 的入口点，它在组件实例创建之前执行：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // props：包含组件接收的所有 prop，是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(props.title)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // context：包含三个属性</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">attrs</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">slots</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // attrs：非响应式的 attribute</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(attrs.class)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // slots：插槽内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(slots.default)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // emit：触发事件</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update:count&#39;</span><span style="color:#E1E4E8;">, props.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      handleClick,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应式数据定义" tabindex="-1">响应式数据定义 <a class="header-anchor" href="#响应式数据定义" aria-label="Permalink to &quot;响应式数据定义&quot;">​</a></h3><h4 id="ref-用于基本类型" tabindex="-1"><code>ref</code> - 用于基本类型 <a class="header-anchor" href="#ref-用于基本类型" aria-label="Permalink to &quot;\`ref\` - 用于基本类型&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基本类型使用 ref</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 访问值时需要使用 .value</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在模板中自动解包，无需 .value</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      increment,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="reactive-用于对象类型" tabindex="-1"><code>reactive</code> - 用于对象类型 <a class="header-anchor" href="#reactive-用于对象类型" aria-label="Permalink to &quot;\`reactive\` - 用于对象类型&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, toRefs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对象类型使用 reactive</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> addTodo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.todos.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ text, done: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用 toRefs 保持响应式解构</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">      addTodo,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="生命周期钩子在-setup-中的使用" tabindex="-1">生命周期钩子在 <code>setup</code> 中的使用 <a class="header-anchor" href="#生命周期钩子在-setup-中的使用" aria-label="Permalink to &quot;生命周期钩子在 \`setup\` 中的使用&quot;">​</a></h2><h3 id="生命周期渲染流程示意图" tabindex="-1">生命周期渲染流程示意图 <a class="header-anchor" href="#生命周期渲染流程示意图" aria-label="Permalink to &quot;生命周期渲染流程示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件初始化</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeCreate    ← Options API 特有</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>created         ← Options API 特有</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>setup()         ← Composition API 入口</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeMount</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>DOM 渲染</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>mounted</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>数据变化触发更新</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeUpdate</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>虚拟 DOM 重新渲染和打补丁</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>updated</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>组件卸载前</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeUnmount</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>组件卸载</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>unmounted</span></span></code></pre></div><h3 id="生命周期对比表" tabindex="-1">生命周期对比表 <a class="header-anchor" href="#生命周期对比表" aria-label="Permalink to &quot;生命周期对比表&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Options API</th><th>Composition API</th><th>执行时机</th></tr></thead><tbody><tr><td><code>beforeCreate</code></td><td>无直接对应</td><td>在 <code>setup()</code> 之前执行</td></tr><tr><td><code>created</code></td><td>无直接对应</td><td>在 <code>setup()</code> 之前执行</td></tr><tr><td><code>beforeMount</code></td><td><code>onBeforeMount</code></td><td>挂载开始之前调用</td></tr><tr><td><code>mounted</code></td><td><code>onMounted</code></td><td>组件挂载后调用</td></tr><tr><td><code>beforeUpdate</code></td><td><code>onBeforeUpdate</code></td><td>数据变化，DOM 更新前</td></tr><tr><td><code>updated</code></td><td><code>onUpdated</code></td><td>数据变化，DOM 更新后</td></tr><tr><td><code>beforeUnmount</code></td><td><code>onBeforeUnmount</code></td><td>组件卸载前调用</td></tr><tr><td><code>unmounted</code></td><td><code>onUnmounted</code></td><td>组件卸载后调用</td></tr><tr><td><code>errorCaptured</code></td><td><code>onErrorCaptured</code></td><td>捕获后代组件错误时</td></tr><tr><td><code>renderTracked</code></td><td><code>onRenderTracked</code></td><td>渲染依赖被追踪时</td></tr><tr><td><code>renderTriggered</code></td><td><code>onRenderTriggered</code></td><td>渲染依赖被触发时</td></tr><tr><td><code>activated</code></td><td><code>onActivated</code></td><td>keep-alive 组件激活时</td></tr><tr><td><code>deactivated</code></td><td><code>onDeactivated</code></td><td>keep-alive 组件停用时</td></tr></tbody></table><h3 id="在-setup-中使用生命周期" tabindex="-1">在 <code>setup</code> 中使用生命周期 <a class="header-anchor" href="#在-setup-中使用生命周期" aria-label="Permalink to &quot;在 \`setup\` 中使用生命周期&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeMount,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onMounted,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeUpdate,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onUpdated,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeUnmount,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onUnmounted,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ref,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello Vue 3&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onBeforeMount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件即将挂载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件已挂载，可以访问 DOM&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">      // 在这里进行数据初始化</span></span>
<span class="line"><span style="color:#B392F0;">      fetchInitialData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onBeforeUpdate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据即将更新，DOM 还未更新&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onUpdated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据已更新，DOM 也已更新&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件即将卸载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">      // 清理定时器、取消订阅等</span></span>
<span class="line"><span style="color:#B392F0;">      clearInterval</span><span style="color:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件已卸载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> fetchInitialData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 获取初始数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="逻辑复用利器-自定义-hook" tabindex="-1">逻辑复用利器：自定义 Hook <a class="header-anchor" href="#逻辑复用利器-自定义-hook" aria-label="Permalink to &quot;逻辑复用利器：自定义 Hook&quot;">​</a></h2><h3 id="什么是自定义-hook" tabindex="-1">什么是自定义 Hook？ <a class="header-anchor" href="#什么是自定义-hook" aria-label="Permalink to &quot;什么是自定义 Hook？&quot;">​</a></h3><p>自定义 Hook 是一个 JavaScript 函数，它使用 Composition API 来封装和复用有状态的逻辑。约定上，自定义 Hook 以“use”开头。</p><h3 id="封装-usemouse-hook" tabindex="-1">封装 <code>useMouse</code> Hook <a class="header-anchor" href="#封装-usemouse-hook" aria-label="Permalink to &quot;封装 \`useMouse\` Hook&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// useMouse.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted, onUnmounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useMouse</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> x</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> update</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    x.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageX</span></span>
<span class="line"><span style="color:#E1E4E8;">    y.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageY</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mousemove&#39;</span><span style="color:#E1E4E8;">, update)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mousemove&#39;</span><span style="color:#E1E4E8;">, update)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { x, y }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用自定义-hook" tabindex="-1">使用自定义 Hook <a class="header-anchor" href="#使用自定义-hook" aria-label="Permalink to &quot;使用自定义 Hook&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在组件中使用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useMouse } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./useMouse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useMouse</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="更复杂的示例-usefetch" tabindex="-1">更复杂的示例：<code>useFetch</code> <a class="header-anchor" href="#更复杂的示例-usefetch" aria-label="Permalink to &quot;更复杂的示例：\`useFetch\`&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// useFetch.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onUnmounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useFetch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> loading</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> error</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> abortController </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> fetchData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    error.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 如果已有请求在进行，取消它</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (abortController) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      abortController.</span><span style="color:#B392F0;">abort</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    abortController </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AbortController</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        signal: abortController.signal,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">response.ok) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`HTTP error! status: \${</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      data.value </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (err.name </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;AbortError&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        error.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> err.message</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      abortController </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (abortController) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      abortController.</span><span style="color:#B392F0;">abort</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading,</span></span>
<span class="line"><span style="color:#E1E4E8;">    error,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fetchData,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="在多个组件中复用" tabindex="-1">在多个组件中复用 <a class="header-anchor" href="#在多个组件中复用" aria-label="Permalink to &quot;在多个组件中复用&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// UserList.vue</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFetch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../composables/useFetch&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">users</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">fetchData</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useFetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      users,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading,</span></span>
<span class="line"><span style="color:#E1E4E8;">      error,</span></span>
<span class="line"><span style="color:#E1E4E8;">      refresh: fetchData</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// PostList.vue</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFetch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../composables/useFetch&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">posts</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">fetchData</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useFetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/posts&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      posts,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading,</span></span>
<span class="line"><span style="color:#E1E4E8;">      error,</span></span>
<span class="line"><span style="color:#E1E4E8;">      refresh: fetchData</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,37)])])}const F=n(o,[["render",e]]);export{d as __pageData,F as default};
