import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"测试","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 命令行测试概述","slug":"node-js-命令行测试概述","link":"#node-js-命令行测试概述","children":[]},{"level":2,"title":"测试基础概念","slug":"测试基础概念","link":"#测试基础概念","children":[{"level":3,"title":"测试类型分类","slug":"测试类型分类","link":"#测试类型分类","children":[]},{"level":3,"title":"测试驱动开发流程","slug":"测试驱动开发流程","link":"#测试驱动开发流程","children":[]}]},{"level":2,"title":"常用测试框架与库","slug":"常用测试框架与库","link":"#常用测试框架与库","children":[{"level":3,"title":"Jest - 全功能测试框架","slug":"jest-全功能测试框架","link":"#jest-全功能测试框架","children":[]},{"level":3,"title":"Mocha + Chai + Sinon 组合","slug":"mocha-chai-sinon-组合","link":"#mocha-chai-sinon-组合","children":[]},{"level":3,"title":"Node.js 内置测试模块","slug":"node-js-内置测试模块","link":"#node-js-内置测试模块","children":[]}]},{"level":2,"title":"命令行工具专用测试技术","slug":"命令行工具专用测试技术","link":"#命令行工具专用测试技术","children":[{"level":3,"title":"子进程执行测试","slug":"子进程执行测试","link":"#子进程执行测试","children":[]},{"level":3,"title":"用户交互模拟","slug":"用户交互模拟","link":"#用户交互模拟","children":[]}]},{"level":2,"title":"模拟与测试替身","slug":"模拟与测试替身","link":"#模拟与测试替身","children":[{"level":3,"title":"文件系统模拟","slug":"文件系统模拟","link":"#文件系统模拟","children":[]},{"level":3,"title":"网络请求模拟","slug":"网络请求模拟","link":"#网络请求模拟","children":[]}]},{"level":2,"title":"测试工具与实用库","slug":"测试工具与实用库","link":"#测试工具与实用库","children":[{"level":3,"title":"Supertest - HTTP 测试","slug":"supertest-http-测试","link":"#supertest-http-测试","children":[]},{"level":3,"title":"TestDouble - 现代测试替身","slug":"testdouble-现代测试替身","link":"#testdouble-现代测试替身","children":[]}]},{"level":2,"title":"高级测试模式","slug":"高级测试模式","link":"#高级测试模式","children":[{"level":3,"title":"快照测试","slug":"快照测试","link":"#快照测试","children":[]},{"level":3,"title":"性能测试","slug":"性能测试","link":"#性能测试","children":[]}]},{"level":2,"title":"持续集成与测试优化","slug":"持续集成与测试优化","link":"#持续集成与测试优化","children":[{"level":3,"title":"GitHub Actions 集成","slug":"github-actions-集成","link":"#github-actions-集成","children":[]},{"level":3,"title":"测试覆盖率配置","slug":"测试覆盖率配置","link":"#测试覆盖率配置","children":[]}]}],"relativePath":"special/cli/test.md","filePath":"special/cli/test.md"}'),o={name:"special/cli/test.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/test.md for this page in Markdown format</div><h1 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h1><h2 id="node-js-命令行测试概述" tabindex="-1">Node.js 命令行测试概述 <a class="header-anchor" href="#node-js-命令行测试概述" aria-label="Permalink to &quot;Node.js 命令行测试概述&quot;">​</a></h2><p>在 Node.js 命令行工具开发中，测试是确保代码质量、功能正确性和用户体验的关键环节。命令行工具的测试相比普通应用有其特殊性，需要处理进程执行、用户交互、输出验证等复杂场景。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>测试金字塔结构：</span></span>
<span class="line"><span>    ↗ 端到端测试 (E2E)</span></span>
<span class="line"><span>  ↗       集成测试</span></span>
<span class="line"><span>↗             单元测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试覆盖范围：</span></span>
<span class="line"><span>用户界面 → 业务逻辑 → 外部依赖</span></span>
<span class="line"><span>  ↓          ↓          ↓</span></span>
<span class="line"><span>E2E测试  集成测试   单元测试</span></span></code></pre></div><h2 id="测试基础概念" tabindex="-1">测试基础概念 <a class="header-anchor" href="#测试基础概念" aria-label="Permalink to &quot;测试基础概念&quot;">​</a></h2><h3 id="测试类型分类" tabindex="-1">测试类型分类 <a class="header-anchor" href="#测试类型分类" aria-label="Permalink to &quot;测试类型分类&quot;">​</a></h3><p>Node.js 命令行测试通常分为三个层次，每个层次关注不同的测试目标：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 测试层次示例</span></span>
<span class="line"><span style="color:#6A737D;">// 单元测试 - 测试独立函数</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 集成测试 - 测试模块协作</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> processFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(filePath);</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> transformContent</span><span style="color:#E1E4E8;">(content);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// E2E测试 - 测试完整命令行行为</span></span>
<span class="line"><span style="color:#6A737D;">// 执行: node cli.js process --input file.txt</span></span></code></pre></div><h3 id="测试驱动开发流程" tabindex="-1">测试驱动开发流程 <a class="header-anchor" href="#测试驱动开发流程" aria-label="Permalink to &quot;测试驱动开发流程&quot;">​</a></h3><p>TDD (测试驱动开发) 遵循“红-绿-重构”循环：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>编写失败测试 → 实现通过代码 → 重构优化</span></span>
<span class="line"><span>    (红)           (绿)          (优化)</span></span></code></pre></div><h2 id="常用测试框架与库" tabindex="-1">常用测试框架与库 <a class="header-anchor" href="#常用测试框架与库" aria-label="Permalink to &quot;常用测试框架与库&quot;">​</a></h2><h3 id="jest-全功能测试框架" tabindex="-1">Jest - 全功能测试框架 <a class="header-anchor" href="#jest-全功能测试框架" aria-label="Permalink to &quot;Jest - 全功能测试框架&quot;">​</a></h3><p>Jest 是 Facebook 开发的测试框架，提供完整的测试解决方案，包括断言库、模拟功能和覆盖率报告。</p><h4 id="基础测试配置" tabindex="-1">基础测试配置 <a class="header-anchor" href="#基础测试配置" aria-label="Permalink to &quot;基础测试配置&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// jest.config.mjs</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  preset: </span><span style="color:#9ECBFF;">&#39;jest-preset-esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  extensionsToTreatAsEsm: [</span><span style="color:#9ECBFF;">&#39;.mjs&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  moduleNameMapping: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;^(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.{1,2}/.*)</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.js$&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;$1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  testEnvironment: </span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  collectCoverageFrom: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;src/**/*.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;!src/**/*.test.mjs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  coverageThreshold: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    global: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      branches: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functions: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lines: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      statements: </span><span style="color:#79B8FF;">80</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// math.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { sum, multiply } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/math.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数学工具函数&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sum 函数应该正确相加数字&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;multiply 函数应该正确相乘数字&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该处理浮点数运算&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBeCloseTo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">multiply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h4 id="异步代码测试" tabindex="-1">异步代码测试 <a class="header-anchor" href="#异步代码测试" aria-label="Permalink to &quot;异步代码测试&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// async.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fetchData, processWithRetry } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/async-operations.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;异步操作测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fetchData 应该返回解析的数据&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetchData</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(data).</span><span style="color:#B392F0;">toHaveProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(data.name).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试数据&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;processWithRetry 应该在失败后重试&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mockService</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> jest.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">mockRejectedValueOnce</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;第一次失败&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">mockResolvedValueOnce</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功结果&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> processWithRetry</span><span style="color:#E1E4E8;">(mockService, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功结果&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(mockService).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该正确处理拒绝的 Promise&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fetchData</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;invalid-url&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .rejects</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">toThrow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="mocha-chai-sinon-组合" tabindex="-1">Mocha + Chai + Sinon 组合 <a class="header-anchor" href="#mocha-chai-sinon-组合" aria-label="Permalink to &quot;Mocha + Chai + Sinon 组合&quot;">​</a></h3><p>Mocha 是灵活的测试框架，Chai 提供丰富的断言语法，Sinon 用于测试替身 (spies，stubs，mocks)。</p><h4 id="测试套件配置" tabindex="-1">测试套件配置 <a class="header-anchor" href="#测试套件配置" aria-label="Permalink to &quot;测试套件配置&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// mocha-setup.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> chai </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;chai&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sinon </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;sinon&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sinonChai </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;sinon-chai&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> chaiAsPromised </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;chai-as-promised&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">chai.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(sinonChai);</span></span>
<span class="line"><span style="color:#E1E4E8;">chai.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(chaiAsPromised);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">expect</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> chai;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { sinon };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// file-processor.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { expect, sinon } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./mocha-setup.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FileProcessor } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/file-processor.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> fs </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;FileProcessor&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> fileProcessor;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> fsStub;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fileProcessor </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FileProcessor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    fsStub </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sinon.</span><span style="color:#B392F0;">stub</span><span style="color:#E1E4E8;">(fs, </span><span style="color:#9ECBFF;">&#39;readFile&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  afterEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fsStub.</span><span style="color:#B392F0;">restore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#processFile&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该成功读取并处理文件&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 准备</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> mockContent</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;文件内容&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      fsStub.</span><span style="color:#B392F0;">resolves</span><span style="color:#E1E4E8;">(mockContent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 执行</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fileProcessor.</span><span style="color:#B392F0;">processFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test.txt&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 断言</span></span>
<span class="line"><span style="color:#B392F0;">      expect</span><span style="color:#E1E4E8;">(fsStub).to.have.been.</span><span style="color:#B392F0;">calledOnceWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      expect</span><span style="color:#E1E4E8;">(result).to.</span><span style="color:#B392F0;">equal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;处理后的: 文件内容&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该在文件不存在时抛出错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 准备</span></span>
<span class="line"><span style="color:#E1E4E8;">      fsStub.</span><span style="color:#B392F0;">rejects</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件不存在&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 执行和断言</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(fileProcessor.</span><span style="color:#B392F0;">processFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nonexistent.txt&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        .to.be.</span><span style="color:#B392F0;">rejectedWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="node-js-内置测试模块" tabindex="-1">Node.js 内置测试模块 <a class="header-anchor" href="#node-js-内置测试模块" aria-label="Permalink to &quot;Node.js 内置测试模块&quot;">​</a></h3><p>Node.js 18+ 提供了稳定的 <code>node:test</code> 模块，包含现代测试功能。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// node-test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { test, describe, mock } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:test&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> assert </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:assert/strict&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EventEmitter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;事件发射器&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该发射事件并传递数据&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emitter</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> EventEmitter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mockListener</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> mock.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    emitter.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, mockListener);</span></span>
<span class="line"><span style="color:#E1E4E8;">    emitter.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, { value: </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    assert.</span><span style="color:#B392F0;">strictEqual</span><span style="color:#E1E4E8;">(mockListener.mock.</span><span style="color:#B392F0;">callCount</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    assert.</span><span style="color:#B392F0;">deepStrictEqual</span><span style="color:#E1E4E8;">(mockListener.mock.calls[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].arguments[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], { value: </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 异步测试</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;异步操作测试&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> t.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该解析 Promise&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    assert.</span><span style="color:#B392F0;">strictEqual</span><span style="color:#E1E4E8;">(result, </span><span style="color:#9ECBFF;">&#39;成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> t.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该拒绝 Promise&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> assert.</span><span style="color:#B392F0;">rejects</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;失败&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">      { message: </span><span style="color:#9ECBFF;">&#39;失败&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="命令行工具专用测试技术" tabindex="-1">命令行工具专用测试技术 <a class="header-anchor" href="#命令行工具专用测试技术" aria-label="Permalink to &quot;命令行工具专用测试技术&quot;">​</a></h2><h3 id="子进程执行测试" tabindex="-1">子进程执行测试 <a class="header-anchor" href="#子进程执行测试" aria-label="Permalink to &quot;子进程执行测试&quot;">​</a></h3><p>测试命令行工具需要执行实际的子进程并验证其行为。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cli-execution.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { once } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:url&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dirname, join } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> __dirname</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CLI_PATH</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;../src/cli.mjs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CLITestRunner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#F97583;"> async</span><span style="color:#B392F0;"> execute</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [], </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">CLI_PATH</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args], {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options,</span></span>
<span class="line"><span style="color:#E1E4E8;">      env: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">process.env, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options.env },</span></span>
<span class="line"><span style="color:#E1E4E8;">      encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> stdout </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> stderr </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.stdout.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdout </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.stderr.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stderr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">exitCode</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> once</span><span style="color:#E1E4E8;">(child, </span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      exitCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdout: stdout.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stderr: stderr.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;命令行界面测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该显示帮助信息&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> CLITestRunner.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;--help&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.exitCode).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.stdout).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用法:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.stdout).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选项:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该处理文件转换&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> CLITestRunner.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;convert&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--input&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;test.txt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--output&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;output.json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.exitCode).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.stdout).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;转换完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该在参数缺失时显示错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> CLITestRunner.</span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;convert&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.exitCode).not.</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.stderr).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;缺少必要参数&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="用户交互模拟" tabindex="-1">用户交互模拟 <a class="header-anchor" href="#用户交互模拟" aria-label="Permalink to &quot;用户交互模拟&quot;">​</a></h3><p>测试需要模拟用户输入和验证输出。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// interactive-cli.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { spawn } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Writable } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:stream&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> InteractiveCLITester</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">cliPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.cliPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cliPath;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> runWithInput</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> child</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> spawn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cliPath, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args], {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: [</span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 收集输出</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> output </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    child.stdout.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      output </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 模拟用户输入</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> input</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> inputs) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      child.stdin.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(input </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">      // 等待输出刷新</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(resolve, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    child.stdin.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">exitCode</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      child.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exit&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">([code]));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      exitCode,</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: output.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;交互式命令行测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> tester;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeAll</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tester </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> InteractiveCLITester</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./src/interactive-cli.mjs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该处理问答流程&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;John Doe&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 姓名</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;30&#39;</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// 年龄</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;y&#39;</span><span style="color:#6A737D;">          // 确认</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> tester.</span><span style="color:#B392F0;">runWithInput</span><span style="color:#E1E4E8;">(inputs);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.exitCode).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.output).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;姓名: John Doe&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.output).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;年龄: 30&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.output).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;确认: 是&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该验证输入并重新提示&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;&#39;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 空姓名</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;John Doe&#39;</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 有效姓名</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;invalid&#39;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 无效年龄</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;30&#39;</span><span style="color:#6A737D;">          // 有效年龄</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> tester.</span><span style="color:#B392F0;">runWithInput</span><span style="color:#E1E4E8;">(inputs);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.output).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;姓名不能为空&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result.output).</span><span style="color:#B392F0;">toContain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入有效数字&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="模拟与测试替身" tabindex="-1">模拟与测试替身 <a class="header-anchor" href="#模拟与测试替身" aria-label="Permalink to &quot;模拟与测试替身&quot;">​</a></h2><h3 id="文件系统模拟" tabindex="-1">文件系统模拟 <a class="header-anchor" href="#文件系统模拟" aria-label="Permalink to &quot;文件系统模拟&quot;">​</a></h3><p>使用内存文件系统避免真实文件操作。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// fs-mocking.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { describe, it, beforeEach, afterEach } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;mocha&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { expect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;chai&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createFsFromVolume, Volume } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;memfs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ufs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;unionfs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { patchFs } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs-monkey&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FileManager } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/file-manager.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件管理器测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> fileManager;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> memFs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建内存文件系统</span></span>
<span class="line"><span style="color:#E1E4E8;">    memFs </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> createFsFromVolume</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Volume</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用联合文件系统（真实FS + 内存FS）</span></span>
<span class="line"><span style="color:#E1E4E8;">    ufs</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:fs&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(memFs);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    patchFs</span><span style="color:#E1E4E8;">(ufs);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化测试数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    memFs.</span><span style="color:#B392F0;">mkdirSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/project&#39;</span><span style="color:#E1E4E8;">, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    memFs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/project/config.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;: &quot;test&quot;}&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    fileManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FileManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  afterEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 恢复原始文件系统</span></span>
<span class="line"><span style="color:#B392F0;">    patchFs</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#F97583;"> import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node:fs&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该读取配置文件&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> fileManager.</span><span style="color:#B392F0;">readConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/project/config.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(config).to.deep.</span><span style="color:#B392F0;">equal</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该创建新文件&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> fileManager.</span><span style="color:#B392F0;">createFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/project/new-file.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;内容&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> memFs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/project/new-file.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(content).to.</span><span style="color:#B392F0;">equal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;内容&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该在文件不存在时抛出错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(fileManager.</span><span style="color:#B392F0;">readConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/nonexistent.json&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .to.be.</span><span style="color:#B392F0;">rejectedWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="网络请求模拟" tabindex="-1">网络请求模拟 <a class="header-anchor" href="#网络请求模拟" aria-label="Permalink to &quot;网络请求模拟&quot;">​</a></h3><p>模拟外部 API 调用以确保测试的独立性和速度。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// api-client.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nock </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;nock&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { APIClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/api-client.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;API 客户端测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> apiClient;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> apiScope;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiClient </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> APIClient</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiScope </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> nock</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  afterEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nock.</span><span style="color:#B392F0;">cleanAll</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该成功获取用户数据&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 模拟成功的 API 响应</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiScope</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/users/123&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;John Doe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        email: </span><span style="color:#9ECBFF;">&#39;john@example.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> apiClient.</span><span style="color:#B392F0;">getUser</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(user).to.deep.</span><span style="color:#B392F0;">equal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;John Doe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;john@example.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该处理 API 错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 模拟失败的 API 响应</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiScope</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/users/999&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">, { error: </span><span style="color:#9ECBFF;">&#39;用户不存在&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(apiClient.</span><span style="color:#B392F0;">getUser</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .to.be.</span><span style="color:#B392F0;">rejectedWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;API 错误: 用户不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该重试失败的请求&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 模拟第一次失败，第二次成功</span></span>
<span class="line"><span style="color:#E1E4E8;">    apiScope</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, { data: </span><span style="color:#9ECBFF;">&#39;成功&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> apiClient.</span><span style="color:#B392F0;">fetchWithRetry</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/data&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(data).to.deep.</span><span style="color:#B392F0;">equal</span><span style="color:#E1E4E8;">({ data: </span><span style="color:#9ECBFF;">&#39;成功&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="测试工具与实用库" tabindex="-1">测试工具与实用库 <a class="header-anchor" href="#测试工具与实用库" aria-label="Permalink to &quot;测试工具与实用库&quot;">​</a></h2><h3 id="supertest-http-测试" tabindex="-1">Supertest - HTTP 测试 <a class="header-anchor" href="#supertest-http-测试" aria-label="Permalink to &quot;Supertest - HTTP 测试&quot;">​</a></h3><p>测试命令行工具中的 HTTP 服务器组件。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// http-server.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> request </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;supertest&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createServer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/http-server.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;HTTP 服务器测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> server;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> app;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeAll</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> createServer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    server </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  afterAll</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> server.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该响应健康检查&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> request</span><span style="color:#E1E4E8;">(app)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/health&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(response.body).</span><span style="color:#B392F0;">toHaveProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;status&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;healthy&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该处理数据提交&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> testData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;测试&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> request</span><span style="color:#E1E4E8;">(app)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(testData)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">201</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(response.body).</span><span style="color:#B392F0;">toHaveProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(response.body.name).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该验证请求数据&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> request</span><span style="color:#E1E4E8;">(app)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/data&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({}) </span><span style="color:#6A737D;">// 空数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">缺少必要字段</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="testdouble-现代测试替身" tabindex="-1">TestDouble - 现代测试替身 <a class="header-anchor" href="#testdouble-现代测试替身" aria-label="Permalink to &quot;TestDouble - 现代测试替身&quot;">​</a></h3><p>提供清晰的测试替身 API，改善测试可读性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// service-test.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> td </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;testdouble&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { UserService } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/user-service.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EmailService } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/email-service.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户服务测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> userService;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> mockEmailService;</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> mockDatabase;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mockEmailService </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> td.</span><span style="color:#B392F0;">object</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">EmailService</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    mockDatabase </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> td.</span><span style="color:#B392F0;">object</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;findUser&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;saveUser&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    userService </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UserService</span><span style="color:#E1E4E8;">(mockDatabase);</span></span>
<span class="line"><span style="color:#E1E4E8;">    userService.emailService </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mockEmailService;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  afterEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该注册用户并发送欢迎邮件&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置测试替身行为</span></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">when</span><span style="color:#E1E4E8;">(mockDatabase.</span><span style="color:#B392F0;">findUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">thenResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">when</span><span style="color:#E1E4E8;">(mockDatabase.</span><span style="color:#B392F0;">saveUser</span><span style="color:#E1E4E8;">(td.matchers.</span><span style="color:#B392F0;">anything</span><span style="color:#E1E4E8;">()))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">thenResolve</span><span style="color:#E1E4E8;">({ id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">when</span><span style="color:#E1E4E8;">(mockEmailService.</span><span style="color:#B392F0;">sendWelcomeEmail</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">thenResolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 执行测试</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> userService.</span><span style="color:#B392F0;">registerUser</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;secure123&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 验证行为</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toHaveProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">verify</span><span style="color:#E1E4E8;">(mockEmailService.</span><span style="color:#B392F0;">sendWelcomeEmail</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该在邮箱已存在时抛出错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    td.</span><span style="color:#B392F0;">when</span><span style="color:#E1E4E8;">(mockDatabase.</span><span style="color:#B392F0;">findUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;existing@example.com&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">thenResolve</span><span style="color:#E1E4E8;">({ id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&#39;existing@example.com&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      userService.</span><span style="color:#B392F0;">registerUser</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        email: </span><span style="color:#9ECBFF;">&#39;existing@example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password: </span><span style="color:#9ECBFF;">&#39;password&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ).rejects.</span><span style="color:#B392F0;">toThrow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户已存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="高级测试模式" tabindex="-1">高级测试模式 <a class="header-anchor" href="#高级测试模式" aria-label="Permalink to &quot;高级测试模式&quot;">​</a></h2><h3 id="快照测试" tabindex="-1">快照测试 <a class="header-anchor" href="#快照测试" aria-label="Permalink to &quot;快照测试&quot;">​</a></h3><p>确保输出格式和内容的一致性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// snapshot.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Formatter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/formatter.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;格式化器快照测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> formatter;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    formatter </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Formatter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该生成一致的用户报告&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userData</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;zhangsan@example.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      roles: [</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      createdAt: </span><span style="color:#9ECBFF;">&#39;2023-01-01T00:00:00Z&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> formatter.</span><span style="color:#B392F0;">formatUserReport</span><span style="color:#E1E4E8;">(userData);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(report).</span><span style="color:#B392F0;">toMatchSnapshot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该生成一致的系统状态报告&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> systemStatus</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: { usage: </span><span style="color:#79B8FF;">45.5</span><span style="color:#E1E4E8;">, cores: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      memory: { used: </span><span style="color:#79B8FF;">16384</span><span style="color:#E1E4E8;">, total: </span><span style="color:#79B8FF;">32768</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      disk: { used: </span><span style="color:#79B8FF;">256000</span><span style="color:#E1E4E8;">, total: </span><span style="color:#79B8FF;">500000</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> formatter.</span><span style="color:#B392F0;">formatSystemStatus</span><span style="color:#E1E4E8;">(systemStatus);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(report).</span><span style="color:#B392F0;">toMatchInlineSnapshot</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;系统状态报告:</span></span>
<span class="line"><span style="color:#9ECBFF;">      CPU: 45.5% (8 核心)</span></span>
<span class="line"><span style="color:#9ECBFF;">      内存: 16.0 GB / 32.0 GB (50.0%)</span></span>
<span class="line"><span style="color:#9ECBFF;">      磁盘: 250.0 GB / 488.3 GB (51.2%)&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="性能测试" tabindex="-1">性能测试 <a class="header-anchor" href="#性能测试" aria-label="Permalink to &quot;性能测试&quot;">​</a></h3><p>确保命令行工具的性能符合要求。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// performance.test.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { performance } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:perf_hooks&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DataProcessor } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../src/data-processor.mjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;性能测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> dataProcessor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataProcessor </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DataProcessor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该在合理时间内处理大量数据&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> largeDataset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: i,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dataProcessor.</span><span style="color:#B392F0;">processLargeDataset</span><span style="color:#E1E4E8;">(largeDataset);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> endTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> processingTime</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> endTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(processingTime).</span><span style="color:#B392F0;">toBeLessThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 应该在1秒内完成</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toHaveLength</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;应该具有线性时间复杂度&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sizes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> times</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> size</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> sizes) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> dataset</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: size }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ id: i }));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> start</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> dataProcessor.</span><span style="color:#B392F0;">processLargeDataset</span><span style="color:#E1E4E8;">(dataset);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> end</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> performance.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      times.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(end </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 验证时间增长大致是线性的</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ratio1</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> times[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> times[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 10倍数据量</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ratio2</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> times[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> times[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 10倍数据量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(ratio1).</span><span style="color:#B392F0;">toBeLessThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 允许一些波动</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(ratio2).</span><span style="color:#B392F0;">toBeLessThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="持续集成与测试优化" tabindex="-1">持续集成与测试优化 <a class="header-anchor" href="#持续集成与测试优化" aria-label="Permalink to &quot;持续集成与测试优化&quot;">​</a></h2><h3 id="github-actions-集成" tabindex="-1">GitHub Actions 集成 <a class="header-anchor" href="#github-actions-集成" aria-label="Permalink to &quot;GitHub Actions 集成&quot;">​</a></h3><p>在 CI 环境中运行测试套件。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/test.yml</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Node.js 测试</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">  push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">develop</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#85E89D;">  pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">  test</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.os }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#85E89D;">    strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">      matrix</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        os</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">ubuntu-latest</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">windows-latest</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">macos-latest</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#85E89D;">        node-version</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">18.x</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">20.x</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#85E89D;">    steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">使用 Node.js \${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#85E89D;">      uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#85E89D;">      with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.node-version }}</span></span>
<span class="line"><span style="color:#85E89D;">        cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;npm&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">安装依赖</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm ci</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">运行测试</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm test</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm run test:coverage</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">上传覆盖率报告</span></span>
<span class="line"><span style="color:#85E89D;">      uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">codecov/codecov-action@v3</span></span>
<span class="line"><span style="color:#85E89D;">      with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        file</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./coverage/lcov.info</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">运行 E2E 测试</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run test:e2e</span></span></code></pre></div><h3 id="测试覆盖率配置" tabindex="-1">测试覆盖率配置 <a class="header-anchor" href="#测试覆盖率配置" aria-label="Permalink to &quot;测试覆盖率配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// nyc.config.mjs</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: </span><span style="color:#9ECBFF;">&#39;@istanbuljs/nyc-config-esm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  all: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  include: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;src/**/*.mjs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  exclude: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;src/**/*.test.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;src/**/*.spec.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;src/test-utils/**/*.mjs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  reporter: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;text&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;lcov&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;html&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;check-coverage&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  branches: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  lines: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  functions: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  statements: </span><span style="color:#79B8FF;">80</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// package.json 脚本配置</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">{</span></span>
<span class="line"><span style="color:#6A737D;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;test&quot;: &quot;node --experimental-vm-modules node_modules/jest/bin/jest.js&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;test:coverage&quot;: &quot;npm test -- --coverage&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;test:watch&quot;: &quot;npm test -- --watch&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;test:e2e&quot;: &quot;node test/e2e/runner.mjs&quot;</span></span>
<span class="line"><span style="color:#6A737D;">  }</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>通过实施全面的测试策略，Node.js 命令行工具可以确保代码质量、功能正确性和优秀的用户体验。从单元测试到端到端测试，每个层次都扮演着重要的角色，共同构建可靠、可维护的命令行应用程序。</p>`,61)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
