import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"MySQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":2,"title":"安装与配置","slug":"安装与配置","link":"#安装与配置","children":[{"level":3,"title":"驱动选择与安装","slug":"驱动选择与安装","link":"#驱动选择与安装","children":[]},{"level":3,"title":"数据库连接配置","slug":"数据库连接配置","link":"#数据库连接配置","children":[]}]},{"level":2,"title":"连接管理","slug":"连接管理","link":"#连接管理","children":[{"level":3,"title":"基本连接操作","slug":"基本连接操作","link":"#基本连接操作","children":[]},{"level":3,"title":"连接池管理","slug":"连接池管理","link":"#连接池管理","children":[]}]},{"level":2,"title":"核心 API 与操作","slug":"核心-api-与操作","link":"#核心-api-与操作","children":[{"level":3,"title":"查询操作","slug":"查询操作","link":"#查询操作","children":[]},{"level":3,"title":"事务处理","slug":"事务处理","link":"#事务处理","children":[]}]},{"level":2,"title":"高级特性","slug":"高级特性","link":"#高级特性","children":[{"level":3,"title":"Promise 包装与 async/await","slug":"promise-包装与-async-await","link":"#promise-包装与-async-await","children":[]},{"level":3,"title":"流式查询","slug":"流式查询","link":"#流式查询","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[{"level":3,"title":"连接池优化配置","slug":"连接池优化配置","link":"#连接池优化配置","children":[]},{"level":3,"title":"查询优化技巧","slug":"查询优化技巧","link":"#查询优化技巧","children":[]}]},{"level":2,"title":"错误处理与调试","slug":"错误处理与调试","link":"#错误处理与调试","children":[{"level":3,"title":"系统化错误处理","slug":"系统化错误处理","link":"#系统化错误处理","children":[]},{"level":3,"title":"调试与日志记录","slug":"调试与日志记录","link":"#调试与日志记录","children":[]}]},{"level":2,"title":"实际应用模式","slug":"实际应用模式","link":"#实际应用模式","children":[{"level":3,"title":"Web 应用集成示例","slug":"web-应用集成示例","link":"#web-应用集成示例","children":[]},{"level":3,"title":"数据访问层封装","slug":"数据访问层封装","link":"#数据访问层封装","children":[]}]}],"relativePath":"full-stack/database/mysql.md","filePath":"full-stack/database/mysql.md"}'),o={name:"full-stack/database/mysql.md"};function e(E,s,c,r,t,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /full-stack/database/mysql.md for this page in Markdown format</div><h1 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h1><h2 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h2><p>MySQL 是一个广泛使用的关系型数据库管理系统，在 Node.js 环境中通过与 MySQL 数据库交互，可以构建高效、可扩展的 Web 应用程序。Node.js 是单线程事件驱动的非阻塞 I/O 模型，适合处理高并发请求，与 MySQL 结合使用时，其异步特性使得数据库操作不会阻塞其他操作，提高了应用程序的响应速度。</p><p><strong>Node.js 与 MySQL 交互基本原理：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Node.js应用 → MySQL驱动 → 数据库连接 → MySQL服务器</span></span>
<span class="line"><span>     ↓              ↓           ↓          ↓</span></span>
<span class="line"><span> 业务逻辑处理    mysql/mysql2  连接池管理  数据存储</span></span>
<span class="line"><span>               模块封装      连接建立   查询执行</span></span></code></pre></div><h2 id="安装与配置" tabindex="-1">安装与配置 <a class="header-anchor" href="#安装与配置" aria-label="Permalink to &quot;安装与配置&quot;">​</a></h2><h3 id="驱动选择与安装" tabindex="-1">驱动选择与安装 <a class="header-anchor" href="#驱动选择与安装" aria-label="Permalink to &quot;驱动选择与安装&quot;">​</a></h3><p>Node.js 主要支持两种 MySQL 驱动：</p><ul><li><strong>mysql</strong>：纯 JavaScript 实现的 MySQL 客户端</li><li><strong>mysql2</strong>：基于 mysql 库的改进版本，提供了更好的性能和一些额外的功能</li></ul><p>使用 npm 进行安装：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装 mysql 模块</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或安装 mysql2 模块</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> mysql2</span></span></code></pre></div><h3 id="数据库连接配置" tabindex="-1">数据库连接配置 <a class="header-anchor" href="#数据库连接配置" aria-label="Permalink to &quot;数据库连接配置&quot;">​</a></h3><p>建立与 MySQL 数据库的连接需要配置连接参数：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mysql</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mysql&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建连接配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 数据库主机名</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 数据库用户名</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 数据库密码</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 数据库名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: </span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 端口号，默认3306</span></span>
<span class="line"><span style="color:#E1E4E8;">  charset: </span><span style="color:#9ECBFF;">&#39;utf8mb4&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 字符编码</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="连接管理" tabindex="-1">连接管理 <a class="header-anchor" href="#连接管理" aria-label="Permalink to &quot;连接管理&quot;">​</a></h2><h3 id="基本连接操作" tabindex="-1">基本连接操作 <a class="header-anchor" href="#基本连接操作" aria-label="Permalink to &quot;基本连接操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 连接到数据库</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败:&#39;</span><span style="color:#E1E4E8;">, err.stack)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Connected to MySQL database as id &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> connection.threadId)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭连接</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;关闭连接时出错:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库连接已关闭&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="连接池管理" tabindex="-1">连接池管理 <a class="header-anchor" href="#连接池管理" aria-label="Permalink to &quot;连接池管理&quot;">​</a></h3><p>在高并发场景中，使用连接池可以显著提高性能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mysql</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mysql&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建连接池</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createPool</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  connectionLimit: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 连接池最大连接数</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  acquireTimeout: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 获取连接的超时时间(毫秒)</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">60000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 连接超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  reconnect: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动重新连接</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从连接池获取连接</span></span>
<span class="line"><span style="color:#E1E4E8;">pool.</span><span style="color:#B392F0;">getConnection</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">connection</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取连接失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 使用连接执行查询</span></span>
<span class="line"><span style="color:#E1E4E8;">  connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SELECT * FROM users&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">queryErr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 释放连接回连接池</span></span>
<span class="line"><span style="color:#E1E4E8;">    connection.</span><span style="color:#B392F0;">release</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (queryErr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询失败:&#39;</span><span style="color:#E1E4E8;">, queryErr)</span></span>
<span class="line"><span style="color:#F97583;">      return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询结果:&#39;</span><span style="color:#E1E4E8;">, results)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p><strong>连接池工作流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用程序 → 请求连接 → 连接池 → 分配空闲连接</span></span>
<span class="line"><span>   ↓                              ↓</span></span>
<span class="line"><span>使用完毕 → 释放连接 → 回收到连接池 → 供其他请求使用</span></span></code></pre></div><h2 id="核心-api-与操作" tabindex="-1">核心 API 与操作 <a class="header-anchor" href="#核心-api-与操作" aria-label="Permalink to &quot;核心 API 与操作&quot;">​</a></h2><h3 id="查询操作" tabindex="-1">查询操作 <a class="header-anchor" href="#查询操作" aria-label="Permalink to &quot;查询操作&quot;">​</a></h3><h4 id="基本查询" tabindex="-1">基本查询 <a class="header-anchor" href="#基本查询" aria-label="Permalink to &quot;基本查询&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 简单查询</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SELECT * FROM users&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fields</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询结果:&#39;</span><span style="color:#E1E4E8;">, results)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;字段信息:&#39;</span><span style="color:#E1E4E8;">, fields)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件查询</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;SELECT * FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  [userId],</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户信息:&#39;</span><span style="color:#E1E4E8;">, results[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多条件查询</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;SELECT * FROM users WHERE name = ? AND age &gt; ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  userData,</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询结果:&#39;</span><span style="color:#E1E4E8;">, results)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h4 id="插入操作" tabindex="-1">插入操作 <a class="header-anchor" href="#插入操作" aria-label="Permalink to &quot;插入操作&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 单条插入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> newUser</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;John Doe&#39;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&#39;john@example.com&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;INSERT INTO users SET ?&#39;</span><span style="color:#E1E4E8;">, newUser, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;插入成功，ID:&#39;</span><span style="color:#E1E4E8;">, result.insertId)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 批量插入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> users</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;Alice&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;alice@example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bob@example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;Charlie&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;charlie@example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;INSERT INTO users (name, email, age) VALUES ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  [users],</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;批量插入成功，影响行数:&#39;</span><span style="color:#E1E4E8;">, result.affectedRows)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h4 id="更新与删除操作" tabindex="-1">更新与删除操作 <a class="header-anchor" href="#更新与删除操作" aria-label="Permalink to &quot;更新与删除操作&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 更新操作</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> updateData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;john.doe@example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;UPDATE users SET email = ? WHERE id = ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  updateData,</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新成功，影响行数:&#39;</span><span style="color:#E1E4E8;">, result.affectedRows)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除操作</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DELETE FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功，影响行数:&#39;</span><span style="color:#E1E4E8;">, result.affectedRows)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="事务处理" tabindex="-1">事务处理 <a class="header-anchor" href="#事务处理" aria-label="Permalink to &quot;事务处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 手动事务处理</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">beginTransaction</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 执行第一个操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;UPDATE accounts SET balance = balance - 100 WHERE id = 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">err1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (err1) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#E1E4E8;"> err1</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 执行第二个操作</span></span>
<span class="line"><span style="color:#E1E4E8;">      connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;UPDATE accounts SET balance = balance + 100 WHERE id = 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">err2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (err2) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">              throw</span><span style="color:#E1E4E8;"> err2</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">          // 提交事务</span></span>
<span class="line"><span style="color:#E1E4E8;">          connection.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (err3) {</span></span>
<span class="line"><span style="color:#F97583;">              return</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">                throw</span><span style="color:#E1E4E8;"> err3</span></span>
<span class="line"><span style="color:#E1E4E8;">              })</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;事务执行成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="高级特性" tabindex="-1">高级特性 <a class="header-anchor" href="#高级特性" aria-label="Permalink to &quot;高级特性&quot;">​</a></h2><h3 id="promise-包装与-async-await" tabindex="-1">Promise 包装与 async/await <a class="header-anchor" href="#promise-包装与-async-await" aria-label="Permalink to &quot;Promise 包装与 async/await&quot;">​</a></h3><p>使用 mysql2 模块支持 Promise：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mysql</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mysql2/promise&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> databaseOperations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> connection</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 建立连接</span></span>
<span class="line"><span style="color:#E1E4E8;">    connection </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行查询</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">rows</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">fields</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;SELECT * FROM users WHERE age &gt; ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成年用户:&#39;</span><span style="color:#E1E4E8;">, rows)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 插入数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;INSERT INTO users (name, email) VALUES (?, ?)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">&#39;David&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;david@example.com&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;插入ID:&#39;</span><span style="color:#E1E4E8;">, result.insertId)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库操作失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connection) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">databaseOperations</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="流式查询" tabindex="-1">流式查询 <a class="header-anchor" href="#流式查询" aria-label="Permalink to &quot;流式查询&quot;">​</a></h3><p>处理大量数据时使用流式查询：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> query</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SELECT * FROM large_table&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">query</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询错误:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fields&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">fields</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;字段信息:&#39;</span><span style="color:#E1E4E8;">, fields)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 逐行处理数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;行数据:&#39;</span><span style="color:#E1E4E8;">, row)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 可以暂停和恢复流</span></span>
<span class="line"><span style="color:#E1E4E8;">    connection.</span><span style="color:#B392F0;">pause</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 模拟异步处理</span></span>
<span class="line"><span style="color:#B392F0;">    processRow</span><span style="color:#E1E4E8;">(row, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      connection.</span><span style="color:#B392F0;">resume</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询完成&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> processRow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 处理行数据</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout</span><span style="color:#E1E4E8;">(callback, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><h3 id="连接池优化配置" tabindex="-1">连接池优化配置 <a class="header-anchor" href="#连接池优化配置" aria-label="Permalink to &quot;连接池优化配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createPool</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  connectionLimit: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 最大连接数</span></span>
<span class="line"><span style="color:#E1E4E8;">  acquireTimeout: </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 获取连接超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">60000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 连接超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  reconnect: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动重连</span></span>
<span class="line"><span style="color:#E1E4E8;">  queueLimit: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 排队等待连接的最大请求数</span></span>
<span class="line"><span style="color:#E1E4E8;">  waitForConnections: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 无可用连接时等待</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监控连接池状态</span></span>
<span class="line"><span style="color:#E1E4E8;">pool.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;acquire&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">connection</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接 %d 被获取&#39;</span><span style="color:#E1E4E8;">, connection.threadId)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pool.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;release&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">connection</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接 %d 被释放&#39;</span><span style="color:#E1E4E8;">, connection.threadId)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pool.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;enqueue&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;等待可用连接...&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="查询优化技巧" tabindex="-1">查询优化技巧 <a class="header-anchor" href="#查询优化技巧" aria-label="Permalink to &quot;查询优化技巧&quot;">​</a></h3><ol><li><strong>使用参数化查询防止 SQL 注入</strong></li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 正确的做法 - 参数化查询</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SELECT * FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">, [userId])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 错误的做法 - 字符串拼接（存在SQL注入风险）</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`SELECT * FROM users WHERE id = \${</span><span style="color:#E1E4E8;">userId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><ol start="2"><li><strong>合理使用连接超时和重连机制</strong></li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  connectTimeout: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 连接超时</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">60000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 查询超时</span></span>
<span class="line"><span style="color:#E1E4E8;">  reconnect: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动重连</span></span>
<span class="line"><span style="color:#E1E4E8;">  retry: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 重试配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    times: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 重试次数</span></span>
<span class="line"><span style="color:#B392F0;">    interval</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">retryCount</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(retryCount </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 重试间隔</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="错误处理与调试" tabindex="-1">错误处理与调试 <a class="header-anchor" href="#错误处理与调试" aria-label="Permalink to &quot;错误处理与调试&quot;">​</a></h2><h3 id="系统化错误处理" tabindex="-1">系统化错误处理 <a class="header-anchor" href="#系统化错误处理" aria-label="Permalink to &quot;系统化错误处理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 连接错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;PROTOCOL_CONNECTION_LOST&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库连接被关闭&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (err.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ER_CON_COUNT_ERROR&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库连接过多&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (err.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ECONNREFUSED&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数据库连接被拒绝&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未预期的数据库错误:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询错误处理</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> executeQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sql</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(sql, params, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SQL错误:&#39;</span><span style="color:#E1E4E8;">, err.sqlMessage)</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SQL语句:&#39;</span><span style="color:#E1E4E8;">, err.sql)</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(results)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> safeQuery</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> executeQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SELECT * FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 根据错误类型进行相应处理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (err.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ER_NO_SUCH_TABLE&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;表不存在&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (err.code </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ER_ACCESS_DENIED_ERROR&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;访问被拒绝&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="调试与日志记录" tabindex="-1">调试与日志记录 <a class="header-anchor" href="#调试与日志记录" aria-label="Permalink to &quot;调试与日志记录&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 启用详细日志</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createConnection</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  debug: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用详细调试信息</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义查询日志</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> loggedQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">sql</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`执行SQL: \${</span><span style="color:#E1E4E8;">sql</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, params)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    connection.</span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(sql, params, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> duration</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`SQL执行失败 (\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms):\`</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`SQL执行成功 (\${</span><span style="color:#E1E4E8;">duration</span><span style="color:#9ECBFF;">}ms)，影响行数:\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          results.affectedRows</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(results)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="实际应用模式" tabindex="-1">实际应用模式 <a class="header-anchor" href="#实际应用模式" aria-label="Permalink to &quot;实际应用模式&quot;">​</a></h2><h3 id="web-应用集成示例" tabindex="-1">Web 应用集成示例 <a class="header-anchor" href="#web-应用集成示例" aria-label="Permalink to &quot;Web 应用集成示例&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> express</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mysql</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mysql2/promise&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> express</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建连接池</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pool</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mysql.</span><span style="color:#B392F0;">createPool</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  connectionLimit: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&#39;your_username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  password: </span><span style="color:#9ECBFF;">&#39;your_password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  database: </span><span style="color:#9ECBFF;">&#39;your_database&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用户API路由</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">rows</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;SELECT id, name, email FROM users LIMIT 100&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">(rows)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取用户列表失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ error: </span><span style="color:#9ECBFF;">&#39;服务器内部错误&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users/:id&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">rows</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;SELECT id, name, email FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [req.params.id]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (rows.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ error: </span><span style="color:#9ECBFF;">&#39;用户不存在&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">(rows[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取用户详情失败:&#39;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ error: </span><span style="color:#9ECBFF;">&#39;服务器内部错误&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;服务器运行在端口 3000&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="数据访问层封装" tabindex="-1">数据访问层封装 <a class="header-anchor" href="#数据访问层封装" aria-label="Permalink to &quot;数据访问层封装&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UserRepository</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pool</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pool </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pool</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> findAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">rows</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;SELECT id, name, email, created_at FROM users&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> rows</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> findById</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">rows</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;SELECT id, name, email, created_at FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [id]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> rows[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> create</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">email</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;INSERT INTO users (name, email) VALUES (?, ?)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [name, email]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { id: result.insertId, name, email }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> update</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">email</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;UPDATE users SET name = ?, email = ? WHERE id = ?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      [name, email, id]</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result.affectedRows </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> delete</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pool.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DELETE FROM users WHERE id = ?&#39;</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">      id,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ])</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result.affectedRows </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userRepo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UserRepository</span><span style="color:#E1E4E8;">(pool)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> userOperations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建用户</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> newUser</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> userRepo.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;John Smith&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    email: </span><span style="color:#9ECBFF;">&#39;john.smith@example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 查询用户</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> users</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> userRepo.</span><span style="color:#B392F0;">findAll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;所有用户:&#39;</span><span style="color:#E1E4E8;">, users)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,58)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
