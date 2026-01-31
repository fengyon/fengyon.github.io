import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"Vue2 生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"生命周期概览","slug":"生命周期概览","link":"#生命周期概览","children":[]},{"level":2,"title":"创建阶段钩子","slug":"创建阶段钩子","link":"#创建阶段钩子","children":[{"level":3,"title":"beforeCreate","slug":"beforecreate","link":"#beforecreate","children":[]},{"level":3,"title":"created","slug":"created","link":"#created","children":[]}]},{"level":2,"title":"挂载阶段钩子","slug":"挂载阶段钩子","link":"#挂载阶段钩子","children":[{"level":3,"title":"beforeMount","slug":"beforemount","link":"#beforemount","children":[]},{"level":3,"title":"mounted","slug":"mounted","link":"#mounted","children":[]}]},{"level":2,"title":"更新阶段钩子","slug":"更新阶段钩子","link":"#更新阶段钩子","children":[{"level":3,"title":"beforeUpdate","slug":"beforeupdate","link":"#beforeupdate","children":[]},{"level":3,"title":"updated","slug":"updated","link":"#updated","children":[]}]},{"level":2,"title":"销毁阶段钩子","slug":"销毁阶段钩子","link":"#销毁阶段钩子","children":[{"level":3,"title":"beforeDestroy","slug":"beforedestroy","link":"#beforedestroy","children":[]},{"level":3,"title":"destroyed","slug":"destroyed","link":"#destroyed","children":[]}]},{"level":2,"title":"生命周期使用场景","slug":"生命周期使用场景","link":"#生命周期使用场景","children":[{"level":3,"title":"数据初始化","slug":"数据初始化","link":"#数据初始化","children":[]},{"level":3,"title":"DOM 操作","slug":"dom-操作","link":"#dom-操作","children":[]},{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]}]},{"level":2,"title":"组件生命周期","slug":"组件生命周期","link":"#组件生命周期","children":[{"level":3,"title":"activated 和 deactivated","slug":"activated-和-deactivated","link":"#activated-和-deactivated","children":[]}]},{"level":2,"title":"错误处理钩子","slug":"错误处理钩子","link":"#错误处理钩子","children":[{"level":3,"title":"errorCaptured","slug":"errorcaptured","link":"#errorcaptured","children":[]}]},{"level":2,"title":"生命周期执行顺序","slug":"生命周期执行顺序","link":"#生命周期执行顺序","children":[]}],"relativePath":"framework/vue2/lifecycle.md","filePath":"framework/vue2/lifecycle.md"}'),e={name:"framework/vue2/lifecycle.md"};function o(t,s,c,r,E,i){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue2/lifecycle.md for this page in Markdown format</div><h1 id="vue2-生命周期" tabindex="-1">Vue2 生命周期 <a class="header-anchor" href="#vue2-生命周期" aria-label="Permalink to &quot;Vue2 生命周期&quot;">​</a></h1><p>Vue2 实例从创建到销毁的完整过程称为生命周期，期间会运行一些叫做生命周期钩子的函数，让开发者有机会在特定阶段添加自己的代码。</p><h2 id="生命周期概览" tabindex="-1">生命周期概览 <a class="header-anchor" href="#生命周期概览" aria-label="Permalink to &quot;生命周期概览&quot;">​</a></h2><p>Vue2 实例完整的生命周期流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>创建阶段:</span></span>
<span class="line"><span>new Vue() </span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeCreate  → 实例初始化，数据观测之前</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>created       → 实例创建完成，数据观测已配置</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeMount   → 挂载开始之前，模板编译完成</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>mounted       → 实例挂载到DOM，可访问$el</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新阶段:</span></span>
<span class="line"><span>数据变化</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>beforeUpdate  → 数据更新，虚拟DOM重新渲染之前</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>updated       → 数据更新，虚拟DOM重新渲染完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>销毁阶段:</span></span>
<span class="line"><span>beforeDestroy → 实例销毁之前，实例仍完全可用</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>destroyed     → 实例销毁，所有绑定和监听器被移除</span></span></code></pre></div><h2 id="创建阶段钩子" tabindex="-1">创建阶段钩子 <a class="header-anchor" href="#创建阶段钩子" aria-label="Permalink to &quot;创建阶段钩子&quot;">​</a></h2><h3 id="beforecreate" tabindex="-1">beforeCreate <a class="header-anchor" href="#beforecreate" aria-label="Permalink to &quot;beforeCreate&quot;">​</a></h3><p>在实例初始化之后，数据观测和事件配置之前被调用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;Hello Vue!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  beforeCreate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeCreate 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.message:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message) </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.$el:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el)         </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>数据观测未初始化</li><li>方法未绑定</li><li>$el 属性不可用</li></ul><h3 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-label="Permalink to &quot;created&quot;">​</a></h3><p>实例创建完成后调用，已完成数据观测、属性和方法的运算。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;Hello Vue!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;created 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.message:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message) </span><span style="color:#6A737D;">// &#39;Hello Vue!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.$el:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el)         </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>数据观测已配置</li><li>可访问 data、computed、methods</li><li>$el 属性仍不可用 (未挂载)</li><li>适合调用 API 获取初始数据</li></ul><h2 id="挂载阶段钩子" tabindex="-1">挂载阶段钩子 <a class="header-anchor" href="#挂载阶段钩子" aria-label="Permalink to &quot;挂载阶段钩子&quot;">​</a></h2><h3 id="beforemount" tabindex="-1">beforeMount <a class="header-anchor" href="#beforemount" aria-label="Permalink to &quot;beforeMount&quot;">​</a></h3><p>在挂载开始之前被调用，相关的 render 函数首次被调用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  beforeMount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeMount 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.$el:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el)         </span><span style="color:#6A737D;">// 未挂载，显示原始HTML</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>模板编译完成</li><li>虚拟 DOM 已创建</li><li>尚未替换挂载目标元素</li></ul><h3 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-label="Permalink to &quot;mounted&quot;">​</a></h3><p>实例被挂载后调用，el 被新创建的 vm.$el 替换。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mounted 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.$el:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el)         </span><span style="color:#6A737D;">// 已挂载的DOM元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>实例已挂载到 DOM</li><li>可访问 $el 和 DOM 元素</li><li>适合执行 DOM 操作、初始化第三方库</li></ul><h2 id="更新阶段钩子" tabindex="-1">更新阶段钩子 <a class="header-anchor" href="#更新阶段钩子" aria-label="Permalink to &quot;更新阶段钩子&quot;">​</a></h2><h3 id="beforeupdate" tabindex="-1">beforeUpdate <a class="header-anchor" href="#beforeupdate" aria-label="Permalink to &quot;beforeUpdate&quot;">​</a></h3><p>数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  beforeUpdate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeUpdate 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据已更新，DOM尚未更新&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.count:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#6A737D;"> // 触发 beforeUpdate 和 updated</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>响应式数据已更新</li><li>当前 DOM 尚未更新</li><li>适合在更新前访问现有 DOM 状态</li></ul><h3 id="updated" tabindex="-1">updated <a class="header-anchor" href="#updated" aria-label="Permalink to &quot;updated&quot;">​</a></h3><p>由于数据更改导致的虚拟 DOM 重新渲染和打补丁完成后调用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  updated</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;updated 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOM已更新完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.count:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>DOM 已更新完成</li><li>可执行依赖 DOM 的操作</li><li>避免在此钩子中更改状态，可能导致无限更新循环</li></ul><h2 id="销毁阶段钩子" tabindex="-1">销毁阶段钩子 <a class="header-anchor" href="#销毁阶段钩子" aria-label="Permalink to &quot;销毁阶段钩子&quot;">​</a></h2><h3 id="beforedestroy" tabindex="-1">beforeDestroy <a class="header-anchor" href="#beforedestroy" aria-label="Permalink to &quot;beforeDestroy&quot;">​</a></h3><p>实例销毁之前调用，在这一步实例仍然完全可用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  beforeDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beforeDestroy 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;实例即将销毁，但仍可访问数据和方法&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 清理工作</span></span>
<span class="line"><span style="color:#B392F0;">    clearInterval</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.timer)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeEventListeners</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    removeEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      // 移除事件监听器</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>实例仍完全可用</li><li>适合清理定时器、取消请求、移除事件监听器</li></ul><h3 id="destroyed" tabindex="-1">destroyed <a class="header-anchor" href="#destroyed" aria-label="Permalink to &quot;destroyed&quot;">​</a></h3><p>实例销毁后调用，所有绑定和监听器都会被移除。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  destroyed</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;destroyed 钩子被调用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;实例已完全销毁&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.$el:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el)         </span><span style="color:#6A737D;">// null</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this.message:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message) </span><span style="color:#6A737D;">// 仍可访问，但已无响应式</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>特点：</p><ul><li>所有指令已解绑</li><li>所有事件监听器已移除</li><li>所有子实例也被销毁</li></ul><h2 id="生命周期使用场景" tabindex="-1">生命周期使用场景 <a class="header-anchor" href="#生命周期使用场景" aria-label="Permalink to &quot;生命周期使用场景&quot;">​</a></h2><h3 id="数据初始化" tabindex="-1">数据初始化 <a class="header-anchor" href="#数据初始化" aria-label="Permalink to &quot;数据初始化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      users: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fetchUsers</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 适合API调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> fetchUsers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.users </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">getUsers</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取用户失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="dom-操作" tabindex="-1">DOM 操作 <a class="header-anchor" href="#dom-操作" aria-label="Permalink to &quot;DOM 操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      chart: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 适合初始化需要DOM的第三方库</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.chart </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Chart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el, {</span></span>
<span class="line"><span style="color:#6A737D;">      // 图表配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  beforeDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 清理图表实例</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="事件监听" tabindex="-1">事件监听 <a class="header-anchor" href="#事件监听" aria-label="Permalink to &quot;事件监听&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 添加事件监听</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleResize)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  beforeDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 移除事件监听</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleResize)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    handleResize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      // 处理窗口大小变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-label="Permalink to &quot;组件生命周期&quot;">​</a></h2><p>组件拥有与 Vue 实例相同的生命周期，但还有一些额外的钩子：</p><h3 id="activated-和-deactivated" tabindex="-1">activated 和 deactivated <a class="header-anchor" href="#activated-和-deactivated" aria-label="Permalink to &quot;activated 和 deactivated&quot;">​</a></h3><p>keep-alive 组件特有，用于缓存组件状态。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  activated</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件被激活，从缓存中恢复&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startPolling</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  deactivated</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件被停用，进入缓存&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stopPolling</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    startPolling</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      // 开始轮询</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    stopPolling</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">      // 停止轮询</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="错误处理钩子" tabindex="-1">错误处理钩子 <a class="header-anchor" href="#错误处理钩子" aria-label="Permalink to &quot;错误处理钩子&quot;">​</a></h2><h3 id="errorcaptured" tabindex="-1">errorCaptured <a class="header-anchor" href="#errorcaptured" aria-label="Permalink to &quot;errorCaptured&quot;">​</a></h3><p>捕获来自子孙组件的错误。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  errorCaptured</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;捕获到错误:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发生错误的组件:&#39;</span><span style="color:#E1E4E8;">, vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误信息:&#39;</span><span style="color:#E1E4E8;">, info)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 可以返回 false 阻止错误继续向上传播</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="生命周期执行顺序" tabindex="-1">生命周期执行顺序 <a class="header-anchor" href="#生命周期执行顺序" aria-label="Permalink to &quot;生命周期执行顺序&quot;">​</a></h2><p>父子组件生命周期执行顺序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父 beforeCreate</span></span>
<span class="line"><span>父 created</span></span>
<span class="line"><span>父 beforeMount</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>子 beforeCreate</span></span>
<span class="line"><span>子 created</span></span>
<span class="line"><span>子 beforeMount</span></span>
<span class="line"><span>子 mounted</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>父 mounted</span></span></code></pre></div><p>更新时的执行顺序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父 beforeUpdate</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>子 beforeUpdate</span></span>
<span class="line"><span>子 updated</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>父 updated</span></span></code></pre></div>`,71)])])}const u=a(e,[["render",o]]);export{d as __pageData,u as default};
