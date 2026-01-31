import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"网络层优化","description":"","frontmatter":{},"headers":[{"level":2,"title":"网络性能基础","slug":"network-performance-basics","link":"#network-performance-basics","children":[]},{"level":2,"title":"HTTP 协议优化","slug":"http-protocol-optimization","link":"#http-protocol-optimization","children":[]},{"level":2,"title":"连接管理优化","slug":"connection-management","link":"#connection-management","children":[]},{"level":2,"title":"资源加载策略","slug":"resource-loading-strategies","link":"#resource-loading-strategies","children":[]},{"level":2,"title":"缓存策略优化","slug":"caching-strategies","link":"#caching-strategies","children":[]},{"level":2,"title":"内容分发网络优化","slug":"cdn-optimization","link":"#cdn-optimization","children":[]},{"level":2,"title":"压缩与编码优化","slug":"compression-encoding","link":"#compression-encoding","children":[]},{"level":2,"title":"移动网络优化","slug":"mobile-network-optimization","link":"#mobile-network-optimization","children":[]},{"level":2,"title":"安全与性能平衡","slug":"security-performance-balance","link":"#security-performance-balance","children":[]},{"level":2,"title":"网络性能监控","slug":"network-performance-monitoring","link":"#network-performance-monitoring","children":[]}],"relativePath":"engineering/performance/network.md","filePath":"engineering/performance/network.md"}'),o={name:"engineering/performance/network.md"};function e(c,s,E,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/performance/network.md for this page in Markdown format</div><h1 id="网络层优化" tabindex="-1">网络层优化 <a class="header-anchor" href="#网络层优化" aria-label="Permalink to &quot;网络层优化&quot;">​</a></h1><h2 id="network-performance-basics" tabindex="-1">网络性能基础 <a class="header-anchor" href="#network-performance-basics" aria-label="Permalink to &quot;网络性能基础 {#network-performance-basics}&quot;">​</a></h2><p>网络层优化关注数据在客户端与服务器间传输的效率，涵盖连接建立、请求发送、响应接收和资源加载全过程。现代 Web 应用网络性能受制于带宽、延迟、协议效率和资源调度等多个因素。</p><p>特点：网络优化需要<strong>分层治理</strong>，从物理传输到应用协议每个环节都存在优化机会。优化策略应基于网络环境动态调整，平衡用户体验和资源成本。</p><p>示意图： 网络请求生命周期： DNS 查询 → TCP 连接 → TLS 握手 → HTTP 请求 → 响应接收 → 内容解析 性能瓶颈： 高延迟 &gt; 低带宽 &gt; 协议开销 &gt; 资源竞争 优化目标：减少往返次数 + 压缩传输数据 + 复用连接 + 预加载资源</p><h2 id="http-protocol-optimization" tabindex="-1">HTTP 协议优化 <a class="header-anchor" href="#http-protocol-optimization" aria-label="Permalink to &quot;HTTP 协议优化 {#http-protocol-optimization}&quot;">​</a></h2><p>HTTP/1.1 到 HTTP/2、HTTP/3 的演进显著改善网络性能。HTTP/2 引入多路复用、头部压缩和服务器推送，HTTP/3 基于 QUIC 协议进一步减少连接建立延迟。</p><p>特点：协议优化核心是<strong>减少延迟</strong>和<strong>提高并发</strong>。现代协议通过连接复用、0-RTT 握手和智能优先级提升传输效率。</p><p>示意图： HTTP/1.1：6 个 TCP 连接 → 队头阻塞 → 串行请求 HTTP/2：1 个 TCP 连接 + 多路复用 + 头部压缩 → 并行请求 HTTP/3：QUIC 协议 + 0-RTT + 无队头阻塞 → 最优性能</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// HTTP/2服务器推送配置示例</span></span>
<span class="line"><span style="color:#6A737D;">// Node.js with Express</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> express</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> http2</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http2&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 静态资源推送</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/app.js&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> pushResources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/styles/main.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/images/logo.svg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  pushResources.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(path, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      request: { accept: </span><span style="color:#9ECBFF;">&#39;*/*&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      response: { </span><span style="color:#9ECBFF;">&#39;content-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getContentType</span><span style="color:#E1E4E8;">(path) }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`./public\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">sendFile</span><span style="color:#E1E4E8;">(__dirname </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;/public/app.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基于依赖的优先级推送</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> prioritizeResources</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mainResource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dependencyMap</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/index.html&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;/styles.css&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/app.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/app.js&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;/vendor.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/utils.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;/product/:id&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;/product.css&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/product.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/api/product/:id&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> dependencyMap[mainResource] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="connection-management" tabindex="-1">连接管理优化 <a class="header-anchor" href="#connection-management" aria-label="Permalink to &quot;连接管理优化 {#connection-management}&quot;">​</a></h2><p>连接建立是网络延迟的主要来源。优化策略包括连接复用、预连接、TCP 优化和 QUIC 协议采用。保持活跃连接减少握手开销，预连接关键域名加速后续请求。</p><p>特点：连接优化关注<strong>建立成本</strong>和<strong>利用率</strong>。长连接、连接池和域名分片技术平衡连接数量和性能收益。</p><p>示意图： 连接建立成本： TCP 三次握手：1.5 RTT → TLS 握手：1-2 RTT → 总计：2.5-3.5 RTT 优化后：连接复用 → 0 RTT | 预连接 → 提前完成握手 性能收益：减少 60-80%连接建立时间</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 连接预加载与资源提示</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ConnectionOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.preconnectedOrigins </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预连接关键域名</span></span>
<span class="line"><span style="color:#B392F0;">  preconnectCriticalOrigins</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalOrigins</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;https://fonts.googleapis.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;https://cdn.example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;https://api.service.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    criticalOrigins.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">origin</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.preconnectedOrigins.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(origin)) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preconnect&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> origin;</span></span>
<span class="line"><span style="color:#E1E4E8;">        link.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.preconnectedOrigins.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(origin);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // DNS预获取</span></span>
<span class="line"><span style="color:#B392F0;">  prefetchDNS</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">domains</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    domains.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">domain</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;dns-prefetch&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`//\${</span><span style="color:#E1E4E8;">domain</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于用户行为的预测预连接</span></span>
<span class="line"><span style="color:#B392F0;">  setupPredictivePreconnect</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 鼠标悬停时预连接</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-preconnect]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      element.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseenter&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> origin</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.dataset.preconnect;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">preconnectOrigin</span><span style="color:#E1E4E8;">(origin);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, { once: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 路由变化前预连接</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupRouteBasedPreconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // TCP连接优化配置</span></span>
<span class="line"><span style="color:#B392F0;">  configureTCPOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 对于重要连接，调整TCP参数</span></span>
<span class="line"><span style="color:#6A737D;">    // 这通常需要在服务器和客户端网络栈配置</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tcpOptimizations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tcp_fastopen: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 启用TCP Fast Open</span></span>
<span class="line"><span style="color:#E1E4E8;">      initial_cwnd: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// 初始拥塞窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">      tcp_slow_start_after_idle: </span><span style="color:#79B8FF;">false</span><span style="color:#6A737D;">  // 空闲后不重置拥塞窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> tcpOptimizations;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="resource-loading-strategies" tabindex="-1">资源加载策略 <a class="header-anchor" href="#resource-loading-strategies" aria-label="Permalink to &quot;资源加载策略 {#resource-loading-strategies}&quot;">​</a></h2><p>资源加载策略决定资源获取时机和优先级。核心策略包括预加载、懒加载、优先级提示和条件加载。基于用户意图和视图 port 智能调度资源加载顺序。</p><p>特点：资源加载优化平衡<strong>即时需求</strong>和<strong>预测需求</strong>。关键路径资源优先加载，非关键资源延迟加载，可能资源预加载。</p><p>示意图： 资源加载优先级： 关键资源 (CSS、首屏 JS) → 高优先级 (字体、首屏图片) → 中优先级 (可见区域内容) → 低优先级 (屏幕外内容) 加载策略：预加载关键资源 + 懒加载非关键资源 + 预获取可能资源</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 智能资源加载管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> ResourceLoadManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.loadedResources </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.priorityQueue </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于视口的懒加载</span></span>
<span class="line"><span style="color:#B392F0;">  setupViewportLoading</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> IntersectionObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      entries.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (entry.isIntersecting) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> entry.target;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadResource</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 观察所有懒加载资源</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-lazy-src]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 优先级加载队列</span></span>
<span class="line"><span style="color:#B392F0;">  setupPriorityLoading</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 定义资源优先级</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> priorityMap</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;critical&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 关键CSS、首屏JS</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;high&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// 字体、首屏图片</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;medium&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 首屏后内容</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;low&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#6A737D;">          // 屏幕外内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于连接速度调整策略</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adaptToNetworkConditions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络自适应加载</span></span>
<span class="line"><span style="color:#B392F0;">  adaptToNetworkConditions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> navigator.connection;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connection) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> strategy</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getLoadingStrategy</span><span style="color:#E1E4E8;">(connection);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyLoadingStrategy</span><span style="color:#E1E4E8;">(strategy);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getLoadingStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">connection</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connection.saveData) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;conservative&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 省流模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (connection.effectiveType) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;4g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;aggressive&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 积极预加载</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;3g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;moderate&#39;</span><span style="color:#E1E4E8;">;    </span><span style="color:#6A737D;">// 适度加载</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;2g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;slow-2g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;conservative&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 保守加载</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;moderate&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预加载关键资源</span></span>
<span class="line"><span style="color:#B392F0;">  preloadCriticalResources</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> criticalResources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { href: </span><span style="color:#9ECBFF;">&#39;/styles/critical.css&#39;</span><span style="color:#E1E4E8;">, as: </span><span style="color:#9ECBFF;">&#39;style&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { href: </span><span style="color:#9ECBFF;">&#39;/js/main.js&#39;</span><span style="color:#E1E4E8;">, as: </span><span style="color:#9ECBFF;">&#39;script&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { href: </span><span style="color:#9ECBFF;">&#39;/fonts/primary.woff2&#39;</span><span style="color:#E1E4E8;">, as: </span><span style="color:#9ECBFF;">&#39;font&#39;</span><span style="color:#E1E4E8;">, crossorigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    criticalResources.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> link</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.rel </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;preload&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resource.href;</span></span>
<span class="line"><span style="color:#E1E4E8;">      link.as </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resource.as;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (resource.crossorigin) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        link.crossOrigin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;anonymous&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      document.head.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(link);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 预测性预获取</span></span>
<span class="line"><span style="color:#B392F0;">  predictivePrefetch</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于用户行为预测下一步可能访问的资源</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictionRules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        trigger: </span><span style="color:#9ECBFF;">&#39;hover&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;.product-link&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        resources: [</span><span style="color:#9ECBFF;">&#39;/product-preview.css&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/product-preview.js&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        trigger: </span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&#39;.search-btn&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        resources: [</span><span style="color:#9ECBFF;">&#39;/search-results.css&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/search-api.js&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    predictionRules.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">rule</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(rule.selector).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        element.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(rule.trigger, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          rule.resources.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resource</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">prefetchResource</span><span style="color:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="caching-strategies" tabindex="-1">缓存策略优化 <a class="header-anchor" href="#caching-strategies" aria-label="Permalink to &quot;缓存策略优化 {#caching-strategies}&quot;">​</a></h2><p>缓存通过存储重复使用的资源减少网络请求。分层缓存策略包括浏览器缓存、Service Worker 缓存、CDN 缓存和服务器缓存。合理的缓存策略平衡新鲜度和性能。</p><p>特点：缓存优化核心是<strong>命中率</strong>和<strong>新鲜度</strong>的平衡。静态资源长期缓存，动态内容条件缓存，个性化内容谨慎缓存。</p><p>示意图： 缓存层次结构： 浏览器内存缓存 → HTTP 缓存 → Service Worker 缓存 → CDN 缓存 → 源服务器 缓存策略： 强缓存 (Cache-Control) → 协商缓存 (ETag/Last-Modified) → 网络优先 → 缓存优先</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Service Worker 缓存策略</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CacheStrategyManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cacheName </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;app-v1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 注册不同资源的缓存策略</span></span>
<span class="line"><span style="color:#B392F0;">  registerStrategies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 静态资源 - 缓存优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(css</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;cache-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;static-assets&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 图片 - 缓存优先，可过期</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">avif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;cache-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;images&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: { maxEntries: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, maxAgeSeconds: </span><span style="color:#79B8FF;">86400</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 30</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// 30天</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // API数据 - 网络优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">api</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;network-first&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;api-data&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: { maxEntries: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, maxAgeSeconds: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// 5分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // HTML页面 - 网络优先</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.strategies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">(</span><span style="color:#F97583;">$|</span><span style="color:#85E89D;font-weight:bold;">\\?</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      strategy: </span><span style="color:#9ECBFF;">&#39;network-first&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheName: </span><span style="color:#9ECBFF;">&#39;pages&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取资源的缓存策略</span></span>
<span class="line"><span style="color:#B392F0;">  getStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">pattern</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">strategy</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.strategies) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (pattern.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(url)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> strategy;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { strategy: </span><span style="color:#9ECBFF;">&#39;network-only&#39;</span><span style="color:#E1E4E8;"> }; </span><span style="color:#6A737D;">// 默认策略</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 缓存优先实现</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> cacheFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (cachedResponse) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cachedResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (networkResponse.ok) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> networkResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 网络失败时返回兜底响应</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Response</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, { status: </span><span style="color:#79B8FF;">408</span><span style="color:#E1E4E8;">, statusText: </span><span style="color:#9ECBFF;">&#39;Request timeout&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络优先实现</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> networkFirst</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cacheName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> networkResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (networkResponse.ok) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        cache.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(request, networkResponse.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> networkResponse;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cache</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(cacheName);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cachedResponse</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(request);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> cachedResponse </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">offlineResponse</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="cdn-optimization" tabindex="-1">内容分发网络优化 <a class="header-anchor" href="#cdn-optimization" aria-label="Permalink to &quot;内容分发网络优化 {#cdn-optimization}&quot;">​</a></h2><p>CDN 通过地理分布的边缘节点缓存内容，减少传输延迟。优化策略包括智能路由、动态加速、边缘计算和缓存策略调优。现代 CDN 支持 HTTP/3、Brotli 压缩和实时日志分析。</p><p>特点：CDN 优化关注<strong>覆盖范围</strong>和<strong>缓存效率</strong>。多 CDN 策略提升可用性，边缘计算减少回源请求，实时监控优化节点选择。</p><p>示意图： CDN 请求流程： 用户请求 → DNS 智能解析 → 最优边缘节点 → 缓存检查 → 命中则返回 → 未命中则回源 优化维度：节点覆盖 + 缓存命中率 + 协议支持 + 安全防护</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 多CDN负载均衡与故障转移</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MultiCDNManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cdnProviders </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;cdn-primary&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        domains: [</span><span style="color:#9ECBFF;">&#39;cdn1.example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;cdn2.example.com&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        weight: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        health: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;cdn-backup&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        domains: [</span><span style="color:#9ECBFF;">&#39;backup1.example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;backup2.example.com&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        weight: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        health: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentProvider </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.healthCheckInterval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 30000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 30秒健康检查</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取最优CDN域名</span></span>
<span class="line"><span style="color:#B392F0;">  getOptimalCDNDomain</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resourcePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> provider</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getHealthyProvider</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> domains</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> provider.domains;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于地理位置、延迟等选择域名</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> optimalDomain</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">selectOptimalDomain</span><span style="color:#E1E4E8;">(domains, resourcePath);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`https://\${</span><span style="color:#E1E4E8;">optimalDomain</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">resourcePath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 选择健康提供商</span></span>
<span class="line"><span style="color:#B392F0;">  getHealthyProvider</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> healthyProviders</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cdnProviders.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p.health);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (healthyProviders.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 所有CDN都不可用，回源</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { domains: [</span><span style="color:#9ECBFF;">&#39;origin.example.com&#39;</span><span style="color:#E1E4E8;">] };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 加权随机选择</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">weightedRandomSelect</span><span style="color:#E1E4E8;">(healthyProviders);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // CDN健康检查</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> performHealthChecks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> checkPromises</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.cdnProviders.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">provider</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`https://\${</span><span style="color:#E1E4E8;">provider</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">domains</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}/health-check\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          method: </span><span style="color:#9ECBFF;">&#39;HEAD&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          timeout: </span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        provider.health </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response.ok;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        provider.health </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`CDN \${</span><span style="color:#E1E4E8;">provider</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} health check failed:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">allSettled</span><span style="color:#E1E4E8;">(checkPromises);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 基于资源类型选择CDN策略</span></span>
<span class="line"><span style="color:#B392F0;">  getCDNStrategyForResource</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/video/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        provider: </span><span style="color:#9ECBFF;">&#39;video-cdn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        protocol: </span><span style="color:#9ECBFF;">&#39;h2&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// HTTP/2 for multiplexing</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheTtl: </span><span style="color:#79B8FF;">3600</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/images/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        provider: </span><span style="color:#9ECBFF;">&#39;image-cdn&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        protocol: </span><span style="color:#9ECBFF;">&#39;h3&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// HTTP/3 for better performance</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheTtl: </span><span style="color:#79B8FF;">86400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        format: </span><span style="color:#9ECBFF;">&#39;webp,avif&#39;</span><span style="color:#6A737D;"> // 自动格式转换</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (url.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        provider: </span><span style="color:#9ECBFF;">&#39;api-cdn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        protocol: </span><span style="color:#9ECBFF;">&#39;h2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheTtl: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 短缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">        dynamicAcceleration: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;default-cdn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      protocol: </span><span style="color:#9ECBFF;">&#39;h2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheTtl: </span><span style="color:#79B8FF;">3600</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="compression-encoding" tabindex="-1">压缩与编码优化 <a class="header-anchor" href="#compression-encoding" aria-label="Permalink to &quot;压缩与编码优化 {#compression-encoding}&quot;">​</a></h2><p>数据压缩减少传输字节数，提升网络效率。现代压缩算法如 Brotli 和 Zstandard 提供比 Gzip 更好的压缩率。内容编码优化包括图片格式选择、视频编码和文本压缩。</p><p>特点：压缩优化平衡<strong>压缩率</strong>和<strong>计算成本</strong>。Brotli 适合文本压缩，WebP/AVIF 适合图片，动态内容使用流式压缩。</p><p>示意图： 压缩算法比较： Gzip：中等压缩率 + 低 CPU 成本 → 通用场景 Brotli：高压缩率 + 中等 CPU 成本 → 文本资源 Zstandard：极高压缩率 + 低 CPU 成本 → 大型文件 优化选择：静态资源用 Brotli + 动态内容用 Gzip + 图片用现代格式</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 压缩策略管理器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CompressionManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.supportedEncodings </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectSupportedEncodings</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检测支持的压缩编码</span></span>
<span class="line"><span style="color:#B392F0;">  detectSupportedEncodings</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际应用中，这通常通过Accept-Encoding头检测</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里简化为基于浏览器特性检测</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encodings</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;gzip&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;deflate&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检测Brotli支持</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> BrotliDecode </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      encodings.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> encodings;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 为资源选择最优压缩</span></span>
<span class="line"><span style="color:#B392F0;">  getOptimalCompression</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resourceType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">content</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;text/html&#39;</span><span style="color:#E1E4E8;">: { encoding: </span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;text/css&#39;</span><span style="color:#E1E4E8;">: { encoding: </span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;application/javascript&#39;</span><span style="color:#E1E4E8;">: { encoding: </span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;application/json&#39;</span><span style="color:#E1E4E8;">: { encoding: </span><span style="color:#9ECBFF;">&#39;gzip&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;image/svg+xml&#39;</span><span style="color:#E1E4E8;">: { encoding: </span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> strategies[resourceType] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> { encoding: </span><span style="color:#9ECBFF;">&#39;gzip&#39;</span><span style="color:#E1E4E8;">, level: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 对于小文件，可能不需要压缩</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (content.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 150</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { encoding: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, reason: </span><span style="color:#9ECBFF;">&#39;content_too_small&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> strategy;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 图片格式优化</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeImageFormat</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">originalImage</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">quality</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">selectImageFormat</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      originalImage, </span></span>
<span class="line"><span style="color:#E1E4E8;">      context</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      format,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width, </span></span>
<span class="line"><span style="color:#E1E4E8;">      height,</span></span>
<span class="line"><span style="color:#E1E4E8;">      quality,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateImageURL</span><span style="color:#E1E4E8;">(originalImage, { format, width, height, quality })</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  selectImageFormat</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">image</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">clientWidth</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">network</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> context;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于网络条件和屏幕尺寸选择格式</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">supportsAvif</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> network </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;slow-2g&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { format: </span><span style="color:#9ECBFF;">&#39;avif&#39;</span><span style="color:#E1E4E8;">, quality: </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">, width: clientWidth </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">supportsWebp</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { format: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">, quality: </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, width: clientWidth </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 回退到JPEG或PNG</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> image.hasAlpha </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      { format: </span><span style="color:#9ECBFF;">&#39;png&#39;</span><span style="color:#E1E4E8;">, quality: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, width: clientWidth } </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;jpeg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">quality</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">: clientWidth };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 响应压缩中间件示例（Node.js）</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> createCompressionMiddleware</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> compression</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;compression&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> compression</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">      // 只压缩超过1KB的响应</span></span>
<span class="line"><span style="color:#E1E4E8;">      threshold: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">      // 基于内容类型过滤</span></span>
<span class="line"><span style="color:#B392F0;">      filter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> type</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">getHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> !!</span><span style="color:#E1E4E8;">type </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          type.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text/&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">          type.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;application/&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">          type.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image/svg&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#6A737D;">      // Brotli配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      brotli: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          [zlib.constants.</span><span style="color:#79B8FF;">BROTLI_PARAM_QUALITY</span><span style="color:#E1E4E8;">]: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="mobile-network-optimization" tabindex="-1">移动网络优化 <a class="header-anchor" href="#mobile-network-optimization" aria-label="Permalink to &quot;移动网络优化 {#mobile-network-optimization}&quot;">​</a></h2><p>移动网络具有高延迟、不稳定和流量限制特点。优化策略包括减少请求数量、压缩传输数据、适应网络变化和节省电量。使用 Network Information API 适配不同网络条件。</p><p>特点：移动网络优化强调<strong>适应性</strong>和<strong>经济性</strong>。根据网络类型调整资源策略，优先考虑数据用量和电池消耗。</p><p>示意图： 移动网络特性： 高延迟 (100-500ms) + 不稳定带宽 + 数据限制 + 电池约束 优化策略：减少 DNS 查询 + 合并请求 + 压缩资源 + 缓存积极 + 预连接谨慎</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 移动网络自适应优化</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MobileNetworkOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.connection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> navigator.connection;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.currentStrategy </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectNetworkStrategy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检测网络策略</span></span>
<span class="line"><span style="color:#B392F0;">  detectNetworkStrategy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connection) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;moderate&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">effectiveType</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">saveData</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.connection;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (saveData) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;data-saver&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (effectiveType) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;4g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;aggressive&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;3g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;moderate&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;2g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;slow-2g&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;conservative&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &#39;moderate&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 应用网络策略</span></span>
<span class="line"><span style="color:#B392F0;">  applyNetworkStrategy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;aggressive&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefetch: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageQuality: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoAutoplay: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lazyLoadThreshold: </span><span style="color:#79B8FF;">0.1</span><span style="color:#6A737D;"> // 较早开始懒加载</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;moderate&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefetch: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageQuality: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        videoAutoplay: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lazyLoadThreshold: </span><span style="color:#79B8FF;">0.5</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;conservative&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefetch: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageQuality: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoAutoplay: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lazyLoadThreshold: </span><span style="color:#79B8FF;">0.8</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;data-saver&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        preload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefetch: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageQuality: </span><span style="color:#9ECBFF;">&#39;very-low&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoAutoplay: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lazyLoadThreshold: </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        disableAnimations: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> strategy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> strategies[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentStrategy];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">configureResourceLoading</span><span style="color:#E1E4E8;">(strategy);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 配置资源加载策略</span></span>
<span class="line"><span style="color:#B392F0;">  configureResourceLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">strategy</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 调整图片质量</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">adjustImageQuality</span><span style="color:#E1E4E8;">(strategy.imageQuality);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 控制预加载</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">togglePreloading</span><span style="color:#E1E4E8;">(strategy.preload);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 配置懒加载阈值</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setLazyLoadThreshold</span><span style="color:#E1E4E8;">(strategy.lazyLoadThreshold);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 禁用动画（在省流模式）</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (strategy.disableAnimations) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disableNonEssentialAnimations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络变化监听</span></span>
<span class="line"><span style="color:#B392F0;">  setupNetworkChangeListener</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connection) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.connection.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> newStrategy</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">detectNetworkStrategy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (newStrategy </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentStrategy) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.currentStrategy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newStrategy;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">applyNetworkStrategy</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emitNetworkChangeEvent</span><span style="color:#E1E4E8;">(newStrategy);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 移动网络特定优化</span></span>
<span class="line"><span style="color:#B392F0;">  applyMobileSpecificOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // TCP优化 - 更积极的拥塞控制</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optimizeTCPForMobile</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 减少DNS查询</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">minimizeDNSLookups</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 避免重定向链</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">eliminateRedirects</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 启用TLS会话恢复</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">enableTLSSessionResumption</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 省流模式优化</span></span>
<span class="line"><span style="color:#B392F0;">  setupDataSaverOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connection </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.connection.saveData) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 降低图片质量</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-saver-mode&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 禁用视频自动播放</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> videos</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;video[autoplay]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      videos.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">video</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        video.</span><span style="color:#B392F0;">removeAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;autoplay&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 减少非关键请求</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deferNonCriticalRequests</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="security-performance-balance" tabindex="-1">安全与性能平衡 <a class="header-anchor" href="#security-performance-balance" aria-label="Permalink to &quot;安全与性能平衡 {#security-performance-balance}&quot;">​</a></h2><p>安全措施如 TLS 加密和 CSP 策略可能影响性能。优化策略包括 TLS 会话恢复、OCSP 装订、证书优化和安全头精简。平衡安全要求和性能影响。</p><p>特点：安全优化关注<strong>加密效率</strong>和<strong>策略开销</strong>。使用现代密码套件，优化证书链，减少安全检查的往返次数。</p><p>示意图： TLS 性能优化： 完全握手：2 RTT + 高 CPU 成本 → 会话恢复：1 RTT → 0-RTT：0 RTT 安全头优化：精简 CSP 策略 + 合理 HSTS 配置 + 移除不必要头 平衡点：足够安全 + 最小性能影响</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// TLS与安全优化配置</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SecurityPerformanceOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tlsConfig </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getOptimalTLSConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取最优TLS配置</span></span>
<span class="line"><span style="color:#B392F0;">  getOptimalTLSConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 现代密码套件，平衡安全和性能</span></span>
<span class="line"><span style="color:#E1E4E8;">      ciphers: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;TLS_AES_128_GCM_SHA256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;TLS_AES_256_GCM_SHA384&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;TLS_CHACHA20_POLY1305_SHA256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;ECDHE-ECDSA-AES128-GCM-SHA256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;ECDHE-RSA-AES128-GCM-SHA256&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ].</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 启用会话恢复</span></span>
<span class="line"><span style="color:#E1E4E8;">      sessionTickets: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sessionTimeout: </span><span style="color:#79B8FF;">3600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // OCSP装订减少往返</span></span>
<span class="line"><span style="color:#E1E4E8;">      ocspStapling: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 支持0-RTT（权衡安全）</span></span>
<span class="line"><span style="color:#E1E4E8;">      earlyData: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 证书优化</span></span>
<span class="line"><span style="color:#E1E4E8;">      certificateTypes: [</span><span style="color:#9ECBFF;">&#39;ECDSA&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;RSA&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      keyCurves: [</span><span style="color:#9ECBFF;">&#39;X25519&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;P-256&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 安全头优化</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeSecurityHeaders</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> headers</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 精简的CSP策略</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Content-Security-Policy&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateOptimalCSP</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 合理的HSTS配置</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Strict-Transport-Security&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;max-age=31536000; includeSubDomains&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 性能友好的特性策略</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;Permissions-Policy&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generatePermissionsPolicy</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 移除不必要头</span></span>
<span class="line"><span style="color:#6A737D;">      // &#39;X-Powered-By&#39;: &#39;&#39;,</span><span style="color:#6A737D;"> // 移除</span></span>
<span class="line"><span style="color:#6A737D;">      // &#39;Server&#39;: &#39;&#39;,</span><span style="color:#6A737D;"> // 移除或简化</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> headers;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成优化的CSP策略</span></span>
<span class="line"><span style="color:#B392F0;">  generateOptimalCSP</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于应用需求生成最小化的CSP</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;default-src &#39;self&#39;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;script-src &#39;self&#39; &#39;unsafe-inline&#39; https://cdn.example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;style-src &#39;self&#39; &#39;unsafe-inline&#39; https://fonts.googleapis.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;img-src &#39;self&#39; data: https:&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;font-src &#39;self&#39; https://fonts.gstatic.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;connect-src &#39;self&#39; https://api.example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;frame-ancestors &#39;none&#39;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;base-uri &#39;self&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ].</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;; &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 证书优化建议</span></span>
<span class="line"><span style="color:#B392F0;">  suggestCertificateOptimizations</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      useECDSA: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// ECDSA证书更小更快</span></span>
<span class="line"><span style="color:#E1E4E8;">      preferLetsEncrypt: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 短的证书链</span></span>
<span class="line"><span style="color:#E1E4E8;">      ocspMustStaple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// 强制OCSP装订</span></span>
<span class="line"><span style="color:#E1E4E8;">      certificateTransparency: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 证书透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">      renewBeforeExpiry: </span><span style="color:#79B8FF;">30</span><span style="color:#6A737D;">     // 提前30天续期</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 安全扫描性能影响评估</span></span>
<span class="line"><span style="color:#B392F0;">  assessSecurityScanImpact</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> securityChecks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;CSP Validation&#39;</span><span style="color:#E1E4E8;">, impact: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">, duration: </span><span style="color:#9ECBFF;">&#39;1-5ms&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;XSS Filter&#39;</span><span style="color:#E1E4E8;">, impact: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">, duration: </span><span style="color:#9ECBFF;">&#39;1-3ms&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;TLS Handshake&#39;</span><span style="color:#E1E4E8;">, impact: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, duration: </span><span style="color:#9ECBFF;">&#39;100-300ms&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Certificate Verification&#39;</span><span style="color:#E1E4E8;">, impact: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">, duration: </span><span style="color:#9ECBFF;">&#39;5-20ms&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;Request Signature Validation&#39;</span><span style="color:#E1E4E8;">, impact: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">, duration: </span><span style="color:#9ECBFF;">&#39;10-50ms&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> securityChecks.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">check</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> check.impact </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="network-performance-monitoring" tabindex="-1">网络性能监控 <a class="header-anchor" href="#network-performance-monitoring" aria-label="Permalink to &quot;网络性能监控 {#network-performance-monitoring}&quot;">​</a></h2><p>实时监控网络性能指标，识别瓶颈和优化机会。使用 Navigation Timing API、Resource Timing API 和 Performance Observer 收集网络性能数据。</p><p>特点：网络监控关注<strong>真实用户体验</strong>和<strong>关键性能指标</strong>。结合合成监控和真实用户监控，全面了解网络性能状况。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 网络性能监控器</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> NetworkPerformanceMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 开始监控网络性能</span></span>
<span class="line"><span style="color:#B392F0;">  startMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupNavigationTiming</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupResourceTiming</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupNetworkInformation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 导航计时监控</span></span>
<span class="line"><span style="color:#B392F0;">  setupNavigationTiming</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> navigation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">getEntriesByType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigation) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordNavigationMetrics</span><span style="color:#E1E4E8;">(navigation);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 资源计时监控</span></span>
<span class="line"><span style="color:#B392F0;">  setupResourceTiming</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PerformanceObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list.</span><span style="color:#B392F0;">getEntries</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entry</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordResourceMetrics</span><span style="color:#E1E4E8;">(entry);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">({ entryTypes: [</span><span style="color:#9ECBFF;">&#39;resource&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 记录导航指标</span></span>
<span class="line"><span style="color:#B392F0;">  recordNavigationMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">navigation</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> metrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dnsLookup: navigation.domainLookupEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.domainLookupStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tcpConnect: navigation.connectEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.connectStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tlsHandshake: navigation.connectEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.secureConnectionStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ttfb: navigation.responseStart </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.requestStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      contentLoad: navigation.responseEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.responseStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      domContentLoaded: navigation.domContentLoadedEventEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.domContentLoadedEventStart,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fullLoad: navigation.loadEventEnd </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> navigation.loadEventStart</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">, metrics);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzeNavigationPerformance</span><span style="color:#E1E4E8;">(metrics);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 分析导航性能</span></span>
<span class="line"><span style="color:#B392F0;">  analyzeNavigationPerformance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metrics</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> thresholds</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dnsLookup: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 100ms</span></span>
<span class="line"><span style="color:#E1E4E8;">      tcpConnect: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 150ms  </span></span>
<span class="line"><span style="color:#E1E4E8;">      tlsHandshake: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 200ms</span></span>
<span class="line"><span style="color:#E1E4E8;">      ttfb: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,         </span><span style="color:#6A737D;">// 600ms</span></span>
<span class="line"><span style="color:#E1E4E8;">      contentLoad: </span><span style="color:#79B8FF;">500</span><span style="color:#6A737D;">   // 500ms</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(metrics).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">metric</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (thresholds[metric] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> thresholds[metric]) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reportPerformanceIssue</span><span style="color:#E1E4E8;">(metric, value, thresholds[metric]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 网络信息监控</span></span>
<span class="line"><span style="color:#B392F0;">  setupNetworkInformation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigator.connection) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> connection</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> navigator.connection;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      connection.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordConnectionChange</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          effectiveType: connection.effectiveType,</span></span>
<span class="line"><span style="color:#E1E4E8;">          downlink: connection.downlink,</span></span>
<span class="line"><span style="color:#E1E4E8;">          rtt: connection.rtt,</span></span>
<span class="line"><span style="color:#E1E4E8;">          saveData: connection.saveData</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成网络性能报告</span></span>
<span class="line"><span style="color:#B392F0;">  generateNetworkReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      summary: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateSummaryMetrics</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      resources: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">analyzeResourcePerformance</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateOptimizationRecommendations</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算摘要指标</span></span>
<span class="line"><span style="color:#B392F0;">  calculateSummaryMetrics</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> navigation</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;navigation&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resources</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metric</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> metric.resourceType);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      averageTTFB: navigation.ttfb,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalResources: resources.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalBytes: resources.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (r.transferSize </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      slowResources: resources.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.duration </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // CDN性能分析</span></span>
<span class="line"><span style="color:#B392F0;">  analyzeCDNPerformance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> resourcesByDomain</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.metrics.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">metric</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (metric.resourceType) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> domain</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> URL</span><span style="color:#E1E4E8;">(metric.name).hostname;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">resourcesByDomain.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(domain)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          resourcesByDomain.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(domain, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        resourcesByDomain.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(domain).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(metric);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分析每个域名的性能</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cdnPerformance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    resourcesByDomain.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resources</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">domain</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> avgResponseTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> resources.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> r.duration, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> resources.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> successRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> resources.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.responseStatus </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 400</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> resources.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      cdnPerformance.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        domain,</span></span>
<span class="line"><span style="color:#E1E4E8;">        avgResponseTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">        successRate,</span></span>
<span class="line"><span style="color:#E1E4E8;">        requestCount: resources.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> cdnPerformance.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.avgResponseTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.avgResponseTime);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,50)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
