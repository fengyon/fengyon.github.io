import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue2 响应式原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"响应式系统概览","slug":"响应式系统概览","link":"#响应式系统概览","children":[]},{"level":2,"title":"数据劫持","slug":"数据劫持","link":"#数据劫持","children":[{"level":3,"title":"对象属性劫持","slug":"对象属性劫持","link":"#对象属性劫持","children":[]},{"level":3,"title":"深度观测","slug":"深度观测","link":"#深度观测","children":[]}]},{"level":2,"title":"依赖收集","slug":"依赖收集","link":"#依赖收集","children":[{"level":3,"title":"Dep 类","slug":"dep-类","link":"#dep-类","children":[]},{"level":3,"title":"Watcher 类","slug":"watcher-类","link":"#watcher-类","children":[]},{"level":3,"title":"依赖收集流程","slug":"依赖收集流程","link":"#依赖收集流程","children":[]}]},{"level":2,"title":"完整的响应式实现","slug":"完整的响应式实现","link":"#完整的响应式实现","children":[{"level":3,"title":"Observer 类","slug":"observer-类","link":"#observer-类","children":[]},{"level":3,"title":"完整的 defineReactive","slug":"完整的-definereactive","link":"#完整的-definereactive","children":[]}]},{"level":2,"title":"数组的响应式处理","slug":"数组的响应式处理","link":"#数组的响应式处理","children":[{"level":3,"title":"数组方法重写","slug":"数组方法重写","link":"#数组方法重写","children":[]},{"level":3,"title":"数组响应式示意图","slug":"数组响应式示意图","link":"#数组响应式示意图","children":[]}]},{"level":2,"title":"响应式系统的局限性","slug":"响应式系统的局限性","link":"#响应式系统的局限性","children":[{"level":3,"title":"对象属性添加/删除","slug":"对象属性添加-删除","link":"#对象属性添加-删除","children":[]},{"level":3,"title":"数组索引和长度","slug":"数组索引和长度","link":"#数组索引和长度","children":[]}]},{"level":2,"title":"异步更新队列","slug":"异步更新队列","link":"#异步更新队列","children":[{"level":3,"title":"nextTick 机制","slug":"nexttick-机制","link":"#nexttick-机制","children":[]},{"level":3,"title":"更新队列实现","slug":"更新队列实现","link":"#更新队列实现","children":[]}]},{"level":2,"title":"虚拟 DOM 与 Diff 算法","slug":"虚拟-dom-与-diff-算法","link":"#虚拟-dom-与-diff-算法","children":[{"level":3,"title":"虚拟 DOM 结构","slug":"虚拟-dom-结构","link":"#虚拟-dom-结构","children":[]},{"level":3,"title":"Diff 算法流程","slug":"diff-算法流程","link":"#diff-算法流程","children":[]}]},{"level":2,"title":"响应式原理总结图","slug":"响应式原理总结图","link":"#响应式原理总结图","children":[]},{"level":2,"title":"性能优化提示","slug":"性能优化提示","link":"#性能优化提示","children":[]}],"relativePath":"framework/vue2/reactive.md","filePath":"framework/vue2/reactive.md"}'),e={name:"framework/vue2/reactive.md"};function o(c,s,t,r,E,i){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue2/reactive.md for this page in Markdown format</div><h1 id="vue2-响应式原理" tabindex="-1">Vue2 响应式原理 <a class="header-anchor" href="#vue2-响应式原理" aria-label="Permalink to &quot;Vue2 响应式原理&quot;">​</a></h1><p>Vue2 的响应式系统是其核心特性，通过数据劫持和依赖收集实现数据变化时的自动更新。</p><h2 id="响应式系统概览" tabindex="-1">响应式系统概览 <a class="header-anchor" href="#响应式系统概览" aria-label="Permalink to &quot;响应式系统概览&quot;">​</a></h2><p>Vue2 响应式系统的基本工作流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据劫持 → 依赖收集 → 派发更新</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>模板编译 → 虚拟DOM → 视图更新</span></span></code></pre></div><h2 id="数据劫持" tabindex="-1">数据劫持 <a class="header-anchor" href="#数据劫持" aria-label="Permalink to &quot;数据劫持&quot;">​</a></h2><p>Vue2 使用 Object.defineProperty 实现数据劫持，将数据属性转为 getter/setter。</p><h3 id="对象属性劫持" tabindex="-1">对象属性劫持 <a class="header-anchor" href="#对象属性劫持" aria-label="Permalink to &quot;对象属性劫持&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> defineReactive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enumerable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    get</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reactiveGetter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`读取属性 \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">val</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reactiveSetter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设置属性 \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">newVal</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (newVal </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> val) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">      val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVal</span></span>
<span class="line"><span style="color:#6A737D;">      // 触发更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始对象: { name: &#39;张三&#39; }</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>数据劫持后:</span></span>
<span class="line"><span>get name() → 收集依赖</span></span>
<span class="line"><span>set name() → 通知更新</span></span></code></pre></div><h3 id="深度观测" tabindex="-1">深度观测 <a class="header-anchor" href="#深度观测" aria-label="Permalink to &quot;深度观测&quot;">​</a></h3><p>Vue2 递归遍历对象所有属性，实现深度响应式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> observe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 遍历对象属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(data).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    defineReactive</span><span style="color:#E1E4E8;">(data, key, data[key])</span></span>
<span class="line"><span style="color:#6A737D;">    // 递归处理嵌套对象</span></span>
<span class="line"><span style="color:#B392F0;">    observe</span><span style="color:#E1E4E8;">(data[key])</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="依赖收集" tabindex="-1">依赖收集 <a class="header-anchor" href="#依赖收集" aria-label="Permalink to &quot;依赖收集&quot;">​</a></h2><p>每个响应式属性都有一个对应的 Dep 实例，用于管理所有依赖 (Watcher)。</p><h3 id="dep-类" tabindex="-1">Dep 类 <a class="header-anchor" href="#dep-类" aria-label="Permalink to &quot;Dep 类&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Dep</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [] </span><span style="color:#6A737D;">// 订阅者列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(sub)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removeSub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> index</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(sub)</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  depend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Dep.target) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      Dep.target.</span><span style="color:#B392F0;">addDep</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  notify</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sub</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> sub.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Dep.target </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#6A737D;"> // 当前正在计算的 Watcher</span></span></code></pre></div><h3 id="watcher-类" tabindex="-1">Watcher 类 <a class="header-anchor" href="#watcher-类" aria-label="Permalink to &quot;Watcher 类&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Watcher</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expOrFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.vm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.getter </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> expOrFn</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cb</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Dep.target </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.getter.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">    Dep.target </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addDep</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(dep)</span></span>
<span class="line"><span style="color:#E1E4E8;">    dep.</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  update</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oldValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.value</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cb.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vm, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value, oldValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="依赖收集流程" tabindex="-1">依赖收集流程 <a class="header-anchor" href="#依赖收集流程" aria-label="Permalink to &quot;依赖收集流程&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模板编译 → 创建 Watcher</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>读取数据 → 触发 getter</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>dep.depend() → 将 Watcher 添加到 Dep</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>建立: 数据 ←dep→ Watcher 关系</span></span></code></pre></div><h2 id="完整的响应式实现" tabindex="-1">完整的响应式实现 <a class="header-anchor" href="#完整的响应式实现" aria-label="Permalink to &quot;完整的响应式实现&quot;">​</a></h2><h3 id="observer-类" tabindex="-1">Observer 类 <a class="header-anchor" href="#observer-类" aria-label="Permalink to &quot;Observer 类&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Observer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dep </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Dep</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 数组响应式处理</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">observeArray</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">walk</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  walk</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(obj).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      defineReactive</span><span style="color:#E1E4E8;">(obj, key, obj[key])</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  observeArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      observe</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="完整的-definereactive" tabindex="-1">完整的 defineReactive <a class="header-anchor" href="#完整的-definereactive" aria-label="Permalink to &quot;完整的 defineReactive&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> defineReactive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dep</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Dep</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 递归处理嵌套对象</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> childOb </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> observe</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enumerable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    configurable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    get</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reactiveGetter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      // 依赖收集</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (Dep.target) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dep.</span><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (childOb) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          childOb.dep.</span><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reactiveSetter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (newVal </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> val) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVal</span></span>
<span class="line"><span style="color:#6A737D;">      // 新值也需要转为响应式</span></span>
<span class="line"><span style="color:#E1E4E8;">      childOb </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> observe</span><span style="color:#E1E4E8;">(newVal)</span></span>
<span class="line"><span style="color:#6A737D;">      // 通知更新</span></span>
<span class="line"><span style="color:#E1E4E8;">      dep.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="数组的响应式处理" tabindex="-1">数组的响应式处理 <a class="header-anchor" href="#数组的响应式处理" aria-label="Permalink to &quot;数组的响应式处理&quot;">​</a></h2><p>由于 Object.defineProperty 对数组索引变化监听有限，Vue2 通过重写数组方法实现响应式。</p><h3 id="数组方法重写" tabindex="-1">数组方法重写 <a class="header-anchor" href="#数组方法重写" aria-label="Permalink to &quot;数组方法重写&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> arrayProto</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> arrayMethods</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(arrayProto)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> methodsToPatch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;push&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pop&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;shift&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;unshift&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;splice&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;sort&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;reverse&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">methodsToPatch.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">method</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> original</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> arrayProto[method]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  def</span><span style="color:#E1E4E8;">(arrayMethods, method, </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> mutator</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> original.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ob</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.__ob__</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 对新增元素进行响应式处理</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> inserted</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (method) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;push&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;unshift&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        inserted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;splice&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        inserted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (inserted) ob.</span><span style="color:#B392F0;">observeArray</span><span style="color:#E1E4E8;">(inserted)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 通知更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    ob.dep.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="数组响应式示意图" tabindex="-1">数组响应式示意图 <a class="header-anchor" href="#数组响应式示意图" aria-label="Permalink to &quot;数组响应式示意图&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始数组: arr = [1, 2, 3]</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>重写方法: arr.push = function() { ...通知更新... }</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>arr.push(4) → 触发重写方法 → 通知依赖更新</span></span></code></pre></div><h2 id="响应式系统的局限性" tabindex="-1">响应式系统的局限性 <a class="header-anchor" href="#响应式系统的局限性" aria-label="Permalink to &quot;响应式系统的局限性&quot;">​</a></h2><h3 id="对象属性添加-删除" tabindex="-1">对象属性添加/删除 <a class="header-anchor" href="#对象属性添加-删除" aria-label="Permalink to &quot;对象属性添加/删除&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> vm </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      a: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// obj.a 是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.obj.a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#6A737D;"> // 触发更新</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// obj.b 不是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.obj.b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#6A737D;"> // 不会触发更新</span></span></code></pre></div><p>解决方案：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Vue.set 或 this.$set</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vm.obj, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或使用 Object.assign</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">({}, vm.obj, { b: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> })</span></span></code></pre></div><h3 id="数组索引和长度" tabindex="-1">数组索引和长度 <a class="header-anchor" href="#数组索引和长度" aria-label="Permalink to &quot;数组索引和长度&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> vm </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 以下操作不会触发视图更新</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.items[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;x&#39;</span><span style="color:#6A737D;">       // 直接设置索引</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.items.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#6A737D;">     // 直接修改长度</span></span></code></pre></div><p>解决方案：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Vue.set 或 splice</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(vm.items, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.items.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.items.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 修改长度</span></span></code></pre></div><h2 id="异步更新队列" tabindex="-1">异步更新队列 <a class="header-anchor" href="#异步更新队列" aria-label="Permalink to &quot;异步更新队列&quot;">​</a></h2><p>Vue2 使用异步更新策略优化性能，将多个数据变化合并为一次更新。</p><h3 id="nexttick-机制" tabindex="-1">nextTick 机制 <a class="header-anchor" href="#nexttick-机制" aria-label="Permalink to &quot;nextTick 机制&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // DOM 更新后执行</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件内使用</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // DOM 更新后执行</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>更新流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据变化 → 将 Watcher 加入队列</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>nextTick → 执行队列中所有 Watcher</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>批量更新 → 虚拟DOM对比 → 视图更新</span></span></code></pre></div><h3 id="更新队列实现" tabindex="-1">更新队列实现 <a class="header-anchor" href="#更新队列实现" aria-label="Permalink to &quot;更新队列实现&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> queue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> waiting </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> queueWatcher</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 去重，避免重复更新</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> id</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> watcher.id</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">queue.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">w</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> w.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> id)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(watcher)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">waiting) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    waiting </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#B392F0;">    nextTick</span><span style="color:#E1E4E8;">(flushSchedulerQueue)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> flushSchedulerQueue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  queue.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    watcher.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  queue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  waiting </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="虚拟-dom-与-diff-算法" tabindex="-1">虚拟 DOM 与 Diff 算法 <a class="header-anchor" href="#虚拟-dom-与-diff-算法" aria-label="Permalink to &quot;虚拟 DOM 与 Diff 算法&quot;">​</a></h2><p>响应式数据变化后，通过虚拟 DOM 对比最小化 DOM 操作。</p><h3 id="虚拟-dom-结构" tabindex="-1">虚拟 DOM 结构 <a class="header-anchor" href="#虚拟-dom-结构" aria-label="Permalink to &quot;虚拟 DOM 结构&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 简化的 VNode</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#B392F0;">  tag</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">: { </span><span style="color:#B392F0;">attrs</span><span style="color:#E1E4E8;">: {}, </span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">: {} },</span></span>
<span class="line"><span style="color:#B392F0;">  children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { tag: </span><span style="color:#9ECBFF;">&#39;span&#39;</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="diff-算法流程" tabindex="-1">Diff 算法流程 <a class="header-anchor" href="#diff-算法流程" aria-label="Permalink to &quot;Diff 算法流程&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>旧虚拟DOM ←→ 新虚拟DOM</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>对比节点类型</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>对比属性</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>对比子节点（key优化）</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>最小DOM操作</span></span></code></pre></div><h2 id="响应式原理总结图" tabindex="-1">响应式原理总结图 <a class="header-anchor" href="#响应式原理总结图" aria-label="Permalink to &quot;响应式原理总结图&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件初始化</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>数据观测 (Observer)</span></span>
<span class="line"><span>    ↓          ↑</span></span>
<span class="line"><span>属性劫持 (defineReactive) → Dep</span></span>
<span class="line"><span>    ↓          ↑</span></span>
<span class="line"><span>模板编译 → 创建 Watcher → 依赖收集</span></span>
<span class="line"><span>    ↓                    ↑</span></span>
<span class="line"><span>数据变化 → 触发 setter → 派发更新</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>异步队列 → 虚拟DOM对比 → 视图更新</span></span></code></pre></div><h2 id="性能优化提示" tabindex="-1">性能优化提示 <a class="header-anchor" href="#性能优化提示" aria-label="Permalink to &quot;性能优化提示&quot;">​</a></h2><ul><li>避免大型响应式对象层级过深</li><li>合理使用 Object.freeze() 避免不必要的响应式</li><li>对于纯展示的大数据列表，可使用非响应式数据</li><li>合理使用 key 属性优化列表渲染</li><li>避免在模板中使用复杂表达式</li></ul>`,61)])])}const d=a(e,[["render",o]]);export{F as __pageData,d as default};
