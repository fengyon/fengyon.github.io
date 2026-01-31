import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"输入","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 命令行输入概述","slug":"node-js-命令行输入概述","link":"#node-js-命令行输入概述","children":[]},{"level":2,"title":"原生输入处理方案","slug":"原生输入处理方案","link":"#原生输入处理方案","children":[{"level":3,"title":"Readline 模块基础","slug":"readline-模块基础","link":"#readline-模块基础","children":[]},{"level":3,"title":"Process.stdin 低级 API","slug":"process-stdin-低级-api","link":"#process-stdin-低级-api","children":[]}]},{"level":2,"title":"第三方输入处理库","slug":"第三方输入处理库","link":"#第三方输入处理库","children":[{"level":3,"title":"Inquirer.js - 功能全面的交互库","slug":"inquirer-js-功能全面的交互库","link":"#inquirer-js-功能全面的交互库","children":[]},{"level":3,"title":"Prompt-Sync - 同步输入方案","slug":"prompt-sync-同步输入方案","link":"#prompt-sync-同步输入方案","children":[]}]},{"level":2,"title":"输入验证与转换","slug":"输入验证与转换","link":"#输入验证与转换","children":[{"level":3,"title":"数据验证策略","slug":"数据验证策略","link":"#数据验证策略","children":[]},{"level":3,"title":"输入数据转换","slug":"输入数据转换","link":"#输入数据转换","children":[]}]},{"level":2,"title":"高级输入处理模式","slug":"高级输入处理模式","link":"#高级输入处理模式","children":[{"level":3,"title":"条件性问题流","slug":"条件性问题流","link":"#条件性问题流","children":[]},{"level":3,"title":"可测试的输入架构","slug":"可测试的输入架构","link":"#可测试的输入架构","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"项目初始化工具","slug":"项目初始化工具","link":"#项目初始化工具","children":[]},{"level":3,"title":"配置管理工具","slug":"配置管理工具","link":"#配置管理工具","children":[]}]}],"relativePath":"special/cli/input.md","filePath":"special/cli/input.md"}'),o={name:"special/cli/input.md"};function e(E,s,c,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/input.md for this page in Markdown format</div><h1 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h1><h2 id="node-js-命令行输入概述" tabindex="-1">Node.js 命令行输入概述 <a class="header-anchor" href="#node-js-命令行输入概述" aria-label="Permalink to &quot;Node.js 命令行输入概述&quot;">​</a></h2><p>在 Node.js 应用开发中，命令行输入是实现与用户交互的核心环节。通过接收和处理用户输入，命令行工具能够动态响应指令、收集参数和执行个性化操作，从而完成从简单脚本到复杂交互式应用的各种任务。</p><p>Node.js 提供了多种处理命令行输入的方案，从基础的原生模块到功能丰富的高级库，形成了完整的输入处理生态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>基础输入 → 单行问答 (readline.question)</span></span>
<span class="line"><span>中级处理 → 事件驱动 (readline.on)  </span></span>
<span class="line"><span>高级交互 → 丰富组件 (Inquirer.js)</span></span>
<span class="line"><span>专业方案 → 可测试架构 (Clack)</span></span></code></pre></div><h2 id="原生输入处理方案" tabindex="-1">原生输入处理方案 <a class="header-anchor" href="#原生输入处理方案" aria-label="Permalink to &quot;原生输入处理方案&quot;">​</a></h2><h3 id="readline-模块基础" tabindex="-1">Readline 模块基础 <a class="header-anchor" href="#readline-模块基础" aria-label="Permalink to &quot;Readline 模块基础&quot;">​</a></h3><p>Node.js 自 7.0 版本起提供了 <code>readline</code> 模块，用于从可读流 (如 <code>process.stdin</code>) 逐行获取输入。这是处理命令行输入最基础且强大的原生方案。</p><h4 id="单行输入问答" tabindex="-1">单行输入问答 <a class="header-anchor" href="#单行输入问答" aria-label="Permalink to &quot;单行输入问答&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// readline-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> readline </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:readline&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> readline.</span><span style="color:#B392F0;">createInterface</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  input: process.stdin,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: process.stdout</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">rl.</span><span style="color:#B392F0;">question</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入您的姓名：&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">answer</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`您好，\${</span><span style="color:#E1E4E8;">answer</span><span style="color:#9ECBFF;">}！\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  rl.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h4 id="事件驱动输入处理" tabindex="-1">事件驱动输入处理 <a class="header-anchor" href="#事件驱动输入处理" aria-label="Permalink to &quot;事件驱动输入处理&quot;">​</a></h4><p>对于需要连续输入或复杂交互的场景，事件驱动模式更加灵活：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// readline-events.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> readline </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:readline&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> readline.</span><span style="color:#B392F0;">createInterface</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  input: process.stdin,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: process.stdout,</span></span>
<span class="line"><span style="color:#E1E4E8;">  prompt: </span><span style="color:#9ECBFF;">&#39;CLI&gt; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入命令 (输入 &quot;exit&quot; 退出)：&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">rl.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">rl.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> command</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> input.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;">(command) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;exit&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      rl.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;help&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;可用命令: help, version, exit&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;version&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;CLI工具 v1.0.0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">      // 忽略空行</span></span>
<span class="line"><span style="color:#F97583;">      break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知命令: \${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  rl.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">rl.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;再见！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="process-stdin-低级-api" tabindex="-1">Process.stdin 低级 API <a class="header-anchor" href="#process-stdin-低级-api" aria-label="Permalink to &quot;Process.stdin 低级 API&quot;">​</a></h3><p>对于需要更精细控制的场景，可以直接使用 <code>process.stdin</code>：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// stdin-raw.mjs</span></span>
<span class="line"><span style="color:#E1E4E8;">process.stdin.</span><span style="color:#B392F0;">setRawMode</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">process.stdin.</span><span style="color:#B392F0;">setEncoding</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;按任意键查看键值，按 Ctrl+C 退出&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">process.stdin.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // Ctrl+C 退出</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\u0003</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;再见！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`按键: \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">} (十六进制: \${</span><span style="color:#E1E4E8;">Buffer</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">from</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="第三方输入处理库" tabindex="-1">第三方输入处理库 <a class="header-anchor" href="#第三方输入处理库" aria-label="Permalink to &quot;第三方输入处理库&quot;">​</a></h2><h3 id="inquirer-js-功能全面的交互库" tabindex="-1">Inquirer.js - 功能全面的交互库 <a class="header-anchor" href="#inquirer-js-功能全面的交互库" aria-label="Permalink to &quot;Inquirer.js - 功能全面的交互库&quot;">​</a></h3><p>Inquirer.js 是目前 Node.js 生态中最主流的命令行交互库，每周下载量超 1000 万次，被众多知名工具采用。它提供了丰富的交互类型和灵活的配置选项。</p><h4 id="基础问答流程" tabindex="-1">基础问答流程 <a class="header-anchor" href="#基础问答流程" aria-label="Permalink to &quot;基础问答流程&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// inquirer-basic.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;projectName&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入项目名称：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;my-project&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[a-z-]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;项目名称只能包含小写字母和短横线！&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;initGit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;是否初始化 Git 仓库？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> answers</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(questions);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;项目配置:&#39;</span><span style="color:#E1E4E8;">, answers);</span></span></code></pre></div><h4 id="丰富的交互类型" tabindex="-1">丰富的交互类型 <a class="header-anchor" href="#丰富的交互类型" aria-label="Permalink to &quot;丰富的交互类型&quot;">​</a></h4><p>Inquirer.js 支持 10+ 种交互类型，覆盖绝大多数命令行交互场景：</p><p><strong>输入框与密码框</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// inquirer-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入用户名：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 模拟异步验证</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;=</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;"> ?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;用户名至少3个字符&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入密码：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mask: </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 用 * 显示输入长度</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> value.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;=</span><span style="color:#79B8FF;"> 6</span><span style="color:#F97583;"> ?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;密码至少6位&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><p><strong>列表选择</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> selectionQuestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;framework&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请选择项目框架：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Vue 3&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;vue3&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;React 18&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Angular&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;angular&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">Separator</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;自定义配置&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;custom&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    pageSize: </span><span style="color:#79B8FF;">3</span><span style="color:#6A737D;"> // 控制显示选项数量</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;features&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;选择需要集成的功能：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;TypeScript&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;">, checked: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;ESLint&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;eslint&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Prettier&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;prettier&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;单元测试&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">selected</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      selected.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;至少选择一个功能&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><p><strong>高级交互组件</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> advancedQuestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;rawlist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;priority&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;选择优先级（输入编号）：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span><span style="color:#9ECBFF;">&#39;高&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;中&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;低&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;紧急&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;expand&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;confirmation&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;确认执行此操作？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { key: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;是&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;yes&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { key: </span><span style="color:#9ECBFF;">&#39;n&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;否&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;no&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { key: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;全部&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><h3 id="prompt-sync-同步输入方案" tabindex="-1">Prompt-Sync - 同步输入方案 <a class="header-anchor" href="#prompt-sync-同步输入方案" aria-label="Permalink to &quot;Prompt-Sync - 同步输入方案&quot;">​</a></h3><p>对于需要同步编程模式的场景，<code>prompt-sync</code> 提供了简洁的同步 API：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// prompt-sync.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> promptSync </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;prompt-sync&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> prompt</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promptSync</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基本输入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入您的姓名: &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`您好，\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}！\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 隐藏输入（密码）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> password</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入密码: &#39;</span><span style="color:#E1E4E8;">, { echo: </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 必填验证</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> requiredInput</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> prompt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;必填项: &#39;</span><span style="color:#E1E4E8;">, { value: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">requiredInput) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;此项为必填！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="输入验证与转换" tabindex="-1">输入验证与转换 <a class="header-anchor" href="#输入验证与转换" aria-label="Permalink to &quot;输入验证与转换&quot;">​</a></h2><h3 id="数据验证策略" tabindex="-1">数据验证策略 <a class="header-anchor" href="#数据验证策略" aria-label="Permalink to &quot;数据验证策略&quot;">​</a></h3><p>有效的输入验证是构建健壮命令行工具的关键：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// validation.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> validators</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  email</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emailRegex</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> /</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">@</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> emailRegex.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(value) </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;请输入有效的邮箱地址&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  numberRange</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">min</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> num</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isNaN</span><span style="color:#E1E4E8;">(num)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;请输入数字&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> \`请输入\${</span><span style="color:#E1E4E8;">min</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">max</span><span style="color:#9ECBFF;">}之间的数字\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  filePath</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs/promises&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">access</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;文件路径不存在&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;userEmail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入邮箱：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    validate: validators.email</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;请输入年龄（18-99）：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    validate: validators.</span><span style="color:#B392F0;">numberRange</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">99</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><h3 id="输入数据转换" tabindex="-1">输入数据转换 <a class="header-anchor" href="#输入数据转换" aria-label="Permalink to &quot;输入数据转换&quot;">​</a></h3><p>在接收输入的同时对数据进行格式化处理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// transformation.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;tags&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;输入标签（逗号分隔）：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    filter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> input.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> tag.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> tag.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    transformer</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 实时显示转换效果</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> tags</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> input.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">t</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> t.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">t</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> t);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">tags</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;输入价格：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    filter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 转换为数字，处理小数位</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> num</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseFloat</span><span style="color:#E1E4E8;">(input);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> isNaN</span><span style="color:#E1E4E8;">(num) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> input </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(num </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre></div><h2 id="高级输入处理模式" tabindex="-1">高级输入处理模式 <a class="header-anchor" href="#高级输入处理模式" aria-label="Permalink to &quot;高级输入处理模式&quot;">​</a></h2><h3 id="条件性问题流" tabindex="-1">条件性问题流 <a class="header-anchor" href="#条件性问题流" aria-label="Permalink to &quot;条件性问题流&quot;">​</a></h3><p>根据用户之前的回答动态调整后续问题：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// conditional.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> baseQuestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;projectType&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;选择项目类型：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span><span style="color:#9ECBFF;">&#39;前端&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;后端&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;全栈&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态问题生成</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getFollowupQuestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">answers</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (answers.projectType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;前端&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    questions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;frontendFeatures&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;选择前端特性：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      choices: [</span><span style="color:#9ECBFF;">&#39;响应式设计&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;PWA&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;TypeScript&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;状态管理&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (answers.projectType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;后端&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    questions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;选择数据库：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      choices: [</span><span style="color:#9ECBFF;">&#39;MySQL&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;PostgreSQL&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;MongoDB&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Redis&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 全栈项目添加额外配置</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (answers.projectType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;全栈&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    questions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;useAPI&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;是否需要 REST API？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;useAuth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;是否需要用户认证？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">        when</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">currentAnswers</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> currentAnswers.useAPI</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> questions;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> baseAnswers</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(baseQuestions);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> followupQuestions</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> getFollowupQuestions</span><span style="color:#E1E4E8;">(baseAnswers);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> allAnswers</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(followupQuestions);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;完整配置:&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">baseAnswers, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">allAnswers });</span></span></code></pre></div><h3 id="可测试的输入架构" tabindex="-1">可测试的输入架构 <a class="header-anchor" href="#可测试的输入架构" aria-label="Permalink to &quot;可测试的输入架构&quot;">​</a></h3><p>借鉴 Clack 项目的设计理念，通过依赖注入实现可测试的输入处理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// testable-input.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Readable } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:stream&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TestableCLI</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputStream</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.stdin) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inputStream </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> inputStream;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> promptUser</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> readline</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:readline&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rl</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> readline.</span><span style="color:#B392F0;">createInterface</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      input: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputStream,</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: process.stdout</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rl.</span><span style="color:#B392F0;">question</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入命令：&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">answer</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rl.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(answer);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生产环境使用真实输入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> productionCLI</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TestableCLI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试环境使用模拟输入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mockInput</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Readable</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  read</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test command</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> testCLI</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TestableCLI</span><span style="color:#E1E4E8;">(mockInput);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;test&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> testCLI.</span><span style="color:#B392F0;">promptUser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试输入:&#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> productionCLI.</span><span style="color:#B392F0;">promptUser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户输入:&#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="项目初始化工具" tabindex="-1">项目初始化工具 <a class="header-anchor" href="#项目初始化工具" aria-label="Permalink to &quot;项目初始化工具&quot;">​</a></h3><p>结合多种输入类型构建完整的项目初始化流程：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// project-init.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __filename</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(__filename);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ProjectInitializer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> gatherRequirements</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;项目名称：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;my-project&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">        validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">          /</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[a-z0-9-]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(value) </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> true</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;名称只能包含小写字母、数字和横线&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;version&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;版本号：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;1.0.0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;description&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;项目描述：&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;template&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;选择模板：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;Node.js 后端应用&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;React 前端应用&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;Vue 前端应用&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;全栈应用&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;fullstack&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;features&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;选择功能特性：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;TypeScript&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;typescript&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;ESLint&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;eslint&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;Prettier&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;prettier&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;测试框架&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;testing&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;Docker 配置&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;docker&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;initGit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;初始化 Git 仓库？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(questions);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> confirmAndCreate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">=== 项目配置总结 ===&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">confirm</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;确认创建项目？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (confirm) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createProject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 项目创建成功！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 操作已取消&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createProject</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实际的项目创建逻辑</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> projectPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config.name);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(projectPath, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 创建 package.json</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      version: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config.version,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config.description,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;module&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">      join</span><span style="color:#E1E4E8;">(projectPath, </span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(packageJson, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> initializer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ProjectInitializer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> initializer.</span><span style="color:#B392F0;">gatherRequirements</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> initializer.</span><span style="color:#B392F0;">confirmAndCreate</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="配置管理工具" tabindex="-1">配置管理工具 <a class="header-anchor" href="#配置管理工具" aria-label="Permalink to &quot;配置管理工具&quot;">​</a></h3><p>实现交互式的配置管理和编辑功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config-manager.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> inquirer </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;inquirer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { homedir } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConfigManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.configPath </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;.myclirc&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.configPath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> interactiveSetup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentConfig</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> questions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;apiEndpoint&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;API 端点：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: currentConfig.apiEndpoint </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;https://api.example.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;apiKey&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;API 密钥：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: currentConfig.apiKey </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;logLevel&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;日志级别：&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        choices: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;错误&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;警告&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;信息&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;调试&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: currentConfig.logLevel </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;info&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;autoUpdate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;启用自动更新？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: currentConfig.autoUpdate </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newConfig</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> inquirer.</span><span style="color:#B392F0;">prompt</span><span style="color:#E1E4E8;">(questions);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">currentConfig, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">newConfig };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">saveConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> saveConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.configPath,</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用配置管理器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> configManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ConfigManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> configManager.</span><span style="color:#B392F0;">interactiveSetup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置已保存！&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>通过以上方法和工具，Node.js 开发者可以构建出从简单到复杂的各种命令行输入处理方案，创建出用户体验良好的交互式命令行应用程序。</p>`,55)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
