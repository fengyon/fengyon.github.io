import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"算法练习平台","description":"","frontmatter":{},"headers":[{"level":2,"title":"平台架构","slug":"平台架构","link":"#平台架构","children":[]},{"level":2,"title":"核心功能模块","slug":"核心功能模块","link":"#核心功能模块","children":[{"level":3,"title":"代码执行环境","slug":"代码执行环境","link":"#代码执行环境","children":[]},{"level":3,"title":"题目管理系统","slug":"题目管理系统","link":"#题目管理系统","children":[]}]},{"level":2,"title":"学习进度系统","slug":"学习进度系统","link":"#学习进度系统","children":[{"level":3,"title":"用户进度跟踪","slug":"用户进度跟踪","link":"#用户进度跟踪","children":[]}]},{"level":2,"title":"交互式学习功能","slug":"交互式学习功能","link":"#交互式学习功能","children":[{"level":3,"title":"实时代码分析器","slug":"实时代码分析器","link":"#实时代码分析器","children":[]},{"level":3,"title":"学习路径规划器","slug":"学习路径规划器","link":"#学习路径规划器","children":[]}]},{"level":2,"title":"平台集成示例","slug":"平台集成示例","link":"#平台集成示例","children":[]}],"relativePath":"basic/algorithm/practice-platforms.md","filePath":"basic/algorithm/practice-platforms.md"}'),o={name:"basic/algorithm/practice-platforms.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/practice-platforms.md for this page in Markdown format</div><h1 id="算法练习平台" tabindex="-1">算法练习平台 <a class="header-anchor" href="#算法练习平台" aria-label="Permalink to &quot;算法练习平台&quot;">​</a></h1><h2 id="平台架构" tabindex="-1">平台架构 <a class="header-anchor" href="#平台架构" aria-label="Permalink to &quot;平台架构&quot;">​</a></h2><p>JavaScript 算法练习平台是集代码编辑、测试验证、性能分析和学习进度跟踪于一体的综合性训练环境。平台采用模块化设计，支持从基础语法到高级算法的渐进式学习路径。</p><p>系统架构示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>用户界面层</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>应用服务层 → 代码执行引擎 → 测试验证器</span></span>
<span class="line"><span>    ↓              ↓</span></span>
<span class="line"><span>数据持久层 ← 学习分析器 ← 进度跟踪器</span></span></code></pre></div><h2 id="核心功能模块" tabindex="-1">核心功能模块 <a class="header-anchor" href="#核心功能模块" aria-label="Permalink to &quot;核心功能模块&quot;">​</a></h2><h3 id="代码执行环境" tabindex="-1">代码执行环境 <a class="header-anchor" href="#代码执行环境" aria-label="Permalink to &quot;代码执行环境&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 安全的代码执行沙箱</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> CodeExecutionSandbox</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.allowedAPIs </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;console&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Math&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Array&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;String&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Object&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;Number&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Set&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Map&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;JSON&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Date&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.executionTimeout </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.memoryLimit </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 50</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 50MB</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行用户代码</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> executeUserCode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testCases</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> wrappedCode</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">wrapCodeInSandbox</span><span style="color:#E1E4E8;">(code);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> testCase</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> testCases) {</span></span>
<span class="line"><span style="color:#F97583;">            try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">executeSingleTest</span><span style="color:#E1E4E8;">(wrappedCode, testCase);</span></span>
<span class="line"><span style="color:#E1E4E8;">                results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                    success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    error: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    input: testCase.input,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    expected: testCase.expected,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    executionTime: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 包装用户代码到安全环境</span></span>
<span class="line"><span style="color:#B392F0;">    wrapCodeInSandbox</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">            (function() {</span></span>
<span class="line"><span style="color:#9ECBFF;">                &quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#9ECBFF;">                const memoryStart = typeof process !== &#39;undefined&#39; ? </span></span>
<span class="line"><span style="color:#9ECBFF;">                    process.memoryUsage().heapUsed : 0;</span></span>
<span class="line"><span style="color:#9ECBFF;">                const startTime = performance.now();</span></span>
<span class="line"><span style="color:#9ECBFF;">                </span></span>
<span class="line"><span style="color:#9ECBFF;">                // 限制可用API</span></span>
<span class="line"><span style="color:#9ECBFF;">                const allowedGlobals = {</span></span>
<span class="line"><span style="color:#9ECBFF;">                    console: { log: console.log, error: console.error },</span></span>
<span class="line"><span style="color:#9ECBFF;">                    Math: Math, Array: Array, String: String, </span></span>
<span class="line"><span style="color:#9ECBFF;">                    Object: Object, Number: Number, Set: Set,</span></span>
<span class="line"><span style="color:#9ECBFF;">                    Map: Map, JSON: JSON, Date: Date</span></span>
<span class="line"><span style="color:#9ECBFF;">                };</span></span>
<span class="line"><span style="color:#9ECBFF;">                </span></span>
<span class="line"><span style="color:#9ECBFF;">                // 用户代码执行上下文</span></span>
<span class="line"><span style="color:#9ECBFF;">                const userFunction = \${</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;">};</span></span>
<span class="line"><span style="color:#9ECBFF;">                </span></span>
<span class="line"><span style="color:#9ECBFF;">                // 测试执行器</span></span>
<span class="line"><span style="color:#9ECBFF;">                return function executeTest(input) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                    try {</span></span>
<span class="line"><span style="color:#9ECBFF;">                        const result = userFunction.apply(null, input);</span></span>
<span class="line"><span style="color:#9ECBFF;">                        const endTime = performance.now();</span></span>
<span class="line"><span style="color:#9ECBFF;">                        const memoryEnd = typeof process !== &#39;undefined&#39; ? </span></span>
<span class="line"><span style="color:#9ECBFF;">                            process.memoryUsage().heapUsed : 0;</span></span>
<span class="line"><span style="color:#9ECBFF;">                        </span></span>
<span class="line"><span style="color:#9ECBFF;">                        return {</span></span>
<span class="line"><span style="color:#9ECBFF;">                            success: true,</span></span>
<span class="line"><span style="color:#9ECBFF;">                            output: result,</span></span>
<span class="line"><span style="color:#9ECBFF;">                            executionTime: endTime - startTime,</span></span>
<span class="line"><span style="color:#9ECBFF;">                            memoryUsed: memoryEnd - memoryStart</span></span>
<span class="line"><span style="color:#9ECBFF;">                        };</span></span>
<span class="line"><span style="color:#9ECBFF;">                    } catch (error) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                        throw new Error(</span><span style="color:#79B8FF;">\\\`</span><span style="color:#9ECBFF;">执行错误: </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">{error.message}</span><span style="color:#79B8FF;">\\\`</span><span style="color:#9ECBFF;">);</span></span>
<span class="line"><span style="color:#9ECBFF;">                    }</span></span>
<span class="line"><span style="color:#9ECBFF;">                };</span></span>
<span class="line"><span style="color:#9ECBFF;">            })();</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行单个测试用例</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> executeSingleTest</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">wrappedCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testCase</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> timeoutId</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;执行超时&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">            }, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.executionTimeout);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">            try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">                // 在隔离环境中执行代码</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> executor</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> eval</span><span style="color:#E1E4E8;">(wrappedCode);</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> executor</span><span style="color:#E1E4E8;">(testCase.input);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#B392F0;">                clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#6A737D;">                // 验证结果</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> isCorrect</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deepEqual</span><span style="color:#E1E4E8;">(result.output, testCase.expected);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#B392F0;">                resolve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#F97583;">                    ...</span><span style="color:#E1E4E8;">result,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    passed: isCorrect,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    input: testCase.input,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    expected: testCase.expected,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    actual: result.output</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">                clearTimeout</span><span style="color:#E1E4E8;">(timeoutId);</span></span>
<span class="line"><span style="color:#B392F0;">                reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 深度比较两个值</span></span>
<span class="line"><span style="color:#B392F0;">    deepEqual</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(a) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(b)) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (a.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> !==</span><span style="color:#E1E4E8;"> b.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> a.</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deepEqual</span><span style="color:#E1E4E8;">(item, b[index]));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> b) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> keysA</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> keysB</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(b);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (keysA.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> !==</span><span style="color:#E1E4E8;"> keysB.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> keysA.</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deepEqual</span><span style="color:#E1E4E8;">(a[key], b[key]));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="题目管理系统" tabindex="-1">题目管理系统 <a class="header-anchor" href="#题目管理系统" aria-label="Permalink to &quot;题目管理系统&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 题目管理器和难度系统</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ProblemManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.problems </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.categories </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.difficultyLevels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hard&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;expert&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initDefaultProblems</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 初始化默认题目库</span></span>
<span class="line"><span style="color:#B392F0;">    initDefaultProblems</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addProblem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;two-sum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;两数之和&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            difficulty: </span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            category: </span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">\`function twoSum(nums, target) {</span></span>
<span class="line"><span style="color:#9ECBFF;">    // 在这里编写你的代码</span></span>
<span class="line"><span style="color:#9ECBFF;">    // 返回两个数的索引</span></span>
<span class="line"><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            testCases: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    input: [[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    expected: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    explanation: </span><span style="color:#9ECBFF;">&#39;因为 nums[0] + nums[1] = 2 + 7 = 9&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    input: [[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    expected: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    explanation: </span><span style="color:#9ECBFF;">&#39;因为 nums[1] + nums[2] = 2 + 4 = 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            hints: [</span></span>
<span class="line"><span style="color:#9ECBFF;">                &#39;可以使用暴力解法，两层循环遍历所有组合&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">                &#39;考虑使用哈希表来优化时间复杂度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">                &#39;在遍历时检查 target - current 是否在哈希表中&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            solutions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    language: </span><span style="color:#9ECBFF;">&#39;javascript&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    code: </span><span style="color:#9ECBFF;">\`function twoSum(nums, target) {</span></span>
<span class="line"><span style="color:#9ECBFF;">    const map = new Map();</span></span>
<span class="line"><span style="color:#9ECBFF;">    for (let i = 0; i &lt; nums.length; i++) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        const complement = target - nums[i];</span></span>
<span class="line"><span style="color:#9ECBFF;">        if (map.has(complement)) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            return [map.get(complement), i];</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">        map.set(nums[i], i);</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">    return [];</span></span>
<span class="line"><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    timeComplexity: </span><span style="color:#9ECBFF;">&#39;O(n)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    spaceComplexity: </span><span style="color:#9ECBFF;">&#39;O(n)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    explanation: </span><span style="color:#9ECBFF;">&#39;使用哈希表存储数字和索引，一次遍历解决问题&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addProblem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;reverse-linked-list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;反转链表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;反转一个单链表。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            difficulty: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            category: </span><span style="color:#9ECBFF;">&#39;linked-list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">\`function reverseList(head) {</span></span>
<span class="line"><span style="color:#9ECBFF;">    // 在这里编写你的代码</span></span>
<span class="line"><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            testCases: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    input: [{val: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, next: {val: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, next: {val: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, next: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">}}}],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    expected: {val: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, next: {val: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, next: {val: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, next: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">}}},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    explanation: </span><span style="color:#9ECBFF;">&#39;链表 1-&gt;2-&gt;3 反转为 3-&gt;2-&gt;1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加题目</span></span>
<span class="line"><span style="color:#B392F0;">    addProblem</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        problem.createdAt </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        problem.updatedAt </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.problems.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(problem.id, problem);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 更新分类</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.categories.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(problem.category)) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.categories.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(problem.category, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.categories.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(problem.category).</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(problem.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取题目</span></span>
<span class="line"><span style="color:#B392F0;">    getProblem</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problems.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取分类题目</span></span>
<span class="line"><span style="color:#B392F0;">    getProblemsByCategory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">category</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">difficulty</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problemIds</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.categories.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(category) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problemIds.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problems.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (difficulty) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> problems.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p.difficulty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> difficulty);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> problems;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取推荐题目</span></span>
<span class="line"><span style="color:#B392F0;">    getRecommendedProblems</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userProfile</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">solvedProblems</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">skillLevel</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">weakCategories</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userProfile;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.problems.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">                !</span><span style="color:#E1E4E8;">solvedProblems.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(problem.id) </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#79B8FF;">                this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMatchScore</span><span style="color:#E1E4E8;">(problem, userProfile) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.5</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">                this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMatchScore</span><span style="color:#E1E4E8;">(b, userProfile) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">                this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMatchScore</span><span style="color:#E1E4E8;">(a, userProfile)</span></span>
<span class="line"><span style="color:#E1E4E8;">            )</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, count);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 计算题目匹配度</span></span>
<span class="line"><span style="color:#B392F0;">    calculateMatchScore</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userProfile</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">skillLevel</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">weakCategories</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">preferredDifficulty</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userProfile;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> score </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 难度匹配</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> difficultyWeights</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { easy: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, medium: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, hard: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, expert: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> userLevel</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> difficultyWeights[skillLevel] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problemLevel</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> difficultyWeights[problem.difficulty];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> difficultyScore</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(userLevel </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> problemLevel) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        score </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> difficultyScore </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 0.4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 弱点改进</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (weakCategories.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(problem.category)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            score </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 0.3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 偏好匹配</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (preferredDifficulty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> problem.difficulty) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            score </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 0.3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(score, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 验证用户解决方案</span></span>
<span class="line"><span style="color:#B392F0;">    validateSolution</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problemId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problem</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getProblem</span><span style="color:#E1E4E8;">(problemId);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">problem) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;题目不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sandbox</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CodeExecutionSandbox</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> sandbox.</span><span style="color:#B392F0;">executeUserCode</span><span style="color:#E1E4E8;">(userCode, problem.testCases);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="学习进度系统" tabindex="-1">学习进度系统 <a class="header-anchor" href="#学习进度系统" aria-label="Permalink to &quot;学习进度系统&quot;">​</a></h2><h3 id="用户进度跟踪" tabindex="-1">用户进度跟踪 <a class="header-anchor" href="#用户进度跟踪" aria-label="Permalink to &quot;用户进度跟踪&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 用户学习进度管理器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ProgressTracker</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.userProgress </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.achievements </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initAchievements</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 初始化成就系统</span></span>
<span class="line"><span style="color:#B392F0;">    initAchievements</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.achievements.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;first-blood&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;first-blood&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;初见杀&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;完成第一道题目&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;🏆&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">            condition</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> progress.solvedProblems.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.achievements.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;persistent-learner&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;persistent-learner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;持之以恒&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;连续7天完成练习&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;🔥&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">            condition</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> progress.streakDays </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 7</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.achievements.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;algorithm-master&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;algorithm-master&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;算法大师&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;完成所有中等难度题目&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;👑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">            condition</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                progress.solvedByDifficulty.medium </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> progress.totalByDifficulty.medium</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新用户进度</span></span>
<span class="line"><span style="color:#B392F0;">    updateProgress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problemId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.userProgress.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(userId)) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.userProgress.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(userId, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createDefaultProgress</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(userId);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problem</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problemManager.</span><span style="color:#B392F0;">getProblem</span><span style="color:#E1E4E8;">(problemId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 更新解决题目</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">progress.solvedProblems.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(problemId)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.solvedProblems.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(problemId);</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.solvedCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#6A737D;">            // 按难度统计</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.solvedByDifficulty[problem.difficulty]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#6A737D;">            // 按分类统计</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">progress.solvedByCategory[problem.category]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                progress.solvedByCategory[problem.category] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.solvedByCategory[problem.category]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 更新统计信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        progress.totalSubmissions</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (result.passed) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.correctSubmissions</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 更新连续练习天数</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateStreak</span><span style="color:#E1E4E8;">(progress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 检查成就</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkAchievements</span><span style="color:#E1E4E8;">(userId, progress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> progress;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建默认进度</span></span>
<span class="line"><span style="color:#B392F0;">    createDefaultProgress</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            joinedAt: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            solvedProblems: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">            solvedCount: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            totalSubmissions: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            correctSubmissions: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            streakDays: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            lastActiveDate: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toDateString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            solvedByDifficulty: { easy: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, medium: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, hard: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, expert: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            solvedByCategory: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">            achievements: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">            skillLevel: </span><span style="color:#9ECBFF;">&#39;beginner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            weakCategories: []</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新连续天数</span></span>
<span class="line"><span style="color:#B392F0;">    updateStreak</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> today</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toDateString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> yesterday</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 86400000</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toDateString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (progress.lastActiveDate </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> yesterday) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.streakDays</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (progress.lastActiveDate </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> today) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.streakDays </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        progress.lastActiveDate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> today;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查成就</span></span>
<span class="line"><span style="color:#B392F0;">    checkAchievements</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">achievementId</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">achievement</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.achievements) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">progress.achievements.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(achievementId) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                achievement.</span><span style="color:#B392F0;">condition</span><span style="color:#E1E4E8;">(progress)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                progress.achievements.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(achievementId);</span></span>
<span class="line"><span style="color:#79B8FF;">                this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onAchievementUnlocked</span><span style="color:#E1E4E8;">(userId, achievement);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 成就解锁处理</span></span>
<span class="line"><span style="color:#B392F0;">    onAchievementUnlocked</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">achievement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🎉 用户 \${</span><span style="color:#E1E4E8;">userId</span><span style="color:#9ECBFF;">} 解锁成就: \${</span><span style="color:#E1E4E8;">achievement</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">        // 这里可以添加通知、奖励等逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取用户统计</span></span>
<span class="line"><span style="color:#B392F0;">    getUserStats</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(userId) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createDefaultProgress</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> totalProblems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problemManager.problems.size;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> categoryStats</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(progress.solvedByCategory).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">category</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> totalInCategory</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> problemManager.</span><span style="color:#B392F0;">getProblemsByCategory</span><span style="color:#E1E4E8;">(category).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                category,</span></span>
<span class="line"><span style="color:#E1E4E8;">                solved: count,</span></span>
<span class="line"><span style="color:#E1E4E8;">                total: totalInCategory,</span></span>
<span class="line"><span style="color:#E1E4E8;">                percentage: totalInCategory </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalInCategory </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> difficultyStats</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(progress.solvedByDifficulty).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">difficulty</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> problems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(problemManager.problems.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p.difficulty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> difficulty);</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                difficulty,</span></span>
<span class="line"><span style="color:#E1E4E8;">                solved: count,</span></span>
<span class="line"><span style="color:#E1E4E8;">                total: problems.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                percentage: problems.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> problems.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            overview: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                solvedCount: progress.solvedCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">                totalProblems,</span></span>
<span class="line"><span style="color:#E1E4E8;">                accuracy: progress.totalSubmissions </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                    (progress.correctSubmissions </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> progress.totalSubmissions </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                streakDays: progress.streakDays,</span></span>
<span class="line"><span style="color:#E1E4E8;">                achievements: progress.achievements.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            categoryStats,</span></span>
<span class="line"><span style="color:#E1E4E8;">            difficultyStats,</span></span>
<span class="line"><span style="color:#E1E4E8;">            recentActivity: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getRecentActivity</span><span style="color:#E1E4E8;">(userId)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取学习建议</span></span>
<span class="line"><span style="color:#B392F0;">    getLearningRecommendations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(userId);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">progress) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> recommendations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getUserStats</span><span style="color:#E1E4E8;">(userId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 基于弱点的推荐</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> weakCategories</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> stats.categoryStats</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stat</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> stat.percentage </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a.percentage </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b.percentage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (weakCategories.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;weak_category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                message: </span><span style="color:#9ECBFF;">\`建议加强 \${</span><span style="color:#E1E4E8;">weakCategories</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">].</span><span style="color:#E1E4E8;">category</span><span style="color:#9ECBFF;">} 类题目的练习\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                priority: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                problems: problemManager.</span><span style="color:#B392F0;">getProblemsByCategory</span><span style="color:#E1E4E8;">(weakCategories[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].category, </span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 基于进度的推荐</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> nextDifficulty</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getNextDifficultyTarget</span><span style="color:#E1E4E8;">(progress);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (nextDifficulty) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;progression&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                message: </span><span style="color:#9ECBFF;">\`可以开始尝试 \${</span><span style="color:#E1E4E8;">nextDifficulty</span><span style="color:#9ECBFF;">} 难度的题目\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                priority: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                problems: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(problemManager.problems.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">                    .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p.difficulty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> nextDifficulty)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> recommendations;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    getNextDifficultyTarget</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> difficulties</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hard&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;expert&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> currentIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> difficulties.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">diff</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.solvedByDifficulty[diff] </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 5</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> currentIndex </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> difficulties[currentIndex] </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    getRecentActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 返回最近的学习活动</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { type: </span><span style="color:#9ECBFF;">&#39;problem_solved&#39;</span><span style="color:#E1E4E8;">, problemId: </span><span style="color:#9ECBFF;">&#39;two-sum&#39;</span><span style="color:#E1E4E8;">, timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">() },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { type: </span><span style="color:#9ECBFF;">&#39;achievement_unlocked&#39;</span><span style="color:#E1E4E8;">, achievementId: </span><span style="color:#9ECBFF;">&#39;first-blood&#39;</span><span style="color:#E1E4E8;">, timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="交互式学习功能" tabindex="-1">交互式学习功能 <a class="header-anchor" href="#交互式学习功能" aria-label="Permalink to &quot;交互式学习功能&quot;">​</a></h2><h3 id="实时代码分析器" tabindex="-1">实时代码分析器 <a class="header-anchor" href="#实时代码分析器" aria-label="Permalink to &quot;实时代码分析器&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 代码质量分析器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> CodeAnalyzer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.rules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: </span><span style="color:#9ECBFF;">&#39;time-complexity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;时间复杂度优化&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">                check</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkTimeComplexity</span><span style="color:#E1E4E8;">(code, problem),</span></span>
<span class="line"><span style="color:#E1E4E8;">                suggestion: </span><span style="color:#9ECBFF;">&#39;考虑使用更高效的算法降低时间复杂度&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: </span><span style="color:#9ECBFF;">&#39;space-complexity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;空间复杂度优化&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">                check</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkSpaceComplexity</span><span style="color:#E1E4E8;">(code, problem),</span></span>
<span class="line"><span style="color:#E1E4E8;">                suggestion: </span><span style="color:#9ECBFF;">&#39;考虑优化内存使用，减少不必要的变量&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: </span><span style="color:#9ECBFF;">&#39;code-style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;代码风格检查&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">                check</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkCodeStyle</span><span style="color:#E1E4E8;">(code),</span></span>
<span class="line"><span style="color:#E1E4E8;">                suggestion: </span><span style="color:#9ECBFF;">&#39;改进代码可读性，添加适当的注释&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 分析代码质量</span></span>
<span class="line"><span style="color:#B392F0;">    analyzeCodeQuality</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">executionResults</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> issues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> suggestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> rule</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.rules) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rule.</span><span style="color:#B392F0;">check</span><span style="color:#E1E4E8;">(code, problem, executionResults);</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (result.hasIssue) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                    rule: rule.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    severity: result.severity </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    message: result.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    line: result.line,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    suggestion: rule.suggestion</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 计算综合评分</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> score</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateQualityScore</span><span style="color:#E1E4E8;">(issues, executionResults);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            score,</span></span>
<span class="line"><span style="color:#E1E4E8;">            issues,</span></span>
<span class="line"><span style="color:#E1E4E8;">            suggestions: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateSuggestions</span><span style="color:#E1E4E8;">(issues, suggestions),</span></span>
<span class="line"><span style="color:#E1E4E8;">            metrics: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMetrics</span><span style="color:#E1E4E8;">(executionResults)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查时间复杂度</span></span>
<span class="line"><span style="color:#B392F0;">    checkTimeComplexity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">problem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 简单的时间复杂度分析（实际实现会更复杂）</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> slowPatterns</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">            /</span><span style="color:#DBEDFF;">for</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\(</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">}]</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\)</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">{</span><span style="color:#79B8FF;">[\\s\\S]</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">for</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\(</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">}]</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\)</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 嵌套循环</span></span>
<span class="line"><span style="color:#9ECBFF;">            /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">sort</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\(</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">)]</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\)</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">sort</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 多次排序</span></span>
<span class="line"><span style="color:#9ECBFF;">            /</span><span style="color:#DBEDFF;">while</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\(</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">}]</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\)</span><span style="color:#79B8FF;">\\s</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">{</span><span style="color:#79B8FF;">[\\s\\S]</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">while</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#6A737D;"> // 嵌套while</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> pattern</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> slowPatterns) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (pattern.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(code)) {</span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    hasIssue: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    severity: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    message: </span><span style="color:#9ECBFF;">&#39;检测到可能的高时间复杂度操作&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    line: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findLineNumber</span><span style="color:#E1E4E8;">(code, pattern)</span></span>
<span class="line"><span style="color:#E1E4E8;">                };</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { hasIssue: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查代码风格</span></span>
<span class="line"><span style="color:#B392F0;">    checkCodeStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> styleIssues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 检查代码长度</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> lines</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> code.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (lines.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            styleIssues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;代码过长，考虑拆分为更小的函数&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 检查注释</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> commentLines</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> lines.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">            line.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;//&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/*&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> commentRatio</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> commentLines </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> lines.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (commentRatio </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0.1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            styleIssues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;代码注释较少，建议添加更多注释说明逻辑&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (styleIssues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hasIssue: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                severity: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                message: styleIssues.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;; &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> { hasIssue: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 计算质量评分</span></span>
<span class="line"><span style="color:#B392F0;">    calculateQualityScore</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">issues</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">executionResults</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> score </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 根据问题严重性扣分</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> issue</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> issues) {</span></span>
<span class="line"><span style="color:#F97583;">            switch</span><span style="color:#E1E4E8;"> (issue.severity) {</span></span>
<span class="line"><span style="color:#F97583;">                case</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">: score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 20</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">                case</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">: score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">                case</span><span style="color:#9ECBFF;"> &#39;low&#39;</span><span style="color:#E1E4E8;">: score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 根据执行性能调整分数</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> avgTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> executionResults.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> r.executionTime, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#F97583;">            /</span><span style="color:#E1E4E8;"> executionResults.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (avgTime </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">) score </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, score));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 生成改进建议</span></span>
<span class="line"><span style="color:#B392F0;">    generateSuggestions</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">issues</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">generalSuggestions</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> suggestions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">generalSuggestions];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (issues.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">issue</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> issue.severity </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;high&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            suggestions.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;优先解决高严重性问题&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> suggestions.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 返回前3个建议</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 计算性能指标</span></span>
<span class="line"><span style="color:#B392F0;">    calculateMetrics</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">executionResults</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> times</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> executionResults.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.executionTime);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> executionResults.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.memoryUsed </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            avgTime: times.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> times.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxTime: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">times),</span></span>
<span class="line"><span style="color:#E1E4E8;">            avgMemory: memory.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> memory.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            maxMemory: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">memory)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    findLineNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pattern</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> match</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pattern.</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(code);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">match) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> codeBeforeMatch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> code.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, match.index);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> codeBeforeMatch.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="学习路径规划器" tabindex="-1">学习路径规划器 <a class="header-anchor" href="#学习路径规划器" aria-label="Permalink to &quot;学习路径规划器&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 个性化学习路径规划</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LearningPathPlanner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problemManager</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progressTracker</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.problemManager </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> problemManager;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.progressTracker </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> progressTracker;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.learningPaths </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initDefaultPaths</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 初始化默认学习路径</span></span>
<span class="line"><span style="color:#B392F0;">    initDefaultPaths</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.learningPaths.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;beginner&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;beginner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;初学者路径&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;从基础开始，逐步掌握核心算法&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            difficultyProgression: [</span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hard&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            categories: [</span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;linked-list&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tree&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            milestones: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;完成10道简单题目&#39;</span><span style="color:#E1E4E8;">, problems: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, difficulty: </span><span style="color:#9ECBFF;">&#39;easy&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;掌握数组和字符串操作&#39;</span><span style="color:#E1E4E8;">, categories: [</span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;理解链表和树结构&#39;</span><span style="color:#E1E4E8;">, categories: [</span><span style="color:#9ECBFF;">&#39;linked-list&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tree&#39;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.learningPaths.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;interview-prep&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;interview-prep&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;面试准备路径&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            description: </span><span style="color:#9ECBFF;">&#39;专注于常见面试算法题&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            difficultyProgression: [</span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hard&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            categories: [</span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;linked-list&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tree&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;graph&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            milestones: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;完成50道中等难度题目&#39;</span><span style="color:#E1E4E8;">, problems: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, difficulty: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;掌握动态规划&#39;</span><span style="color:#E1E4E8;">, categories: [</span><span style="color:#9ECBFF;">&#39;dp&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { target: </span><span style="color:#9ECBFF;">&#39;精通图算法&#39;</span><span style="color:#E1E4E8;">, categories: [</span><span style="color:#9ECBFF;">&#39;graph&#39;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取个性化学习计划</span></span>
<span class="line"><span style="color:#B392F0;">    getPersonalizedPlan</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pathId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;beginner&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningPaths.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(pathId);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> userStats</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.</span><span style="color:#B392F0;">getUserStats</span><span style="color:#E1E4E8;">(userId);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(userId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">path </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">progress) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> currentMilestone</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentMilestone</span><span style="color:#E1E4E8;">(path, progress);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> weeklyPlan</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateWeeklyPlan</span><span style="color:#E1E4E8;">(path, progress, userStats);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: path,</span></span>
<span class="line"><span style="color:#E1E4E8;">            currentMilestone,</span></span>
<span class="line"><span style="color:#E1E4E8;">            weeklyPlan,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculatePathProgress</span><span style="color:#E1E4E8;">(path, progress),</span></span>
<span class="line"><span style="color:#E1E4E8;">            recommendations: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPathRecommendations</span><span style="color:#E1E4E8;">(path, progress)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取当前里程碑</span></span>
<span class="line"><span style="color:#B392F0;">    getCurrentMilestone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> milestone</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> path.milestones) {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isMilestoneCompleted</span><span style="color:#E1E4E8;">(milestone, progress)) {</span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;"> milestone;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> path.milestones[path.milestones.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查里程碑完成状态</span></span>
<span class="line"><span style="color:#B392F0;">    isMilestoneCompleted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">milestone</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (milestone.problems) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> progress.solvedCount </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> milestone.problems;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (milestone.categories) {</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> milestone.categories.</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">category</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                progress.solvedByCategory[category] </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 3</span></span>
<span class="line"><span style="color:#E1E4E8;">            );</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 生成周计划</span></span>
<span class="line"><span style="color:#B392F0;">    generateWeeklyPlan</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userStats</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> weekPlan</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            monday: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            tuesday: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            wednesday: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            thursday: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            friday: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            weekend: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDailyProblems</span><span style="color:#E1E4E8;">(path, progress, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 添加复习题目</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addReviewProblems</span><span style="color:#E1E4E8;">(weekPlan, progress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> weekPlan;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取每日推荐题目</span></span>
<span class="line"><span style="color:#B392F0;">    getDailyProblems</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> currentMilestone</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentMilestone</span><span style="color:#E1E4E8;">(path, progress);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> targetCategories</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentMilestone.categories </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> path.categories;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> targetDifficulty</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentMilestone.difficulty </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> recommended</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> category</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> targetCategories) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> problems</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problemManager.</span><span style="color:#B392F0;">getProblemsByCategory</span><span style="color:#E1E4E8;">(category, targetDifficulty)</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">progress.solvedProblems.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(p.id))</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            recommended.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">problems);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> recommended.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, count);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 添加复习题目</span></span>
<span class="line"><span style="color:#B392F0;">    addReviewProblems</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">weekPlan</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> recentProblems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> progress.solvedProblems</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 最近解决的10个题目</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problemManager.</span><span style="color:#B392F0;">getProblem</span><span style="color:#E1E4E8;">(id))</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 在每个练习日添加一个复习题目</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(weekPlan).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">day</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (recentProblems.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> weekPlan[day].</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">                const</span><span style="color:#79B8FF;"> reviewProblem</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> recentProblems[Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> recentProblems.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)];</span></span>
<span class="line"><span style="color:#E1E4E8;">                weekPlan[day].</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(reviewProblem);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 计算路径进度</span></span>
<span class="line"><span style="color:#B392F0;">    calculatePathProgress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> completedMilestones</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.milestones.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">milestone</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isMilestoneCompleted</span><span style="color:#E1E4E8;">(milestone, progress)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            completed: completedMilestones,</span></span>
<span class="line"><span style="color:#E1E4E8;">            total: path.milestones.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            percentage: (completedMilestones </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> path.milestones.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取路径建议</span></span>
<span class="line"><span style="color:#B392F0;">    getPathRecommendations</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> recommendations</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> currentMilestone</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentMilestone</span><span style="color:#E1E4E8;">(path, progress);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (currentMilestone.categories) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> weakCategories</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentMilestone.categories.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">category</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">                !</span><span style="color:#E1E4E8;">progress.solvedByCategory[category] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> progress.solvedByCategory[category] </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">            );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (weakCategories.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                    type: </span><span style="color:#9ECBFF;">&#39;focus-area&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    message: </span><span style="color:#9ECBFF;">\`建议重点练习 \${</span><span style="color:#E1E4E8;">weakCategories</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} 类题目\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    priority: </span><span style="color:#9ECBFF;">&#39;high&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (progress.streakDays </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;consistency&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                message: </span><span style="color:#9ECBFF;">&#39;保持连续练习习惯，建议每天至少完成1道题目&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                priority: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> recommendations;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="平台集成示例" tabindex="-1">平台集成示例 <a class="header-anchor" href="#平台集成示例" aria-label="Permalink to &quot;平台集成示例&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 平台主控制器</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AlgorithmPlatform</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.problemManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ProblemManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.progressTracker </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ProgressTracker</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.codeAnalyzer </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CodeAnalyzer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.learningPlanner </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> LearningPathPlanner</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.problemManager, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressTracker);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.currentUser </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 用户登录</span></span>
<span class="line"><span style="color:#B392F0;">    login</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.currentUser </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userId;</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getUserDashboard</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取用户仪表板</span></span>
<span class="line"><span style="color:#B392F0;">    getUserDashboard</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户未登录&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.</span><span style="color:#B392F0;">getUserStats</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> recommendations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.</span><span style="color:#B392F0;">getLearningRecommendations</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> learningPlan</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningPlanner.</span><span style="color:#B392F0;">getPersonalizedPlan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            userStats: stats,</span></span>
<span class="line"><span style="color:#E1E4E8;">            recommendations,</span></span>
<span class="line"><span style="color:#E1E4E8;">            learningPlan,</span></span>
<span class="line"><span style="color:#E1E4E8;">            recentActivity: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getRecentActivity</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            leaderboard: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getLeaderboard</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 提交解决方案</span></span>
<span class="line"><span style="color:#F97583;">    async</span><span style="color:#B392F0;"> submitSolution</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problemId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户未登录&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 验证代码</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problemManager.</span><span style="color:#B392F0;">validateSolution</span><span style="color:#E1E4E8;">(code, problemId);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 分析代码质量</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> problem</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.problemManager.</span><span style="color:#B392F0;">getProblem</span><span style="color:#E1E4E8;">(problemId);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> qualityAnalysis</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.codeAnalyzer.</span><span style="color:#B392F0;">analyzeCodeQuality</span><span style="color:#E1E4E8;">(code, problem, results);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 更新进度</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> allPassed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> r.passed);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (allPassed) {</span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.progressTracker.</span><span style="color:#B392F0;">updateProgress</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser, problemId, results[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            results,</span></span>
<span class="line"><span style="color:#E1E4E8;">            qualityAnalysis,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: allPassed </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.</span><span style="color:#B392F0;">getUserStats</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            achievement: allPassed </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkNewAchievements</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查新成就</span></span>
<span class="line"><span style="color:#B392F0;">    checkNewAchievements</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> newAchievements</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> progress.achievements.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">achievementId</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">            !</span><span style="color:#E1E4E8;">progress.lastCheckedAchievements?.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(achievementId)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (newAchievements.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress.lastCheckedAchievements </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">progress.achievements];</span></span>
<span class="line"><span style="color:#F97583;">            return</span><span style="color:#E1E4E8;"> newAchievements.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.achievements.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(id));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取最近活动</span></span>
<span class="line"><span style="color:#B392F0;">    getRecentActivity</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">        // 返回平台级别的最近活动</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;user_solved&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                userId: </span><span style="color:#9ECBFF;">&#39;user123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                problemId: </span><span style="color:#9ECBFF;">&#39;two-sum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;achievement_unlocked&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                userId: </span><span style="color:#9ECBFF;">&#39;user456&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                achievementId: </span><span style="color:#9ECBFF;">&#39;algorithm-master&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取排行榜</span></span>
<span class="line"><span style="color:#B392F0;">    getLeaderboard</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> allUsers</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.progressTracker.userProgress.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">                userId,</span></span>
<span class="line"><span style="color:#E1E4E8;">                solvedCount: progress.solvedCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">                streakDays: progress.streakDays,</span></span>
<span class="line"><span style="color:#E1E4E8;">                achievements: progress.achievements.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">            }))</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.solvedCount </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a.solvedCount)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> allUsers;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 搜索题目</span></span>
<span class="line"><span style="color:#B392F0;">    searchProblems</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">filters</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.problemManager.problems.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 关键词搜索</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (query) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> lowerQuery</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> query.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                problem.title.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(lowerQuery) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">                problem.description.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(lowerQuery) </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">                problem.category.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(lowerQuery)</span></span>
<span class="line"><span style="color:#E1E4E8;">            );</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 筛选器</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (filters.difficulty) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> problem.difficulty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> filters.difficulty);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (filters.category) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> problem.category </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> filters.category);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (filters.solved </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.currentUser) {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.progressTracker.userProgress.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentUser);</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (progress) {</span></span>
<span class="line"><span style="color:#F97583;">                if</span><span style="color:#E1E4E8;"> (filters.solved) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> progress.solvedProblems.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(problem.id));</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">problem</span><span style="color:#F97583;"> =&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">progress.solvedProblems.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(problem.id));</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 平台初始化</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> algorithmPlatform</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> AlgorithmPlatform</span><span style="color:#E1E4E8;">();</span></span></code></pre></div>`,21)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
