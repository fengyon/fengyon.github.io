import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"esbuild","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 esbuild？","slug":"什么是-esbuild","link":"#什么是-esbuild","children":[]},{"level":2,"title":"为什么如此快速？","slug":"为什么如此快速","link":"#为什么如此快速","children":[{"level":3,"title":"Go 语言优势","slug":"go-语言优势","link":"#go-语言优势","children":[]},{"level":3,"title":"高度并行化架构","slug":"高度并行化架构","link":"#高度并行化架构","children":[]},{"level":3,"title":"一体化设计","slug":"一体化设计","link":"#一体化设计","children":[]},{"level":3,"title":"高效内存利用","slug":"高效内存利用","link":"#高效内存利用","children":[]}]},{"level":2,"title":"核心功能","slug":"核心功能","link":"#核心功能","children":[{"level":3,"title":"打包与压缩","slug":"打包与压缩","link":"#打包与压缩","children":[]},{"level":3,"title":"格式支持","slug":"格式支持","link":"#格式支持","children":[]},{"level":3,"title":"开发工具","slug":"开发工具","link":"#开发工具","children":[]}]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"安装方式","slug":"安装方式","link":"#安装方式","children":[]},{"level":3,"title":"命令行使用","slug":"命令行使用","link":"#命令行使用","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}]},{"level":2,"title":"在 Vite 中的应用","slug":"在-vite-中的应用","link":"#在-vite-中的应用","children":[{"level":3,"title":"依赖预构建","slug":"依赖预构建","link":"#依赖预构建","children":[]},{"level":3,"title":"内容转换","slug":"内容转换","link":"#内容转换","children":[]}]},{"level":2,"title":"性能对比","slug":"性能对比","link":"#性能对比","children":[]},{"level":2,"title":"局限性","slug":"局限性","link":"#局限性","children":[{"level":3,"title":"功能限制","slug":"功能限制","link":"#功能限制","children":[]},{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}]},{"level":2,"title":"生态系统","slug":"生态系统","link":"#生态系统","children":[{"level":3,"title":"插件系统","slug":"插件系统","link":"#插件系统","children":[]},{"level":3,"title":"工具集成","slug":"工具集成","link":"#工具集成","children":[]}]}],"relativePath":"engineering/build/esbuild.md","filePath":"engineering/build/esbuild.md"}'),e={name:"engineering/build/esbuild.md"};function i(t,s,c,o,r,d){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/build/esbuild.md for this page in Markdown format</div><h1 id="esbuild" tabindex="-1">esbuild <a class="header-anchor" href="#esbuild" aria-label="Permalink to &quot;esbuild&quot;">​</a></h1><p>esbuild 是一个由 Go 语言编写的极速 JavaScript 打包工具，由 Figma 的 CTO Evan Wallace 创建。它旨在开辟构建工具性能的新时代，在打包速度上比传统工具快 10-100 倍，已成为现代前端工具链中的重要组成部分。</p><h2 id="什么是-esbuild" tabindex="-1">什么是 esbuild？ <a class="header-anchor" href="#什么是-esbuild" aria-label="Permalink to &quot;什么是 esbuild？&quot;">​</a></h2><p>esbuild 是一个专注于极致性能的 JavaScript 打包器和压缩器。它将多个 JavaScript 或 TypeScript 文件及其依赖项合并为单个输出文件，同时支持压缩、Tree Shaking 和 Source Map 生成等核心功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统打包流程:</span></span>
<span class="line"><span>[源码] -&gt; [TypeScript编译器] -&gt; [Babel转换] -&gt; [打包器] -&gt; [压缩器]</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>   多工具串联，速度缓慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>esbuild 流程:</span></span>
<span class="line"><span>[源码] -&gt; [esbuild一体化处理] -&gt; [最终输出]</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>   单工具完成，极致速度</span></span></code></pre></div><h2 id="为什么如此快速" tabindex="-1">为什么如此快速？ <a class="header-anchor" href="#为什么如此快速" aria-label="Permalink to &quot;为什么如此快速？&quot;">​</a></h2><p>esbuild 的卓越性能源于其创新的架构设计和实现策略。</p><h3 id="go-语言优势" tabindex="-1">Go 语言优势 <a class="header-anchor" href="#go-语言优势" aria-label="Permalink to &quot;Go 语言优势&quot;">​</a></h3><p>esbuild 使用 Go 编写并编译为本地机器码，而传统工具通常基于 JavaScript。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>JavaScript 工具:</span></span>
<span class="line"><span>[Node.js环境] -&gt; [V8引擎JIT编译] -&gt; [执行打包逻辑]</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>   运行时解释和编译开销</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Go 工具:</span></span>
<span class="line"><span>[原生二进制] -&gt; [直接执行] -&gt; [完成打包]</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>   无中间层，极致性能</span></span></code></pre></div><h3 id="高度并行化架构" tabindex="-1">高度并行化架构 <a class="header-anchor" href="#高度并行化架构" aria-label="Permalink to &quot;高度并行化架构&quot;">​</a></h3><p>esbuild 内部算法充分利用多核 CPU 的并行处理能力。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>并行处理示意图:</span></span>
<span class="line"><span>        [入口文件]</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>    +------+------+</span></span>
<span class="line"><span>    |      |      |</span></span>
<span class="line"><span>[解析1] [解析2] [解析3]  &lt;- 并行解析阶段</span></span>
<span class="line"><span>    |      |      |</span></span>
<span class="line"><span>[链接1] [链接2] [链接3]  &lt;- 部分并行</span></span>
<span class="line"><span>    |      |      |</span></span>
<span class="line"><span>    +------+------+</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>     [代码生成]</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>      [输出文件]</span></span></code></pre></div><h3 id="一体化设计" tabindex="-1">一体化设计 <a class="header-anchor" href="#一体化设计" aria-label="Permalink to &quot;一体化设计&quot;">​</a></h3><p>esbuild 从零编写所有组件，避免传统工具链的数据转换开销。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统工具数据流:</span></span>
<span class="line"><span>字符串 -&gt; AST -&gt; 字符串 -&gt; AST -&gt; 字符串</span></span>
<span class="line"><span>     (Babel)    (打包器)   (压缩器)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>esbuild 数据流:</span></span>
<span class="line"><span>字符串 -&gt; AST -&gt; 优化后的AST -&gt; 字符串</span></span>
<span class="line"><span>      (一次解析，多次优化)</span></span></code></pre></div><h3 id="高效内存利用" tabindex="-1">高效内存利用 <a class="header-anchor" href="#高效内存利用" aria-label="Permalink to &quot;高效内存利用&quot;">​</a></h3><p>通过紧凑的数据结构和最小化内存分配，esbuild 大幅提升 CPU 缓存命中率。</p><h2 id="核心功能" tabindex="-1">核心功能 <a class="header-anchor" href="#核心功能" aria-label="Permalink to &quot;核心功能&quot;">​</a></h2><h3 id="打包与压缩" tabindex="-1">打包与压缩 <a class="header-anchor" href="#打包与压缩" aria-label="Permalink to &quot;打包与压缩&quot;">​</a></h3><p>esbuild 同时具备打包和压缩能力，无需额外工具。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>打包示例:</span></span>
<span class="line"><span>[入口文件] -&gt; [依赖分析] -&gt; [Tree Shaking] -&gt; [代码合并] -&gt; [压缩优化]</span></span>
<span class="line"><span>      |            |             |               |             |</span></span>
<span class="line"><span>   index.js    收集所有模块   移除未使用代码   生成bundle   最小化体积</span></span></code></pre></div><h3 id="格式支持" tabindex="-1">格式支持 <a class="header-anchor" href="#格式支持" aria-label="Permalink to &quot;格式支持&quot;">​</a></h3><p>esbuild 支持多种模块格式和现代语法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入格式: JavaScript, TypeScript, JSX, TSX</span></span>
<span class="line"><span>输出格式: ESM, CommonJS, IIFE, UMD</span></span>
<span class="line"><span>目标环境: ES5 到 ESNext</span></span></code></pre></div><h3 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h3><p>内置开发服务器和监听模式，提升开发体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发工作流:</span></span>
<span class="line"><span>[启动监听] -&gt; [文件变更] -&gt; [增量构建] -&gt; [快速刷新]</span></span>
<span class="line"><span>      |            |            |           |</span></span>
<span class="line"><span>   即时启动      保存文件     毫秒级响应   无感知等待</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><h3 id="安装方式" tabindex="-1">安装方式 <a class="header-anchor" href="#安装方式" aria-label="Permalink to &quot;安装方式&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 本地安装</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> esbuild</span><span style="color:#79B8FF;"> --save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#79B8FF;"> -g</span><span style="color:#9ECBFF;"> esbuild</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 命令行直接使用</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#9ECBFF;"> esbuild</span><span style="color:#9ECBFF;"> app.jsx</span><span style="color:#79B8FF;"> --bundle</span></span></code></pre></div><h3 id="命令行使用" tabindex="-1">命令行使用 <a class="header-anchor" href="#命令行使用" aria-label="Permalink to &quot;命令行使用&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 基础打包</span></span>
<span class="line"><span style="color:#B392F0;">esbuild</span><span style="color:#9ECBFF;"> src/index.js</span><span style="color:#79B8FF;"> --bundle</span><span style="color:#79B8FF;"> --outfile=dist/bundle.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 支持 JSX</span></span>
<span class="line"><span style="color:#B392F0;">esbuild</span><span style="color:#9ECBFF;"> src/app.jsx</span><span style="color:#79B8FF;"> --bundle</span><span style="color:#79B8FF;"> --outfile=dist/app.js</span><span style="color:#79B8FF;"> --jsx-factory=React.createElement</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生产构建</span></span>
<span class="line"><span style="color:#B392F0;">esbuild</span><span style="color:#9ECBFF;"> src/index.js</span><span style="color:#79B8FF;"> --bundle</span><span style="color:#79B8FF;"> --minify</span><span style="color:#79B8FF;"> --sourcemap</span><span style="color:#79B8FF;"> --target=es2020</span></span></code></pre></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>通过 JavaScript API 进行更复杂的配置。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> esbuild</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;esbuild&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">esbuild</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    entryPoints: [</span><span style="color:#9ECBFF;">&#39;src/index.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    bundle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outfile: </span><span style="color:#9ECBFF;">&#39;dist/bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minify: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourcemap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: [</span><span style="color:#9ECBFF;">&#39;es2020&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    platform: </span><span style="color:#9ECBFF;">&#39;browser&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span></code></pre></div><h2 id="在-vite-中的应用" tabindex="-1">在 Vite 中的应用 <a class="header-anchor" href="#在-vite-中的应用" aria-label="Permalink to &quot;在 Vite 中的应用&quot;">​</a></h2><p>Vite 利用 esbuild 作为其核心引擎，显著提升开发体验。</p><h3 id="依赖预构建" tabindex="-1">依赖预构建 <a class="header-anchor" href="#依赖预构建" aria-label="Permalink to &quot;依赖预构建&quot;">​</a></h3><p>Vite 使用 esbuild 对第三方依赖进行预构建。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>预构建流程:</span></span>
<span class="line"><span>[发现依赖] -&gt; [esbuild打包] -&gt; [ESM格式转换] -&gt; [缓存存储]</span></span>
<span class="line"><span>     |             |              |               |</span></span>
<span class="line"><span>  扫描import   快速打包处理   统一模块规范   后续开发直接使用</span></span></code></pre></div><h3 id="内容转换" tabindex="-1">内容转换 <a class="header-anchor" href="#内容转换" aria-label="Permalink to &quot;内容转换&quot;">​</a></h3><p>开发服务器中使用 esbuild 进行快速的代码转换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>转换流程:</span></span>
<span class="line"><span>[浏览器请求] -&gt; [Vite服务器拦截] -&gt; [esbuild转换] -&gt; [返回ESM]</span></span>
<span class="line"><span>      |               |                 |             |</span></span>
<span class="line"><span>    TS/JSX文件     识别文件类型       毫秒级编译     浏览器执行</span></span></code></pre></div><h2 id="性能对比" tabindex="-1">性能对比 <a class="header-anchor" href="#性能对比" aria-label="Permalink to &quot;性能对比&quot;">​</a></h2><p>实际测试显示 esbuild 在各类场景下均有数量级的速度优势。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建时间对比 (秒):</span></span>
<span class="line"><span>任务          Webpack    Rollup    esbuild</span></span>
<span class="line"><span>冷启动        20-30      15-25     0.5-1</span></span>
<span class="line"><span>增量构建       5-10       3-8       0.1-0.3</span></span>
<span class="line"><span>生产构建       30-60      20-40     1-3</span></span>
<span class="line"><span>压缩优化       10-20      8-15      0.2-0.5</span></span></code></pre></div><h2 id="局限性" tabindex="-1">局限性 <a class="header-anchor" href="#局限性" aria-label="Permalink to &quot;局限性&quot;">​</a></h2><h3 id="功能限制" tabindex="-1">功能限制 <a class="header-anchor" href="#功能限制" aria-label="Permalink to &quot;功能限制&quot;">​</a></h3><p>虽然性能卓越，但 esbuild 在某些方面存在限制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>当前限制:</span></span>
<span class="line"><span>- 不支持 TypeScript 类型检查</span></span>
<span class="line"><span>- 插件生态相对较小</span></span>
<span class="line"><span>- 不支持 AST 操作 API</span></span>
<span class="line"><span>- 热更新功能相对基础</span></span>
<span class="line"><span>- 代码分割能力有限</span></span></code></pre></div><h3 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐场景:</span></span>
<span class="line"><span>[开发服务器] [依赖预构建] [代码压缩] [简单项目]</span></span>
<span class="line"><span>     |            |           |         |</span></span>
<span class="line"><span>  快速HMR      优化加载    生产优化   配置简单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>谨慎使用:</span></span>
<span class="line"><span>[复杂插件] [高级代码分割] [自定义AST] [微前端]</span></span>
<span class="line"><span>     |           |            |         |</span></span>
<span class="line"><span>生态局限      功能有限     无法操作   需要高级功能</span></span></code></pre></div><h2 id="生态系统" tabindex="-1">生态系统 <a class="header-anchor" href="#生态系统" aria-label="Permalink to &quot;生态系统&quot;">​</a></h2><h3 id="插件系统" tabindex="-1">插件系统 <a class="header-anchor" href="#插件系统" aria-label="Permalink to &quot;插件系统&quot;">​</a></h3><p>esbuild 提供基本的插件 API，支持构建过程的自定义扩展。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插件结构:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  name: &#39;自定义插件&#39;,</span></span>
<span class="line"><span>  setup: (build) =&gt; {</span></span>
<span class="line"><span>    build.onResolve({ filter: /.*/ }, ...)  // 解析钩子</span></span>
<span class="line"><span>    build.onLoad({ filter: /.*/ }, ...)     // 加载钩子</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="工具集成" tabindex="-1">工具集成 <a class="header-anchor" href="#工具集成" aria-label="Permalink to &quot;工具集成&quot;">​</a></h3><p>esbuild 已被众多现代工具采纳为核心组件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>集成生态:</span></span>
<span class="line"><span>[Vite]        [Snowpack]    [AWS CDK]    [各类Loader]</span></span>
<span class="line"><span>   |              |             |             |</span></span>
<span class="line"><span>开发构建       无打包构建    云函数部署   Webpack替代</span></span></code></pre></div>`,61)])])}const b=a(e,[["render",i]]);export{h as __pageData,b as default};
