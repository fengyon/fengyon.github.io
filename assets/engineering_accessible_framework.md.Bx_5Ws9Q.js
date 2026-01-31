import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"无障碍框架","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是无障碍框架","slug":"什么是无障碍框架","link":"#什么是无障碍框架","children":[]},{"level":2,"title":"设计系统集成","slug":"设计系统集成","link":"#设计系统集成","children":[{"level":3,"title":"无障碍设计令牌","slug":"无障碍设计令牌","link":"#无障碍设计令牌","children":[]},{"level":3,"title":"组件级无障碍规范","slug":"组件级无障碍规范","link":"#组件级无障碍规范","children":[]}]},{"level":2,"title":"组件库实现","slug":"组件库实现","link":"#组件库实现","children":[{"level":3,"title":"基础无障碍组件","slug":"基础无障碍组件","link":"#基础无障碍组件","children":[]},{"level":3,"title":"复杂组件框架","slug":"复杂组件框架","link":"#复杂组件框架","children":[]}]},{"level":2,"title":"开发工具和 SDK","slug":"开发工具和-sdk","link":"#开发工具和-sdk","children":[{"level":3,"title":"无障碍开发 SDK","slug":"无障碍开发-sdk","link":"#无障碍开发-sdk","children":[]},{"level":3,"title":"开发环境工具","slug":"开发环境工具","link":"#开发环境工具","children":[]}]},{"level":2,"title":"测试框架集成","slug":"测试框架集成","link":"#测试框架集成","children":[{"level":3,"title":"单元测试工具","slug":"单元测试工具","link":"#单元测试工具","children":[]},{"level":3,"title":"端到端测试框架","slug":"端到端测试框架","link":"#端到端测试框架","children":[]}]},{"level":2,"title":"构建时优化","slug":"构建时优化","link":"#构建时优化","children":[{"level":3,"title":"静态分析集成","slug":"静态分析集成","link":"#静态分析集成","children":[]},{"level":3,"title":"自动化修复工具","slug":"自动化修复工具","link":"#自动化修复工具","children":[]}]},{"level":2,"title":"监控和分析","slug":"监控和分析","link":"#监控和分析","children":[{"level":3,"title":"运行时监控","slug":"运行时监控","link":"#运行时监控","children":[]},{"level":3,"title":"数据分析仪表板","slug":"数据分析仪表板","link":"#数据分析仪表板","children":[]}]},{"level":2,"title":"框架集成模式","slug":"框架集成模式","link":"#框架集成模式","children":[{"level":3,"title":"多框架适配器","slug":"多框架适配器","link":"#多框架适配器","children":[]},{"level":3,"title":"微前端无障碍协调","slug":"微前端无障碍协调","link":"#微前端无障碍协调","children":[]}]}],"relativePath":"engineering/accessible/framework.md","filePath":"engineering/accessible/framework.md"}'),o={name:"engineering/accessible/framework.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/accessible/framework.md for this page in Markdown format</div><h1 id="无障碍框架" tabindex="-1">无障碍框架 <a class="header-anchor" href="#无障碍框架" aria-label="Permalink to &quot;无障碍框架&quot;">​</a></h1><h2 id="什么是无障碍框架" tabindex="-1">什么是无障碍框架 <a class="header-anchor" href="#什么是无障碍框架" aria-label="Permalink to &quot;什么是无障碍框架&quot;">​</a></h2><p>无障碍框架是系统化的工具集合和设计模式，用于在整个产品开发周期中系统性地实现和保障无障碍性。不同于零散的修复，框架从架构层面将无障碍集成到组件库、设计系统和开发流程中。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统方式: 开发 → 测试 → 发现无障碍问题 → 修复</span></span>
<span class="line"><span>框架方式: 设计系统 + 组件库 + 开发工具 → 无障碍内建 → 持续验证</span></span></code></pre></div><p>核心原理：通过标准化、自动化和系统集成，将无障碍从后期修复转变为前期预防，确保一致性并降低实施成本。</p><h2 id="设计系统集成" tabindex="-1">设计系统集成 <a class="header-anchor" href="#设计系统集成" aria-label="Permalink to &quot;设计系统集成&quot;">​</a></h2><h3 id="无障碍设计令牌" tabindex="-1">无障碍设计令牌 <a class="header-anchor" href="#无障碍设计令牌" aria-label="Permalink to &quot;无障碍设计令牌&quot;">​</a></h3><p>在设计系统中定义无障碍相关的设计决策。</p><p>代码示例：</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 无障碍设计令牌</span></span>
<span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 色彩对比度保证</span></span>
<span class="line"><span style="color:#FFAB70;">  --color-text-primary</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#333333</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --color-text-secondary</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#666666</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --color-background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ffffff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --color-primary</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#0056b3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 间距和尺寸标准</span></span>
<span class="line"><span style="color:#FFAB70;">  --spacing-focus-ring</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --size-touch-target</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">44</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --border-focus</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--color-primary</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 动画和过渡</span></span>
<span class="line"><span style="color:#FFAB70;">  --duration-motion</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">  --timing-function</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ease-in-out</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 高对比度模式支持</span></span>
<span class="line"><span style="color:#F97583;">  @media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">prefers-contrast</span><span style="color:#E1E4E8;">: high) {</span></span>
<span class="line"><span style="color:#FFAB70;">    --color-primary</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#000000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">    --border-focus</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #000000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 减少动画偏好</span></span>
<span class="line"><span style="color:#F97583;">  @media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">prefers-reduced-motion</span><span style="color:#E1E4E8;">: reduce) {</span></span>
<span class="line"><span style="color:#FFAB70;">    --duration-motion</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.01</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="组件级无障碍规范" tabindex="-1">组件级无障碍规范 <a class="header-anchor" href="#组件级无障碍规范" aria-label="Permalink to &quot;组件级无障碍规范&quot;">​</a></h3><p>在设计系统中定义组件的无障碍要求。</p><p>代码示例 (设计系统文档)：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;">## 按钮组件无障碍规范</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 必需属性</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#79B8FF;"> \`role=&quot;button&quot;\`</span><span style="color:#E1E4E8;"> (自定义按钮时)</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#79B8FF;"> \`tabindex=&quot;0&quot;\`</span><span style="color:#E1E4E8;"> (自定义按钮时)</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 可见的焦点指示器</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 最小44×44px触摸目标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 键盘交互</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> Enter/Space激活</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 支持程序化焦点管理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 屏幕阅读器</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 有意义的可访问名称</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 状态变化通知 (aria-pressed等)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 视觉设计</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 文本对比度 ≥ 4.5:1</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> 非文本对比度 ≥ 3:1</span></span></code></pre></div><h2 id="组件库实现" tabindex="-1">组件库实现 <a class="header-anchor" href="#组件库实现" aria-label="Permalink to &quot;组件库实现&quot;">​</a></h2><h3 id="基础无障碍组件" tabindex="-1">基础无障碍组件 <a class="header-anchor" href="#基础无障碍组件" aria-label="Permalink to &quot;基础无障碍组件&quot;">​</a></h3><p>创建具有内置无障碍支持的 React 组件。</p><p>代码示例 (React 按钮组件)：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { useRef, useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> PropTypes </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;prop-types&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> AccessibleButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">forwardRef</span><span style="color:#E1E4E8;">(({</span></span>
<span class="line"><span style="color:#E1E4E8;">  children,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onClick,</span></span>
<span class="line"><span style="color:#E1E4E8;">  disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pressed </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ariaLabel,</span></span>
<span class="line"><span style="color:#E1E4E8;">  className,</span></span>
<span class="line"><span style="color:#F97583;">  ...</span><span style="color:#E1E4E8;">props</span></span>
<span class="line"><span style="color:#E1E4E8;">}, ref) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> internalRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> buttonRef</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ref </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> internalRef;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理键盘交互</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleKeyDown</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (disabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Enter&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 防止空格键滚动页面</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#B392F0;">      onClick</span><span style="color:#E1E4E8;">?.(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 程序化焦点管理</span></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (props.autoFocus </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> buttonRef.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttonRef.current.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [props.autoFocus, buttonRef]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">      ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{buttonRef}</span></span>
<span class="line"><span style="color:#B392F0;">      role</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      tabIndex</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled </span><span style="color:#F97583;">?</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">      aria-disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled}</span></span>
<span class="line"><span style="color:#B392F0;">      aria-pressed</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{pressed}</span></span>
<span class="line"><span style="color:#B392F0;">      aria-label</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{ariaLabel}</span></span>
<span class="line"><span style="color:#B392F0;">      onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> undefined</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> onClick}</span></span>
<span class="line"><span style="color:#B392F0;">      onKeyDown</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleKeyDown}</span></span>
<span class="line"><span style="color:#B392F0;">      className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        accessible-button </span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#E1E4E8;">disabled</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;accessible-button--disabled&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;}</span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#E1E4E8;">className</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;&#39;}</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">props}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {children}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">AccessibleButton.propTypes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: PropTypes.node.isRequired,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onClick: PropTypes.func,</span></span>
<span class="line"><span style="color:#E1E4E8;">  disabled: PropTypes.bool,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pressed: PropTypes.bool,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ariaLabel: PropTypes.string,</span></span>
<span class="line"><span style="color:#E1E4E8;">  className: PropTypes.string,</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoFocus: PropTypes.bool</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> AccessibleButton;</span></span></code></pre></div><h3 id="复杂组件框架" tabindex="-1">复杂组件框架 <a class="header-anchor" href="#复杂组件框架" aria-label="Permalink to &quot;复杂组件框架&quot;">​</a></h3><p>实现完整的无障碍复合组件。</p><p>代码示例 (React 标签页组件)：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { useState, useEffect, useCallback } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> TabContext</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">createContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> TabList</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">orientation</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;horizontal&#39;</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">selectedIndex</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setSelectedIndex</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> contextValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectedIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setSelectedIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    orientation</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tab-list-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">TabContext.Provider</span><span style="color:#B392F0;"> value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{contextValue}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">          role</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tablist&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          aria-label</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{label}</span></span>
<span class="line"><span style="color:#B392F0;">          aria-orientation</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{orientation}</span></span>
<span class="line"><span style="color:#B392F0;">          className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tab-list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {children}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">TabContext.Provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> Tab</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">disabled</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">selectedIndex</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setSelectedIndex</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">orientation</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">useContext</span><span style="color:#E1E4E8;">(TabContext);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isSelected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> selectedIndex;</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> tabRef</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">useRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">disabled) {</span></span>
<span class="line"><span style="color:#B392F0;">      setSelectedIndex</span><span style="color:#E1E4E8;">(index);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleKeyDown</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (disabled) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> keyActions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      ArrowRight</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;horizontal&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prev</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> (prev </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)),</span></span>
<span class="line"><span style="color:#B392F0;">      ArrowLeft</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;horizontal&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prev</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> (prev </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)),</span></span>
<span class="line"><span style="color:#B392F0;">      ArrowDown</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;vertical&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prev</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> (prev </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)),</span></span>
<span class="line"><span style="color:#B392F0;">      ArrowUp</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> orientation </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;vertical&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prev</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> (prev </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children)),</span></span>
<span class="line"><span style="color:#B392F0;">      Home</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">      End</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setSelectedIndex</span><span style="color:#E1E4E8;">(React.Children.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">(children) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (keyActions[event.key]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      keyActions[event.key]();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (isSelected </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> tabRef.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tabRef.current.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [isSelected]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">      ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{tabRef}</span></span>
<span class="line"><span style="color:#B392F0;">      role</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tab&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      aria-selected</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isSelected}</span></span>
<span class="line"><span style="color:#B392F0;">      aria-disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled}</span></span>
<span class="line"><span style="color:#B392F0;">      tabIndex</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isSelected </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> :</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">      onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleClick}</span></span>
<span class="line"><span style="color:#B392F0;">      onKeyDown</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleKeyDown}</span></span>
<span class="line"><span style="color:#B392F0;">      className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`tab \${</span><span style="color:#E1E4E8;">isSelected</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;tab--selected&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;} \${</span><span style="color:#E1E4E8;">disabled</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;tab--disabled&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;}\`</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {children}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> TabPanel</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">selectedIndex</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">useContext</span><span style="color:#E1E4E8;">(TabContext);</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isSelected</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> selectedIndex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">      role</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tabpanel&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      aria-hidden</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isSelected}</span></span>
<span class="line"><span style="color:#B392F0;">      tabIndex</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">      className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`tab-panel \${</span><span style="color:#E1E4E8;">isSelected</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;tab-panel--active&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;}\`</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {isSelected </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> children}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>使用示例：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TabList</span><span style="color:#B392F0;"> label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;用户设置&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Tab</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">}&gt;个人信息&lt;/</span><span style="color:#79B8FF;">Tab</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Tab</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}&gt;隐私设置&lt;/</span><span style="color:#79B8FF;">Tab</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Tab</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}&gt;通知偏好&lt;/</span><span style="color:#79B8FF;">Tab</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">TabList</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">}&gt;个人信息内容...&lt;/</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}&gt;隐私设置内容...&lt;/</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#B392F0;"> index</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}&gt;通知偏好内容...&lt;/</span><span style="color:#79B8FF;">TabPanel</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="开发工具和-sdk" tabindex="-1">开发工具和 SDK <a class="header-anchor" href="#开发工具和-sdk" aria-label="Permalink to &quot;开发工具和 SDK&quot;">​</a></h2><h3 id="无障碍开发-sdk" tabindex="-1">无障碍开发 SDK <a class="header-anchor" href="#无障碍开发-sdk" aria-label="Permalink to &quot;无障碍开发 SDK&quot;">​</a></h3><p>提供开发时使用的工具函数和 Hooks。</p><p>代码示例 (React Hooks)：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useEffect, useRef } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 焦点管理Hook</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> useFocusManagement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">autoFocus</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> ref</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (autoFocus </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> ref.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ref.current.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [autoFocus]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> ref;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实时区域Hook</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> useLiveRegion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">politeness</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;polite&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setMessage</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (message) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> timer</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> clearTimeout</span><span style="color:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [message]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> announce</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">newMessage</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setMessage</span><span style="color:#E1E4E8;">(newMessage);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, []);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> LiveRegion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">      aria-live</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{politeness}</span></span>
<span class="line"><span style="color:#B392F0;">      aria-atomic</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;visually-hidden&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {message}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { announce, LiveRegion };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 键盘导航Hook</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#B392F0;"> useKeyboardNavigation</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">navigationMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> handleKeyDown</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> handler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> navigationMap[event.key];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (handler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">      handler</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [navigationMap]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { handleKeyDown };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h3 id="开发环境工具" tabindex="-1">开发环境工具 <a class="header-anchor" href="#开发环境工具" aria-label="Permalink to &quot;开发环境工具&quot;">​</a></h3><p>集成到开发流程中的无障碍工具。</p><p>代码示例 (ESLint 插件配置)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;jsx-a11y&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;plugin:jsx-a11y/recommended&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/alt-text&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/anchor-is-valid&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/aria-props&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/label-has-associated-control&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;jsx-a11y/no-noninteractive-tabindex&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><p>代码示例 (VS Code 代码片段)：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;Accessible Button&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;a11y-button&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;body&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;&lt;button&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  type=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">button</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  aria-label=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${1:button description}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  onClick={\${2:handleClick}}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  onKeyDown={(e) =&gt; {&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;    if (e.key === &#39;Enter&#39; || e.key === &#39; &#39;) {&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;      e.preventDefault();&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;      \${2:handleClick}(e);&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;    }&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  }}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;  \${3:button text}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;&lt;/button&gt;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;创建无障碍按钮&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="测试框架集成" tabindex="-1">测试框架集成 <a class="header-anchor" href="#测试框架集成" aria-label="Permalink to &quot;测试框架集成&quot;">​</a></h2><h3 id="单元测试工具" tabindex="-1">单元测试工具 <a class="header-anchor" href="#单元测试工具" aria-label="Permalink to &quot;单元测试工具&quot;">​</a></h3><p>组件级的无障碍测试工具。</p><p>代码示例 (Jest + Testing Library)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { render, screen } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/react&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> userEvent </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@testing-library/user-event&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { axe, toHaveNoViolations } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;jest-axe&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AccessibleButton </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./AccessibleButton&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">expect.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(toHaveNoViolations);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;AccessibleButton&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;通过无障碍测试&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">container</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{jest.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        测试按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> axe</span><span style="color:#E1E4E8;">(container);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(results).</span><span style="color:#B392F0;">toHaveNoViolations</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;支持键盘交互&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> jest.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleClick}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        测试按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;测试按钮&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    button.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试Enter键</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">keyboard</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;{Enter}&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(handleClick).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 测试空格键</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">keyboard</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(handleClick).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;禁用状态正确&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    render</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#B392F0;"> disabled</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{jest.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        禁用按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">AccessibleButton</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> screen.</span><span style="color:#B392F0;">getByRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { name: </span><span style="color:#9ECBFF;">&#39;禁用按钮&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-disabled&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    expect</span><span style="color:#E1E4E8;">(button).</span><span style="color:#B392F0;">toHaveAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tabindex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-1&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="端到端测试框架" tabindex="-1">端到端测试框架 <a class="header-anchor" href="#端到端测试框架" aria-label="Permalink to &quot;端到端测试框架&quot;">​</a></h3><p>集成到 E2E 测试中的无障碍检查。</p><p>代码示例 (Cypress 测试)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// cypress/plugins/index.js</span></span>
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
<span class="line"><span style="color:#6A737D;">// cypress/integration/accessibility.spec.js</span></span>
<span class="line"><span style="color:#B392F0;">describe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;页面无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  beforeEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">visit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">injectAxe</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;首页应通过无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkA11y</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;表单页面应通过无障碍测试&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">visit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/form&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">checkA11y</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;color-contrast&#39;</span><span style="color:#E1E4E8;">: { enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// 临时禁用颜色对比度规则</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  it</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;模态框应正确处理焦点&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[data-testid=&quot;open-modal&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[role=&quot;dialog&quot;]&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;be.visible&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">focused</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;have.attr&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;dialog&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 测试焦点陷阱</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">tab</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">tab</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">tab</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    cy.</span><span style="color:#B392F0;">focused</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">should</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;have.attr&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;data-testid&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;close-modal&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="构建时优化" tabindex="-1">构建时优化 <a class="header-anchor" href="#构建时优化" aria-label="Permalink to &quot;构建时优化&quot;">​</a></h2><h3 id="静态分析集成" tabindex="-1">静态分析集成 <a class="header-anchor" href="#静态分析集成" aria-label="Permalink to &quot;静态分析集成&quot;">​</a></h3><p>在构建过程中进行无障碍检查。</p><p>代码示例 (Webpack 插件)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-webpack-plugin.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">axe</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axe-core&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">JSDOM</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;jsdom&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yWebpackPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.emit.</span><span style="color:#B392F0;">tapPromise</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;A11yWebpackPlugin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">compilation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> a11yIssues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">filename</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(compilation.assets)) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (filename.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.html&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> dom</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> JSDOM</span><span style="color:#E1E4E8;">(source.</span><span style="color:#B392F0;">source</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> axe.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">(dom.window.document);</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (results.violations.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            a11yIssues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              file: filename,</span></span>
<span class="line"><span style="color:#E1E4E8;">              violations: results.violations</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (a11yIssues.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无障碍问题发现:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        a11yIssues.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">violations</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">file</span><span style="color:#9ECBFF;">}:\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`- \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">help</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">violation</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">description</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 在开发模式下警告，生产模式下报错</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;构建失败：存在无障碍问题&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> A11yWebpackPlugin;</span></span></code></pre></div><h3 id="自动化修复工具" tabindex="-1">自动化修复工具 <a class="header-anchor" href="#自动化修复工具" aria-label="Permalink to &quot;自动化修复工具&quot;">​</a></h3><p>代码示例 (自动 ARIA 属性添加)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-auto-fix.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> cheerio</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cheerio&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> enhanceAccessibility</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> $</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cheerio.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(html);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 自动为自定义按钮添加角色</span></span>
<span class="line"><span style="color:#B392F0;">  $</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[onclick]:not(button):not(a):not(input)&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">elem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> $elem</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> $</span><span style="color:#E1E4E8;">(elem);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">$elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      $elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tabindex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 为图片添加alt属性</span></span>
<span class="line"><span style="color:#B392F0;">  $</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img:not([alt])&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">elem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> $elem</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> $</span><span style="color:#E1E4E8;">(elem);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> isDecorative</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> $elem.</span><span style="color:#B392F0;">css</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;display&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        $elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;width&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;1&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        $elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;height&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    $elem.</span><span style="color:#B392F0;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alt&#39;</span><span style="color:#E1E4E8;">, isDecorative </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;描述性文本需要手动添加&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> $.</span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="监控和分析" tabindex="-1">监控和分析 <a class="header-anchor" href="#监控和分析" aria-label="Permalink to &quot;监控和分析&quot;">​</a></h2><h3 id="运行时监控" tabindex="-1">运行时监控 <a class="header-anchor" href="#运行时监控" aria-label="Permalink to &quot;运行时监控&quot;">​</a></h3><p>在生产环境中监控无障碍问题。</p><p>代码示例 (无障碍监控 SDK)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yMonitor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.issues </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMonitoring</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupMonitoring</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监控焦点管理</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focusin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleFocusChange.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监控键盘交互</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.handleKeyboardInteraction.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 监控动态内容变化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupMutationObserver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  handleFocusChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> target</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.target;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查焦点指示器</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> style</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">getComputedStyle</span><span style="color:#E1E4E8;">(target);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (style.outline </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> style.boxShadow </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reportIssue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MISSING_FOCUS_INDICATOR&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        element: target.tagName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSelector</span><span style="color:#E1E4E8;">(target)</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  handleKeyboardInteraction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检测可能的键盘陷阱</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Tab&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> focusableElements</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getFocusableElements</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> focusedIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> focusableElements.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(document.activeElement);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (focusedIndex </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> event.shiftKey) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reportIssue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;POSSIBLE_KEYBOARD_TRAP&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          selector: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSelector</span><span style="color:#E1E4E8;">(document.activeElement)</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setupMutationObserver</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> observer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MutationObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mutations</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mutations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (mutation.type </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;attributes&#39;</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">            mutation.attributeName </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;aria-live&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">validateLiveRegion</span><span style="color:#E1E4E8;">(mutation.target);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(document.body, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributes: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      subtree: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributeFilter: [</span><span style="color:#9ECBFF;">&#39;aria-live&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;aria-atomic&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  validateLiveRegion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> liveValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-live&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (liveValue </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;polite&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;assertive&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(liveValue)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reportIssue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;INVALID_ARIA_LIVE&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: liveValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getSelector</span><span style="color:#E1E4E8;">(element)</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getFocusableElements</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getSelector</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (element.id) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> \`#\${</span><span style="color:#E1E4E8;">element</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (element.className) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> \`.\${</span><span style="color:#E1E4E8;">element</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">className</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">split</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#9ECBFF;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> element.tagName.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  reportIssue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data,</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: window.location.href</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.issues.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(issue);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 发送到监控服务</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (navigator.sendBeacon) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      navigator.</span><span style="color:#B392F0;">sendBeacon</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/a11y-monitor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(issue));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化监控</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.a11yMonitor </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> A11yMonitor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="数据分析仪表板" tabindex="-1">数据分析仪表板 <a class="header-anchor" href="#数据分析仪表板" aria-label="Permalink to &quot;数据分析仪表板&quot;">​</a></h3><p>收集和分析无障碍指标。</p><p>代码示例 (无障碍指标 API)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-metrics-api.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> express</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> router</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> express.</span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 存储无障碍指标</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> a11yMetrics</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  totalPages: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  compliantPages: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  commonIssues: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  complianceTrend: []</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/report&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">pageUrl</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">violations</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">timestamp</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> req.body;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 更新指标</span></span>
<span class="line"><span style="color:#E1E4E8;">  a11yMetrics.totalPages</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (violations.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a11yMetrics.compliantPages</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 统计常见问题</span></span>
<span class="line"><span style="color:#E1E4E8;">  violations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">violation</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> issueId</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> violation.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    a11yMetrics.commonIssues[issueId] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      (a11yMetrics.commonIssues[issueId] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 计算合规率</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> complianceRate</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (a11yMetrics.compliantPages </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> a11yMetrics.totalPages) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  a11yMetrics.complianceTrend.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    timestamp,</span></span>
<span class="line"><span style="color:#E1E4E8;">    rate: complianceRate</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/metrics&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    complianceRate: (a11yMetrics.compliantPages </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> a11yMetrics.totalPages) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalScannedPages: a11yMetrics.totalPages,</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonIssues: Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(a11yMetrics.commonIssues)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(([,</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">], [,</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">issue</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ issue, count })),</span></span>
<span class="line"><span style="color:#E1E4E8;">    trend: a11yMetrics.complianceTrend.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 最近30个数据点</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> router;</span></span></code></pre></div><h2 id="框架集成模式" tabindex="-1">框架集成模式 <a class="header-anchor" href="#框架集成模式" aria-label="Permalink to &quot;框架集成模式&quot;">​</a></h2><h3 id="多框架适配器" tabindex="-1">多框架适配器 <a class="header-anchor" href="#多框架适配器" aria-label="Permalink to &quot;多框架适配器&quot;">​</a></h3><p>为不同前端框架提供统一的无障碍接口。</p><p>代码示例 (框架适配器)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// a11y-adapter.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> A11yAdapter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> forReact</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">component,</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateA11yProps</span><span style="color:#E1E4E8;">(component.props)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> forVue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">component,</span></span>
<span class="line"><span style="color:#E1E4E8;">      computed: {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">component.computed,</span></span>
<span class="line"><span style="color:#B392F0;">        a11yAttributes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateA11yProps</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$attrs);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> forAngular</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">directive</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">directive,</span></span>
<span class="line"><span style="color:#E1E4E8;">      host: {</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">directive.host,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;[attr.role]&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;role&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;[attr.aria-label]&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ariaLabel&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;[attr.tabindex]&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;tabindex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#B392F0;"> generateA11yProps</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> a11yProps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (props.role) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps.role </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props.role;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (props.ariaLabel) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps[</span><span style="color:#9ECBFF;">&#39;aria-label&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props.ariaLabel;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (props.disabled) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps[</span><span style="color:#9ECBFF;">&#39;aria-disabled&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps.tabIndex </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      a11yProps.tabIndex </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a11yProps;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="微前端无障碍协调" tabindex="-1">微前端无障碍协调 <a class="header-anchor" href="#微前端无障碍协调" aria-label="Permalink to &quot;微前端无障碍协调&quot;">​</a></h3><p>在微前端架构中协调无障碍状态。</p><p>代码示例 (微前端无障碍管理器)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MicroFrontendA11yManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.applications </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.globalLiveRegions </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  registerApplication</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">appId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a11yConfig</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.applications.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(appId, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      config: a11yConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">      status: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      focusTraps: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  setApplicationStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">appId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">status</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.applications.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(appId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (app) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> status;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 更新aria-hidden状态</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateAriaHiddenStates</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  updateAriaHiddenStates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> activeApps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.applications.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> app.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;active&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.applications.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">appId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> isActive</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> app.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;active&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> appRoot</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[data-app=&quot;\${</span><span style="color:#E1E4E8;">appId</span><span style="color:#9ECBFF;">}&quot;]\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (appRoot) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        appRoot.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-hidden&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isActive);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isActive) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 清理非活跃应用的焦点陷阱</span></span>
<span class="line"><span style="color:#E1E4E8;">          app.focusTraps.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  registerFocusTrap</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">appId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.applications.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(appId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (app </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> app.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;active&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.focusTraps.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(element);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 协调多个应用间的实时区域</span></span>
<span class="line"><span style="color:#B392F0;">  announce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">priority</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;polite&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">appId</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;global&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> liveRegion</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getOrCreateLiveRegion</span><span style="color:#E1E4E8;">(priority);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> announcement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    announcement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">appId</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    liveRegion.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(announcement);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (announcement.parentNode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        announcement.parentNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(announcement);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getOrCreateLiveRegion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">priority</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> id</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`global-live-region-\${</span><span style="color:#E1E4E8;">priority</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> liveRegion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">liveRegion) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      liveRegion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      liveRegion.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">      liveRegion.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-live&#39;</span><span style="color:#E1E4E8;">, priority);</span></span>
<span class="line"><span style="color:#E1E4E8;">      liveRegion.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-atomic&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;false&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      liveRegion.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;visually-hidden&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(liveRegion);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.globalLiveRegions.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(liveRegion);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> liveRegion;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局管理器实例</span></span>
<span class="line"><span style="color:#E1E4E8;">window.microFrontendA11yManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MicroFrontendA11yManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div>`,73)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
