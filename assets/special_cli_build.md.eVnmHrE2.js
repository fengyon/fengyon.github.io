import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"构建","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 命令行构建概述","slug":"node-js-命令行构建概述","link":"#node-js-命令行构建概述","children":[]},{"level":2,"title":"项目结构与初始化","slug":"项目结构与初始化","link":"#项目结构与初始化","children":[{"level":3,"title":"标准化项目布局","slug":"标准化项目布局","link":"#标准化项目布局","children":[]},{"level":3,"title":"package.json 配置","slug":"package-json-配置","link":"#package-json-配置","children":[]}]},{"level":2,"title":"模块系统与转译","slug":"模块系统与转译","link":"#模块系统与转译","children":[{"level":3,"title":"ESM 模块配置","slug":"esm-模块配置","link":"#esm-模块配置","children":[]},{"level":3,"title":"TypeScript 集成","slug":"typescript-集成","link":"#typescript-集成","children":[]}]},{"level":2,"title":"打包与优化","slug":"打包与优化","link":"#打包与优化","children":[{"level":3,"title":"Rollup 打包配置","slug":"rollup-打包配置","link":"#rollup-打包配置","children":[]},{"level":3,"title":"代码分割与懒加载","slug":"代码分割与懒加载","link":"#代码分割与懒加载","children":[]}]},{"level":2,"title":"依赖管理与优化","slug":"依赖管理与优化","link":"#依赖管理与优化","children":[{"level":3,"title":"依赖分析工具","slug":"依赖分析工具","link":"#依赖分析工具","children":[]},{"level":3,"title":"版本管理与兼容性","slug":"版本管理与兼容性","link":"#版本管理与兼容性","children":[]}]},{"level":2,"title":"构建流水线与自动化","slug":"构建流水线与自动化","link":"#构建流水线与自动化","children":[{"level":3,"title":"多环境构建配置","slug":"多环境构建配置","link":"#多环境构建配置","children":[]},{"level":3,"title":"持续集成配置","slug":"持续集成配置","link":"#持续集成配置","children":[]}]},{"level":2,"title":"高级构建特性","slug":"高级构建特性","link":"#高级构建特性","children":[{"level":3,"title":"条件编译与特性开关","slug":"条件编译与特性开关","link":"#条件编译与特性开关","children":[]},{"level":3,"title":"性能分析与优化","slug":"性能分析与优化","link":"#性能分析与优化","children":[]}]}],"relativePath":"special/cli/build.md","filePath":"special/cli/build.md"}'),o={name:"special/cli/build.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/build.md for this page in Markdown format</div><h1 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h1><h2 id="node-js-命令行构建概述" tabindex="-1">Node.js 命令行构建概述 <a class="header-anchor" href="#node-js-命令行构建概述" aria-label="Permalink to &quot;Node.js 命令行构建概述&quot;">​</a></h2><p>在 Node.js 命令行工具开发中，构建过程是将源代码转换为可分发、可执行程序的关键环节。现代命令行工具的构建涉及代码转译、打包、优化、依赖管理和分发策略等多个方面，直接影响工具的性能、兼容性和用户体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建流程示意图：</span></span>
<span class="line"><span>源代码 → 转译处理 → 打包优化 → 可执行文件 → 分发包</span></span>
<span class="line"><span>   ↓          ↓          ↓          ↓          ↓</span></span>
<span class="line"><span> .mjs/.js   Babel/TS    Webpack   二进制文件   npm包</span></span>
<span class="line"><span>  文件       转译        打包       生成       发布</span></span></code></pre></div><h2 id="项目结构与初始化" tabindex="-1">项目结构与初始化 <a class="header-anchor" href="#项目结构与初始化" aria-label="Permalink to &quot;项目结构与初始化&quot;">​</a></h2><h3 id="标准化项目布局" tabindex="-1">标准化项目布局 <a class="header-anchor" href="#标准化项目布局" aria-label="Permalink to &quot;标准化项目布局&quot;">​</a></h3><p>现代 Node.js 命令行工具遵循特定的目录结构，确保代码组织清晰且易于维护。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 典型项目结构</span></span>
<span class="line"><span style="color:#E1E4E8;">my</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">tool</span><span style="color:#F97583;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">├── src</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">                    // 源代码目录</span></span>
<span class="line"><span style="color:#E1E4E8;">│   ├── commands</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">          // 命令实现</span></span>
<span class="line"><span style="color:#E1E4E8;">│   ├── utils</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">             // 工具函数</span></span>
<span class="line"><span style="color:#E1E4E8;">│   ├── cli.mjs           </span><span style="color:#6A737D;">// 主入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── config.mjs        </span><span style="color:#6A737D;">// 配置管理</span></span>
<span class="line"><span style="color:#E1E4E8;">├── bin</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">                   // 可执行文件目录</span></span>
<span class="line"><span style="color:#E1E4E8;">├── dist</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">                  // 构建输出目录</span></span>
<span class="line"><span style="color:#E1E4E8;">├── test</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">                  // 测试文件</span></span>
<span class="line"><span style="color:#E1E4E8;">├── docs</span><span style="color:#F97583;">/</span><span style="color:#6A737D;">                  // 文档</span></span>
<span class="line"><span style="color:#E1E4E8;">├── package.json          </span><span style="color:#6A737D;">// 项目配置</span></span>
<span class="line"><span style="color:#E1E4E8;">├── rollup.config.mjs     </span><span style="color:#6A737D;">// 打包配置</span></span>
<span class="line"><span style="color:#E1E4E8;">└── tsconfig.json         </span><span style="color:#6A737D;">// TypeScript配置</span></span></code></pre></div><h3 id="package-json-配置" tabindex="-1">package.json 配置 <a class="header-anchor" href="#package-json-配置" aria-label="Permalink to &quot;package.json 配置&quot;">​</a></h3><p>package.json 是 Node.js 项目的核心配置文件，定义了项目的元数据、依赖和脚本。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json 关键配置示例</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my-cli-tool&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;一个现代化的命令行工具&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;bin&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;my-cli&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./bin/cli.mjs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/cli.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;exports&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;.&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/cli.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;./package.json&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./package.json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;files&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;bin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;README.md&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;rollup -c&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;rollup -c -w&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node --test test/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;lint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint src/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;prepublishOnly&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npm run build &amp;&amp; npm test&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;engines&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;node&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&gt;=18.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="模块系统与转译" tabindex="-1">模块系统与转译 <a class="header-anchor" href="#模块系统与转译" aria-label="Permalink to &quot;模块系统与转译&quot;">​</a></h2><h3 id="esm-模块配置" tabindex="-1">ESM 模块配置 <a class="header-anchor" href="#esm-模块配置" aria-label="Permalink to &quot;ESM 模块配置&quot;">​</a></h3><p>ESM (ECMAScript Modules) 是现代 JavaScript 的模块标准，提供了更好的静态分析和 tree-shaking 能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/cli.mjs - 主入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">!/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">bin</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">env node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Command } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;commander&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRequire } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 兼容性处理</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> require</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createRequire</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入本地模块</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { version } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../package.json&#39;</span><span style="color:#F97583;"> assert</span><span style="color:#E1E4E8;"> { type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setupCommands } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./commands/index.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { config } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./config.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CLITool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.program </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Command</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupProgram</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupProgram</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.program</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-cli&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;一个现代化的命令行工具&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">(version);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setupCommands</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.program);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> run</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.program.</span><span style="color:#B392F0;">parseAsync</span><span style="color:#E1E4E8;">(process.argv);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动应用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cli</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CLITool</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">cli.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(console.error);</span></span></code></pre></div><h3 id="typescript-集成" tabindex="-1">TypeScript 集成 <a class="header-anchor" href="#typescript-集成" aria-label="Permalink to &quot;TypeScript 集成&quot;">​</a></h3><p>TypeScript 提供类型安全和更好的开发体验，需要通过构建过程转换为 JavaScript。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ES2022&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ESNext&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;moduleResolution&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;allowSyntheticDefaultImports&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;esModuleInterop&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;strict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;outDir&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;rootDir&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./src&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;declaration&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;declarationMap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;sourceMap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;include&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/**/*&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;exclude&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// src/types.mjs - 类型定义</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@typedef</span><span style="color:#B392F0;"> {Object}</span><span style="color:#B392F0;"> BuildConfig</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> entry</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> output</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {boolean}</span><span style="color:#E1E4E8;"> minify</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> platform</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@typedef</span><span style="color:#B392F0;"> {Object}</span><span style="color:#B392F0;"> CommandOptions</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {boolean}</span><span style="color:#E1E4E8;"> verbose</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@property</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// TypeScript 编译脚本</span></span>
<span class="line"><span style="color:#6A737D;">// build-ts.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> compileTypeScript</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔨 编译 TypeScript...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tsc&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ TypeScript 编译完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ TypeScript 编译失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生成类型声明文件</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> generateDeclarations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> pkg</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  pkg.types </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;./dist/cli.d.ts&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">  writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(pkg, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">compileTypeScript</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">generateDeclarations</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="打包与优化" tabindex="-1">打包与优化 <a class="header-anchor" href="#打包与优化" aria-label="Permalink to &quot;打包与优化&quot;">​</a></h2><h3 id="rollup-打包配置" tabindex="-1">Rollup 打包配置 <a class="header-anchor" href="#rollup-打包配置" aria-label="Permalink to &quot;Rollup 打包配置&quot;">​</a></h3><p>Rollup 是专为库和命令行工具设计的打包器，提供优秀的 tree-shaking 功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// rollup.config.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;rollup&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { nodeResolve } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@rollup/plugin-node-resolve&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> commonjs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@rollup/plugin-commonjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> json </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@rollup/plugin-json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { babel } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@rollup/plugin-babel&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { terser } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;rollup-plugin-terser&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  input: </span><span style="color:#9ECBFF;">&#39;src/cli.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      file: </span><span style="color:#9ECBFF;">&#39;dist/cli.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      format: </span><span style="color:#9ECBFF;">&#39;esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      banner: </span><span style="color:#9ECBFF;">&#39;#!/usr/bin/env node&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourcemap: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      file: </span><span style="color:#9ECBFF;">&#39;dist/cli.cjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      format: </span><span style="color:#9ECBFF;">&#39;cjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      banner: </span><span style="color:#9ECBFF;">&#39;#!/usr/bin/env node&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourcemap: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#B392F0;">    nodeResolve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      preferBuiltins: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      exportConditions: [</span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#B392F0;">    commonjs</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#B392F0;">    json</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#B392F0;">    babel</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      babelHelpers: </span><span style="color:#9ECBFF;">&#39;bundled&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      exclude: </span><span style="color:#9ECBFF;">&#39;node_modules/**&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          targets: { node: </span><span style="color:#9ECBFF;">&#39;18.0.0&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          modules: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        }]</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#B392F0;">    terser</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        drop_console: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        drop_debugger: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  external: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;commander&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;chalk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;fs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;path&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;child_process&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="代码分割与懒加载" tabindex="-1">代码分割与懒加载 <a class="header-anchor" href="#代码分割与懒加载" aria-label="Permalink to &quot;代码分割与懒加载&quot;">​</a></h3><p>对于大型命令行工具，代码分割可以显著改善启动性能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/utils/lazy-loader.mjs</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> LazyLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.modules </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> load</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> loadPromise</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> import</span><span style="color:#E1E4E8;">(modulePath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">module</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> module</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(moduleName);</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(moduleName, loadPromise);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> loadPromise;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  preload</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">modulePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modules.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(moduleName)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(modulePath, moduleName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局懒加载器实例</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> lazyLoader</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> LazyLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用懒加载的命令</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> executeHeavyCommand</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 按需加载重型依赖</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">HeavyProcessor</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> lazyLoader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;../processors/heavy.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;heavy-processor&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> processor</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HeavyProcessor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> processor.</span><span style="color:#B392F0;">process</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="依赖管理与优化" tabindex="-1">依赖管理与优化 <a class="header-anchor" href="#依赖管理与优化" aria-label="Permalink to &quot;依赖管理与优化&quot;">​</a></h2><h3 id="依赖分析工具" tabindex="-1">依赖分析工具 <a class="header-anchor" href="#依赖分析工具" aria-label="Permalink to &quot;依赖分析工具&quot;">​</a></h3><p>分析和管理依赖关系，避免不必要的包体积膨胀。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// dep-analyzer.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRequire } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> require</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createRequire</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DepAnalyzer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageJson </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  analyzeDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">dependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#79B8FF;">devDependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {} } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageJson;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📦 依赖分析报告:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;生产依赖:&#39;</span><span style="color:#E1E4E8;">, Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(dependencies).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开发依赖:&#39;</span><span style="color:#E1E4E8;">, Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(devDependencies).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkBundleSize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findUnusedDeps</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkBundleSize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npx bundle-phobia-cli&#39;</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📊 包大小分析:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  Bundle Phobia 分析失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  findUnusedDeps</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npx depcheck&#39;</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> lines</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> result.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Unused dependencies&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Unused devDependencies&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (lines.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔍 未使用的依赖:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        lines.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  &#39;</span><span style="color:#E1E4E8;">, line));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  Depcheck 分析失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> optimizeDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 移除未使用的依赖</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> unused</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findUnusedDeps</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (unused.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;优化依赖关系...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 实际项目中应该提示用户手动移除</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> analyzer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DepAnalyzer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">analyzer.</span><span style="color:#B392F0;">analyzeDependencies</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="版本管理与兼容性" tabindex="-1">版本管理与兼容性 <a class="header-anchor" href="#版本管理与兼容性" aria-label="Permalink to &quot;版本管理与兼容性&quot;">​</a></h3><p>确保构建产物在不同 Node.js 版本间的兼容性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// version-compat.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageJson </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVersion</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageJson.version;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">major</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">minor</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">patch</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentVersion.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;major&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">major</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}.0.0\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;minor&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">major</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">minor</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}.0\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">major</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">minor</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">patch</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无效的版本类型: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageJson.version </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageJson, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🆙 版本更新: \${</span><span style="color:#E1E4E8;">currentVersion</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">newVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  checkNodeVersion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> required</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageJson.engines?.node;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.version;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (required) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">requiredMajor</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> required.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&gt;=&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">currentMajor</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;v&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (currentMajor </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> requiredMajor) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`需要 Node.js \${</span><span style="color:#E1E4E8;">required</span><span style="color:#9ECBFF;">}, 当前版本 \${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ Node.js 版本检查通过: \${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateChangelog</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npx conventional-changelog -p angular -i CHANGELOG.md -s&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📝 更新日志已生成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  更新日志生成失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> versionManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">versionManager.</span><span style="color:#B392F0;">checkNodeVersion</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// versionManager.updateVersion(&#39;patch&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">// versionManager.generateChangelog();</span></span></code></pre></div><h2 id="构建流水线与自动化" tabindex="-1">构建流水线与自动化 <a class="header-anchor" href="#构建流水线与自动化" aria-label="Permalink to &quot;构建流水线与自动化&quot;">​</a></h2><h3 id="多环境构建配置" tabindex="-1">多环境构建配置 <a class="header-anchor" href="#多环境构建配置" aria-label="Permalink to &quot;多环境构建配置&quot;">​</a></h3><p>针对不同环境 (开发、测试、生产) 进行优化构建。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// build-pipeline.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { existsSync, mkdirSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BuildPipeline</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">environment</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.environment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> environment;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.buildDir </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;dist&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> run</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🚀 开始构建 (环境: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">environment</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clean</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lint</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">verify</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 构建完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 构建失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> clean</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🧹 清理构建目录...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.buildDir)) {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`rm -rf \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">buildDir</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#B392F0;">    mkdirSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.buildDir, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> lint</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔍 代码检查...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm run lint&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> test</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🧪 运行测试...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm test&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔨 构建项目...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> commands</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      production: </span><span style="color:#9ECBFF;">&#39;npm run build:prod&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      development: </span><span style="color:#9ECBFF;">&#39;npm run build:dev&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      staging: </span><span style="color:#9ECBFF;">&#39;npm run build:staging&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> command</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> commands[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.environment] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> commands.production;</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(command, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> optimize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.environment </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.log </span><span style="color:#9ECBFF;">&#39;⚡ 优化构建产物...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm run optimize&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> verify</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔎 验证构建结果...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查必要的文件</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> requiredFiles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;dist/cli.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;dist/cli.cjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;bin/cli.mjs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> file</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> requiredFiles) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(file)) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`构建产物缺失: \${</span><span style="color:#E1E4E8;">file</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证可执行文件</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node dist/cli.mjs --version&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;构建产物无法正常执行&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 构建验证通过&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pipeline</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BuildPipeline</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> pipeline.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="持续集成配置" tabindex="-1">持续集成配置 <a class="header-anchor" href="#持续集成配置" aria-label="Permalink to &quot;持续集成配置&quot;">​</a></h3><p>在 CI/CD 环境中自动化构建和测试流程。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// github-actions.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CIConfigGenerator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  generateGitHubActions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> workflow</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">name: Node.js CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">on:</span></span>
<span class="line"><span style="color:#9ECBFF;">  push:</span></span>
<span class="line"><span style="color:#9ECBFF;">    branches: [ main, develop ]</span></span>
<span class="line"><span style="color:#9ECBFF;">  pull_request:</span></span>
<span class="line"><span style="color:#9ECBFF;">    branches: [ main ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">jobs:</span></span>
<span class="line"><span style="color:#9ECBFF;">  build:</span></span>
<span class="line"><span style="color:#9ECBFF;">    runs-on: </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{{ matrix.os }}</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    strategy:</span></span>
<span class="line"><span style="color:#9ECBFF;">      matrix:</span></span>
<span class="line"><span style="color:#9ECBFF;">        os: [ubuntu-latest, windows-latest, macos-latest]</span></span>
<span class="line"><span style="color:#9ECBFF;">        node-version: [18.x, 20.x]</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    steps:</span></span>
<span class="line"><span style="color:#9ECBFF;">    - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Use Node.js </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#9ECBFF;">      uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#9ECBFF;">      with:</span></span>
<span class="line"><span style="color:#9ECBFF;">        node-version: </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#9ECBFF;">        cache: &#39;npm&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Install dependencies</span></span>
<span class="line"><span style="color:#9ECBFF;">      run: npm ci</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Lint code</span></span>
<span class="line"><span style="color:#9ECBFF;">      run: npm run lint</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Run tests</span></span>
<span class="line"><span style="color:#9ECBFF;">      run: npm test</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Build project</span></span>
<span class="line"><span style="color:#9ECBFF;">      run: npm run build</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Verify build</span></span>
<span class="line"><span style="color:#9ECBFF;">      run: npm run verify</span></span>
<span class="line"><span style="color:#9ECBFF;">      </span></span>
<span class="line"><span style="color:#9ECBFF;">    - name: Upload artifacts</span></span>
<span class="line"><span style="color:#9ECBFF;">      uses: actions/upload-artifact@v3</span></span>
<span class="line"><span style="color:#9ECBFF;">      with:</span></span>
<span class="line"><span style="color:#9ECBFF;">        name: build-</span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{{ matrix.os }}-node-</span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#9ECBFF;">        path: |</span></span>
<span class="line"><span style="color:#9ECBFF;">          dist/</span></span>
<span class="line"><span style="color:#9ECBFF;">          bin/</span></span>
<span class="line"><span style="color:#9ECBFF;">        retention-days: 7</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.github/workflows/ci.yml&#39;</span><span style="color:#E1E4E8;">, workflow.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ GitHub Actions 配置已生成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateDockerfile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dockerfile</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">FROM node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">WORKDIR /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;"># 复制包文件</span></span>
<span class="line"><span style="color:#9ECBFF;">COPY package*.json ./</span></span>
<span class="line"><span style="color:#9ECBFF;">RUN npm ci --only=production</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;"># 复制构建产物</span></span>
<span class="line"><span style="color:#9ECBFF;">COPY dist/ ./dist/</span></span>
<span class="line"><span style="color:#9ECBFF;">COPY bin/ ./bin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;"># 设置可执行权限</span></span>
<span class="line"><span style="color:#9ECBFF;">RUN chmod +x ./bin/cli.mjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;"># 创建符号链接</span></span>
<span class="line"><span style="color:#9ECBFF;">RUN ln -s /app/bin/cli.mjs /usr/local/bin/my-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">ENTRYPOINT [&quot;node&quot;, &quot;/app/bin/cli.mjs&quot;]</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Dockerfile&#39;</span><span style="color:#E1E4E8;">, dockerfile.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ Dockerfile 已生成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生成 CI 配置文件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ciGenerator</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CIConfigGenerator</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">ciGenerator.</span><span style="color:#B392F0;">generateGitHubActions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">ciGenerator.</span><span style="color:#B392F0;">generateDockerfile</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="高级构建特性" tabindex="-1">高级构建特性 <a class="header-anchor" href="#高级构建特性" aria-label="Permalink to &quot;高级构建特性&quot;">​</a></h2><h3 id="条件编译与特性开关" tabindex="-1">条件编译与特性开关 <a class="header-anchor" href="#条件编译与特性开关" aria-label="Permalink to &quot;条件编译与特性开关&quot;">​</a></h3><p>根据构建目标启用或禁用特定功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// feature-flags.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> FeatureManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.flags </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadFlags</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  loadFlags</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;feature-flags.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(config);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        experimental: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        analytics: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateChecker: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        plugins: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateBuildConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">environment</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      environment,</span></span>
<span class="line"><span style="color:#E1E4E8;">      features: { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.flags },</span></span>
<span class="line"><span style="color:#E1E4E8;">      buildTime: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 环境特定的特性开关</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (environment </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.features.experimental </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.features.plugins </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (environment </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.features.experimental </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.features.analytics </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> configContent</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`export const buildConfig = \${</span><span style="color:#79B8FF;">JSON</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">null</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">};\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/generated/build-config.mjs&#39;</span><span style="color:#E1E4E8;">, configContent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 构建配置已生成:&#39;</span><span style="color:#E1E4E8;">, config);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  validateFlags</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.flags.experimental </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.flags.analytics) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;实验性功能与分析功能可能存在冲突&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (issues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  特性配置警告:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      issues.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">issue</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  -&#39;</span><span style="color:#E1E4E8;">, issue));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> issues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用特性配置</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { buildConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../generated/build-config.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> initializeApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (buildConfig.features.analytics) {</span></span>
<span class="line"><span style="color:#B392F0;">    initializeAnalytics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (buildConfig.features.experimental) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  实验性功能已启用&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 构建时生成配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> featureManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FeatureManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">featureManager.</span><span style="color:#B392F0;">generateBuildConfig</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="性能分析与优化" tabindex="-1">性能分析与优化 <a class="header-anchor" href="#性能分析与优化" aria-label="Permalink to &quot;性能分析与优化&quot;">​</a></h3><p>在构建过程中分析和优化性能瓶颈。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// performance-build.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { performance, PerformanceObserver } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:perf_hooks&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PerformanceTracker</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupObserver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupObserver</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(entry.name, entry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;measure&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  startPhase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">phase</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`start-\${</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  endPhase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">phase</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance.</span><span style="color:#B392F0;">mark</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`end-\${</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance.</span><span style="color:#B392F0;">measure</span><span style="color:#E1E4E8;">(phase, </span><span style="color:#9ECBFF;">\`start-\${</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`end-\${</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> trackBuild</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📊 开始性能跟踪...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startPhase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;total-build&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 跟踪各个构建阶段</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> phases</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;dependency-install&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;compilation&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;bundling&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;optimization&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;testing&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> phase</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> phases) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startPhase</span><span style="color:#E1E4E8;">(phase);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 模拟构建阶段</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endPhase</span><span style="color:#E1E4E8;">(phase);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  \${</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">metrics</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">phase</span><span style="color:#9ECBFF;">)?.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">endPhase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;total-build&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> totalTime</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;total-build&#39;</span><span style="color:#E1E4E8;">)?.duration </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">📈 构建性能报告:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`总构建时间: \${</span><span style="color:#E1E4E8;">totalTime</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算各阶段占比</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">metric</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (name </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;total-build&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> percentage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ((metric.duration </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalTime) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">metric</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}ms (\${</span><span style="color:#E1E4E8;">percentage</span><span style="color:#9ECBFF;">}%)\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 性能建议</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (totalTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 10000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">💡 性能优化建议:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  - 考虑使用增量构建&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  - 优化依赖安装时间&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  - 并行化构建任务&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  analyzeBundle</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">📦 包大小分析...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npx webpack-bundle-analyzer dist/stats.json&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  包分析工具未安装或配置&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tracker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceTracker</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> tracker.</span><span style="color:#B392F0;">trackBuild</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">tracker.</span><span style="color:#B392F0;">analyzeBundle</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><p>通过实施这些构建技术和最佳实践，Node.js 命令行工具可以获得优化的性能、更好的兼容性和更流畅的开发体验。构建过程不再是简单的代码转换，而是确保工具质量和用户体验的关键环节。</p>`,48)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
