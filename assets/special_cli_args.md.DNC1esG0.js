import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"参数处理","description":"","frontmatter":{},"headers":[{"level":2,"title":"命令行参数基础","slug":"命令行参数基础","link":"#命令行参数基础","children":[]},{"level":2,"title":"原生参数处理","slug":"原生参数处理","link":"#原生参数处理","children":[{"level":3,"title":"process.argv 基础","slug":"process-argv-基础","link":"#process-argv-基础","children":[]},{"level":3,"title":"手动参数解析","slug":"手动参数解析","link":"#手动参数解析","children":[]}]},{"level":2,"title":"常用开源库","slug":"常用开源库","link":"#常用开源库","children":[{"level":3,"title":"Minimist - 轻量级解析","slug":"minimist-轻量级解析","link":"#minimist-轻量级解析","children":[]},{"level":3,"title":"Yargs - 功能全面的 CLI 框架","slug":"yargs-功能全面的-cli-框架","link":"#yargs-功能全面的-cli-框架","children":[]},{"level":3,"title":"Commander - 流行的 CLI 框架","slug":"commander-流行的-cli-框架","link":"#commander-流行的-cli-框架","children":[]}]},{"level":2,"title":"Node.js 原生方案","slug":"node-js-原生方案","link":"#node-js-原生方案","children":[{"level":3,"title":"util.parseArgs","slug":"util-parseargs","link":"#util-parseargs","children":[]},{"level":3,"title":"高级原生配置","slug":"高级原生配置","link":"#高级原生配置","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"配置管理工具","slug":"配置管理工具","link":"#配置管理工具","children":[]},{"level":3,"title":"开发服务器启动器","slug":"开发服务器启动器","link":"#开发服务器启动器","children":[]}]},{"level":2,"title":"选择适合的方案","slug":"选择适合的方案","link":"#选择适合的方案","children":[]}],"relativePath":"special/cli/args.md","filePath":"special/cli/args.md"}'),o={name:"special/cli/args.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/args.md for this page in Markdown format</div><h1 id="参数处理" tabindex="-1">参数处理 <a class="header-anchor" href="#参数处理" aria-label="Permalink to &quot;参数处理&quot;">​</a></h1><h2 id="命令行参数基础" tabindex="-1">命令行参数基础 <a class="header-anchor" href="#命令行参数基础" aria-label="Permalink to &quot;命令行参数基础&quot;">​</a></h2><p>在 Node.js 中，命令行参数是构建交互式命令行工具的基础。当用户在终端中输入命令时，参数通过特定语法传递给程序，用于配置工具的行为或提供必要数据。</p><p>基本的参数传递流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>node script.js arg1 --option value -f</span></span>
<span class="line"><span>      │        │    │     │      │</span></span>
<span class="line"><span>     脚本文件    │   长选项  值    短选项</span></span>
<span class="line"><span>             位置参数</span></span></code></pre></div><h2 id="原生参数处理" tabindex="-1">原生参数处理 <a class="header-anchor" href="#原生参数处理" aria-label="Permalink to &quot;原生参数处理&quot;">​</a></h2><h3 id="process-argv-基础" tabindex="-1">process.argv 基础 <a class="header-anchor" href="#process-argv-基础" aria-label="Permalink to &quot;process.argv 基础&quot;">​</a></h3><p>Node.js 通过全局对象 <code>process</code> 提供命令行参数访问能力。<code>process.argv</code> 是一个数组，包含命令行输入的所有参数。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// argv-demo.mjs</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;完整参数数组:&#39;</span><span style="color:#E1E4E8;">, process.argv);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户输入参数:&#39;</span><span style="color:#E1E4E8;">, process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行: node argv-demo.mjs serve --port 3000 --host localhost</span></span>
<span class="line"><span style="color:#6A737D;">// 输出:</span></span>
<span class="line"><span style="color:#6A737D;">// 完整参数数组: [&#39;/usr/local/bin/node&#39;, &#39;/path/to/argv-demo.mjs&#39;, &#39;serve&#39;, &#39;--port&#39;, &#39;3000&#39;, &#39;--host&#39;, &#39;localhost&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">// 用户输入参数: [&#39;serve&#39;, &#39;--port&#39;, &#39;3000&#39;, &#39;--host&#39;, &#39;localhost&#39;]</span></span></code></pre></div><h3 id="手动参数解析" tabindex="-1">手动参数解析 <a class="header-anchor" href="#手动参数解析" aria-label="Permalink to &quot;手动参数解析&quot;">​</a></h3><p>虽然可以直接处理 <code>process.argv</code>，但对于复杂场景需要手动解析：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// manual-parse.mjs</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> parseArguments</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    _: [],    </span><span style="color:#6A737D;">// 位置参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    flags: {}, </span><span style="color:#6A737D;">// 选项参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    raw: args  </span><span style="color:#6A737D;">// 原始参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> args.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> arg</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> args[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (arg.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 长选项 --option value 或 --flag</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> arg.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> nextArg</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> args[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (nextArg </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">nextArg.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.flags[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nextArg;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 跳过下一个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.flags[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (arg.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 短选项 -f value 或 -abc</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> arg.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> nextArg</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> args[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (nextArg </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">nextArg.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.flags[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nextArg;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result.flags[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 位置参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      result._.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(arg);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> args</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseArguments</span><span style="color:#E1E4E8;">(process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解析结果:&#39;</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行: node manual-parse.mjs build --target production --minify src</span></span>
<span class="line"><span style="color:#6A737D;">// 输出: { _: [&#39;build&#39;, &#39;src&#39;], flags: { target: &#39;production&#39;, minify: true } }</span></span></code></pre></div><p>手动解析的局限性很明显：需要处理类型转换、布尔标志、组合短选项等多种复杂情况，代码会迅速变得复杂且容易出错。</p><h2 id="常用开源库" tabindex="-1">常用开源库 <a class="header-anchor" href="#常用开源库" aria-label="Permalink to &quot;常用开源库&quot;">​</a></h2><h3 id="minimist-轻量级解析" tabindex="-1">Minimist - 轻量级解析 <a class="header-anchor" href="#minimist-轻量级解析" aria-label="Permalink to &quot;Minimist - 轻量级解析&quot;">​</a></h3><p>Minimist 是一个小巧高效的参数解析库，将参数转换为结构化对象。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// minimist-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> minimist </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;minimist&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> args</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> minimist</span><span style="color:#E1E4E8;">(process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Minimist 解析结果:&#39;</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行示例及输出:</span></span>
<span class="line"><span style="color:#6A737D;">// node minimist-demo.mjs -x 3 -y hello --name=Alice --no-verbose --port 8080 file1 file2</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//   _: [ &#39;file1&#39;, &#39;file2&#39; ],</span></span>
<span class="line"><span style="color:#6A737D;">//   x: 3,</span></span>
<span class="line"><span style="color:#6A737D;">//   y: &#39;hello&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   name: &#39;Alice&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   verbose: false,</span></span>
<span class="line"><span style="color:#6A737D;">//   port: 8080</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre></div><p>Minimist 支持的高级配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// minimist-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> minimist </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;minimist&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  string: [</span><span style="color:#9ECBFF;">&#39;api-key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;config&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 字符串类型选项</span></span>
<span class="line"><span style="color:#E1E4E8;">  boolean: [</span><span style="color:#9ECBFF;">&#39;verbose&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;help&#39;</span><span style="color:#E1E4E8;">],  </span><span style="color:#6A737D;">// 布尔类型选项</span></span>
<span class="line"><span style="color:#E1E4E8;">  alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    v: </span><span style="color:#9ECBFF;">&#39;verbose&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    h: </span><span style="color:#9ECBFF;">&#39;help&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    c: </span><span style="color:#9ECBFF;">&#39;config&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  default: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    verbose: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    config: </span><span style="color:#9ECBFF;">&#39;./config.json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> args</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> minimist</span><span style="color:#E1E4E8;">(process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">), options);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;高级配置解析:&#39;</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行: node minimist-advanced.mjs --api-key secret123 -v --config ./app.json</span></span>
<span class="line"><span style="color:#6A737D;">// 输出: { _: [], &#39;api-key&#39;: &#39;secret123&#39;, verbose: true, config: &#39;./app.json&#39;, v: true, h: false }</span></span></code></pre></div><h3 id="yargs-功能全面的-cli-框架" tabindex="-1">Yargs - 功能全面的 CLI 框架 <a class="header-anchor" href="#yargs-功能全面的-cli-框架" aria-label="Permalink to &quot;Yargs - 功能全面的 CLI 框架&quot;">​</a></h3><p>Yargs 提供了丰富的功能来构建专业的命令行工具，其新版本已转向 ESM 优先架构。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// yargs-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> yargs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;yargs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hideBin } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;yargs/helpers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> argv</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> yargs</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">hideBin</span><span style="color:#E1E4E8;">(process.argv))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;port&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: </span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;服务器端口号&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;verbose&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: </span><span style="color:#9ECBFF;">&#39;v&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;详细输出模式&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;config&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;配置文件路径&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">demandOption</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;port&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&#39;必须指定端口号&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">check</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">argv</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (argv.port </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> argv.port </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 65535</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;端口号必须在 1-65535 范围内&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">alias</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;help&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;h&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .argv;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Yargs 解析结果:&#39;</span><span style="color:#E1E4E8;">, argv);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动生成的帮助信息:</span></span>
<span class="line"><span style="color:#6A737D;">// 执行: node yargs-demo.mjs --help</span></span>
<span class="line"><span style="color:#6A737D;">// 输出使用方法信息</span></span></code></pre></div><p>Yargs 的命令功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// yargs-commands.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> yargs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;yargs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hideBin } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;yargs/helpers&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> argv</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> yargs</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">hideBin</span><span style="color:#E1E4E8;">(process.argv))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;serve [port]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;启动开发服务器&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">yargs</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> yargs</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">positional</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;port&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          describe: </span><span style="color:#9ECBFF;">&#39;服务监听端口&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          default: </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;host&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          alias: </span><span style="color:#9ECBFF;">&#39;H&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          description: </span><span style="color:#9ECBFF;">&#39;服务器主机&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          default: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">argv</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`启动服务器: \${</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">host</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 实际服务器启动逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;build &lt;target&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;构建项目&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">yargs</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> yargs</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">positional</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;target&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          describe: </span><span style="color:#9ECBFF;">&#39;构建目标&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          choices: [</span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minify&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          description: </span><span style="color:#9ECBFF;">&#39;是否压缩输出&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          default: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">argv</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`构建目标: \${</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">target</span><span style="color:#9ECBFF;">}, 压缩: \${</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">minify</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 实际构建逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">demandCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;需要指定一个命令&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">help</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .argv;</span></span></code></pre></div><h3 id="commander-流行的-cli-框架" tabindex="-1">Commander - 流行的 CLI 框架 <a class="header-anchor" href="#commander-流行的-cli-框架" aria-label="Permalink to &quot;Commander - 流行的 CLI 框架&quot;">​</a></h3><p>Commander 是另一个广泛使用的 CLI 框架，以其清晰的 API 结构著称。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// commander-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Command } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;commander&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> program</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Command</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-cli&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;一个现代化的 CLI 工具&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1.0.0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-d, --debug&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;启用调试模式&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-c, --config &lt;file&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;配置文件路径&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;config.json&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-p, --port &lt;number&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;端口号&#39;</span><span style="color:#E1E4E8;">, parseInt, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start &lt;service&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动指定服务&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--daemon&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;以守护进程运行&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">service</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`启动服务: \${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选项:&#39;</span><span style="color:#E1E4E8;">, options);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (options.daemon) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;以守护进程模式运行&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(process.argv);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行示例:</span></span>
<span class="line"><span style="color:#6A737D;">// node commander-demo.mjs start api --daemon --port 8080</span></span>
<span class="line"><span style="color:#6A737D;">// 输出: 启动服务: api, 选项: { daemon: true, port: 8080 }</span></span></code></pre></div><h2 id="node-js-原生方案" tabindex="-1">Node.js 原生方案 <a class="header-anchor" href="#node-js-原生方案" aria-label="Permalink to &quot;Node.js 原生方案&quot;">​</a></h2><h3 id="util-parseargs" tabindex="-1">util.parseArgs <a class="header-anchor" href="#util-parseargs" aria-label="Permalink to &quot;util.parseArgs&quot;">​</a></h3><p>Node.js 20+ 提供了稳定的 <code>util.parseArgs</code> API，作为内置的参数解析解决方案。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// util-parseargs.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseArgs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;3000&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  verbose: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;v&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  config: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;c&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">positionals</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseArgs</span><span style="color:#E1E4E8;">({ options, args: process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解析的值:&#39;</span><span style="color:#E1E4E8;">, values);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;位置参数:&#39;</span><span style="color:#E1E4E8;">, positionals);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 类型转换示例</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> port</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(values.port </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;3000&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;端口号:&#39;</span><span style="color:#E1E4E8;">, port);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;参数解析错误:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行: node util-parseargs.mjs -p 8080 -v --config=app.json file1 file2</span></span>
<span class="line"><span style="color:#6A737D;">// 输出: </span></span>
<span class="line"><span style="color:#6A737D;">// 解析的值: { port: &#39;8080&#39;, verbose: true, config: &#39;app.json&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">// 位置参数: [&#39;file1&#39;, &#39;file2&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">// 端口号: 8080</span></span></code></pre></div><h3 id="高级原生配置" tabindex="-1">高级原生配置 <a class="header-anchor" href="#高级原生配置" aria-label="Permalink to &quot;高级原生配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// util-parseargs-advanced.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseArgs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 字符串类型选项</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;api-key&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;environment&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;e&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 布尔类型选项  </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;verbose&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;v&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;silent&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;help&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;h&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 多个值选项</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;include&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, multiple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;exclude&#39;</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, multiple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">positionals</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">tokens</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseArgs</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  options,</span></span>
<span class="line"><span style="color:#E1E4E8;">  args: process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  tokens: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 获取解析的token信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  strict: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">  // 严格模式，未知选项会报错</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解析结果:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;- 选项值:&#39;</span><span style="color:#E1E4E8;">, values);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;- 位置参数:&#39;</span><span style="color:#E1E4E8;">, positionals);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;- 解析token:&#39;</span><span style="color:#E1E4E8;">, tokens);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 帮助信息生成</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (values.help) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">用法: node util-parseargs-advanced.mjs [选项] [文件...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">选项:</span></span>
<span class="line"><span style="color:#9ECBFF;">  -e, --environment &lt;值&gt;  运行环境 (默认: &quot;development&quot;)</span></span>
<span class="line"><span style="color:#9ECBFF;">  -v, --verbose           详细输出</span></span>
<span class="line"><span style="color:#9ECBFF;">  --api-key &lt;值&gt;          API密钥</span></span>
<span class="line"><span style="color:#9ECBFF;">  --silent                静默模式</span></span>
<span class="line"><span style="color:#9ECBFF;">  -x, --exclude &lt;值&gt;      排除文件 (可多次使用)</span></span>
<span class="line"><span style="color:#9ECBFF;">  --include &lt;值&gt;          包含文件 (可多次使用)</span></span>
<span class="line"><span style="color:#9ECBFF;">  -h, --help              显示此帮助信息</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="配置管理工具" tabindex="-1">配置管理工具 <a class="header-anchor" href="#配置管理工具" aria-label="Permalink to &quot;配置管理工具&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config-manager.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseArgs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConfigManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;./config.json&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    set: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    get: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    delete: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    list: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;l&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> handleCommand</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseArgs</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">      options: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options, </span></span>
<span class="line"><span style="color:#E1E4E8;">      args: process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (values.set) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setConfig</span><span style="color:#E1E4E8;">(values.set, values.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (values.get) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getConfig</span><span style="color:#E1E4E8;">(values.get, values.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (values.delete) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deleteConfig</span><span style="color:#E1E4E8;">(values.delete, values.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (values.list) {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">listConfig</span><span style="color:#E1E4E8;">(values.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showHelp</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> setConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">configPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadConfig</span><span style="color:#E1E4E8;">(configPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    config[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> process.argv[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 简单示例</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(configPath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(config, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设置 \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">} = \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">argv</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">4</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> loadConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">configPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(configPath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> showHelp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">配置管理工具用法:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">设置配置: node config-manager.mjs --set &lt;key&gt; &lt;value&gt; [--config &lt;path&gt;]</span></span>
<span class="line"><span style="color:#9ECBFF;">获取配置: node config-manager.mjs --get &lt;key&gt; [--config &lt;path&gt;]</span></span>
<span class="line"><span style="color:#9ECBFF;">删除配置: node config-manager.mjs --delete &lt;key&gt; [--config &lt;path&gt;]</span></span>
<span class="line"><span style="color:#9ECBFF;">列出配置: node config-manager.mjs --list [--config &lt;path&gt;]</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ConfigManager.</span><span style="color:#B392F0;">handleCommand</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="开发服务器启动器" tabindex="-1">开发服务器启动器 <a class="header-anchor" href="#开发服务器启动器" aria-label="Permalink to &quot;开发服务器启动器&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// dev-server.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseArgs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;3000&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: { type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;H&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  open: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, short: </span><span style="color:#9ECBFF;">&#39;o&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  https: { type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;log-level&#39;</span><span style="color:#E1E4E8;">: { </span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    choices: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> startServer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动开发服务器:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;地址:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">https</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;https&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;http&#39;}://\${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">host</span><span style="color:#9ECBFF;">}:\${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;日志级别:&#39;</span><span style="color:#E1E4E8;">, config.logLevel);</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (config.open) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;自动在浏览器中打开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 实际服务器启动逻辑</span></span>
<span class="line"><span style="color:#6A737D;">  // const server = createServer({ ...config });</span></span>
<span class="line"><span style="color:#6A737D;">  // server.listen(config.port, config.host);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseArgs</span><span style="color:#E1E4E8;">({ options, args: process.argv.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(values.port),</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: values.host,</span></span>
<span class="line"><span style="color:#E1E4E8;">    open: values.open </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    https: values.https </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    logLevel: values[</span><span style="color:#9ECBFF;">&#39;log-level&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  startServer</span><span style="color:#E1E4E8;">(config);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置错误:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="选择适合的方案" tabindex="-1">选择适合的方案 <a class="header-anchor" href="#选择适合的方案" aria-label="Permalink to &quot;选择适合的方案&quot;">​</a></h2><p>不同场景下的参数解析方案选择：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>项目复杂度         推荐方案               特点</span></span>
<span class="line"><span>───────          ───────────          ────────────────</span></span>
<span class="line"><span>简单脚本        process.argv 手动解析   无依赖，完全控制</span></span>
<span class="line"><span>           或 util.parseArgs          Node.js 内置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>轻量工具        minimist              轻量级，基础解析</span></span>
<span class="line"><span>                                   将参数转为对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>复杂CLI        yargs 或 commander    功能全面，支持命令、</span></span>
<span class="line"><span>                                   验证、帮助生成等</span></span></code></pre></div><p>选择考量因素：</p><ul><li><strong>依赖偏好</strong>：希望减少依赖时优先考虑原生方案</li><li><strong>功能需求</strong>：需要命令、子命令、验证等高级功能时选择 yargs 或 commander</li><li><strong>性能要求</strong>：对启动性能敏感的场景选择轻量级方案</li><li><strong>维护性</strong>：长期维护的项目建议使用生态良好的成熟库</li></ul>`,44)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
