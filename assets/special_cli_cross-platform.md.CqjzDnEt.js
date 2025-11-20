import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"跨平台兼容","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 命令行跨平台挑战","slug":"node-js-命令行跨平台挑战","link":"#node-js-命令行跨平台挑战","children":[]},{"level":2,"title":"基础跨平台适配","slug":"基础跨平台适配","link":"#基础跨平台适配","children":[{"level":3,"title":"Shebang 行处理","slug":"shebang-行处理","link":"#shebang-行处理","children":[]},{"level":3,"title":"行结束符统一","slug":"行结束符统一","link":"#行结束符统一","children":[]}]},{"level":2,"title":"路径处理兼容性","slug":"路径处理兼容性","link":"#路径处理兼容性","children":[{"level":3,"title":"路径分隔符统一","slug":"路径分隔符统一","link":"#路径分隔符统一","children":[]},{"level":3,"title":"可执行文件路径处理","slug":"可执行文件路径处理","link":"#可执行文件路径处理","children":[]}]},{"level":2,"title":"跨平台 Shell 命令执行","slug":"跨平台-shell-命令执行","link":"#跨平台-shell-命令执行","children":[{"level":3,"title":"原生 Child Process 适配","slug":"原生-child-process-适配","link":"#原生-child-process-适配","children":[]}]},{"level":2,"title":"常用跨平台兼容库","slug":"常用跨平台兼容库","link":"#常用跨平台兼容库","children":[{"level":3,"title":"ShellJS - Unix 命令的跨平台实现","slug":"shelljs-unix-命令的跨平台实现","link":"#shelljs-unix-命令的跨平台实现","children":[]},{"level":3,"title":"Shx - 轻量级 Shell 命令","slug":"shx-轻量级-shell-命令","link":"#shx-轻量级-shell-命令","children":[]},{"level":3,"title":"Commander.js - 跨平台 CLI 框架","slug":"commander-js-跨平台-cli-框架","link":"#commander-js-跨平台-cli-框架","children":[]}]},{"level":2,"title":"环境变量与配置管理","slug":"环境变量与配置管理","link":"#环境变量与配置管理","children":[{"level":3,"title":"跨平台环境变量处理","slug":"跨平台环境变量处理","link":"#跨平台环境变量处理","children":[]}]},{"level":2,"title":"高级跨平台模式","slug":"高级跨平台模式","link":"#高级跨平台模式","children":[{"level":3,"title":"条件编译与平台检测","slug":"条件编译与平台检测","link":"#条件编译与平台检测","children":[]},{"level":3,"title":"文件系统监视器跨平台适配","slug":"文件系统监视器跨平台适配","link":"#文件系统监视器跨平台适配","children":[]}]},{"level":2,"title":"测试与验证策略","slug":"测试与验证策略","link":"#测试与验证策略","children":[{"level":3,"title":"跨平台测试套件","slug":"跨平台测试套件","link":"#跨平台测试套件","children":[]}]}],"relativePath":"special/cli/cross-platform.md","filePath":"special/cli/cross-platform.md"}'),o={name:"special/cli/cross-platform.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/cross-platform.md for this page in Markdown format</div><h1 id="跨平台兼容" tabindex="-1">跨平台兼容 <a class="header-anchor" href="#跨平台兼容" aria-label="Permalink to &quot;跨平台兼容&quot;">​</a></h1><h2 id="node-js-命令行跨平台挑战" tabindex="-1">Node.js 命令行跨平台挑战 <a class="header-anchor" href="#node-js-命令行跨平台挑战" aria-label="Permalink to &quot;Node.js 命令行跨平台挑战&quot;">​</a></h2><p>在 Node.js 命令行工具开发中，跨平台兼容性是确保工具能够在 Windows、Linux 和 macOS 系统上一致运行的关键挑战。不同操作系统在文件路径、命令语法、环境变量等方面存在显著差异，直接影响命令行工具的行为和用户体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>操作系统差异示意图：</span></span>
<span class="line"><span>Windows          Linux/macOS</span></span>
<span class="line"><span>──────────       ────────────</span></span>
<span class="line"><span>\\ 路径分隔符     / 路径分隔符</span></span>
<span class="line"><span>cmd.exe  shell   bash/zsh shell</span></span>
<span class="line"><span>dir 命令        ls 命令</span></span>
<span class="line"><span>node.exe        node 二进制文件</span></span></code></pre></div><h2 id="基础跨平台适配" tabindex="-1">基础跨平台适配 <a class="header-anchor" href="#基础跨平台适配" aria-label="Permalink to &quot;基础跨平台适配&quot;">​</a></h2><h3 id="shebang-行处理" tabindex="-1">Shebang 行处理 <a class="header-anchor" href="#shebang-行处理" aria-label="Permalink to &quot;Shebang 行处理&quot;">​</a></h3><p>Shebang (#!) 是 Unix 系统识别脚本解释器的机制，但在 Windows 上需要特殊处理。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 跨平台 Shebang 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">!/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">bin</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">env node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Windows 不支持 Shebang，但 Node.js 会忽略这行注释</span></span>
<span class="line"><span style="color:#6A737D;">// 确保脚本在两类系统都能直接运行</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRequire } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> process </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跨平台 Node.js 脚本&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="行结束符统一" tabindex="-1">行结束符统一 <a class="header-anchor" href="#行结束符统一" aria-label="Permalink to &quot;行结束符统一&quot;">​</a></h3><p>Windows 使用 <code>\\r\\n</code>，Unix 使用 <code>\\n</code>，这会影响脚本的执行。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// line-endings.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EOL } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> normalizeLineEndings</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 统一为当前系统的行结束符</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> content.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">\\r\\n</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">\\n</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">\\r</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">EOL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读取文件并统一行结束符</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script.mjs&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> normalized</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> normalizeLineEndings</span><span style="color:#E1E4E8;">(content);</span></span>
<span class="line"><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script-normalized.mjs&#39;</span><span style="color:#E1E4E8;">, normalized);</span></span></code></pre></div><h2 id="路径处理兼容性" tabindex="-1">路径处理兼容性 <a class="header-anchor" href="#路径处理兼容性" aria-label="Permalink to &quot;路径处理兼容性&quot;">​</a></h2><h3 id="路径分隔符统一" tabindex="-1">路径分隔符统一 <a class="header-anchor" href="#路径分隔符统一" aria-label="Permalink to &quot;路径分隔符统一&quot;">​</a></h3><p>不同操作系统使用不同的路径分隔符，需要统一处理。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// path-handling.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join, normalize, sep, delimiter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CrossPlatformPaths</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> normalizePath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 将路径统一为当前系统的格式</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> normalize</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, sep));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> ensurePosixPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 确保使用 POSIX 路径格式（适用于 URL 和跨平台配置）</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getHomeDir</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台获取用户主目录</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> process.env[platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;USERPROFILE&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;HOME&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> createAbsolutePath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">relativePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建跨平台的绝对路径</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> baseDir</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(baseDir, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">normalizePath</span><span style="color:#E1E4E8;">(relativePath));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> configPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> CrossPlatformPaths.</span><span style="color:#B392F0;">createAbsolutePath</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../config/app.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置路径:&#39;</span><span style="color:#E1E4E8;">, CrossPlatformPaths.</span><span style="color:#B392F0;">ensurePosixPath</span><span style="color:#E1E4E8;">(configPath));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;主目录:&#39;</span><span style="color:#E1E4E8;">, CrossPlatformPaths.</span><span style="color:#B392F0;">getHomeDir</span><span style="color:#E1E4E8;">());</span></span></code></pre></div><h3 id="可执行文件路径处理" tabindex="-1">可执行文件路径处理 <a class="header-anchor" href="#可执行文件路径处理" aria-label="Permalink to &quot;可执行文件路径处理&quot;">​</a></h3><p>在 Windows 和 Unix 系统上，可执行文件的扩展名和查找方式不同。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// executable-paths.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform, arch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BinaryResolver</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getPlatformBinary</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">binaryName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> binaries</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      win32: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">binaryName</span><span style="color:#9ECBFF;">}.exe\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      linux: binaryName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      darwin: binaryName</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> binaries[platform] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> binaryName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> resolveCommandPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 解析命令的完整路径</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // Windows 使用 where 命令</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`where \${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // Unix 使用 which 命令</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`which \${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查必要命令是否存在</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> checkDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> requiredCommands</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;git&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;npm&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cmd</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> requiredCommands) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    results[cmd] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> BinaryResolver.</span><span style="color:#B392F0;">resolveCommandPath</span><span style="color:#E1E4E8;">(cmd);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="跨平台-shell-命令执行" tabindex="-1">跨平台 Shell 命令执行 <a class="header-anchor" href="#跨平台-shell-命令执行" aria-label="Permalink to &quot;跨平台 Shell 命令执行&quot;">​</a></h2><h3 id="原生-child-process-适配" tabindex="-1">原生 Child Process 适配 <a class="header-anchor" href="#原生-child-process-适配" aria-label="Permalink to &quot;原生 Child Process 适配&quot;">​</a></h3><p>使用 Node.js 原生的 child_process 模块执行跨平台命令。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cross-platform-exec.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { exec, spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { promisify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> execAsync</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(exec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CrossPlatformExecutor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据平台调整命令</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> platformCommand</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptCommandForPlatform</span><span style="color:#E1E4E8;">(command);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">stdout</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">stderr</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> execAsync</span><span style="color:#E1E4E8;">(platformCommand, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cwd: options.cwd </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        env: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">process.env, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options.env },</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { stdout: stdout.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(), stderr: stderr.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(), success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">        stdout: error.stdout?.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(), </span></span>
<span class="line"><span style="color:#E1E4E8;">        stderr: error.stderr?.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(), </span></span>
<span class="line"><span style="color:#E1E4E8;">        success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        error: error.message</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> adaptCommandForPlatform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 命令适配</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> command</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">rm -rf</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;rd /s /q&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">mkdir -p</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;mkdir&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">cp -R</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;xcopy /s /e /i&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">ls</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dir&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\$</span><span style="color:#DBEDFF;">HOME</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;%USERPROFILE%&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\$</span><span style="color:#DBEDFF;">PATH</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;%PATH%&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> command;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> spawnCrossPlatform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台的 spawn</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> adaptedCommand </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> command;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> adaptedArgs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 需要使用 cmd.exe 执行一些命令</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> ([</span><span style="color:#9ECBFF;">&#39;rm&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;cp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;mkdir&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;ls&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(command)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adaptedCommand </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;cmd.exe&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        adaptedArgs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;/c&#39;</span><span style="color:#E1E4E8;">, command, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(adaptedCommand, adaptedArgs, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (code </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, code });</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Process exited with code \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, reject);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> demonstrateCommands</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 文件列表（跨平台）</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> listResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> CrossPlatformExecutor.</span><span style="color:#B392F0;">executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ls -la&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件列表:&#39;</span><span style="color:#E1E4E8;">, listResult);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 创建目录（跨平台）</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mkdirResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> CrossPlatformExecutor.</span><span style="color:#B392F0;">executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mkdir -p temp/test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;创建目录:&#39;</span><span style="color:#E1E4E8;">, mkdirResult);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="常用跨平台兼容库" tabindex="-1">常用跨平台兼容库 <a class="header-anchor" href="#常用跨平台兼容库" aria-label="Permalink to &quot;常用跨平台兼容库&quot;">​</a></h2><h3 id="shelljs-unix-命令的跨平台实现" tabindex="-1">ShellJS - Unix 命令的跨平台实现 <a class="header-anchor" href="#shelljs-unix-命令的跨平台实现" aria-label="Permalink to &quot;ShellJS - Unix 命令的跨平台实现&quot;">​</a></h3><p>ShellJS 提供了跨平台的 Unix shell 命令，是解决命令兼容性问题的首选方案。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// shelljs-demo.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> shell </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;shelljs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ShellJSWrapper</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置 ShellJS 行为</span></span>
<span class="line"><span style="color:#E1E4E8;">    shell.config.silent </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 禁止命令输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    shell.config.fatal </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 错误不退出进程</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 文件操作</span></span>
<span class="line"><span style="color:#B392F0;">  copyFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">destination</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-R&#39;</span><span style="color:#E1E4E8;">, source, destination);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  removePath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-rf&#39;</span><span style="color:#E1E4E8;">, path);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  createDirectory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-p&#39;</span><span style="color:#E1E4E8;">, path);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 目录操作</span></span>
<span class="line"><span style="color:#B392F0;">  changeDirectory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">cd</span><span style="color:#E1E4E8;">(path);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (result.code </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无法切换目录: \${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">pwd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 文件查找和操作</span></span>
<span class="line"><span style="color:#B392F0;">  findAndReplace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">directory</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">search</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">replacement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    shell.</span><span style="color:#B392F0;">cd</span><span style="color:#E1E4E8;">(directory);</span></span>
<span class="line"><span style="color:#E1E4E8;">    shell.</span><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;*.js&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      shell.</span><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-i&#39;</span><span style="color:#E1E4E8;">, search, replacement, file);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 命令执行</span></span>
<span class="line"><span style="color:#B392F0;">  executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(command, { </span></span>
<span class="line"><span style="color:#E1E4E8;">      silent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      async: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查命令是否存在</span></span>
<span class="line"><span style="color:#B392F0;">  checkDependency</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shell.</span><span style="color:#B392F0;">which</span><span style="color:#E1E4E8;">(command);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> shellWrapper</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ShellJSWrapper</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跨平台文件操作</span></span>
<span class="line"><span style="color:#E1E4E8;">shellWrapper.</span><span style="color:#B392F0;">createDirectory</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/assets&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">shellWrapper.</span><span style="color:#B392F0;">copyFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/*.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dist/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">shellWrapper.</span><span style="color:#B392F0;">findAndReplace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;OLD_TEXT&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;NEW_TEXT&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查必要依赖</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">shellWrapper.</span><span style="color:#B392F0;">checkDependency</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;git&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误: 需要安装 Git&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行系统命令</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> shellWrapper.</span><span style="color:#B392F0;">executeCommand</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node --version&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result.code </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Node.js 版本:&#39;</span><span style="color:#E1E4E8;">, result.stdout);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="shx-轻量级-shell-命令" tabindex="-1">Shx - 轻量级 Shell 命令 <a class="header-anchor" href="#shx-轻量级-shell-命令" aria-label="Permalink to &quot;Shx - 轻量级 Shell 命令&quot;">​</a></h3><p>Shx 是专门为 package.json 脚本设计的轻量级跨平台 Shell 命令工具。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// shx-integration.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ShxCommander</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> executeSHX</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fullCommand</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;shx&#39;</span><span style="color:#E1E4E8;">, command, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args].</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(fullCommand, { </span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, output: output.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">() };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">        success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stderr: error.stderr?.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 常用文件操作封装</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> cleanDirectory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeSHX</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rm&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;-rf&#39;</span><span style="color:#E1E4E8;">, path]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> copyFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dest</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeSHX</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cp&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;-R&#39;</span><span style="color:#E1E4E8;">, source, dest]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> makeDirectory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeSHX</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mkdir&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;-p&#39;</span><span style="color:#E1E4E8;">, path]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> listFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;*&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeSHX</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ls&#39;</span><span style="color:#E1E4E8;">, [pattern]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 package.json 脚本中使用</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;clean&quot;: &quot;shx rm -rf dist&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;build&quot;: &quot;shx mkdir -p dist &amp;&amp; shx cp -R src/* dist/&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">//   &quot;test&quot;: &quot;shx echo \\&quot;Running tests...\\&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre></div><h3 id="commander-js-跨平台-cli-框架" tabindex="-1">Commander.js - 跨平台 CLI 框架 <a class="header-anchor" href="#commander-js-跨平台-cli-框架" aria-label="Permalink to &quot;Commander.js - 跨平台 CLI 框架&quot;">​</a></h3><p>Commander.js 提供统一的命令行界面开发体验，自动处理平台差异。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// commander-cross-platform.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Command } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;commander&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform, arch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> program</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Command</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cross-platform-cli&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跨平台命令行工具示例&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1.0.0&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--config &lt;path&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;配置文件路径&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;~/.app/config.json&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--force&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;强制模式&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 平台特定的命令</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  program</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clean&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;清理 Windows 系统缓存&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行 Windows 清理操作...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 特定的清理逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  program</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clean&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;清理 Unix 系统缓存&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行 Unix 清理操作...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // Unix 特定的清理逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跨平台文件处理命令</span></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;deploy &lt;source&gt; &lt;destination&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跨平台部署文件&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-b, --backup&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;创建备份&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">destination</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 标准化路径</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> normalizedSource</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(source);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> normalizedDest</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(destination);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`从 \${</span><span style="color:#E1E4E8;">normalizedSource</span><span style="color:#9ECBFF;">} 部署到 \${</span><span style="color:#E1E4E8;">normalizedDest</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (options.backup) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> createBackup</span><span style="color:#E1E4E8;">(normalizedDest);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> deployFiles</span><span style="color:#E1E4E8;">(normalizedSource, normalizedDest);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境检测命令</span></span>
<span class="line"><span style="color:#E1E4E8;">program</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">command</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;显示系统信息&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;系统信息:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`平台: \${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`架构: \${</span><span style="color:#E1E4E8;">arch</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Node.js 版本: \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`当前目录: \${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">cwd</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">program.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(process.argv);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> createBackup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> backupDir</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`backup-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`xcopy &quot;\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}&quot; &quot;\${</span><span style="color:#E1E4E8;">backupDir</span><span style="color:#9ECBFF;">}&quot; /E /I /H\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`cp -R &quot;\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}&quot; &quot;\${</span><span style="color:#E1E4E8;">backupDir</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`备份创建到: \${</span><span style="color:#E1E4E8;">backupDir</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> deployFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">destination</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> shell</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;shelljs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 使用 ShellJS 确保跨平台兼容性</span></span>
<span class="line"><span style="color:#E1E4E8;">  shell.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-p&#39;</span><span style="color:#E1E4E8;">, destination);</span></span>
<span class="line"><span style="color:#E1E4E8;">  shell.</span><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-R&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">source</span><span style="color:#9ECBFF;">}/*\`</span><span style="color:#E1E4E8;">, destination);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件部署完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="环境变量与配置管理" tabindex="-1">环境变量与配置管理 <a class="header-anchor" href="#环境变量与配置管理" aria-label="Permalink to &quot;环境变量与配置管理&quot;">​</a></h2><h3 id="跨平台环境变量处理" tabindex="-1">跨平台环境变量处理 <a class="header-anchor" href="#跨平台环境变量处理" aria-label="Permalink to &quot;跨平台环境变量处理&quot;">​</a></h3><p>不同操作系统的环境变量语法和访问方式不同。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// env-cross-platform.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform, env } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { homedir } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:os&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CrossPlatformEnv</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getEnvVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台环境变量获取</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> env[name];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 环境变量值可能需要特殊处理</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">%(</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">%]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)%</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">match</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">group</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env[group] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> match;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> setEnvVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台环境变量设置</span></span>
<span class="line"><span style="color:#E1E4E8;">    env[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 可能需要额外的设置</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`setx \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} &quot;\${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;ignore&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 忽略 setx 错误，至少进程内变量已设置</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getAppDataPath</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台获取应用数据目录</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (platform) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#79B8FF;">APPDATA</span><span style="color:#F97583;"> ||</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;AppData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Roaming&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;Library&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Application Support&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#79B8FF;">XDG_DATA_HOME</span><span style="color:#F97583;"> ||</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;.local&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;share&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getConfigPath</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">appName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 跨平台获取配置目录</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (platform) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(env.</span><span style="color:#79B8FF;">APPDATA</span><span style="color:#E1E4E8;">, appName);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;Library&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Preferences&#39;</span><span style="color:#E1E4E8;">, appName);</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> env.</span><span style="color:#79B8FF;">XDG_CONFIG_HOME</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">          join</span><span style="color:#E1E4E8;">(env.</span><span style="color:#79B8FF;">XDG_CONFIG_HOME</span><span style="color:#E1E4E8;">, appName) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">          join</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">homedir</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;.config&#39;</span><span style="color:#E1E4E8;">, appName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> appData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> CrossPlatformEnv.</span><span style="color:#B392F0;">getAppDataPath</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> configPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> CrossPlatformEnv.</span><span style="color:#B392F0;">getConfigPath</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-app&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应用数据目录:&#39;</span><span style="color:#E1E4E8;">, appData);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置目录:&#39;</span><span style="color:#E1E4E8;">, configPath);</span></span></code></pre></div><h2 id="高级跨平台模式" tabindex="-1">高级跨平台模式 <a class="header-anchor" href="#高级跨平台模式" aria-label="Permalink to &quot;高级跨平台模式&quot;">​</a></h2><h3 id="条件编译与平台检测" tabindex="-1">条件编译与平台检测 <a class="header-anchor" href="#条件编译与平台检测" aria-label="Permalink to &quot;条件编译与平台检测&quot;">​</a></h3><p>根据目标平台动态加载不同的实现。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// platform-specific.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform, arch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PlatformAdapter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getPlatformImplementation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleMap</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> platformKey</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">arch</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 查找最匹配的实现</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (moduleMap[platformKey]) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> moduleMap[platformKey];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (moduleMap[platform]) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> moduleMap[platform];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> moduleMap.default;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> loadPlatformModule</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">basePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> extensions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;win32&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;win32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;darwin&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;darwin&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;linux&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;linux&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> extension</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> extensions[platform] </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;posix&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modulePath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">basePath</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">extension</span><span style="color:#9ECBFF;">}.mjs\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(modulePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 回退到默认实现</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">basePath</span><span style="color:#9ECBFF;">}.posix.mjs\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 平台特定命令执行器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CommandExecutor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.impl </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadImplementation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> loadImplementation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> PlatformAdapter.</span><span style="color:#B392F0;">loadPlatformModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./impl/command-executor&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.impl.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(command);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getFileList</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.impl.</span><span style="color:#B392F0;">getFileList</span><span style="color:#E1E4E8;">(path);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Windows 特定实现 (impl/command-executor.win32.mjs)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> WindowsCommandExecutor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`cmd /c &quot;\${</span><span style="color:#E1E4E8;">command</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getFileList</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`dir &quot;\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}&quot; /B\`</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\r\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Unix 特定实现 (impl/command-executor.posix.mjs)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UnixCommandExecutor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(command, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getFileList</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`ls -1 &quot;\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="文件系统监视器跨平台适配" tabindex="-1">文件系统监视器跨平台适配 <a class="header-anchor" href="#文件系统监视器跨平台适配" aria-label="Permalink to &quot;文件系统监视器跨平台适配&quot;">​</a></h3><p>不同系统的文件系统监视机制不同。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// file-watcher.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { watch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CrossPlatformWatcher</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      persistent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptOptionsForPlatform</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  adaptOptionsForPlatform</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (platform) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // Windows 可能需要不同的轮询间隔</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.options.interval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.options.interval </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;darwin&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // macOS 配置</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.options.recursive </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.options.recursive </span><span style="color:#F97583;">??</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#6A737D;">        // Linux 配置</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.options.recursive </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.options.recursive </span><span style="color:#F97583;">??</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  watch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> watch</span><span style="color:#E1E4E8;">(path, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (error.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ERR_FEATURE_UNAVAILABLE_ON_PLATFORM&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 平台不支持某些特性，回退到基本模式</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;平台不支持某些监视特性，使用基本模式&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> watch</span><span style="color:#E1E4E8;">(path, { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options, recursive: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }, callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 跨平台的文件变化处理</span></span>
<span class="line"><span style="color:#B392F0;">  normalizeEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filename</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // Windows 事件类型标准化</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: eventType </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rename&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;change&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> eventType,</span></span>
<span class="line"><span style="color:#E1E4E8;">        file: filename</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { type: eventType, file: filename };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="测试与验证策略" tabindex="-1">测试与验证策略 <a class="header-anchor" href="#测试与验证策略" aria-label="Permalink to &quot;测试与验证策略&quot;">​</a></h2><h3 id="跨平台测试套件" tabindex="-1">跨平台测试套件 <a class="header-anchor" href="#跨平台测试套件" aria-label="Permalink to &quot;跨平台测试套件&quot;">​</a></h3><p>确保代码在所有目标平台上正常工作。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cross-platform-test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { platform, arch } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PlatformTestSuite</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> runBasicTests</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tests</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;路径处理&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testPathHandling</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;环境变量&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testEnvironmentVariables</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;命令执行&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testCommandExecution</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;文件系统&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testFileSystem</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(tests)) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results[name] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> test</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> testPathHandling</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> testPath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;some/mixed</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> normalized</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(testPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">normalized.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">normalized.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;//&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      normalizedPath: normalized</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> testEnvironmentVariables</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> home</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      process.env.</span><span style="color:#79B8FF;">USERPROFILE</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      process.env.</span><span style="color:#79B8FF;">HOME</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">home,</span></span>
<span class="line"><span style="color:#E1E4E8;">      homeDirectory: home</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> testCommandExecution</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">execSync</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:child_process&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> output;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        output </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;echo %OS%&#39;</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        output </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;echo $SHELL&#39;</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        success: </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">output.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        output: output.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> testFileSystem</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> testFile</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`test-\${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}.tmp\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(testFile, </span><span style="color:#9ECBFF;">&#39;test content&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(testFile, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      fs.</span><span style="color:#B392F0;">unlinkSync</span><span style="color:#E1E4E8;">(testFile);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        success: content </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;test content&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        operation: </span><span style="color:#9ECBFF;">&#39;write-read-delete&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 运行测试</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> testResults</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> PlatformTestSuite.</span><span style="color:#B392F0;">runBasicTests</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;跨平台测试结果:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">(testResults);</span></span></code></pre></div>`,48)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
