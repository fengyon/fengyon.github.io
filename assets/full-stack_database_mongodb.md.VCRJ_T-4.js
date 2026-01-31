import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"MongoDB","description":"","frontmatter":{},"headers":[{"level":2,"title":"核心概念与架构设计","slug":"核心概念与架构设计","link":"#核心概念与架构设计","children":[]},{"level":2,"title":"主要特性","slug":"主要特性","link":"#主要特性","children":[{"level":3,"title":"灵活的文档模型","slug":"灵活的文档模型","link":"#灵活的文档模型","children":[]},{"level":3,"title":"高性能与水平扩展","slug":"高性能与水平扩展","link":"#高性能与水平扩展","children":[]},{"level":3,"title":"高可用性与冗余备份","slug":"高可用性与冗余备份","link":"#高可用性与冗余备份","children":[]},{"level":3,"title":"丰富的查询与索引功能","slug":"丰富的查询与索引功能","link":"#丰富的查询与索引功能","children":[]}]},{"level":2,"title":"Node.js 环境集成","slug":"node-js-环境集成","link":"#node-js-环境集成","children":[{"level":3,"title":"安装与连接配置","slug":"安装与连接配置","link":"#安装与连接配置","children":[]},{"level":3,"title":"连接池管理","slug":"连接池管理","link":"#连接池管理","children":[]}]},{"level":2,"title":"常用 API 与操作示例","slug":"常用-api-与操作示例","link":"#常用-api-与操作示例","children":[{"level":3,"title":"数据库与集合管理","slug":"数据库与集合管理","link":"#数据库与集合管理","children":[]},{"level":3,"title":"文档创建操作","slug":"文档创建操作","link":"#文档创建操作","children":[]},{"level":3,"title":"文档查询操作","slug":"文档查询操作","link":"#文档查询操作","children":[]},{"level":3,"title":"文档更新操作","slug":"文档更新操作","link":"#文档更新操作","children":[]},{"level":3,"title":"文档删除操作","slug":"文档删除操作","link":"#文档删除操作","children":[]},{"level":3,"title":"聚合框架","slug":"聚合框架","link":"#聚合框架","children":[]}]},{"level":2,"title":"高级功能与最佳实践","slug":"高级功能与最佳实践","link":"#高级功能与最佳实践","children":[{"level":3,"title":"索引优化","slug":"索引优化","link":"#索引优化","children":[]},{"level":3,"title":"错误处理与事务支持","slug":"错误处理与事务支持","link":"#错误处理与事务支持","children":[]},{"level":3,"title":"性能监控与调试","slug":"性能监控与调试","link":"#性能监控与调试","children":[]}]},{"level":2,"title":"实际应用模式","slug":"实际应用模式","link":"#实际应用模式","children":[{"level":3,"title":"Web 应用集成","slug":"web-应用集成","link":"#web-应用集成","children":[]},{"level":3,"title":"数据访问层封装","slug":"数据访问层封装","link":"#数据访问层封装","children":[]}]}],"relativePath":"full-stack/database/mongodb.md","filePath":"full-stack/database/mongodb.md"}'),o={name:"full-stack/database/mongodb.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /full-stack/database/mongodb.md for this page in Markdown format</div><h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;MongoDB&quot;">​</a></h1><h2 id="核心概念与架构设计" tabindex="-1">核心概念与架构设计 <a class="header-anchor" href="#核心概念与架构设计" aria-label="Permalink to &quot;核心概念与架构设计&quot;">​</a></h2><p>MongoDB 是一个基于分布式文件存储的 <strong>NoSQL 数据库</strong>，采用文档型数据模型，为现代应用开发提供了灵活的数据处理方案。其数据组织层次结构为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据库 → 集合 → 文档</span></span>
<span class="line"><span>  ↓        ↓       ↓</span></span>
<span class="line"><span>Database Collection Document</span></span></code></pre></div><p>与传统的关系型数据库相比，MongoDB 的核心区别在于：</p><ul><li><strong>无固定模式</strong>：同一集合内的文档可以拥有不同的字段结构</li><li><strong>文档格式</strong>：使用 BSON (二进制 JSON) 格式存储数据，支持更丰富的数据类型</li><li><strong>数据关系</strong>：通过嵌入式文档和数组处理一对多关系，减少联表查询</li></ul><h2 id="主要特性" tabindex="-1">主要特性 <a class="header-anchor" href="#主要特性" aria-label="Permalink to &quot;主要特性&quot;">​</a></h2><h3 id="灵活的文档模型" tabindex="-1">灵活的文档模型 <a class="header-anchor" href="#灵活的文档模型" aria-label="Permalink to &quot;灵活的文档模型&quot;">​</a></h3><p>MongoDB 的文档模型允许动态添加字段，无需预定义表结构。例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 同一集合中可以插入结构不同的文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;Alice&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  hobbies: [</span><span style="color:#9ECBFF;">&#39;coding&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;gaming&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: { city: </span><span style="color:#9ECBFF;">&#39;NY&#39;</span><span style="color:#E1E4E8;">, zip: </span><span style="color:#9ECBFF;">&#39;10001&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><p>这种灵活性特别适合需求频繁变更的敏捷开发场景，相比传统关系型数据库的 ALTER TABLE 操作，修改成本显著降低。</p><h3 id="高性能与水平扩展" tabindex="-1">高性能与水平扩展 <a class="header-anchor" href="#高性能与水平扩展" aria-label="Permalink to &quot;高性能与水平扩展&quot;">​</a></h3><p>MongoDB 通过<strong>分片集群</strong>实现线性扩展，架构包含：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端 → Mongos路由 → 配置服务器 → 分片节点</span></span>
<span class="line"><span>            ↓               ↓           ↓</span></span>
<span class="line"><span>       查询路由        元数据存储    实际数据存储</span></span></code></pre></div><p>实测数据显示，在 3 节点分片集群下，写入吞吐量可达单节点的 2.8 倍。某电商平台在促销期间，通过增加分片节点将订单处理延迟从 120ms 降至 35ms。</p><h3 id="高可用性与冗余备份" tabindex="-1">高可用性与冗余备份 <a class="header-anchor" href="#高可用性与冗余备份" aria-label="Permalink to &quot;高可用性与冗余备份&quot;">​</a></h3><p>MongoDB 支持<strong>副本集</strong>机制，提供自动故障转移：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主节点(Primary) ← 复制 → 从节点(Secondary)</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>   仲裁节点(Arbiter)</span></span></code></pre></div><p>当主节点不可用时，系统会自动选举新的主节点，确保服务连续性。</p><h3 id="丰富的查询与索引功能" tabindex="-1">丰富的查询与索引功能 <a class="header-anchor" href="#丰富的查询与索引功能" aria-label="Permalink to &quot;丰富的查询与索引功能&quot;">​</a></h3><p>MongoDB 提供完整的 CRUD 操作和强大的查询能力，支持多种索引类型：</p><ul><li><strong>单键索引</strong>、<strong>复合索引</strong>、<strong>多键索引</strong></li><li><strong>文本索引</strong>、<strong>地理空间索引</strong></li><li><strong>哈希索引</strong>、<strong>TTL 索引</strong></li></ul><h2 id="node-js-环境集成" tabindex="-1">Node.js 环境集成 <a class="header-anchor" href="#node-js-环境集成" aria-label="Permalink to &quot;Node.js 环境集成&quot;">​</a></h2><h3 id="安装与连接配置" tabindex="-1">安装与连接配置 <a class="header-anchor" href="#安装与连接配置" aria-label="Permalink to &quot;安装与连接配置&quot;">​</a></h3><p>首先安装 MongoDB Node.js 驱动程序：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> mongodb</span></span></code></pre></div><p>建立数据库连接：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 连接字符串</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> uri</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;mongodb://localhost:27017&#39;</span><span style="color:#6A737D;"> // 本地连接</span></span>
<span class="line"><span style="color:#6A737D;">// 或 MongoDB Atlas 连接</span></span>
<span class="line"><span style="color:#6A737D;">// const uri = &quot;mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.xzy.mongodb.net/?retryWrites=true&amp;w=majority&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> connectToDatabase</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> client</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MongoClient</span><span style="color:#E1E4E8;">(uri)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功连接到 MongoDB&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> client</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="连接池管理" tabindex="-1">连接池管理 <a class="header-anchor" href="#连接池管理" aria-label="Permalink to &quot;连接池管理&quot;">​</a></h3><p>对于生产环境，建议使用连接池优化性能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> client</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MongoClient</span><span style="color:#E1E4E8;">(uri, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  poolSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 连接池大小</span></span>
<span class="line"><span style="color:#E1E4E8;">  useNewUrlParser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useUnifiedTopology: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取数据库和集合实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> database</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">db</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;myDatabase&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> collection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> database.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;myCollection&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="常用-api-与操作示例" tabindex="-1">常用 API 与操作示例 <a class="header-anchor" href="#常用-api-与操作示例" aria-label="Permalink to &quot;常用 API 与操作示例&quot;">​</a></h2><h3 id="数据库与集合管理" tabindex="-1">数据库与集合管理 <a class="header-anchor" href="#数据库与集合管理" aria-label="Permalink to &quot;数据库与集合管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 访问数据库</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> database</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">db</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test_database&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 访问集合</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> collection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> database.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test_collection&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显式创建集合</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> createColl</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> database.</span><span style="color:#B392F0;">createCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;example_collection&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  validator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $jsonSchema: {</span></span>
<span class="line"><span style="color:#6A737D;">      /* 模式验证规则 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取集合列表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> colls</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> database.</span><span style="color:#B392F0;">listCollections</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> doc</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> colls) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(doc.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除集合</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">drop</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="文档创建操作" tabindex="-1">文档创建操作 <a class="header-anchor" href="#文档创建操作" aria-label="Permalink to &quot;文档创建操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 插入单个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> insertResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&#39;zhang@example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  created_at: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;插入文档 ID:&#39;</span><span style="color:#E1E4E8;">, insertResult.insertedId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入多个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> users</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;李四&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, city: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;王五&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">, city: </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;">, hobbies: [</span><span style="color:#9ECBFF;">&#39;阅读&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;游泳&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;赵六&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">35</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    city: </span><span style="color:#9ECBFF;">&#39;广州&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    address: { street: </span><span style="color:#9ECBFF;">&#39;天河路&#39;</span><span style="color:#E1E4E8;">, number: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> insertManyResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">insertMany</span><span style="color:#E1E4E8;">(users)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;插入文档数量:&#39;</span><span style="color:#E1E4E8;">, insertManyResult.insertedCount)</span></span></code></pre></div><h3 id="文档查询操作" tabindex="-1">文档查询操作 <a class="header-anchor" href="#文档查询操作" aria-label="Permalink to &quot;文档查询操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 查询所有文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> allUsers</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({}).</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件查询</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">findOne</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> adults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gte: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;"> } }).</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复杂条件查询</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> complexQuery</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    $and: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, $lt: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $or: [{ city: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;"> }, { city: </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;"> }] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 投影查询（指定返回字段）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> namesOnly</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }, { projection: { name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, city: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> } })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 排序、限制和跳过</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> sortedUsers</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ age: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 按年龄降序</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 限制返回10条</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 跳过前5条</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="文档更新操作" tabindex="-1">文档更新操作 <a class="header-anchor" href="#文档更新操作" aria-label="Permalink to &quot;文档更新操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 更新单个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> updateResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { age: </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, updated_at: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">() } }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;匹配文档数:&#39;</span><span style="color:#E1E4E8;">, updateResult.matchedCount)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;修改文档数:&#39;</span><span style="color:#E1E4E8;">, updateResult.modifiedCount)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新多个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> updateManyResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">updateMany</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { city: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { region: </span><span style="color:#9ECBFF;">&#39;华北&#39;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用更新操作符</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;李四&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $inc: { age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// 年龄加1</span></span>
<span class="line"><span style="color:#E1E4E8;">    $push: { hobbies: </span><span style="color:#9ECBFF;">&#39;跑步&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// 向数组添加元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    $set: { last_modified: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">() },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 替换文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> replaceResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">replaceOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&#39;王五&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    full_name: </span><span style="color:#9ECBFF;">&#39;王五&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    location: </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    metadata: { source: </span><span style="color:#9ECBFF;">&#39;migration&#39;</span><span style="color:#E1E4E8;">, version: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><h3 id="文档删除操作" tabindex="-1">文档删除操作 <a class="header-anchor" href="#文档删除操作" aria-label="Permalink to &quot;文档删除操作&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 删除单个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> deleteResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">deleteOne</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;赵六&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除文档数量:&#39;</span><span style="color:#E1E4E8;">, deleteResult.deletedCount)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除多个文档</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> deleteManyResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">deleteMany</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: { $lt: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清空集合（谨慎使用）</span></span>
<span class="line"><span style="color:#6A737D;">// await collection.deleteMany({});</span></span></code></pre></div><h3 id="聚合框架" tabindex="-1">聚合框架 <a class="header-anchor" href="#聚合框架" aria-label="Permalink to &quot;聚合框架&quot;">​</a></h3><p>MongoDB 的聚合管道提供强大的数据分析能力：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 计算每个城市的用户平均年龄</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> aggregationResult</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    { $match: { status: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> } }, </span><span style="color:#6A737D;">// 筛选条件</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $group: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        _id: </span><span style="color:#9ECBFF;">&#39;$city&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avgAge: { $avg: </span><span style="color:#9ECBFF;">&#39;$age&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        names: { $push: </span><span style="color:#9ECBFF;">&#39;$name&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { $sort: { count: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } }, </span><span style="color:#6A737D;">// 按计数降序</span></span>
<span class="line"><span style="color:#E1E4E8;">    { $limit: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// 只返回前10个结果</span></span>
<span class="line"><span style="color:#E1E4E8;">  ])</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多阶段聚合示例：用户统计报告</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userStats</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        city: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        isAdult: { $gte: [</span><span style="color:#9ECBFF;">&#39;$age&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">        yearGroup: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          $switch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            branches: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { case: { $lt: [</span><span style="color:#9ECBFF;">&#39;$age&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&#39;10-19&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { case: { $lt: [</span><span style="color:#9ECBFF;">&#39;$age&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&#39;20-29&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { case: { $lt: [</span><span style="color:#9ECBFF;">&#39;$age&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&#39;30-39&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            default: </span><span style="color:#9ECBFF;">&#39;40+&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $group: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        _id: </span><span style="color:#9ECBFF;">&#39;$city&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        totalUsers: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        adults: { $sum: { $cond: [</span><span style="color:#9ECBFF;">&#39;$isAdult&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ageGroups: { $push: </span><span style="color:#9ECBFF;">&#39;$yearGroup&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ])</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h2 id="高级功能与最佳实践" tabindex="-1">高级功能与最佳实践 <a class="header-anchor" href="#高级功能与最佳实践" aria-label="Permalink to &quot;高级功能与最佳实践&quot;">​</a></h2><h3 id="索引优化" tabindex="-1">索引优化 <a class="header-anchor" href="#索引优化" aria-label="Permalink to &quot;索引优化&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 创建索引</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 单键索引</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ city: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, age: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 复合索引</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ email: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, { unique: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 唯一索引</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 文本搜索索引</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ description: </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> textResults</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $text: { $search: </span><span style="color:#9ECBFF;">&#39;咖啡 书店&#39;</span><span style="color:#E1E4E8;"> } })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地理空间查询</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ location: </span><span style="color:#9ECBFF;">&#39;2dsphere&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> nearbyPlaces</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    location: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $near: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $geometry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;Point&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          coordinates: [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">73.9667</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">40.78</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        $maxDistance: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h3 id="错误处理与事务支持" tabindex="-1">错误处理与事务支持 <a class="header-anchor" href="#错误处理与事务支持" aria-label="Permalink to &quot;错误处理与事务支持&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> transferFunds</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fromId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">toId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> session</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">startSession</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">startTransaction</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行转账操作</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { _id: fromId, balance: { $gte: amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $inc: { balance: </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { session }</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { _id: toId },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $inc: { balance: amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { session }</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">commitTransaction</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;转账成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">abortTransaction</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;转账失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">endSession</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="性能监控与调试" tabindex="-1">性能监控与调试 <a class="header-anchor" href="#性能监控与调试" aria-label="Permalink to &quot;性能监控与调试&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 查询性能分析</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cursor</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ city: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">explain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;executionStats&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;查询计划:&#39;</span><span style="color:#E1E4E8;">, cursor)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监控集合统计信息</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection.</span><span style="color:#B392F0;">stats</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文档数量:&#39;</span><span style="color:#E1E4E8;">, stats.count)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;集合大小:&#39;</span><span style="color:#E1E4E8;">, stats.size)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;平均文档大小:&#39;</span><span style="color:#E1E4E8;">, stats.avgObjSize)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用投影优化查询性能</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> efficientQuery</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    { age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      projection: { name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, city: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      hint: { age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// 强制使用索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span></code></pre></div><h2 id="实际应用模式" tabindex="-1">实际应用模式 <a class="header-anchor" href="#实际应用模式" aria-label="Permalink to &quot;实际应用模式&quot;">​</a></h2><h3 id="web-应用集成" tabindex="-1">Web 应用集成 <a class="header-anchor" href="#web-应用集成" aria-label="Permalink to &quot;Web 应用集成&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> express</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> express</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 中间件：数据库连接</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    req.db </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> getDatabaseConnection</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">    next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ error: </span><span style="color:#9ECBFF;">&#39;数据库连接失败&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// RESTful API 示例</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">city</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">minAge</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">page</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">limit</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> req.query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> query</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (city) query.city </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> city</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (minAge) query.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { $gte: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(minAge) }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> users</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> req.db</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(query)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">((page </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> limit)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(limit))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">project</span><span style="color:#E1E4E8;">({ password: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// 排除敏感字段</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> total</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> req.db.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">countDocuments</span><span style="color:#E1E4E8;">(query)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: users,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pagination: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        page: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(page),</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(limit),</span></span>
<span class="line"><span style="color:#E1E4E8;">        total,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pages: Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(total </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> limit),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ error: error.message })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;服务器运行在端口 3000&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="数据访问层封装" tabindex="-1">数据访问层封装 <a class="header-anchor" href="#数据访问层封装" aria-label="Permalink to &quot;数据访问层封装&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MongoDBRepository</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">collectionName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.collectionName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> collectionName</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.collection </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">db</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> db.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.collectionName)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> create</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">document</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.created_at </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.updated_at </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.collection.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">(document)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">document, _id: result.insertedId }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> findById</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.collection.</span><span style="color:#B392F0;">findOne</span><span style="color:#E1E4E8;">({ _id: id })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> update</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">updates</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    updates.updated_at </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.collection.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { _id: id },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $set: updates }</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result.modifiedCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> delete</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.collection.</span><span style="color:#B392F0;">deleteOne</span><span style="color:#E1E4E8;">({ _id: id })</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result.deletedCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userRepo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MongoDBRepository</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> userRepo.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(database)</span></span></code></pre></div>`,58)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
