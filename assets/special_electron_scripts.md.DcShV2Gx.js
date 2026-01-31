import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 运行 Python/Go/Java","description":"","frontmatter":{},"headers":[{"level":2,"title":"多语言集成概述","slug":"多语言集成概述","link":"#多语言集成概述","children":[]},{"level":2,"title":"Python 集成","slug":"python-集成","link":"#python-集成","children":[{"level":3,"title":"集成架构与特点","slug":"集成架构与特点","link":"#集成架构与特点","children":[]},{"level":3,"title":"electron-python-shell 集成","slug":"electron-python-shell-集成","link":"#electron-python-shell-集成","children":[]},{"level":3,"title":"原生子进程集成","slug":"原生子进程集成","link":"#原生子进程集成","children":[]}]},{"level":2,"title":"Go 语言集成","slug":"go-语言集成","link":"#go-语言集成","children":[{"level":3,"title":"集成架构与特点","slug":"集成架构与特点-1","link":"#集成架构与特点-1","children":[]},{"level":3,"title":"gotron 框架集成","slug":"gotron-框架集成","link":"#gotron-框架集成","children":[]},{"level":3,"title":"WebAssembly 集成","slug":"webassembly-集成","link":"#webassembly-集成","children":[]}]},{"level":2,"title":"Java 集成","slug":"java-集成","link":"#java-集成","children":[{"level":3,"title":"集成架构与特点","slug":"集成架构与特点-2","link":"#集成架构与特点-2","children":[]},{"level":3,"title":"子进程与 HTTP 服务集成","slug":"子进程与-http-服务集成","link":"#子进程与-http-服务集成","children":[]},{"level":3,"title":"WebSocket 实时通信集成","slug":"websocket-实时通信集成","link":"#websocket-实时通信集成","children":[]}]},{"level":2,"title":"跨语言统一管理","slug":"跨语言统一管理","link":"#跨语言统一管理","children":[{"level":3,"title":"多运行时协调器","slug":"多运行时协调器","link":"#多运行时协调器","children":[]}]}],"relativePath":"special/electron/scripts.md","filePath":"special/electron/scripts.md"}'),o={name:"special/electron/scripts.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/scripts.md for this page in Markdown format</div><h1 id="electron-运行-python-go-java" tabindex="-1">Electron 运行 Python/Go/Java <a class="header-anchor" href="#electron-运行-python-go-java" aria-label="Permalink to &quot;Electron 运行 Python/Go/Java&quot;">​</a></h1><h2 id="多语言集成概述" tabindex="-1">多语言集成概述 <a class="header-anchor" href="#多语言集成概述" aria-label="Permalink to &quot;多语言集成概述&quot;">​</a></h2><p>Electron 作为基于 Web 技术的跨平台桌面应用开发框架，通过集成 <strong>Python</strong>、<strong>Go</strong> 和 <strong>Java</strong> 等后端语言，实现了<strong>前端界面</strong>与<strong>后端逻辑</strong>的完美分离。这种架构既保留了 Electron 在用户界面开发上的优势，又充分利用了各语言在特定领域的专长，为构建功能丰富的桌面应用提供了更多可能性。</p><p>多语言集成的核心在于<strong>进程间通信</strong>，Electron 的主进程作为协调中心，管理与不同语言后端的通信桥梁：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 渲染进程 (HTML/CSS/JavaScript)</span></span>
<span class="line"><span>        ↑↓ IPC 通信</span></span>
<span class="line"><span>Electron 主进程 (Node.js)</span></span>
<span class="line"><span>        ↑↓ 子进程/网络通信</span></span>
<span class="line"><span>Python/Go/Java 后端进程</span></span>
<span class="line"><span>        ↑</span></span>
<span class="line"><span>系统资源与原生功能</span></span></code></pre></div><h2 id="python-集成" tabindex="-1">Python 集成 <a class="header-anchor" href="#python-集成" aria-label="Permalink to &quot;Python 集成&quot;">​</a></h2><h3 id="集成架构与特点" tabindex="-1">集成架构与特点 <a class="header-anchor" href="#集成架构与特点" aria-label="Permalink to &quot;集成架构与特点&quot;">​</a></h3><p>Python 与 Electron 的集成主要通过<strong>子进程创建</strong>和<strong>标准输入输出通信</strong>实现。这种模式允许 Electron 应用调用 Python 的丰富生态库，特别是在<strong>数据科学</strong>、<strong>机器学习</strong>和<strong>脚本自动化</strong>领域。</p><p><strong>Python 集成架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 前端界面</span></span>
<span class="line"><span>    ↑↓ 事件驱动</span></span>
<span class="line"><span>Node.js 子进程</span></span>
<span class="line"><span>    ↑↓ stdio/管道</span></span>
<span class="line"><span>Python 解释器</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>NumPy/Pandas/Matplotlib 等科学计算库</span></span></code></pre></div><h3 id="electron-python-shell-集成" tabindex="-1">electron-python-shell 集成 <a class="header-anchor" href="#electron-python-shell-集成" aria-label="Permalink to &quot;electron-python-shell 集成&quot;">​</a></h3><p><code>electron-python-shell</code> 库提供了高级的 Python 集成能力，简化了进程管理和通信复杂度。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// python-integration.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { PythonShell } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-python-shell&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PythonIntegration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pythonShell </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupPythonEnvironment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 配置 Python 环境</span></span>
<span class="line"><span style="color:#B392F0;">  setupPythonEnvironment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> pythonOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mode: </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pythonPath: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPythonPath</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      pythonOptions: [</span><span style="color:#9ECBFF;">&#39;-u&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 无缓冲输出</span></span>
<span class="line"><span style="color:#E1E4E8;">      scriptPath: </span><span style="color:#9ECBFF;">&#39;./python-scripts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      args: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pythonShell </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PythonShell</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app.py&#39;</span><span style="color:#E1E4E8;">, pythonOptions);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMessageHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取 Python 解释器路径</span></span>
<span class="line"><span style="color:#B392F0;">  getPythonPath</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 开发环境下使用系统 Python</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;python&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;python3&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 生产环境下使用打包的 Python</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;./python/python.exe&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置消息处理器</span></span>
<span class="line"><span style="color:#B392F0;">  setupMessageHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Python 输出:&#39;</span><span style="color:#E1E4E8;">, message);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handlePythonMessage</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stderr&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Python 错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handlePythonError</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Python 进程已关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handlePythonExit</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 执行 Python 脚本</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> executePythonScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scriptName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        command: </span><span style="color:#9ECBFF;">&#39;execute&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        script: scriptName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        args: args,</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> timeout</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Python 脚本执行超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(result));</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行 Python 脚本失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 数据处理示例</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processDataWithPandas</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executePythonScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data_processor.py&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      operation: </span><span style="color:#9ECBFF;">&#39;analyze&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: data,</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;pandas&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 机器学习推理</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> runMachineLearningInference</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executePythonScript</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ml_model.py&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      action: </span><span style="color:#9ECBFF;">&#39;predict&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      input: inputData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      model: </span><span style="color:#9ECBFF;">&#39;random_forest&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭 Python 进程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shutdown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pythonShell) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.pythonShell.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.pythonShell </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> pythonIntegration</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PythonIntegration</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="原生子进程集成" tabindex="-1">原生子进程集成 <a class="header-anchor" href="#原生子进程集成" aria-label="Permalink to &quot;原生子进程集成&quot;">​</a></h3><p>对于需要更精细控制的场景，可以直接使用 Node.js 的 <code>child_process</code> 模块。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// native-python.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pathToPythonScripts } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../config/paths.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> NativePythonRunner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.activeProcesses </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 执行 Python 脚本并返回 Promise</span></span>
<span class="line"><span style="color:#B392F0;">  executePythonScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scriptPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fullScriptPath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">pathToPythonScripts</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">scriptPath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> pythonArgs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [fullScriptPath, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> pythonProcess</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPythonCommand</span><span style="color:#E1E4E8;">(), pythonArgs, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cwd: pathToPythonScripts,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> processId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(processId, pythonProcess);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> stdoutData </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> stderrData </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      pythonProcess.stdout.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdoutData </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Python stdout: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      pythonProcess.stderr.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stderrData </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Python stderr: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      pythonProcess.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (code </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(stdoutData);</span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">(stdoutData.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Python 进程退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}, 错误: \${</span><span style="color:#E1E4E8;">stderrData</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      pythonProcess.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`启动 Python 进程失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 设置超时</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (options.timeout) {</span></span>
<span class="line"><span style="color:#B392F0;">        setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(processId)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pythonProcess.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">            reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Python 脚本执行超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, options.timeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getPythonCommand</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        ?</span><span style="color:#9ECBFF;"> &#39;./python/python.exe&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        :</span><span style="color:#9ECBFF;"> &#39;./python/bin/python3&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> process.platform </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;win32&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;python&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;python3&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 向运行的 Python 进程发送数据</span></span>
<span class="line"><span style="color:#B392F0;">  sendToPythonProcess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">processId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> process</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> process.stdin.writable) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.stdin.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 终止 Python 进程</span></span>
<span class="line"><span style="color:#B392F0;">  terminateProcess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">processId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> process</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.activeProcesses.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(processId);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> nativePythonRunner</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NativePythonRunner</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="go-语言集成" tabindex="-1">Go 语言集成 <a class="header-anchor" href="#go-语言集成" aria-label="Permalink to &quot;Go 语言集成&quot;">​</a></h2><h3 id="集成架构与特点-1" tabindex="-1">集成架构与特点 <a class="header-anchor" href="#集成架构与特点-1" aria-label="Permalink to &quot;集成架构与特点&quot;">​</a></h3><p>Go 语言与 Electron 的集成主要通过 <strong>WebSocket 通信</strong>或 <strong>HTTP 服务</strong>实现。Go 的<strong>编译型特性</strong>和<strong>卓越的并发性能</strong>使其特别适合处理高并发后端任务和系统级操作。</p><p><strong>Go 集成架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 渲染进程</span></span>
<span class="line"><span>    ↑↓ WebSocket/HTTP</span></span>
<span class="line"><span>Go HTTP/WebSocket 服务</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>Go 并发例程</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>系统调用与高性能计算</span></span></code></pre></div><h3 id="gotron-框架集成" tabindex="-1">gotron 框架集成 <a class="header-anchor" href="#gotron-框架集成" aria-label="Permalink to &quot;gotron 框架集成&quot;">​</a></h3><p><code>gotron</code> 提供了完整的 Go 语言 API 用于 Electron 应用开发，实现了 Go 后端与 Electron 前端的深度集成。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// go-gotron-integration.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EventEmitter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> GoTronIntegration</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.websocket </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.backendPort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isConnected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reconnectAttempts </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxReconnectAttempts </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化 Go 后端连接</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startGoBackend</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">connectToWebSocket</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMessageHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Go 后端初始化失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleReconnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动 Go 后端进程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startGoBackend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在真实场景中，这里会启动编译好的 Go 可执行文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动 Go 后端服务...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 模拟获取后端端口（实际从环境变量或配置读取）</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.backendPort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getBackendPort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 连接到 WebSocket</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connectToWebSocket</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> port</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.backendPort </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 8080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> wsUrl</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`ws://localhost:\${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}/web/app/events\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.websocket </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WebSocket</span><span style="color:#E1E4E8;">(wsUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.websocket.</span><span style="color:#B392F0;">onopen</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;已连接到 Go 后端 WebSocket&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.isConnected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.reconnectAttempts </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.websocket.</span><span style="color:#B392F0;">onerror</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket 连接错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.websocket.</span><span style="color:#B392F0;">onclose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket 连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.isConnected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleReconnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置消息处理器</span></span>
<span class="line"><span style="color:#B392F0;">  setupMessageHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.websocket.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(message.data);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleGoMessage</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解析 Go 消息失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理来自 Go 的消息</span></span>
<span class="line"><span style="color:#B392F0;">  handleGoMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (event) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;performance-metrics&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;performanceUpdate&#39;</span><span style="color:#E1E4E8;">, payload);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;system-info&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;systemInfoUpdate&#39;</span><span style="color:#E1E4E8;">, payload);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;file-operation-result&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fileOperationComplete&#39;</span><span style="color:#E1E4E8;">, payload);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, { event, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">payload });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送消息到 Go 后端</span></span>
<span class="line"><span style="color:#B392F0;">  sendToGo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isConnected </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.websocket) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;未连接到 Go 后端&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">data</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.websocket.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 高性能计算任务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> executeConcurrentTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> taskId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`task-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeout</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeListener</span><span style="color:#E1E4E8;">(taskId, taskHandler);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;任务执行超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#B392F0;"> taskHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeListener</span><span style="color:#E1E4E8;">(taskId, taskHandler);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(taskId, taskHandler);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendToGo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;execute-task&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskType,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parameters</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 系统监控</span></span>
<span class="line"><span style="color:#B392F0;">  startSystemMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendToGo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-monitoring&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      metrics: [</span><span style="color:#9ECBFF;">&#39;cpu&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;memory&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;disk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;network&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      interval: </span><span style="color:#79B8FF;">5000</span><span style="color:#6A737D;"> // 5秒间隔</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 文件系统操作</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> performFileOperation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">operation</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeConcurrentTask</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file-operation&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      operation,</span></span>
<span class="line"><span style="color:#E1E4E8;">      filePath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 重连机制</span></span>
<span class="line"><span style="color:#B392F0;">  scheduleReconnection</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.reconnectAttempts </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxReconnectAttempts) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;达到最大重连次数，放弃连接&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> delay</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.reconnectAttempts) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 指数退避</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reconnectAttempts</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">delay</span><span style="color:#9ECBFF;">}ms 后尝试重新连接...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleReconnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, delay);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getBackendPort</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> window.backendPort </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 8080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> goTronIntegration</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> GoTronIntegration</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="webassembly-集成" tabindex="-1">WebAssembly 集成 <a class="header-anchor" href="#webassembly-集成" aria-label="Permalink to &quot;WebAssembly 集成&quot;">​</a></h3><p>Go 代码可以编译为 WebAssembly，在 Electron 的渲染进程中直接运行。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// go-wasm-integration.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> GoWasmIntegration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.go </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.wasmModule </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化 Go WASM 模块</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initialized) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 加载 Go WASM 模块</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> go</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Go</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">instantiateStreaming</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#B392F0;">        fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./wasm/main.wasm&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        go.importObject</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.wasmModule </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result.instance;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.go </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> go;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 在单独的 Worker 中运行以避免阻塞 UI</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">runInWorker</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.initialized </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Go WASM 模块初始化成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;初始化 Go WASM 失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 在 Web Worker 中运行 WASM</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> runInWorker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> Worker </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 回退到主线程运行</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.go.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.wasmModule);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./workers/go-wasm-worker.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      worker.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (e.data.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ready&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleWorkerMessage</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.worker </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> worker;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 调用 Go WASM 函数</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> callGoFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureInitialized</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.worker) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callViaWorker</span><span style="color:#E1E4E8;">(functionName, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callDirectly</span><span style="color:#E1E4E8;">(functionName, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 通过 Worker 调用</span></span>
<span class="line"><span style="color:#B392F0;">  callViaWorker</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> callId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#B392F0;"> handleResponse</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (e.data.callId </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> callId) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.worker.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, handleResponse);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (e.data.error) {</span></span>
<span class="line"><span style="color:#B392F0;">            reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(e.data.error));</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">(e.data.result);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.worker.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, handleResponse);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;call&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        callId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        functionName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        args</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 直接调用（在主线程）</span></span>
<span class="line"><span style="color:#B392F0;">  callDirectly</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">functionName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.wasmModule.exports[functionName]) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Go 函数不存在: \${</span><span style="color:#E1E4E8;">functionName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.wasmModule.exports[functionName](</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 高性能计算示例</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> performComplexCalculation</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callGoFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;CalculateComplexAlgorithm&#39;</span><span style="color:#E1E4E8;">, inputData);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 数据加密/解密</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> encryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callGoFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;EncryptData&#39;</span><span style="color:#E1E4E8;">, data, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> decryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">encryptedData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callGoFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DecryptData&#39;</span><span style="color:#E1E4E8;">, encryptedData, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ensureInitialized</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.initialized) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> goWasmIntegration</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> GoWasmIntegration</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="java-集成" tabindex="-1">Java 集成 <a class="header-anchor" href="#java-集成" aria-label="Permalink to &quot;Java 集成&quot;">​</a></h2><h3 id="集成架构与特点-2" tabindex="-1">集成架构与特点 <a class="header-anchor" href="#集成架构与特点-2" aria-label="Permalink to &quot;集成架构与特点&quot;">​</a></h3><p>Java 与 Electron 的集成通常通过<strong>本地进程启动</strong>和 <strong>HTTP/WebSocket 通信</strong>实现。这种架构充分利用了 Java 在<strong>企业级应用</strong>、<strong>大规模数据处理</strong>和<strong>现有系统集成</strong>方面的优势。</p><p><strong>Java 集成架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 用户界面</span></span>
<span class="line"><span>    ↑↓ REST API/WebSocket</span></span>
<span class="line"><span>Java Spring Boot 服务</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>Java 虚拟机 (JVM)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>企业级 Java 生态 (Spring/Hibernate等)</span></span></code></pre></div><h3 id="子进程与-http-服务集成" tabindex="-1">子进程与 HTTP 服务集成 <a class="header-anchor" href="#子进程与-http-服务集成" aria-label="Permalink to &quot;子进程与 HTTP 服务集成&quot;">​</a></h3><p>通过启动 Java 进程并与其 HTTP 服务通信，实现 Electron 与 Java 后端的无缝集成。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// java-integration.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createInterface } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;readline&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EventEmitter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> JavaIntegration</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.javaProcess </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.servicePort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.serviceBaseUrl </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isServiceReady </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化 Java 服务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startJavaProcess</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">waitForServiceReady</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupProcessHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Java 服务初始化失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动 Java 进程</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startJavaProcess</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> javaCommand</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getJavaCommand</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> classpath</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getClasspath</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mainClass</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;com.example.MainApplication&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;-cp&#39;</span><span style="color:#E1E4E8;">, classpath, mainClass];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.javaProcess </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(javaCommand, args, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cwd: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getJavaAppPath</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 读取 Java 服务输出</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> rl</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createInterface</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        input: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.javaProcess.stdout,</span></span>
<span class="line"><span style="color:#E1E4E8;">        terminal: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      rl.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">line</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Java: \${</span><span style="color:#E1E4E8;">line</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parseJavaOutput</span><span style="color:#E1E4E8;">(line);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.javaProcess.stderr.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Java 错误: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()));</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.javaProcess.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Java 进程退出，代码: \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.isServiceReady </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceStopped&#39;</span><span style="color:#E1E4E8;">, code);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.javaProcess.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动 Java 进程失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 设置超时</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isServiceReady) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Java 服务启动超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 解析 Java 输出</span></span>
<span class="line"><span style="color:#B392F0;">  parseJavaOutput</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> logEntry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(line);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (logEntry.message </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> logEntry.message.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;服务启动在端口&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extractServicePort</span><span style="color:#E1E4E8;">(logEntry.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log&#39;</span><span style="color:#E1E4E8;">, logEntry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 非 JSON 输出，直接处理</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;服务启动在端口&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extractServicePort</span><span style="color:#E1E4E8;">(line);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 提取服务端口</span></span>
<span class="line"><span style="color:#B392F0;">  extractServicePort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portMatch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> message.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">端口</span><span style="color:#79B8FF;">[:：]</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (portMatch) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.servicePort </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(portMatch[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.serviceBaseUrl </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`http://localhost:\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">servicePort</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isServiceReady </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceReady&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.serviceBaseUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 等待服务就绪</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> waitForServiceReady</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isServiceReady) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeout</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;等待 Java 服务就绪超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceReady&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 调用 Java REST API</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">endpoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">method</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;GET&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureServiceReady</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> url</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">serviceBaseUrl</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">endpoint</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: method,</span></span>
<span class="line"><span style="color:#E1E4E8;">      headers: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (method </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;GET&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      options.body </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">response.ok) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`HTTP 错误! 状态: \${</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;调用 Java 服务失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 企业级业务方法</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> processBusinessData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/business/process&#39;</span><span style="color:#E1E4E8;">, data, </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> generateReport</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reportConfig</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/reports/generate&#39;</span><span style="color:#E1E4E8;">, reportConfig, </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getSystemHealth</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/health&#39;</span><span style="color:#E1E4E8;">, {}, </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 数据库操作</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> executeDatabaseQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/database/query&#39;</span><span style="color:#E1E4E8;">, { query }, </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 确保服务就绪</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ensureServiceReady</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isServiceReady) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">waitForServiceReady</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取 Java 命令</span></span>
<span class="line"><span style="color:#B392F0;">  getJavaCommand</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;./java/jre/bin/java&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;java&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取类路径</span></span>
<span class="line"><span style="color:#B392F0;">  getClasspath</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> basePath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      ?</span><span style="color:#9ECBFF;"> &#39;./java/app&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      :</span><span style="color:#9ECBFF;"> &#39;../java-app/target/classes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">basePath</span><span style="color:#9ECBFF;">}/*:\${</span><span style="color:#E1E4E8;">basePath</span><span style="color:#9ECBFF;">}/lib/*\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取 Java 应用路径</span></span>
<span class="line"><span style="color:#B392F0;">  getJavaAppPath</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      ?</span><span style="color:#9ECBFF;"> &#39;./java/app&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">      :</span><span style="color:#9ECBFF;"> &#39;../java-app&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 设置进程处理器</span></span>
<span class="line"><span style="color:#B392F0;">  setupProcessHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shutdown</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shutdown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.javaProcess) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callJavaService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/shutdown&#39;</span><span style="color:#E1E4E8;">, {}, </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 强制终止进程</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.javaProcess.</span><span style="color:#B392F0;">kill</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.javaProcess </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> javaIntegration</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JavaIntegration</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="websocket-实时通信集成" tabindex="-1">WebSocket 实时通信集成 <a class="header-anchor" href="#websocket-实时通信集成" aria-label="Permalink to &quot;WebSocket 实时通信集成&quot;">​</a></h3><p>对于需要实时双向通信的场景，WebSocket 提供了更好的解决方案。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// java-websocket-integration.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EventEmitter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> JavaWebSocketIntegration</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.socket </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.reconnectInterval </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.shouldReconnect </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.messageQueue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 连接到 Java WebSocket 服务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 8080</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> wsUrl</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`ws://localhost:\${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">}/websocket\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> WebSocket</span><span style="color:#E1E4E8;">(wsUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">onopen</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;已连接到 Java WebSocket 服务&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">flushMessageQueue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleMessage</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">onclose</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Java WebSocket 连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnected&#39;</span><span style="color:#E1E4E8;">, event);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleReconnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">onerror</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Java WebSocket 错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理消息</span></span>
<span class="line"><span style="color:#B392F0;">  handleMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(event.data);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">payload</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">correlationId</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(type, payload);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (correlationId) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(correlationId, payload);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;解析 WebSocket 消息失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送消息</span></span>
<span class="line"><span style="color:#B392F0;">  send</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">waitForResponse</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type,</span></span>
<span class="line"><span style="color:#E1E4E8;">      payload,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (waitForResponse) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendWithResponse</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.socket </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.socket.readyState </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> WebSocket.</span><span style="color:#79B8FF;">OPEN</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.messageQueue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送并等待响应</span></span>
<span class="line"><span style="color:#B392F0;">  sendWithResponse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> correlationId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`msg-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">random</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">36</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">substr</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      message.correlationId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> correlationId;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timeout</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeAllListeners</span><span style="color:#E1E4E8;">(correlationId);</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;等待响应超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(correlationId, (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(response);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.socket </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.socket.readyState </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> WebSocket.</span><span style="color:#79B8FF;">OPEN</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket 未连接&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 刷新消息队列</span></span>
<span class="line"><span style="color:#B392F0;">  flushMessageQueue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.messageQueue.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.messageQueue.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 调度重连</span></span>
<span class="line"><span style="color:#B392F0;">  scheduleReconnection</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.shouldReconnect) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scheduleReconnection</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.reconnectInterval);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 实时数据订阅</span></span>
<span class="line"><span style="color:#B392F0;">  subscribeToDataUpdates</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;subscribe&#39;</span><span style="color:#E1E4E8;">, { channel });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 取消订阅</span></span>
<span class="line"><span style="color:#B392F0;">  unsubscribeFromDataUpdates</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unsubscribe&#39;</span><span style="color:#E1E4E8;">, { channel });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 关闭连接</span></span>
<span class="line"><span style="color:#B392F0;">  disconnect</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.shouldReconnect </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.socket) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.socket </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> javaWebSocketIntegration</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JavaWebSocketIntegration</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="跨语言统一管理" tabindex="-1">跨语言统一管理 <a class="header-anchor" href="#跨语言统一管理" aria-label="Permalink to &quot;跨语言统一管理&quot;">​</a></h2><h3 id="多运行时协调器" tabindex="-1">多运行时协调器 <a class="header-anchor" href="#多运行时协调器" aria-label="Permalink to &quot;多运行时协调器&quot;">​</a></h3><p>在同时使用多种语言后端的复杂应用中，需要统一的协调机制来管理不同后端的生命周期和通信。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cross-language-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pythonIntegration } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./python-integration.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { goTronIntegration } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./go-gotron-integration.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { javaIntegration } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./java-integration.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> CrossLanguageManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.services </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.serviceStatus </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化所有服务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;python&#39;</span><span style="color:#E1E4E8;">, pythonIntegration);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;go&#39;</span><span style="color:#E1E4E8;">, goTronIntegration);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">registerService</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;java&#39;</span><span style="color:#E1E4E8;">, javaIntegration);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeServices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 注册服务</span></span>
<span class="line"><span style="color:#B392F0;">  registerService</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">serviceInstance</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.services.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, serviceInstance);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;stopped&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监听服务状态变化</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (serviceInstance.on) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      serviceInstance.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connected&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;connected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceStatusChanged&#39;</span><span style="color:#E1E4E8;">, { name, status: </span><span style="color:#9ECBFF;">&#39;connected&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      serviceInstance.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnected&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;disconnected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceStatusChanged&#39;</span><span style="color:#E1E4E8;">, { name, status: </span><span style="color:#9ECBFF;">&#39;disconnected&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      serviceInstance.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceError&#39;</span><span style="color:#E1E4E8;">, { name, error });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化所有服务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> initializeServices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> initializationPromises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">service</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.services) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> promise</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> service.init </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      promise</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;initialized&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`初始化 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 服务失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      initializationPromises.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(promise);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">allSettled</span><span style="color:#E1E4E8;">(initializationPromises);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;allServicesInitialized&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 根据任务类型路由到合适的后端</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> executeTask</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">routeTaskToService</span><span style="color:#E1E4E8;">(taskType);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">service) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`没有找到适合处理 \${</span><span style="color:#E1E4E8;">taskType</span><span style="color:#9ECBFF;">} 的后端服务\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(service.name) </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;connected&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 服务未就绪\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.instance.</span><span style="color:#B392F0;">executeTask</span><span style="color:#E1E4E8;">(taskType, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 任务路由逻辑</span></span>
<span class="line"><span style="color:#B392F0;">  routeTaskToService</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">taskType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> routingRules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // Python 处理数据分析和机器学习</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;data-analysis&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;python&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;machine-learning&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;python&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;statistical-analysis&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;python&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // Go 处理高并发和系统级任务</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;concurrent-processing&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;go&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;system-monitoring&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;go&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;file-operations&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;go&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;encryption-decryption&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;go&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // Java 处理企业级业务逻辑</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;business-logic&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;java&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;database-operations&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;java&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;report-generation&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;java&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;enterprise-integration&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;java&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> serviceName</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> routingRules[taskType];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (serviceName </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.services.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(serviceName)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: serviceName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        instance: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.services.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(serviceName)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取服务状态</span></span>
<span class="line"><span style="color:#B392F0;">  getServiceStatus</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> status</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">serviceStatus</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.serviceStatus) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      status[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> serviceStatus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> status;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 优雅关闭所有服务</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shutdown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shutdownPromises</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">service</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.services) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (service.shutdown) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        shutdownPromises.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">          service.</span><span style="color:#B392F0;">shutdown</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`关闭 \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} 服务失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">allSettled</span><span style="color:#E1E4E8;">(shutdownPromises);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;所有后端服务已关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 健康检查</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> healthCheck</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> health</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">service</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.services) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (service.healthCheck) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          health[name] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">healthCheck</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          health[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.serviceStatus.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name),</span></span>
<span class="line"><span style="color:#E1E4E8;">            timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          };</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        health[name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          status: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">          timestamp: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> health;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> crossLanguageManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CrossLanguageManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><p>通过这种多语言集成架构，Electron 应用可以充分利用各种编程语言的优势，实现功能丰富且性能优异的桌面应用程序。</p>`,44)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
