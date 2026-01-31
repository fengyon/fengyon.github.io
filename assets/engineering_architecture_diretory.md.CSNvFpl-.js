import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"常用目录结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础项目结构","slug":"基础项目结构","link":"#基础项目结构","children":[{"level":3,"title":"简单静态网站","slug":"简单静态网站","link":"#简单静态网站","children":[]},{"level":3,"title":"模块化前端项目","slug":"模块化前端项目","link":"#模块化前端项目","children":[]}]},{"level":2,"title":"框架特定结构","slug":"框架特定结构","link":"#框架特定结构","children":[{"level":3,"title":"React 项目结构","slug":"react-项目结构","link":"#react-项目结构","children":[]},{"level":3,"title":"Vue 项目结构","slug":"vue-项目结构","link":"#vue-项目结构","children":[]}]},{"level":2,"title":"按功能组织结构","slug":"按功能组织结构","link":"#按功能组织结构","children":[{"level":3,"title":"功能文件夹模式","slug":"功能文件夹模式","link":"#功能文件夹模式","children":[]},{"level":3,"title":"按文件类型组织","slug":"按文件类型组织","link":"#按文件类型组织","children":[]}]},{"level":2,"title":"配置和构建文件","slug":"配置和构建文件","link":"#配置和构建文件","children":[{"level":3,"title":"项目根目录结构","slug":"项目根目录结构","link":"#项目根目录结构","children":[]}]},{"level":2,"title":"大型项目结构","slug":"大型项目结构","link":"#大型项目结构","children":[{"level":3,"title":"Monorepo 结构","slug":"monorepo-结构","link":"#monorepo-结构","children":[]},{"level":3,"title":"微前端架构","slug":"微前端架构","link":"#微前端架构","children":[]}]},{"level":2,"title":"特殊类型项目","slug":"特殊类型项目","link":"#特殊类型项目","children":[{"level":3,"title":"组件库结构","slug":"组件库结构","link":"#组件库结构","children":[]},{"level":3,"title":"工具库结构","slug":"工具库结构","link":"#工具库结构","children":[]}]},{"level":2,"title":"目录命名规范","slug":"目录命名规范","link":"#目录命名规范","children":[{"level":3,"title":"常用目录命名约定","slug":"常用目录命名约定","link":"#常用目录命名约定","children":[]}]},{"level":2,"title":"最佳实践建议","slug":"最佳实践建议","link":"#最佳实践建议","children":[{"level":3,"title":"结构设计原则","slug":"结构设计原则","link":"#结构设计原则","children":[]},{"level":3,"title":"规模适配策略","slug":"规模适配策略","link":"#规模适配策略","children":[]}]}],"relativePath":"engineering/architecture/diretory.md","filePath":"engineering/architecture/diretory.md"}'),e={name:"engineering/architecture/diretory.md"};function i(c,s,t,o,r,d){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/architecture/diretory.md for this page in Markdown format</div><h1 id="常用目录结构" tabindex="-1">常用目录结构 <a class="header-anchor" href="#常用目录结构" aria-label="Permalink to &quot;常用目录结构&quot;">​</a></h1><p>前端项目的目录结构是工程化的基础，良好的组织结构能够提高代码可维护性、团队协作效率和项目可扩展性。不同的项目类型和规模需要采用不同的目录结构策略。</p><h2 id="基础项目结构" tabindex="-1">基础项目结构 <a class="header-anchor" href="#基础项目结构" aria-label="Permalink to &quot;基础项目结构&quot;">​</a></h2><h3 id="简单静态网站" tabindex="-1">简单静态网站 <a class="header-anchor" href="#简单静态网站" aria-label="Permalink to &quot;简单静态网站&quot;">​</a></h3><p>适用于小型展示类项目或原型开发。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>project/</span></span>
<span class="line"><span>├── index.html          # 入口HTML文件</span></span>
<span class="line"><span>├── css/</span></span>
<span class="line"><span>│   ├── style.css       # 主样式文件</span></span>
<span class="line"><span>│   └── reset.css       # 重置样式</span></span>
<span class="line"><span>├── js/</span></span>
<span class="line"><span>│   ├── main.js         # 主逻辑文件</span></span>
<span class="line"><span>│   └── utils.js        # 工具函数</span></span>
<span class="line"><span>└── images/             # 图片资源</span></span>
<span class="line"><span>    ├── logo.png</span></span>
<span class="line"><span>    └── banner.jpg</span></span></code></pre></div><h3 id="模块化前端项目" tabindex="-1">模块化前端项目 <a class="header-anchor" href="#模块化前端项目" aria-label="Permalink to &quot;模块化前端项目&quot;">​</a></h3><p>中等复杂度的单页面应用常用结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── assets/             # 静态资源</span></span>
<span class="line"><span>│   ├── images/         # 图片文件</span></span>
<span class="line"><span>│   ├── fonts/          # 字体文件</span></span>
<span class="line"><span>│   └── styles/         # 全局样式</span></span>
<span class="line"><span>├── components/         # 通用组件</span></span>
<span class="line"><span>│   ├── Button/</span></span>
<span class="line"><span>│   ├── Modal/</span></span>
<span class="line"><span>│   └── Input/</span></span>
<span class="line"><span>├── pages/              # 页面组件</span></span>
<span class="line"><span>│   ├── Home/</span></span>
<span class="line"><span>│   ├── About/</span></span>
<span class="line"><span>│   └── Contact/</span></span>
<span class="line"><span>├── utils/              # 工具函数</span></span>
<span class="line"><span>├── constants/          # 常量定义</span></span>
<span class="line"><span>└── index.js            # 应用入口</span></span></code></pre></div><h2 id="框架特定结构" tabindex="-1">框架特定结构 <a class="header-anchor" href="#框架特定结构" aria-label="Permalink to &quot;框架特定结构&quot;">​</a></h2><h3 id="react-项目结构" tabindex="-1">React 项目结构 <a class="header-anchor" href="#react-项目结构" aria-label="Permalink to &quot;React 项目结构&quot;">​</a></h3><p>现代 React 应用的典型目录组织。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── components/         # 可复用组件</span></span>
<span class="line"><span>│   ├── common/        # 通用基础组件</span></span>
<span class="line"><span>│   └── ui/           # 业务UI组件</span></span>
<span class="line"><span>├── hooks/             # 自定义Hooks</span></span>
<span class="line"><span>├── pages/             # 页面组件</span></span>
<span class="line"><span>│   ├── home/</span></span>
<span class="line"><span>│   │   ├── components/# 页面专用组件</span></span>
<span class="line"><span>│   │   └── index.jsx</span></span>
<span class="line"><span>├── services/          # API服务</span></span>
<span class="line"><span>├── store/             # 状态管理</span></span>
<span class="line"><span>│   ├── slices/        # Redux slices</span></span>
<span class="line"><span>│   └── index.js</span></span>
<span class="line"><span>├── utils/             # 工具函数</span></span>
<span class="line"><span>├── constants/         # 常量配置</span></span>
<span class="line"><span>└── App.jsx            # 根组件</span></span></code></pre></div><h3 id="vue-项目结构" tabindex="-1">Vue 项目结构 <a class="header-anchor" href="#vue-项目结构" aria-label="Permalink to &quot;Vue 项目结构&quot;">​</a></h3><p>Vue 3 项目推荐结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── assets/            # 静态资源</span></span>
<span class="line"><span>├── components/        # 组件目录</span></span>
<span class="line"><span>│   ├── base/         # 基础组件</span></span>
<span class="line"><span>│   └── business/     # 业务组件</span></span>
<span class="line"><span>├── composables/       # 组合式函数</span></span>
<span class="line"><span>├── views/            # 页面视图</span></span>
<span class="line"><span>├── router/           # 路由配置</span></span>
<span class="line"><span>├── stores/           # 状态管理</span></span>
<span class="line"><span>├── utils/            # 工具函数</span></span>
<span class="line"><span>└── main.js           # 应用入口</span></span></code></pre></div><h2 id="按功能组织结构" tabindex="-1">按功能组织结构 <a class="header-anchor" href="#按功能组织结构" aria-label="Permalink to &quot;按功能组织结构&quot;">​</a></h2><h3 id="功能文件夹模式" tabindex="-1">功能文件夹模式 <a class="header-anchor" href="#功能文件夹模式" aria-label="Permalink to &quot;功能文件夹模式&quot;">​</a></h3><p>将相关文件按功能模块分组，提高内聚性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── features/          # 功能模块</span></span>
<span class="line"><span>│   ├── auth/         # 认证模块</span></span>
<span class="line"><span>│   │   ├── components/</span></span>
<span class="line"><span>│   │   ├── hooks/</span></span>
<span class="line"><span>│   │   ├── services/</span></span>
<span class="line"><span>│   │   └── index.js</span></span>
<span class="line"><span>│   ├── dashboard/     # 仪表板模块</span></span>
<span class="line"><span>│   └── settings/      # 设置模块</span></span>
<span class="line"><span>├── shared/            # 共享资源</span></span>
<span class="line"><span>│   ├── components/    # 共享组件</span></span>
<span class="line"><span>│   ├── utils/         # 共享工具</span></span>
<span class="line"><span>│   └── constants/     # 共享常量</span></span>
<span class="line"><span>└── App.jsx</span></span></code></pre></div><h3 id="按文件类型组织" tabindex="-1">按文件类型组织 <a class="header-anchor" href="#按文件类型组织" aria-label="Permalink to &quot;按文件类型组织&quot;">​</a></h3><p>传统但清晰的按文件类型分组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── components/        # 所有组件</span></span>
<span class="line"><span>├── hooks/            # 所有Hooks</span></span>
<span class="line"><span>├── services/         # 所有API服务</span></span>
<span class="line"><span>├── utils/            # 所有工具函数</span></span>
<span class="line"><span>├── constants/        # 所有常量</span></span>
<span class="line"><span>└── styles/           # 所有样式文件</span></span></code></pre></div><h2 id="配置和构建文件" tabindex="-1">配置和构建文件 <a class="header-anchor" href="#配置和构建文件" aria-label="Permalink to &quot;配置和构建文件&quot;">​</a></h2><h3 id="项目根目录结构" tabindex="-1">项目根目录结构 <a class="header-anchor" href="#项目根目录结构" aria-label="Permalink to &quot;项目根目录结构&quot;">​</a></h3><p>项目配置和构建相关文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>project-root/</span></span>
<span class="line"><span>├── public/           # 静态公共文件</span></span>
<span class="line"><span>│   ├── index.html</span></span>
<span class="line"><span>│   └── favicon.ico</span></span>
<span class="line"><span>├── src/              # 源代码目录</span></span>
<span class="line"><span>├── tests/            # 测试文件</span></span>
<span class="line"><span>├── docs/             # 项目文档</span></span>
<span class="line"><span>├── build/            # 构建输出</span></span>
<span class="line"><span>├── node_modules/     # 依赖包</span></span>
<span class="line"><span>├── package.json      # 项目配置</span></span>
<span class="line"><span>├── package-lock.json # 依赖锁定</span></span>
<span class="line"><span>├── .gitignore        # Git忽略配置</span></span>
<span class="line"><span>├── README.md         # 项目说明</span></span>
<span class="line"><span>└── 配置文件</span></span>
<span class="line"><span>    ├── webpack.config.js</span></span>
<span class="line"><span>    ├── babel.config.js</span></span>
<span class="line"><span>    └── eslint.config.js</span></span></code></pre></div><h2 id="大型项目结构" tabindex="-1">大型项目结构 <a class="header-anchor" href="#大型项目结构" aria-label="Permalink to &quot;大型项目结构&quot;">​</a></h2><h3 id="monorepo-结构" tabindex="-1">Monorepo 结构 <a class="header-anchor" href="#monorepo-结构" aria-label="Permalink to &quot;Monorepo 结构&quot;">​</a></h3><p>多包管理的单体仓库结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>monorepo/</span></span>
<span class="line"><span>├── packages/         # 多个包</span></span>
<span class="line"><span>│   ├── ui-kit/      # UI组件库</span></span>
<span class="line"><span>│   ├── utils/       # 工具库</span></span>
<span class="line"><span>│   └── config/      # 配置包</span></span>
<span class="line"><span>├── apps/            # 应用目录</span></span>
<span class="line"><span>│   ├── web-app/     # 网页应用</span></span>
<span class="line"><span>│   ├── mobile-app/  # 移动应用</span></span>
<span class="line"><span>│   └── admin/       # 管理后台</span></span>
<span class="line"><span>├── tools/           # 开发工具</span></span>
<span class="line"><span>├── package.json     # 根包配置</span></span>
<span class="line"><span>└── pnpm-workspace.yaml # 工作空间配置</span></span></code></pre></div><h3 id="微前端架构" tabindex="-1">微前端架构 <a class="header-anchor" href="#微前端架构" aria-label="Permalink to &quot;微前端架构&quot;">​</a></h3><p>微前端项目的目录组织。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>micro-frontend/</span></span>
<span class="line"><span>├── shell/           # 基座应用</span></span>
<span class="line"><span>├── micro-apps/      # 微应用集合</span></span>
<span class="line"><span>│   ├── app-header/  # 头部应用</span></span>
<span class="line"><span>│   ├── app-nav/     # 导航应用</span></span>
<span class="line"><span>│   ├── app-main/    # 主应用</span></span>
<span class="line"><span>│   └── app-footer/  # 底部应用</span></span>
<span class="line"><span>├── shared/          # 共享依赖</span></span>
<span class="line"><span>└── config/          # 微前端配置</span></span></code></pre></div><h2 id="特殊类型项目" tabindex="-1">特殊类型项目 <a class="header-anchor" href="#特殊类型项目" aria-label="Permalink to &quot;特殊类型项目&quot;">​</a></h2><h3 id="组件库结构" tabindex="-1">组件库结构 <a class="header-anchor" href="#组件库结构" aria-label="Permalink to &quot;组件库结构&quot;">​</a></h3><p>UI 组件库的专用结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>component-library/</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── components/   # 组件源码</span></span>
<span class="line"><span>│   │   ├── Button/</span></span>
<span class="line"><span>│   │   │   ├── Button.jsx</span></span>
<span class="line"><span>│   │   │   ├── Button.css</span></span>
<span class="line"><span>│   │   │   └── index.js</span></span>
<span class="line"><span>│   │   └── index.js  # 统一导出</span></span>
<span class="line"><span>│   └── styles/       # 样式文件</span></span>
<span class="line"><span>├── stories/          # 文档示例</span></span>
<span class="line"><span>├── tests/            # 测试文件</span></span>
<span class="line"><span>└── dist/             # 构建输出</span></span></code></pre></div><h3 id="工具库结构" tabindex="-1">工具库结构 <a class="header-anchor" href="#工具库结构" aria-label="Permalink to &quot;工具库结构&quot;">​</a></h3><p>JavaScript 工具库的组织方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>utils-library/</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── string/       # 字符串工具</span></span>
<span class="line"><span>│   ├── array/        # 数组工具</span></span>
<span class="line"><span>│   ├── object/       # 对象工具</span></span>
<span class="line"><span>│   └── index.js      # 主入口</span></span>
<span class="line"><span>├── tests/            # 单元测试</span></span>
<span class="line"><span>├── types/            # TypeScript类型</span></span>
<span class="line"><span>└── docs/             # API文档</span></span></code></pre></div><h2 id="目录命名规范" tabindex="-1">目录命名规范 <a class="header-anchor" href="#目录命名规范" aria-label="Permalink to &quot;目录命名规范&quot;">​</a></h2><h3 id="常用目录命名约定" tabindex="-1">常用目录命名约定 <a class="header-anchor" href="#常用目录命名约定" aria-label="Permalink to &quot;常用目录命名约定&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>目录命名示例:</span></span>
<span class="line"><span>- src/               # 源代码 (source)</span></span>
<span class="line"><span>- lib/               # 库文件 (library) </span></span>
<span class="line"><span>- dist/              # 分发文件 (distribution)</span></span>
<span class="line"><span>- build/             # 构建输出</span></span>
<span class="line"><span>- public/            # 公共静态资源</span></span>
<span class="line"><span>- assets/            # 资源文件</span></span>
<span class="line"><span>- components/        # 组件目录</span></span>
<span class="line"><span>- utils/             # 工具函数</span></span>
<span class="line"><span>- hooks/             # React Hooks</span></span>
<span class="line"><span>- stores/            # 状态存储</span></span>
<span class="line"><span>- services/          # API服务</span></span>
<span class="line"><span>- constants/         # 常量定义</span></span>
<span class="line"><span>- types/             # 类型定义</span></span>
<span class="line"><span>- tests/             # 测试文件</span></span>
<span class="line"><span>- docs/              # 文档目录</span></span>
<span class="line"><span>- scripts/           # 脚本文件</span></span></code></pre></div><h2 id="最佳实践建议" tabindex="-1">最佳实践建议 <a class="header-anchor" href="#最佳实践建议" aria-label="Permalink to &quot;最佳实践建议&quot;">​</a></h2><h3 id="结构设计原则" tabindex="-1">结构设计原则 <a class="header-anchor" href="#结构设计原则" aria-label="Permalink to &quot;结构设计原则&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>良好目录结构特征:</span></span>
<span class="line"><span>[清晰的层次] -&gt; [快速定位文件]</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>[合理的分组] -&gt; [相关文件聚集]</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>[一致的命名] -&gt; [团队协作顺畅]</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>[适度的拆分] -&gt; [避免过度碎片化]</span></span></code></pre></div><h3 id="规模适配策略" tabindex="-1">规模适配策略 <a class="header-anchor" href="#规模适配策略" aria-label="Permalink to &quot;规模适配策略&quot;">​</a></h3><p>根据项目规模选择合适的结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>项目规模 vs 结构复杂度:</span></span>
<span class="line"><span>小型项目: [扁平结构] -&gt; 简单直接</span></span>
<span class="line"><span>    |          |</span></span>
<span class="line"><span> 快速启动     易于维护</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中型项目: [功能分组] -&gt; 清晰组织</span></span>
<span class="line"><span>    |          |</span></span>
<span class="line"><span> 模块化      团队协作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>大型项目: [领域驱动] -&gt; 高度内聚</span></span>
<span class="line"><span>    |          |</span></span>
<span class="line"><span> 可扩展性    独立开发</span></span></code></pre></div>`,51)])])}const b=n(e,[["render",i]]);export{u as __pageData,b as default};
