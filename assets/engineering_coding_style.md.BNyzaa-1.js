import{_ as s,c as n,o as l,b as e}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"代码规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是代码规范？","slug":"什么是代码规范","link":"#什么是代码规范","children":[]},{"level":2,"title":"为什么需要代码规范？","slug":"为什么需要代码规范","link":"#为什么需要代码规范","children":[{"level":3,"title":"团队协作效率","slug":"团队协作效率","link":"#团队协作效率","children":[]},{"level":3,"title":"代码可维护性","slug":"代码可维护性","link":"#代码可维护性","children":[]}]},{"level":2,"title":"核心规范内容","slug":"核心规范内容","link":"#核心规范内容","children":[{"level":3,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":3,"title":"文件组织规范","slug":"文件组织规范","link":"#文件组织规范","children":[]},{"level":3,"title":"代码格式规范","slug":"代码格式规范","link":"#代码格式规范","children":[]},{"level":3,"title":"注释规范","slug":"注释规范","link":"#注释规范","children":[]}]},{"level":2,"title":"规范实施工具","slug":"规范实施工具","link":"#规范实施工具","children":[{"level":3,"title":"代码检查工具","slug":"代码检查工具","link":"#代码检查工具","children":[]},{"level":3,"title":"编辑器配置","slug":"编辑器配置","link":"#编辑器配置","children":[]}]},{"level":2,"title":"具体规范示例","slug":"具体规范示例","link":"#具体规范示例","children":[{"level":3,"title":"JavaScript/TypeScript 规范","slug":"javascript-typescript-规范","link":"#javascript-typescript-规范","children":[]},{"level":3,"title":"CSS 规范","slug":"css-规范","link":"#css-规范","children":[]},{"level":3,"title":"组件规范","slug":"组件规范","link":"#组件规范","children":[]}]},{"level":2,"title":"团队协作规范","slug":"团队协作规范","link":"#团队协作规范","children":[{"level":3,"title":"Git 工作流","slug":"git-工作流","link":"#git-工作流","children":[]},{"level":3,"title":"代码审查规范","slug":"代码审查规范","link":"#代码审查规范","children":[]}]},{"level":2,"title":"规范配置文件示例","slug":"规范配置文件示例","link":"#规范配置文件示例","children":[{"level":3,"title":"ESLint 配置","slug":"eslint-配置","link":"#eslint-配置","children":[]},{"level":3,"title":"Prettier 配置","slug":"prettier-配置","link":"#prettier-配置","children":[]}]},{"level":2,"title":"规范实施策略","slug":"规范实施策略","link":"#规范实施策略","children":[{"level":3,"title":"渐进式采用","slug":"渐进式采用","link":"#渐进式采用","children":[]},{"level":3,"title":"规范文档化","slug":"规范文档化","link":"#规范文档化","children":[]}]},{"level":2,"title":"规范的价值体现","slug":"规范的价值体现","link":"#规范的价值体现","children":[{"level":3,"title":"质量提升","slug":"质量提升","link":"#质量提升","children":[]},{"level":3,"title":"成本节约","slug":"成本节约","link":"#成本节约","children":[]}]}],"relativePath":"engineering/coding/style.md","filePath":"engineering/coding/style.md"}'),p={name:"engineering/coding/style.md"};function t(i,a,c,o,r,d){return l(),n("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/coding/style.md for this page in Markdown format</div><h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><p>代码规范是一套约定俗成的编码规则和标准，用于统一团队成员的代码风格和提高代码质量。它涵盖了命名约定、文件组织、格式要求、注释规范等多个方面，是团队协作和项目可维护性的重要保障。</p><h2 id="什么是代码规范" tabindex="-1">什么是代码规范？ <a class="header-anchor" href="#什么是代码规范" aria-label="Permalink to &quot;什么是代码规范？&quot;">​</a></h2><p>代码规范是开发团队共同遵守的编程约定，确保代码风格一致、结构清晰、易于理解和维护。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>无规范代码:</span></span>
<span class="line"><span>function calc(a,b){return a+b}  // 难以阅读</span></span>
<span class="line"><span>const x=10; const y=20;         // 风格不一致</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有规范代码:</span></span>
<span class="line"><span>function calculateSum(numberA, numberB) {  // 清晰明确</span></span>
<span class="line"><span>    return numberA + numberB;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const firstNumber = 10;</span></span>
<span class="line"><span>const secondNumber = 20;                   // 统一风格</span></span></code></pre></div><h2 id="为什么需要代码规范" tabindex="-1">为什么需要代码规范？ <a class="header-anchor" href="#为什么需要代码规范" aria-label="Permalink to &quot;为什么需要代码规范？&quot;">​</a></h2><h3 id="团队协作效率" tabindex="-1">团队协作效率 <a class="header-anchor" href="#团队协作效率" aria-label="Permalink to &quot;团队协作效率&quot;">​</a></h3><p>统一规范减少沟通成本，提高协作效率。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>团队协作对比:</span></span>
<span class="line"><span>无规范: [开发者A] -&gt; [风格A] + [开发者B] -&gt; [风格B] = [冲突混乱]</span></span>
<span class="line"><span>有规范: [开发者A] -&gt; [统一规范] + [开发者B] -&gt; [统一规范] = [和谐高效]</span></span></code></pre></div><h3 id="代码可维护性" tabindex="-1">代码可维护性 <a class="header-anchor" href="#代码可维护性" aria-label="Permalink to &quot;代码可维护性&quot;">​</a></h3><p>规范的代码更易于理解、修改和扩展。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>维护成本对比:</span></span>
<span class="line"><span>规范代码: [阅读代码] -&gt; [快速理解] -&gt; [安全修改] -&gt; [低风险]</span></span>
<span class="line"><span>          |            |            |           |</span></span>
<span class="line"><span>       结构清晰     意图明确     影响可控     维护高效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>混乱代码: [阅读代码] -&gt; [困惑不解] -&gt; [修改困难] -&gt; [高风险]</span></span>
<span class="line"><span>          |            |            |           |</span></span>
<span class="line"><span>       结构混乱     意图模糊     影响未知     维护困难</span></span></code></pre></div><h2 id="核心规范内容" tabindex="-1">核心规范内容 <a class="header-anchor" href="#核心规范内容" aria-label="Permalink to &quot;核心规范内容&quot;">​</a></h2><h3 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h3><p>命名是代码可读性的基础。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>命名规则:</span></span>
<span class="line"><span>变量: camelCase    userName, itemCount</span></span>
<span class="line"><span>常量: UPPER_CASE   API_BASE_URL, MAX_ITEMS</span></span>
<span class="line"><span>函数: camelCase    getUserInfo, calculateTotal</span></span>
<span class="line"><span>类:   PascalCase   UserService, RequestHandler</span></span>
<span class="line"><span>文件: kebab-case   user-profile.js, api-service.ts</span></span></code></pre></div><h3 id="文件组织规范" tabindex="-1">文件组织规范 <a class="header-anchor" href="#文件组织规范" aria-label="Permalink to &quot;文件组织规范&quot;">​</a></h3><p>合理的文件结构提升项目可维护性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>项目结构:</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>├── components/     # 组件目录</span></span>
<span class="line"><span>│   ├── common/    # 通用组件</span></span>
<span class="line"><span>│   └── business/  # 业务组件</span></span>
<span class="line"><span>├── hooks/          # 自定义hooks</span></span>
<span class="line"><span>├── utils/          # 工具函数</span></span>
<span class="line"><span>├── constants/      # 常量定义</span></span>
<span class="line"><span>└── styles/         # 样式文件</span></span></code></pre></div><h3 id="代码格式规范" tabindex="-1">代码格式规范 <a class="header-anchor" href="#代码格式规范" aria-label="Permalink to &quot;代码格式规范&quot;">​</a></h3><p>统一的格式使代码整洁美观。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>格式要求:</span></span>
<span class="line"><span>缩进:    2个空格或4个空格（团队统一）</span></span>
<span class="line"><span>分号:    始终使用或始终省略</span></span>
<span class="line"><span>引号:    单引号或双引号（团队统一）</span></span>
<span class="line"><span>行宽:    80-120字符</span></span>
<span class="line"><span>换行:    适当换行，避免过长代码行</span></span></code></pre></div><h3 id="注释规范" tabindex="-1">注释规范 <a class="header-anchor" href="#注释规范" aria-label="Permalink to &quot;注释规范&quot;">​</a></h3><p>恰当的注释提升代码可理解性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>注释类型:</span></span>
<span class="line"><span>文件头注释:   描述文件用途、作者、创建时间</span></span>
<span class="line"><span>函数注释:     描述功能、参数、返回值</span></span>
<span class="line"><span>复杂逻辑注释: 解释算法或业务逻辑</span></span>
<span class="line"><span>TODO注释:     标记待办事项</span></span></code></pre></div><h2 id="规范实施工具" tabindex="-1">规范实施工具 <a class="header-anchor" href="#规范实施工具" aria-label="Permalink to &quot;规范实施工具&quot;">​</a></h2><h3 id="代码检查工具" tabindex="-1">代码检查工具 <a class="header-anchor" href="#代码检查工具" aria-label="Permalink to &quot;代码检查工具&quot;">​</a></h3><p>自动化工具确保规范执行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>检查工具链:</span></span>
<span class="line"><span>[ESLint] -&gt; [Prettier] -&gt; [Stylelint] -&gt; [Commitlint]</span></span>
<span class="line"><span>     |          |            |             |</span></span>
<span class="line"><span> JavaScript   代码格式化     CSS检查      提交信息</span></span>
<span class="line"><span>  检查                      检查          检查</span></span></code></pre></div><h3 id="编辑器配置" tabindex="-1">编辑器配置 <a class="header-anchor" href="#编辑器配置" aria-label="Permalink to &quot;编辑器配置&quot;">​</a></h3><p>统一编辑器设置保证开发环境一致。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>编辑器统一:</span></span>
<span class="line"><span>[配置文件] -&gt; [团队共享] -&gt; [自动应用]</span></span>
<span class="line"><span>     |           |           |</span></span>
<span class="line"><span> .editorconfig  版本控制    开发环境一致</span></span></code></pre></div><h2 id="具体规范示例" tabindex="-1">具体规范示例 <a class="header-anchor" href="#具体规范示例" aria-label="Permalink to &quot;具体规范示例&quot;">​</a></h2><h3 id="javascript-typescript-规范" tabindex="-1">JavaScript/TypeScript 规范 <a class="header-anchor" href="#javascript-typescript-规范" aria-label="Permalink to &quot;JavaScript/TypeScript 规范&quot;">​</a></h3><p>现代前端项目的代码规范示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变量声明:</span></span>
<span class="line"><span>// 好的实践</span></span>
<span class="line"><span>const userList = [];</span></span>
<span class="line"><span>let isLoading = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 避免的做法</span></span>
<span class="line"><span>var user_list = [];</span></span>
<span class="line"><span>let is_loading = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数定义:</span></span>
<span class="line"><span>// 好的实践</span></span>
<span class="line"><span>function fetchUserData(userId: string): Promise&lt;User&gt; {</span></span>
<span class="line"><span>    // 函数体</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 箭头函数</span></span>
<span class="line"><span>const formatDate = (date: Date): string =&gt; {</span></span>
<span class="line"><span>    // 函数体</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="css-规范" tabindex="-1">CSS 规范 <a class="header-anchor" href="#css-规范" aria-label="Permalink to &quot;CSS 规范&quot;">​</a></h3><p>样式代码的组织和命名规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>CSS命名规范:</span></span>
<span class="line"><span>BEM命名法: block__element--modifier</span></span>
<span class="line"><span>示例: </span></span>
<span class="line"><span>.search-form {}</span></span>
<span class="line"><span>.search-form__input {}</span></span>
<span class="line"><span>.search-form__button--disabled {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>组织顺序:</span></span>
<span class="line"><span>布局属性 -&gt; 盒模型 -&gt; 文本属性 -&gt; 视觉属性</span></span>
<span class="line"><span>position       width     font-size   background</span></span>
<span class="line"><span>display        padding   color       border</span></span></code></pre></div><h3 id="组件规范" tabindex="-1">组件规范 <a class="header-anchor" href="#组件规范" aria-label="Permalink to &quot;组件规范&quot;">​</a></h3><p>前端组件的编写规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件结构:</span></span>
<span class="line"><span>[组件定义] -&gt; [Props接口] -&gt; [状态定义] -&gt; [生命周期] -&gt; [事件处理]</span></span>
<span class="line"><span>     |            |            |            |            |</span></span>
<span class="line"><span> 函数/类组件    类型声明      useState     useEffect    处理函数</span></span></code></pre></div><h2 id="团队协作规范" tabindex="-1">团队协作规范 <a class="header-anchor" href="#团队协作规范" aria-label="Permalink to &quot;团队协作规范&quot;">​</a></h2><h3 id="git-工作流" tabindex="-1">Git 工作流 <a class="header-anchor" href="#git-工作流" aria-label="Permalink to &quot;Git 工作流&quot;">​</a></h3><p>版本控制的规范流程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Git规范:</span></span>
<span class="line"><span>分支命名: feature/user-auth, fix/login-error</span></span>
<span class="line"><span>提交信息: feat: 添加用户登录功能</span></span>
<span class="line"><span>合并流程: [开发分支] -&gt; [代码审查] -&gt; [测试] -&gt; [主干分支]</span></span></code></pre></div><h3 id="代码审查规范" tabindex="-1">代码审查规范 <a class="header-anchor" href="#代码审查规范" aria-label="Permalink to &quot;代码审查规范&quot;">​</a></h3><p>通过代码审查保证质量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>审查流程:</span></span>
<span class="line"><span>[提交PR] -&gt; [自动化检查] -&gt; [人工审查] -&gt; [修改完善] -&gt; [合并]</span></span>
<span class="line"><span>     |           |            |           |           |</span></span>
<span class="line"><span> 功能完成    规范检查       逻辑审查     修复问题     质量保证</span></span></code></pre></div><h2 id="规范配置文件示例" tabindex="-1">规范配置文件示例 <a class="header-anchor" href="#规范配置文件示例" aria-label="Permalink to &quot;规范配置文件示例&quot;">​</a></h2><h3 id="eslint-配置" tabindex="-1">ESLint 配置 <a class="header-anchor" href="#eslint-配置" aria-label="Permalink to &quot;ESLint 配置&quot;">​</a></h3><p>代码检查工具配置。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    extends: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;@typescript-eslint/recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;no-console&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;prefer-const&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;no-unused-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="prettier-配置" tabindex="-1">Prettier 配置 <a class="header-anchor" href="#prettier-配置" aria-label="Permalink to &quot;Prettier 配置&quot;">​</a></h3><p>代码格式化配置。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .prettierrc</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;semi&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;singleQuote&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;tabWidth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;trailingComma&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;es5&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="规范实施策略" tabindex="-1">规范实施策略 <a class="header-anchor" href="#规范实施策略" aria-label="Permalink to &quot;规范实施策略&quot;">​</a></h2><h3 id="渐进式采用" tabindex="-1">渐进式采用 <a class="header-anchor" href="#渐进式采用" aria-label="Permalink to &quot;渐进式采用&quot;">​</a></h3><p>在现有项目中逐步引入规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>实施步骤:</span></span>
<span class="line"><span>[基础规范] -&gt; [工具配置] -&gt; [团队培训] -&gt; [严格执行] -&gt; [持续优化]</span></span>
<span class="line"><span>     |           |           |           |           |</span></span>
<span class="line"><span> 选择核心规则  自动化检查  统一认识    代码审查    根据反馈调整</span></span></code></pre></div><h3 id="规范文档化" tabindex="-1">规范文档化 <a class="header-anchor" href="#规范文档化" aria-label="Permalink to &quot;规范文档化&quot;">​</a></h3><p>将规范编写成可查阅的文档。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文档结构:</span></span>
<span class="line"><span>[编码规范] -&gt; [工具配置] -&gt; [最佳实践] -&gt; [常见问题]</span></span>
<span class="line"><span>     |           |           |           |</span></span>
<span class="line"><span> 规则说明     环境设置     经验总结     解决方案</span></span></code></pre></div><h2 id="规范的价值体现" tabindex="-1">规范的价值体现 <a class="header-anchor" href="#规范的价值体现" aria-label="Permalink to &quot;规范的价值体现&quot;">​</a></h2><h3 id="质量提升" tabindex="-1">质量提升 <a class="header-anchor" href="#质量提升" aria-label="Permalink to &quot;质量提升&quot;">​</a></h3><p>规范代码在多个维度上表现更优。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>质量对比:</span></span>
<span class="line"><span>可读性:    [规范代码] &gt;&gt;&gt; [随意代码]</span></span>
<span class="line"><span>可维护性:  [规范代码] &gt;&gt;&gt; [随意代码]  </span></span>
<span class="line"><span>可测试性:  [规范代码] &gt;&gt;&gt; [随意代码]</span></span>
<span class="line"><span>一致性:    [规范代码] &gt;&gt;&gt; [随意代码]</span></span></code></pre></div><h3 id="成本节约" tabindex="-1">成本节约 <a class="header-anchor" href="#成本节约" aria-label="Permalink to &quot;成本节约&quot;">​</a></h3><p>规范在项目生命周期中节约大量成本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>成本分析:</span></span>
<span class="line"><span>短期成本: [学习规范] + [配置工具] = 时间投入</span></span>
<span class="line"><span>长期收益: [减少Bug] + [提高效率] + [降低维护] = 持续收益</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>   投资回报率显著</span></span></code></pre></div>`,71)])])}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
