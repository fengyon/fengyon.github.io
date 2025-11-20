import{_ as n,c as s,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"yarn","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心特性","slug":"核心特性","link":"#核心特性","children":[{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":3,"title":"依赖确定性","slug":"依赖确定性","link":"#依赖确定性","children":[]},{"level":3,"title":"安全可靠","slug":"安全可靠","link":"#安全可靠","children":[]}]},{"level":2,"title":"架构设计","slug":"架构设计","link":"#架构设计","children":[{"level":3,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":3,"title":"缓存机制","slug":"缓存机制","link":"#缓存机制","children":[]}]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"安装与初始化","slug":"安装与初始化","link":"#安装与初始化","children":[]},{"level":3,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[]},{"level":3,"title":"脚本执行","slug":"脚本执行","link":"#脚本执行","children":[]}]},{"level":2,"title":"高级功能","slug":"高级功能","link":"#高级功能","children":[{"level":3,"title":"Workspaces","slug":"workspaces","link":"#workspaces","children":[]},{"level":3,"title":"插件系统","slug":"插件系统","link":"#插件系统","children":[]},{"level":3,"title":"零安装模式","slug":"零安装模式","link":"#零安装模式","children":[]}]},{"level":2,"title":"版本演进","slug":"版本演进","link":"#版本演进","children":[{"level":3,"title":"yarn 1.x","slug":"yarn-1-x","link":"#yarn-1-x","children":[]},{"level":3,"title":"yarn 2.x (Berry)","slug":"yarn-2-x-berry","link":"#yarn-2-x-berry","children":[]}]},{"level":2,"title":"与 npm 对比","slug":"与-npm-对比","link":"#与-npm-对比","children":[{"level":3,"title":"性能比较","slug":"性能比较","link":"#性能比较","children":[]},{"level":3,"title":"功能差异","slug":"功能差异","link":"#功能差异","children":[]}]},{"level":2,"title":"在现代前端中的角色","slug":"在现代前端中的角色","link":"#在现代前端中的角色","children":[]}],"relativePath":"engineering/package-manager/yarn.md","filePath":"engineering/package-manager/yarn.md"}'),e={name:"engineering/package-manager/yarn.md"};function i(c,a,t,r,o,d){return p(),s("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/package-manager/yarn.md for this page in Markdown format</div><h1 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h1><p>yarn 是 Facebook 于 2016 年推出的 JavaScript 包管理工具，旨在解决当时 npm 在性能、安全性和一致性方面存在的痛点。yarn 的诞生引发了包管理工具的革新竞争，推动了整个 JavaScript 生态系统在依赖管理方面的进步。</p><p>yarn 以其卓越的性能、可靠的依赖锁定和优雅的开发者体验迅速获得广泛认可，成为现代前端开发中不可或缺的工具之一。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><h3 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h3><p>yarn 通过并行安装、离线缓存等机制大幅提升依赖安装速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>npm 安装流程:</span></span>
<span class="line"><span>[解析依赖] -&gt; [下载包] -&gt; [安装包] -&gt; [完成]</span></span>
<span class="line"><span>     |           |          |         |</span></span>
<span class="line"><span>   顺序执行    顺序下载   顺序安装   较慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn 安装流程:</span></span>
<span class="line"><span>[解析依赖] -&gt; [并行下载多包] -&gt; [并行安装] -&gt; [完成]</span></span>
<span class="line"><span>     |             |              |         |</span></span>
<span class="line"><span>   快速解析      同时下载       同时安装    更快</span></span></code></pre></div><h3 id="依赖确定性" tabindex="-1">依赖确定性 <a class="header-anchor" href="#依赖确定性" aria-label="Permalink to &quot;依赖确定性&quot;">​</a></h3><p>yarn 通过 lock 文件确保不同环境下的依赖一致性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn.lock 文件作用:</span></span>
<span class="line"><span>开发者A机器       开发者B机器       生产环境</span></span>
<span class="line"><span>   |                 |              |</span></span>
<span class="line"><span>   v                 v              v</span></span>
<span class="line"><span>同一份yarn.lock -&gt; 相同依赖树 -&gt; 相同行为</span></span></code></pre></div><h3 id="安全可靠" tabindex="-1">安全可靠 <a class="header-anchor" href="#安全可靠" aria-label="Permalink to &quot;安全可靠&quot;">​</a></h3><p>yarn 在安装前会验证每个包的完整性，防止恶意代码注入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装安全检查:</span></span>
<span class="line"><span>[下载包] -&gt; [校验哈希] -&gt; [验证通过] -&gt; [安装]</span></span>
<span class="line"><span>     |          |            |          |</span></span>
<span class="line"><span>  从仓库     计算校验和     匹配记录     安全安装</span></span></code></pre></div><h2 id="架构设计" tabindex="-1">架构设计 <a class="header-anchor" href="#架构设计" aria-label="Permalink to &quot;架构设计&quot;">​</a></h2><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><p>yarn 的核心工作流程围绕依赖解析和安装展开。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn 工作流程图:</span></span>
<span class="line"><span>[解析package.json] </span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        v</span></span>
<span class="line"><span>[收集依赖信息]</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        v</span></span>
<span class="line"><span>[检查缓存] --- 命中 ---&gt; [从缓存安装]</span></span>
<span class="line"><span>        |                    ^</span></span>
<span class="line"><span>       未命中                |</span></span>
<span class="line"><span>        |                    |</span></span>
<span class="line"><span>        v                    |</span></span>
<span class="line"><span>[下载包到缓存] ---------------+</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        v</span></span>
<span class="line"><span>[创建node_modules结构]</span></span>
<span class="line"><span>        |</span></span>
<span class="line"><span>        v</span></span>
<span class="line"><span>[生成/更新yarn.lock]</span></span></code></pre></div><h3 id="缓存机制" tabindex="-1">缓存机制 <a class="header-anchor" href="#缓存机制" aria-label="Permalink to &quot;缓存机制&quot;">​</a></h3><p>yarn 的智能缓存系统避免重复下载，支持离线安装。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>缓存目录结构:</span></span>
<span class="line"><span>~/.yarn/cache/</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- package-A-1.0.0.tgz</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- package-B-2.1.3.tgz</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- package-C-1.5.2.tgz</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><h3 id="安装与初始化" tabindex="-1">安装与初始化 <a class="header-anchor" href="#安装与初始化" aria-label="Permalink to &quot;安装与初始化&quot;">​</a></h3><p>yarn 的安装简单直接，支持多种方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装yarn:</span></span>
<span class="line"><span># 通过npm安装</span></span>
<span class="line"><span>npm install -g yarn</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或使用系统包管理器</span></span>
<span class="line"><span>brew install yarn    # macOS</span></span>
<span class="line"><span>choco install yarn   # Windows</span></span>
<span class="line"><span></span></span>
<span class="line"><span>初始化项目:</span></span>
<span class="line"><span>yarn init            # 交互式创建</span></span>
<span class="line"><span>yarn init -y         # 快速创建</span></span></code></pre></div><h3 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h3><p>yarn 提供直观的依赖管理命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖管理命令:</span></span>
<span class="line"><span># 添加依赖</span></span>
<span class="line"><span>yarn add &lt;package&gt;           # 生产依赖</span></span>
<span class="line"><span>yarn add -D &lt;package&gt;        # 开发依赖</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 移除依赖</span></span>
<span class="line"><span>yarn remove &lt;package&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新依赖</span></span>
<span class="line"><span>yarn upgrade &lt;package&gt;</span></span>
<span class="line"><span>yarn upgrade --latest        # 更新到最新版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装所有依赖</span></span>
<span class="line"><span>yarn install</span></span></code></pre></div><h3 id="脚本执行" tabindex="-1">脚本执行 <a class="header-anchor" href="#脚本执行" aria-label="Permalink to &quot;脚本执行&quot;">​</a></h3><p>yarn 的脚本执行语法简洁明了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>脚本执行:</span></span>
<span class="line"><span>package.json:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;webpack serve&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;jest&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>命令行:</span></span>
<span class="line"><span>yarn dev     # 运行开发服务器</span></span>
<span class="line"><span>yarn build   # 执行构建</span></span>
<span class="line"><span>yarn test    # 运行测试</span></span></code></pre></div><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to &quot;高级功能&quot;">​</a></h2><h3 id="workspaces" tabindex="-1">Workspaces <a class="header-anchor" href="#workspaces" aria-label="Permalink to &quot;Workspaces&quot;">​</a></h3><p>yarn Workspaces 支持在单一代码库中管理多个包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>monorepo 结构:</span></span>
<span class="line"><span>project-root/</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- package.json         # 根package.json</span></span>
<span class="line"><span>    |       &quot;workspaces&quot;: [&quot;packages/*&quot;]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- packages/</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          +-- package-A/     # 子包A</span></span>
<span class="line"><span>          |       package.json</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          +-- package-B/     # 子包B</span></span>
<span class="line"><span>                  package.json</span></span></code></pre></div><h3 id="插件系统" tabindex="-1">插件系统 <a class="header-anchor" href="#插件系统" aria-label="Permalink to &quot;插件系统&quot;">​</a></h3><p>yarn 2+ 引入了强大的插件系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插件使用:</span></span>
<span class="line"><span>yarn plugin import &lt;plugin-url&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>常用插件:</span></span>
<span class="line"><span>- @yarnpkg/plugin-typescript</span></span>
<span class="line"><span>- @yarnpkg/plugin-workspace-tools</span></span>
<span class="line"><span>- @yarnpkg/plugin-interactive-tools</span></span></code></pre></div><h3 id="零安装模式" tabindex="-1">零安装模式 <a class="header-anchor" href="#零安装模式" aria-label="Permalink to &quot;零安装模式&quot;">​</a></h3><p>yarn PnP (Plug&#39;n&#39;Play) 消除 node_modules，提升性能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统模式 vs PnP模式:</span></span>
<span class="line"><span>传统: [项目] -&gt; [node_modules] -&gt; [大量文件操作]</span></span>
<span class="line"><span>PnP:  [项目] -&gt; [.pnp.js] -&gt; [直接链接缓存]</span></span>
<span class="line"><span>              |                    |</span></span>
<span class="line"><span>           更小的项目           更快的安装</span></span>
<span class="line"><span>           体积               和启动</span></span></code></pre></div><h2 id="版本演进" tabindex="-1">版本演进 <a class="header-anchor" href="#版本演进" aria-label="Permalink to &quot;版本演进&quot;">​</a></h2><h3 id="yarn-1-x" tabindex="-1">yarn 1.x <a class="header-anchor" href="#yarn-1-x" aria-label="Permalink to &quot;yarn 1.x&quot;">​</a></h3><p>经典的 yarn，专注于性能和可靠性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn 1.x 特点:</span></span>
<span class="line"><span>- 并行安装</span></span>
<span class="line"><span>- 离线缓存</span></span>
<span class="line"><span>- yarn.lock 文件</span></span>
<span class="line"><span>- 简洁的CLI</span></span></code></pre></div><h3 id="yarn-2-x-berry" tabindex="-1">yarn 2.x (Berry) <a class="header-anchor" href="#yarn-2-x-berry" aria-label="Permalink to &quot;yarn 2.x (Berry)&quot;">​</a></h3><p>现代化重构，引入创新特性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn 2.x 新特性:</span></span>
<span class="line"><span>- Plug&#39;n&#39;Play (PnP)</span></span>
<span class="line"><span>- 插件架构</span></span>
<span class="line"><span>- 改进的Workspaces</span></span>
<span class="line"><span>- 更好的Monorepo支持</span></span></code></pre></div><h2 id="与-npm-对比" tabindex="-1">与 npm 对比 <a class="header-anchor" href="#与-npm-对比" aria-label="Permalink to &quot;与 npm 对比&quot;">​</a></h2><h3 id="性能比较" tabindex="-1">性能比较 <a class="header-anchor" href="#性能比较" aria-label="Permalink to &quot;性能比较&quot;">​</a></h3><p>在依赖安装速度方面，yarn 通常表现更优。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装速度对比 (示例项目):</span></span>
<span class="line"><span>操作        npm      yarn</span></span>
<span class="line"><span>首次安装    45s      25s</span></span>
<span class="line"><span>后续安装    30s      8s</span></span>
<span class="line"><span>无网安装    失败     成功 (离线缓存)</span></span></code></pre></div><h3 id="功能差异" tabindex="-1">功能差异 <a class="header-anchor" href="#功能差异" aria-label="Permalink to &quot;功能差异&quot;">​</a></h3><p>yarn 和 npm 在功能设计上各有侧重。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>功能对比表:</span></span>
<span class="line"><span>特性          npm           yarn</span></span>
<span class="line"><span>锁定文件    package-lock   yarn.lock</span></span>
<span class="line"><span>Workspaces   支持           更强支持</span></span>
<span class="line"><span>离线模式     有限支持       完善支持</span></span>
<span class="line"><span>安全检查     基础          更严格</span></span>
<span class="line"><span>插件系统     有限          强大</span></span></code></pre></div><h2 id="在现代前端中的角色" tabindex="-1">在现代前端中的角色 <a class="header-anchor" href="#在现代前端中的角色" aria-label="Permalink to &quot;在现代前端中的角色&quot;">​</a></h2><p>yarn 在现代前端工具链中扮演关键角色。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>现代前端工具链:</span></span>
<span class="line"><span>[代码编辑] -&gt; [包管理(yarn)] -&gt; [构建工具] -&gt; [测试框架] -&gt; [部署]</span></span>
<span class="line"><span>      |             |              |            |           |</span></span>
<span class="line"><span>   开发者        依赖管理        webpack      jest      生产环境</span></span></code></pre></div>`,58)])])}const g=n(e,[["render",i]]);export{u as __pageData,g as default};
