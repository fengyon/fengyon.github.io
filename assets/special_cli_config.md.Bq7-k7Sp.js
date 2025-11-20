import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"配置管理","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 配置管理概述","slug":"node-js-配置管理概述","link":"#node-js-配置管理概述","children":[]},{"level":2,"title":"配置管理的重要性","slug":"配置管理的重要性","link":"#配置管理的重要性","children":[{"level":3,"title":"环境适配与安全","slug":"环境适配与安全","link":"#环境适配与安全","children":[]},{"level":3,"title":"现代应用架构需求","slug":"现代应用架构需求","link":"#现代应用架构需求","children":[]}]},{"level":2,"title":"常用配置管理库","slug":"常用配置管理库","link":"#常用配置管理库","children":[{"level":3,"title":"Node-Config","slug":"node-config","link":"#node-config","children":[]},{"level":3,"title":"Konphyg","slug":"konphyg","link":"#konphyg","children":[]},{"level":3,"title":"Config-Able","slug":"config-able","link":"#config-able","children":[]}]},{"level":2,"title":"原生配置管理方案","slug":"原生配置管理方案","link":"#原生配置管理方案","children":[{"level":3,"title":"环境变量管理","slug":"环境变量管理","link":"#环境变量管理","children":[]},{"level":3,"title":"命令行参数解析","slug":"命令行参数解析","link":"#命令行参数解析","children":[]}]},{"level":2,"title":"高级配置管理技术","slug":"高级配置管理技术","link":"#高级配置管理技术","children":[{"level":3,"title":"配置验证与默认值","slug":"配置验证与默认值","link":"#配置验证与默认值","children":[]},{"level":3,"title":"动态配置更新","slug":"动态配置更新","link":"#动态配置更新","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"多环境配置策略","slug":"多环境配置策略","link":"#多环境配置策略","children":[]},{"level":3,"title":"配置加密与安全","slug":"配置加密与安全","link":"#配置加密与安全","children":[]}]},{"level":2,"title":"现代化配置管理特性","slug":"现代化配置管理特性","link":"#现代化配置管理特性","children":[{"level":3,"title":"JSONC 和 MJS 支持","slug":"jsonc-和-mjs-支持","link":"#jsonc-和-mjs-支持","children":[]}]}],"relativePath":"special/cli/config.md","filePath":"special/cli/config.md"}'),o={name:"special/cli/config.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/config.md for this page in Markdown format</div><h1 id="配置管理" tabindex="-1">配置管理 <a class="header-anchor" href="#配置管理" aria-label="Permalink to &quot;配置管理&quot;">​</a></h1><h2 id="node-js-配置管理概述" tabindex="-1">Node.js 配置管理概述 <a class="header-anchor" href="#node-js-配置管理概述" aria-label="Permalink to &quot;Node.js 配置管理概述&quot;">​</a></h2><p>在 Node.js 应用开发中，配置管理是确保应用在不同环境中正确运行的关键环节。配置管理涉及对应用设置、参数和外部依赖地址等信息的统一管理，使应用能够灵活适应开发、测试、生产等不同环境。</p><p>配置管理的核心价值在于实现<strong>代码与配置的分离</strong>，避免将环境特定的信息硬编码在代码中。现代 Node.js 应用通常采用多层配置策略，按照优先级从高到低排列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>命令行参数 → 环境变量 → 环境配置文件 → 默认配置文件</span></span></code></pre></div><h2 id="配置管理的重要性" tabindex="-1">配置管理的重要性 <a class="header-anchor" href="#配置管理的重要性" aria-label="Permalink to &quot;配置管理的重要性&quot;">​</a></h2><h3 id="环境适配与安全" tabindex="-1">环境适配与安全 <a class="header-anchor" href="#环境适配与安全" aria-label="Permalink to &quot;环境适配与安全&quot;">​</a></h3><p>配置管理使得应用能够无缝运行在不同环境中，而无需修改代码。通过将敏感信息 (如数据库密码、API 密钥) 移出代码库，配置管理显著提高了应用的安全性。当需要调整应用行为时，只需修改配置而无需重新部署代码。</p><h3 id="现代应用架构需求" tabindex="-1">现代应用架构需求 <a class="header-anchor" href="#现代应用架构需求" aria-label="Permalink to &quot;现代应用架构需求&quot;">​</a></h3><p>在微服务、容器化和云原生架构中，配置管理变得更加重要。动态配置更新、配置中心化和配置版本控制成为必备特性，这些功能帮助团队更高效地协作和运维。</p><h2 id="常用配置管理库" tabindex="-1">常用配置管理库 <a class="header-anchor" href="#常用配置管理库" aria-label="Permalink to &quot;常用配置管理库&quot;">​</a></h2><h3 id="node-config" tabindex="-1">Node-Config <a class="header-anchor" href="#node-config" aria-label="Permalink to &quot;Node-Config&quot;">​</a></h3><p>Node-Config 是一个功能全面的配置管理库，特别适合大型 Node.js 应用。它支持多种文件格式和复杂的分层配置结构。</p><h4 id="基础使用方法" tabindex="-1">基础使用方法 <a class="header-anchor" href="#基础使用方法" aria-label="Permalink to &quot;基础使用方法&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/default.mjs</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;My Application&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">5432</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;myapp_dev&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  logging: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    file: </span><span style="color:#9ECBFF;">&#39;./logs/app.log&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// config/production.mjs  </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">80</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;prod-db.company.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;myapp_prod&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  logging: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// app.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;config&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`应用名称: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;app.name&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`数据库主机: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;database.host&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`日志级别: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;logging.level&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境检查</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (config.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app.env&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;运行在生产环境&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="高级特性" tabindex="-1">高级特性 <a class="header-anchor" href="#高级特性" aria-label="Permalink to &quot;高级特性&quot;">​</a></h4><p>Node-Config 支持配置文件继承和深度合并，允许在不同环境间共享通用配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> defaultConfig </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./default.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  ...</span><span style="color:#E1E4E8;">defaultConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: {</span></span>
<span class="line"><span style="color:#F97583;">    ...</span><span style="color:#E1E4E8;">defaultConfig.database,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;myapp_test&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  testing: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    reporters: [</span><span style="color:#9ECBFF;">&#39;spec&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;coverage&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 动态配置访问</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;config&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 检查配置是否存在</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (config.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;featureFlags.newDashboard&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新仪表板功能已启用&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有可用配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> allConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> config.util.</span><span style="color:#B392F0;">toObject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;完整配置对象:&#39;</span><span style="color:#E1E4E8;">, allConfig);</span></span></code></pre></div><h3 id="konphyg" tabindex="-1">Konphyg <a class="header-anchor" href="#konphyg" aria-label="Permalink to &quot;Konphyg&quot;">​</a></h3><p>Konphyg 是一个轻量级的配置管理库，支持基于环境的配置继承，采用简洁的 API 设计。</p><h4 id="基础配置结构" tabindex="-1">基础配置结构 <a class="header-anchor" href="#基础配置结构" aria-label="Permalink to &quot;基础配置结构&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/default.mjs</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;0.0.0.0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  features: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    caching: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    compression: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// config/production.mjs</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">80</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  features: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    compression: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// app.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> konphyg </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;konphyg&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> konphyg</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./config&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> appConfig</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> config</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`服务器端口: \${</span><span style="color:#E1E4E8;">appConfig</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">server</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`缓存功能: \${</span><span style="color:#E1E4E8;">appConfig</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">features</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">caching</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;启用&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;禁用&#39;}\`</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h4 id="环境特定配置" tabindex="-1">环境特定配置 <a class="header-anchor" href="#环境特定配置" aria-label="Permalink to &quot;环境特定配置&quot;">​</a></h4><p>Konphyg 支持环境特定的配置文件，自动根据 NODE_ENV 环境变量加载对应配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/database.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;development&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;database&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;app_dev&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;test&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;test-db&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;database&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;app_test&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;production&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;prod-db&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;database&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;app_prod&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用环境配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dbConfig</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> config</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;database&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`数据库: \${</span><span style="color:#E1E4E8;">dbConfig</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">database</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="config-able" tabindex="-1">Config-Able <a class="header-anchor" href="#config-able" aria-label="Permalink to &quot;Config-Able&quot;">​</a></h3><p>Config-Able 基于 nconf 构建，提供灵活的配置源管理和优先级控制。</p><h4 id="多层配置源" tabindex="-1">多层配置源 <a class="header-anchor" href="#多层配置源" aria-label="Permalink to &quot;多层配置源&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config-manager.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> configAble </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;config-able&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义默认配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> defaults</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;MyApp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    version: </span><span style="color:#9ECBFF;">&#39;1.0.0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  cache: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ttl: </span><span style="color:#79B8FF;">3600</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义覆盖配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> overrides</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: process.env.</span><span style="color:#79B8FF;">PORT</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> 3000</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> configAble</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&#39;./config&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  defaults: defaults,</span></span>
<span class="line"><span style="color:#E1E4E8;">  overrides: overrides</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用配置</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`应用: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;app:name&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`端口: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;app:port&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`缓存TTL: \${</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">get</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;cache:ttl&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置新配置</span></span>
<span class="line"><span style="color:#E1E4E8;">config.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cache:maxSize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;500MB&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 保存配置到文件</span></span>
<span class="line"><span style="color:#6A737D;">// config.save(&#39;local.json&#39;);</span></span></code></pre></div><h2 id="原生配置管理方案" tabindex="-1">原生配置管理方案 <a class="header-anchor" href="#原生配置管理方案" aria-label="Permalink to &quot;原生配置管理方案&quot;">​</a></h2><h3 id="环境变量管理" tabindex="-1">环境变量管理 <a class="header-anchor" href="#环境变量管理" aria-label="Permalink to &quot;环境变量管理&quot;">​</a></h3><p>环境变量是配置管理中最基础也是最常用的方式，Node.js 原生支持环境变量访问：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// env-config.mjs</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> EnvConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> process.env[key] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> defaultValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(value, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> defaultValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getBool</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;true&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> defaultValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> getArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> defaultValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dbConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: EnvConfig.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DB_HOST&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: EnvConfig.</span><span style="color:#B392F0;">getInt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DB_PORT&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5432</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl: EnvConfig.</span><span style="color:#B392F0;">getBool</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DB_SSL&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  poolSize: EnvConfig.</span><span style="color:#B392F0;">getInt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DB_POOL_SIZE&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库配置:&#39;</span><span style="color:#E1E4E8;">, dbConfig);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 命令行启动示例:</span></span>
<span class="line"><span style="color:#6A737D;">// DB_HOST=prod-server DB_PORT=5433 DB_SSL=true node env-config.mjs</span></span></code></pre></div><h3 id="命令行参数解析" tabindex="-1">命令行参数解析 <a class="header-anchor" href="#命令行参数解析" aria-label="Permalink to &quot;命令行参数解析&quot;">​</a></h3><p>结合命令行参数进行动态配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cli-config.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseArgs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:util&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;config&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;./config/default.json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;env&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;e&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;development&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;port&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;p&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;verbose&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    short: </span><span style="color:#9ECBFF;">&#39;v&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CLIConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">values</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseArgs</span><span style="color:#E1E4E8;">({ options });</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.values </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> values;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.values[key];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.values };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cliConfig</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CLIConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;命令行配置:&#39;</span><span style="color:#E1E4E8;">, cliConfig.</span><span style="color:#B392F0;">getAll</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例:</span></span>
<span class="line"><span style="color:#6A737D;">// node cli-config.mjs --env production --port 8080 --verbose</span></span>
<span class="line"><span style="color:#6A737D;">// node cli-config.mjs -e staging -p 3000 -v</span></span></code></pre></div><h2 id="高级配置管理技术" tabindex="-1">高级配置管理技术 <a class="header-anchor" href="#高级配置管理技术" aria-label="Permalink to &quot;高级配置管理技术&quot;">​</a></h2><h3 id="配置验证与默认值" tabindex="-1">配置验证与默认值 <a class="header-anchor" href="#配置验证与默认值" aria-label="Permalink to &quot;配置验证与默认值&quot;">​</a></h3><p>确保配置的完整性和正确性：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config-validator.mjs</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConfigValidator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> validate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">schema</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> errors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">rules</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(schema)) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> config[key];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 必需字段检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rules.required </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        errors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`配置项 &#39;\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}&#39; 是必需的\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 类型检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> rules.type </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> rules.type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        errors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`配置项 &#39;\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}&#39; 应该是 \${</span><span style="color:#E1E4E8;">rules</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">} 类型\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 枚举值检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rules.enum </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">rules.enum.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        errors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`配置项 &#39;\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}&#39; 的值不在允许的范围内: \${</span><span style="color:#E1E4E8;">rules</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">enum</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 自定义验证函数</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rules.validate </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">rules.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        errors.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`配置项 &#39;\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}&#39; 的值验证失败\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (errors.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`配置验证失败:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">errors</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置模式定义</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> databaseSchema</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl: { required: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  poolSize: { </span></span>
<span class="line"><span style="color:#E1E4E8;">    required: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用验证</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dbConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: </span><span style="color:#79B8FF;">5432</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;myapp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ConfigValidator.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">(dbConfig, databaseSchema);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 配置验证通过&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 配置错误:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="动态配置更新" tabindex="-1">动态配置更新 <a class="header-anchor" href="#动态配置更新" aria-label="Permalink to &quot;动态配置更新&quot;">​</a></h3><p>实现运行时配置热更新：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// dynamic-config.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { watchFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> EventEmitter </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DynamicConfig</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">configPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.configPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> configPath;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">watchChanges</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  loadConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 实际应用中这里会从文件系统读取配置</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> newConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastUpdated: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> changed</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(newConfig) </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newConfig;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (changed) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;configChanged&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;configError&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  watchChanges</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监听文件变化</span></span>
<span class="line"><span style="color:#B392F0;">    watchFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.configPath, (</span><span style="color:#FFAB70;">curr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (curr.mtime </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> prev.mtime) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;检测到配置文件变化，重新加载...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.config[key] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;configUpdated&#39;</span><span style="color:#E1E4E8;">, { key, value });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用动态配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> dynamicConfig</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DynamicConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./config/app.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听配置变化</span></span>
<span class="line"><span style="color:#E1E4E8;">dynamicConfig.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;configChanged&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">newConfig</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置已更新:&#39;</span><span style="color:#E1E4E8;">, newConfig);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">dynamicConfig.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;configError&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;配置加载错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置配置项</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dynamicConfig.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;featureToggles&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    newUI: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    experimental: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="多环境配置策略" tabindex="-1">多环境配置策略 <a class="header-anchor" href="#多环境配置策略" aria-label="Permalink to &quot;多环境配置策略&quot;">​</a></h3><p>在实际项目中管理不同环境的配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config-builder.mjs</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConfigBuilder</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">environment</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.environment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> environment;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 加载基础配置</span></span>
<span class="line"><span style="color:#B392F0;">  loadDefaults</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: process.env.</span><span style="color:#79B8FF;">APP_NAME</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;MyApp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        env: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.environment</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        port: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(process.env.</span><span style="color:#79B8FF;">PORT</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        host: process.env.</span><span style="color:#79B8FF;">HOST</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;localhost&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 加载环境特定配置</span></span>
<span class="line"><span style="color:#B392F0;">  loadEnvironmentConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> envConfigs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      development: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logging: { level: </span><span style="color:#9ECBFF;">&#39;debug&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        database: { debug: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      test: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logging: { level: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        database: { pool: { min: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      production: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logging: { level: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        database: { pool: { min: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config, envConfigs[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.environment] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {});</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 应用环境变量覆盖</span></span>
<span class="line"><span style="color:#B392F0;">  applyEnvironmentOverrides</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 数据库配置</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">DATABASE_URL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.config.database </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config.database,</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: process.env.</span><span style="color:#79B8FF;">DATABASE_URL</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // Redis配置</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">REDIS_URL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.config.redis </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { url: process.env.</span><span style="color:#79B8FF;">REDIS_URL</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 构建最终配置</span></span>
<span class="line"><span style="color:#B392F0;">  build</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用配置构建器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> environment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ConfigBuilder</span><span style="color:#E1E4E8;">(environment)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">loadDefaults</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">loadEnvironmentConfig</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">applyEnvironmentOverrides</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;最终配置:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(config, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span></code></pre></div><h3 id="配置加密与安全" tabindex="-1">配置加密与安全 <a class="header-anchor" href="#配置加密与安全" aria-label="Permalink to &quot;配置加密与安全&quot;">​</a></h3><p>处理敏感配置信息：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// secure-config.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> crypto </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SecureConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">encryptionKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.encryptionKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> encryptionKey;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.encryptedFields </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;secret&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;apiKey&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 加密数据</span></span>
<span class="line"><span style="color:#B392F0;">  encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> iv</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">randomBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cipher</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">createCipher</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aes-256-gcm&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.encryptionKey);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> encrypted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(text, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    encrypted </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> authTag</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">getAuthTag</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      iv: iv.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: encrypted,</span></span>
<span class="line"><span style="color:#E1E4E8;">      authTag: authTag.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 解密数据</span></span>
<span class="line"><span style="color:#B392F0;">  decrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">encryptedData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> decipher</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">createDecipher</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;aes-256-gcm&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.encryptionKey</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    decipher.</span><span style="color:#B392F0;">setAuthTag</span><span style="color:#E1E4E8;">(Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(encryptedData.authTag, </span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> decrypted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> decipher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      encryptedData.data, </span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;hex&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    decrypted </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> decipher.</span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> decrypted;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 保护敏感配置</span></span>
<span class="line"><span style="color:#B392F0;">  protect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> protectedConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">config };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(protectedConfig)) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.encryptedFields.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        protectedConfig[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encrypt</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        protectedConfig[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">protect</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> protectedConfig;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 解保护配置</span></span>
<span class="line"><span style="color:#B392F0;">  unprotect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">protectedConfig</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">protectedConfig };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(config)) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.encryptedFields.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">          typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          value.iv </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> value.data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        config[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">decrypt</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        config[key] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">unprotect</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用安全配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> secureConfig</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SecureConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;your-32-byte-encryption-key-here&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> sensitiveConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&#39;super-secret-password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiKey: </span><span style="color:#9ECBFF;">&#39;12345-67890-abcde&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;原始配置:&#39;</span><span style="color:#E1E4E8;">, sensitiveConfig);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> protected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> secureConfig.</span><span style="color:#B392F0;">protect</span><span style="color:#E1E4E8;">(sensitiveConfig);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加密配置:&#39;</span><span style="color:#E1E4E8;">, protected);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> unprotected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> secureConfig.</span><span style="color:#B392F0;">unprotect</span><span style="color:#E1E4E8;">(protected);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解密配置:&#39;</span><span style="color:#E1E4E8;">, unprotected);</span></span></code></pre></div><h2 id="现代化配置管理特性" tabindex="-1">现代化配置管理特性 <a class="header-anchor" href="#现代化配置管理特性" aria-label="Permalink to &quot;现代化配置管理特性&quot;">​</a></h2><h3 id="jsonc-和-mjs-支持" tabindex="-1">JSONC 和 MJS 支持 <a class="header-anchor" href="#jsonc-和-mjs-支持" aria-label="Permalink to &quot;JSONC 和 MJS 支持&quot;">​</a></h3><p>最新的配置管理库如 Node-Config v4.0.0 开始支持 JSONC (带注释的 JSON) 和 MJS (ES 模块) 配置文件。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config.jsonc - 支持注释的 JSON 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">  // 应用基础配置</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;app&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;My Application&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;port&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // 环境类型：development, test, production</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;env&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;development&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 数据库配置</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;database&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 数据库主机</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;port&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5432</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 数据库端口</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;myapp_dev&quot;</span><span style="color:#6A737D;">    // 数据库名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// config.mjs - ES 模块格式配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;My Application&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 动态端口分配</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: process.env.</span><span style="color:#79B8FF;">PORT</span><span style="color:#F97583;"> ||</span><span style="color:#79B8FF;"> 3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 特性开关</span></span>
<span class="line"><span style="color:#E1E4E8;">    features: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      newDashboard: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      experimental: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算属性</span></span>
<span class="line"><span style="color:#F97583;">  get</span><span style="color:#B392F0;"> apiUrl</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.app.env </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      ?</span><span style="color:#9ECBFF;"> &#39;https://api.myapp.com&#39;</span></span>
<span class="line"><span style="color:#F97583;">      :</span><span style="color:#9ECBFF;"> &#39;http://localhost:8080&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>通过以上方法和工具，Node.js 开发者可以构建出强大、灵活且安全的配置管理系统，满足从简单应用到复杂企业级系统的各种需求。</p>`,56)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
