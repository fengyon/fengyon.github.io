import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Vue 指令详解","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 Vue 指令","slug":"什么是-vue-指令","link":"#什么是-vue-指令","children":[]},{"level":2,"title":"内置指令及作用","slug":"内置指令及作用","link":"#内置指令及作用","children":[{"level":3,"title":"常用内置指令","slug":"常用内置指令","link":"#常用内置指令","children":[]}]},{"level":2,"title":"结构指令 vs 功能指令","slug":"结构指令-vs-功能指令","link":"#结构指令-vs-功能指令","children":[{"level":3,"title":"结构指令","slug":"结构指令","link":"#结构指令","children":[]},{"level":3,"title":"功能指令","slug":"功能指令","link":"#功能指令","children":[]}]},{"level":2,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[{"level":3,"title":"注册自定义指令","slug":"注册自定义指令","link":"#注册自定义指令","children":[]},{"level":3,"title":"指令钩子函数","slug":"指令钩子函数","link":"#指令钩子函数","children":[]},{"level":3,"title":"钩子函数参数","slug":"钩子函数参数","link":"#钩子函数参数","children":[]}]},{"level":2,"title":"实用自定义指令示例","slug":"实用自定义指令示例","link":"#实用自定义指令示例","children":[{"level":3,"title":"点击外部关闭指令","slug":"点击外部关闭指令","link":"#点击外部关闭指令","children":[]},{"level":3,"title":"权限控制指令","slug":"权限控制指令","link":"#权限控制指令","children":[]},{"level":3,"title":"图片懒加载指令","slug":"图片懒加载指令","link":"#图片懒加载指令","children":[]},{"level":3,"title":"复制到剪贴板指令","slug":"复制到剪贴板指令","link":"#复制到剪贴板指令","children":[]}]},{"level":2,"title":"自定义结构指令","slug":"自定义结构指令","link":"#自定义结构指令","children":[{"level":3,"title":"条件权限渲染指令","slug":"条件权限渲染指令","link":"#条件权限渲染指令","children":[]},{"level":3,"title":"延迟加载内容指令","slug":"延迟加载内容指令","link":"#延迟加载内容指令","children":[]}]}],"relativePath":"framework/vue/directives.md","filePath":"framework/vue/directives.md"}'),o={name:"framework/vue/directives.md"};function e(t,s,E,c,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/vue/directives.md for this page in Markdown format</div><h1 id="vue-指令详解" tabindex="-1">Vue 指令详解 <a class="header-anchor" href="#vue-指令详解" aria-label="Permalink to &quot;Vue 指令详解&quot;">​</a></h1><h2 id="什么是-vue-指令" tabindex="-1">什么是 Vue 指令 <a class="header-anchor" href="#什么是-vue-指令" aria-label="Permalink to &quot;什么是 Vue 指令&quot;">​</a></h2><p>Vue 指令是带有 <code>v-</code> 前缀的特殊属性，用于在模板中为元素添加特殊行为。指令的值是一个 JavaScript 表达式 (除了 <code>v-for</code>)，指令会在表达式值改变时响应式地作用在 DOM 上。</p><h2 id="内置指令及作用" tabindex="-1">内置指令及作用 <a class="header-anchor" href="#内置指令及作用" aria-label="Permalink to &quot;内置指令及作用&quot;">​</a></h2><h3 id="常用内置指令" tabindex="-1">常用内置指令 <a class="header-anchor" href="#常用内置指令" aria-label="Permalink to &quot;常用内置指令&quot;">​</a></h3><table tabindex="0"><thead><tr><th>指令</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td><code>v-text</code></td><td>更新元素的 textContent</td><td><code>v-text=&quot;message&quot;</code></td></tr><tr><td><code>v-html</code></td><td>更新元素的 innerHTML</td><td><code>v-html=&quot;htmlContent&quot;</code></td></tr><tr><td><code>v-show</code></td><td>根据条件显示/隐藏元素</td><td><code>v-show=&quot;isVisible&quot;</code></td></tr><tr><td><code>v-if</code></td><td>条件渲染元素</td><td><code>v-if=&quot;isActive&quot;</code></td></tr><tr><td><code>v-else</code></td><td>与 v-if 搭配使用</td><td><code>v-else</code></td></tr><tr><td><code>v-else-if</code></td><td>v-if 的 else-if 块</td><td><code>v-else-if=&quot;condition&quot;</code></td></tr><tr><td><code>v-for</code></td><td>循环渲染元素</td><td><code>v-for=&quot;item in items&quot;</code></td></tr><tr><td><code>v-on</code></td><td>绑定事件监听器</td><td><code>v-on:click=&quot;handleClick&quot;</code></td></tr><tr><td><code>v-bind</code></td><td>动态绑定属性</td><td><code>v-bind:class=&quot;{ active: isActive }&quot;</code></td></tr><tr><td><code>v-model</code></td><td>表单输入双向绑定</td><td><code>v-model=&quot;username&quot;</code></td></tr><tr><td><code>v-slot</code></td><td>插槽指令</td><td><code>v-slot:header</code></td></tr><tr><td><code>v-pre</code></td><td>跳过编译过程</td><td><code>v-pre</code></td></tr><tr><td><code>v-once</code></td><td>一次性插值</td><td><code>v-once</code></td></tr><tr><td><code>v-cloak</code></td><td>隐藏未编译的 Mustache 标签</td><td><code>v-cloak</code></td></tr></tbody></table><h2 id="结构指令-vs-功能指令" tabindex="-1">结构指令 vs 功能指令 <a class="header-anchor" href="#结构指令-vs-功能指令" aria-label="Permalink to &quot;结构指令 vs 功能指令&quot;">​</a></h2><h3 id="结构指令" tabindex="-1">结构指令 <a class="header-anchor" href="#结构指令" aria-label="Permalink to &quot;结构指令&quot;">​</a></h3><p>结构指令会更改 DOM 的结构，添加、移除或替换元素。</p><p><strong>特点：</strong></p><ul><li>直接影响 DOM 结构</li><li>通常与条件渲染或列表渲染相关</li><li>如：<code>v-if</code>，<code>v-for</code>，<code>v-show</code></li></ul><p><strong>适用场景：</strong></p><ul><li>条件性显示/隐藏内容</li><li>列表数据渲染</li><li>动态组件切换</li></ul><h3 id="功能指令" tabindex="-1">功能指令 <a class="header-anchor" href="#功能指令" aria-label="Permalink to &quot;功能指令&quot;">​</a></h3><p>功能指令用于添加特定功能或行为，但不改变 DOM 结构。</p><p><strong>特点：</strong></p><ul><li>为元素添加交互行为</li><li>处理事件、属性绑定等</li><li>如：<code>v-on</code>，<code>v-bind</code>，<code>v-model</code></li></ul><p><strong>适用场景：</strong></p><ul><li>事件处理</li><li>属性动态绑定</li><li>表单处理</li></ul><h2 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h2><h3 id="注册自定义指令" tabindex="-1">注册自定义指令 <a class="header-anchor" href="#注册自定义指令" aria-label="Permalink to &quot;注册自定义指令&quot;">​</a></h3><h4 id="全局注册" tabindex="-1">全局注册 <a class="header-anchor" href="#全局注册" aria-label="Permalink to &quot;全局注册&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">directive</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focus&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h4 id="局部注册" tabindex="-1">局部注册 <a class="header-anchor" href="#局部注册" aria-label="Permalink to &quot;局部注册&quot;">​</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 在 &lt;script setup&gt; 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vFocus</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> el.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> v-focus</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="指令钩子函数" tabindex="-1">指令钩子函数 <a class="header-anchor" href="#指令钩子函数" aria-label="Permalink to &quot;指令钩子函数&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> myDirective</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 在绑定元素的 attribute 前</span></span>
<span class="line"><span style="color:#6A737D;">  // 或事件监听器应用前调用</span></span>
<span class="line"><span style="color:#B392F0;">  created</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 下面会介绍各个参数的细节</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // 在元素被插入到 DOM 前调用</span></span>
<span class="line"><span style="color:#B392F0;">  beforeMount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 在绑定元素的父组件</span></span>
<span class="line"><span style="color:#6A737D;">  // 及他自己的所有子节点都挂载完成后调用</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 绑定元素的父组件更新前调用</span></span>
<span class="line"><span style="color:#B392F0;">  beforeUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 在绑定元素的父组件</span></span>
<span class="line"><span style="color:#6A737D;">  // 及他自己的所有子节点都更新后调用</span></span>
<span class="line"><span style="color:#B392F0;">  updated</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 绑定元素的父组件卸载前调用</span></span>
<span class="line"><span style="color:#B392F0;">  beforeUnmount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#6A737D;">  // 绑定元素的父组件卸载后调用</span></span>
<span class="line"><span style="color:#B392F0;">  unmounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prevVnode</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="钩子函数参数" tabindex="-1">钩子函数参数 <a class="header-anchor" href="#钩子函数参数" aria-label="Permalink to &quot;钩子函数参数&quot;">​</a></h3><ul><li><code>el</code>：指令绑定到的元素</li><li><code>binding</code>：包含以下属性的对象 <ul><li><code>value</code>：传递给指令的值</li><li><code>oldValue</code>：之前的值</li><li><code>arg</code>：传递给指令的参数</li><li><code>modifiers</code>：包含修饰符的对象</li><li><code>instance</code>：使用该指令的组件实例</li></ul></li><li><code>vnode</code>：代表绑定元素的底层 VNode</li><li><code>prevNode</code>：之前的渲染中代表指令所绑定元素的 VNode</li></ul><h2 id="实用自定义指令示例" tabindex="-1">实用自定义指令示例 <a class="header-anchor" href="#实用自定义指令示例" aria-label="Permalink to &quot;实用自定义指令示例&quot;">​</a></h2><h3 id="点击外部关闭指令" tabindex="-1">点击外部关闭指令 <a class="header-anchor" href="#点击外部关闭指令" aria-label="Permalink to &quot;点击外部关闭指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showDropdown = true&quot;</span><span style="color:#E1E4E8;">&gt;打开下拉菜单&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">      v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showDropdown&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      v-click-outside</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;closeDropdown&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dropdown&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      下拉菜单内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> showDropdown</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vClickOutside</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  beforeMount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.</span><span style="color:#B392F0;">clickOutsideEvent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(el </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> event.target </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> el.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(event.target))) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        binding.</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">(event)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, el.clickOutsideEvent)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  unmounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, el.clickOutsideEvent)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> closeDropdown</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  showDropdown.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="权限控制指令" tabindex="-1">权限控制指令 <a class="header-anchor" href="#权限控制指令" aria-label="Permalink to &quot;权限控制指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> v-permission</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;admin&#39;&quot;</span><span style="color:#E1E4E8;">&gt;管理员按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> v-permission</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;user&#39;&quot;</span><span style="color:#E1E4E8;">&gt;用户按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> v-permission</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[&#39;admin&#39;, &#39;editor&#39;]&quot;</span><span style="color:#E1E4E8;">&gt;编辑者按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useUserStore } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./stores/user&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userStore</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useUserStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vPermission</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> binding</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userRoles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> userStore.roles</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">value) </span><span style="color:#F97583;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> requiredRoles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(value) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [value]</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hasPermission</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> requiredRoles.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">role</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      userRoles.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(role),</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">hasPermission) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.parentNode?.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="图片懒加载指令" tabindex="-1">图片懒加载指令 <a class="header-anchor" href="#图片懒加载指令" aria-label="Permalink to &quot;图片懒加载指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">img</span></span>
<span class="line"><span style="color:#B392F0;">      v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image in images&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image.id&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      v-lazy-load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image.url&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;懒加载图片&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lazy-image&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> images</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;https://example.com/image1.jpg&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;https://example.com/image2.jpg&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#6A737D;">  // ... more images</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vLazyLoad</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      (</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            el.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> binding.value</span></span>
<span class="line"><span style="color:#E1E4E8;">            el.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;loaded&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rootMargin: </span><span style="color:#9ECBFF;">&#39;50px 0px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        threshold: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 保存 observer 到元素上，以便在卸载时断开连接</span></span>
<span class="line"><span style="color:#E1E4E8;">    el._lazyLoadObserver </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> observer</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  unmounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (el._lazyLoadObserver) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      el._lazyLoadObserver.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.lazy-image</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  transition</span><span style="color:#E1E4E8;">: opacity </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#79B8FF;"> ease</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.lazy-image.loaded</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="复制到剪贴板指令" tabindex="-1">复制到剪贴板指令 <a class="header-anchor" href="#复制到剪贴板指令" aria-label="Permalink to &quot;复制到剪贴板指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;textToCopy&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;输入要复制的文本&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> v-copy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;textToCopy&quot;</span><span style="color:#B392F0;"> @success</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onCopySuccess&quot;</span><span style="color:#E1E4E8;">&gt;复制文本&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#B392F0;"> v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;copyMessage&quot;</span><span style="color:#E1E4E8;">&gt;{{ copyMessage }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> textToCopy</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> copyMessage</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> vCopy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">binding.value) {</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有文本可复制&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> navigator.clipboard.</span><span style="color:#B392F0;">writeText</span><span style="color:#E1E4E8;">(binding.value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 触发成功事件</span></span>
<span class="line"><span style="color:#E1E4E8;">        el.</span><span style="color:#B392F0;">dispatchEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> CustomEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 触发错误事件</span></span>
<span class="line"><span style="color:#E1E4E8;">        el.</span><span style="color:#B392F0;">dispatchEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> CustomEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, { detail: err }))</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> onCopySuccess</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  copyMessage.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;复制成功！&#39;</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    copyMessage.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义结构指令" tabindex="-1">自定义结构指令 <a class="header-anchor" href="#自定义结构指令" aria-label="Permalink to &quot;自定义结构指令&quot;">​</a></h2><p>自定义结构指令需要操作 DOM 结构，通常使用 Vue 的渲染函数或 <code>&lt;teleport&gt;</code> 来实现。</p><h3 id="条件权限渲染指令" tabindex="-1">条件权限渲染指令 <a class="header-anchor" href="#条件权限渲染指令" aria-label="Permalink to &quot;条件权限渲染指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;用户权限演示&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 使用自定义结构指令 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">v-permission</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;admin&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;admin-panel&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;管理员面板&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;删除用户&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;修改系统设置&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">v-permission</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">v-permission</span><span style="color:#B392F0;"> :role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[&#39;admin&#39;, &#39;editor&#39;]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editor-panel&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;编辑者面板&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;发布文章&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;编辑内容&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">v-permission</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">v-permission</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user-panel&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;用户面板&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;查看内容&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">v-permission</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, resolveComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useUserStore } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./stores/user&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userStore</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useUserStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> VPermission</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">role</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> userRoles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> userStore.roles</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">role) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> slots.</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">?.()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> requiredRoles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(role) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> role </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [role]</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> hasPermission</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> requiredRoles.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> userRoles.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(r))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (hasPermission) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> slots.</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">?.()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为组件添加 displayName 便于调试</span></span>
<span class="line"><span style="color:#E1E4E8;">VPermission.props </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="延迟加载内容指令" tabindex="-1">延迟加载内容指令 <a class="header-anchor" href="#延迟加载内容指令" aria-label="Permalink to &quot;延迟加载内容指令&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;延迟加载演示&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">v-lazy-load</span><span style="color:#B392F0;"> :timeout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1000&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;heavy-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;这个内容会延迟加载&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这里可能包含大量图片、视频或其他重型资源&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        &lt;!-- 模拟重型内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;n in 10&quot;</span><span style="color:#B392F0;"> :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;n&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content-block&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          内容块 {{ n }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading-spinner&quot;</span><span style="color:#E1E4E8;">&gt;⏳ 加载中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">v-lazy-load</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">v-lazy-load</span><span style="color:#B392F0;"> :timeout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2000&quot;</span><span style="color:#B392F0;"> :immediate</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;another-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;另一个延迟加载的内容&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;这个内容需要用户交互或滚动到视口才加载&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading-spinner&quot;</span><span style="color:#E1E4E8;">&gt;🔄 等待触发...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">v-lazy-load</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, ref, onMounted, onUnmounted, resolveComponent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> VLazyLoad</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">attrs</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isLoaded</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(props.immediate </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isInViewport</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> observer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> timeoutId </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> loadContent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isLoaded.value) </span><span style="color:#F97583;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    timeoutId </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isLoaded.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, props.timeout </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> setupIntersectionObserver</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (props.immediate </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entry</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            isInViewport.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#B392F0;">            loadContent</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      loadContent</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在客户端才执行</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> el</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-lazy-load]&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (el) {</span></span>
<span class="line"><span style="color:#B392F0;">        setupIntersectionObserver</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  onUnmounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (timeoutId) {</span></span>
<span class="line"><span style="color:#B392F0;">      clearTimeout</span><span style="color:#E1E4E8;">(timeoutId)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (observer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      observer.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isLoaded.value) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">attrs, </span><span style="color:#9ECBFF;">&#39;data-lazy-load&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        slots.</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">?.(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">attrs, </span><span style="color:#9ECBFF;">&#39;data-lazy-load&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        slots.</span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">?.(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">VLazyLoad.props </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;timeout&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;immediate&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.loading-spinner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f5f5f5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.content-block</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#e9e9e9</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.heavy-content</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.another-content</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #ddd</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div>`,45)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
