import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"Angular 服务与依赖注入","description":"","frontmatter":{},"headers":[{"level":2,"title":"服务概念","slug":"服务概念","link":"#服务概念","children":[]},{"level":2,"title":"创建服务","slug":"创建服务","link":"#创建服务","children":[{"level":3,"title":"服务定义","slug":"服务定义","link":"#服务定义","children":[]}]},{"level":2,"title":"依赖注入基础","slug":"依赖注入基础","link":"#依赖注入基础","children":[{"level":3,"title":"注入机制","slug":"注入机制","link":"#注入机制","children":[]},{"level":3,"title":"注入方式","slug":"注入方式","link":"#注入方式","children":[]}]},{"level":2,"title":"服务提供","slug":"服务提供","link":"#服务提供","children":[{"level":3,"title":"提供者配置","slug":"提供者配置","link":"#提供者配置","children":[]},{"level":3,"title":"作用域控制","slug":"作用域控制","link":"#作用域控制","children":[]}]},{"level":2,"title":"注入器层次","slug":"注入器层次","link":"#注入器层次","children":[{"level":3,"title":"注入器树","slug":"注入器树","link":"#注入器树","children":[]},{"level":3,"title":"查找规则","slug":"查找规则","link":"#查找规则","children":[]}]},{"level":2,"title":"服务使用场景","slug":"服务使用场景","link":"#服务使用场景","children":[{"level":3,"title":"数据服务","slug":"数据服务","link":"#数据服务","children":[]},{"level":3,"title":"共享状态服务","slug":"共享状态服务","link":"#共享状态服务","children":[]},{"level":3,"title":"工具服务","slug":"工具服务","link":"#工具服务","children":[]}]},{"level":2,"title":"高级注入特性","slug":"高级注入特性","link":"#高级注入特性","children":[{"level":3,"title":"可选依赖","slug":"可选依赖","link":"#可选依赖","children":[]},{"level":3,"title":"注入令牌","slug":"注入令牌","link":"#注入令牌","children":[]},{"level":3,"title":"工厂提供者","slug":"工厂提供者","link":"#工厂提供者","children":[]}]},{"level":2,"title":"服务测试","slug":"服务测试","link":"#服务测试","children":[{"level":3,"title":"测试依赖注入","slug":"测试依赖注入","link":"#测试依赖注入","children":[]}]}],"relativePath":"framework/angular/services.md","filePath":"framework/angular/services.md"}'),e={name:"framework/angular/services.md"};function i(c,s,o,t,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/services.md for this page in Markdown format</div><h1 id="angular-服务与依赖注入" tabindex="-1">Angular 服务与依赖注入 <a class="header-anchor" href="#angular-服务与依赖注入" aria-label="Permalink to &quot;Angular 服务与依赖注入&quot;">​</a></h1><h2 id="服务概念" tabindex="-1">服务概念 <a class="header-anchor" href="#服务概念" aria-label="Permalink to &quot;服务概念&quot;">​</a></h2><p>服务是 Angular 应用中用于封装业务逻辑、数据访问和共享功能的可注入类。服务通过依赖注入系统提供给需要它们的组件。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务角色：</span></span>
<span class="line"><span>┌─────────────┐          ┌─────────────┐</span></span>
<span class="line"><span>│   组件       │ ────────&gt; │    服务      │</span></span>
<span class="line"><span>│ (消费者)     │          │ (提供者)     │</span></span>
<span class="line"><span>└─────────────┘          └─────────────┘</span></span>
<span class="line"><span>     使用                      包含</span></span>
<span class="line"><span>                         ├─ 数据获取</span></span>
<span class="line"><span>                         ├─ 业务逻辑</span></span>
<span class="line"><span>                         └─ 工具函数</span></span></code></pre></div><h2 id="创建服务" tabindex="-1">创建服务 <a class="header-anchor" href="#创建服务" aria-label="Permalink to &quot;创建服务&quot;">​</a></h2><h3 id="服务定义" tabindex="-1">服务定义 <a class="header-anchor" href="#服务定义" aria-label="Permalink to &quot;服务定义&quot;">​</a></h3><p>服务是普通的 TypeScript 类，通过 <code>@Injectable</code> 装饰器标记为可注入。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务结构：</span></span>
<span class="line"><span>┌─────────────────────┐</span></span>
<span class="line"><span>│   @Injectable()     │</span></span>
<span class="line"><span>│   export class      │</span></span>
<span class="line"><span>│     DataService {   │</span></span>
<span class="line"><span>│                     │</span></span>
<span class="line"><span>│   getData() { ... } │</span></span>
<span class="line"><span>│   updateData() { ...}│</span></span>
<span class="line"><span>│   }                 │</span></span>
<span class="line"><span>└─────────────────────┘</span></span></code></pre></div><p>示例代码：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Injectable</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  providedIn: </span><span style="color:#9ECBFF;">&#39;root&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UserService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> users</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getUsers</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">[] {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.users;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  addUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.users.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="依赖注入基础" tabindex="-1">依赖注入基础 <a class="header-anchor" href="#依赖注入基础" aria-label="Permalink to &quot;依赖注入基础&quot;">​</a></h2><h3 id="注入机制" tabindex="-1">注入机制 <a class="header-anchor" href="#注入机制" aria-label="Permalink to &quot;注入机制&quot;">​</a></h3><p>依赖注入是一种设计模式，Angular 的注入器负责创建和管理服务实例。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖注入流程：</span></span>
<span class="line"><span>组件声明依赖 → 注入器查找服务 → 提供实例 → 组件使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>组件构造函数: constructor(private userService: UserService)</span></span>
<span class="line"><span>注入器: 找到 UserService → 创建/返回实例 → 注入组件</span></span></code></pre></div><h3 id="注入方式" tabindex="-1">注入方式 <a class="header-anchor" href="#注入方式" aria-label="Permalink to &quot;注入方式&quot;">​</a></h3><p>服务可以通过构造函数注入到组件、指令或其他服务中。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构造函数注入：</span></span>
<span class="line"><span>┌─────────────────┐   依赖声明    ┌─────────────────┐</span></span>
<span class="line"><span>│   组件类         │ ───────────&gt; │    服务类        │</span></span>
<span class="line"><span>│                 │              │                 │</span></span>
<span class="line"><span>│ constructor(    │              │                 │</span></span>
<span class="line"><span>│   private service: Service     │</span></span>
<span class="line"><span>│ ) {}            │              │                 │</span></span>
<span class="line"><span>└─────────────────┘              └─────────────────┘</span></span></code></pre></div><h2 id="服务提供" tabindex="-1">服务提供 <a class="header-anchor" href="#服务提供" aria-label="Permalink to &quot;服务提供&quot;">​</a></h2><h3 id="提供者配置" tabindex="-1">提供者配置 <a class="header-anchor" href="#提供者配置" aria-label="Permalink to &quot;提供者配置&quot;">​</a></h3><p>服务需要在 Angular 的依赖注入系统中注册，指定如何创建服务实例。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>提供者位置：</span></span>
<span class="line"><span>├── 根注入器 (providedIn: &#39;root&#39;)</span></span>
<span class="line"><span>├── 模块级别 (@NgModule providers)</span></span>
<span class="line"><span>└── 组件级别 (@Component providers)</span></span></code></pre></div><p>配置示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 根级别提供</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Injectable</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  providedIn: </span><span style="color:#9ECBFF;">&#39;root&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模块级别提供</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">NgModule</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  providers: [UserService]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件级别提供</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  providers: [UserService]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="作用域控制" tabindex="-1">作用域控制 <a class="header-anchor" href="#作用域控制" aria-label="Permalink to &quot;作用域控制&quot;">​</a></h3><p>通过不同的提供方式控制服务的生命周期和实例范围。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务作用域：</span></span>
<span class="line"><span>根注入器服务 → 全局单例</span></span>
<span class="line"><span>        ┌──────────────┐</span></span>
<span class="line"><span>        │  根注入器     │</span></span>
<span class="line"><span>        │  服务实例     │</span></span>
<span class="line"><span>        └──────────────┘</span></span>
<span class="line"><span>             ↑ 共享</span></span>
<span class="line"><span>┌─────────────┐  ┌─────────────┐</span></span>
<span class="line"><span>│  组件A       │  │  组件B       │</span></span>
<span class="line"><span>└─────────────┘  └─────────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>组件级服务 → 每个组件实例独立</span></span>
<span class="line"><span>┌─────────────┐  ┌─────────────┐</span></span>
<span class="line"><span>│  组件A       │  │  组件B       │</span></span>
<span class="line"><span>│  服务实例1    │  │  服务实例2    │</span></span>
<span class="line"><span>└─────────────┘  └─────────────┘</span></span></code></pre></div><h2 id="注入器层次" tabindex="-1">注入器层次 <a class="header-anchor" href="#注入器层次" aria-label="Permalink to &quot;注入器层次&quot;">​</a></h2><h3 id="注入器树" tabindex="-1">注入器树 <a class="header-anchor" href="#注入器树" aria-label="Permalink to &quot;注入器树&quot;">​</a></h3><p>Angular 应用形成注入器的层次结构，支持逐级查找依赖。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>注入器层次：</span></span>
<span class="line"><span>        根注入器 (Root Injector)</span></span>
<span class="line"><span>           /        \\</span></span>
<span class="line"><span>          /          \\</span></span>
<span class="line"><span>  模块注入器      组件注入器</span></span>
<span class="line"><span> (Module)        (Component)</span></span>
<span class="line"><span>                   /    \\</span></span>
<span class="line"><span>                  /      \\</span></span>
<span class="line"><span>            子组件注入器  子组件注入器</span></span></code></pre></div><h3 id="查找规则" tabindex="-1">查找规则 <a class="header-anchor" href="#查找规则" aria-label="Permalink to &quot;查找规则&quot;">​</a></h3><p>当组件请求服务时，注入器按照特定顺序查找。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务查找路径：</span></span>
<span class="line"><span>组件注入器 → 父组件注入器 → ... → 根注入器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>组件请求 UserService</span></span>
<span class="line"><span>1. 检查组件自身的providers</span></span>
<span class="line"><span>2. 检查父组件的providers</span></span>
<span class="line"><span>3. 检查模块的providers</span></span>
<span class="line"><span>4. 检查根注入器</span></span></code></pre></div><h2 id="服务使用场景" tabindex="-1">服务使用场景 <a class="header-anchor" href="#服务使用场景" aria-label="Permalink to &quot;服务使用场景&quot;">​</a></h2><h3 id="数据服务" tabindex="-1">数据服务 <a class="header-anchor" href="#数据服务" aria-label="Permalink to &quot;数据服务&quot;">​</a></h3><p>封装数据获取和操作逻辑，供多个组件共享。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据服务模式：</span></span>
<span class="line"><span>┌─────────────┐    HTTP请求    ┌─────────────┐</span></span>
<span class="line"><span>│   组件       │ ────────────&gt; │  数据服务    │ ────&gt; 后端API</span></span>
<span class="line"><span>│             │               │             │</span></span>
<span class="line"><span>│ 显示数据     │ &lt;──────────── │  缓存数据    │</span></span>
<span class="line"><span>└─────────────┘   返回数据     └─────────────┘</span></span></code></pre></div><h3 id="共享状态服务" tabindex="-1">共享状态服务 <a class="header-anchor" href="#共享状态服务" aria-label="Permalink to &quot;共享状态服务&quot;">​</a></h3><p>在组件之间共享状态和数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态共享：</span></span>
<span class="line"><span>        ┌─────────────┐</span></span>
<span class="line"><span>        │  状态服务    │</span></span>
<span class="line"><span>        │  (数据总线)  │</span></span>
<span class="line"><span>        └─────────────┘</span></span>
<span class="line"><span>           /    |    \\</span></span>
<span class="line"><span>          /     |     \\</span></span>
<span class="line"><span>         /      |      \\</span></span>
<span class="line"><span>┌─────────┐ ┌─────────┐ ┌─────────┐</span></span>
<span class="line"><span>│ 组件A    │ │ 组件B    │ │ 组件C    │</span></span>
<span class="line"><span>│         │ │         │ │         │</span></span>
<span class="line"><span>│ 读取状态 │ │ 修改状态 │ │ 监听变化 │</span></span>
<span class="line"><span>└─────────┘ └─────────┘ └─────────┘</span></span></code></pre></div><h3 id="工具服务" tabindex="-1">工具服务 <a class="header-anchor" href="#工具服务" aria-label="Permalink to &quot;工具服务&quot;">​</a></h3><p>提供通用的工具函数和功能。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工具服务：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   工具服务       │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│ 日志记录         │</span></span>
<span class="line"><span>│ 本地存储         │</span></span>
<span class="line"><span>│ 格式转换         │</span></span>
<span class="line"><span>│ 验证工具         │</span></span>
<span class="line"><span>└─────────────────┘</span></span>
<span class="line"><span>     ↑       ↑</span></span>
<span class="line"><span>   组件A    组件B</span></span></code></pre></div><h2 id="高级注入特性" tabindex="-1">高级注入特性 <a class="header-anchor" href="#高级注入特性" aria-label="Permalink to &quot;高级注入特性&quot;">​</a></h2><h3 id="可选依赖" tabindex="-1">可选依赖 <a class="header-anchor" href="#可选依赖" aria-label="Permalink to &quot;可选依赖&quot;">​</a></h3><p>使用 <code>@Optional</code> 装饰器声明可选的依赖。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>可选依赖：</span></span>
<span class="line"><span>组件请求服务 → 如果服务不存在 → 不报错，注入null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>constructor(@Optional() private logger: LoggerService) {</span></span>
<span class="line"><span>  if (this.logger) {</span></span>
<span class="line"><span>    this.logger.log(&#39;组件创建&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="注入令牌" tabindex="-1">注入令牌 <a class="header-anchor" href="#注入令牌" aria-label="Permalink to &quot;注入令牌&quot;">​</a></h3><p>使用 InjectionToken 提供非类依赖的注入。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>非类依赖：</span></span>
<span class="line"><span>创建令牌 → 提供值 → 注入使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>export const API_URL = new InjectionToken&lt;string&gt;(&#39;api.url&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>providers: [{ provide: API_URL, useValue: &#39;https://api.example.com&#39; }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>constructor(@Inject(API_URL) private apiUrl: string) {}</span></span></code></pre></div><h3 id="工厂提供者" tabindex="-1">工厂提供者 <a class="header-anchor" href="#工厂提供者" aria-label="Permalink to &quot;工厂提供者&quot;">​</a></h3><p>使用工厂函数动态创建服务实例。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工厂提供者：</span></span>
<span class="line"><span>依赖配置 → 工厂函数 → 返回服务实例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>providers: [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    provide: UserService,</span></span>
<span class="line"><span>    useFactory: (config: ConfigService) =&gt; {</span></span>
<span class="line"><span>      return config.isProd ? new ProductionUserService() : new MockUserService();</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    deps: [ConfigService]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h2 id="服务测试" tabindex="-1">服务测试 <a class="header-anchor" href="#服务测试" aria-label="Permalink to &quot;服务测试&quot;">​</a></h2><h3 id="测试依赖注入" tabindex="-1">测试依赖注入 <a class="header-anchor" href="#测试依赖注入" aria-label="Permalink to &quot;测试依赖注入&quot;">​</a></h3><p>在测试中模拟服务依赖，隔离测试组件。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>测试配置：</span></span>
<span class="line"><span>TestBed配置 → 模拟服务 → 注入测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>beforeEach(() =&gt; {</span></span>
<span class="line"><span>  TestBed.configureTestingModule({</span></span>
<span class="line"><span>    providers: [</span></span>
<span class="line"><span>      ComponentUnderTest,</span></span>
<span class="line"><span>      { provide: UserService, useClass: MockUserService }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,73)])])}const g=a(e,[["render",i]]);export{h as __pageData,g as default};
