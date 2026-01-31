import{_ as s,c as n,o as p,b as e}from"./chunks/framework.CMLuPXeo.js";const g=JSON.parse('{"title":"node 简介","description":"","frontmatter":{},"headers":[{"level":2,"title":"事件驱动架构","slug":"事件驱动架构","link":"#事件驱动架构","children":[]},{"level":2,"title":"非阻塞 I/O","slug":"非阻塞-i-o","link":"#非阻塞-i-o","children":[]},{"level":2,"title":"单线程事件循环","slug":"单线程事件循环","link":"#单线程事件循环","children":[]},{"level":2,"title":"异步编程","slug":"异步编程","link":"#异步编程","children":[]},{"level":2,"title":"NPM 生态系统","slug":"npm-生态系统","link":"#npm-生态系统","children":[]},{"level":2,"title":"模块系统","slug":"模块系统","link":"#模块系统","children":[]},{"level":2,"title":"性能特点","slug":"性能特点","link":"#性能特点","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"relativePath":"basic/node/intro.md","filePath":"basic/node/intro.md"}'),l={name:"basic/node/intro.md"};function i(t,a,c,o,d,r){return p(),n("div",null,[...a[0]||(a[0]=[e(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/node/intro.md for this page in Markdown format</div><h1 id="node-简介" tabindex="-1">node 简介 <a class="header-anchor" href="#node-简介" aria-label="Permalink to &quot;node 简介&quot;">​</a></h1><p>Node.js 是一个开源的、跨平台的 JavaScript 运行时环境，基于 Chrome 的 V8 JavaScript 引擎构建。它由 Ryan Dahl 于 2009 年创建，旨在让开发者使用 JavaScript 编写高性能的服务器端应用。Node.js 打破了 JavaScript 仅限浏览器运行的局限，通过事件驱动和非阻塞 I/O 模型，实现了高并发处理能力，特别适合构建实时应用、API 服务和微服务架构。</p><h2 id="事件驱动架构" tabindex="-1">事件驱动架构 <a class="header-anchor" href="#事件驱动架构" aria-label="Permalink to &quot;事件驱动架构&quot;">​</a></h2><p>Node.js 的核心是事件驱动架构，它通过事件发射器和监听器处理异步操作。当特定事件发生时 (如网络请求完成)，事件发射器会触发事件，而注册的监听器则执行相应回调函数。这种模型避免了多线程编程的复杂性，同时提高了资源利用率。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>事件流:</span></span>
<span class="line"><span>  事件发射器 --触发--&gt; 事件监听器</span></span>
<span class="line"><span>  例如: </span></span>
<span class="line"><span>    server.on(&#39;request&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>      // 处理请求</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>事件驱动使得应用能够以非阻塞方式响应多个输入，例如在 Web 服务器中，一个请求不会阻塞其他请求的处理。</p><h2 id="非阻塞-i-o" tabindex="-1">非阻塞 I/O <a class="header-anchor" href="#非阻塞-i-o" aria-label="Permalink to &quot;非阻塞 I/O&quot;">​</a></h2><p>Node.js 采用非阻塞 I/O 模型，在执行输入输出操作 (如文件读写或网络调用) 时，不会等待操作完成，而是立即返回并继续执行其他任务。当 I/O 操作完成后，通过回调函数处理结果。这显著提升了吞吐量，尤其在高 I/O 负载场景下。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>同步 I/O:</span></span>
<span class="line"><span>  请求 --&gt; [阻塞等待] --&gt; 响应</span></span>
<span class="line"><span>  例如: 读取文件时，线程被挂起，直到数据返回。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>非阻塞 I/O:</span></span>
<span class="line"><span>  请求 --&gt; [立即返回] --&gt; 执行其他任务 --&gt; 回调处理响应</span></span>
<span class="line"><span>  例如: </span></span>
<span class="line"><span>    fs.readFile(&#39;file.txt&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span>      // 文件读取完成后执行</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>这种机制通过底层库 libuv 实现，它利用操作系统特性 (如 epoll 或 kqueue) 来管理异步操作，确保单线程也能高效处理并发。</p><h2 id="单线程事件循环" tabindex="-1">单线程事件循环 <a class="header-anchor" href="#单线程事件循环" aria-label="Permalink to &quot;单线程事件循环&quot;">​</a></h2><p>尽管 Node.js 运行在单线程中，但它通过事件循环机制实现并发。事件循环不断检查事件队列，依次执行就绪的回调函数，同时将耗时的 I/O 操作委托给系统线程池 (通过 libuv 管理)。这避免了线程创建和上下文切换的开销，但要求开发者避免 CPU 密集型任务阻塞主线程。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>事件循环流程:</span></span>
<span class="line"><span>  开始 --&gt; 检查计时器 --&gt; 检查 I/O 回调 --&gt; 检查闲置句柄 --&gt; 循环</span></span>
<span class="line"><span>  例如:</span></span>
<span class="line"><span>    while (有事件) {</span></span>
<span class="line"><span>      处理下一个事件;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>如果主线程被阻塞，事件循环会停滞，导致应用无响应。因此，Node.js 推荐将 CPU 密集型任务分流到工作线程或子进程。</p><h2 id="异步编程" tabindex="-1">异步编程 <a class="header-anchor" href="#异步编程" aria-label="Permalink to &quot;异步编程&quot;">​</a></h2><p>Node.js 强调异步编程模式，最初通过回调函数实现，但容易引发“回调地狱”。后续引入了 Promise 和 async/await 语法，使代码更易读和维护。异步操作允许任务在后台执行，主线程继续处理其他事件。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>回调示例:</span></span>
<span class="line"><span>  fs.readFile(&#39;data.json&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span>    if (err) throw err;</span></span>
<span class="line"><span>    console.log(data);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Promise 示例:</span></span>
<span class="line"><span>  fetch(&#39;https://api.example.com/data&#39;)</span></span>
<span class="line"><span>    .then(response =&gt; response.json())</span></span>
<span class="line"><span>    .then(data =&gt; console.log(data))</span></span>
<span class="line"><span>    .catch(error =&gt; console.error(error));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async/await 示例:</span></span>
<span class="line"><span>  async function getData() {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const data = await fetchData();</span></span>
<span class="line"><span>      console.log(data);</span></span>
<span class="line"><span>    } catch (error) {</span></span>
<span class="line"><span>      console.error(error);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>这些模式通过微任务队列和事件循环协调，确保异步操作按顺序执行，而不会阻塞主线程。</p><h2 id="npm-生态系统" tabindex="-1">NPM 生态系统 <a class="header-anchor" href="#npm-生态系统" aria-label="Permalink to &quot;NPM 生态系统&quot;">​</a></h2><p>Node.js 集成了 NPM (Node Package Manager)，这是全球最大的软件注册表，提供超过百万个可重用模块。NPM 允许开发者轻松安装、管理和共享代码包，加速开发流程。例如，使用 <code>npm install express</code> 可以快速添加 Web 框架。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NPM 工作流:</span></span>
<span class="line"><span>  项目初始化 --&gt; 安装依赖 --&gt; 使用模块</span></span>
<span class="line"><span>  例如:</span></span>
<span class="line"><span>    npm init -y</span></span>
<span class="line"><span>    npm install lodash</span></span>
<span class="line"><span>    const _ = require(&#39;lodash&#39;);</span></span></code></pre></div><p>NPM 还支持脚本管理和版本控制，使项目依赖管理变得简单可靠。</p><h2 id="模块系统" tabindex="-1">模块系统 <a class="header-anchor" href="#模块系统" aria-label="Permalink to &quot;模块系统&quot;">​</a></h2><p>Node.js 使用 CommonJS 模块系统，允许将代码拆分为可重用的模块。每个文件被视为一个模块，通过 <code>require</code> 导入和 <code>module.exports</code> 导出功能。这促进了代码组织和维护。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块示例:</span></span>
<span class="line"><span>  // math.js</span></span>
<span class="line"><span>  module.exports = {</span></span>
<span class="line"><span>    add: (a, b) =&gt; a + b</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // app.js</span></span>
<span class="line"><span>  const math = require(&#39;./math.js&#39;);</span></span>
<span class="line"><span>  console.log(math.add(2, 3)); // 输出 5</span></span></code></pre></div><p>ES 模块也得到支持，可通过 <code>import</code> 和 <code>export</code> 语法使用，适应现代 JavaScript 标准。</p><h2 id="性能特点" tabindex="-1">性能特点 <a class="header-anchor" href="#性能特点" aria-label="Permalink to &quot;性能特点&quot;">​</a></h2><p>Node.js 的性能优势源于 V8 引擎的即时编译 (JIT) 优化和事件驱动设计。V8 将 JavaScript 代码编译为机器码，提升执行速度，而事件循环减少了资源争用。在高并发场景下，Node.js 能够处理数千个同时连接，延迟较低。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>请求处理对比:</span></span>
<span class="line"><span>  传统多线程:</span></span>
<span class="line"><span>    请求1 --&gt; [线程1] --&gt; 响应</span></span>
<span class="line"><span>    请求2 --&gt; [线程2] --&gt; 响应</span></span>
<span class="line"><span>    资源开销高，上下文切换频繁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Node.js 单线程:</span></span>
<span class="line"><span>    请求1 --&gt; [事件循环] --&gt; 回调</span></span>
<span class="line"><span>    请求2 --&gt; [事件循环] --&gt; 回调</span></span>
<span class="line"><span>    资源利用率高，适合 I/O 密集型任务</span></span></code></pre></div><p>然而，对于 CPU 密集型应用 (如图像处理)，Node.js 可能性能不佳，建议使用工作线程或外部服务。</p><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><p>Node.js 广泛应用于实时应用、RESTful API、微服务和命令行工具。例如，WebSocket 服务器可以处理实时聊天，而 Express 框架简化了 Web 服务开发。其轻量级特性也适合云原生和容器化部署。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>典型应用:</span></span>
<span class="line"><span>  实时应用: 聊天室 --WebSocket--&gt; 广播消息</span></span>
<span class="line"><span>  API 服务: 客户端 --HTTP请求--&gt; Node.js 处理 --&gt; 数据库</span></span>
<span class="line"><span>  工具链: 构建脚本 --文件操作--&gt; 输出结果</span></span></code></pre></div>`,42)])])}const u=s(l,[["render",i]]);export{g as __pageData,u as default};
