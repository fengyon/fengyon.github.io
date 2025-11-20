import{_ as a,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const d=JSON.parse('{"title":"umijs 入门","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 UmiJS","slug":"什么是-umijs","link":"#什么是-umijs","children":[]},{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"配置说明","slug":"配置说明","link":"#配置说明","children":[]},{"level":2,"title":"路由系统","slug":"路由系统","link":"#路由系统","children":[{"level":3,"title":"约定式路由","slug":"约定式路由","link":"#约定式路由","children":[]},{"level":3,"title":"配置式路由","slug":"配置式路由","link":"#配置式路由","children":[]}]},{"level":2,"title":"样式和静态资源","slug":"样式和静态资源","link":"#样式和静态资源","children":[{"level":3,"title":"样式处理","slug":"样式处理","link":"#样式处理","children":[]},{"level":3,"title":"静态资源","slug":"静态资源","link":"#静态资源","children":[]}]},{"level":2,"title":"数据流方案","slug":"数据流方案","link":"#数据流方案","children":[]},{"level":2,"title":"构建和部署","slug":"构建和部署","link":"#构建和部署","children":[]}],"relativePath":"framework/umijs/start.md","filePath":"framework/umijs/start.md"}'),e={name:"framework/umijs/start.md"};function o(t,s,c,r,i,E){return l(),n("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/umijs/start.md for this page in Markdown format</div><h1 id="umijs-入门" tabindex="-1">umijs 入门 <a class="header-anchor" href="#umijs-入门" aria-label="Permalink to &quot;umijs 入门&quot;">​</a></h1><p>UmiJS 是一个插件化的企业级前端应用框架，以路由为基础，同时支持配置式路由和约定式路由，并配以完善的插件体系，帮助开发者快速开发 React 应用。</p><h2 id="什么是-umijs" tabindex="-1">什么是 UmiJS <a class="header-anchor" href="#什么是-umijs" aria-label="Permalink to &quot;什么是 UmiJS&quot;">​</a></h2><p>Umi，中文发音为“乌米”，是一个可扩展的企业级前端应用框架。它内置了路由、构建、部署、测试等功能，仅需一个依赖即可上手开发。Umi 实现了完整的生命周期，并使其插件化，内部功能全由插件完成。</p><p><strong>主要特性：</strong></p><ul><li>开箱即用，内置 React、React Router 等</li><li>完备的路由系统，同时支持配置式路由和约定式路由</li><li>丰富的插件生态系统，覆盖从源码到构建产物的每个生命周期</li><li>高性能，支持以路由为单元的代码分割</li><li>与 dva 数据流深入融合</li></ul><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><p>在开始使用 UmiJS 前，需要准备以下环境：</p><ul><li><strong>Node.js</strong>：版本需 10.13 或以上</li><li><strong>包管理器</strong>：推荐使用 yarn 或 npm</li></ul><p>检查 Node.js 版本：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">node</span><span style="color:#79B8FF;"> -v</span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>使用以下命令创建新的 Umi 项目：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 创建项目目录</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#9ECBFF;"> umi-app</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#9ECBFF;"> umi-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 Umi 项目</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#9ECBFF;"> create</span><span style="color:#9ECBFF;"> @umijs/umi-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动开发服务器</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#9ECBFF;"> start</span></span></code></pre></div><p>执行完上述命令后，在浏览器中访问 <code>http://localhost:8000</code> 即可查看应用。</p><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><p>一个典型的 Umi 项目目录结构如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── .umirc.ts          # 配置文件</span></span>
<span class="line"><span>├── .env               # 环境变量</span></span>
<span class="line"><span>├── dist               # 构建产物</span></span>
<span class="line"><span>├── mock               # mock 数据</span></span>
<span class="line"><span>├── public             # 静态资源</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── .umi           # 临时文件</span></span>
<span class="line"><span>    ├── layouts        # 全局布局</span></span>
<span class="line"><span>    │   └── index.tsx</span></span>
<span class="line"><span>    ├── pages          # 页面组件</span></span>
<span class="line"><span>    │   ├── index.less</span></span>
<span class="line"><span>    │   └── index.tsx</span></span>
<span class="line"><span>    └── app.ts         # 运行时配置</span></span></code></pre></div><p><strong>关键文件说明：</strong></p><ul><li><code>.umirc.ts</code>：Umi 配置文件，包含内置功能和插件的配置</li><li><code>src/pages</code>：所有路由组件存放目录</li><li><code>src/layouts</code>：约定式路由时的全局布局文件</li><li><code>src/app.ts</code>：运行时配置文件</li></ul><h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><p>Umi 采用配置化的方式，常见的配置项如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .umirc.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;umi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  nodeModulesTransform: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, component: </span><span style="color:#9ECBFF;">&#39;@/pages/index&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;hash&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 路由类型</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  dva: { </span><span style="color:#6A737D;">// dva 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    immer: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hmr: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  proxy: { </span><span style="color:#6A737D;">// 代理配置</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;target&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;http://localhost:8000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;changeOrigin&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  dynamicImport: { </span><span style="color:#6A737D;">// 动态导入</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading: </span><span style="color:#9ECBFF;">&#39;@/components/Loading&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="路由系统" tabindex="-1">路由系统 <a class="header-anchor" href="#路由系统" aria-label="Permalink to &quot;路由系统&quot;">​</a></h2><p>Umi 提供了两种路由方式：<strong>约定式路由</strong>和<strong>配置式路由</strong>。</p><h3 id="约定式路由" tabindex="-1">约定式路由 <a class="header-anchor" href="#约定式路由" aria-label="Permalink to &quot;约定式路由&quot;">​</a></h3><p>Umi 会根据 <code>src/pages</code> 目录的结构自动生成路由配置。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>src/pages</span></span>
<span class="line"><span>  ├── index.tsx    # 对应路由 /</span></span>
<span class="line"><span>  └── users</span></span>
<span class="line"><span>      ├── index.tsx # 对应路由 /users</span></span>
<span class="line"><span>      └── list.tsx  # 对应路由 /users/list</span></span></code></pre></div><h3 id="配置式路由" tabindex="-1">配置式路由 <a class="header-anchor" href="#配置式路由" aria-label="Permalink to &quot;配置式路由&quot;">​</a></h3><p>在 <code>.umirc.ts</code> 中直接配置路由：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">routes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { exact: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, component: </span><span style="color:#9ECBFF;">&#39;@/pages/index&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { exact: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, path: </span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">, component: </span><span style="color:#9ECBFF;">&#39;@/pages/users&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: </span><span style="color:#9ECBFF;">&#39;@/layouts/admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    routes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { path: </span><span style="color:#9ECBFF;">&#39;/admin/user&#39;</span><span style="color:#E1E4E8;">, component: </span><span style="color:#9ECBFF;">&#39;@/pages/admin/user&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">],</span></span></code></pre></div><h2 id="样式和静态资源" tabindex="-1">样式和静态资源 <a class="header-anchor" href="#样式和静态资源" aria-label="Permalink to &quot;样式和静态资源&quot;">​</a></h2><h3 id="样式处理" tabindex="-1">样式处理 <a class="header-anchor" href="#样式处理" aria-label="Permalink to &quot;样式处理&quot;">​</a></h3><p>Umi 内置支持 CSS 和 Less，可以自动启用 CSS Modules：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* index.less */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在组件中使用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> styles </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./index.less&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{styles.container}&gt;Hello Umi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="静态资源" tabindex="-1">静态资源 <a class="header-anchor" href="#静态资源" aria-label="Permalink to &quot;静态资源&quot;">​</a></h3><p>Umi 提供了多种方式处理静态资源：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 方式一：导入方式</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> logo </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@/assets/logo.png&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">img</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{logo} /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方式二：public 目录</span></span>
<span class="line"><span style="color:#6A737D;">// 将资源放在 public 目录下，可直接通过绝对路径访问</span></span></code></pre></div><p>Umi 默认将 <code>@</code> 映射到 <code>src</code> 目录，方便模块引入。</p><h2 id="数据流方案" tabindex="-1">数据流方案 <a class="header-anchor" href="#数据流方案" aria-label="Permalink to &quot;数据流方案&quot;">​</a></h2><p>Umi 内置了 dva，提供完整的数据流解决方案。一个典型的 model 结构如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// src/models/user.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  namespace: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  reducers: {</span></span>
<span class="line"><span style="color:#B392F0;">    save</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">state, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">payload };</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  effects: {</span></span>
<span class="line"><span style="color:#F97583;">    *</span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;"> }, { </span><span style="color:#FFAB70;">call</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">put</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> yield</span><span style="color:#B392F0;"> call</span><span style="color:#E1E4E8;">(queryUsers, payload);</span></span>
<span class="line"><span style="color:#F97583;">      yield</span><span style="color:#B392F0;"> put</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;save&#39;</span><span style="color:#E1E4E8;">, payload: { list: response } });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p><strong>dva 数据流示意图：</strong></p><p>页面 -&gt; 触发 action -&gt; dispatch -&gt; model(effects) -&gt; service (异步请求) -&gt; effects(put) -&gt; reducers -&gt; 更新 state -&gt; 连接页面</p><h2 id="构建和部署" tabindex="-1">构建和部署 <a class="header-anchor" href="#构建和部署" aria-label="Permalink to &quot;构建和部署&quot;">​</a></h2><p>使用以下命令构建和部署项目：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 构建项目</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地验证构建结果</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#9ECBFF;"> global</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> serve</span></span>
<span class="line"><span style="color:#B392F0;">serve</span><span style="color:#9ECBFF;"> ./dist</span></span></code></pre></div><p>构建完成后，所有静态资源会生成在 <code>dist</code> 目录中，可以将其部署到任何静态文件服务器。</p><p>通过以上介绍，你应该已经对 UmiJS 有了基本了解，可以开始使用 UmiJS 开发 React 应用了。</p>`,51)])])}const u=a(e,[["render",o]]);export{d as __pageData,u as default};
