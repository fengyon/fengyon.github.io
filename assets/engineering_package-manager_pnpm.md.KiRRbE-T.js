import{_ as s,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"pnpm","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心特性","slug":"核心特性","link":"#核心特性","children":[{"level":3,"title":"高效磁盘使用","slug":"高效磁盘使用","link":"#高效磁盘使用","children":[]},{"level":3,"title":"安装速度快","slug":"安装速度快","link":"#安装速度快","children":[]},{"level":3,"title":"严格的依赖管理","slug":"严格的依赖管理","link":"#严格的依赖管理","children":[]}]},{"level":2,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[{"level":3,"title":"硬链接与符号链接","slug":"硬链接与符号链接","link":"#硬链接与符号链接","children":[]},{"level":3,"title":"依赖解析算法","slug":"依赖解析算法","link":"#依赖解析算法","children":[]}]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"安装与初始化","slug":"安装与初始化","link":"#安装与初始化","children":[]},{"level":3,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[]},{"level":3,"title":"脚本执行","slug":"脚本执行","link":"#脚本执行","children":[]}]},{"level":2,"title":"高级功能","slug":"高级功能","link":"#高级功能","children":[{"level":3,"title":"工作空间支持","slug":"工作空间支持","link":"#工作空间支持","children":[]},{"level":3,"title":"工作空间命令","slug":"工作空间命令","link":"#工作空间命令","children":[]},{"level":3,"title":"存储管理","slug":"存储管理","link":"#存储管理","children":[]}]},{"level":2,"title":"与 npm、yarn 的差异","slug":"与-npm、yarn-的差异","link":"#与-npm、yarn-的差异","children":[{"level":3,"title":"性能对比","slug":"性能对比","link":"#性能对比","children":[]},{"level":3,"title":"磁盘空间使用","slug":"磁盘空间使用","link":"#磁盘空间使用","children":[]},{"level":3,"title":"node_modules 结构差异","slug":"node-modules-结构差异","link":"#node-modules-结构差异","children":[]}]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[{"level":3,"title":"推荐使用 pnpm 的情况","slug":"推荐使用-pnpm-的情况","link":"#推荐使用-pnpm-的情况","children":[]},{"level":3,"title":"潜在考虑","slug":"潜在考虑","link":"#潜在考虑","children":[]}]}],"relativePath":"engineering/package-manager/pnpm.md","filePath":"engineering/package-manager/pnpm.md"}'),e={name:"engineering/package-manager/pnpm.md"};function o(c,a,t,i,r,d){return p(),n("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/package-manager/pnpm.md for this page in Markdown format</div><h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h1><p>pnpm 是一个快速、节省磁盘空间且高效的 JavaScript 包管理器，它通过创新的链接技术和独特的 <code>node_modules</code> 结构来解决传统包管理器在性能和磁盘空间使用上的问题。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><h3 id="高效磁盘使用" tabindex="-1">高效磁盘使用 <a class="header-anchor" href="#高效磁盘使用" aria-label="Permalink to &quot;高效磁盘使用&quot;">​</a></h3><p>pnpm 使用内容可寻址存储和硬链接技术，所有文件都存储在硬盘上的单一位置。当安装包时，包里的文件会硬链接到这一位置，不会占用额外磁盘空间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统包管理器 (npm/yarn):</span></span>
<span class="line"><span>[项目A] -&gt; [独立node_modules] -&gt; 完整依赖副本</span></span>
<span class="line"><span>[项目B] -&gt; [独立node_modules] -&gt; 完整依赖副本</span></span>
<span class="line"><span>                    ↓</span></span>
<span class="line"><span>            大量重复磁盘占用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm 方式:</span></span>
<span class="line"><span>[项目A] -&gt; [硬链接] -&gt; [全局存储]</span></span>
<span class="line"><span>[项目B] -&gt; [硬链接] -&gt; [同一全局存储]</span></span>
<span class="line"><span>                    ↓</span></span>
<span class="line"><span>            显著节省磁盘空间</span></span></code></pre></div><h3 id="安装速度快" tabindex="-1">安装速度快 <a class="header-anchor" href="#安装速度快" aria-label="Permalink to &quot;安装速度快&quot;">​</a></h3><p>pnpm 采用三阶段安装过程，比传统安装方式更加高效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装流程对比:</span></span>
<span class="line"><span>npm/yarn: [依赖解析] -&gt; [下载所有依赖] -&gt; [写入node_modules]</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>           速度相对较慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm: [依赖解析] -&gt; [目录结构计算] -&gt; [链接依赖项]</span></span>
<span class="line"><span>            ↓</span></span>
<span class="line"><span>       利用缓存和链接，速度更快</span></span></code></pre></div><h3 id="严格的依赖管理" tabindex="-1">严格的依赖管理 <a class="header-anchor" href="#严格的依赖管理" aria-label="Permalink to &quot;严格的依赖管理&quot;">​</a></h3><p>pnpm 创建非扁平的 <code>node_modules</code> 目录，避免幽灵依赖问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>npm/yarn 的扁平结构:</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── package-A     # 直接依赖</span></span>
<span class="line"><span>  ├── package-B     # 直接依赖</span></span>
<span class="line"><span>  └── package-C     # 间接依赖 (可被直接访问 - 幽灵依赖)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm 的非扁平结构:</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── package-A -&gt; .pnpm/package-A@1.0.0/node_modules/package-A</span></span>
<span class="line"><span>  ├── package-B -&gt; .pnpm/package-B@1.0.0/node_modules/package-B</span></span>
<span class="line"><span>  └── .pnpm/</span></span>
<span class="line"><span>        ├── package-A@1.0.0/</span></span>
<span class="line"><span>        │   └── node_modules/</span></span>
<span class="line"><span>        │       ├── package-A</span></span>
<span class="line"><span>        │       └── package-C -&gt; ../../package-C@1.0.0</span></span>
<span class="line"><span>        └── package-C@1.0.0/</span></span>
<span class="line"><span>            └── node_modules/</span></span>
<span class="line"><span>                └── package-C</span></span></code></pre></div><h2 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h2><h3 id="硬链接与符号链接" tabindex="-1">硬链接与符号链接 <a class="header-anchor" href="#硬链接与符号链接" aria-label="Permalink to &quot;硬链接与符号链接&quot;">​</a></h3><p>pnpm 结合使用硬链接和符号链接来优化依赖管理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>硬链接工作原理:</span></span>
<span class="line"><span>[项目A] -&gt; [硬链接] -&gt; [全局存储区文件]</span></span>
<span class="line"><span>[项目B] -&gt; [硬链接] -&gt; [同一全局存储区文件]</span></span>
<span class="line"><span>                    ↓</span></span>
<span class="line"><span>           修改任一链接，所有链接同步更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>符号链接工作原理:</span></span>
<span class="line"><span>[项目node_modules/package-A] -&gt; [符号链接] -&gt; [.pnpm/package-A@1.0.0/node_modules/package-A]</span></span></code></pre></div><h3 id="依赖解析算法" tabindex="-1">依赖解析算法 <a class="header-anchor" href="#依赖解析算法" aria-label="Permalink to &quot;依赖解析算法&quot;">​</a></h3><p>pnpm 的依赖解析确保每个包都能访问到其正确的依赖版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖解析示例:</span></span>
<span class="line"><span>项目依赖:</span></span>
<span class="line"><span>  - package-A@1.0.0 → 依赖 package-C@^1.0.0</span></span>
<span class="line"><span>  - package-B@2.0.0 → 依赖 package-C@^2.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm 结构:</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── .pnpm/</span></span>
<span class="line"><span>  │   ├── package-A@1.0.0/node_modules/</span></span>
<span class="line"><span>  │   │   ├── package-A</span></span>
<span class="line"><span>  │   │   └── package-C -&gt; ../../package-C@1.0.0</span></span>
<span class="line"><span>  │   ├── package-B@2.0.0/node_modules/</span></span>
<span class="line"><span>  │   │   ├── package-B</span></span>
<span class="line"><span>  │   │   └── package-C -&gt; ../../package-C@2.0.0</span></span>
<span class="line"><span>  │   ├── package-C@1.0.0/</span></span>
<span class="line"><span>  │   └── package-C@2.0.0/</span></span>
<span class="line"><span>  ├── package-A -&gt; .pnpm/package-A@1.0.0/node_modules/package-A</span></span>
<span class="line"><span>  └── package-B -&gt; .pnpm/package-B@2.0.0/node_modules/package-B</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><h3 id="安装与初始化" tabindex="-1">安装与初始化 <a class="header-anchor" href="#安装与初始化" aria-label="Permalink to &quot;安装与初始化&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 通过 npm 安装 pnpm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#79B8FF;"> -g</span><span style="color:#9ECBFF;"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化新项目</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从 create-* 套件创建项目</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> create</span><span style="color:#9ECBFF;"> react-app</span><span style="color:#9ECBFF;"> my-app</span></span></code></pre></div><h3 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> install</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> add</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> add</span><span style="color:#79B8FF;"> -D</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> add</span><span style="color:#79B8FF;"> -g</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 更新依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> update</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> update</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 移除依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> remove</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">packag</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre></div><h3 id="脚本执行" tabindex="-1">脚本执行 <a class="header-anchor" href="#脚本执行" aria-label="Permalink to &quot;脚本执行&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 运行 package.json 中定义的脚本</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> run</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">script-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">script-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#6A737D;">    # 当不与内置命令冲突时</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在项目范围内执行 shell 命令</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> exec</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">comman</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> jest</span><span style="color:#6A737D;">             # 等同于: pnpm exec jest</span></span></code></pre></div><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to &quot;高级功能&quot;">​</a></h2><h3 id="工作空间支持" tabindex="-1">工作空间支持 <a class="header-anchor" href="#工作空间支持" aria-label="Permalink to &quot;工作空间支持&quot;">​</a></h3><p>pnpm 内置对单体仓库的支持，可以高效管理多个相关包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工作空间结构:</span></span>
<span class="line"><span>project-root/</span></span>
<span class="line"><span>  ├── package.json</span></span>
<span class="line"><span>  │   &quot;workspaces&quot;: [&quot;packages/*&quot;]</span></span>
<span class="line"><span>  ├── packages/</span></span>
<span class="line"><span>  │   ├── package-A/</span></span>
<span class="line"><span>  │   │   └── package.json</span></span>
<span class="line"><span>  │   └── package-B/</span></span>
<span class="line"><span>  │       └── package.json</span></span>
<span class="line"><span>  └── pnpm-workspace.yaml</span></span></code></pre></div><h3 id="工作空间命令" tabindex="-1">工作空间命令 <a class="header-anchor" href="#工作空间命令" aria-label="Permalink to &quot;工作空间命令&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 在所有包中运行命令</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#79B8FF;"> -r</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">comman</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span><span style="color:#6A737D;">           # -r 是 --recursive 的简写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在特定包中运行命令</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#79B8FF;"> --filter</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">package-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">comman</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 并行运行命令</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#79B8FF;"> -r</span><span style="color:#79B8FF;"> --parallel</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">comman</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre></div><h3 id="存储管理" tabindex="-1">存储管理 <a class="header-anchor" href="#存储管理" aria-label="Permalink to &quot;存储管理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看存储路径</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> store</span><span style="color:#9ECBFF;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 清理存储</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> store</span><span style="color:#9ECBFF;"> prune</span></span></code></pre></div><h2 id="与-npm、yarn-的差异" tabindex="-1">与 npm、yarn 的差异 <a class="header-anchor" href="#与-npm、yarn-的差异" aria-label="Permalink to &quot;与 npm、yarn 的差异&quot;">​</a></h2><h3 id="性能对比" tabindex="-1">性能对比 <a class="header-anchor" href="#性能对比" aria-label="Permalink to &quot;性能对比&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>安装速度比较:</span></span>
<span class="line"><span>操作        npm      yarn     pnpm</span></span>
<span class="line"><span>首次安装    45s      25s      20s</span></span>
<span class="line"><span>后续安装    30s      8s       5s</span></span>
<span class="line"><span>无网安装    失败     成功     成功 (离线缓存)</span></span></code></pre></div><h3 id="磁盘空间使用" tabindex="-1">磁盘空间使用 <a class="header-anchor" href="#磁盘空间使用" aria-label="Permalink to &quot;磁盘空间使用&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>磁盘空间效率:</span></span>
<span class="line"><span>npm/yarn: 每个项目都有完整的依赖副本</span></span>
<span class="line"><span>   [项目A]: 200MB</span></span>
<span class="line"><span>   [项目B]: 200MB (相同依赖)</span></span>
<span class="line"><span>   总占用: 400MB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm: 共享相同依赖的存储</span></span>
<span class="line"><span>   [项目A]: [硬链接] -&gt; [全局存储 200MB]</span></span>
<span class="line"><span>   [项目B]: [硬链接] -&gt; [同一全局存储]</span></span>
<span class="line"><span>   总占用: 200MB + 少量链接开销</span></span></code></pre></div><h3 id="node-modules-结构差异" tabindex="-1">node_modules 结构差异 <a class="header-anchor" href="#node-modules-结构差异" aria-label="Permalink to &quot;node_modules 结构差异&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>npm/yarn (扁平化):</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── package-A</span></span>
<span class="line"><span>  ├── package-B</span></span>
<span class="line"><span>  └── package-C    # 间接依赖，但可被直接访问</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm (非扁平化):</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── package-A    -&gt; .pnpm/.../package-A</span></span>
<span class="line"><span>  ├── package-B    -&gt; .pnpm/.../package-B</span></span>
<span class="line"><span>  └── .pnpm/       # 所有实际依赖内容</span></span></code></pre></div><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><h3 id="推荐使用-pnpm-的情况" tabindex="-1">推荐使用 pnpm 的情况 <a class="header-anchor" href="#推荐使用-pnpm-的情况" aria-label="Permalink to &quot;推荐使用 pnpm 的情况&quot;">​</a></h3><ul><li><strong>大型项目</strong>：依赖数量多，需要优化安装速度和磁盘空间</li><li><strong>多项目开发</strong>：在同一机器上维护多个使用相似依赖的项目</li><li><strong>CI/CD 环境</strong>：快速安装和缓存依赖可以显著缩短构建时间</li><li><strong>磁盘空间有限</strong>：需要最大化利用可用存储空间的环境</li></ul><h3 id="潜在考虑" tabindex="-1">潜在考虑 <a class="header-anchor" href="#潜在考虑" aria-label="Permalink to &quot;潜在考虑&quot;">​</a></h3><ul><li><strong>工具兼容性</strong>：某些工具可能对符号链接支持不完善</li><li><strong>学习曲线</strong>：与传统包管理器不同的概念和工作原理</li><li><strong>生态系统</strong>：虽然增长迅速，但社区资源相比 npm 仍较少</li></ul>`,47)])])}const u=s(e,[["render",o]]);export{h as __pageData,u as default};
