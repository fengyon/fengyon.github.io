import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"Angular HTTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTTP 客户端概述","slug":"http-客户端概述","link":"#http-客户端概述","children":[]},{"level":2,"title":"HttpClient 基础","slug":"httpclient-基础","link":"#httpclient-基础","children":[{"level":3,"title":"模块配置","slug":"模块配置","link":"#模块配置","children":[]},{"level":3,"title":"基本请求","slug":"基本请求","link":"#基本请求","children":[]}]},{"level":2,"title":"请求发送","slug":"请求发送","link":"#请求发送","children":[{"level":3,"title":"GET 请求","slug":"get-请求","link":"#get-请求","children":[]},{"level":3,"title":"POST 请求","slug":"post-请求","link":"#post-请求","children":[]},{"level":3,"title":"请求配置","slug":"请求配置","link":"#请求配置","children":[]}]},{"level":2,"title":"响应处理","slug":"响应处理","link":"#响应处理","children":[{"level":3,"title":"RxJS 观察者模式","slug":"rxjs-观察者模式","link":"#rxjs-观察者模式","children":[]},{"level":3,"title":"响应类型","slug":"响应类型","link":"#响应类型","children":[]}]},{"level":2,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[{"level":3,"title":"错误捕获","slug":"错误捕获","link":"#错误捕获","children":[]},{"level":3,"title":"HTTP 错误状态","slug":"http-错误状态","link":"#http-错误状态","children":[]}]},{"level":2,"title":"高级特性","slug":"高级特性","link":"#高级特性","children":[{"level":3,"title":"请求拦截器","slug":"请求拦截器","link":"#请求拦截器","children":[]},{"level":3,"title":"响应拦截器","slug":"响应拦截器","link":"#响应拦截器","children":[]}]},{"level":2,"title":"实战示例","slug":"实战示例","link":"#实战示例","children":[{"level":3,"title":"服务封装","slug":"服务封装","link":"#服务封装","children":[]},{"level":3,"title":"数据转换","slug":"数据转换","link":"#数据转换","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"请求取消","slug":"请求取消","link":"#请求取消","children":[]},{"level":3,"title":"请求重试","slug":"请求重试","link":"#请求重试","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"错误处理策略","slug":"错误处理策略","link":"#错误处理策略","children":[]},{"level":3,"title":"类型安全","slug":"类型安全","link":"#类型安全","children":[]}]},{"level":2,"title":"测试策略","slug":"测试策略","link":"#测试策略","children":[{"level":3,"title":"HTTP 测试","slug":"http-测试","link":"#http-测试","children":[]}]},{"level":2,"title":"安全考虑","slug":"安全考虑","link":"#安全考虑","children":[{"level":3,"title":"安全实践","slug":"安全实践","link":"#安全实践","children":[]}]}],"relativePath":"framework/angular/http.md","filePath":"framework/angular/http.md"}'),e={name:"framework/angular/http.md"};function t(i,s,c,o,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/http.md for this page in Markdown format</div><h1 id="angular-http" tabindex="-1">Angular HTTP <a class="header-anchor" href="#angular-http" aria-label="Permalink to &quot;Angular HTTP&quot;">​</a></h1><h2 id="http-客户端概述" tabindex="-1">HTTP 客户端概述 <a class="header-anchor" href="#http-客户端概述" aria-label="Permalink to &quot;HTTP 客户端概述&quot;">​</a></h2><p>Angular 提供了 HttpClient 服务用于与后端 API 进行 HTTP 通信，支持请求发送、响应处理、错误管理和拦截器等功能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP 通信流程：</span></span>
<span class="line"><span>Angular应用 → HttpClient → HTTP请求 → 后端API</span></span>
<span class="line"><span>Angular应用 ← HttpClient ← HTTP响应 ← 后端API</span></span></code></pre></div><h2 id="httpclient-基础" tabindex="-1">HttpClient 基础 <a class="header-anchor" href="#httpclient-基础" aria-label="Permalink to &quot;HttpClient 基础&quot;">​</a></h2><h3 id="模块配置" tabindex="-1">模块配置 <a class="header-anchor" href="#模块配置" aria-label="Permalink to &quot;模块配置&quot;">​</a></h3><p>在使用 HttpClient 前需要导入 HttpClientModule。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块配置：</span></span>
<span class="line"><span>AppModule</span></span>
<span class="line"><span>├── imports: [HttpClientModule]</span></span>
<span class="line"><span>└── 组件/服务中注入 HttpClient</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用流程：</span></span>
<span class="line"><span>导入模块 → 注入服务 → 发送请求</span></span></code></pre></div><h3 id="基本请求" tabindex="-1">基本请求 <a class="header-anchor" href="#基本请求" aria-label="Permalink to &quot;基本请求&quot;">​</a></h3><p>HttpClient 支持多种 HTTP 方法。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求方法：</span></span>
<span class="line"><span>GET    - 获取数据</span></span>
<span class="line"><span>POST   - 创建数据  </span></span>
<span class="line"><span>PUT    - 更新数据</span></span>
<span class="line"><span>DELETE - 删除数据</span></span>
<span class="line"><span>PATCH  - 部分更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>http.get(url)     → 获取资源</span></span>
<span class="line"><span>http.post(url, data) → 创建资源</span></span>
<span class="line"><span>http.put(url, data)  → 更新资源</span></span>
<span class="line"><span>http.delete(url)   → 删除资源</span></span></code></pre></div><h2 id="请求发送" tabindex="-1">请求发送 <a class="header-anchor" href="#请求发送" aria-label="Permalink to &quot;请求发送&quot;">​</a></h2><h3 id="get-请求" tabindex="-1">GET 请求 <a class="header-anchor" href="#get-请求" aria-label="Permalink to &quot;GET 请求&quot;">​</a></h3><p>从服务器获取数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>GET 请求流程：</span></span>
<span class="line"><span>组件/服务 → http.get() → 服务器 → 返回数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.http.get&lt;User[]&gt;(&#39;/api/users&#39;)</span></span>
<span class="line"><span>  .subscribe(users =&gt; {</span></span>
<span class="line"><span>    this.users = users;</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h3 id="post-请求" tabindex="-1">POST 请求 <a class="header-anchor" href="#post-请求" aria-label="Permalink to &quot;POST 请求&quot;">​</a></h3><p>向服务器发送数据创建新资源。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>POST 请求流程：</span></span>
<span class="line"><span>准备数据 → http.post() → 服务器 → 返回创建结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>const user = { name: &#39;John&#39;, email: &#39;john@example.com&#39; };</span></span>
<span class="line"><span>this.http.post&lt;User&gt;(&#39;/api/users&#39;, user)</span></span>
<span class="line"><span>  .subscribe(newUser =&gt; {</span></span>
<span class="line"><span>    this.users.push(newUser);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h3 id="请求配置" tabindex="-1">请求配置 <a class="header-anchor" href="#请求配置" aria-label="Permalink to &quot;请求配置&quot;">​</a></h3><p>通过配置对象定制请求行为。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求配置选项：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  headers: HttpHeaders,    // 请求头</span></span>
<span class="line"><span>  params: HttpParams,      // 查询参数</span></span>
<span class="line"><span>  observe: &#39;response&#39;,     // 观察完整响应</span></span>
<span class="line"><span>  responseType: &#39;json&#39;     // 响应类型</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="响应处理" tabindex="-1">响应处理 <a class="header-anchor" href="#响应处理" aria-label="Permalink to &quot;响应处理&quot;">​</a></h2><h3 id="rxjs-观察者模式" tabindex="-1">RxJS 观察者模式 <a class="header-anchor" href="#rxjs-观察者模式" aria-label="Permalink to &quot;RxJS 观察者模式&quot;">​</a></h3><p>HttpClient 返回 Observable，使用订阅模式处理响应。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Observable 流：</span></span>
<span class="line"><span>http请求 → Observable → 订阅处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>订阅方法：</span></span>
<span class="line"><span>.subscribe(</span></span>
<span class="line"><span>  data =&gt; { /* 成功处理 */ },</span></span>
<span class="line"><span>  error =&gt; { /* 错误处理 */ },</span></span>
<span class="line"><span>  () =&gt; { /* 完成处理 */ }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="响应类型" tabindex="-1">响应类型 <a class="header-anchor" href="#响应类型" aria-label="Permalink to &quot;响应类型&quot;">​</a></h3><p>指定期望的响应数据类型，获得 TypeScript 类型检查。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型安全响应：</span></span>
<span class="line"><span>this.http.get&lt;User[]&gt;(&#39;/api/users&#39;)</span></span>
<span class="line"><span>           ↑ 类型参数</span></span>
<span class="line"><span>响应自动转换为 User[] 类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>好处：</span></span>
<span class="line"><span>- 编译时类型检查</span></span>
<span class="line"><span>- 智能提示支持</span></span>
<span class="line"><span>- 减少运行时错误</span></span></code></pre></div><h2 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h2><h3 id="错误捕获" tabindex="-1">错误捕获 <a class="header-anchor" href="#错误捕获" aria-label="Permalink to &quot;错误捕获&quot;">​</a></h3><p>使用 catchError 操作符捕获和处理 HTTP 错误。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>错误处理流程：</span></span>
<span class="line"><span>请求 → 可能失败 → 错误捕获 → 优雅处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.http.get(&#39;/api/data&#39;).pipe(</span></span>
<span class="line"><span>  catchError(error =&gt; {</span></span>
<span class="line"><span>    console.error(&#39;请求失败:&#39;, error);</span></span>
<span class="line"><span>    return of([]); // 返回默认值</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="http-错误状态" tabindex="-1">HTTP 错误状态 <a class="header-anchor" href="#http-错误状态" aria-label="Permalink to &quot;HTTP 错误状态&quot;">​</a></h3><p>根据不同的 HTTP 状态码进行针对性处理。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>常见HTTP状态码：</span></span>
<span class="line"><span>200 - 成功</span></span>
<span class="line"><span>400 - 客户端错误</span></span>
<span class="line"><span>401 - 未授权  </span></span>
<span class="line"><span>404 - 未找到</span></span>
<span class="line"><span>500 - 服务器错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理策略：</span></span>
<span class="line"><span>4xx错误 → 用户操作问题 → 提示用户</span></span>
<span class="line"><span>5xx错误 → 服务器问题 → 重试或报错</span></span></code></pre></div><h2 id="高级特性" tabindex="-1">高级特性 <a class="header-anchor" href="#高级特性" aria-label="Permalink to &quot;高级特性&quot;">​</a></h2><h3 id="请求拦截器" tabindex="-1">请求拦截器 <a class="header-anchor" href="#请求拦截器" aria-label="Permalink to &quot;请求拦截器&quot;">​</a></h3><p>在请求发送前或响应接收后插入处理逻辑。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>拦截器链：</span></span>
<span class="line"><span>请求 → 拦截器A → 拦截器B → 服务器</span></span>
<span class="line"><span>响应 ← 拦截器B ← 拦截器A ← 服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拦截器用途：</span></span>
<span class="line"><span>- 添加认证头</span></span>
<span class="line"><span>- 记录日志</span></span>
<span class="line"><span>- 错误统一处理</span></span>
<span class="line"><span>- 请求/响应转换</span></span></code></pre></div><h3 id="响应拦截器" tabindex="-1">响应拦截器 <a class="header-anchor" href="#响应拦截器" aria-label="Permalink to &quot;响应拦截器&quot;">​</a></h3><p>处理服务器返回的响应数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>响应处理：</span></span>
<span class="line"><span>原始响应 → 拦截器转换 → 组件使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>拦截器统一提取 data 字段：</span></span>
<span class="line"><span>原始响应: { data: [...], status: 200 }</span></span>
<span class="line"><span>转换后: [...]</span></span></code></pre></div><h2 id="实战示例" tabindex="-1">实战示例 <a class="header-anchor" href="#实战示例" aria-label="Permalink to &quot;实战示例&quot;">​</a></h2><h3 id="服务封装" tabindex="-1">服务封装 <a class="header-anchor" href="#服务封装" aria-label="Permalink to &quot;服务封装&quot;">​</a></h3><p>将 HTTP 操作封装在服务中，实现关注点分离。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务封装结构：</span></span>
<span class="line"><span>┌─────────────────┐    HTTP调用    ┌─────────────────┐</span></span>
<span class="line"><span>│   组件          │ ────────────&gt; │  数据服务        │ ───&gt; API</span></span>
<span class="line"><span>│  - 展示逻辑     │               │  - 数据获取      │</span></span>
<span class="line"><span>│  - 用户交互     │ &lt;──────────── │  - 数据处理      │</span></span>
<span class="line"><span>└─────────────────┘   数据返回     └─────────────────┘</span></span></code></pre></div><p>示例服务：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Injectable</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UserService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">private</span><span style="color:#FFAB70;"> http</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> HttpClient</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getUsers</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Observable</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">[]&gt; {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">[]&gt;(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Observable</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.http.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">, user);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="数据转换" tabindex="-1">数据转换 <a class="header-anchor" href="#数据转换" aria-label="Permalink to &quot;数据转换&quot;">​</a></h3><p>使用 RxJS 操作符转换响应数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据转换流：</span></span>
<span class="line"><span>原始数据 → map转换 → filter过滤 → 最终数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.http.get&lt;User[]&gt;(&#39;/api/users&#39;).pipe(</span></span>
<span class="line"><span>  map(users =&gt; users.filter(user =&gt; user.active)),</span></span>
<span class="line"><span>  map(users =&gt; users.map(user =&gt; ({ ...user, name: user.name.toUpperCase() })))</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><h3 id="请求取消" tabindex="-1">请求取消 <a class="header-anchor" href="#请求取消" aria-label="Permalink to &quot;请求取消&quot;">​</a></h3><p>通过取消订阅来取消未完成的 HTTP 请求。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求生命周期：</span></span>
<span class="line"><span>订阅开始 → 请求发送 → 取消订阅 → 请求中止</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>private subscription: Subscription;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.subscription = this.http.get(&#39;/api/data&#39;).subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件销毁时取消请求</span></span>
<span class="line"><span>ngOnDestroy() {</span></span>
<span class="line"><span>  this.subscription.unsubscribe();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="请求重试" tabindex="-1">请求重试 <a class="header-anchor" href="#请求重试" aria-label="Permalink to &quot;请求重试&quot;">​</a></h3><p>对失败的请求进行自动重试。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>重试机制：</span></span>
<span class="line"><span>请求失败 → 等待延迟 → 重新尝试 → 最多N次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>this.http.get(&#39;/api/data&#39;).pipe(</span></span>
<span class="line"><span>  retry(3) // 最多重试3次</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="错误处理策略" tabindex="-1">错误处理策略 <a class="header-anchor" href="#错误处理策略" aria-label="Permalink to &quot;错误处理策略&quot;">​</a></h3><p>统一的错误处理方案。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>错误处理层次：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   全局错误处理   │ ← 应用级错误监控</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   服务级错误处理 │ ← 业务逻辑错误处理</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   组件级错误处理 │ ← 用户界面错误提示</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h3 id="类型安全" tabindex="-1">类型安全 <a class="header-anchor" href="#类型安全" aria-label="Permalink to &quot;类型安全&quot;">​</a></h3><p>充分利用 TypeScript 的类型系统。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型安全实践：</span></span>
<span class="line"><span>定义接口 → 指定类型 → 编译检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>export interface User {</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  email: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.http.get&lt;User[]&gt;(&#39;/api/users&#39;) // 返回 User[] 类型</span></span></code></pre></div><h2 id="测试策略" tabindex="-1">测试策略 <a class="header-anchor" href="#测试策略" aria-label="Permalink to &quot;测试策略&quot;">​</a></h2><h3 id="http-测试" tabindex="-1">HTTP 测试 <a class="header-anchor" href="#http-测试" aria-label="Permalink to &quot;HTTP 测试&quot;">​</a></h3><p>使用 HttpClientTestingModule 测试 HTTP 请求。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>测试设置：</span></span>
<span class="line"><span>TestBed配置 → 模拟后端 → 验证请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>beforeEach(() =&gt; {</span></span>
<span class="line"><span>  TestBed.configureTestingModule({</span></span>
<span class="line"><span>    imports: [HttpClientTestingModule]</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>it(&#39;应该获取用户&#39;, () =&gt; {</span></span>
<span class="line"><span>  const req = httpMock.expectOne(&#39;/api/users&#39;);</span></span>
<span class="line"><span>  expect(req.request.method).toBe(&#39;GET&#39;);</span></span>
<span class="line"><span>  req.flush(mockUsers);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="安全考虑" tabindex="-1">安全考虑 <a class="header-anchor" href="#安全考虑" aria-label="Permalink to &quot;安全考虑&quot;">​</a></h2><h3 id="安全实践" tabindex="-1">安全实践 <a class="header-anchor" href="#安全实践" aria-label="Permalink to &quot;安全实践&quot;">​</a></h3><p>保护应用免受常见 Web 安全威胁。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安全措施：</span></span>
<span class="line"><span>├── 输入验证</span></span>
<span class="line"><span>├── CSRF 防护</span></span>
<span class="line"><span>├── XSS 预防</span></span>
<span class="line"><span>├── 认证头管理</span></span>
<span class="line"><span>└── HTTPS 强制</span></span></code></pre></div>`,94)])])}const b=a(e,[["render",t]]);export{u as __pageData,b as default};
