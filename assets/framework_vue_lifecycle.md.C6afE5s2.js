import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"Vue 生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是生命周期？","slug":"什么是生命周期","link":"#什么是生命周期","children":[]},{"level":2,"title":"Vue 3 生命周期钩子","slug":"vue-3-生命周期钩子","link":"#vue-3-生命周期钩子","children":[]},{"level":2,"title":"Script Setup 风格代码示例","slug":"script-setup-风格代码示例","link":"#script-setup-风格代码示例","children":[]},{"level":2,"title":"Keep-alive 相关生命周期","slug":"keep-alive-相关生命周期","link":"#keep-alive-相关生命周期","children":[]},{"level":2,"title":"生命周期适用场景","slug":"生命周期适用场景","link":"#生命周期适用场景","children":[{"level":3,"title":"onBeforeMount & onMounted","slug":"onbeforemount-onmounted","link":"#onbeforemount-onmounted","children":[]},{"level":3,"title":"onBeforeUpdate & onUpdated","slug":"onbeforeupdate-onupdated","link":"#onbeforeupdate-onupdated","children":[]},{"level":3,"title":"onBeforeUnmount & onUnmounted","slug":"onbeforeunmount-onunmounted","link":"#onbeforeunmount-onunmounted","children":[]},{"level":3,"title":"onErrorCaptured","slug":"onerrorcaptured","link":"#onerrorcaptured","children":[]}]},{"level":2,"title":"生命周期执行顺序","slug":"生命周期执行顺序","link":"#生命周期执行顺序","children":[{"level":3,"title":"单个组件生命周期流程","slug":"单个组件生命周期流程","link":"#单个组件生命周期流程","children":[]},{"level":3,"title":"父子组件生命周期顺序","slug":"父子组件生命周期顺序","link":"#父子组件生命周期顺序","children":[]}]},{"level":2,"title":"生命周期渲染示意图","slug":"生命周期渲染示意图","link":"#生命周期渲染示意图","children":[]},{"level":2,"title":"最佳实践与注意事项","slug":"最佳实践与注意事项","link":"#最佳实践与注意事项","children":[{"level":3,"title":"避免在 onUpdated 中修改状态","slug":"避免在-onupdated-中修改状态","link":"#避免在-onupdated-中修改状态","children":[]},{"level":3,"title":"合理使用异步操作","slug":"合理使用异步操作","link":"#合理使用异步操作","children":[]},{"level":3,"title":"清理副作用","slug":"清理副作用","link":"#清理副作用","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"framework/vue/lifecycle.md","filePath":"framework/vue/lifecycle.md"}'),o={name:"framework/vue/lifecycle.md"};function e(t,s,c,r,E,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/lifecycle.md for this page in Markdown format</div><h1 id="vue-生命周期" tabindex="-1">Vue 生命周期 <a class="header-anchor" href="#vue-生命周期" aria-label="Permalink to &quot;Vue 生命周期&quot;">​</a></h1><h2 id="什么是生命周期" tabindex="-1">什么是生命周期？ <a class="header-anchor" href="#什么是生命周期" aria-label="Permalink to &quot;什么是生命周期？&quot;">​</a></h2><p>生命周期 (Lifecycle) 是指 Vue 实例从创建到销毁的整个过程。在这个过程中，Vue 提供了一系列的<strong>生命周期钩子函数</strong> (Lifecycle Hooks)，允许开发者在特定的阶段执行自定义代码。</p><p>理解生命周期对于编写高质量的 Vue 应用至关重要，它能帮助我们：</p><ul><li>在合适的时机执行初始化逻辑</li><li>管理副作用 (如事件监听器、定时器)</li><li>优化性能</li><li>避免常见的内存泄漏问题</li></ul><h2 id="vue-3-生命周期钩子" tabindex="-1">Vue 3 生命周期钩子 <a class="header-anchor" href="#vue-3-生命周期钩子" aria-label="Permalink to &quot;Vue 3 生命周期钩子&quot;">​</a></h2><p>Vue 3 提供了以下生命周期钩子：</p><table tabindex="0"><thead><tr><th>生命周期钩子</th><th>执行时机</th></tr></thead><tbody><tr><td><code>onBeforeMount</code></td><td>在挂载开始之前被调用</td></tr><tr><td><code>onMounted</code></td><td>在组件挂载完成后调用</td></tr><tr><td><code>onBeforeUpdate</code></td><td>在响应式数据变化后，DOM 更新前调用</td></tr><tr><td><code>onUpdated</code></td><td>在 DOM 更新完成后调用</td></tr><tr><td><code>onBeforeUnmount</code></td><td>在组件实例卸载之前调用</td></tr><tr><td><code>onUnmounted</code></td><td>在组件实例卸载完成后调用</td></tr><tr><td><code>onErrorCaptured</code></td><td>在捕获了后代组件传递的错误时调用</td></tr><tr><td><code>onRenderTracked</code></td><td>当响应式依赖被组件的渲染作用追踪时调用（开发模式）</td></tr><tr><td><code>onRenderTriggered</code></td><td>当响应式依赖触发组件重新渲染时调用（开发模式）</td></tr><tr><td><code>onActivated</code></td><td>当被 keep-alive 缓存的组件激活时调用</td></tr><tr><td><code>onDeactivated</code></td><td>当被 keep-alive 缓存的组件失活时调用</td></tr></tbody></table><h2 id="script-setup-风格代码示例" tabindex="-1">Script Setup 风格代码示例 <a class="header-anchor" href="#script-setup-风格代码示例" aria-label="Permalink to &quot;Script Setup 风格代码示例&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;计数: {{ count }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;increment&quot;</span><span style="color:#E1E4E8;">&gt;增加&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toggleChild&quot;</span><span style="color:#E1E4E8;">&gt;切换子组件&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ChildComponent</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showChild&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ref,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeMount,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onMounted,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeUpdate,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onUpdated,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onBeforeUnmount,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onUnmounted,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onErrorCaptured,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ChildComponent </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ChildComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应式数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> title</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Vue 生命周期演示&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> showChild</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> toggleChild</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  showChild.value </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">showChild.value</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生命周期钩子</span></span>
<span class="line"><span style="color:#B392F0;">onBeforeMount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🚀 onBeforeMount: 组件即将挂载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOM 元素:&#39;</span><span style="color:#E1E4E8;">, document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// null，此时 DOM 还未创建</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ onMounted: 组件已挂载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOM 元素:&#39;</span><span style="color:#E1E4E8;">, document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 可访问 DOM 元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件已插入到 DOM 中&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onBeforeUpdate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔄 onBeforeUpdate: 组件即将更新&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前计数:&#39;</span><span style="color:#E1E4E8;">, count.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOM 内容:&#39;</span><span style="color:#E1E4E8;">, document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">).textContent)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onUpdated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📝 onUpdated: 组件已更新&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新后计数:&#39;</span><span style="color:#E1E4E8;">, count.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新后 DOM 内容:&#39;</span><span style="color:#E1E4E8;">, document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">).textContent)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⏳ onBeforeUnmount: 组件即将卸载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 清理工作，如清除定时器、取消事件监听等</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🗑️ onUnmounted: 组件已卸载&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onErrorCaptured</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">instance</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ onErrorCaptured: 捕获到错误&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;组件实例:&#39;</span><span style="color:#E1E4E8;">, instance)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误信息:&#39;</span><span style="color:#E1E4E8;">, info)</span></span>
<span class="line"><span style="color:#6A737D;">  // 返回 false 阻止错误继续向上传播</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开发环境下的调试钩子</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onRenderTracked, onRenderTriggered } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onRenderTracked</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🎯 依赖被追踪:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onRenderTriggered</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🎯 依赖触发渲染:&#39;</span><span style="color:#E1E4E8;">, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="keep-alive-相关生命周期" tabindex="-1">Keep-alive 相关生命周期 <a class="header-anchor" href="#keep-alive-相关生命周期" aria-label="Permalink to &quot;Keep-alive 相关生命周期&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onActivated, onDeactivated } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onActivated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🎯 onActivated: 组件被激活&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 恢复组件状态，如重新开始动画、重新获取数据等</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onDeactivated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;💤 onDeactivated: 组件被停用&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">  // 暂停组件活动，如停止动画、取消请求等</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="生命周期适用场景" tabindex="-1">生命周期适用场景 <a class="header-anchor" href="#生命周期适用场景" aria-label="Permalink to &quot;生命周期适用场景&quot;">​</a></h2><h3 id="onbeforemount-onmounted" tabindex="-1">onBeforeMount &amp; onMounted <a class="header-anchor" href="#onbeforemount-onmounted" aria-label="Permalink to &quot;onBeforeMount &amp; onMounted&quot;">​</a></h3><p><strong>适用场景：</strong></p><ul><li><strong>DOM 操作</strong>：在 <code>onMounted</code> 中访问或操作 DOM 元素</li><li><strong>数据初始化</strong>：从 API 获取初始数据</li><li><strong>第三方库初始化</strong>：初始化图表、地图等需要 DOM 的库</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> chartContainer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 初始化图表</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (chartContainer.value) {</span></span>
<span class="line"><span style="color:#B392F0;">    initChart</span><span style="color:#E1E4E8;">(chartContainer.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取初始数据</span></span>
<span class="line"><span style="color:#B392F0;">  fetchInitialData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="onbeforeupdate-onupdated" tabindex="-1">onBeforeUpdate &amp; onUpdated <a class="header-anchor" href="#onbeforeupdate-onupdated" aria-label="Permalink to &quot;onBeforeUpdate &amp; onUpdated&quot;">​</a></h3><p><strong>适用场景：</strong></p><ul><li><strong>DOM 更新后的操作</strong>：在 DOM 更新后执行某些操作</li><li><strong>基于 DOM 状态的逻辑</strong>：根据更新后的 DOM 状态执行逻辑</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onUpdated } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> messages</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> messageContainer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onUpdated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 自动滚动到最新消息</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (messageContainer.value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    messageContainer.value.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> messageContainer.value.scrollHeight</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="onbeforeunmount-onunmounted" tabindex="-1">onBeforeUnmount &amp; onUnmounted <a class="header-anchor" href="#onbeforeunmount-onunmounted" aria-label="Permalink to &quot;onBeforeUnmount &amp; onUnmounted&quot;">​</a></h3><p><strong>适用场景：</strong></p><ul><li><strong>资源清理</strong>：清除定时器、取消网络请求</li><li><strong>事件监听器移除</strong>：移除全局事件监听器</li><li><strong>内存泄漏预防</strong>：清理第三方库实例</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onUnmounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> intervalId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动定时器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> startTimer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  intervalId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;定时器执行...&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 清理定时器</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (intervalId) {</span></span>
<span class="line"><span style="color:#B392F0;">    clearInterval</span><span style="color:#E1E4E8;">(intervalId)</span></span>
<span class="line"><span style="color:#E1E4E8;">    intervalId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 移除事件监听器</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, handleResize)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="onerrorcaptured" tabindex="-1">onErrorCaptured <a class="header-anchor" href="#onerrorcaptured" aria-label="Permalink to &quot;onErrorCaptured&quot;">​</a></h3><p><strong>适用场景：</strong></p><ul><li><strong>错误边界</strong>：捕获子组件错误并显示降级 UI</li><li><strong>错误报告</strong>：将错误发送到错误监控服务</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hasError&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;error-fallback&quot;</span><span style="color:#E1E4E8;">&gt;组件渲染失败&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#B392F0;"> v-else</span><span style="color:#FDAEB7;font-style:italic;"> /</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> hasError</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onErrorCaptured</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  hasError.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;捕获到组件错误:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#6A737D;">  // 发送错误到监控服务</span></span>
<span class="line"><span style="color:#B392F0;">  reportError</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> false</span><span style="color:#6A737D;"> // 阻止错误继续传播</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="生命周期执行顺序" tabindex="-1">生命周期执行顺序 <a class="header-anchor" href="#生命周期执行顺序" aria-label="Permalink to &quot;生命周期执行顺序&quot;">​</a></h2><h3 id="单个组件生命周期流程" tabindex="-1">单个组件生命周期流程 <a class="header-anchor" href="#单个组件生命周期流程" aria-label="Permalink to &quot;单个组件生命周期流程&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>创建阶段：</span></span>
<span class="line"><span>1. setup() 执行</span></span>
<span class="line"><span>2. onBeforeMount()</span></span>
<span class="line"><span>3. 编译模板 → 创建虚拟 DOM → 渲染真实 DOM</span></span>
<span class="line"><span>4. onMounted()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新阶段：</span></span>
<span class="line"><span>1. 响应式数据变化</span></span>
<span class="line"><span>2. onBeforeUpdate()</span></span>
<span class="line"><span>3. 重新渲染虚拟 DOM → 更新真实 DOM</span></span>
<span class="line"><span>4. onUpdated()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>卸载阶段：</span></span>
<span class="line"><span>1. onBeforeUnmount()</span></span>
<span class="line"><span>2. 移除 DOM 元素、清理副作用</span></span>
<span class="line"><span>3. onUnmounted()</span></span></code></pre></div><h3 id="父子组件生命周期顺序" tabindex="-1">父子组件生命周期顺序 <a class="header-anchor" href="#父子组件生命周期顺序" aria-label="Permalink to &quot;父子组件生命周期顺序&quot;">​</a></h3><p><strong>挂载时：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父组件 onBeforeMount</span></span>
<span class="line"><span>子组件 onBeforeMount</span></span>
<span class="line"><span>子组件 onMounted</span></span>
<span class="line"><span>父组件 onMounted</span></span></code></pre></div><p><strong>更新时：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父组件 onBeforeUpdate</span></span>
<span class="line"><span>子组件 onBeforeUpdate</span></span>
<span class="line"><span>子组件 onUpdated</span></span>
<span class="line"><span>父组件 onUpdated</span></span></code></pre></div><p><strong>卸载时：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父组件 onBeforeUnmount</span></span>
<span class="line"><span>子组件 onBeforeUnmount</span></span>
<span class="line"><span>子组件 onUnmounted</span></span>
<span class="line"><span>父组件 onUnmounted</span></span></code></pre></div><h2 id="生命周期渲染示意图" tabindex="-1">生命周期渲染示意图 <a class="header-anchor" href="#生命周期渲染示意图" aria-label="Permalink to &quot;生命周期渲染示意图&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue 组件生命周期流程</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                        创建阶段                                 │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│  setup() 执行                                                  │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  onBeforeMount()   ← 此时 DOM 尚未创建                         │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  编译模板 → 创建虚拟 DOM → 渲染真实 DOM                        │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  onMounted()      ← 此时可访问 DOM 元素                        │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                                │</span></span>
<span class="line"><span>                                │ 响应式数据变化</span></span>
<span class="line"><span>                                ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                        更新阶段                                 │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│  onBeforeUpdate() ← DOM 更新前，可访问旧 DOM 状态              │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  重新渲染虚拟 DOM → 更新真实 DOM                               │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  onUpdated()      ← DOM 已更新，可访问新 DOM 状态              │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                                │</span></span>
<span class="line"><span>                                │ 组件卸载</span></span>
<span class="line"><span>                                ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                        卸载阶段                                 │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│  onBeforeUnmount() ← 组件实例仍完全可用                         │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  清理工作：移除 DOM、取消事件监听、清理定时器等                 │</span></span>
<span class="line"><span>│    ↓                                                           │</span></span>
<span class="line"><span>│  onUnmounted()     ← 组件已完全卸载                            │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Keep-alive 组件特殊流程：</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  激活: onActivated()    ← 组件从缓存中激活时调用                │</span></span>
<span class="line"><span>│  停用: onDeactivated()  ← 组件被缓存时调用                     │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="最佳实践与注意事项" tabindex="-1">最佳实践与注意事项 <a class="header-anchor" href="#最佳实践与注意事项" aria-label="Permalink to &quot;最佳实践与注意事项&quot;">​</a></h2><h3 id="避免在-onupdated-中修改状态" tabindex="-1">避免在 <code>onUpdated</code> 中修改状态 <a class="header-anchor" href="#避免在-onupdated-中修改状态" aria-label="Permalink to &quot;避免在 \`onUpdated\` 中修改状态&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// ❌ 避免这样做 - 可能导致无限循环</span></span>
<span class="line"><span style="color:#B392F0;">onUpdated</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (someCondition) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count.value</span><span style="color:#F97583;">++</span><span style="color:#6A737D;"> // 这会再次触发更新</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ✅ 更好的做法 - 使用计算属性或侦听器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> computedCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> someCondition </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> count.value </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> count.value</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="合理使用异步操作" tabindex="-1">合理使用异步操作 <a class="header-anchor" href="#合理使用异步操作" aria-label="Permalink to &quot;合理使用异步操作&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // ✅ 可以在生命周期钩子中使用 async/await</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data.value </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据获取失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="清理副作用" tabindex="-1">清理副作用 <a class="header-anchor" href="#清理副作用" aria-label="Permalink to &quot;清理副作用&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onUnmounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 事件监听器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, handleClick)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定时器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> timer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // ✅ 记得清理所有副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, handleClick)</span></span>
<span class="line"><span style="color:#B392F0;">  clearInterval</span><span style="color:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Vue 生命周期是 Vue 框架的核心概念之一，它为开发者提供了在组件不同阶段执行代码的能力：</p><ol><li><strong>理解执行时机</strong>：每个生命周期钩子都有其特定的执行时机和用途</li><li><strong>合理使用</strong>：根据需求选择合适的生命周期钩子，避免滥用</li><li><strong>资源管理</strong>：在卸载阶段及时清理资源，防止内存泄漏</li><li><strong>性能优化</strong>：利用生命周期进行性能监控和优化</li><li><strong>错误处理</strong>：使用 <code>onErrorCaptured</code> 构建健壮的错误处理机制</li></ol><p>掌握 Vue 生命周期将帮助你编写出更加健壮、可维护的 Vue 应用程序，并能够更好地理解和调试组件的行为。</p>`,53)])])}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
