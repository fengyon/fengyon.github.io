import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"Angualr Rxjs","description":"","frontmatter":{},"headers":[{"level":2,"title":"RxJS 概述","slug":"rxjs-概述","link":"#rxjs-概述","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"Observable","slug":"observable","link":"#observable","children":[]},{"level":3,"title":"Observer","slug":"observer","link":"#observer","children":[]},{"level":3,"title":"Subscription","slug":"subscription","link":"#subscription","children":[]}]},{"level":2,"title":"创建 Observable","slug":"创建-observable","link":"#创建-observable","children":[{"level":3,"title":"创建方法","slug":"创建方法","link":"#创建方法","children":[]},{"level":3,"title":"创建示例","slug":"创建示例","link":"#创建示例","children":[]}]},{"level":2,"title":"常用操作符","slug":"常用操作符","link":"#常用操作符","children":[{"level":3,"title":"转换操作符","slug":"转换操作符","link":"#转换操作符","children":[]},{"level":3,"title":"过滤操作符","slug":"过滤操作符","link":"#过滤操作符","children":[]},{"level":3,"title":"组合操作符","slug":"组合操作符","link":"#组合操作符","children":[]}]},{"level":2,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[{"level":3,"title":"错误处理操作符","slug":"错误处理操作符","link":"#错误处理操作符","children":[]}]},{"level":2,"title":"Subject 类型","slug":"subject-类型","link":"#subject-类型","children":[{"level":3,"title":"Subject","slug":"subject","link":"#subject","children":[]},{"level":3,"title":"Subject 变体","slug":"subject-变体","link":"#subject-变体","children":[]}]},{"level":2,"title":"Angular 集成","slug":"angular-集成","link":"#angular-集成","children":[{"level":3,"title":"HTTP 请求","slug":"http-请求","link":"#http-请求","children":[]},{"level":3,"title":"表单处理","slug":"表单处理","link":"#表单处理","children":[]},{"level":3,"title":"路由事件","slug":"路由事件","link":"#路由事件","children":[]}]},{"level":2,"title":"高级模式","slug":"高级模式","link":"#高级模式","children":[{"level":3,"title":"高阶 Observable","slug":"高阶-observable","link":"#高阶-observable","children":[]},{"level":3,"title":"自定义操作符","slug":"自定义操作符","link":"#自定义操作符","children":[]}]},{"level":2,"title":"内存管理","slug":"内存管理","link":"#内存管理","children":[{"level":3,"title":"订阅管理","slug":"订阅管理","link":"#订阅管理","children":[]}]},{"level":2,"title":"调试技巧","slug":"调试技巧","link":"#调试技巧","children":[{"level":3,"title":"调试操作符","slug":"调试操作符","link":"#调试操作符","children":[]},{"level":3,"title":"错误调试","slug":"错误调试","link":"#错误调试","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"操作符选择","slug":"操作符选择","link":"#操作符选择","children":[]},{"level":3,"title":"避免常见陷阱","slug":"避免常见陷阱","link":"#避免常见陷阱","children":[]}]}],"relativePath":"framework/angular/rxjs.md","filePath":"framework/angular/rxjs.md"}'),e={name:"framework/angular/rxjs.md"};function t(o,s,c,i,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/rxjs.md for this page in Markdown format</div><h1 id="angualr-rxjs" tabindex="-1">Angualr Rxjs <a class="header-anchor" href="#angualr-rxjs" aria-label="Permalink to &quot;Angualr Rxjs&quot;">​</a></h1><h2 id="rxjs-概述" tabindex="-1">RxJS 概述 <a class="header-anchor" href="#rxjs-概述" aria-label="Permalink to &quot;RxJS 概述&quot;">​</a></h2><p>RxJS (Reactive Extensions for JavaScript) 是 Angular 中用于响应式编程的库，它使用 Observable 序列来处理异步事件和数据流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>RxJS 核心：</span></span>
<span class="line"><span>数据流 → Observable → 操作符变换 → Observer 订阅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Angular 中的应用：</span></span>
<span class="line"><span>HTTP请求、表单事件、路由事件、状态管理</span></span></code></pre></div><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><h3 id="observable" tabindex="-1">Observable <a class="header-anchor" href="#observable" aria-label="Permalink to &quot;Observable&quot;">​</a></h3><p>表示一个可观察的数据流，可以发出多个值 over time。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Observable 生命周期：</span></span>
<span class="line"><span>创建 → 订阅 → 执行 → 发出值 → 完成/错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据流：</span></span>
<span class="line"><span>---值1---值2---值3---|完成-&gt;</span></span></code></pre></div><h3 id="observer" tabindex="-1">Observer <a class="header-anchor" href="#observer" aria-label="Permalink to &quot;Observer&quot;">​</a></h3><p>观察者，用于接收 Observable 发出的值。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Observer 接口：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  next: (value) =&gt; { ... },    // 接收值</span></span>
<span class="line"><span>  error: (error) =&gt; { ... },   // 处理错误  </span></span>
<span class="line"><span>  complete: () =&gt; { ... }      // 完成通知</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="subscription" tabindex="-1">Subscription <a class="header-anchor" href="#subscription" aria-label="Permalink to &quot;Subscription&quot;">​</a></h3><p>表示 Observable 的执行，用于取消订阅。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>订阅管理：</span></span>
<span class="line"><span>const subscription = observable.subscribe(...)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>取消订阅：</span></span>
<span class="line"><span>subscription.unsubscribe() ← 清理资源，防止内存泄漏</span></span></code></pre></div><h2 id="创建-observable" tabindex="-1">创建 Observable <a class="header-anchor" href="#创建-observable" aria-label="Permalink to &quot;创建 Observable&quot;">​</a></h2><h3 id="创建方法" tabindex="-1">创建方法 <a class="header-anchor" href="#创建方法" aria-label="Permalink to &quot;创建方法&quot;">​</a></h3><p>多种方式创建 Observable 数据流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>创建方式：</span></span>
<span class="line"><span>of(1,2,3)        → 固定值序列</span></span>
<span class="line"><span>from([1,2,3])    → 数组转换</span></span>
<span class="line"><span>fromEvent(click)  → 事件监听</span></span>
<span class="line"><span>interval(1000)    → 定时器</span></span>
<span class="line"><span>ajax(url)         → HTTP请求</span></span></code></pre></div><h3 id="创建示例" tabindex="-1">创建示例 <a class="header-anchor" href="#创建示例" aria-label="Permalink to &quot;创建示例&quot;">​</a></h3><p>实际创建 Observable 的代码示例。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 创建简单序列</span></span>
<span class="line"><span>const numbers$ = of(1, 2, 3, 4, 5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从事件创建</span></span>
<span class="line"><span>const clicks$ = fromEvent(button, &#39;click&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从 Promise 创建  </span></span>
<span class="line"><span>const data$ = from(fetch(&#39;/api/data&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义 Observable</span></span>
<span class="line"><span>const custom$ = new Observable(observer =&gt; {</span></span>
<span class="line"><span>  observer.next(&#39;Hello&#39;);</span></span>
<span class="line"><span>  observer.next(&#39;World&#39;);</span></span>
<span class="line"><span>  observer.complete();</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="常用操作符" tabindex="-1">常用操作符 <a class="header-anchor" href="#常用操作符" aria-label="Permalink to &quot;常用操作符&quot;">​</a></h2><h3 id="转换操作符" tabindex="-1">转换操作符 <a class="header-anchor" href="#转换操作符" aria-label="Permalink to &quot;转换操作符&quot;">​</a></h3><p>对数据流中的值进行转换。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>转换操作符：</span></span>
<span class="line"><span>map      → 值转换：x → f(x)</span></span>
<span class="line"><span>pluck    → 提取属性：obj → obj.property</span></span>
<span class="line"><span>scan     → 累加计算：类似 reduce 但发出每个中间值</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">numbers$.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">  map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">),        </span><span style="color:#6A737D;">// 1,2,3 → 2,4,6</span></span>
<span class="line"><span style="color:#B392F0;">  pluck</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">),          </span><span style="color:#6A737D;">// {name:&#39;A&#39;} → &#39;A&#39;</span></span>
<span class="line"><span style="color:#B392F0;">  scan</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 1,2,3 → 1,3,6</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="过滤操作符" tabindex="-1">过滤操作符 <a class="header-anchor" href="#过滤操作符" aria-label="Permalink to &quot;过滤操作符&quot;">​</a></h3><p>根据条件过滤数据流中的值。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>过滤操作符：</span></span>
<span class="line"><span>filter     → 条件过滤：x → 符合条件才发出</span></span>
<span class="line"><span>take       → 取前N个值</span></span>
<span class="line"><span>skip       → 跳过前N个值  </span></span>
<span class="line"><span>distinct   → 去重</span></span>
<span class="line"><span>debounceTime → 防抖</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">clicks$.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">  debounceTime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">),      </span><span style="color:#6A737D;">// 防抖 300ms</span></span>
<span class="line"><span style="color:#B392F0;">  filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> event.target.checked), </span><span style="color:#6A737D;">// 过滤选中事件</span></span>
<span class="line"><span style="color:#B392F0;">  take</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)                 </span><span style="color:#6A737D;">// 只取前5次点击</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="组合操作符" tabindex="-1">组合操作符 <a class="header-anchor" href="#组合操作符" aria-label="Permalink to &quot;组合操作符&quot;">​</a></h3><p>组合多个 Observable。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组合操作符：</span></span>
<span class="line"><span>merge      → 合并多个流</span></span>
<span class="line"><span>concat     → 顺序连接流</span></span>
<span class="line"><span>combineLatest → 组合最新值</span></span>
<span class="line"><span>withLatestFrom → 与另一个流的最新值组合</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 合并用户输入和定时刷新</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userInput$</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fromEvent</span><span style="color:#E1E4E8;">(input, </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> autoRefresh$</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> interval</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data$</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> combineLatest</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  userInput$.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">debounceTime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoRefresh$</span></span>
<span class="line"><span style="color:#E1E4E8;">]).</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">  switchMap</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> fetchData</span><span style="color:#E1E4E8;">(query))</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h2><h3 id="错误处理操作符" tabindex="-1">错误处理操作符 <a class="header-anchor" href="#错误处理操作符" aria-label="Permalink to &quot;错误处理操作符&quot;">​</a></h3><p>处理 Observable 执行过程中出现的错误。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>错误处理：</span></span>
<span class="line"><span>catchError → 捕获错误并返回新Observable</span></span>
<span class="line"><span>retry      → 重试指定次数</span></span>
<span class="line"><span>retryWhen  → 自定义重试逻辑</span></span>
<span class="line"><span>finalize   → 无论成功失败都会执行</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/data&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">  retry</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 失败时重试3次</span></span>
<span class="line"><span style="color:#B392F0;">  catchError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> of</span><span style="color:#E1E4E8;">([]); </span><span style="color:#6A737D;">// 返回空数组作为降级</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#B392F0;">  finalize</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 无论成功失败都隐藏loading</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="subject-类型" tabindex="-1">Subject 类型 <a class="header-anchor" href="#subject-类型" aria-label="Permalink to &quot;Subject 类型&quot;">​</a></h2><h3 id="subject" tabindex="-1">Subject <a class="header-anchor" href="#subject" aria-label="Permalink to &quot;Subject&quot;">​</a></h3><p>既是 Observable 又是 Observer，支持多播。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Subject 特性：</span></span>
<span class="line"><span>多播 - 多个观察者共享同一个执行</span></span>
<span class="line"><span>热 Observable - 无论何时订阅都接收后续值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用模式：</span></span>
<span class="line"><span>subject.next(value) → 所有订阅者收到值</span></span></code></pre></div><h3 id="subject-变体" tabindex="-1">Subject 变体 <a class="header-anchor" href="#subject-变体" aria-label="Permalink to &quot;Subject 变体&quot;">​</a></h3><p>不同类型的 Subject 满足不同场景需求。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Subject 类型：</span></span>
<span class="line"><span>Subject        → 无初始值，只发送订阅后的值</span></span>
<span class="line"><span>BehaviorSubject → 有初始值，发送最新值和后续值</span></span>
<span class="line"><span>ReplaySubject  → 重放指定数量的历史值</span></span>
<span class="line"><span>AsyncSubject   → 只发送完成前的最后一个值</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// BehaviorSubject - 状态管理</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> state$</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BehaviorSubject</span><span style="color:#E1E4E8;">({ loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, data: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 订阅者立即收到当前状态</span></span>
<span class="line"><span style="color:#E1E4E8;">state$.</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(state));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新状态，所有订阅者收到新状态</span></span>
<span class="line"><span style="color:#E1E4E8;">state$.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">({ loading: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, data: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> });</span></span></code></pre></div><h2 id="angular-集成" tabindex="-1">Angular 集成 <a class="header-anchor" href="#angular-集成" aria-label="Permalink to &quot;Angular 集成&quot;">​</a></h2><h3 id="http-请求" tabindex="-1">HTTP 请求 <a class="header-anchor" href="#http-请求" aria-label="Permalink to &quot;HTTP 请求&quot;">​</a></h3><p>HttpClient 返回 Observable，便于响应式处理。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP 响应流：</span></span>
<span class="line"><span>请求发出 → Observable → 操作符处理 → 组件订阅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.data$ = http.get(&#39;/api/data&#39;).pipe(</span></span>
<span class="line"><span>  map(response =&gt; response.data),</span></span>
<span class="line"><span>  catchError(() =&gt; of([]))</span></span>
<span class="line"><span>);</span></span></code></pre></div><h3 id="表单处理" tabindex="-1">表单处理 <a class="header-anchor" href="#表单处理" aria-label="Permalink to &quot;表单处理&quot;">​</a></h3><p>响应式表单的值变化作为 Observable 流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>表单值流：</span></span>
<span class="line"><span>表单值变化 → valueChanges → 操作符处理 → 执行操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.searchForm.valueChanges.pipe(</span></span>
<span class="line"><span>  debounceTime(300),</span></span>
<span class="line"><span>  distinctUntilChanged(),</span></span>
<span class="line"><span>  switchMap(query =&gt; this.searchService.search(query))</span></span>
<span class="line"><span>).subscribe(results =&gt; {</span></span>
<span class="line"><span>  this.results = results;</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="路由事件" tabindex="-1">路由事件 <a class="header-anchor" href="#路由事件" aria-label="Permalink to &quot;路由事件&quot;">​</a></h3><p>监听路由变化作为 Observable 流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由事件流：</span></span>
<span class="line"><span>导航事件 → router.events → 过滤特定事件 → 处理逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.router.events.pipe(</span></span>
<span class="line"><span>  filter(event =&gt; event instanceof NavigationEnd),</span></span>
<span class="line"><span>  map(() =&gt; this.router.url)</span></span>
<span class="line"><span>).subscribe(url =&gt; {</span></span>
<span class="line"><span>  this.trackPageView(url);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="高级模式" tabindex="-1">高级模式 <a class="header-anchor" href="#高级模式" aria-label="Permalink to &quot;高级模式&quot;">​</a></h2><h3 id="高阶-observable" tabindex="-1">高阶 Observable <a class="header-anchor" href="#高阶-observable" aria-label="Permalink to &quot;高阶 Observable&quot;">​</a></h3><p>处理嵌套的 Observable 流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>高阶 Observable 操作符：</span></span>
<span class="line"><span>switchMap → 切换到新Observable，取消前一个</span></span>
<span class="line"><span>mergeMap  → 合并多个Observable</span></span>
<span class="line"><span>concatMap → 顺序执行Observable</span></span>
<span class="line"><span>exhaustMap → 忽略新值直到当前完成</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 搜索建议 - 使用 switchMap 取消之前的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">searchInput$.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">  debounceTime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">  switchMap</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">query) </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> of</span><span style="color:#E1E4E8;">([]);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.searchService.</span><span style="color:#B392F0;">getSuggestions</span><span style="color:#E1E4E8;">(query);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="自定义操作符" tabindex="-1">自定义操作符 <a class="header-anchor" href="#自定义操作符" aria-label="Permalink to &quot;自定义操作符&quot;">​</a></h3><p>创建可重用的操作符逻辑。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>自定义操作符：</span></span>
<span class="line"><span>函数接收配置 → 返回操作符函数 → 在 pipe 中使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>function logOperator&lt;T&gt;(message: string) {</span></span>
<span class="line"><span>  return (source: Observable&lt;T&gt;) =&gt; source.pipe(</span></span>
<span class="line"><span>    tap(value =&gt; console.log(message, value))</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>data$.pipe(</span></span>
<span class="line"><span>  logOperator(&#39;收到数据:&#39;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h2><h3 id="订阅管理" tabindex="-1">订阅管理 <a class="header-anchor" href="#订阅管理" aria-label="Permalink to &quot;订阅管理&quot;">​</a></h3><p>避免内存泄漏，正确管理订阅。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>订阅管理策略：</span></span>
<span class="line"><span>手动取消订阅 → subscription.unsubscribe()</span></span>
<span class="line"><span>AsyncPipe → 模板中自动管理</span></span>
<span class="line"><span>takeUntil → 使用 Subject 控制生命周期</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// takeUntil 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">private destroy$ </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Subject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">ngOnInit</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.data$ </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.service.</span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">    takeUntil</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.destroy$)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">ngOnDestroy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.destroy$.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.destroy$.</span><span style="color:#B392F0;">complete</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="调试技巧" tabindex="-1">调试技巧 <a class="header-anchor" href="#调试技巧" aria-label="Permalink to &quot;调试技巧&quot;">​</a></h2><h3 id="调试操作符" tabindex="-1">调试操作符 <a class="header-anchor" href="#调试操作符" aria-label="Permalink to &quot;调试操作符&quot;">​</a></h3><p>使用 tap 操作符进行调试。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>调试流：</span></span>
<span class="line"><span>数据流 → tap(日志) → 后续操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>data$.pipe(</span></span>
<span class="line"><span>  tap(value =&gt; console.log(&#39;原始值:&#39;, value)),</span></span>
<span class="line"><span>  map(value =&gt; transform(value)),</span></span>
<span class="line"><span>  tap(value =&gt; console.log(&#39;转换后:&#39;, value))</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="错误调试" tabindex="-1">错误调试 <a class="header-anchor" href="#错误调试" aria-label="Permalink to &quot;错误调试&quot;">​</a></h3><p>定位 Observable 链中的错误位置。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>错误定位：</span></span>
<span class="line"><span>操作符链 → 某个操作符出错 → 错误冒泡</span></span>
<span class="line"><span></span></span>
<span class="line"><span>调试方法：</span></span>
<span class="line"><span>在每个可能出错的操作符前添加 tap 记录状态</span></span>
<span class="line"><span>使用 catchError 在特定位置处理错误</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><h3 id="操作符选择" tabindex="-1">操作符选择 <a class="header-anchor" href="#操作符选择" aria-label="Permalink to &quot;操作符选择&quot;">​</a></h3><p>根据场景选择合适的操作符提升性能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>性能考虑：</span></span>
<span class="line"><span>switchMap vs mergeMap → 是否需要取消前一个请求</span></span>
<span class="line"><span>debounceTime vs throttleTime → 防抖还是节流</span></span>
<span class="line"><span>share vs shareReplay → 共享执行还是重放值</span></span></code></pre></div><h3 id="避免常见陷阱" tabindex="-1">避免常见陷阱 <a class="header-anchor" href="#避免常见陷阱" aria-label="Permalink to &quot;避免常见陷阱&quot;">​</a></h3><p>防止性能问题和内存泄漏。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>常见陷阱：</span></span>
<span class="line"><span>├── 忘记取消订阅</span></span>
<span class="line"><span>├── 过度使用内存密集型操作符</span></span>
<span class="line"><span>├── 不必要的重复订阅</span></span>
<span class="line"><span>├── 在 pipe 中创建新对象导致频繁变更检测</span></span>
<span class="line"><span>└── 使用不合适的操作符组合</span></span></code></pre></div>`,114)])])}const y=a(e,[["render",t]]);export{u as __pageData,y as default};
