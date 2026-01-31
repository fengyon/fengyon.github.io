import{_ as n,c as s,o as p,b as e}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"包 (Package) 与模块 (Module)","slug":"包-package-与模块-module","link":"#包-package-与模块-module","children":[]},{"level":3,"title":"package.json 文件","slug":"package-json-文件","link":"#package-json-文件","children":[]},{"level":3,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[]}]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":3,"title":"安装包","slug":"安装包","link":"#安装包","children":[]},{"level":3,"title":"常用命令一览","slug":"常用命令一览","link":"#常用命令一览","children":[]}]},{"level":2,"title":"高级功能","slug":"高级功能","link":"#高级功能","children":[{"level":3,"title":"npm Scripts","slug":"npm-scripts","link":"#npm-scripts","children":[]},{"level":3,"title":"npx 工具","slug":"npx-工具","link":"#npx-工具","children":[]},{"level":3,"title":"版本管理与锁定","slug":"版本管理与锁定","link":"#版本管理与锁定","children":[]}]},{"level":2,"title":"常见问题与解决","slug":"常见问题与解决","link":"#常见问题与解决","children":[{"level":3,"title":"网络问题与镜像源","slug":"网络问题与镜像源","link":"#网络问题与镜像源","children":[]},{"level":3,"title":"权限问题","slug":"权限问题","link":"#权限问题","children":[]},{"level":3,"title":"依赖冲突与缓存","slug":"依赖冲突与缓存","link":"#依赖冲突与缓存","children":[]}]},{"level":2,"title":"在现代前端工程化的角色","slug":"在现代前端工程化的角色","link":"#在现代前端工程化的角色","children":[]}],"relativePath":"engineering/package-manager/npm.md","filePath":"engineering/package-manager/npm.md"}'),l={name:"engineering/package-manager/npm.md"};function i(t,a,c,o,d,r){return p(),s("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/package-manager/npm.md for this page in Markdown format</div><h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><p>npm (Node Package Manager) 是 Node.js 的默认软件包管理系统，诞生于2009年，随 Node.js 一起发布。它最初旨在帮助 JavaScript 开发人员轻松共享打包的代码模块，如今已成长为全球最大的软件注册表之一，托管了超过 160 万个软件包，每月下载量超过 230 亿次，服务于超过 1100 万开发者。</p><p>npm 的核心由一个官方网站、一个命令行界面 (CLI) 和一个庞大的公共注册表 (Registry) 组成。它让开发者能够高效地发现、安装、管理和发布可重用的代码模块，这些模块小至实用函数，大至完整框架。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><h3 id="包-package-与模块-module" tabindex="-1">包 (Package) 与模块 (Module) <a class="header-anchor" href="#包-package-与模块-module" aria-label="Permalink to &quot;包 (Package) 与模块 (Module)&quot;">​</a></h3><p>一个包通常是一个包含 JavaScript 代码的目录，其根目录下有一个 <code>package.json</code> 文件来描述这个包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[项目根目录]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +--- [node_modules]        # 依赖包存放处</span></span>
<span class="line"><span>    |       |</span></span>
<span class="line"><span>    |       +--- [package-A]   # 包A</span></span>
<span class="line"><span>    |       |</span></span>
<span class="line"><span>    |       +--- [package-B]   # 包B</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +--- package.json          # 项目依赖清单</span></span></code></pre></div><h3 id="package-json-文件" tabindex="-1">package.json 文件 <a class="header-anchor" href="#package-json-文件" aria-label="Permalink to &quot;package.json 文件&quot;">​</a></h3><p>这是 npm 项目的核心配置文件，它记录了项目的元数据和依赖信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>package.json 结构示意图:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;我的项目&quot;,          # 包名</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0.0&quot;,         # 版本号</span></span>
<span class="line"><span>    &quot;scripts&quot;: {                # 自定义脚本</span></span>
<span class="line"><span>        &quot;start&quot;: &quot;node app.js&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;dependencies&quot;: {           # 生产环境依赖</span></span>
<span class="line"><span>        &quot;express&quot;: &quot;^4.17.1&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;devDependencies&quot;: {        # 开发环境依赖</span></span>
<span class="line"><span>        &quot;eslint&quot;: &quot;^7.0.0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h3><p>npm 能够智能地管理项目依赖关系。当项目中的多个包需要同一依赖项的不同版本时，npm 会管理依赖项树，以确保每个包接收正确的版本。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><h3 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h3><p>使用 <code>npm init</code> 命令可以创建一个新的 <code>package.json</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>命令行操作:</span></span>
<span class="line"><span>$ npm init          # 交互式创建package.json</span></span>
<span class="line"><span>$ npm init -y       # 使用默认配置快速创建</span></span></code></pre></div><h3 id="安装包" tabindex="-1">安装包 <a class="header-anchor" href="#安装包" aria-label="Permalink to &quot;安装包&quot;">​</a></h3><p>npm 提供了灵活的包安装方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装方式示意图:</span></span>
<span class="line"><span># 安装项目依赖</span></span>
<span class="line"><span>npm install &lt;包名&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 全局安装</span></span>
<span class="line"><span>npm install -g &lt;包名&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装开发依赖</span></span>
<span class="line"><span>npm install --save-dev &lt;包名&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据package.json安装所有依赖</span></span>
<span class="line"><span>npm install</span></span></code></pre></div><h3 id="常用命令一览" tabindex="-1">常用命令一览 <a class="header-anchor" href="#常用命令一览" aria-label="Permalink to &quot;常用命令一览&quot;">​</a></h3><p>以下是开发中常用的 npm 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>命令流程图:</span></span>
<span class="line"><span>[npm init] -&gt; [npm install] -&gt; [npm run] -&gt; [npm publish]</span></span>
<span class="line"><span>     |               |              |             |</span></span>
<span class="line"><span>  创建项目        安装依赖       运行脚本       发布包</span></span></code></pre></div><p>其他实用命令：</p><ul><li><code>npm update &lt;包名&gt;</code>：更新指定的包</li><li><code>npm uninstall &lt;包名&gt;</code>：卸载包</li><li><code>npm list</code>：查看已安装的包</li><li><code>npm search &lt;关键词&gt;</code>：搜索包</li></ul><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to &quot;高级功能&quot;">​</a></h2><h3 id="npm-scripts" tabindex="-1">npm Scripts <a class="header-anchor" href="#npm-scripts" aria-label="Permalink to &quot;npm Scripts&quot;">​</a></h3><p>通过在 <code>package.json</code> 的 <code>scripts</code> 字段定义脚本，可以自动化常见任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>scripts使用示例:</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;node index.js&quot;,           # 启动应用</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;jest&quot;,                     # 运行测试</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;webpack --mode production&quot; # 构建项目</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行方式: npm run &lt;脚本名&gt;</span></span></code></pre></div><h3 id="npx-工具" tabindex="-1">npx 工具 <a class="header-anchor" href="#npx-工具" aria-label="Permalink to &quot;npx 工具&quot;">​</a></h3><p>从 npm 5.2.0 版本开始，自带了 npx 命令，它允许你不全局安装包就能直接运行命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>npx使用示例:</span></span>
<span class="line"><span>npx create-react-app my-app    # 临时下载并执行create-react-app</span></span></code></pre></div><h3 id="版本管理与锁定" tabindex="-1">版本管理与锁定 <a class="header-anchor" href="#版本管理与锁定" aria-label="Permalink to &quot;版本管理与锁定&quot;">​</a></h3><p>npm 使用语义化版本控制，并通过 <code>package-lock.json</code> 文件锁定依赖的确切版本，确保环境一致性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>版本管理示意图:</span></span>
<span class="line"><span>package.json        package-lock.json</span></span>
<span class="line"><span>    |                       |</span></span>
<span class="line"><span>记录版本范围          锁定确切版本</span></span>
<span class="line"><span>    |                       |</span></span>
<span class="line"><span>   ~1.0.0    -&gt;       1.0.3</span></span>
<span class="line"><span>   ^1.0.0    -&gt;       1.2.1</span></span></code></pre></div><h2 id="常见问题与解决" tabindex="-1">常见问题与解决 <a class="header-anchor" href="#常见问题与解决" aria-label="Permalink to &quot;常见问题与解决&quot;">​</a></h2><h3 id="网络问题与镜像源" tabindex="-1">网络问题与镜像源 <a class="header-anchor" href="#网络问题与镜像源" aria-label="Permalink to &quot;网络问题与镜像源&quot;">​</a></h3><p>由于网络原因，安装包时可能会遇到速度慢或超时的问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>解决方案:</span></span>
<span class="line"><span># 查看当前镜像源</span></span>
<span class="line"><span>npm config get registry</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换淘宝镜像</span></span>
<span class="line"><span>npm config set registry https://registry.npm.taobao.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用nrm工具管理源</span></span>
<span class="line"><span>npx nrm use taobao</span></span></code></pre></div><h3 id="权限问题" tabindex="-1">权限问题 <a class="header-anchor" href="#权限问题" aria-label="Permalink to &quot;权限问题&quot;">​</a></h3><p>在全局安装包时，可能会遇到权限错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>解决方案示意图:</span></span>
<span class="line"><span># Linux/Mac系统使用sudo</span></span>
<span class="line"><span>sudo npm install -g &lt;包名&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者更改npm全局目录权限</span></span>
<span class="line"><span>npm config set prefix ~/npm</span></span></code></pre></div><h3 id="依赖冲突与缓存" tabindex="-1">依赖冲突与缓存 <a class="header-anchor" href="#依赖冲突与缓存" aria-label="Permalink to &quot;依赖冲突与缓存&quot;">​</a></h3><p>不同包可能需要同一依赖的不同版本，可能导致冲突。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>解决依赖冲突:</span></span>
<span class="line"><span>npm ls                  # 查看依赖树</span></span>
<span class="line"><span>npm cache clean --force # 清理缓存</span></span>
<span class="line"><span>rm -rf node_modules     # 删除node_modules重新安装</span></span>
<span class="line"><span>npm install             # 重新安装依赖</span></span></code></pre></div><h2 id="在现代前端工程化的角色" tabindex="-1">在现代前端工程化的角色 <a class="header-anchor" href="#在现代前端工程化的角色" aria-label="Permalink to &quot;在现代前端工程化的角色&quot;">​</a></h2><p>在前端工程化体系中，npm 已成为不可或缺的基础设施。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>前端工程化流程:</span></span>
<span class="line"><span>[代码编写] -&gt; [依赖管理(npm)] -&gt; [构建打包] -&gt; [部署发布]</span></span>
<span class="line"><span>        |               |               |           |</span></span>
<span class="line"><span>     开发者           npm管理        webpack等     生产环境</span></span></code></pre></div>`,48)])])}const g=n(l,[["render",i]]);export{h as __pageData,g as default};
