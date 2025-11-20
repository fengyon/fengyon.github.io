import{_ as s,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"Webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"模块打包","slug":"模块打包","link":"#模块打包","children":[]},{"level":3,"title":"依赖图","slug":"依赖图","link":"#依赖图","children":[]}]},{"level":2,"title":"架构设计","slug":"架构设计","link":"#架构设计","children":[{"level":3,"title":"核心组成","slug":"核心组成","link":"#核心组成","children":[]},{"level":3,"title":"编译流程","slug":"编译流程","link":"#编译流程","children":[]}]},{"level":2,"title":"关键特性","slug":"关键特性","link":"#关键特性","children":[{"level":3,"title":"加载器 (Loaders)","slug":"加载器-loaders","link":"#加载器-loaders","children":[]},{"level":3,"title":"插件系统 (Plugins)","slug":"插件系统-plugins","link":"#插件系统-plugins","children":[]},{"level":3,"title":"代码分割","slug":"代码分割","link":"#代码分割","children":[]}]},{"level":2,"title":"配置体系","slug":"配置体系","link":"#配置体系","children":[{"level":3,"title":"基础配置结构","slug":"基础配置结构","link":"#基础配置结构","children":[]},{"level":3,"title":"环境差异化配置","slug":"环境差异化配置","link":"#环境差异化配置","children":[]}]},{"level":2,"title":"工作流程详解","slug":"工作流程详解","link":"#工作流程详解","children":[{"level":3,"title":"完整构建过程","slug":"完整构建过程","link":"#完整构建过程","children":[]},{"level":3,"title":"模块解析策略","slug":"模块解析策略","link":"#模块解析策略","children":[]}]},{"level":2,"title":"生态系统","slug":"生态系统","link":"#生态系统","children":[{"level":3,"title":"核心加载器","slug":"核心加载器","link":"#核心加载器","children":[]},{"level":3,"title":"核心插件","slug":"核心插件","link":"#核心插件","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"构建性能","slug":"构建性能","link":"#构建性能","children":[]},{"level":3,"title":"输出优化","slug":"输出优化","link":"#输出优化","children":[]}]},{"level":2,"title":"开发体验","slug":"开发体验","link":"#开发体验","children":[{"level":3,"title":"开发服务器","slug":"开发服务器","link":"#开发服务器","children":[]},{"level":3,"title":"开发工具链","slug":"开发工具链","link":"#开发工具链","children":[]}]},{"level":2,"title":"现代演进","slug":"现代演进","link":"#现代演进","children":[{"level":3,"title":"Webpack 5 新特性","slug":"webpack-5-新特性","link":"#webpack-5-新特性","children":[]},{"level":3,"title":"与其他工具对比","slug":"与其他工具对比","link":"#与其他工具对比","children":[]}]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[{"level":3,"title":"理想使用场景","slug":"理想使用场景","link":"#理想使用场景","children":[]},{"level":3,"title":"配置复杂度权衡","slug":"配置复杂度权衡","link":"#配置复杂度权衡","children":[]}]}],"relativePath":"engineering/build/webpack.md","filePath":"engineering/build/webpack.md"}'),e={name:"engineering/build/webpack.md"};function i(c,a,t,o,r,d){return l(),n("div",null,[...a[0]||(a[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/build/webpack.md for this page in Markdown format</div><h1 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h1><p>Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。它诞生于 2012 年，由 Tobias Koppers 创建，现已成为前端工程化领域最核心的构建工具之一，支撑着现代 Web 应用的开发和部署流程。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><h3 id="模块打包" tabindex="-1">模块打包 <a class="header-anchor" href="#模块打包" aria-label="Permalink to &quot;模块打包&quot;">​</a></h3><p>Webpack 将项目中的各种资源 (JS、CSS、图片等) 视为模块，通过依赖关系构建依赖图，最终打包成浏览器可执行的静态文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>源文件结构:</span></span>
<span class="line"><span>[入口文件] -&gt; [依赖模块A] -&gt; [依赖模块B]</span></span>
<span class="line"><span>       |              |</span></span>
<span class="line"><span>      JS文件         CSS文件</span></span>
<span class="line"><span>       |              |</span></span>
<span class="line"><span>    [依赖模块C]    [图片资源]</span></span></code></pre></div><h3 id="依赖图" tabindex="-1">依赖图 <a class="header-anchor" href="#依赖图" aria-label="Permalink to &quot;依赖图&quot;">​</a></h3><p>Webpack 从入口文件开始，递归构建模块依赖图。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖图构建:</span></span>
<span class="line"><span>entry.js -&gt; 分析import/require -&gt; moduleA.js -&gt; moduleB.js</span></span>
<span class="line"><span>       |                      |              |</span></span>
<span class="line"><span>   形成依赖树             继续分析依赖      叶子模块</span></span>
<span class="line"><span>       |                      |              |</span></span>
<span class="line"><span>   [完整依赖图] &lt;- [递归分析完成] &lt;- [无更多依赖]</span></span></code></pre></div><h2 id="架构设计" tabindex="-1">架构设计 <a class="header-anchor" href="#架构设计" aria-label="Permalink to &quot;架构设计&quot;">​</a></h2><h3 id="核心组成" tabindex="-1">核心组成 <a class="header-anchor" href="#核心组成" aria-label="Permalink to &quot;核心组成&quot;">​</a></h3><p>Webpack 由多个核心组件协同工作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Webpack 架构:</span></span>
<span class="line"><span>[入口配置] -&gt; [模块解析] -&gt; [加载器处理] -&gt; [插件优化] -&gt; [输出文件]</span></span>
<span class="line"><span>      |            |            |            |           |</span></span>
<span class="line"><span>  指定起点      查找依赖      转换非JS      增强功能     生成bundle</span></span></code></pre></div><h3 id="编译流程" tabindex="-1">编译流程 <a class="header-anchor" href="#编译流程" aria-label="Permalink to &quot;编译流程&quot;">​</a></h3><p>Webpack 的编译过程遵循明确的阶段划分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>编译阶段:</span></span>
<span class="line"><span>初始化 -&gt; 编译 -&gt; 模块构建 -&gt;  chunk生成 -&gt; 优化 -&gt; 输出</span></span>
<span class="line"><span>   |        |        |          |         |       |</span></span>
<span class="line"><span>配置准备  分析依赖  加载器转换  代码分块  插件处理  文件写入</span></span></code></pre></div><h2 id="关键特性" tabindex="-1">关键特性 <a class="header-anchor" href="#关键特性" aria-label="Permalink to &quot;关键特性&quot;">​</a></h2><h3 id="加载器-loaders" tabindex="-1">加载器 (Loaders) <a class="header-anchor" href="#加载器-loaders" aria-label="Permalink to &quot;加载器 (Loaders)&quot;">​</a></h3><p>Webpack 使用加载器转换非 JavaScript 模块。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>加载器工作流程:</span></span>
<span class="line"><span>[源文件] -&gt; [加载器链] -&gt; [转换后资源]</span></span>
<span class="line"><span>    |            |            |</span></span>
<span class="line"><span> .scss文件   sass-loader   .css文件</span></span>
<span class="line"><span>              css-loader</span></span>
<span class="line"><span>              style-loader</span></span></code></pre></div><h3 id="插件系统-plugins" tabindex="-1">插件系统 (Plugins) <a class="header-anchor" href="#插件系统-plugins" aria-label="Permalink to &quot;插件系统 (Plugins)&quot;">​</a></h3><p>插件提供自定义 Webpack 构建流程的能力。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插件作用点:</span></span>
<span class="line"><span>[编译生命周期] -&gt; [钩子函数] -&gt; [自定义逻辑]</span></span>
<span class="line"><span>        |             |            |</span></span>
<span class="line"><span>  不同阶段事件      监听事件     修改编译过程</span></span></code></pre></div><h3 id="代码分割" tabindex="-1">代码分割 <a class="header-anchor" href="#代码分割" aria-label="Permalink to &quot;代码分割&quot;">​</a></h3><p>Webpack 支持将代码拆分成多个 bundle，实现按需加载。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>代码分割策略:</span></span>
<span class="line"><span>[入口点分割] -&gt; [动态导入] -&gt; [公共代码提取]</span></span>
<span class="line"><span>      |              |            |</span></span>
<span class="line"><span> 多入口文件      import()语法     splitChunks</span></span></code></pre></div><h2 id="配置体系" tabindex="-1">配置体系 <a class="header-anchor" href="#配置体系" aria-label="Permalink to &quot;配置体系&quot;">​</a></h2><h3 id="基础配置结构" tabindex="-1">基础配置结构 <a class="header-anchor" href="#基础配置结构" aria-label="Permalink to &quot;基础配置结构&quot;">​</a></h3><p>Webpack 通过配置文件定义构建行为。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// webpack.config.js 基础结构</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 入口起点</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {                     </span><span style="color:#6A737D;">// 输出配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {                    </span><span style="color:#6A737D;">// 模块规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#6A737D;">      // 加载器配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [                   </span><span style="color:#6A737D;">// 插件列表</span></span>
<span class="line"><span style="color:#6A737D;">    // 插件实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#6A737D;">           // 模式配置</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="环境差异化配置" tabindex="-1">环境差异化配置 <a class="header-anchor" href="#环境差异化配置" aria-label="Permalink to &quot;环境差异化配置&quot;">​</a></h3><p>支持开发和生产环境的不同配置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>配置策略:</span></span>
<span class="line"><span>[公共配置] -&gt; [环境特定配置] -&gt; [合并配置]</span></span>
<span class="line"><span>     |              |             |</span></span>
<span class="line"><span> 基础设置      development    最终配置</span></span>
<span class="line"><span>             production</span></span></code></pre></div><h2 id="工作流程详解" tabindex="-1">工作流程详解 <a class="header-anchor" href="#工作流程详解" aria-label="Permalink to &quot;工作流程详解&quot;">​</a></h2><h3 id="完整构建过程" tabindex="-1">完整构建过程 <a class="header-anchor" href="#完整构建过程" aria-label="Permalink to &quot;完整构建过程&quot;">​</a></h3><p>Webpack 从源文件到输出文件的完整处理流程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>详细构建流程:</span></span>
<span class="line"><span>[入口文件] </span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[创建依赖图]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[模块解析]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[加载器转换]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[AST分析]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[依赖收集]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[Chunk生成]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[优化处理]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[资源发射]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    v</span></span>
<span class="line"><span>[输出文件]</span></span></code></pre></div><h3 id="模块解析策略" tabindex="-1">模块解析策略 <a class="header-anchor" href="#模块解析策略" aria-label="Permalink to &quot;模块解析策略&quot;">​</a></h3><p>Webpack 如何查找和解析模块。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块解析:</span></span>
<span class="line"><span>[请求路径] -&gt; [解析算法] -&gt; [定位文件]</span></span>
<span class="line"><span>      |            |           |</span></span>
<span class="line"><span> import &#39;./a&#39;   相对路径     ./a.js</span></span>
<span class="line"><span> import &#39;b&#39;     模块路径     node_modules/b/index.js</span></span></code></pre></div><h2 id="生态系统" tabindex="-1">生态系统 <a class="header-anchor" href="#生态系统" aria-label="Permalink to &quot;生态系统&quot;">​</a></h2><h3 id="核心加载器" tabindex="-1">核心加载器 <a class="header-anchor" href="#核心加载器" aria-label="Permalink to &quot;核心加载器&quot;">​</a></h3><p>常用加载器及其作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>加载器分类:</span></span>
<span class="line"><span>- 编译型: babel-loader, ts-loader</span></span>
<span class="line"><span>- 样式型: css-loader, sass-loader, style-loader  </span></span>
<span class="line"><span>- 文件型: file-loader, url-loader</span></span>
<span class="line"><span>- 其他: html-loader, vue-loader</span></span></code></pre></div><h3 id="核心插件" tabindex="-1">核心插件 <a class="header-anchor" href="#核心插件" aria-label="Permalink to &quot;核心插件&quot;">​</a></h3><p>常用插件及其功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插件分类:</span></span>
<span class="line"><span>- 优化类: TerserPlugin, CssMinimizerPlugin</span></span>
<span class="line"><span>- 功能类: HtmlWebpackPlugin, CleanWebpackPlugin</span></span>
<span class="line"><span>- 环境类: DefinePlugin, EnvironmentPlugin</span></span>
<span class="line"><span>- 开发类: HotModuleReplacementPlugin</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><h3 id="构建性能" tabindex="-1">构建性能 <a class="header-anchor" href="#构建性能" aria-label="Permalink to &quot;构建性能&quot;">​</a></h3><p>优化 Webpack 构建速度的策略。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建优化:</span></span>
<span class="line"><span>[缓存] -&gt; [并行处理] -&gt; [减少范围] -&gt; [硬件加速]</span></span>
<span class="line"><span>   |          |           |           |</span></span>
<span class="line"><span> 缓存结果   多核编译     指定模块    更快的硬件</span></span></code></pre></div><h3 id="输出优化" tabindex="-1">输出优化 <a class="header-anchor" href="#输出优化" aria-label="Permalink to &quot;输出优化&quot;">​</a></h3><p>优化最终打包文件的策略。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输出优化:</span></span>
<span class="line"><span>[代码分割] -&gt; [Tree Shaking] -&gt; [压缩] -&gt; [缓存优化]</span></span>
<span class="line"><span>     |            |             |          |</span></span>
<span class="line"><span> 按需加载     消除死代码      减小体积   长效缓存</span></span></code></pre></div><h2 id="开发体验" tabindex="-1">开发体验 <a class="header-anchor" href="#开发体验" aria-label="Permalink to &quot;开发体验&quot;">​</a></h2><h3 id="开发服务器" tabindex="-1">开发服务器 <a class="header-anchor" href="#开发服务器" aria-label="Permalink to &quot;开发服务器&quot;">​</a></h3><p>Webpack Dev Server 提供开发期热更新功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发服务器:</span></span>
<span class="line"><span>[文件监听] -&gt; [编译内存] -&gt; [热模块替换] -&gt; [浏览器更新]</span></span>
<span class="line"><span>     |           |            |             |</span></span>
<span class="line"><span> 检测变化     不写入磁盘     局部更新       自动刷新</span></span></code></pre></div><h3 id="开发工具链" tabindex="-1">开发工具链 <a class="header-anchor" href="#开发工具链" aria-label="Permalink to &quot;开发工具链&quot;">​</a></h3><p>Webpack 相关的开发辅助工具。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发工具:</span></span>
<span class="line"><span>webpack-dev-server   开发服务器</span></span>
<span class="line"><span>webpack-bundle-analyzer 包分析器</span></span>
<span class="line"><span>webpack-merge       配置合并</span></span>
<span class="line"><span>speed-measure-webpack-plugin 速度分析</span></span></code></pre></div><h2 id="现代演进" tabindex="-1">现代演进 <a class="header-anchor" href="#现代演进" aria-label="Permalink to &quot;现代演进&quot;">​</a></h2><h3 id="webpack-5-新特性" tabindex="-1">Webpack 5 新特性 <a class="header-anchor" href="#webpack-5-新特性" aria-label="Permalink to &quot;Webpack 5 新特性&quot;">​</a></h3><p>Webpack 5 引入的重要改进。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Webpack 5 特性:</span></span>
<span class="line"><span>[模块联邦] -&gt; [持久缓存] -&gt; [资源模块] -&gt; [Tree Shaking增强]</span></span>
<span class="line"><span>     |           |           |             |</span></span>
<span class="line"><span> 微前端支持     构建加速   内置资源处理     更精确的死代码消除</span></span></code></pre></div><h3 id="与其他工具对比" tabindex="-1">与其他工具对比 <a class="header-anchor" href="#与其他工具对比" aria-label="Permalink to &quot;与其他工具对比&quot;">​</a></h3><p>Webpack 在现代构建工具生态中的定位。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建工具对比:</span></span>
<span class="line"><span>Webpack:   [功能全面] -&gt; [生态丰富] -&gt; [配置灵活] -&gt; [成熟稳定]</span></span>
<span class="line"><span>            |            |            |            |</span></span>
<span class="line"><span>         全能选手     大量插件     高度可配置     企业级应用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vite:      [开发快速] -&gt; [ESM原生] -&gt; [简单配置] -&gt; [新兴趋势]</span></span>
<span class="line"><span>            |            |            |            |</span></span>
<span class="line"><span>         极速HMR     按需编译     开箱即用     逐渐普及</span></span></code></pre></div><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><h3 id="理想使用场景" tabindex="-1">理想使用场景 <a class="header-anchor" href="#理想使用场景" aria-label="Permalink to &quot;理想使用场景&quot;">​</a></h3><p>Webpack 在以下场景中表现最佳。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐场景:</span></span>
<span class="line"><span>- 复杂单页应用</span></span>
<span class="line"><span>- 需要高度自定义构建流程</span></span>
<span class="line"><span>- 企业级项目</span></span>
<span class="line"><span>- 多页面应用</span></span>
<span class="line"><span>- 已有大型项目迁移</span></span></code></pre></div><h3 id="配置复杂度权衡" tabindex="-1">配置复杂度权衡 <a class="header-anchor" href="#配置复杂度权衡" aria-label="Permalink to &quot;配置复杂度权衡&quot;">​</a></h3><p>Webpack 配置的灵活性带来的复杂度问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>配置复杂度:</span></span>
<span class="line"><span>简单项目: [基础配置] -&gt; 快速上手</span></span>
<span class="line"><span>中等项目: [常用加载器/插件] -&gt; 适度配置</span></span>
<span class="line"><span>复杂项目: [自定义配置] -&gt; 学习曲线较陡峭</span></span></code></pre></div>`,76)])])}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
