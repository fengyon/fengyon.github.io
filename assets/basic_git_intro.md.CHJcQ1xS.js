import{_ as s,c as n,o as t,b as p}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"Git 简介","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 Git","slug":"什么是-git","link":"#什么是-git","children":[]},{"level":2,"title":"Git 的优势","slug":"git-的优势","link":"#git-的优势","children":[]},{"level":2,"title":"Git 的发展历史","slug":"git-的发展历史","link":"#git-的发展历史","children":[]},{"level":2,"title":"Git 核心概念详解","slug":"git-核心概念详解","link":"#git-核心概念详解","children":[{"level":3,"title":"仓库 (Repository)","slug":"仓库-repository","link":"#仓库-repository","children":[]},{"level":3,"title":"工作区、暂存区、仓库","slug":"工作区、暂存区、仓库","link":"#工作区、暂存区、仓库","children":[]},{"level":3,"title":"提交 (Commit)","slug":"提交-commit","link":"#提交-commit","children":[]},{"level":3,"title":"分支 (Branch)","slug":"分支-branch","link":"#分支-branch","children":[]},{"level":3,"title":"合并 (Merge)","slug":"合并-merge","link":"#合并-merge","children":[]},{"level":3,"title":"远程仓库 (Remote)","slug":"远程仓库-remote","link":"#远程仓库-remote","children":[]}]},{"level":2,"title":"Git 工作流程示意图","slug":"git-工作流程示意图","link":"#git-工作流程示意图","children":[]},{"level":2,"title":"分支工作流示意图","slug":"分支工作流示意图","link":"#分支工作流示意图","children":[]}],"relativePath":"basic/git/intro.md","filePath":"basic/git/intro.md"}'),e={name:"basic/git/intro.md"};function l(i,a,r,o,c,d){return t(),n("div",null,[...a[0]||(a[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/git/intro.md for this page in Markdown format</div><h1 id="git-简介" tabindex="-1">Git 简介 <a class="header-anchor" href="#git-简介" aria-label="Permalink to &quot;Git 简介&quot;">​</a></h1><h2 id="什么是-git" tabindex="-1">什么是 Git <a class="header-anchor" href="#什么是-git" aria-label="Permalink to &quot;什么是 Git&quot;">​</a></h2><p><strong>Git</strong> 是一个<strong>分布式版本控制系统 (Distributed Version Control System，DVCS)</strong>，主要用于跟踪文件的变化、协作开发与版本管理。 它最初由 <strong>Linus Torvalds (Linux 之父)</strong> 在 2005 年创建，用来管理 Linux 内核的源码版本。 如今，Git 已成为几乎所有软件开发项目的标准版本控制工具。</p><p>简而言之：</p><blockquote><p>Git = 记录文件变化 + 多人协作开发 + 可追溯历史 + 分支灵活。</p></blockquote><h2 id="git-的优势" tabindex="-1">Git 的优势 <a class="header-anchor" href="#git-的优势" aria-label="Permalink to &quot;Git 的优势&quot;">​</a></h2><p>在团队开发中，单靠人工保存不同版本 (如 <code>project_v1.zip</code>、<code>project_final_final.zip</code>) 是不现实的。</p><table tabindex="0"><thead><tr><th>优势</th><th>说明</th></tr></thead><tbody><tr><td><strong>分布式架构</strong></td><td>每个开发者的电脑都是一个完整的代码仓库（含完整历史），不依赖中央服务器。</td></tr><tr><td><strong>高效性能</strong></td><td>几乎所有操作都在本地完成，速度极快。</td></tr><tr><td><strong>强大的分支系统</strong></td><td>创建、切换、合并分支极为轻量。</td></tr><tr><td><strong>安全可靠</strong></td><td>使用 SHA-1 哈希算法保证数据完整性，不易被篡改。</td></tr><tr><td><strong>协作友好</strong></td><td>配合 GitHub、GitLab、Gitee 等平台，轻松实现团队协作。</td></tr></tbody></table><h2 id="git-的发展历史" tabindex="-1">Git 的发展历史 <a class="header-anchor" href="#git-的发展历史" aria-label="Permalink to &quot;Git 的发展历史&quot;">​</a></h2><table tabindex="0"><thead><tr><th>时间</th><th>事件</th></tr></thead><tbody><tr><td><strong>2002 年前</strong></td><td>Linux 内核开发使用 BitKeeper（商业版控制系统）。</td></tr><tr><td><strong>2005 年</strong></td><td>BitKeeper 收回 Linux 使用授权，Linus Torvalds 开始自研 Git。</td></tr><tr><td><strong>2005 年 4 月</strong></td><td>Git 初版发布，仅用 10 天开发出核心原型。</td></tr><tr><td><strong>2008 年</strong></td><td>GitHub 上线，使 Git 的协作与社交开发爆发式增长。</td></tr><tr><td><strong>2010 年后</strong></td><td>成为全球主流版本控制系统，几乎所有开源项目均采用 Git。</td></tr></tbody></table><h2 id="git-核心概念详解" tabindex="-1">Git 核心概念详解 <a class="header-anchor" href="#git-核心概念详解" aria-label="Permalink to &quot;Git 核心概念详解&quot;">​</a></h2><h3 id="仓库-repository" tabindex="-1">仓库 (Repository) <a class="header-anchor" href="#仓库-repository" aria-label="Permalink to &quot;仓库 (Repository)&quot;">​</a></h3><p>存储项目所有文件和版本历史的地方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>本地仓库结构：</span></span>
<span class="line"><span>/project/</span></span>
<span class="line"><span>  ├── .git/          # Git 数据库</span></span>
<span class="line"><span>  │   ├── objects/   # 存储所有数据内容</span></span>
<span class="line"><span>  │   ├── refs/      # 存储指向数据的指针</span></span>
<span class="line"><span>  │   └── HEAD       # 指向当前分支</span></span>
<span class="line"><span>  └── 源代码文件</span></span></code></pre></div><h3 id="工作区、暂存区、仓库" tabindex="-1">工作区、暂存区、仓库 <a class="header-anchor" href="#工作区、暂存区、仓库" aria-label="Permalink to &quot;工作区、暂存区、仓库&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工作区 (Working Directory)    暂存区 (Staging Area)    仓库 (Repository)</span></span>
<span class="line"><span>      ↓                             ↓                     ↓</span></span>
<span class="line"><span>[ 修改文件 ]  -- git add --&gt;  [ 准备提交 ] -- git commit --&gt; [ 永久保存 ]</span></span>
<span class="line"><span>      ↑                             ↑                     ↑</span></span>
<span class="line"><span>[ 实际文件 ]                 [ 临时区域 ]           [ 版本历史 ]</span></span></code></pre></div><h3 id="提交-commit" tabindex="-1">提交 (Commit) <a class="header-anchor" href="#提交-commit" aria-label="Permalink to &quot;提交 (Commit)&quot;">​</a></h3><p>代码变化的快照，包含：</p><ul><li>唯一的 SHA-1 哈希 ID</li><li>作者信息</li><li>提交信息</li><li>指向父提交的指针</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>提交链示意图：</span></span>
<span class="line"><span>C1 &lt;-- C2 &lt;-- C3 &lt;-- C4</span></span>
<span class="line"><span>       ↑             ↑</span></span>
<span class="line"><span>   第一次提交     最新提交</span></span></code></pre></div><h3 id="分支-branch" tabindex="-1">分支 (Branch) <a class="header-anchor" href="#分支-branch" aria-label="Permalink to &quot;分支 (Branch)&quot;">​</a></h3><p>指向某个提交的轻量级可移动指针。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主分支开发：</span></span>
<span class="line"><span>          main</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>C1 ← C2 ← C3 ← C4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建功能分支：</span></span>
<span class="line"><span>          main</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>C1 ← C2 ← C3 ← C4</span></span>
<span class="line"><span>           \\</span></span>
<span class="line"><span>            C5 ← C6</span></span>
<span class="line"><span>             ↑</span></span>
<span class="line"><span>           feature</span></span></code></pre></div><h3 id="合并-merge" tabindex="-1">合并 (Merge) <a class="header-anchor" href="#合并-merge" aria-label="Permalink to &quot;合并 (Merge)&quot;">​</a></h3><p>将不同分支的修改整合到一起。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>合并前：</span></span>
<span class="line"><span>          main</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>C1 ← C2 ← C3 ← C4</span></span>
<span class="line"><span>           \\</span></span>
<span class="line"><span>            C5 ← C6</span></span>
<span class="line"><span>             ↑</span></span>
<span class="line"><span>           feature</span></span>
<span class="line"><span></span></span>
<span class="line"><span>合并后：</span></span>
<span class="line"><span>          main</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>C1 ← C2 ← C3 ← C4 ← M</span></span>
<span class="line"><span>           \\       /</span></span>
<span class="line"><span>            C5 ← C6</span></span></code></pre></div><h3 id="远程仓库-remote" tabindex="-1">远程仓库 (Remote) <a class="header-anchor" href="#远程仓库-remote" aria-label="Permalink to &quot;远程仓库 (Remote)&quot;">​</a></h3><p>托管在服务器上的仓库副本，用于团队协作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>本地与远程协作：</span></span>
<span class="line"><span>本地仓库        -- push/pull --&gt;        远程仓库 (GitHub/GitLab)</span></span>
<span class="line"><span>      ↓                                       ↓</span></span>
<span class="line"><span>[ 你的修改 ]  &lt;-- 同步代码 --&gt; [ 团队共享代码 ]</span></span></code></pre></div><h2 id="git-工作流程示意图" tabindex="-1">Git 工作流程示意图 <a class="header-anchor" href="#git-工作流程示意图" aria-label="Permalink to &quot;Git 工作流程示意图&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>典型开发流程：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>工作区       暂存区       本地仓库       远程仓库</span></span>
<span class="line"><span>  ↓            ↓            ↓            ↓</span></span>
<span class="line"><span>[修改文件]</span></span>
<span class="line"><span>  ├─ git add ─→ [暂存变更]</span></span>
<span class="line"><span>  │              ├─ git commit ─→ [新提交]</span></span>
<span class="line"><span>  │              │                   ├─ git push ────→ [更新远程]</span></span>
<span class="line"><span>  │              │                   │</span></span>
<span class="line"><span>  │              ←─ git reset ───┘   │</span></span>
<span class="line"><span>  ←─ git checkout ───────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ←─ git pull ─────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>[查看状态] ─── git status ─→ [显示状态信息]</span></span></code></pre></div><h2 id="分支工作流示意图" tabindex="-1">分支工作流示意图 <a class="header-anchor" href="#分支工作流示意图" aria-label="Permalink to &quot;分支工作流示意图&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Git Flow 示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main分支:    ○──○──○─────────○─────────────○─────○</span></span>
<span class="line"><span>             │  │  │         │             │     │</span></span>
<span class="line"><span>dev分支:      └──○──○──○──○──○─────────────○─────○</span></span>
<span class="line"><span>                │     │  │  │  │           │     │</span></span>
<span class="line"><span>feature/A:       └────○──○──┘  │           │     │</span></span>
<span class="line"><span>                      │        │           │     │</span></span>
<span class="line"><span>feature/B:             └────────○──○───────┘     │</span></span>
<span class="line"><span>                               │  │              │</span></span>
<span class="line"><span>hotfix:                         └──○──────────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>○ = 提交</span></span>
<span class="line"><span>连线 = 分支关系</span></span></code></pre></div>`,34)])])}const u=s(e,[["render",l]]);export{h as __pageData,u as default};
