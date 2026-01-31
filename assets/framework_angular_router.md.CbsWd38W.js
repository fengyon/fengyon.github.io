import{_ as n,c as s,o as p,b as e}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"Angular Router","description":"","frontmatter":{},"headers":[{"level":2,"title":"路由概念","slug":"路由概念","link":"#路由概念","children":[]},{"level":2,"title":"路由基础","slug":"路由基础","link":"#路由基础","children":[{"level":3,"title":"路由配置","slug":"路由配置","link":"#路由配置","children":[]},{"level":3,"title":"路由出口","slug":"路由出口","link":"#路由出口","children":[]}]},{"level":2,"title":"路由配置详解","slug":"路由配置详解","link":"#路由配置详解","children":[{"level":3,"title":"基本路由","slug":"基本路由","link":"#基本路由","children":[]},{"level":3,"title":"重定向路由","slug":"重定向路由","link":"#重定向路由","children":[]},{"level":3,"title":"通配符路由","slug":"通配符路由","link":"#通配符路由","children":[]}]},{"level":2,"title":"路由导航","slug":"路由导航","link":"#路由导航","children":[{"level":3,"title":"声明式导航","slug":"声明式导航","link":"#声明式导航","children":[]},{"level":3,"title":"命令式导航","slug":"命令式导航","link":"#命令式导航","children":[]}]},{"level":2,"title":"路由参数","slug":"路由参数","link":"#路由参数","children":[{"level":3,"title":"路径参数","slug":"路径参数","link":"#路径参数","children":[]},{"level":3,"title":"查询参数","slug":"查询参数","link":"#查询参数","children":[]}]},{"level":2,"title":"嵌套路由","slug":"嵌套路由","link":"#嵌套路由","children":[{"level":3,"title":"子路由配置","slug":"子路由配置","link":"#子路由配置","children":[]},{"level":3,"title":"嵌套路由出口","slug":"嵌套路由出口","link":"#嵌套路由出口","children":[]}]},{"level":2,"title":"路由守卫","slug":"路由守卫","link":"#路由守卫","children":[{"level":3,"title":"守卫类型","slug":"守卫类型","link":"#守卫类型","children":[]},{"level":3,"title":"守卫实现","slug":"守卫实现","link":"#守卫实现","children":[]}]},{"level":2,"title":"懒加载模块","slug":"懒加载模块","link":"#懒加载模块","children":[{"level":3,"title":"懒加载配置","slug":"懒加载配置","link":"#懒加载配置","children":[]},{"level":3,"title":"懒加载流程","slug":"懒加载流程","link":"#懒加载流程","children":[]}]},{"level":2,"title":"路由事件","slug":"路由事件","link":"#路由事件","children":[{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]}]},{"level":2,"title":"路由策略","slug":"路由策略","link":"#路由策略","children":[{"level":3,"title":"路径位置策略","slug":"路径位置策略","link":"#路径位置策略","children":[]}]},{"level":2,"title":"路由数据传递","slug":"路由数据传递","link":"#路由数据传递","children":[{"level":3,"title":"静态数据","slug":"静态数据","link":"#静态数据","children":[]},{"level":3,"title":"动态数据解析","slug":"动态数据解析","link":"#动态数据解析","children":[]}]},{"level":2,"title":"路由最佳实践","slug":"路由最佳实践","link":"#路由最佳实践","children":[{"level":3,"title":"模块组织","slug":"模块组织","link":"#模块组织","children":[]},{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]}]},{"level":2,"title":"路由高级特性","slug":"路由高级特性","link":"#路由高级特性","children":[{"level":3,"title":"多路由出口","slug":"多路由出口","link":"#多路由出口","children":[]},{"level":3,"title":"相对导航","slug":"相对导航","link":"#相对导航","children":[]}]}],"relativePath":"framework/angular/router.md","filePath":"framework/angular/router.md"}'),l={name:"framework/angular/router.md"};function t(i,a,o,c,r,d){return p(),s("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/router.md for this page in Markdown format</div><h1 id="angular-router" tabindex="-1">Angular Router <a class="header-anchor" href="#angular-router" aria-label="Permalink to &quot;Angular Router&quot;">​</a></h1><h2 id="路由概念" tabindex="-1">路由概念 <a class="header-anchor" href="#路由概念" aria-label="Permalink to &quot;路由概念&quot;">​</a></h2><p>Angular Router 是一个强大的客户端路由库，用于在单页应用中实现导航和视图管理，让应用具有多页应用的体验而无需重新加载页面。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由功能：</span></span>
<span class="line"><span>URL变化 → 路由匹配 → 组件加载 → 视图更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>传统多页应用：        Angular单页应用：</span></span>
<span class="line"><span>页面A → 重新加载       视图A → 路由切换 → 视图B</span></span>
<span class="line"><span>    ↘ 页面B                   ↘ 无重新加载</span></span></code></pre></div><h2 id="路由基础" tabindex="-1">路由基础 <a class="header-anchor" href="#路由基础" aria-label="Permalink to &quot;路由基础&quot;">​</a></h2><h3 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-label="Permalink to &quot;路由配置&quot;">​</a></h3><p>通过 Routes 数组定义应用的路由结构。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由配置结构：</span></span>
<span class="line"><span>const routes: Routes = [</span></span>
<span class="line"><span>  { path: &#39;&#39;, component: HomeComponent },</span></span>
<span class="line"><span>  { path: &#39;about&#39;, component: AboutComponent },</span></span>
<span class="line"><span>  { path: &#39;products&#39;, component: ProductsComponent }</span></span>
<span class="line"><span>];</span></span></code></pre></div><h3 id="路由出口" tabindex="-1">路由出口 <a class="header-anchor" href="#路由出口" aria-label="Permalink to &quot;路由出口&quot;">​</a></h3><p>RouterOutlet 指令作为组件加载的占位符。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模板结构：</span></span>
<span class="line"><span>&lt;app-header&gt;&lt;/app-header&gt;</span></span>
<span class="line"><span>&lt;router-outlet&gt;&lt;/router-outlet&gt;</span></span>
<span class="line"><span>&lt;app-footer&gt;&lt;/app-footer&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由匹配：</span></span>
<span class="line"><span>URL: /about → AboutComponent 显示在 router-outlet 位置</span></span></code></pre></div><h2 id="路由配置详解" tabindex="-1">路由配置详解 <a class="header-anchor" href="#路由配置详解" aria-label="Permalink to &quot;路由配置详解&quot;">​</a></h2><h3 id="基本路由" tabindex="-1">基本路由 <a class="header-anchor" href="#基本路由" aria-label="Permalink to &quot;基本路由&quot;">​</a></h3><p>定义路径与组件的映射关系。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路径映射：</span></span>
<span class="line"><span>路径 &#39;&#39; → HomeComponent</span></span>
<span class="line"><span>路径 &#39;about&#39; → AboutComponent  </span></span>
<span class="line"><span>路径 &#39;contact&#39; → ContactComponent</span></span></code></pre></div><h3 id="重定向路由" tabindex="-1">重定向路由 <a class="header-anchor" href="#重定向路由" aria-label="Permalink to &quot;重定向路由&quot;">​</a></h3><p>将某个路径自动重定向到另一个路径。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>重定向配置：</span></span>
<span class="line"><span>{ path: &#39;&#39;, redirectTo: &#39;/home&#39;, pathMatch: &#39;full&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问流程：</span></span>
<span class="line"><span>用户访问 &#39;&#39; → 重定向到 &#39;/home&#39; → 显示 HomeComponent</span></span></code></pre></div><h3 id="通配符路由" tabindex="-1">通配符路由 <a class="header-anchor" href="#通配符路由" aria-label="Permalink to &quot;通配符路由&quot;">​</a></h3><p>处理未匹配路径的 404 页面。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>通配符路由：</span></span>
<span class="line"><span>{ path: &#39;**&#39;, component: PageNotFoundComponent }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>匹配规则：</span></span>
<span class="line"><span>/user/profile → 用户路由</span></span>
<span class="line"><span>/about → 关于路由  </span></span>
<span class="line"><span>/unknown → 无匹配 → ** 通配 → 404页面</span></span></code></pre></div><h2 id="路由导航" tabindex="-1">路由导航 <a class="header-anchor" href="#路由导航" aria-label="Permalink to &quot;路由导航&quot;">​</a></h2><h3 id="声明式导航" tabindex="-1">声明式导航 <a class="header-anchor" href="#声明式导航" aria-label="Permalink to &quot;声明式导航&quot;">​</a></h3><p>使用 routerLink 指令在模板中创建导航链接。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模板导航：</span></span>
<span class="line"><span>&lt;nav&gt;</span></span>
<span class="line"><span>  &lt;a routerLink=&quot;/home&quot;&gt;首页&lt;/a&gt;</span></span>
<span class="line"><span>  &lt;a routerLink=&quot;/about&quot;&gt;关于&lt;/a&gt;</span></span>
<span class="line"><span>  &lt;a [routerLink]=&quot;[&#39;/products&#39;, productId]&quot;&gt;产品详情&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/nav&gt;</span></span></code></pre></div><h3 id="命令式导航" tabindex="-1">命令式导航 <a class="header-anchor" href="#命令式导航" aria-label="Permalink to &quot;命令式导航&quot;">​</a></h3><p>在组件类中使用 Router 服务进行编程式导航。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>编程导航：</span></span>
<span class="line"><span>组件中注入Router → 调用导航方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>constructor(private router: Router) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>navigateToAbout() {</span></span>
<span class="line"><span>  this.router.navigate([&#39;/about&#39;]);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>navigateWithParams() {</span></span>
<span class="line"><span>  this.router.navigate([&#39;/products&#39;, id]);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="路由参数" tabindex="-1">路由参数 <a class="header-anchor" href="#路由参数" aria-label="Permalink to &quot;路由参数&quot;">​</a></h2><h3 id="路径参数" tabindex="-1">路径参数 <a class="header-anchor" href="#路径参数" aria-label="Permalink to &quot;路径参数&quot;">​</a></h3><p>在路径中传递参数，用于详情页面等场景。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路径参数：</span></span>
<span class="line"><span>路径: &#39;products/:id&#39;</span></span>
<span class="line"><span>URL: /products/123 → 参数: { id: &#39;123&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置:</span></span>
<span class="line"><span>{ path: &#39;products/:id&#39;, component: ProductDetailComponent }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>获取参数:</span></span>
<span class="line"><span>this.route.params.subscribe(params =&gt; {</span></span>
<span class="line"><span>  const id = params[&#39;id&#39;];</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="查询参数" tabindex="-1">查询参数 <a class="header-anchor" href="#查询参数" aria-label="Permalink to &quot;查询参数&quot;">​</a></h3><p>在 URL 问号后传递可选参数。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>查询参数：</span></span>
<span class="line"><span>URL: /products?category=electronics&amp;page=2</span></span>
<span class="line"><span>参数: { category: &#39;electronics&#39;, page: &#39;2&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导航方式：</span></span>
<span class="line"><span>this.router.navigate([&#39;/products&#39;], { </span></span>
<span class="line"><span>  queryParams: { category: &#39;electronics&#39;, page: 2 }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>获取参数：</span></span>
<span class="line"><span>this.route.queryParams.subscribe(params =&gt; {</span></span>
<span class="line"><span>  const category = params[&#39;category&#39;];</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="嵌套路由" tabindex="-1">嵌套路由 <a class="header-anchor" href="#嵌套路由" aria-label="Permalink to &quot;嵌套路由&quot;">​</a></h2><h3 id="子路由配置" tabindex="-1">子路由配置 <a class="header-anchor" href="#子路由配置" aria-label="Permalink to &quot;子路由配置&quot;">​</a></h3><p>在父路由中定义子路由，创建复杂的页面布局。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>嵌套路由结构：</span></span>
<span class="line"><span>父路由: /admin</span></span>
<span class="line"><span>├── 子路由: &#39;&#39; → AdminDashboardComponent</span></span>
<span class="line"><span>├── 子路由: &#39;users&#39; → UserListComponent  </span></span>
<span class="line"><span>└── 子路由: &#39;settings&#39; → SettingsComponent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;admin&#39;,</span></span>
<span class="line"><span>  component: AdminComponent,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    { path: &#39;&#39;, component: AdminDashboardComponent },</span></span>
<span class="line"><span>    { path: &#39;users&#39;, component: UserListComponent },</span></span>
<span class="line"><span>    { path: &#39;settings&#39;, component: SettingsComponent }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="嵌套路由出口" tabindex="-1">嵌套路由出口 <a class="header-anchor" href="#嵌套路由出口" aria-label="Permalink to &quot;嵌套路由出口&quot;">​</a></h3><p>在父组件模板中定义子路由出口。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>父组件模板：</span></span>
<span class="line"><span>&lt;h2&gt;管理后台&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;nav&gt;</span></span>
<span class="line"><span>  &lt;a routerLink=&quot;/admin&quot;&gt;仪表板&lt;/a&gt;</span></span>
<span class="line"><span>  &lt;a routerLink=&quot;/admin/users&quot;&gt;用户管理&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/nav&gt;</span></span>
<span class="line"><span>&lt;router-outlet&gt;&lt;/router-outlet&gt; ← 子组件在这里显示</span></span></code></pre></div><h2 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-label="Permalink to &quot;路由守卫&quot;">​</a></h2><h3 id="守卫类型" tabindex="-1">守卫类型 <a class="header-anchor" href="#守卫类型" aria-label="Permalink to &quot;守卫类型&quot;">​</a></h3><p>控制路由的访问权限和生命周期。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>守卫分类：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   CanActivate   │ ← 是否可以进入路由</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   CanDeactivate │ ← 是否可以离开路由</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   CanLoad       │ ← 是否可以加载模块</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   Resolve       │ ← 预先获取数据</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h3 id="守卫实现" tabindex="-1">守卫实现 <a class="header-anchor" href="#守卫实现" aria-label="Permalink to &quot;守卫实现&quot;">​</a></h3><p>创建自定义守卫控制路由行为。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>守卫流程：</span></span>
<span class="line"><span>导航请求 → 守卫检查 → 允许/拒绝</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 - 认证守卫：</span></span>
<span class="line"><span>canActivate(): boolean {</span></span>
<span class="line"><span>  if (this.auth.isLoggedIn()) {</span></span>
<span class="line"><span>    return true; // 允许导航</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    this.router.navigate([&#39;/login&#39;]); // 重定向到登录</span></span>
<span class="line"><span>    return false; // 拒绝导航</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="懒加载模块" tabindex="-1">懒加载模块 <a class="header-anchor" href="#懒加载模块" aria-label="Permalink to &quot;懒加载模块&quot;">​</a></h2><h3 id="懒加载配置" tabindex="-1">懒加载配置 <a class="header-anchor" href="#懒加载配置" aria-label="Permalink to &quot;懒加载配置&quot;">​</a></h3><p>按需加载功能模块，优化应用性能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>懒加载优势：</span></span>
<span class="line"><span>初始包体积小 → 快速加载 → 按需加载功能模块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  path: &#39;admin&#39;,</span></span>
<span class="line"><span>  loadChildren: () =&gt; import(&#39;./admin/admin.module&#39;).then(m =&gt; m.AdminModule)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="懒加载流程" tabindex="-1">懒加载流程 <a class="header-anchor" href="#懒加载流程" aria-label="Permalink to &quot;懒加载流程&quot;">​</a></h3><p>模块在需要时才被加载。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>懒加载过程：</span></span>
<span class="line"><span>用户访问 /admin → 加载 AdminModule → 显示管理功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>网络请求：</span></span>
<span class="line"><span>首次访问: 不加载admin代码</span></span>
<span class="line"><span>访问/admin: 发起HTTP请求获取admin模块代码</span></span></code></pre></div><h2 id="路由事件" tabindex="-1">路由事件 <a class="header-anchor" href="#路由事件" aria-label="Permalink to &quot;路由事件&quot;">​</a></h2><h3 id="事件监听" tabindex="-1">事件监听 <a class="header-anchor" href="#事件监听" aria-label="Permalink to &quot;事件监听&quot;">​</a></h3><p>监听路由生命周期事件，实现高级功能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由事件流：</span></span>
<span class="line"><span>NavigationStart → RouteConfigLoadStart → RouteConfigLoadEnd </span></span>
<span class="line"><span>→ RoutesRecognized → NavigationEnd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>事件监听：</span></span>
<span class="line"><span>this.router.events.subscribe(event =&gt; {</span></span>
<span class="line"><span>  if (event instanceof NavigationStart) {</span></span>
<span class="line"><span>    this.showLoader = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (event instanceof NavigationEnd) {</span></span>
<span class="line"><span>    this.showLoader = false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="路由策略" tabindex="-1">路由策略 <a class="header-anchor" href="#路由策略" aria-label="Permalink to &quot;路由策略&quot;">​</a></h2><h3 id="路径位置策略" tabindex="-1">路径位置策略 <a class="header-anchor" href="#路径位置策略" aria-label="Permalink to &quot;路径位置策略&quot;">​</a></h3><p>控制 URL 的显示格式。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>策略对比：</span></span>
<span class="line"><span>PathLocationStrategy (默认)</span></span>
<span class="line"><span>URL: http://example.com/products/123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HashLocationStrategy  </span></span>
<span class="line"><span>URL: http://example.com/#/products/123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>RouterModule.forRoot(routes, { useHash: true })</span></span></code></pre></div><h2 id="路由数据传递" tabindex="-1">路由数据传递 <a class="header-anchor" href="#路由数据传递" aria-label="Permalink to &quot;路由数据传递&quot;">​</a></h2><h3 id="静态数据" tabindex="-1">静态数据 <a class="header-anchor" href="#静态数据" aria-label="Permalink to &quot;静态数据&quot;">​</a></h3><p>在路由配置中定义静态数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态数据配置：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;help&#39;,</span></span>
<span class="line"><span>  component: HelpComponent,</span></span>
<span class="line"><span>  data: { </span></span>
<span class="line"><span>    title: &#39;帮助页面&#39;,</span></span>
<span class="line"><span>    requiresAuth: false </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>获取数据：</span></span>
<span class="line"><span>this.route.data.subscribe(data =&gt; {</span></span>
<span class="line"><span>  const title = data[&#39;title&#39;];</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="动态数据解析" tabindex="-1">动态数据解析 <a class="header-anchor" href="#动态数据解析" aria-label="Permalink to &quot;动态数据解析&quot;">​</a></h3><p>在路由激活前预先获取数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Resolve守卫：</span></span>
<span class="line"><span>导航开始 → Resolver获取数据 → 数据就绪 → 激活路由</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用：</span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  path: &#39;product/:id&#39;,</span></span>
<span class="line"><span>  component: ProductComponent,</span></span>
<span class="line"><span>  resolve: {</span></span>
<span class="line"><span>    product: ProductResolver</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="路由最佳实践" tabindex="-1">路由最佳实践 <a class="header-anchor" href="#路由最佳实践" aria-label="Permalink to &quot;路由最佳实践&quot;">​</a></h2><h3 id="模块组织" tabindex="-1">模块组织 <a class="header-anchor" href="#模块组织" aria-label="Permalink to &quot;模块组织&quot;">​</a></h3><p>合理组织路由模块结构。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由模块结构：</span></span>
<span class="line"><span>AppModule</span></span>
<span class="line"><span>├── AppRoutingModule (根路由)</span></span>
<span class="line"><span>└── FeatureModules</span></span>
<span class="line"><span>    ├── AdminModule (懒加载)</span></span>
<span class="line"><span>    ├── UserModule (懒加载)  </span></span>
<span class="line"><span>    └── SharedModule (共享)</span></span></code></pre></div><h3 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h3><p>优化路由配置提升用户体验。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>优化策略：</span></span>
<span class="line"><span>├── 懒加载功能模块</span></span>
<span class="line"><span>├── 预加载策略</span></span>
<span class="line"><span>├── 路由守卫缓存</span></span>
<span class="line"><span>├── 合理的路由分割</span></span>
<span class="line"><span>└── 错误处理机制</span></span></code></pre></div><h2 id="路由高级特性" tabindex="-1">路由高级特性 <a class="header-anchor" href="#路由高级特性" aria-label="Permalink to &quot;路由高级特性&quot;">​</a></h2><h3 id="多路由出口" tabindex="-1">多路由出口 <a class="header-anchor" href="#多路由出口" aria-label="Permalink to &quot;多路由出口&quot;">​</a></h3><p>使用命名路由出口实现复杂布局。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>多出口布局：</span></span>
<span class="line"><span>&lt;router-outlet&gt;&lt;/router-outlet&gt;           ← 主内容</span></span>
<span class="line"><span>&lt;router-outlet name=&quot;sidebar&quot;&gt;&lt;/router-outlet&gt; ← 侧边栏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由配置：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;dashboard&#39;,</span></span>
<span class="line"><span>  component: MainComponent,</span></span>
<span class="line"><span>  outlets: {</span></span>
<span class="line"><span>    sidebar: [&#39;sidebar-content&#39;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="相对导航" tabindex="-1">相对导航 <a class="header-anchor" href="#相对导航" aria-label="Permalink to &quot;相对导航&quot;">​</a></h3><p>相对于当前路由进行导航。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>相对导航：</span></span>
<span class="line"><span>当前URL: /products/category/electronics</span></span>
<span class="line"><span></span></span>
<span class="line"><span>绝对导航: this.router.navigate([&#39;/products&#39;])</span></span>
<span class="line"><span>相对导航: this.router.navigate([&#39;../&#39;], { relativeTo: this.route })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果: 导航到 /products/category</span></span></code></pre></div>`,110)])])}const g=n(l,[["render",t]]);export{h as __pageData,g as default};
