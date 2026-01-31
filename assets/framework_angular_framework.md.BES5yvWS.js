import{_ as n,c as s,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"Angular 架构","description":"","frontmatter":{},"headers":[{"level":2,"title":"整体架构概览","slug":"整体架构概览","link":"#整体架构概览","children":[]},{"level":2,"title":"模块系统","slug":"模块系统","link":"#模块系统","children":[{"level":3,"title":"NgModule 结构","slug":"ngmodule-结构","link":"#ngmodule-结构","children":[]},{"level":3,"title":"模块层次","slug":"模块层次","link":"#模块层次","children":[]}]},{"level":2,"title":"组件架构","slug":"组件架构","link":"#组件架构","children":[{"level":3,"title":"组件树结构","slug":"组件树结构","link":"#组件树结构","children":[]},{"level":3,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[]}]},{"level":2,"title":"数据流与绑定","slug":"数据流与绑定","link":"#数据流与绑定","children":[{"level":3,"title":"单向数据流","slug":"单向数据流","link":"#单向数据流","children":[]},{"level":3,"title":"双向绑定","slug":"双向绑定","link":"#双向绑定","children":[]}]},{"level":2,"title":"服务与依赖注入","slug":"服务与依赖注入","link":"#服务与依赖注入","children":[{"level":3,"title":"服务定位","slug":"服务定位","link":"#服务定位","children":[]},{"level":3,"title":"依赖注入层次","slug":"依赖注入层次","link":"#依赖注入层次","children":[]}]},{"level":2,"title":"路由架构","slug":"路由架构","link":"#路由架构","children":[{"level":3,"title":"路由配置","slug":"路由配置","link":"#路由配置","children":[]},{"level":3,"title":"懒加载模块","slug":"懒加载模块","link":"#懒加载模块","children":[]}]},{"level":2,"title":"变更检测","slug":"变更检测","link":"#变更检测","children":[{"level":3,"title":"检测策略","slug":"检测策略","link":"#检测策略","children":[]},{"level":3,"title":"检测机制","slug":"检测机制","link":"#检测机制","children":[]}]}],"relativePath":"framework/angular/framework.md","filePath":"framework/angular/framework.md"}'),e={name:"framework/angular/framework.md"};function i(t,a,o,c,r,d){return p(),s("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/framework.md for this page in Markdown format</div><h1 id="angular-架构" tabindex="-1">Angular 架构 <a class="header-anchor" href="#angular-架构" aria-label="Permalink to &quot;Angular 架构&quot;">​</a></h1><h2 id="整体架构概览" tabindex="-1">整体架构概览 <a class="header-anchor" href="#整体架构概览" aria-label="Permalink to &quot;整体架构概览&quot;">​</a></h2><p>Angular 应用采用模块化、组件化的架构设计，各个部分通过清晰的职责分离协同工作。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Angular 应用架构</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│                模块 (Modules)            │</span></span>
<span class="line"><span>│  ┌─────────────────────────────────────┐ │</span></span>
<span class="line"><span>│  │             组件树 (Components)      │ │</span></span>
<span class="line"><span>│  │  ┌─────────────┐ ┌─────────────┐    │ │</span></span>
<span class="line"><span>│  │  │   组件       │ │   组件       │    │ │</span></span>
<span class="line"><span>│  │  │ ┌─────────┐ │ │ ┌─────────┐ │    │ │</span></span>
<span class="line"><span>│  │  │ │ 模板    │ │ │ │ 模板    │ │    │ │</span></span>
<span class="line"><span>│  │  │ │(HTML)   │ │ │ │(HTML)   │ │    │ │</span></span>
<span class="line"><span>│  │  │ └─────────┘ │ │ └─────────┘ │    │ │</span></span>
<span class="line"><span>│  │  └─────────────┘ └─────────────┘    │ │</span></span>
<span class="line"><span>│  └─────────────────────────────────────┘ │</span></span>
<span class="line"><span>│  ┌─────────────────────────────────────┐ │</span></span>
<span class="line"><span>│  │             服务 (Services)          │ │</span></span>
<span class="line"><span>│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ │ │</span></span>
<span class="line"><span>│  │  │ 服务A   │ │ 服务B   │ │ 服务C   │ │ │</span></span>
<span class="line"><span>│  │  └─────────┘ └─────────┘ └─────────┘ │ │</span></span>
<span class="line"><span>│  └─────────────────────────────────────┘ │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><h2 id="模块系统" tabindex="-1">模块系统 <a class="header-anchor" href="#模块系统" aria-label="Permalink to &quot;模块系统&quot;">​</a></h2><h3 id="ngmodule-结构" tabindex="-1">NgModule 结构 <a class="header-anchor" href="#ngmodule-结构" aria-label="Permalink to &quot;NgModule 结构&quot;">​</a></h3><p>模块是 Angular 应用的组织单元，每个模块声明一组相关的功能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NgModule 构成：</span></span>
<span class="line"><span>┌─────────────────────────┐</span></span>
<span class="line"><span>│        NgModule         │</span></span>
<span class="line"><span>├─────────────────────────┤</span></span>
<span class="line"><span>│ declarations: [组件,...]  │</span></span>
<span class="line"><span>│ imports: [其他模块,...]    │</span></span>
<span class="line"><span>│ providers: [服务,...]     │</span></span>
<span class="line"><span>│ bootstrap: [根组件]       │</span></span>
<span class="line"><span>└─────────────────────────┘</span></span></code></pre></div><h3 id="模块层次" tabindex="-1">模块层次 <a class="header-anchor" href="#模块层次" aria-label="Permalink to &quot;模块层次&quot;">​</a></h3><p>应用通常包含多个模块，形成层次结构。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块层次：</span></span>
<span class="line"><span>         根模块 (AppModule)</span></span>
<span class="line"><span>            /       \\</span></span>
<span class="line"><span>           /         \\</span></span>
<span class="line"><span>  功能模块      共享模块</span></span>
<span class="line"><span> (Feature)    (Shared)</span></span>
<span class="line"><span>    |            |</span></span>
<span class="line"><span>  组件/服务     通用组件</span></span></code></pre></div><h2 id="组件架构" tabindex="-1">组件架构 <a class="header-anchor" href="#组件架构" aria-label="Permalink to &quot;组件架构&quot;">​</a></h2><h3 id="组件树结构" tabindex="-1">组件树结构 <a class="header-anchor" href="#组件树结构" aria-label="Permalink to &quot;组件树结构&quot;">​</a></h3><p>Angular 应用通过组件树构建用户界面，每个组件负责特定的视图区域。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件树：</span></span>
<span class="line"><span>      根组件 (AppComponent)</span></span>
<span class="line"><span>          /      \\</span></span>
<span class="line"><span>         /        \\</span></span>
<span class="line"><span>  头部组件       主体组件</span></span>
<span class="line"><span>(Header)       (Main)</span></span>
<span class="line"><span>                 /  \\</span></span>
<span class="line"><span>                /    \\</span></span>
<span class="line"><span>          侧边栏    内容区</span></span>
<span class="line"><span>        (Sidebar) (Content)</span></span></code></pre></div><h3 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h3><p>组件之间通过输入输出属性进行数据传递。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件通信：</span></span>
<span class="line"><span>父组件 → [输入属性] → 子组件</span></span>
<span class="line"><span>父组件 ← (输出事件) ← 子组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>父组件: &lt;app-child [data]=&quot;parentData&quot; (notify)=&quot;onNotify($event)&quot;&gt;</span></span>
<span class="line"><span>子组件: @Input() data; @Output() notify = new EventEmitter();</span></span></code></pre></div><h2 id="数据流与绑定" tabindex="-1">数据流与绑定 <a class="header-anchor" href="#数据流与绑定" aria-label="Permalink to &quot;数据流与绑定&quot;">​</a></h2><h3 id="单向数据流" tabindex="-1">单向数据流 <a class="header-anchor" href="#单向数据流" aria-label="Permalink to &quot;单向数据流&quot;">​</a></h3><p>Angular 采用从组件到模板的单向数据流。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据流向：</span></span>
<span class="line"><span>组件类 → 模板视图</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>属性更新 → 视图更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>组件: title = &quot;Hello&quot;</span></span>
<span class="line"><span>模板: &lt;h1&gt;{{title}}&lt;/h1&gt;</span></span></code></pre></div><h3 id="双向绑定" tabindex="-1">双向绑定 <a class="header-anchor" href="#双向绑定" aria-label="Permalink to &quot;双向绑定&quot;">​</a></h3><p>将属性绑定和事件绑定结合，实现双向数据同步。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>双向绑定：</span></span>
<span class="line"><span>组件属性 ↔ 表单输入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>&lt;input [(ngModel)]=&quot;userName&quot;&gt;</span></span>
<span class="line"><span>等同于：</span></span>
<span class="line"><span>&lt;input [ngModel]=&quot;userName&quot; (ngModelChange)=&quot;userName = $event&quot;&gt;</span></span></code></pre></div><h2 id="服务与依赖注入" tabindex="-1">服务与依赖注入 <a class="header-anchor" href="#服务与依赖注入" aria-label="Permalink to &quot;服务与依赖注入&quot;">​</a></h2><h3 id="服务定位" tabindex="-1">服务定位 <a class="header-anchor" href="#服务定位" aria-label="Permalink to &quot;服务定位&quot;">​</a></h3><p>服务是可注入的类，用于封装业务逻辑和数据访问。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务作用：</span></span>
<span class="line"><span>┌─────────────┐   调用    ┌─────────────┐</span></span>
<span class="line"><span>│   组件A      │ ────────&gt; │   服务X     │</span></span>
<span class="line"><span>└─────────────┘          └─────────────┘</span></span>
<span class="line"><span>         ↑                       ↑</span></span>
<span class="line"><span>         │                       │</span></span>
<span class="line"><span>┌─────────────┐          ┌─────────────┐</span></span>
<span class="line"><span>│   组件B      │ ────────&gt; │   服务X     │</span></span>
<span class="line"><span>└─────────────┘          └─────────────┘</span></span>
<span class="line"><span>    共享同一服务实例</span></span></code></pre></div><h3 id="依赖注入层次" tabindex="-1">依赖注入层次 <a class="header-anchor" href="#依赖注入层次" aria-label="Permalink to &quot;依赖注入层次&quot;">​</a></h3><p>Angular 的依赖注入系统具有层次结构，支持不同级别的服务实例。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>注入层次：</span></span>
<span class="line"><span>      根注入器 (Root)</span></span>
<span class="line"><span>         /    \\</span></span>
<span class="line"><span>        /      \\</span></span>
<span class="line"><span>模块级注入器  组件级注入器</span></span>
<span class="line"><span>(Module)     (Component)</span></span></code></pre></div><h2 id="路由架构" tabindex="-1">路由架构 <a class="header-anchor" href="#路由架构" aria-label="Permalink to &quot;路由架构&quot;">​</a></h2><h3 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-label="Permalink to &quot;路由配置&quot;">​</a></h3><p>通过路由模块定义应用内的导航结构。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由配置：</span></span>
<span class="line"><span>const routes: Routes = [</span></span>
<span class="line"><span>  { path: &#39;&#39;, component: HomeComponent },</span></span>
<span class="line"><span>  { path: &#39;about&#39;, component: AboutComponent },</span></span>
<span class="line"><span>  { path: &#39;users&#39;, component: UserListComponent }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由出口：</span></span>
<span class="line"><span>&lt;router-outlet&gt;</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├── 路径 &#39;&#39; → HomeComponent</span></span>
<span class="line"><span>    ├── 路径 &#39;about&#39; → AboutComponent</span></span>
<span class="line"><span>    └── 路径 &#39;users&#39; → UserListComponent</span></span>
<span class="line"><span>&lt;/router-outlet&gt;</span></span></code></pre></div><h3 id="懒加载模块" tabindex="-1">懒加载模块 <a class="header-anchor" href="#懒加载模块" aria-label="Permalink to &quot;懒加载模块&quot;">​</a></h3><p>按需加载功能模块，优化应用性能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>懒加载流程：</span></span>
<span class="line"><span>用户访问路径 → 路由匹配 → 加载对应模块 → 显示组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置示例：</span></span>
<span class="line"><span>{ path: &#39;admin&#39;, loadChildren: () =&gt; import(&#39;./admin/admin.module&#39;).then(m =&gt; m.AdminModule) }</span></span></code></pre></div><h2 id="变更检测" tabindex="-1">变更检测 <a class="header-anchor" href="#变更检测" aria-label="Permalink to &quot;变更检测&quot;">​</a></h2><h3 id="检测策略" tabindex="-1">检测策略 <a class="header-anchor" href="#检测策略" aria-label="Permalink to &quot;检测策略&quot;">​</a></h3><p>Angular 自动检测数据变化并更新视图。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变更检测：</span></span>
<span class="line"><span>数据变化 → 触发检测 → 更新视图</span></span>
<span class="line"><span></span></span>
<span class="line"><span>策略对比：</span></span>
<span class="line"><span>Default 策略: 检查所有组件</span></span>
<span class="line"><span>OnPush 策略: 仅当输入变化时检查</span></span></code></pre></div><h3 id="检测机制" tabindex="-1">检测机制 <a class="header-anchor" href="#检测机制" aria-label="Permalink to &quot;检测机制&quot;">​</a></h3><p>Zone.js 监控异步操作，自动触发变更检测。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>事件循环监控：</span></span>
<span class="line"><span>用户事件 → Zone.js 捕获 → 变更检测 → 视图更新</span></span>
<span class="line"><span>定时器   → Zone.js 捕获 → 变更检测 → 视图更新</span></span>
<span class="line"><span>HTTP请求 → Zone.js 捕获 → 变更检测 → 视图更新</span></span></code></pre></div>`,60)])])}const g=n(e,[["render",i]]);export{h as __pageData,g as default};
