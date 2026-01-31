import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"自动测试无障碍","description":"","frontmatter":{},"headers":[{"level":2,"title":"自动测试的价值与局限","slug":"自动测试的价值与局限","link":"#自动测试的价值与局限","children":[]},{"level":2,"title":"测试工具生态体系","slug":"测试工具生态体系","link":"#测试工具生态体系","children":[{"level":3,"title":"核心测试引擎","slug":"核心测试引擎","link":"#核心测试引擎","children":[]},{"level":3,"title":"工具分类矩阵","slug":"工具分类矩阵","link":"#工具分类矩阵","children":[]}]},{"level":2,"title":"静态代码分析","slug":"静态代码分析","link":"#静态代码分析","children":[{"level":3,"title":"ESLint 无障碍规则","slug":"eslint-无障碍规则","link":"#eslint-无障碍规则","children":[]},{"level":3,"title":"HTML 验证器集成","slug":"html-验证器集成","link":"#html-验证器集成","children":[]}]},{"level":2,"title":"单元测试与组件测试","slug":"单元测试与组件测试","link":"#单元测试与组件测试","children":[{"level":3,"title":"Jest 无障碍测试","slug":"jest-无障碍测试","link":"#jest-无障碍测试","children":[]},{"level":3,"title":"Vue 组件测试","slug":"vue-组件测试","link":"#vue-组件测试","children":[]},{"level":3,"title":"Testing Library 最佳实践","slug":"testing-library-最佳实践","link":"#testing-library-最佳实践","children":[]}]},{"level":2,"title":"端到端测试","slug":"端到端测试","link":"#端到端测试","children":[{"level":3,"title":"Cypress 无障碍测试","slug":"cypress-无障碍测试","link":"#cypress-无障碍测试","children":[]},{"level":3,"title":"Playwright 无障碍测试","slug":"playwright-无障碍测试","link":"#playwright-无障碍测试","children":[]}]},{"level":2,"title":"持续集成流水线","slug":"持续集成流水线","link":"#持续集成流水线","children":[{"level":3,"title":"GitHub Actions 集成","slug":"github-actions-集成","link":"#github-actions-集成","children":[]},{"level":3,"title":"自定义测试运行器","slug":"自定义测试运行器","link":"#自定义测试运行器","children":[]}]},{"level":2,"title":"可视化与报告","slug":"可视化与报告","link":"#可视化与报告","children":[{"level":3,"title":"交互式报告仪表板","slug":"交互式报告仪表板","link":"#交互式报告仪表板","children":[]},{"level":3,"title":"趋势分析与监控","slug":"趋势分析与监控","link":"#趋势分析与监控","children":[]}]}],"relativePath":"engineering/accessible/autotest.md","filePath":"engineering/accessible/autotest.md"}'),o={name:"engineering/accessible/autotest.md"};function e(t,s,E,c,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/accessible/autotest.md for this page in Markdown format</div><h1 id="自动测试无障碍" tabindex="-1">自动测试无障碍 <a class="header-anchor" href="#自动测试无障碍" aria-label="Permalink to &quot;自动测试无障碍&quot;">​</a></h1><h2 id="自动测试的价值与局限" tabindex="-1">自动测试的价值与局限 <a class="header-anchor" href="#自动测试的价值与局限" aria-label="Permalink to &quot;自动测试的价值与局限&quot;">​</a></h2><p>自动测试通过程序化手段批量检测无障碍问题，能够快速发现约 30-50%的 WCAG 合规问题。其核心原理是将无障碍规则转化为可执行的代码检查，在开发流程的各个阶段捕获问题。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>自动化检测范围:</span></span>
<span class="line"><span>✅ 可检测: 颜色对比度、图片alt属性、ARIA属性语法、标签关联</span></span>
<span class="line"><span>❌ 难检测: 上下文语义、逻辑焦点顺序、交互体验质量、认知负荷</span></span></code></pre></div><p>互补关系：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>手动测试 + 自动测试 = 完整无障碍质量保障</span></span>
<span class="line"><span>深度体验验证   +   广度技术合规 = 全面覆盖</span></span></code></pre></div><h2 id="测试工具生态体系" tabindex="-1">测试工具生态体系 <a class="header-anchor" href="#测试工具生态体系" aria-label="Permalink to &quot;测试工具生态体系&quot;">​</a></h2><h3 id="核心测试引擎" tabindex="-1">核心测试引擎 <a class="header-anchor" href="#核心测试引擎" aria-label="Permalink to &quot;核心测试引擎&quot;">​</a></h3><p>axe-core 作为行业标准测试引擎的原理：</p><p>代码示例 (axe-core 基础使用)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> axe</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基础测试配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> axeConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;color-contrast&#39;</span><span style="color:#E1E4E8;">: { enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;image-alt&#39;</span><span style="color:#E1E4E8;">: { enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;label&#39;</span><span style="color:#E1E4E8;">: { enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;link-name&#39;</span><span style="color:#E1E4E8;">: { enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  runOnly: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;tag&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    values: [</span><span style="color:#9ECBFF;">&#39;wcag2a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;wcag2aa&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行测试</span></span>
<span class="line"><span style="color:#E1E4E8;">axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(document, axeConfig, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`发现 \${</span><span style="color:#E1E4E8;">results</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">violations</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个违规问题\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  results.violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`规则: \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`描述: \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">description</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`影响: \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">impact</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    violation.nodes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`元素: \${</span><span style="color:#E1E4E8;">node</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">html</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`修复: \${</span><span style="color:#E1E4E8;">node</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">failureSummary</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="工具分类矩阵" tabindex="-1">工具分类矩阵 <a class="header-anchor" href="#工具分类矩阵" aria-label="Permalink to &quot;工具分类矩阵&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态分析工具: ESLint插件、HTML验证器</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>单元测试工具: Jest-axe、Testing Library</span></span>
<span class="line"><span>    ↓  </span></span>
<span class="line"><span>集成测试工具: Storybook插件、浏览器扩展</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>端到端测试工具: Cypress-axe、Selenium</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>持续集成: GitHub Actions、GitLab CI</span></span></code></pre></div><h2 id="静态代码分析" tabindex="-1">静态代码分析 <a class="header-anchor" href="#静态代码分析" aria-label="Permalink to &quot;静态代码分析&quot;">​</a></h2><h3 id="eslint-无障碍规则" tabindex="-1">ESLint 无障碍规则 <a class="header-anchor" href="#eslint-无障碍规则" aria-label="Permalink to &quot;ESLint 无障碍规则&quot;">​</a></h3><p>在开发阶段捕获常见的无障碍编码错误。</p><p>代码示例 (ESLint 配置)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;jsx-a11y&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;plugin:jsx-a11y/recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#6A737D;">    // 图片必须有alt文本</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/alt-text&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      elements: [</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;object&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;area&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;input[type=&quot;image&quot;]&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      img: [</span><span style="color:#9ECBFF;">&#39;Image&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      object: [</span><span style="color:#9ECBFF;">&#39;Object&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      area: [</span><span style="color:#9ECBFF;">&#39;Area&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;input[type=&quot;image&quot;]&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;InputImage&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 锚点必须有有效href</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/anchor-is-valid&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      components: [</span><span style="color:#9ECBFF;">&#39;Link&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      specialLink: [</span><span style="color:#9ECBFF;">&#39;hrefLeft&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hrefRight&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      aspects: [</span><span style="color:#9ECBFF;">&#39;invalidHref&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;preferButton&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 表单标签必须关联</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/label-has-associated-control&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      labelComponents: [</span><span style="color:#9ECBFF;">&#39;CustomLabel&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      controlComponents: [</span><span style="color:#9ECBFF;">&#39;CustomInput&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      assert: </span><span style="color:#9ECBFF;">&#39;both&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      depth: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 交互元素必须有角色</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/no-static-element-interactions&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      handlers: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onClick&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onMouseDown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onMouseUp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyPress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyDown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyUp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 非交互元素不能有交互处理</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/no-noninteractive-element-interactions&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      handlers: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onClick&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onMouseDown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onMouseUp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyPress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyDown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;onKeyUp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="html-验证器集成" tabindex="-1">HTML 验证器集成 <a class="header-anchor" href="#html-验证器集成" aria-label="Permalink to &quot;HTML 验证器集成&quot;">​</a></h3><p>在构建过程中验证 HTML 语义结构。</p><p>代码示例 (HTML 验证工具)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// html-validator.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">JSDOM</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;jsdom&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> axe</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> HTMLAccessibilityValidator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.dom </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JSDOM</span><span style="color:#E1E4E8;">(html);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.document </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.dom.window.document;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> validate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.document);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      violations: results.violations,</span></span>
<span class="line"><span style="color:#E1E4E8;">      passes: results.passes,</span></span>
<span class="line"><span style="color:#E1E4E8;">      incomplete: results.incomplete,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 自定义语义验证</span></span>
<span class="line"><span style="color:#B392F0;">  validateSemanticStructure</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查标题层级</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> headings</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1, h2, h3, h4, h5, h6&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> previousLevel </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    headings.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">heading</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentLevel</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(heading.tagName.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (currentLevel </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> previousLevel </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;HEADING_SKIP&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          element: heading.outerHTML,</span></span>
<span class="line"><span style="color:#E1E4E8;">          message: </span><span style="color:#9ECBFF;">\`标题从h\${</span><span style="color:#E1E4E8;">previousLevel</span><span style="color:#9ECBFF;">}跳到了h\${</span><span style="color:#E1E4E8;">currentLevel</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      previousLevel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentLevel;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查地标角色</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> landmarks</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;header&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;footer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;nav&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;aside&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;section&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ].</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    landmarks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">landmark</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">landmark.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;header&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;footer&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(landmark.tagName.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">())) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> suggestedRole</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">suggestLandmarkRole</span><span style="color:#E1E4E8;">(landmark);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (suggestedRole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;MISSING_LANDMARK_ROLE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            element: landmark.outerHTML,</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">\`建议添加role=&quot;\${</span><span style="color:#E1E4E8;">suggestedRole</span><span style="color:#9ECBFF;">}&quot;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> issues;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  suggestLandmarkRole</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tag</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.tagName.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> attributes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.attributes;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;nav&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;navigation&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;main&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;main&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;aside&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;complementary&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;section&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> attributes.</span><span style="color:#B392F0;">getNamedItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-label&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;region&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> validator</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> HTMLAccessibilityValidator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;h1&gt;页面标题&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;h3&gt;跳过h2的副标题&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div&gt;内容区域&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;/html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> validator.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Axe违规:&#39;</span><span style="color:#E1E4E8;">, results.violations.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;语义问题:&#39;</span><span style="color:#E1E4E8;">, validator.</span><span style="color:#B392F0;">validateSemanticStructure</span><span style="color:#E1E4E8;">());</span></span></code></pre></div><h2 id="单元测试与组件测试" tabindex="-1">单元测试与组件测试 <a class="header-anchor" href="#单元测试与组件测试" aria-label="Permalink to &quot;单元测试与组件测试&quot;">​</a></h2><h3 id="jest-无障碍测试" tabindex="-1">Jest 无障碍测试 <a class="header-anchor" href="#jest-无障碍测试" aria-label="Permalink to &quot;Jest 无障碍测试&quot;">​</a></h3><p>为 React/Vue 组件编写无障碍单元测试。</p><p>代码示例 (React 组件测试)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Button.test.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { render, screen } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> userEvent </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/user-event&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { axe, toHaveNoViolations } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;jest-axe&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Button </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./Button&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 扩展expect以支持无障碍断言</span></span>
<span class="line"><span style="color:#E1E4E8;">expect.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(toHaveNoViolations);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Button组件无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;通过axe-core合规测试&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        点击我</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> axe</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(results).</span><span style="color:#B392F0;">toHaveNoViolations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;支持键盘交互&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> jest.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleClick}&gt;测试按钮&lt;/</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;测试按钮&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试Enter键</span></span>
<span class="line"><span style="color:#E1E4E8;">    button.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">keyboard</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;{Enter}&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(handleClick).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 测试空格键</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">keyboard</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(handleClick).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;禁用状态正确设置ARIA属性&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#B392F0;"> disabled</span><span style="color:#E1E4E8;">&gt;禁用按钮&lt;/</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;禁用按钮&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-disabled&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tabindex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-1&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;加载状态正确宣布&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#B392F0;"> loading</span><span style="color:#E1E4E8;">&gt;加载中&lt;/</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;加载中&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-live&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;polite&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-busy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="vue-组件测试" tabindex="-1">Vue 组件测试 <a class="header-anchor" href="#vue-组件测试" aria-label="Permalink to &quot;Vue 组件测试&quot;">​</a></h3><p>代码示例 (Vue 3 组件测试)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Modal.test.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mount } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vue/test-utils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { axe, toHaveNoViolations } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;jest-axe&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Modal </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./Modal.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">expect.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(toHaveNoViolations);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Modal组件无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模态框角色和属性正确&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> wrapper</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> mount</span><span style="color:#E1E4E8;">(Modal, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isOpen: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;测试模态框&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      slots: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;&lt;p&gt;模态框内容&lt;/p&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查ARIA属性</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modal</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> wrapper.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[role=&quot;dialog&quot;]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(modal.</span><span style="color:#B392F0;">exists</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(modal.</span><span style="color:#B392F0;">attributes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-labelledby&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;modal-title&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(modal.</span><span style="color:#B392F0;">attributes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-modal&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 无障碍合规测试</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> axe</span><span style="color:#E1E4E8;">(wrapper.element);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(results).</span><span style="color:#B392F0;">toHaveNoViolations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;焦点管理正确&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> wrapper</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> mount</span><span style="color:#E1E4E8;">(Modal, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isOpen: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      attachTo: document.body</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查焦点是否在模态框内</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> focusedElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.activeElement;</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(wrapper.element.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(focusedElement)).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查焦点陷阱</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> wrapper.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">trigger</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown.tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 应该保持焦点在模态框内</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="testing-library-最佳实践" tabindex="-1">Testing Library 最佳实践 <a class="header-anchor" href="#testing-library-最佳实践" aria-label="Permalink to &quot;Testing Library 最佳实践&quot;">​</a></h3><p>使用 Testing Library 进行用户中心的无障碍测试。</p><p>代码示例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// form.test.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { render, screen } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> userEvent </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/user-event&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ContactForm </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./ContactForm&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;联系表单无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;表单标签正确关联&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">ContactForm</span><span style="color:#E1E4E8;"> /&gt;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用getByLabelText测试标签关联</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nameInput</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByLabelText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">姓名</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(nameInput).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> emailInput</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByLabelText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">邮箱</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(emailInput).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 使用getByRole测试按钮</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> submitButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">提交</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(submitButton).</span><span style="color:#B392F0;">toBeEnabled</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误验证正确宣布&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">ContactForm</span><span style="color:#E1E4E8;"> /&gt;);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 提交空表单</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> submitButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">提交</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> user.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(submitButton);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查错误消息</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> errorMessage</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">findByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alert&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(errorMessage).</span><span style="color:#B392F0;">toHaveTextContent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">请输入姓名</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查ARIA无效状态</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> nameInput</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByLabelText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">姓名</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(nameInput).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-invalid&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;成功提交后焦点管理&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">ContactForm</span><span style="color:#E1E4E8;"> /&gt;);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 填写表单</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> user.</span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">(screen.</span><span style="color:#B392F0;">getByLabelText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">姓名</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> user.</span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">(screen.</span><span style="color:#B392F0;">getByLabelText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">邮箱</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&#39;test@example.com&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 提交表单</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> user.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">提交</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;"> }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查成功消息和焦点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> successMessage</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">findByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;status&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(successMessage).</span><span style="color:#B392F0;">toHaveTextContent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">提交成功</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 焦点应该移动到成功消息</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(successMessage).</span><span style="color:#B392F0;">toHaveFocus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="端到端测试" tabindex="-1">端到端测试 <a class="header-anchor" href="#端到端测试" aria-label="Permalink to &quot;端到端测试&quot;">​</a></h2><h3 id="cypress-无障碍测试" tabindex="-1">Cypress 无障碍测试 <a class="header-anchor" href="#cypress-无障碍测试" aria-label="Permalink to &quot;Cypress 无障碍测试&quot;">​</a></h3><p>集成 axe-core 到 Cypress 端到端测试流程。</p><p>代码示例 (Cypress 配置和测试)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cypress/plugins/index.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">injectAxe</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">checkA11y</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-cypress&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">on</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;task&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#B392F0;">    log</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cypress/support/commands.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;axe-cypress/support&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Cypress.Commands.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;checkAccessibility&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  cy.</span><span style="color:#B392F0;">injectAxe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  cy.</span><span style="color:#B392F0;">checkA11y</span><span style="color:#E1E4E8;">(context, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Cypress.Commands.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;checkAccessibilityWithThreshold&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">impactLevel</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;serious&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  cy.</span><span style="color:#B392F0;">injectAxe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  cy.</span><span style="color:#B392F0;">checkA11y</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    includedImpacts: [impactLevel]</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cypress/e2e/accessibility.cy.js</span></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;全站无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">visit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">injectAxe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;首页应通过无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;关键用户流程无障碍&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 测试导航</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;nav&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">within</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 测试搜索功能</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input[type=&quot;search&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试产品&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button[type=&quot;submit&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 测试产品页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.product-card&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;表单页面应正确处理验证&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">visit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/contact&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试空表单提交</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;form&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">within</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button[type=&quot;submit&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 检查错误状态</span></span>
<span class="line"><span style="color:#E1E4E8;">      cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[aria-invalid=&quot;true&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;exist&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[role=&quot;alert&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;be.visible&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;动态内容应正确宣布&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">visit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/dashboard&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 触发动态内容更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-testid=&quot;load-more&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查实时区域</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[aria-live]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;contain&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;新内容已加载&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkAccessibility</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="playwright-无障碍测试" tabindex="-1">Playwright 无障碍测试 <a class="header-anchor" href="#playwright-无障碍测试" aria-label="Permalink to &quot;Playwright 无障碍测试&quot;">​</a></h3><p>使用 Playwright 进行跨浏览器无障碍测试。</p><p>代码示例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// accessibility.spec.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">expect</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@playwright/test&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> axe</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将axe-core注入页面并运行测试</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> runAxeTest</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">addScriptTag</span><span style="color:#E1E4E8;">({ path: require.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">) });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">evalContext</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(evalContext </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> document, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        runOnly: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;tag&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          values: [</span><span style="color:#9ECBFF;">&#39;wcag2a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;wcag2aa&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(results);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, context);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">test.</span><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无障碍端到端测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;整个应用应通过WCAG AA标准&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">goto</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> runAxeTest</span><span style="color:#E1E4E8;">(page);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(results.violations.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 详细报告</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (results.violations.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无障碍违规:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`- \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">help</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模态框焦点管理&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">goto</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 打开模态框</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-testid=&quot;open-modal&quot;]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查焦点在模态框内</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> modal</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">locator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[role=&quot;dialog&quot;]&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> expect</span><span style="color:#E1E4E8;">(modal).</span><span style="color:#B392F0;">toBeVisible</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> focused</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> document.activeElement);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> isFocusInModal</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> modal.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">modalEl</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">focusedEl</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      modalEl.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(focusedEl), focused);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(isFocusInModal).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试焦点陷阱</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.keyboard.</span><span style="color:#B392F0;">press</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.keyboard.</span><span style="color:#B392F0;">press</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.keyboard.</span><span style="color:#B392F0;">press</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stillFocused</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> document.activeElement);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> isStillInModal</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> modal.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">modalEl</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">focusedEl</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      modalEl.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(focusedEl), stillFocused);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(isStillInModal).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;键盘导航完整性&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">goto</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取所有可聚焦元素</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> focusableElements</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">$$</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试Tab顺序</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> page.keyboard.</span><span style="color:#B392F0;">press</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> focusableElements.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentFocus</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> page.</span><span style="color:#B392F0;">evaluate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        document.activeElement.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-testid&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        document.activeElement.tagName</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`焦点位置 \${</span><span style="color:#E1E4E8;">i</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">currentFocus</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> page.keyboard.</span><span style="color:#B392F0;">press</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Tab&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="持续集成流水线" tabindex="-1">持续集成流水线 <a class="header-anchor" href="#持续集成流水线" aria-label="Permalink to &quot;持续集成流水线&quot;">​</a></h2><h3 id="github-actions-集成" tabindex="-1">GitHub Actions 集成 <a class="header-anchor" href="#github-actions-集成" aria-label="Permalink to &quot;GitHub Actions 集成&quot;">​</a></h3><p>在 CI/CD 流水线中自动运行无障碍测试。</p><p>代码示例 (GitHub Actions 配置)：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/accessibility.yml</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Accessibility Testing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">  push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">develop</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#85E89D;">  pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    branches</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">  a11y-test</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#85E89D;">    steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Node.js</span></span>
<span class="line"><span style="color:#85E89D;">      uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#85E89D;">      with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;18&#39;</span></span>
<span class="line"><span style="color:#85E89D;">        cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;npm&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm ci</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run unit tests with a11y</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm test -- --coverage --watchAll=false</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run a11y tests</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run test:a11y</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and test production bundle</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm run build</span></span>
<span class="line"><span style="color:#9ECBFF;">        npx serve -s build -p 3000 &amp;</span></span>
<span class="line"><span style="color:#9ECBFF;">        sleep 10</span></span>
<span class="line"><span style="color:#9ECBFF;">        npx wait-on http://localhost:3000</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm run test:e2e:a11y</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Upload a11y report</span></span>
<span class="line"><span style="color:#85E89D;">      uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-artifact@v3</span></span>
<span class="line"><span style="color:#85E89D;">      with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">accessibility-report</span></span>
<span class="line"><span style="color:#85E89D;">        path</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          a11y-results/</span></span>
<span class="line"><span style="color:#9ECBFF;">          coverage/</span></span>
<span class="line"><span style="color:#85E89D;">        retention-days</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">  lighthouse-ci</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">    runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#85E89D;">    steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Node.js</span></span>
<span class="line"><span style="color:#85E89D;">      uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#85E89D;">      with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;18&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install Lighthouse CI</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm install -g @lhci/cli@0.12.x</span></span>
<span class="line"><span style="color:#9ECBFF;">        npm install -g lighthouse</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run Lighthouse CI</span></span>
<span class="line"><span style="color:#85E89D;">      run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">        lhci autorun --upload.target=temporary-public-storage</span></span>
<span class="line"><span style="color:#85E89D;">      env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#85E89D;">        LHCI_GITHUB_APP_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.LHCI_GITHUB_APP_TOKEN }}</span></span></code></pre></div><h3 id="自定义测试运行器" tabindex="-1">自定义测试运行器 <a class="header-anchor" href="#自定义测试运行器" aria-label="Permalink to &quot;自定义测试运行器&quot;">​</a></h3><p>创建专门的无障碍测试运行器。</p><p>代码示例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-test-runner.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> fs</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">promisify</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;util&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">JSDOM</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;jsdom&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> axe</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> readFile</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(fs.readFile);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> writeFile</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> promisify</span><span style="color:#E1E4E8;">(fs.writeFile);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yTestRunner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputDir: </span><span style="color:#9ECBFF;">&#39;./a11y-results&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: [</span><span style="color:#9ECBFF;">&#39;wcag2a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;wcag2aa&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> testHTMLFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> html</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dom</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JSDOM</span><span style="color:#E1E4E8;">(html);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(dom.window.document, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      runOnly: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;tag&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        values: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.rules</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      file: filePath,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">results</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> testURL</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 使用puppeteer或playwright测试真实URL</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> axios</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">testHTMLString</span><span style="color:#E1E4E8;">(response.data, url);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> testHTMLString</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">source</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;unknown&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dom</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JSDOM</span><span style="color:#E1E4E8;">(html);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(dom.window.document, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      runOnly: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;tag&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        values: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.rules</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      source,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">results</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.results.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      summary: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSummary</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      details: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.results,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getSummary</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalViolations </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalPasses </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> violationsByRule</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.results.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalViolations </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> result.violations.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalPasses </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> result.passes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      result.violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        violationsByRule[violation.id] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          (violationsByRule[violation.id] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalTests: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.results.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalViolations,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalPasses,</span></span>
<span class="line"><span style="color:#E1E4E8;">      violationsByRule,</span></span>
<span class="line"><span style="color:#E1E4E8;">      complianceRate: ((totalPasses </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> totalViolations) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalPasses </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> saveReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> filename</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`a11y-report-\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}.json\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> filepath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.outputDir, filename);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(filepath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(report, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`报告已保存: \${</span><span style="color:#E1E4E8;">filepath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> filepath;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> runner</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> A11yTestRunner</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 测试本地HTML文件</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> runner.</span><span style="color:#B392F0;">testHTMLFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./dist/index.html&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 测试URL</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> runner.</span><span style="color:#B392F0;">testURL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://localhost:3000&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成报告</span></span>
<span class="line"><span style="color:#F97583;">  await</span><span style="color:#E1E4E8;"> runner.</span><span style="color:#B392F0;">saveReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> summary</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> runner.</span><span style="color:#B392F0;">getSummary</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试完成:&#39;</span><span style="color:#E1E4E8;">, summary);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 如果存在严重违规，退出码为1</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (summary.totalViolations </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(console.error);</span></span></code></pre></div><h2 id="可视化与报告" tabindex="-1">可视化与报告 <a class="header-anchor" href="#可视化与报告" aria-label="Permalink to &quot;可视化与报告&quot;">​</a></h2><h3 id="交互式报告仪表板" tabindex="-1">交互式报告仪表板 <a class="header-anchor" href="#交互式报告仪表板" aria-label="Permalink to &quot;交互式报告仪表板&quot;">​</a></h3><p>创建可视化的无障碍测试报告。</p><p>代码示例 (HTML 报告生成器)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-reporter.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yReporter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateHTMLReport</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;html lang=&quot;zh&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;title&gt;无障碍测试报告&lt;/title&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        .report { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .summary { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .metric { display: inline-block; margin-right: 30px; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .metric-value { font-size: 24px; font-weight: bold; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violations { margin-top: 30px; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation { border: 1px solid #ddd; margin-bottom: 15px; padding: 15px; border-radius: 4px; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation.critical { border-left: 4px solid #e74c3c; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation.serious { border-left: 4px solid #e67e22; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation.moderate { border-left: 4px solid #f1c40f; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation.minor { border-left: 4px solid #3498db; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .violation-header { display: flex; justify-content: between; align-items: center; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .impact { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .impact-critical { background: #e74c3c; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .impact-serious { background: #e67e22; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .impact-moderate { background: #f1c40f; color: #333; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .impact-minor { background: #3498db; }</span></span>
<span class="line"><span style="color:#9ECBFF;">        .element { background: #f8f9fa; padding: 8px; border-radius: 4px; font-family: monospace; margin: 10px 0; }</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div class=&quot;report&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;h1&gt;无障碍测试报告&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        </span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div class=&quot;summary&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;h2&gt;测试概览&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;metric&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div class=&quot;metric-value&quot;&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">summary</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">totalTests</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div&gt;测试页面&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;metric&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div class=&quot;metric-value&quot;&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">summary</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">totalViolations</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div&gt;发现问题&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;metric&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div class=&quot;metric-value&quot;&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">summary</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">complianceRate</span><span style="color:#9ECBFF;">}%&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div&gt;合规率&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        </span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div class=&quot;violations&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;h2&gt;详细问题&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">generateViolationsHTML</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">details</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateViolationsHTML</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">details</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> html </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    details.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">detail</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail.violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        html </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div class=&quot;violation \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">impact</span><span style="color:#9ECBFF;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;violation-header&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;h3&gt;\${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">help</span><span style="color:#9ECBFF;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;span class=&quot;impact impact-\${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">impact</span><span style="color:#9ECBFF;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">impact</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;p&gt;\${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">description</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;p&gt;&lt;strong&gt;帮助文档:&lt;/strong&gt; &lt;a href=&quot;\${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">helpUrl</span><span style="color:#9ECBFF;">}&quot;&gt;\${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">helpUrl</span><span style="color:#9ECBFF;">}&lt;/a&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            </span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;h4&gt;影响元素:&lt;/h4&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">nodes</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">map</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">node</span><span style="color:#F97583;"> =&gt;</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div class=&quot;element&quot;&gt;\${</span><span style="color:#E1E4E8;">node</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">html</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;p&gt;&lt;strong&gt;修复建议:&lt;/strong&gt; \${</span><span style="color:#E1E4E8;">node</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">failureSummary</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            \`</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> reportData</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./a11y-results/a11y-report-1234567890.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> htmlReport</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> A11yReporter.</span><span style="color:#B392F0;">generateHTMLReport</span><span style="color:#E1E4E8;">(reportData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./a11y-report.html&#39;</span><span style="color:#E1E4E8;">, htmlReport);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;HTML报告已生成: a11y-report.html&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="趋势分析与监控" tabindex="-1">趋势分析与监控 <a class="header-anchor" href="#趋势分析与监控" aria-label="Permalink to &quot;趋势分析与监控&quot;">​</a></h3><p>跟踪无障碍合规性的长期趋势。</p><p>代码示例 (趋势分析)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-trends.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yTrendAnalyzer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.history </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  addDailyReport</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">report</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      date: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;T&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">report.summary</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 保持最近90天的数据</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 90</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getComplianceTrend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">day</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      date: day.date,</span></span>
<span class="line"><span style="color:#E1E4E8;">      complianceRate: </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(day.complianceRate),</span></span>
<span class="line"><span style="color:#E1E4E8;">      violations: day.totalViolations</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  generateTrendChart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> trendData</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getComplianceTrend</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用Chart.js或类似库生成图表</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        labels: trendData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">d</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> d.date),</span></span>
<span class="line"><span style="color:#E1E4E8;">        datasets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;合规率 (%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: trendData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">d</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> d.complianceRate),</span></span>
<span class="line"><span style="color:#E1E4E8;">            borderColor: </span><span style="color:#9ECBFF;">&#39;#2ecc71&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            backgroundColor: </span><span style="color:#9ECBFF;">&#39;rgba(46, 204, 113, 0.1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fill: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;问题数量&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: trendData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">d</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> d.violations),</span></span>
<span class="line"><span style="color:#E1E4E8;">            borderColor: </span><span style="color:#9ECBFF;">&#39;#e74c3c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            backgroundColor: </span><span style="color:#9ECBFF;">&#39;rgba(231, 76, 60, 0.1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fill: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            yAxisID: </span><span style="color:#9ECBFF;">&#39;y1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        scales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          y: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            beginAtZero: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            max: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              display: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              text: </span><span style="color:#9ECBFF;">&#39;合规率 (%)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          y1: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&#39;right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            beginAtZero: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              display: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              text: </span><span style="color:#9ECBFF;">&#39;问题数量&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  predictFutureCompliance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> 7</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recentData</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rates</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> recentData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">d</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> parseFloat</span><span style="color:#E1E4E8;">(d.complianceRate));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 简单线性回归预测</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rates.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xSum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ySum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rates.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rate</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rate, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xySum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rates.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> i, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> xSquaredSum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rates.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> i, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> slope</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> xySum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> xSum </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> ySum) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> xSquaredSum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> xSum </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> xSum);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> intercept</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (ySum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> slope </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> xSum) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: rates[rates.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      predicted: intercept </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> slope </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      trend: slope </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;improving&#39;</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> slope </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;declining&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;stable&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> analyzer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> A11yTrendAnalyzer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加每日报告</span></span>
<span class="line"><span style="color:#E1E4E8;">analyzer.</span><span style="color:#B392F0;">addDailyReport</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  summary: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalTests: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalViolations: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalPasses: </span><span style="color:#79B8FF;">287</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    complianceRate: </span><span style="color:#9ECBFF;">&#39;98.96&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;合规趋势:&#39;</span><span style="color:#E1E4E8;">, analyzer.</span><span style="color:#B392F0;">getComplianceTrend</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;预测:&#39;</span><span style="color:#E1E4E8;">, analyzer.</span><span style="color:#B392F0;">predictFutureCompliance</span><span style="color:#E1E4E8;">());</span></span></code></pre></div>`,63)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
