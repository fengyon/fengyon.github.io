import{_ as s,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"微前端","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是微前端？","slug":"什么是微前端","link":"#什么是微前端","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"应用拆分","slug":"应用拆分","link":"#应用拆分","children":[]},{"level":3,"title":"技术栈无关","slug":"技术栈无关","link":"#技术栈无关","children":[]},{"level":3,"title":"独立开发部署","slug":"独立开发部署","link":"#独立开发部署","children":[]}]},{"level":2,"title":"主要架构模式","slug":"主要架构模式","link":"#主要架构模式","children":[{"level":3,"title":"基座模式","slug":"基座模式","link":"#基座模式","children":[]},{"level":3,"title":"路由分发模式","slug":"路由分发模式","link":"#路由分发模式","children":[]},{"level":3,"title":"组件组合模式","slug":"组件组合模式","link":"#组件组合模式","children":[]}]},{"level":2,"title":"关键技术实现","slug":"关键技术实现","link":"#关键技术实现","children":[{"level":3,"title":"模块联邦","slug":"模块联邦","link":"#模块联邦","children":[]},{"level":3,"title":"单 SPA 框架","slug":"单-spa-框架","link":"#单-spa-框架","children":[]},{"level":3,"title":"Web Components","slug":"web-components","link":"#web-components","children":[]}]},{"level":2,"title":"通信机制","slug":"通信机制","link":"#通信机制","children":[{"level":3,"title":"全局状态管理","slug":"全局状态管理","link":"#全局状态管理","children":[]},{"level":3,"title":"自定义事件","slug":"自定义事件","link":"#自定义事件","children":[]},{"level":3,"title":"URL 参数传递","slug":"url-参数传递","link":"#url-参数传递","children":[]}]},{"level":2,"title":"样式隔离方案","slug":"样式隔离方案","link":"#样式隔离方案","children":[{"level":3,"title":"作用域 CSS","slug":"作用域-css","link":"#作用域-css","children":[]},{"level":3,"title":"Shadow DOM","slug":"shadow-dom","link":"#shadow-dom","children":[]},{"level":3,"title":"动态样式加载","slug":"动态样式加载","link":"#动态样式加载","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"大型企业应用","slug":"大型企业应用","link":"#大型企业应用","children":[]},{"level":3,"title":"遗留系统迁移","slug":"遗留系统迁移","link":"#遗留系统迁移","children":[]},{"level":3,"title":"多产品线整合","slug":"多产品线整合","link":"#多产品线整合","children":[]}]},{"level":2,"title":"优势与挑战","slug":"优势与挑战","link":"#优势与挑战","children":[{"level":3,"title":"核心优势","slug":"核心优势","link":"#核心优势","children":[]},{"level":3,"title":"面临挑战","slug":"面临挑战","link":"#面临挑战","children":[]}]},{"level":2,"title":"工具生态系统","slug":"工具生态系统","link":"#工具生态系统","children":[{"level":3,"title":"主流框架","slug":"主流框架","link":"#主流框架","children":[]},{"level":3,"title":"配套工具","slug":"配套工具","link":"#配套工具","children":[]}]}],"relativePath":"engineering/architecture/micro-frontend.md","filePath":"engineering/architecture/micro-frontend.md"}'),e={name:"engineering/architecture/micro-frontend.md"};function i(t,a,c,o,d,r){return p(),n("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/architecture/micro-frontend.md for this page in Markdown format</div><h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><p>微前端是一种将前端应用分解为多个独立、可独立开发、部署和运行的较小应用的架构风格。它借鉴了微服务的架构理念，将其应用于前端领域，旨在解决大型前端项目的可维护性、可扩展性和团队协作问题。</p><h2 id="什么是微前端" tabindex="-1">什么是微前端？ <a class="header-anchor" href="#什么是微前端" aria-label="Permalink to &quot;什么是微前端？&quot;">​</a></h2><p>微前端是一种架构模式，允许多个团队独立开发前端应用的不同部分，最后在运行时组合成统一的用户界面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统单体应用:</span></span>
<span class="line"><span>[一个巨大的前端应用]</span></span>
<span class="line"><span>  ├── 团队A负责的功能</span></span>
<span class="line"><span>  ├── 团队B负责的功能</span></span>
<span class="line"><span>  ├── 团队C负责的功能</span></span>
<span class="line"><span>  └── 统一构建部署</span></span>
<span class="line"><span></span></span>
<span class="line"><span>微前端架构:</span></span>
<span class="line"><span>[基座应用]</span></span>
<span class="line"><span>  ├── 微应用A (团队A独立开发)</span></span>
<span class="line"><span>  ├── 微应用B (团队B独立开发)</span></span>
<span class="line"><span>  ├── 微应用C (团队C独立开发)</span></span>
<span class="line"><span>  └── 运行时集成</span></span></code></pre></div><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><h3 id="应用拆分" tabindex="-1">应用拆分 <a class="header-anchor" href="#应用拆分" aria-label="Permalink to &quot;应用拆分&quot;">​</a></h3><p>将大型应用按业务域或功能模块拆分为独立的微应用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>电商平台拆分示例:</span></span>
<span class="line"><span>        [电商平台]</span></span>
<span class="line"><span>            |</span></span>
<span class="line"><span>    +-------+-------+</span></span>
<span class="line"><span>    |       |       |</span></span>
<span class="line"><span>[用户中心] [商品系统] [订单系统]</span></span>
<span class="line"><span>    |       |       |</span></span>
<span class="line"><span>独立团队  独立技术栈 独立部署</span></span></code></pre></div><h3 id="技术栈无关" tabindex="-1">技术栈无关 <a class="header-anchor" href="#技术栈无关" aria-label="Permalink to &quot;技术栈无关&quot;">​</a></h3><p>各微应用可以使用不同的前端框架和技术栈。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>技术栈多样性:</span></span>
<span class="line"><span>微应用A: [React + TypeScript]</span></span>
<span class="line"><span>微应用B: [Vue 3 + Composition API]</span></span>
<span class="line"><span>微应用C: [Angular + RxJS]</span></span>
<span class="line"><span>微应用D: [原生JavaScript]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>[在基座中统一集成]</span></span></code></pre></div><h3 id="独立开发部署" tabindex="-1">独立开发部署 <a class="header-anchor" href="#独立开发部署" aria-label="Permalink to &quot;独立开发部署&quot;">​</a></h3><p>每个微应用拥有独立的开发、构建和部署流程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>独立生命周期:</span></span>
<span class="line"><span>[微应用开发] -&gt; [独立构建] -&gt; [独立测试] -&gt; [独立部署]</span></span>
<span class="line"><span>      |             |            |            |</span></span>
<span class="line"><span>   团队自治       技术选型自由  质量保证     发布灵活</span></span></code></pre></div><h2 id="主要架构模式" tabindex="-1">主要架构模式 <a class="header-anchor" href="#主要架构模式" aria-label="Permalink to &quot;主要架构模式&quot;">​</a></h2><h3 id="基座模式" tabindex="-1">基座模式 <a class="header-anchor" href="#基座模式" aria-label="Permalink to &quot;基座模式&quot;">​</a></h3><p>通过一个主应用 (基座) 来管理和集成各个微应用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>基座架构:</span></span>
<span class="line"><span>[基座应用] (路由管理、状态共享、公共依赖)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 加载 --&gt; [微应用A] (路由: /appA/*)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 加载 --&gt; [微应用B] (路由: /appB/*)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 加载 --&gt; [微应用C] (路由: /appC/*)</span></span></code></pre></div><h3 id="路由分发模式" tabindex="-1">路由分发模式 <a class="header-anchor" href="#路由分发模式" aria-label="Permalink to &quot;路由分发模式&quot;">​</a></h3><p>根据 URL 路由将请求分发到不同的微应用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>路由分发流程:</span></span>
<span class="line"><span>[用户访问] -&gt; [路由解析] -&gt; [匹配微应用] -&gt; [加载对应资源] -&gt; [渲染页面]</span></span>
<span class="line"><span>     |            |            |              |              |</span></span>
<span class="line"><span>   /appA       识别appA      应用A入口       动态加载       显示应用A</span></span></code></pre></div><h3 id="组件组合模式" tabindex="-1">组件组合模式 <a class="header-anchor" href="#组件组合模式" aria-label="Permalink to &quot;组件组合模式&quot;">​</a></h3><p>将微应用作为组件在页面中组合使用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件组合:</span></span>
<span class="line"><span>[页面布局]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [头部微应用]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [导航微应用]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [主内容区微应用]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [底部微应用]</span></span></code></pre></div><h2 id="关键技术实现" tabindex="-1">关键技术实现 <a class="header-anchor" href="#关键技术实现" aria-label="Permalink to &quot;关键技术实现&quot;">​</a></h2><h3 id="模块联邦" tabindex="-1">模块联邦 <a class="header-anchor" href="#模块联邦" aria-label="Permalink to &quot;模块联邦&quot;">​</a></h3><p>Webpack 5 模块联邦实现的微前端方案。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块联邦原理:</span></span>
<span class="line"><span>[应用A] -- 暴露模块 --&gt; [模块联邦] &lt;-- 消费模块 -- [应用B]</span></span>
<span class="line"><span>     |                      |                      |</span></span>
<span class="line"><span> 作为提供者             中心协调机制           作为消费者</span></span></code></pre></div><h3 id="单-spa-框架" tabindex="-1">单 SPA 框架 <a class="header-anchor" href="#单-spa-框架" aria-label="Permalink to &quot;单 SPA 框架&quot;">​</a></h3><p>基于单 SPA 的微前端解决方案。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>单SPA工作流程:</span></span>
<span class="line"><span>[注册微应用] -&gt; [路由匹配] -&gt; [加载生命周期] -&gt; [挂载应用] -&gt; [卸载清理]</span></span>
<span class="line"><span>      |             |             |             |           |</span></span>
<span class="line"><span>  应用注册表      路由事件      bootstrap     mount      unmount</span></span></code></pre></div><h3 id="web-components" tabindex="-1">Web Components <a class="header-anchor" href="#web-components" aria-label="Permalink to &quot;Web Components&quot;">​</a></h3><p>使用原生 Web Components 技术实现微前端。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Web Components方式:</span></span>
<span class="line"><span>[微应用A] -&gt; [封装为Custom Element] -&gt; [在基座中使用]</span></span>
<span class="line"><span>      |               |                      |</span></span>
<span class="line"><span>  独立开发         shadow DOM隔离         原生组件使用</span></span></code></pre></div><h2 id="通信机制" tabindex="-1">通信机制 <a class="header-anchor" href="#通信机制" aria-label="Permalink to &quot;通信机制&quot;">​</a></h2><h3 id="全局状态管理" tabindex="-1">全局状态管理 <a class="header-anchor" href="#全局状态管理" aria-label="Permalink to &quot;全局状态管理&quot;">​</a></h3><p>通过全局状态实现微应用间的数据共享。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>状态共享:</span></span>
<span class="line"><span>[微应用A] -- 发布事件 --&gt; [全局事件总线] &lt;-- 订阅事件 -- [微应用B]</span></span>
<span class="line"><span>     |                         |                         |</span></span>
<span class="line"><span>  状态变更                 状态中转站                 响应更新</span></span></code></pre></div><h3 id="自定义事件" tabindex="-1">自定义事件 <a class="header-anchor" href="#自定义事件" aria-label="Permalink to &quot;自定义事件&quot;">​</a></h3><p>使用浏览器自定义事件进行通信。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>事件通信流程:</span></span>
<span class="line"><span>// 应用A发送事件</span></span>
<span class="line"><span>window.dispatchEvent(new CustomEvent(&#39;app-event&#39;, {</span></span>
<span class="line"><span>    detail: { data: &#39;message&#39; }</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用B监听事件</span></span>
<span class="line"><span>window.addEventListener(&#39;app-event&#39;, handler);</span></span></code></pre></div><h3 id="url-参数传递" tabindex="-1">URL 参数传递 <a class="header-anchor" href="#url-参数传递" aria-label="Permalink to &quot;URL 参数传递&quot;">​</a></h3><p>通过 URL 参数实现应用间数据传递。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>URL参数传递:</span></span>
<span class="line"><span>[应用A] -- 跳转带参 --&gt; [应用B]</span></span>
<span class="line"><span>    |                    |</span></span>
<span class="line"><span> /appA?data=xxx       读取URL参数</span></span></code></pre></div><h2 id="样式隔离方案" tabindex="-1">样式隔离方案 <a class="header-anchor" href="#样式隔离方案" aria-label="Permalink to &quot;样式隔离方案&quot;">​</a></h2><h3 id="作用域-css" tabindex="-1">作用域 CSS <a class="header-anchor" href="#作用域-css" aria-label="Permalink to &quot;作用域 CSS&quot;">​</a></h3><p>通过 CSS 模块化或命名空间实现样式隔离。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>样式隔离方式:</span></span>
<span class="line"><span>// 应用A样式</span></span>
<span class="line"><span>.app-a-container { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用B样式</span></span>
<span class="line"><span>.app-b-container { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基座中同时存在但互不影响</span></span></code></pre></div><h3 id="shadow-dom" tabindex="-1">Shadow DOM <a class="header-anchor" href="#shadow-dom" aria-label="Permalink to &quot;Shadow DOM&quot;">​</a></h3><p>使用 Shadow DOM 实现完全的样式隔离。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Shadow DOM隔离:</span></span>
<span class="line"><span>[微应用] -&gt; [封装到Shadow Root] -&gt; [样式作用域隔离]</span></span>
<span class="line"><span>    |               |                    |</span></span>
<span class="line"><span>  组件内容       独立DOM树            样式不泄漏</span></span></code></pre></div><h3 id="动态样式加载" tabindex="-1">动态样式加载 <a class="header-anchor" href="#动态样式加载" aria-label="Permalink to &quot;动态样式加载&quot;">​</a></h3><p>运行时动态加载和卸载样式表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>动态样式管理:</span></span>
<span class="line"><span>[加载微应用] -&gt; [添加样式表] -&gt; [渲染组件] -&gt; [卸载应用] -&gt; [移除样式表]</span></span>
<span class="line"><span>      |              |             |             |             |</span></span>
<span class="line"><span>  应用激活       注入样式       显示界面       应用切换       清理样式</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="大型企业应用" tabindex="-1">大型企业应用 <a class="header-anchor" href="#大型企业应用" aria-label="Permalink to &quot;大型企业应用&quot;">​</a></h3><p>适用于需要多个团队协作的大型企业级应用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>企业管理系统:</span></span>
<span class="line"><span>[统一门户]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [HR系统] (React团队)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [CRM系统] (Vue团队)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [OA系统] (Angular团队)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [BI系统] (原生技术团队)</span></span></code></pre></div><h3 id="遗留系统迁移" tabindex="-1">遗留系统迁移 <a class="header-anchor" href="#遗留系统迁移" aria-label="Permalink to &quot;遗留系统迁移&quot;">​</a></h3><p>逐步迁移老旧的单体前端系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>迁移策略:</span></span>
<span class="line"><span>[遗留单体系统] -&gt; [逐步拆分为微应用] -&gt; [完全迁移]</span></span>
<span class="line"><span>       |                   |               |</span></span>
<span class="line"><span>   现有系统           共存过渡阶段       全新架构</span></span></code></pre></div><h3 id="多产品线整合" tabindex="-1">多产品线整合 <a class="header-anchor" href="#多产品线整合" aria-label="Permalink to &quot;多产品线整合&quot;">​</a></h3><p>整合公司内部多个独立产品线。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>产品线整合:</span></span>
<span class="line"><span>[统一用户界面]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [产品A] (独立域名app-a.com)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [产品B] (独立域名app-b.com)</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- [产品C] (独立域名app-c.com)</span></span></code></pre></div><h2 id="优势与挑战" tabindex="-1">优势与挑战 <a class="header-anchor" href="#优势与挑战" aria-label="Permalink to &quot;优势与挑战&quot;">​</a></h2><h3 id="核心优势" tabindex="-1">核心优势 <a class="header-anchor" href="#核心优势" aria-label="Permalink to &quot;核心优势&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>微前端价值:</span></span>
<span class="line"><span>[团队自治] -&gt; [技术多样性] -&gt; [独立部署] -&gt; [渐进升级]</span></span>
<span class="line"><span>     |             |             |             |</span></span>
<span class="line"><span>独立开发节奏   框架选择自由   快速发布能力   平滑迁移路径</span></span></code></pre></div><h3 id="面临挑战" tabindex="-1">面临挑战 <a class="header-anchor" href="#面临挑战" aria-label="Permalink to &quot;面临挑战&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>实施挑战:</span></span>
<span class="line"><span>[复杂度增加] -&gt; [一致性保证] -&gt; [性能开销] -&gt; [调试困难]</span></span>
<span class="line"><span>     |              |             |            |</span></span>
<span class="line"><span> 架构复杂性     设计系统统一     运行时损耗    跨应用调试</span></span></code></pre></div><h2 id="工具生态系统" tabindex="-1">工具生态系统 <a class="header-anchor" href="#工具生态系统" aria-label="Permalink to &quot;工具生态系统&quot;">​</a></h2><h3 id="主流框架" tabindex="-1">主流框架 <a class="header-anchor" href="#主流框架" aria-label="Permalink to &quot;主流框架&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>微前端框架对比:</span></span>
<span class="line"><span>- single-spa:   基础框架，高度灵活</span></span>
<span class="line"><span>- qiankun:      基于single-spa，开箱即用</span></span>
<span class="line"><span>- Module Federation: Webpack原生支持</span></span>
<span class="line"><span>- Luigi:        企业级微前端框架</span></span>
<span class="line"><span>- Piral:        模块化微前端解决方案</span></span></code></pre></div><h3 id="配套工具" tabindex="-1">配套工具 <a class="header-anchor" href="#配套工具" aria-label="Permalink to &quot;配套工具&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发工具链:</span></span>
<span class="line"><span>[构建工具] -&gt; [部署平台] -&gt; [监控系统] -&gt; [调试工具]</span></span>
<span class="line"><span>     |            |           |           |</span></span>
<span class="line"><span> 微应用打包     独立部署    性能监控     跨应用调试</span></span></code></pre></div>`,76)])])}const g=s(e,[["render",i]]);export{u as __pageData,g as default};
