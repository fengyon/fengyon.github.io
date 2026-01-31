import{_ as n,c as s,o as p,b as e}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"monorepo","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 monorepo？","slug":"什么是-monorepo","link":"#什么是-monorepo","children":[]},{"level":2,"title":"核心架构模式","slug":"核心架构模式","link":"#核心架构模式","children":[{"level":3,"title":"基本结构","slug":"基本结构","link":"#基本结构","children":[]},{"level":3,"title":"工作空间概念","slug":"工作空间概念","link":"#工作空间概念","children":[]}]},{"level":2,"title":"关键技术实现","slug":"关键技术实现","link":"#关键技术实现","children":[{"level":3,"title":"包管理工具支持","slug":"包管理工具支持","link":"#包管理工具支持","children":[]},{"level":3,"title":"构建工具集成","slug":"构建工具集成","link":"#构建工具集成","children":[]}]},{"level":2,"title":"依赖管理策略","slug":"依赖管理策略","link":"#依赖管理策略","children":[{"level":3,"title":"内部依赖解析","slug":"内部依赖解析","link":"#内部依赖解析","children":[]},{"level":3,"title":"版本管理策略","slug":"版本管理策略","link":"#版本管理策略","children":[]}]},{"level":2,"title":"开发工作流","slug":"开发工作流","link":"#开发工作流","children":[{"level":3,"title":"代码修改流程","slug":"代码修改流程","link":"#代码修改流程","children":[]},{"level":3,"title":"变更集管理","slug":"变更集管理","link":"#变更集管理","children":[]}]},{"level":2,"title":"工具生态系统","slug":"工具生态系统","link":"#工具生态系统","children":[{"level":3,"title":"主流工具栈","slug":"主流工具栈","link":"#主流工具栈","children":[]},{"level":3,"title":"开发体验优化","slug":"开发体验优化","link":"#开发体验优化","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"前端全栈应用","slug":"前端全栈应用","link":"#前端全栈应用","children":[]},{"level":3,"title":"组件库生态系统","slug":"组件库生态系统","link":"#组件库生态系统","children":[]},{"level":3,"title":"微前端架构","slug":"微前端架构","link":"#微前端架构","children":[]}]},{"level":2,"title":"优势与挑战","slug":"优势与挑战","link":"#优势与挑战","children":[{"level":3,"title":"核心优势","slug":"核心优势","link":"#核心优势","children":[]},{"level":3,"title":"具体收益","slug":"具体收益","link":"#具体收益","children":[]},{"level":3,"title":"面临挑战","slug":"面临挑战","link":"#面临挑战","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"规模化实践","slug":"规模化实践","link":"#规模化实践","children":[{"level":3,"title":"大型 monorepo 策略","slug":"大型-monorepo-策略","link":"#大型-monorepo-策略","children":[]},{"level":3,"title":"企业级最佳实践","slug":"企业级最佳实践","link":"#企业级最佳实践","children":[]}]}],"relativePath":"engineering/architecture/monorep.md","filePath":"engineering/architecture/monorep.md"}'),l={name:"engineering/architecture/monorep.md"};function i(o,a,c,t,r,d){return p(),s("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/architecture/monorep.md for this page in Markdown format</div><h1 id="monorepo" tabindex="-1">monorepo <a class="header-anchor" href="#monorepo" aria-label="Permalink to &quot;monorepo&quot;">​</a></h1><p>monorepo (单体仓库) 是一种软件开发策略，将多个相关项目的代码存储在同一个版本控制仓库中。与传统的多仓库方式不同，monorepo 通过统一的仓库管理来优化代码共享、依赖管理和团队协作。</p><h2 id="什么是-monorepo" tabindex="-1">什么是 monorepo？ <a class="header-anchor" href="#什么是-monorepo" aria-label="Permalink to &quot;什么是 monorepo？&quot;">​</a></h2><p>monorepo 是单个仓库中包含多个独立项目或包的代码管理方式，这些项目可以是应用、库、工具等，它们共享相同的版本控制历史、构建工具和开发流程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>多仓库 vs 单仓库:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>多仓库 (Polyrepo):</span></span>
<span class="line"><span>[仓库A] - 项目A</span></span>
<span class="line"><span>[仓库B] - 项目B  </span></span>
<span class="line"><span>[仓库C] - 项目C</span></span>
<span class="line"><span>    |       |</span></span>
<span class="line"><span>独立版本  独立流水线</span></span>
<span class="line"><span></span></span>
<span class="line"><span>单仓库 (Monorepo):</span></span>
<span class="line"><span>[统一仓库]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 项目A</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 项目B</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- 项目C</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>   共享工具和配置</span></span></code></pre></div><h2 id="核心架构模式" tabindex="-1">核心架构模式 <a class="header-anchor" href="#核心架构模式" aria-label="Permalink to &quot;核心架构模式&quot;">​</a></h2><h3 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h3><p>monorepo 的典型目录组织结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>monorepo/</span></span>
<span class="line"><span>├── apps/                 # 应用目录</span></span>
<span class="line"><span>│   ├── web-app/         # 网页应用</span></span>
<span class="line"><span>│   ├── mobile-app/      # 移动应用</span></span>
<span class="line"><span>│   └── admin/           # 管理后台</span></span>
<span class="line"><span>├── packages/            # 共享包</span></span>
<span class="line"><span>│   ├── ui-components/   # UI组件库</span></span>
<span class="line"><span>│   ├── utils/           # 工具函数</span></span>
<span class="line"><span>│   ├── config/          # 配置包</span></span>
<span class="line"><span>│   └── api/             # API客户端</span></span>
<span class="line"><span>├── tools/               # 开发工具</span></span>
<span class="line"><span>├── docs/                # 文档</span></span>
<span class="line"><span>└── 配置文件</span></span>
<span class="line"><span>    ├── package.json</span></span>
<span class="line"><span>    ├── turbo.json</span></span>
<span class="line"><span>    └── pnpm-workspace.yaml</span></span></code></pre></div><h3 id="工作空间概念" tabindex="-1">工作空间概念 <a class="header-anchor" href="#工作空间概念" aria-label="Permalink to &quot;工作空间概念&quot;">​</a></h3><p>通过工作空间链接管理多个包的依赖关系。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工作空间依赖:</span></span>
<span class="line"><span>[应用A] -- 依赖 --&gt; [共享组件库]</span></span>
<span class="line"><span>[应用B] -- 依赖 --&gt; [共享组件库]</span></span>
<span class="line"><span>[应用C] -- 依赖 --&gt; [工具包]</span></span>
<span class="line"><span>    |                  |</span></span>
<span class="line"><span> 直接引用           本地链接</span></span>
<span class="line"><span>    |                  |</span></span>
<span class="line"><span> 无需发布           实时同步</span></span></code></pre></div><h2 id="关键技术实现" tabindex="-1">关键技术实现 <a class="header-anchor" href="#关键技术实现" aria-label="Permalink to &quot;关键技术实现&quot;">​</a></h2><h3 id="包管理工具支持" tabindex="-1">包管理工具支持 <a class="header-anchor" href="#包管理工具支持" aria-label="Permalink to &quot;包管理工具支持&quot;">​</a></h3><p>现代包管理器对 monorepo 的原生支持。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工具对比:</span></span>
<span class="line"><span>- pnpm:    pnpm-workspace.yaml</span></span>
<span class="line"><span>- yarn:    workspaces (package.json)</span></span>
<span class="line"><span>- npm:     workspaces (package.json)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置示例:</span></span>
<span class="line"><span>// package.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;workspaces&quot;: [&quot;packages/*&quot;, &quot;apps/*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="构建工具集成" tabindex="-1">构建工具集成 <a class="header-anchor" href="#构建工具集成" aria-label="Permalink to &quot;构建工具集成&quot;">​</a></h3><p>专用构建工具优化 monorepo 的构建性能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建工具:</span></span>
<span class="line"><span>Turborepo:  [依赖分析] -&gt; [缓存优化] -&gt; [并行构建]</span></span>
<span class="line"><span>        |          |           |           |</span></span>
<span class="line"><span>     快速构建    智能跳过    缓存复用    最大并发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Nx:        [项目图] -&gt; [任务管道] -&gt; [分布式执行]</span></span>
<span class="line"><span>        |        |           |           |</span></span>
<span class="line"><span>     影响分析   任务调度    优化执行    集群构建</span></span></code></pre></div><h2 id="依赖管理策略" tabindex="-1">依赖管理策略 <a class="header-anchor" href="#依赖管理策略" aria-label="Permalink to &quot;依赖管理策略&quot;">​</a></h2><h3 id="内部依赖解析" tabindex="-1">内部依赖解析 <a class="header-anchor" href="#内部依赖解析" aria-label="Permalink to &quot;内部依赖解析&quot;">​</a></h3><p>monorepo 内部包之间的依赖关系管理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内部依赖流程:</span></span>
<span class="line"><span>[包A] -- 依赖 --&gt; [包B]</span></span>
<span class="line"><span>    |               |</span></span>
<span class="line"><span> 源码引用        本地符号链接</span></span>
<span class="line"><span>    |               |</span></span>
<span class="line"><span> 开发时实时更新   无需发布npm</span></span></code></pre></div><h3 id="版本管理策略" tabindex="-1">版本管理策略 <a class="header-anchor" href="#版本管理策略" aria-label="Permalink to &quot;版本管理策略&quot;">​</a></h3><p>monorepo 中版本号的协同管理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>版本管理方式:</span></span>
<span class="line"><span>固定版本:   所有包使用相同版本号 (如: 1.0.0)</span></span>
<span class="line"><span>独立版本:   每个包独立版本号 (如: A@1.0.0, B@2.1.0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>发布流程:</span></span>
<span class="line"><span>[代码变更] -&gt; [版本号更新] -&gt; [依赖更新] -&gt; [发布包]</span></span>
<span class="line"><span>     |             |             |           |</span></span>
<span class="line"><span> 功能开发      自动/手动      联动更新     批量发布</span></span></code></pre></div><h2 id="开发工作流" tabindex="-1">开发工作流 <a class="header-anchor" href="#开发工作流" aria-label="Permalink to &quot;开发工作流&quot;">​</a></h2><h3 id="代码修改流程" tabindex="-1">代码修改流程 <a class="header-anchor" href="#代码修改流程" aria-label="Permalink to &quot;代码修改流程&quot;">​</a></h3><p>在 monorepo 中进行功能开发和修改的典型流程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发流程:</span></span>
<span class="line"><span>[创建分支] -&gt; [修改多个包] -&gt; [本地测试] -&gt; [提交PR] -&gt; [CI验证] -&gt; [合并]</span></span>
<span class="line"><span>     |           |             |           |          |           |</span></span>
<span class="line"><span> 功能分支     跨包变更       集成测试    代码审查    全量测试     主干发布</span></span></code></pre></div><h3 id="变更集管理" tabindex="-1">变更集管理 <a class="header-anchor" href="#变更集管理" aria-label="Permalink to &quot;变更集管理&quot;">​</a></h3><p>通过变更集工具管理版本发布。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变更集工作流:</span></span>
<span class="line"><span>[修改代码] -&gt; [生成changeset] -&gt; [版本规划] -&gt; [发布包]</span></span>
<span class="line"><span>     |             |               |           |</span></span>
<span class="line"><span> 功能实现       描述变更影响      自动计算版本  批量发布</span></span></code></pre></div><h2 id="工具生态系统" tabindex="-1">工具生态系统 <a class="header-anchor" href="#工具生态系统" aria-label="Permalink to &quot;工具生态系统&quot;">​</a></h2><h3 id="主流工具栈" tabindex="-1">主流工具栈 <a class="header-anchor" href="#主流工具栈" aria-label="Permalink to &quot;主流工具栈&quot;">​</a></h3><p>monorepo 开发的完整工具链。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工具栈分层:</span></span>
<span class="line"><span>[包管理器] -&gt; [构建工具] -&gt; [版本工具] -&gt; [部署平台]</span></span>
<span class="line"><span>    |            |            |            |</span></span>
<span class="line"><span> pnpm/yarn    Turborepo    Changesets    Vercel</span></span>
<span class="line"><span>    |            |            |            |</span></span>
<span class="line"><span> 依赖管理      任务调度      版本管理      部署发布</span></span></code></pre></div><h3 id="开发体验优化" tabindex="-1">开发体验优化 <a class="header-anchor" href="#开发体验优化" aria-label="Permalink to &quot;开发体验优化&quot;">​</a></h3><p>提升 monorepo 开发效率的配套工具。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发工具:</span></span>
<span class="line"><span>- 代码生成器:   快速创建新包模板</span></span>
<span class="line"><span>- 依赖可视化:   图形化展示包关系</span></span>
<span class="line"><span>- 影响分析:   识别变更的影响范围</span></span>
<span class="line"><span>- 任务运行器:   智能执行相关任务</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="前端全栈应用" tabindex="-1">前端全栈应用 <a class="header-anchor" href="#前端全栈应用" aria-label="Permalink to &quot;前端全栈应用&quot;">​</a></h3><p>前后端项目在同一个仓库中管理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>全栈monorepo:</span></span>
<span class="line"><span>monorepo/</span></span>
<span class="line"><span>├── apps/</span></span>
<span class="line"><span>│   ├── frontend/     # 前端React应用</span></span>
<span class="line"><span>│   ├── backend/      # 后端Node.js服务</span></span>
<span class="line"><span>│   └── mobile/       # 移动端应用</span></span>
<span class="line"><span>├── packages/</span></span>
<span class="line"><span>│   ├── database/     # 数据库模型</span></span>
<span class="line"><span>│   ├── api-schema/   # API接口定义</span></span>
<span class="line"><span>│   └── shared/       # 前后端共享代码</span></span>
<span class="line"><span>└── 统一配置和脚本</span></span></code></pre></div><h3 id="组件库生态系统" tabindex="-1">组件库生态系统 <a class="header-anchor" href="#组件库生态系统" aria-label="Permalink to &quot;组件库生态系统&quot;">​</a></h3><p>UI 组件库及其相关生态项目。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件库monorepo:</span></span>
<span class="line"><span>monorepo/</span></span>
<span class="line"><span>├── packages/</span></span>
<span class="line"><span>│   ├── core/         # 核心组件</span></span>
<span class="line"><span>│   ├── icons/        # 图标库</span></span>
<span class="line"><span>│   ├── themes/       # 主题系统</span></span>
<span class="line"><span>│   └── docs/         # 文档站点</span></span>
<span class="line"><span>├── examples/         # 使用示例</span></span>
<span class="line"><span>└── tools/           # 构建工具</span></span></code></pre></div><h3 id="微前端架构" tabindex="-1">微前端架构 <a class="header-anchor" href="#微前端架构" aria-label="Permalink to &quot;微前端架构&quot;">​</a></h3><p>微前端项目在 monorepo 中的组织方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>微前端monorepo:</span></span>
<span class="line"><span>monorepo/</span></span>
<span class="line"><span>├── apps/</span></span>
<span class="line"><span>│   ├── shell/        # 基座应用</span></span>
<span class="line"><span>│   ├── micro-app-a/  # 微应用A</span></span>
<span class="line"><span>│   ├── micro-app-b/  # 微应用B</span></span>
<span class="line"><span>│   └── micro-app-c/  # 微应用C</span></span>
<span class="line"><span>├── packages/</span></span>
<span class="line"><span>│   ├── shared-utils/ # 共享工具</span></span>
<span class="line"><span>│   └── types/        # 类型定义</span></span>
<span class="line"><span>└── 统一构建部署配置</span></span></code></pre></div><h2 id="优势与挑战" tabindex="-1">优势与挑战 <a class="header-anchor" href="#优势与挑战" aria-label="Permalink to &quot;优势与挑战&quot;">​</a></h2><h3 id="核心优势" tabindex="-1">核心优势 <a class="header-anchor" href="#核心优势" aria-label="Permalink to &quot;核心优势&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>monorepo价值:</span></span>
<span class="line"><span>[代码共享] -&gt; [统一工具链] -&gt; [简化依赖] -&gt; [更好的协作]</span></span>
<span class="line"><span>     |            |            |            |</span></span>
<span class="line"><span> 跨项目复用     一致的标准     内部包链接     全局可见性</span></span></code></pre></div><h3 id="具体收益" tabindex="-1">具体收益 <a class="header-anchor" href="#具体收益" aria-label="Permalink to &quot;具体收益&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>实际收益展示:</span></span>
<span class="line"><span>重构效率:    [跨包重构] -&gt; 原子提交 -&gt; 无破坏性变更</span></span>
<span class="line"><span>    |               |           |           |</span></span>
<span class="line"><span> 安全重构       一次性修改   完整提交   保证兼容性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开发体验:    [新成员] -&gt; 单一仓库克隆 -&gt; 快速上手</span></span>
<span class="line"><span>    |               |               |</span></span>
<span class="line"><span> 降低门槛       所有代码可用     统一开发环境</span></span></code></pre></div><h3 id="面临挑战" tabindex="-1">面临挑战 <a class="header-anchor" href="#面临挑战" aria-label="Permalink to &quot;面临挑战&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>实施挑战:</span></span>
<span class="line"><span>[仓库规模] -&gt; [构建性能] -&gt; [权限控制] -&gt; [工具复杂度]</span></span>
<span class="line"><span>     |            |            |            |</span></span>
<span class="line"><span> 巨型仓库       构建耗时       细粒度权限     学习成本</span></span></code></pre></div><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应对策略:</span></span>
<span class="line"><span>- 分层结构:   按领域组织代码</span></span>
<span class="line"><span>- 增量构建:   只构建受影响部分  </span></span>
<span class="line"><span>- 代码分割:   按需加载模块</span></span>
<span class="line"><span>- 工具优化:   使用专用monorepo工具</span></span></code></pre></div><h2 id="规模化实践" tabindex="-1">规模化实践 <a class="header-anchor" href="#规模化实践" aria-label="Permalink to &quot;规模化实践&quot;">​</a></h2><h3 id="大型-monorepo-策略" tabindex="-1">大型 monorepo 策略 <a class="header-anchor" href="#大型-monorepo-策略" aria-label="Permalink to &quot;大型 monorepo 策略&quot;">​</a></h3><p>应对超大规模 monorepo 的技术方案。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>规模化方案:</span></span>
<span class="line"><span>[代码分割] -&gt; [分布式构建] -&gt; [增量部署] -&gt; [智能缓存]</span></span>
<span class="line"><span>     |            |            |            |</span></span>
<span class="line"><span> 模块化架构     并行编译     部分发布     构建缓存</span></span></code></pre></div><h3 id="企业级最佳实践" tabindex="-1">企业级最佳实践 <a class="header-anchor" href="#企业级最佳实践" aria-label="Permalink to &quot;企业级最佳实践&quot;">​</a></h3><p>企业环境中 monorepo 的成功模式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>企业实践:</span></span>
<span class="line"><span>[代码所有权] -&gt; [质量门禁] -&gt; [自动化流水线] -&gt; [监控告警]</span></span>
<span class="line"><span>     |            |            |            |</span></span>
<span class="line"><span> 明确责任       代码标准     持续集成     性能监控</span></span></code></pre></div>`,67)])])}const g=n(l,[["render",i]]);export{u as __pageData,g as default};
