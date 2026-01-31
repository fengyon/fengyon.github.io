import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"构建优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"构建优化基础","slug":"build-optimization-basics","link":"#build-optimization-basics","children":[]},{"level":2,"title":"打包工具选型","slug":"bundler-selection","link":"#bundler-selection","children":[]},{"level":2,"title":"代码分割策略","slug":"code-splitting","link":"#code-splitting","children":[]},{"level":2,"title":"树摇与无用代码消除","slug":"tree-shaking","link":"#tree-shaking","children":[]},{"level":2,"title":"模块解析优化","slug":"module-resolution","link":"#module-resolution","children":[]},{"level":2,"title":"资源压缩与优化","slug":"asset-compression","link":"#asset-compression","children":[]},{"level":2,"title":"缓存策略优化","slug":"caching-strategy","link":"#caching-strategy","children":[]},{"level":2,"title":"依赖优化","slug":"dependency-optimization","link":"#dependency-optimization","children":[]},{"level":2,"title":"构建性能监控","slug":"build-performance","link":"#build-performance","children":[]},{"level":2,"title":"环境特定优化","slug":"environment-specific","link":"#environment-specific","children":[]},{"level":2,"title":"现代构建工具迁移","slug":"modern-bundler-migration","link":"#modern-bundler-migration","children":[]}],"relativePath":"engineering/performance/bundling.md","filePath":"engineering/performance/bundling.md"}'),o={name:"engineering/performance/bundling.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/performance/bundling.md for this page in Markdown format</div><h1 id="构建优化" tabindex="-1">构建优化 <a class="header-anchor" href="#构建优化" aria-label="Permalink to &quot;构建优化&quot;">​</a></h1><h2 id="build-optimization-basics" tabindex="-1">构建优化基础 <a class="header-anchor" href="#build-optimization-basics" aria-label="Permalink to &quot;构建优化基础 {#build-optimization-basics}&quot;">​</a></h2><p>构建优化是通过改进代码打包、压缩和资源处理流程，提升 Web 应用性能的工程实践。现代构建工具如 Webpack、Vite、esbuild 通过树摇、代码分割、压缩等技术，将开发阶段代码转换为高效的生产环境代码。</p><p>特点：构建优化关注<strong>打包体积</strong>、<strong>构建速度</strong>和<strong>缓存效率</strong>的三重平衡。优化策略需要贯穿开发、构建、部署全流程，形成持续优化的闭环。</p><p>示意图： 构建流程： 源码输入 → 依赖分析 → 代码转换 → 资源处理 → 打包输出 → 压缩优化 优化维度： 打包体积 ↓ 构建速度 ↑ 缓存命中率 ↑ 运行时性能 ↑</p><h2 id="bundler-selection" tabindex="-1">打包工具选型 <a class="header-anchor" href="#bundler-selection" aria-label="Permalink to &quot;打包工具选型 {#bundler-selection}&quot;">​</a></h2><p>现代打包工具形成性能导向的演进路线。Webpack 功能全面生态丰富，Vite 基于 ESM 实现极速热更新，esbuild 用 Go 编写提供超快构建速度，Rollup 擅长库打包。</p><p>特点：工具选型基于<strong>项目规模</strong>、<strong>开发体验</strong>和<strong>性能需求</strong>。大型项目需要生态完善，中小项目追求构建速度，库项目关注输出质量。</p><p>示意图： 工具性能对比： Webpack：生态完善 + 功能全面 → 构建速度中等 Vite：ESM 原生支持 → 开发环境极速 → 生产依赖打包 esbuild：Go 编写 + 并行处理 → 构建速度 10-100x 选择标准：开发体验 ←→ 构建速度 ←→ 生态需求</p><h2 id="code-splitting" tabindex="-1">代码分割策略 <a class="header-anchor" href="#code-splitting" aria-label="Permalink to &quot;代码分割策略 {#code-splitting}&quot;">​</a></h2><p>代码分割将应用拆分为按需加载的块，减少初始包体积。策略包括路由级分割、组件级分割和依赖库分离。动态 import() 实现运行时按需加载。</p><p>特点：代码分割平衡<strong>请求数量</strong>和<strong>缓存效率</strong>。过细分割增加请求开销，过粗分割失去按需加载优势。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Webpack代码分割配置</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#6A737D;">        // 第三方库分离</span></span>
<span class="line"><span style="color:#E1E4E8;">        vendor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;vendors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#6A737D;">        // 公共代码提取</span></span>
<span class="line"><span style="color:#E1E4E8;">        common: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;common&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minChunks: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          reuseExistingChunk: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#6A737D;">        // 异步公共代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        asyncCommon: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;async-common&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minChunks: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          priority: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          chunks: </span><span style="color:#9ECBFF;">&#39;async&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          reuseExistingChunk: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路由级代码分割（React）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> Home</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/Home&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> About</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/About&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> Product</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./pages/Product&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件级分割 with 预加载</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> HeavyChart</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> lazy</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">  import</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* webpackPreload: true */</span><span style="color:#9ECBFF;"> &#39;./components/HeavyChart&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="tree-shaking" tabindex="-1">树摇与无用代码消除 <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;树摇与无用代码消除 {#tree-shaking}&quot;">​</a></h2><p>树摇通过静态分析消除未使用的代码，基于 ES 模块的静态结构实现。Webpack、Rollup 等工具通过作用域分析、副作用标记和导出使用分析实现深度树摇。</p><p>特点：树摇效果依赖<strong>模块语法</strong>和<strong>副作用声明</strong>。CommonJS 动态导入难以优化，package.json 的 sideEffects 字段声明副作用文件。</p><p>示意图： 树摇过程： 模块依赖图 → 导出使用分析 → 未使用代码标记 → 安全消除 优化条件： ES 模块语法 + 无副作用 + 工具配置正确 + 依赖库支持</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json 副作用声明</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my-package&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;sideEffects&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;**/*.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;**/*.scss&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;./src/polyfill.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Webpack树摇配置</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    usedExports: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sideEffects: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    concatenateModules: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 避免阻碍树摇的模式</span></span>
<span class="line"><span style="color:#6A737D;">// 不良：动态访问</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> utils</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: functionA,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: functionB</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 使用方：utils[dynamicKey] → 无法树摇</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 优化：直接导出</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { functionA, functionB };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 副作用标记</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 明确标记无副作用</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> pureFunction</span><span style="color:#F97583;"> =</span><span style="color:#6A737D;"> /*#__PURE__*/</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> computeSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="module-resolution" tabindex="-1">模块解析优化 <a class="header-anchor" href="#module-resolution" aria-label="Permalink to &quot;模块解析优化 {#module-resolution}&quot;">​</a></h2><p>模块解析优化通过减少查找路径、配置别名和优化扩展名解析提升构建速度。Webpack 的 resolve 配置、TypeScript 的 paths 映射和别名转换工具共同作用。</p><p>特点：模块解析优化减少<strong>文件系统访问</strong>和<strong>路径计算</strong>。深层嵌套路径和大量扩展名尝试显著影响性能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Webpack模块解析优化</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 明确扩展名，减少尝试</span></span>
<span class="line"><span style="color:#E1E4E8;">    extensions: [</span><span style="color:#9ECBFF;">&#39;.ts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.tsx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;.jsx&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 配置别名，避免相对路径嵌套</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@components&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/components&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@utils&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/utils&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 明确模块搜索范围</span></span>
<span class="line"><span style="color:#E1E4E8;">    modules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;node_modules&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用绝对路径，避免向上查找</span></span>
<span class="line"><span style="color:#E1E4E8;">    symlinks: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// TypeScript路径映射</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/*&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;@components/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/components/*&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用esbuild-loader加速转换</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">tsx</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: </span><span style="color:#9ECBFF;">&#39;esbuild-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;tsx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          target: </span><span style="color:#9ECBFF;">&#39;es2015&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="asset-compression" tabindex="-1">资源压缩与优化 <a class="header-anchor" href="#asset-compression" aria-label="Permalink to &quot;资源压缩与优化 {#asset-compression}&quot;">​</a></h2><p>资源压缩通过算法减少文件体积，提升传输效率。JavaScript 压缩混淆变量名，CSS 压缩合并规则，图片转换现代格式，字体子集化移除未使用字符。</p><p>特点：资源压缩平衡<strong>压缩率</strong>和<strong>处理成本</strong>。Brotli 比 Gzip 压缩率更高但成本更大，图片格式选择考虑浏览器支持。</p><p>示意图： 压缩工具链： JavaScript：Terser → 变量混淆 + 死代码消除 CSS：CSSNano → 规则合并 + 属性优化 图片：Sharp → 格式转换 + 尺寸调整 + 质量压缩 字体：fonttools → 子集化 + 格式转换</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Webpack压缩配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> TerserPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;terser-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CssMinimizerPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="color:#6A737D;">      // JavaScript压缩</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        parallel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          compress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_console: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 移除console</span></span>
<span class="line"><span style="color:#E1E4E8;">            drop_debugger: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 移除debugger</span></span>
<span class="line"><span style="color:#E1E4E8;">            pure_funcs: [</span><span style="color:#9ECBFF;">&#39;console.log&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 移除特定函数</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          mangle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            safari10: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">        // Safari 10兼容</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      // CSS压缩</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> CssMinimizerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimizerOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          preset: [</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;default&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              discardComments: { removeAll: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              normalizeWhitespace: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图片优化配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ImageMinimizerPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image-minimizer-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;asset&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: ImageMinimizerPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              minimizer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                implementation: ImageMinimizerPlugin.squooshMinify,</span></span>
<span class="line"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  encodeOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    mozjpeg: { quality: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    webp: { quality: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    avif: { quality: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="caching-strategy" tabindex="-1">缓存策略优化 <a class="header-anchor" href="#caching-strategy" aria-label="Permalink to &quot;缓存策略优化 {#caching-strategy}&quot;">​</a></h2><p>构建缓存通过持久化中间结果避免重复工作。Webpack5 持久化缓存、Loader 缓存、插件缓存和依赖缓存共同作用。合理的缓存策略提升增量构建速度。</p><p>特点：缓存优化关注<strong>命中率</strong>和<strong>失效策略</strong>。文件内容哈希确保缓存正确性，环境隔离避免配置污染。</p><p>示意图： 缓存层次： 编译器缓存 → Loader 缓存 → 插件缓存 → 依赖缓存 缓存键：文件内容哈希 + 配置哈希 + 环境变量 失效条件：源码变化 | 配置变化 | 依赖更新</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Webpack5持久化缓存</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  cache: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;filesystem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    buildDependencies: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      config: [__filename]  </span><span style="color:#6A737D;">// 配置变化时失效</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    version: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">process</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">env</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#6A737D;"> // 环境隔离</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Babel Loader缓存</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">jsx</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 启用缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 禁用压缩提升速度</span></span>
<span class="line"><span style="color:#E1E4E8;">            configFile: </span><span style="color:#79B8FF;">false</span><span style="color:#6A737D;">          // 避免配置文件搜索</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ESLint缓存</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ESLintPlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;eslint-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> ESLintPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheLocation: </span><span style="color:#9ECBFF;">&#39;.eslintcache&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义缓存策略</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BuildCacheManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.hitCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.missCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于内容的缓存键</span></span>
<span class="line"><span style="color:#B392F0;">  generateCacheKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> crypto</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;crypto&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;md5&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    hash.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(content);</span></span>
<span class="line"><span style="color:#E1E4E8;">    hash.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(options));</span></span>
<span class="line"><span style="color:#E1E4E8;">    hash.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hash.</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存获取与设置</span></span>
<span class="line"><span style="color:#B392F0;">  get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> entry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (entry </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> entry.expiry) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.hitCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> entry.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.missCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ttl</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 3600000</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 默认1小时</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      expiry: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ttl</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存统计</span></span>
<span class="line"><span style="color:#B392F0;">  getStats</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hitRate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.hitCount </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hitCount </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.missCount);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      hitRate: Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(hitRate </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cache.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">      hits: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hitCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">      misses: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.missCount</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="dependency-optimization" tabindex="-1">依赖优化 <a class="header-anchor" href="#dependency-optimization" aria-label="Permalink to &quot;依赖优化 {#dependency-optimization}&quot;">​</a></h2><p>依赖优化通过分析第三方库使用模式，减少不必要的代码包含。策略包括按需引入、CDN 外部化、依赖预编译和版本锁定。</p><p>特点：依赖优化关注<strong>使用粒度</strong>和<strong>版本管理</strong>。Tree Shaking 对依赖库有效，但需要库本身支持 ES 模块和副作用标记。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 外部化依赖（CDN引入）</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  externals: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    react: </span><span style="color:#9ECBFF;">&#39;React&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;react-dom&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ReactDOM&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lodash: </span><span style="color:#9ECBFF;">&#39;_&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按需引入（antd示例）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Button, Table } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;antd&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用babel-plugin-import实现按需引入</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;plugins&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&quot;import&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;libraryName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;antd&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;libraryDirectory&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;es&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 依赖预构建（Vite）</span></span>
<span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimizeDeps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    include: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;react&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;react-dom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    exclude: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;some-big-library&#39;</span><span style="color:#6A737D;"> // 手动排除</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 依赖分析工具</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">BundleAnalyzerPlugin</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack-bundle-analyzer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> BundleAnalyzerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      analyzerMode: </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      openAnalyzer: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 版本锁定与依赖提升</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;resolutions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;**/lodash&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^4.17.21&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;**/typescript&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^4.5.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="build-performance" tabindex="-1">构建性能监控 <a class="header-anchor" href="#build-performance" aria-label="Permalink to &quot;构建性能监控 {#build-performance}&quot;">​</a></h2><p>构建性能监控通过指标收集和分析识别优化机会。监控构建时间、包体积变化、缓存命中率和资源变化趋势，建立性能基准和警报机制。</p><p>特点：构建监控关注<strong>趋势变化</strong>和<strong>异常检测</strong>。自动化监控集成 CI/CD，及时发现问题并定位原因。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 构建时间监控</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BuildPerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 标记构建阶段开始</span></span>
<span class="line"><span style="color:#B392F0;">  markStageStart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stage</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(stage, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 标记构建阶段结束</span></span>
<span class="line"><span style="color:#B392F0;">  markStageEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stage</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metric</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(stage);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (metric) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metric.end </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      metric.duration </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> metric.end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> metric.start;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成构建报告</span></span>
<span class="line"><span style="color:#B392F0;">  generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> totalDuration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.startTime;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stages</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration: data.duration,</span></span>
<span class="line"><span style="color:#E1E4E8;">        percentage: (data.duration </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalDuration </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.duration </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.duration);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalDuration,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stages,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 包体积监控</span></span>
<span class="line"><span style="color:#B392F0;">  analyzeBundleSize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stats</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> assets</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stats.assets </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bundleSizes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    assets.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">asset</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> size</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> asset.size;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> gzipSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">estimateGzipSize</span><span style="color:#E1E4E8;">(asset);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      bundleSizes[asset.name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        size,</span></span>
<span class="line"><span style="color:#E1E4E8;">        gzipSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getAssetType</span><span style="color:#E1E4E8;">(asset.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> bundleSizes;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 体积变化检测</span></span>
<span class="line"><span style="color:#B392F0;">  detectSizeChanges</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">current</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">previous</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> changes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(current).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">assetName</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentSize</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> current[assetName].gzipSize;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> previousSize</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> previous?.[assetName]?.gzipSize;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (previousSize </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> currentSize </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> previousSize </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1.1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        changes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          asset: assetName,</span></span>
<span class="line"><span style="color:#E1E4E8;">          change: </span><span style="color:#9ECBFF;">&#39;+&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">((currentSize </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> previousSize) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;KB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          percentage: </span><span style="color:#9ECBFF;">&#39;+&#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> ((currentSize </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> previousSize </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> changes;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Webpack性能分析插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> SpeedMeasurePlugin</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;speed-measure-webpack-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> smp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SpeedMeasurePlugin</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> smp.</span><span style="color:#B392F0;">wrap</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">  // webpack配置</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// CI集成示例</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#B392F0;">      apply</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        compiler.hooks.done.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;BuildMetricsPlugin&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">stats</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            buildTime: stats.endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> stats.startTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">            bundleSize: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTotalSize</span><span style="color:#E1E4E8;">(stats),</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunkCount: stats.compilation.chunks.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">            moduleCount: stats.compilation.modules.size</span></span>
<span class="line"><span style="color:#E1E4E8;">          };</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#6A737D;">          // 发送到监控系统</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendMetrics</span><span style="color:#E1E4E8;">(metrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="environment-specific" tabindex="-1">环境特定优化 <a class="header-anchor" href="#environment-specific" aria-label="Permalink to &quot;环境特定优化 {#environment-specific}&quot;">​</a></h2><p>不同环境需要不同的构建策略。开发环境注重构建速度和调试能力，生产环境关注代码体积和运行时性能，测试环境需要代码覆盖率和 mock 支持。</p><p>特点：环境优化基于<strong>目标需求</strong>配置构建参数。通过环境变量、配置文件和条件编译实现差异化构建。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 环境检测与配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> isProduction</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> isDevelopment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> isAnalyze</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">ANALYZE</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;true&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件配置</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: isProduction </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: isProduction </span></span>
<span class="line"><span style="color:#F97583;">    ?</span><span style="color:#9ECBFF;"> &#39;source-map&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">    :</span><span style="color:#9ECBFF;"> &#39;eval-cheap-module-source-map&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimize: isProduction,</span></span>
<span class="line"><span style="color:#6A737D;">    // 开发环境不压缩</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(isDevelopment </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      removeAvailableModules: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      removeEmptyChunks: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitChunks: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#6A737D;">    // 仅开发环境</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(isDevelopment </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">HotModuleReplacementPlugin</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> []),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 仅生产环境  </span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(isProduction </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> CompressionPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        algorithm: </span><span style="color:#9ECBFF;">&#39;brotliCompress&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> []),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析模式</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">(isAnalyze </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> BundleAnalyzerPlugin</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [])</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境变量注入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> webpack</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#E1E4E8;"> webpack.</span><span style="color:#B392F0;">DefinePlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;process.env.NODE_ENV&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;process.env.API_URL&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">API_URL</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;process.env.DEBUG&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(isDevelopment)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多环境配置文件</span></span>
<span class="line"><span style="color:#6A737D;">// webpack.config.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> baseConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基础配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> envConfigs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    development: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.dev&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    production: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.prod&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    staging: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.staging&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> merge</span><span style="color:#E1E4E8;">(baseConfig, envConfigs[env] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {});</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> getConfig</span><span style="color:#E1E4E8;">(env);</span></span></code></pre></div><h2 id="modern-bundler-migration" tabindex="-1">现代构建工具迁移 <a class="header-anchor" href="#modern-bundler-migration" aria-label="Permalink to &quot;现代构建工具迁移 {#modern-bundler-migration}&quot;">​</a></h2><p>从传统工具向现代构建工具迁移提升构建性能。Webpack 向 Vite 迁移获得极速热更新，Babel 向 SWC 迁移提升转译速度，Terser 向 esbuild 迁移加速压缩。</p><p>特点：迁移策略考虑<strong>兼容性</strong>和<strong>收益成本</strong>。渐进式迁移降低风险，性能对比验证收益。</p><p>示意图： 迁移路径： Webpack → Vite：开发体验极大提升 Babel → SWC：转译速度 5-20x 提升 Terser → esbuild：压缩速度 10-100x 提升 迁移评估：构建速度 + 包体积 + 功能完整性</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Vite配置示例</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> react </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vitejs/plugin-react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">react</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建优化</span></span>
<span class="line"><span style="color:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: </span><span style="color:#9ECBFF;">&#39;es2015&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minify: </span><span style="color:#9ECBFF;">&#39;esbuild&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourcemap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 代码分割</span></span>
<span class="line"><span style="color:#E1E4E8;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        manualChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          vendor: [</span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;react-dom&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          utils: [</span><span style="color:#9ECBFF;">&#39;lodash&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 依赖优化</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimizeDeps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    include: [</span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;react-dom&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// SWC替代Babel</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(js</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jsx</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ts</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">tsx)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;swc-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            jsc: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                syntax: </span><span style="color:#9ECBFF;">&#39;typescript&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                tsx: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              transform: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                react: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  runtime: </span><span style="color:#9ECBFF;">&#39;automatic&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// esbuild压缩替代Terser</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">ESBuildMinifyPlugin</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;esbuild-loader&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> ESBuildMinifyPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;es2015&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        css: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">  // 同时压缩CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 迁移评估脚本</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MigrationEvaluator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> compareBuildPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> traditionalStats</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">runTraditionalBuild</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modernStats</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">runModernBuild</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timeImprovement: traditionalStats.time </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> modernStats.time,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sizeImprovement: traditionalStats.size </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> modernStats.size,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheEfficiency: modernStats.cacheHitRate</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 兼容性检查</span></span>
<span class="line"><span style="color:#B392F0;">  checkCompatibility</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查Webpack特定功能</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">usesWebpackSpecificFeatures</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;使用了Webpack特有功能，需要适配&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查Node.js版本要求</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.version </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;"> &#39;v14.0.0&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;需要升级Node.js版本&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> issues;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,50)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
