import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"npm 包管理器","description":"","frontmatter":{},"headers":[{"level":2,"title":"npm 核心架构","slug":"npm-核心架构","link":"#npm-核心架构","children":[{"level":3,"title":"包管理层次结构","slug":"包管理层次结构","link":"#包管理层次结构","children":[]},{"level":3,"title":"依赖解析机制","slug":"依赖解析机制","link":"#依赖解析机制","children":[]}]},{"level":2,"title":"项目配置管理","slug":"项目配置管理","link":"#项目配置管理","children":[{"level":3,"title":"package.json 详解","slug":"package-json-详解","link":"#package-json-详解","children":[]},{"level":3,"title":"动态生成 package.json","slug":"动态生成-package-json","link":"#动态生成-package-json","children":[]}]},{"level":2,"title":"依赖管理机制","slug":"依赖管理机制","link":"#依赖管理机制","children":[{"level":3,"title":"依赖安装与分类","slug":"依赖安装与分类","link":"#依赖安装与分类","children":[]},{"level":3,"title":"版本控制策略","slug":"版本控制策略","link":"#版本控制策略","children":[]}]},{"level":2,"title":"脚本与自动化","slug":"脚本与自动化","link":"#脚本与自动化","children":[{"level":3,"title":"npm scripts 高级用法","slug":"npm-scripts-高级用法","link":"#npm-scripts-高级用法","children":[]},{"level":3,"title":"环境感知脚本","slug":"环境感知脚本","link":"#环境感知脚本","children":[]}]},{"level":2,"title":"包发布与维护","slug":"包发布与维护","link":"#包发布与维护","children":[{"level":3,"title":"包发布流程","slug":"包发布流程","link":"#包发布流程","children":[]},{"level":3,"title":"包版本管理","slug":"包版本管理","link":"#包版本管理","children":[]}]},{"level":2,"title":"依赖安全与审计","slug":"依赖安全与审计","link":"#依赖安全与审计","children":[{"level":3,"title":"安全漏洞扫描","slug":"安全漏洞扫描","link":"#安全漏洞扫描","children":[]}]},{"level":2,"title":"工作区与单体仓库","slug":"工作区与单体仓库","link":"#工作区与单体仓库","children":[{"level":3,"title":"npm workspaces 管理","slug":"npm-workspaces-管理","link":"#npm-workspaces-管理","children":[]},{"level":3,"title":"工作区工具函数","slug":"工作区工具函数","link":"#工作区工具函数","children":[]}]},{"level":2,"title":"性能优化技巧","slug":"性能优化技巧","link":"#性能优化技巧","children":[{"level":3,"title":"安装优化策略","slug":"安装优化策略","link":"#安装优化策略","children":[]}]}],"relativePath":"basic/node/npm.md","filePath":"basic/node/npm.md"}'),o={name:"basic/node/npm.md"};function e(c,s,t,r,E,y){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/node/npm.md for this page in Markdown format</div><h1 id="npm-包管理器" tabindex="-1">npm 包管理器 <a class="header-anchor" href="#npm-包管理器" aria-label="Permalink to &quot;npm 包管理器&quot;">​</a></h1><p>npm (Node Package Manager) 是 Node.js 的官方包管理器，也是世界上最大的软件注册中心。它不仅仅是一个工具，更是一个完整的生态系统，包含了超过百万个可重用的代码包。npm 使开发者能够轻松地安装、共享和管理项目依赖，极大地提高了 JavaScript 开发的效率和质量。</p><h2 id="npm-核心架构" tabindex="-1">npm 核心架构 <a class="header-anchor" href="#npm-核心架构" aria-label="Permalink to &quot;npm 核心架构&quot;">​</a></h2><h3 id="包管理层次结构" tabindex="-1">包管理层次结构 <a class="header-anchor" href="#包管理层次结构" aria-label="Permalink to &quot;包管理层次结构&quot;">​</a></h3><p>npm 采用分层依赖管理机制，每个项目都有独立的依赖空间，避免了全局依赖冲突。</p><p>项目结构示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>项目根目录/</span></span>
<span class="line"><span>  ├── node_modules/          # 依赖包存储目录</span></span>
<span class="line"><span>  │   ├── package-a/         # 直接依赖</span></span>
<span class="line"><span>  │   └── .bin/             # 可执行二进制文件</span></span>
<span class="line"><span>  ├── package.json          # 项目配置文件</span></span>
<span class="line"><span>  ├── package-lock.json     # 依赖锁文件</span></span>
<span class="line"><span>  └── 源代码文件</span></span></code></pre></div><h3 id="依赖解析机制" tabindex="-1">依赖解析机制 <a class="header-anchor" href="#依赖解析机制" aria-label="Permalink to &quot;依赖解析机制&quot;">​</a></h3><p>npm 使用复杂的依赖解析算法来处理版本冲突和依赖关系：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 依赖解析示例</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;react&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^18.2.0&quot;</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 兼容性版本</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;lodash&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;~4.17.21&quot;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 近似版本</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;express&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;4.18.2&quot;</span><span style="color:#6A737D;">      // 精确版本</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>版本解析示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>项目请求 → npm注册表 → 版本匹配 → 依赖树构建 → 冲突解决 → 安装完成</span></span></code></pre></div><h2 id="项目配置管理" tabindex="-1">项目配置管理 <a class="header-anchor" href="#项目配置管理" aria-label="Permalink to &quot;项目配置管理&quot;">​</a></h2><h3 id="package-json-详解" tabindex="-1">package.json 详解 <a class="header-anchor" href="#package-json-详解" aria-label="Permalink to &quot;package.json 详解&quot;">​</a></h3><p>package.json 是 npm 项目的核心配置文件，定义了项目元数据和依赖关系。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json 示例</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my-awesome-project&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;一个出色的 Node.js 项目&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用 ESM 模块</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;exports&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;.&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;./utils&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./src/utils.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node --watch src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node --test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node build.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;express&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^4.18.2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;axios&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.5.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;@types/node&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^20.5.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;eslint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^8.47.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;engines&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;node&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&gt;=18.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;keywords&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;nodejs&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;api&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;javascript&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;开发者姓名&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;license&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;MIT&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="动态生成-package-json" tabindex="-1">动态生成 package.json <a class="header-anchor" href="#动态生成-package-json" aria-label="Permalink to &quot;动态生成 package.json&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile, writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读取和修改 package.json</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> updatePackageJson</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(packageData);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 动态更新版本</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> versionParts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> packageJson.version.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#E1E4E8;">    versionParts[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 修订号加1</span></span>
<span class="line"><span style="color:#E1E4E8;">    packageJson.version </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> versionParts.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加新脚本</span></span>
<span class="line"><span style="color:#E1E4E8;">    packageJson.scripts </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">packageJson.scripts,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;preview&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;node --inspect src/index.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(packageJson, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json 更新完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新 package.json 失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#B392F0;"> updatePackageJson</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="依赖管理机制" tabindex="-1">依赖管理机制 <a class="header-anchor" href="#依赖管理机制" aria-label="Permalink to &quot;依赖管理机制&quot;">​</a></h2><h3 id="依赖安装与分类" tabindex="-1">依赖安装与分类 <a class="header-anchor" href="#依赖安装与分类" aria-label="Permalink to &quot;依赖安装与分类&quot;">​</a></h3><p>npm 支持多种类型的依赖，每种都有不同的安装场景和用途：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 安装不同类型依赖的命令示例</span></span>
<span class="line"><span style="color:#6A737D;">// 生产依赖 - 应用运行所需</span></span>
<span class="line"><span style="color:#6A737D;">// npm install express</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 开发依赖 - 仅开发阶段需要  </span></span>
<span class="line"><span style="color:#6A737D;">// npm install --save-dev eslint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可选依赖 - 非必需依赖</span></span>
<span class="line"><span style="color:#6A737D;">// npm install --save-optional chalk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局依赖 - 系统级工具</span></span>
<span class="line"><span style="color:#6A737D;">// npm install -g nodemon</span></span></code></pre></div><p>依赖类型示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖分类:</span></span>
<span class="line"><span>  生产依赖 (dependencies) → 打包到最终应用</span></span>
<span class="line"><span>  开发依赖 (devDependencies) → 仅开发环境使用</span></span>
<span class="line"><span>  可选依赖 (optionalDependencies) → 安装失败不影响主体功能</span></span>
<span class="line"><span>  对等依赖 (peerDependencies) → 宿主环境需提供</span></span></code></pre></div><h3 id="版本控制策略" tabindex="-1">版本控制策略 <a class="header-anchor" href="#版本控制策略" aria-label="Permalink to &quot;版本控制策略&quot;">​</a></h3><p>npm 使用语义化版本控制 (SemVer) 来管理包版本：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 版本范围示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> versionRanges</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  exact: </span><span style="color:#9ECBFF;">&quot;1.2.3&quot;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 精确版本</span></span>
<span class="line"><span style="color:#E1E4E8;">  caret: </span><span style="color:#9ECBFF;">&quot;^1.2.3&quot;</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 兼容版本 (1.x.x)</span></span>
<span class="line"><span style="color:#E1E4E8;">  tilde: </span><span style="color:#9ECBFF;">&quot;~1.2.3&quot;</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 近似版本 (1.2.x)</span></span>
<span class="line"><span style="color:#E1E4E8;">  range: </span><span style="color:#9ECBFF;">&quot;&gt;=1.2.3 &lt;2.0.0&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 版本范围</span></span>
<span class="line"><span style="color:#E1E4E8;">  latest: </span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 最新版本</span></span>
<span class="line"><span style="color:#E1E4E8;">  prerelease: </span><span style="color:#9ECBFF;">&quot;1.2.3-beta&quot;</span><span style="color:#6A737D;">  // 预发布版本</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 版本解析函数</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> semver </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;semver&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> analyzeVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    range,</span></span>
<span class="line"><span style="color:#E1E4E8;">    satisfies: semver.</span><span style="color:#B392F0;">satisfies</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1.2.3&#39;</span><span style="color:#E1E4E8;">, range),</span></span>
<span class="line"><span style="color:#E1E4E8;">    minVersion: semver.</span><span style="color:#B392F0;">minVersion</span><span style="color:#E1E4E8;">(range),</span></span>
<span class="line"><span style="color:#E1E4E8;">    valid: semver.</span><span style="color:#B392F0;">valid</span><span style="color:#E1E4E8;">(range)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">analyzeVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;^1.2.3&#39;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div><h2 id="脚本与自动化" tabindex="-1">脚本与自动化 <a class="header-anchor" href="#脚本与自动化" aria-label="Permalink to &quot;脚本与自动化&quot;">​</a></h2><h3 id="npm-scripts-高级用法" tabindex="-1">npm scripts 高级用法 <a class="header-anchor" href="#npm-scripts-高级用法" aria-label="Permalink to &quot;npm scripts 高级用法&quot;">​</a></h3><p>npm scripts 提供了强大的项目自动化能力，支持前置后置钩子和环境变量：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 复杂的脚本配置</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;prebuild&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;rimraf dist&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 构建前清理</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node build.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;postbuild&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run test:minified&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node --test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test:minified&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;TEST_ENV=minified node --test&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node --watch --env-file=.env src/index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;docker:build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;docker build -t myapp .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;docker:run&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;docker run -p 3000:3000 myapp&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>脚本执行流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run build</span></span>
<span class="line"><span>  → prebuild (前置钩子)</span></span>
<span class="line"><span>  → build (主脚本) </span></span>
<span class="line"><span>  → postbuild (后置钩子)</span></span></code></pre></div><h3 id="环境感知脚本" tabindex="-1">环境感知脚本 <a class="header-anchor" href="#环境感知脚本" aria-label="Permalink to &quot;环境感知脚本&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态执行 npm 脚本</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> runNpmScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scriptName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">packageJson.scripts[scriptName]) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`脚本 \${</span><span style="color:#E1E4E8;">scriptName</span><span style="color:#9ECBFF;">} 不存在\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;run&#39;</span><span style="color:#E1E4E8;">, scriptName], {</span></span>
<span class="line"><span style="color:#E1E4E8;">    stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">process.env, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">env }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (code </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      else</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`脚本执行失败，退出码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#B392F0;"> runNpmScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;build&#39;</span><span style="color:#E1E4E8;">, { NODE_ENV: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;"> });</span></span></code></pre></div><h2 id="包发布与维护" tabindex="-1">包发布与维护 <a class="header-anchor" href="#包发布与维护" aria-label="Permalink to &quot;包发布与维护&quot;">​</a></h2><h3 id="包发布流程" tabindex="-1">包发布流程 <a class="header-anchor" href="#包发布流程" aria-label="Permalink to &quot;包发布流程&quot;">​</a></h3><p>发布 npm 包需要遵循特定的流程和最佳实践：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 发布准备脚本</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promisify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> execAsync</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(exec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> publishPackage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 运行测试</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 构建项目</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm run build&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 版本号提升</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm version patch&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 发布到 npm</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm publish&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;包发布成功!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发布失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件发布（仅当测试通过）</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#B392F0;"> publishPackage</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><p>发布流程示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发完成 → 测试通过 → 版本提升 → 构建产物 → 发布注册表 → 验证可用性</span></span></code></pre></div><h3 id="包版本管理" tabindex="-1">包版本管理 <a class="header-anchor" href="#包版本管理" aria-label="Permalink to &quot;包版本管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile, writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动化版本管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">packagePath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;./package.json&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packagePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> packagePath;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getCurrentVersion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(data).version;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> bumpVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> packageJson.version.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;major&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;minor&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        version[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    packageJson.version </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> version.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(packageJson, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> packageJson.version;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> manager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> newVersion</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> manager.</span><span style="color:#B392F0;">bumpVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minor&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`版本已更新为: \${</span><span style="color:#E1E4E8;">newVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="依赖安全与审计" tabindex="-1">依赖安全与审计 <a class="header-anchor" href="#依赖安全与审计" aria-label="Permalink to &quot;依赖安全与审计&quot;">​</a></h2><h3 id="安全漏洞扫描" tabindex="-1">安全漏洞扫描 <a class="header-anchor" href="#安全漏洞扫描" aria-label="Permalink to &quot;安全漏洞扫描&quot;">​</a></h3><p>npm 提供了强大的安全审计功能，帮助识别和修复依赖中的漏洞：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promisify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> execAsync</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(exec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安全审计工具</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SecurityAuditor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> audit</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">stdout</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm audit --json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> auditResult</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(stdout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vulnerabilities: auditResult.metadata.vulnerabilities,</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: auditResult.actions </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // npm audit 在发现漏洞时返回非零退出码</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (error.stdout) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(error.stdout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> fixVulnerabilities</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 自动修复可修复的漏洞</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm audit fix&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 强制修复（可能包含破坏性变更）</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm audit fix --force&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 生成安全报告</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm audit --audit-level moderate --json &gt; security-report.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> auditor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SecurityAuditor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> auditor.</span><span style="color:#B392F0;">audit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;安全审计报告:&#39;</span><span style="color:#E1E4E8;">, report);</span></span></code></pre></div><p>安全审计流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖树扫描 → 漏洞数据库匹配 → 风险评估 → 修复建议 → 自动修复</span></span></code></pre></div><h2 id="工作区与单体仓库" tabindex="-1">工作区与单体仓库 <a class="header-anchor" href="#工作区与单体仓库" aria-label="Permalink to &quot;工作区与单体仓库&quot;">​</a></h2><h3 id="npm-workspaces-管理" tabindex="-1">npm workspaces 管理 <a class="header-anchor" href="#npm-workspaces-管理" aria-label="Permalink to &quot;npm workspaces 管理&quot;">​</a></h3><p>npm workspaces 允许在单个仓库中管理多个相关的包：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 根目录 package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;monorepo-project&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;workspaces&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;packages/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;apps/*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run build --workspaces&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run test --workspaces&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run dev --workspace=app-main&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// packages/ui/package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@myproject/ui&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;react&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^18.2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// apps/main/package.json  </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@myproject/app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;@myproject/ui&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#6A737D;">  // 工作区内依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>工作区架构示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>单体仓库/</span></span>
<span class="line"><span>  ├── packages/</span></span>
<span class="line"><span>  │   ├── ui/           # 共享UI组件</span></span>
<span class="line"><span>  │   ├── utils/        # 工具函数</span></span>
<span class="line"><span>  │   └── api/          # API客户端</span></span>
<span class="line"><span>  ├── apps/</span></span>
<span class="line"><span>  │   ├── web/          # 网页应用</span></span>
<span class="line"><span>  │   └── mobile/       # 移动应用</span></span>
<span class="line"><span>  └── 共享配置和脚本</span></span></code></pre></div><h3 id="工作区工具函数" tabindex="-1">工作区工具函数 <a class="header-anchor" href="#工作区工具函数" aria-label="Permalink to &quot;工作区工具函数&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readdir, readFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 工作区管理工具</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> WorkspaceManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">rootDir</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.rootDir </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootDir;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getWorkspaces</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rootPkg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rootDir, </span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> workspaces</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rootPkg.workspaces </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> workspacePackages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pattern</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> workspaces) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> dirs</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readdir</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rootDir, pattern));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dir</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> dirs) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> pkgPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rootDir, pattern, dir, </span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> pkgData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(pkgPath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          workspacePackages.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(pkgData).name,</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(pkgPath),</span></span>
<span class="line"><span style="color:#E1E4E8;">            packageJson: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(pkgData)</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无法读取 \${</span><span style="color:#E1E4E8;">pkgPath</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> workspacePackages;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> manager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WorkspaceManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> workspaces</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> manager.</span><span style="color:#B392F0;">getWorkspaces</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;工作区包列表:&#39;</span><span style="color:#E1E4E8;">, workspaces.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">w</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> w.name));</span></span></code></pre></div><h2 id="性能优化技巧" tabindex="-1">性能优化技巧 <a class="header-anchor" href="#性能优化技巧" aria-label="Permalink to &quot;性能优化技巧&quot;">​</a></h2><h3 id="安装优化策略" tabindex="-1">安装优化策略 <a class="header-anchor" href="#安装优化策略" aria-label="Permalink to &quot;安装优化策略&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promisify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> execAsync</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(exec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 安装优化工具</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> InstallOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用 CI 模式安装（跳过可选依赖）</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ciInstall</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm ci --prefer-offline --no-audit&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 仅安装生产依赖</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> productionInstall</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm install --production --omit=dev&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 清理缓存和重新安装</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> cleanInstall</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm cache clean --force&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rm -rf node_modules package-lock.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm install&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 依赖分析</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> analyzeDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">stdout</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm list --depth=0 --json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> deps</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(stdout);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalDependencies: Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(deps.dependencies </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#F97583;">await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateSize</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> calculateSize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">stdout</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;du -sh node_modules&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> stdout.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> InstallOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> analysis</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> optimizer.</span><span style="color:#B392F0;">analyzeDependencies</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;依赖分析:&#39;</span><span style="color:#E1E4E8;">, analysis);</span></span></code></pre></div><p>性能优化示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>标准安装 → 依赖解析 → 网络下载 → 本地构建 → 完成</span></span>
<span class="line"><span>优化安装 → 缓存优先 → 并行下载 → 跳过可选依赖 → 快速完成</span></span></code></pre></div><p>npm 包管理器是现代 JavaScript 开发不可或缺的工具，它不仅仅解决了依赖管理的问题，更提供了一个完整的开发生态系统。从简单的脚本运行到复杂的单体仓库管理，npm 都提供了相应的解决方案。掌握 npm 的高级用法能够显著提升开发效率和项目质量。</p>`,64)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
