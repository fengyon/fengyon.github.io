import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"git hooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 git hooks？","slug":"什么是-git-hooks","link":"#什么是-git-hooks","children":[]},{"level":2,"title":"hooks 工作原理","slug":"hooks-工作原理","link":"#hooks-工作原理","children":[{"level":3,"title":"触发时机","slug":"触发时机","link":"#触发时机","children":[]},{"level":3,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]}]},{"level":2,"title":"核心 hooks 分类","slug":"核心-hooks-分类","link":"#核心-hooks-分类","children":[{"level":3,"title":"客户端 hooks","slug":"客户端-hooks","link":"#客户端-hooks","children":[]},{"level":3,"title":"服务端 hooks","slug":"服务端-hooks","link":"#服务端-hooks","children":[]}]},{"level":2,"title":"常用 hooks 详解","slug":"常用-hooks-详解","link":"#常用-hooks-详解","children":[{"level":3,"title":"pre-commit","slug":"pre-commit","link":"#pre-commit","children":[]},{"level":3,"title":"commit-msg","slug":"commit-msg","link":"#commit-msg","children":[]},{"level":3,"title":"pre-push","slug":"pre-push","link":"#pre-push","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"代码质量保障","slug":"代码质量保障","link":"#代码质量保障","children":[]},{"level":3,"title":"提交信息规范","slug":"提交信息规范","link":"#提交信息规范","children":[]},{"level":3,"title":"工作流自动化","slug":"工作流自动化","link":"#工作流自动化","children":[]}]},{"level":2,"title":"配置与管理","slug":"配置与管理","link":"#配置与管理","children":[{"level":3,"title":"原生 hooks 配置","slug":"原生-hooks-配置","link":"#原生-hooks-配置","children":[]},{"level":3,"title":"Husky 工具","slug":"husky-工具","link":"#husky-工具","children":[]},{"level":3,"title":"lint-staged 集成","slug":"lint-staged-集成","link":"#lint-staged-集成","children":[]}]},{"level":2,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[{"level":3,"title":"基础 pre-commit 配置","slug":"基础-pre-commit-配置","link":"#基础-pre-commit-配置","children":[]},{"level":3,"title":"Husky + lint-staged 配置","slug":"husky-lint-staged-配置","link":"#husky-lint-staged-配置","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"hooks 设计原则","slug":"hooks-设计原则","link":"#hooks-设计原则","children":[]},{"level":3,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[]}]},{"level":2,"title":"团队协作策略","slug":"团队协作策略","link":"#团队协作策略","children":[{"level":3,"title":"hooks 共享","slug":"hooks-共享","link":"#hooks-共享","children":[]},{"level":3,"title":"渐进式采用","slug":"渐进式采用","link":"#渐进式采用","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[{"level":3,"title":"性能考虑","slug":"性能考虑","link":"#性能考虑","children":[]},{"level":3,"title":"灵活性保障","slug":"灵活性保障","link":"#灵活性保障","children":[]}]}],"relativePath":"basic/git/hooks.md","filePath":"basic/git/hooks.md"}'),e={name:"basic/git/hooks.md"};function o(t,s,i,c,r,h){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/git/hooks.md for this page in Markdown format</div><h1 id="git-hooks" tabindex="-1">git hooks <a class="header-anchor" href="#git-hooks" aria-label="Permalink to &quot;git hooks&quot;">​</a></h1><p>git hooks 是 Git 版本控制系统中的脚本机制，允许在特定的 Git 生命周期事件发生时自动执行自定义脚本。这些钩子可以拦截和影响 Git 的工作流程，为代码质量保障和开发流程自动化提供强大支持。</p><h2 id="什么是-git-hooks" tabindex="-1">什么是 git hooks？ <a class="header-anchor" href="#什么是-git-hooks" aria-label="Permalink to &quot;什么是 git hooks？&quot;">​</a></h2><p>git hooks 是存储在 Git 仓库 <code>.git/hooks</code> 目录中的可执行脚本，在特定的 Git 操作 (如提交、推送、合并等) 前后自动触发执行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>git hooks 位置:</span></span>
<span class="line"><span>[仓库]/</span></span>
<span class="line"><span>  └── .git/</span></span>
<span class="line"><span>      └── hooks/</span></span>
<span class="line"><span>          ├── pre-commit.sample</span></span>
<span class="line"><span>          ├── pre-push.sample</span></span>
<span class="line"><span>          ├── post-checkout.sample</span></span>
<span class="line"><span>          └── ...其他钩子</span></span></code></pre></div><h2 id="hooks-工作原理" tabindex="-1">hooks 工作原理 <a class="header-anchor" href="#hooks-工作原理" aria-label="Permalink to &quot;hooks 工作原理&quot;">​</a></h2><h3 id="触发时机" tabindex="-1">触发时机 <a class="header-anchor" href="#触发时机" aria-label="Permalink to &quot;触发时机&quot;">​</a></h3><p>git hooks 在 Git 工作流的各个关键节点被调用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Git 工作流与 hooks:</span></span>
<span class="line"><span>[工作区修改] -&gt; [git add] -&gt; [git commit] -&gt; [git push]</span></span>
<span class="line"><span>       |            |            |            |</span></span>
<span class="line"><span>     修改文件     暂存变更    触发pre-commit  触发pre-push</span></span>
<span class="line"><span>                              触发commit-msg  触发post-push</span></span></code></pre></div><h3 id="执行流程" tabindex="-1">执行流程 <a class="header-anchor" href="#执行流程" aria-label="Permalink to &quot;执行流程&quot;">​</a></h3><p>钩子脚本按照特定顺序执行，可以中断或继续 Git 操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>典型提交流程:</span></span>
<span class="line"><span>[git commit] -&gt; [pre-commit] -&gt; [prepare-commit-msg] -&gt; [commit-msg] -&gt; [post-commit]</span></span>
<span class="line"><span>       |            |                 |                  |              |</span></span>
<span class="line"><span>   开始提交     代码检查钩子       编辑提交信息钩子     提交信息检查     提交后操作</span></span>
<span class="line"><span>                失败则中止         可修改信息         失败则中止       不影响结果</span></span></code></pre></div><h2 id="核心-hooks-分类" tabindex="-1">核心 hooks 分类 <a class="header-anchor" href="#核心-hooks-分类" aria-label="Permalink to &quot;核心 hooks 分类&quot;">​</a></h2><h3 id="客户端-hooks" tabindex="-1">客户端 hooks <a class="header-anchor" href="#客户端-hooks" aria-label="Permalink to &quot;客户端 hooks&quot;">​</a></h3><p>在开发者本地机器上执行的钩子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>提交工作流钩子:</span></span>
<span class="line"><span>pre-commit:       提交前运行，用于代码检查、测试</span></span>
<span class="line"><span>prepare-commit-msg: 提交信息编辑前，可修改默认信息</span></span>
<span class="line"><span>commit-msg:       提交信息检查，验证格式规范</span></span>
<span class="line"><span>post-commit:      提交完成后，可用于通知等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其他客户端钩子:</span></span>
<span class="line"><span>pre-push:         推送前运行，验证代码质量</span></span>
<span class="line"><span>post-checkout:    切换分支后，依赖安装等</span></span>
<span class="line"><span>pre-rebase:       变基前验证</span></span></code></pre></div><h3 id="服务端-hooks" tabindex="-1">服务端 hooks <a class="header-anchor" href="#服务端-hooks" aria-label="Permalink to &quot;服务端 hooks&quot;">​</a></h3><p>在 Git 服务器上执行的钩子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>服务端钩子:</span></span>
<span class="line"><span>pre-receive:      接收推送前，验证所有引用更新</span></span>
<span class="line"><span>update:           每个分支更新前，细粒度控制</span></span>
<span class="line"><span>post-receive:     推送完成后，触发部署、通知</span></span></code></pre></div><h2 id="常用-hooks-详解" tabindex="-1">常用 hooks 详解 <a class="header-anchor" href="#常用-hooks-详解" aria-label="Permalink to &quot;常用 hooks 详解&quot;">​</a></h2><h3 id="pre-commit" tabindex="-1">pre-commit <a class="header-anchor" href="#pre-commit" aria-label="Permalink to &quot;pre-commit&quot;">​</a></h3><p>在提交操作完成前执行，常用于代码质量检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>pre-commit 工作流程:</span></span>
<span class="line"><span>[git commit] -&gt; [pre-commit脚本] -&gt; [通过?] -&gt; [完成提交]</span></span>
<span class="line"><span>       |              |               |          |</span></span>
<span class="line"><span>   触发执行       运行lint、测试      是/否      继续/中止</span></span></code></pre></div><h3 id="commit-msg" tabindex="-1">commit-msg <a class="header-anchor" href="#commit-msg" aria-label="Permalink to &quot;commit-msg&quot;">​</a></h3><p>检查提交信息格式，确保符合团队规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>commit-msg 检查:</span></span>
<span class="line"><span>提交信息: &quot;feat: 添加用户登录功能&quot;</span></span>
<span class="line"><span>          |         |</span></span>
<span class="line"><span>        类型       描述</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>验证规则:</span></span>
<span class="line"><span>- 类型: feat|fix|docs|style|refactor|test|chore</span></span>
<span class="line"><span>- 格式: &lt;类型&gt;: &lt;描述&gt;</span></span>
<span class="line"><span>- 长度: 描述部分不超过50字符</span></span></code></pre></div><h3 id="pre-push" tabindex="-1">pre-push <a class="header-anchor" href="#pre-push" aria-label="Permalink to &quot;pre-push&quot;">​</a></h3><p>在推送代码到远程仓库前执行，进行更全面的验证。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>pre-push 验证:</span></span>
<span class="line"><span>[git push] -&gt; [pre-push脚本] -&gt; [运行测试] -&gt; [通过?] -&gt; [执行推送]</span></span>
<span class="line"><span>       |             |             |           |          |</span></span>
<span class="line"><span>   触发推送       获取差异文件    关键测试     是/否      继续/中止</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="代码质量保障" tabindex="-1">代码质量保障 <a class="header-anchor" href="#代码质量保障" aria-label="Permalink to &quot;代码质量保障&quot;">​</a></h3><p>通过 hooks 自动化代码检查和测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>质量保障流程:</span></span>
<span class="line"><span>[开发者提交] -&gt; [pre-commit] -&gt; [ESLint检查] -&gt; [单元测试] -&gt; [通过?] -&gt; [允许提交]</span></span>
<span class="line"><span>        |            |             |            |           |          |</span></span>
<span class="line"><span>     代码变更      自动触发       语法检查     功能验证     是/否      继续/中止</span></span></code></pre></div><h3 id="提交信息规范" tabindex="-1">提交信息规范 <a class="header-anchor" href="#提交信息规范" aria-label="Permalink to &quot;提交信息规范&quot;">​</a></h3><p>统一团队的提交信息格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>提交规范执行:</span></span>
<span class="line"><span>[git commit -m &quot;消息&quot;] -&gt; [commit-msg验证] -&gt; [格式正确?] -&gt; [接受提交]</span></span>
<span class="line"><span>           |                  |                 |            |</span></span>
<span class="line"><span>       原始消息           正则表达式检查        是/否        成功/失败</span></span></code></pre></div><h3 id="工作流自动化" tabindex="-1">工作流自动化 <a class="header-anchor" href="#工作流自动化" aria-label="Permalink to &quot;工作流自动化&quot;">​</a></h3><p>自动化开发流程中的重复任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>自动化任务:</span></span>
<span class="line"><span>post-checkout: 切换分支后自动安装依赖</span></span>
<span class="line"><span>post-merge:    合并后自动更新数据库</span></span>
<span class="line"><span>pre-push:      推送前构建项目验证</span></span></code></pre></div><h2 id="配置与管理" tabindex="-1">配置与管理 <a class="header-anchor" href="#配置与管理" aria-label="Permalink to &quot;配置与管理&quot;">​</a></h2><h3 id="原生-hooks-配置" tabindex="-1">原生 hooks 配置 <a class="header-anchor" href="#原生-hooks-配置" aria-label="Permalink to &quot;原生 hooks 配置&quot;">​</a></h3><p>直接使用 Git 原生的 hooks 机制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原生 hooks 设置:</span></span>
<span class="line"><span># 创建可执行钩子脚本</span></span>
<span class="line"><span>chmod +x .git/hooks/pre-commit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 脚本内容示例</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>npm run lint</span></span>
<span class="line"><span>npm test</span></span></code></pre></div><h3 id="husky-工具" tabindex="-1">Husky 工具 <a class="header-anchor" href="#husky-工具" aria-label="Permalink to &quot;Husky 工具&quot;">​</a></h3><p>使用 Husky 简化 hooks 管理，支持现代前端工作流。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Husky 配置:</span></span>
<span class="line"><span>安装:    npm install husky --save-dev</span></span>
<span class="line"><span>初始化:  npx husky init</span></span>
<span class="line"><span>添加钩子: npx husky add .husky/pre-commit &quot;npm test&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目录结构:</span></span>
<span class="line"><span>.husky/</span></span>
<span class="line"><span>  ├── _</span></span>
<span class="line"><span>  ├── pre-commit    # 预提交钩子</span></span>
<span class="line"><span>  └── commit-msg    # 提交信息钩子</span></span></code></pre></div><h3 id="lint-staged-集成" tabindex="-1">lint-staged 集成 <a class="header-anchor" href="#lint-staged-集成" aria-label="Permalink to &quot;lint-staged 集成&quot;">​</a></h3><p>只对暂存区的文件进行检查，提高效率。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>lint-staged 工作流:</span></span>
<span class="line"><span>[git add] -&gt; [git commit] -&gt; [pre-commit] -&gt; [lint-staged] -&gt; [只检查暂存文件]</span></span>
<span class="line"><span>      |           |             |              |                 |</span></span>
<span class="line"><span>   选择文件     触发提交       调用钩子       过滤文件          高效检查</span></span></code></pre></div><h2 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to &quot;配置示例&quot;">​</a></h2><h3 id="基础-pre-commit-配置" tabindex="-1">基础 pre-commit 配置 <a class="header-anchor" href="#基础-pre-commit-配置" aria-label="Permalink to &quot;基础 pre-commit 配置&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="color:#6A737D;"># .git/hooks/pre-commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;运行代码检查...&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 ESLint</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> run</span><span style="color:#9ECBFF;"> lint</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#79B8FF;">$?</span><span style="color:#F97583;"> -ne</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;ESLint 检查失败，请修复错误后重新提交&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">    exit</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行测试</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> test</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#79B8FF;">$?</span><span style="color:#F97583;"> -ne</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;测试失败，请修复测试后重新提交&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">    exit</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;检查通过，允许提交&quot;</span></span></code></pre></div><h3 id="husky-lint-staged-配置" tabindex="-1">Husky + lint-staged 配置 <a class="header-anchor" href="#husky-lint-staged-配置" aria-label="Permalink to &quot;Husky + lint-staged 配置&quot;">​</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;lint:staged&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;lint-staged&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;lint-staged&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;*.{js,jsx,ts,tsx}&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;eslint --fix&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;*.{json,md}&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># .husky/pre-commit</span></span>
<span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#79B8FF;">.</span><span style="color:#9ECBFF;"> &quot;$(</span><span style="color:#B392F0;">dirname</span><span style="color:#79B8FF;"> --</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#79B8FF;">$0</span><span style="color:#9ECBFF;">&quot;)/_/husky.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> run</span><span style="color:#9ECBFF;"> lint:staged</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="hooks-设计原则" tabindex="-1">hooks 设计原则 <a class="header-anchor" href="#hooks-设计原则" aria-label="Permalink to &quot;hooks 设计原则&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有效 hooks 特征:</span></span>
<span class="line"><span>[快速执行] -&gt; [明确反馈] -&gt; [可跳过机制] -&gt; [团队一致]</span></span>
<span class="line"><span>     |           |           |           |</span></span>
<span class="line"><span>  不阻塞开发    错误信息清晰   紧急情况跳过   统一配置</span></span></code></pre></div><h3 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h3><p>提供清晰的错误信息和解决指导。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>错误处理模式:</span></span>
<span class="line"><span>[钩子执行] -&gt; [检查失败] -&gt; [显示错误] -&gt; [提供解决方案]</span></span>
<span class="line"><span>     |           |           |           |</span></span>
<span class="line"><span>  运行脚本     验证未通过   具体错误信息   修复命令提示</span></span></code></pre></div><h2 id="团队协作策略" tabindex="-1">团队协作策略 <a class="header-anchor" href="#团队协作策略" aria-label="Permalink to &quot;团队协作策略&quot;">​</a></h2><h3 id="hooks-共享" tabindex="-1">hooks 共享 <a class="header-anchor" href="#hooks-共享" aria-label="Permalink to &quot;hooks 共享&quot;">​</a></h3><p>确保团队成员使用相同的 hooks 配置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>hooks 共享方案:</span></span>
<span class="line"><span>[版本控制hooks] -&gt; [安装脚本] -&gt; [自动配置] -&gt; [团队统一]</span></span>
<span class="line"><span>       |             |            |           |</span></span>
<span class="line"><span>   hooks目录       setup脚本     初始化      一致体验</span></span></code></pre></div><h3 id="渐进式采用" tabindex="-1">渐进式采用 <a class="header-anchor" href="#渐进式采用" aria-label="Permalink to &quot;渐进式采用&quot;">​</a></h3><p>在团队中逐步引入 git hooks。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>采用策略:</span></span>
<span class="line"><span>[基础检查] -&gt; [代码格式化] -&gt; [测试验证] -&gt; [完整流程]</span></span>
<span class="line"><span>     |           |           |           |</span></span>
<span class="line"><span> 语法检查     自动格式化    单元测试     全流程验证</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="性能考虑" tabindex="-1">性能考虑 <a class="header-anchor" href="#性能考虑" aria-label="Permalink to &quot;性能考虑&quot;">​</a></h3><p>hooks 应该高效执行，避免影响开发体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>性能优化:</span></span>
<span class="line"><span>[只检查必要项] -&gt; [增量检查] -&gt; [并行执行] -&gt; [缓存结果]</span></span>
<span class="line"><span>      |             |           |           |</span></span>
<span class="line"><span>  针对性验证     变化文件     同时运行     避免重复</span></span></code></pre></div><h3 id="灵活性保障" tabindex="-1">灵活性保障 <a class="header-anchor" href="#灵活性保障" aria-label="Permalink to &quot;灵活性保障&quot;">​</a></h3><p>提供绕过机制应对特殊情况。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>绕过机制:</span></span>
<span class="line"><span># 跳过hooks提交</span></span>
<span class="line"><span>git commit --no-verify</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 紧急情况使用</span></span>
<span class="line"><span>[紧急修复] -&gt; [--no-verify] -&gt; [快速提交] -&gt; [事后补检查]</span></span>
<span class="line"><span>     |           |               |           |</span></span>
<span class="line"><span>  生产问题     跳过验证         立即修复     后续补测试</span></span></code></pre></div>`,76)])])}const g=a(e,[["render",o]]);export{u as __pageData,g as default};
