import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"手动测试无障碍","description":"","frontmatter":{},"headers":[{"level":2,"title":"手动测试的重要性","slug":"手动测试的重要性","link":"#手动测试的重要性","children":[]},{"level":2,"title":"测试环境配置","slug":"测试环境配置","link":"#测试环境配置","children":[{"level":3,"title":"屏幕阅读器测试套件","slug":"屏幕阅读器测试套件","link":"#屏幕阅读器测试套件","children":[]},{"level":3,"title":"键盘测试准备","slug":"键盘测试准备","link":"#键盘测试准备","children":[]}]},{"level":2,"title":"屏幕阅读器测试方法","slug":"屏幕阅读器测试方法","link":"#屏幕阅读器测试方法","children":[{"level":3,"title":"页面结构导航","slug":"页面结构导航","link":"#页面结构导航","children":[]},{"level":3,"title":"表单交互测试","slug":"表单交互测试","link":"#表单交互测试","children":[]}]},{"level":2,"title":"键盘导航测试","slug":"键盘导航测试","link":"#键盘导航测试","children":[{"level":3,"title":"焦点顺序测试","slug":"焦点顺序测试","link":"#焦点顺序测试","children":[]},{"level":3,"title":"复杂组件键盘测试","slug":"复杂组件键盘测试","link":"#复杂组件键盘测试","children":[]}]},{"level":2,"title":"视觉无障碍测试","slug":"视觉无障碍测试","link":"#视觉无障碍测试","children":[{"level":3,"title":"颜色对比度验证","slug":"颜色对比度验证","link":"#颜色对比度验证","children":[]},{"level":3,"title":"视觉焦点测试","slug":"视觉焦点测试","link":"#视觉焦点测试","children":[]}]},{"level":2,"title":"认知无障碍测试","slug":"认知无障碍测试","link":"#认知无障碍测试","children":[{"level":3,"title":"内容可读性评估","slug":"内容可读性评估","link":"#内容可读性评估","children":[]},{"level":3,"title":"导航一致性测试","slug":"导航一致性测试","link":"#导航一致性测试","children":[]}]},{"level":2,"title":"移动设备无障碍测试","slug":"移动设备无障碍测试","link":"#移动设备无障碍测试","children":[{"level":3,"title":"触摸目标测试","slug":"触摸目标测试","link":"#触摸目标测试","children":[]},{"level":3,"title":"移动屏幕阅读器测试","slug":"移动屏幕阅读器测试","link":"#移动屏幕阅读器测试","children":[]}]},{"level":2,"title":"测试文档和报告","slug":"测试文档和报告","link":"#测试文档和报告","children":[{"level":3,"title":"问题记录模板","slug":"问题记录模板","link":"#问题记录模板","children":[]},{"level":3,"title":"建议修复","slug":"建议修复","link":"#建议修复","children":[]},{"level":3,"title":"测试证据","slug":"测试证据","link":"#测试证据","children":[]},{"level":3,"title":"测试进度跟踪","slug":"测试进度跟踪","link":"#测试进度跟踪","children":[]}]}],"relativePath":"engineering/accessible/test.md","filePath":"engineering/accessible/test.md"}'),o={name:"engineering/accessible/test.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/accessible/test.md for this page in Markdown format</div><h1 id="手动测试无障碍" tabindex="-1">手动测试无障碍 <a class="header-anchor" href="#手动测试无障碍" aria-label="Permalink to &quot;手动测试无障碍&quot;">​</a></h1><h2 id="手动测试的重要性" tabindex="-1">手动测试的重要性 <a class="header-anchor" href="#手动测试的重要性" aria-label="Permalink to &quot;手动测试的重要性&quot;">​</a></h2><p>手动测试是识别和验证无障碍问题的关键环节，能够发现自动化工具无法检测的上下文和体验问题。与自动化测试互补，手动测试关注真实用户场景、交互流程和主观体验质量。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>自动化测试: 代码扫描 → 技术合规检查 → 发现30%问题</span></span>
<span class="line"><span>手动测试: 真实用户模拟 → 体验质量评估 → 发现70%问题</span></span>
<span class="line"><span>组合效果: 全面覆盖技术要求和用户体验</span></span></code></pre></div><h2 id="测试环境配置" tabindex="-1">测试环境配置 <a class="header-anchor" href="#测试环境配置" aria-label="Permalink to &quot;测试环境配置&quot;">​</a></h2><h3 id="屏幕阅读器测试套件" tabindex="-1">屏幕阅读器测试套件 <a class="header-anchor" href="#屏幕阅读器测试套件" aria-label="Permalink to &quot;屏幕阅读器测试套件&quot;">​</a></h3><p>配置主流屏幕阅读器进行跨平台测试：</p><p>代码示例 (测试环境检查)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测屏幕阅读器活动</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> isScreenReaderActive</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 检查减少动画偏好</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> reducedMotion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;(prefers-reduced-motion: reduce)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ).matches</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查高对比度模式</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> highContrast</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;(prefers-contrast: high)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ).matches</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 检查光标大小</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> largeCursor</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">matchMedia</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;(pointer: coarse)&#39;</span><span style="color:#E1E4E8;">).matches</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    reducedMotion,</span></span>
<span class="line"><span style="color:#E1E4E8;">    highContrast,</span></span>
<span class="line"><span style="color:#E1E4E8;">    largeCursor,</span></span>
<span class="line"><span style="color:#6A737D;">    // 基于行为推测屏幕阅读器使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    likelyScreenReaderUser: reducedMotion </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> highContrast,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无障碍偏好检测:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">isScreenReaderActive</span><span style="color:#E1E4E8;">())</span></span></code></pre></div><p>测试矩阵示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Windows: NVDA + Firefox, JAWS + Chrome</span></span>
<span class="line"><span>macOS: VoiceOver + Safari</span></span>
<span class="line"><span>iOS: VoiceOver + Safari</span></span>
<span class="line"><span>Android: TalkBack + Chrome</span></span></code></pre></div><h3 id="键盘测试准备" tabindex="-1">键盘测试准备 <a class="header-anchor" href="#键盘测试准备" aria-label="Permalink to &quot;键盘测试准备&quot;">​</a></h3><p>确保完整的键盘操作环境：</p><p>测试清单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>☐ 断开鼠标和触摸板</span></span>
<span class="line"><span>☐ 启用系统焦点指示器</span></span>
<span class="line"><span>☐ 关闭鼠标相关浏览器扩展</span></span>
<span class="line"><span>☐ 准备Tab、箭头键、Enter、Space、Esc测试</span></span></code></pre></div><h2 id="屏幕阅读器测试方法" tabindex="-1">屏幕阅读器测试方法 <a class="header-anchor" href="#屏幕阅读器测试方法" aria-label="Permalink to &quot;屏幕阅读器测试方法&quot;">​</a></h2><h3 id="页面结构导航" tabindex="-1">页面结构导航 <a class="header-anchor" href="#页面结构导航" aria-label="Permalink to &quot;页面结构导航&quot;">​</a></h3><p>测试页面整体结构和地标导航：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 从头开始朗读页面</span></span>
<span class="line"><span>2. 使用快捷键跳转地标: (NVDA: D, VoiceOver: VO+U)</span></span>
<span class="line"><span>3. 使用标题导航: (NVDA: H, VoiceOver: VO+Cmd+H)</span></span>
<span class="line"><span>4. 使用列表导航: (NVDA: L, VoiceOver: VO+Cmd+X)</span></span></code></pre></div><p>代码示例 (测试地标结构)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 测试用例：地标角色完整性 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">header</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;banner&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nav</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;navigation&quot;</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;主导航&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">&gt;首页&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">&gt;关于&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">main</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;main&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;页面标题&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">article</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;article&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">aside</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;complementary&quot;</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;相关链接&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 侧边内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">aside</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">footer</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;contentinfo&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- 页脚内容 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>预期屏幕阅读器输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;横幅&quot; [跳转到header]</span></span>
<span class="line"><span>&quot;主导航 导航&quot; [跳转到nav]</span></span>
<span class="line"><span>&quot;列表 2个项目&quot; [进入ul]</span></span>
<span class="line"><span>&quot;链接 首页&quot; [第一个链接]</span></span>
<span class="line"><span>&quot;链接 关于&quot; [第二个链接]</span></span>
<span class="line"><span>&quot;主内容 主区域&quot; [跳转到main]</span></span>
<span class="line"><span>&quot;页面标题 标题级别1&quot; [h1标题]</span></span>
<span class="line"><span>&quot;文章&quot; [跳转到article]</span></span>
<span class="line"><span>&quot;相关链接 补充内容&quot; [跳转到aside]</span></span>
<span class="line"><span>&quot;内容信息&quot; [跳转到footer]</span></span></code></pre></div><h3 id="表单交互测试" tabindex="-1">表单交互测试 <a class="header-anchor" href="#表单交互测试" aria-label="Permalink to &quot;表单交互测试&quot;">​</a></h3><p>测试表单控件的标签、说明和错误处理：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 定位到表单控件</span></span>
<span class="line"><span>2. 听取标签和说明朗读</span></span>
<span class="line"><span>3. 尝试不填必填字段提交</span></span>
<span class="line"><span>4. 听取错误消息宣布</span></span>
<span class="line"><span>5. 纠正错误后重新提交</span></span></code></pre></div><p>代码示例 (测试表单无障碍)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">form</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;signup-form&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;注册信息&lt;/</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">label</span><span style="color:#B392F0;"> for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span><span style="color:#E1E4E8;">&gt;用户名:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        aria-describedby</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username-help&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        required</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username-help&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;help-text&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        用户名应为3-20个字符，可包含字母、数字和下划线</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">label</span><span style="color:#B392F0;"> for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span><span style="color:#E1E4E8;">&gt;电子邮箱:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        aria-invalid</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        aria-describedby</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email-error&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        required</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">span</span></span>
<span class="line"><span style="color:#B392F0;">        id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;email-error&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;error-text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;alert&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        aria-live</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;assertive&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;">&gt;注册&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  // 测试错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  document</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;signup-form&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;submit&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> emailInput</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> errorElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email-error&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">emailInput.value.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        emailInput.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-invalid&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;true&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;请输入有效的电子邮箱地址&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        emailInput.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        emailInput.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-invalid&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;false&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        // 成功提交</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>预期屏幕阅读器交互流程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;用户名 编辑框 必需&quot;</span></span>
<span class="line"><span>&quot;用户名应为3-20个字符...&quot; [听到说明]</span></span>
<span class="line"><span>[输入用户名]</span></span>
<span class="line"><span>&quot;电子邮箱 编辑框 必需&quot;</span></span>
<span class="line"><span>[输入无效邮箱]</span></span>
<span class="line"><span>&quot;注册 按钮&quot; [点击提交]</span></span>
<span class="line"><span>&quot;警报 请输入有效的电子邮箱地址&quot; [听到错误]</span></span>
<span class="line"><span>&quot;电子邮箱 无效 编辑框&quot; [焦点返回，听到状态]</span></span></code></pre></div><h2 id="键盘导航测试" tabindex="-1">键盘导航测试 <a class="header-anchor" href="#键盘导航测试" aria-label="Permalink to &quot;键盘导航测试&quot;">​</a></h2><h3 id="焦点顺序测试" tabindex="-1">焦点顺序测试 <a class="header-anchor" href="#焦点顺序测试" aria-label="Permalink to &quot;焦点顺序测试&quot;">​</a></h3><p>验证 Tab 键导航的逻辑顺序：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 打开页面，按Tab键开始导航</span></span>
<span class="line"><span>2. 记录焦点移动顺序</span></span>
<span class="line"><span>3. 检查视觉顺序与DOM顺序一致性</span></span>
<span class="line"><span>4. 验证跳过链接功能</span></span>
<span class="line"><span>5. 测试自定义组件的Tabindex</span></span></code></pre></div><p>代码示例 (焦点顺序测试用例)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 测试焦点顺序逻辑 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#main&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;skip-link&quot;</span><span style="color:#E1E4E8;">&gt;跳到主内容&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">&gt;首页&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/products&quot;</span><span style="color:#E1E4E8;">&gt;产品&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/contact&quot;</span><span style="color:#E1E4E8;">&gt;联系&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">main</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;main&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;主要内容&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;custom-widget&quot;</span><span style="color:#B392F0;"> tabindex</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">&gt;自定义焦点元素&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;搜索...&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;">&gt;搜索&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>预期焦点顺序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>[跳过链接] → [首页链接] → [产品链接] → [联系链接] →</span></span>
<span class="line"><span>[自定义widget] → [搜索输入框] → [搜索按钮]</span></span></code></pre></div><h3 id="复杂组件键盘测试" tabindex="-1">复杂组件键盘测试 <a class="header-anchor" href="#复杂组件键盘测试" aria-label="Permalink to &quot;复杂组件键盘测试&quot;">​</a></h3><p>测试自定义组件的完整键盘交互：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. Tab进入组件</span></span>
<span class="line"><span>2. 测试箭头键导航</span></span>
<span class="line"><span>3. 测试Enter/Space激活</span></span>
<span class="line"><span>4. 测试Esc关闭功能</span></span>
<span class="line"><span>5. 测试Home/End键支持</span></span></code></pre></div><p>代码示例 (测试下拉菜单键盘交互)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dropdown&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">    id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu-button&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    aria-haspopup</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    aria-expanded</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    aria-controls</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu-items&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    选项菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu-items&quot;</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu&quot;</span><span style="color:#B392F0;"> aria-labelledby</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu-button&quot;</span><span style="color:#B392F0;"> hidden</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menuitem&quot;</span><span style="color:#B392F0;"> tabindex</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1&quot;</span><span style="color:#E1E4E8;">&gt;选项一&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menuitem&quot;</span><span style="color:#B392F0;"> tabindex</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1&quot;</span><span style="color:#E1E4E8;">&gt;选项二&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menuitem&quot;</span><span style="color:#B392F0;"> tabindex</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;-1&quot;</span><span style="color:#E1E4E8;">&gt;选项三&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  // 手动测试键盘交互</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> menuButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;menu-button&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> menuItems</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;menu-items&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> menuOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> menuItems.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;[role=&quot;menuitem&quot;]&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  menuButton.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> isExpanded</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> menuButton.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-expanded&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;true&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuButton.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-expanded&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isExpanded)</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuItems.hidden </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isExpanded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isExpanded) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      menuOptions[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 键盘事件处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  menuButton.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (e.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ArrowDown&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> e.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Enter&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> e.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      menuButton.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  menuItems.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;keydown&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(menuOptions).</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.activeElement,</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (e.key) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;ArrowDown&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuOptions[(currentIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> menuOptions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;ArrowUp&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuOptions[</span></span>
<span class="line"><span style="color:#E1E4E8;">          (currentIndex </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> menuOptions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> menuOptions.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">        ].</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;Escape&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuItems.hidden </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuButton.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aria-expanded&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;false&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuButton.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;Home&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuOptions[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;End&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuOptions[menuOptions.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">        break</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>键盘测试序列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. Tab到菜单按钮</span></span>
<span class="line"><span>2. 按Enter/Space/↓打开菜单</span></span>
<span class="line"><span>3. 用↓键移动到&quot;选项二&quot;</span></span>
<span class="line"><span>4. 用↑键回到&quot;选项一&quot;</span></span>
<span class="line"><span>5. 用Home跳到&quot;选项一&quot;，End跳到&quot;选项三&quot;</span></span>
<span class="line"><span>6. 按Esc关闭菜单，焦点返回按钮</span></span></code></pre></div><h2 id="视觉无障碍测试" tabindex="-1">视觉无障碍测试 <a class="header-anchor" href="#视觉无障碍测试" aria-label="Permalink to &quot;视觉无障碍测试&quot;">​</a></h2><h3 id="颜色对比度验证" tabindex="-1">颜色对比度验证 <a class="header-anchor" href="#颜色对比度验证" aria-label="Permalink to &quot;颜色对比度验证&quot;">​</a></h3><p>手动验证文本和 UI 元素的对比度：</p><p>测试工具和方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>工具: Colour Contrast Analyser, browser DevTools</span></span>
<span class="line"><span>方法:</span></span>
<span class="line"><span>  1. 取样文本和背景颜色</span></span>
<span class="line"><span>  2. 验证对比度比率 ≥ 4.5:1 (正常文本)</span></span>
<span class="line"><span>  3. 验证对比度比率 ≥ 3:1 (UI组件)</span></span>
<span class="line"><span>  4. 检查不同状态(悬停、焦点、禁用)</span></span></code></pre></div><p>代码示例 (对比度测试用例)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 测试各种颜色组合 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;test-cases&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;case-pass&quot;</span><span style="color:#B392F0;"> style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #000000; background: #ffffff;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    通过: 黑色文字 on 白色背景 (21:1)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;case-warning&quot;</span><span style="color:#B392F0;"> style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #767676; background: #ffffff;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    警告: 中灰文字 on 白色背景 (4.5:1 - 刚好通过)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;case-fail&quot;</span><span style="color:#B392F0;"> style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #cccccc; background: #ffffff;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    失败: 浅灰文字 on 白色背景 (1.6:1)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-primary&quot;</span><span style="color:#B392F0;"> style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;background: #0056b3; color: #ffffff;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    按钮: 深蓝背景 on 白色文字 (7.4:1 ✓)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">    class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-disabled&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;background: #cccccc; color: #666666;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    禁用按钮: 浅灰背景 on 中灰文字 (4.0:1 ✓)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="视觉焦点测试" tabindex="-1">视觉焦点测试 <a class="header-anchor" href="#视觉焦点测试" aria-label="Permalink to &quot;视觉焦点测试&quot;">​</a></h3><p>验证焦点指示器的可见性和准确性：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. Tab遍历所有交互元素</span></span>
<span class="line"><span>2. 检查焦点环是否清晰可见</span></span>
<span class="line"><span>3. 验证焦点环不遮挡内容</span></span>
<span class="line"><span>4. 测试高对比度模式下的焦点样式</span></span>
<span class="line"><span>5. 检查自定义焦点样式</span></span></code></pre></div><p>代码示例 (焦点样式测试)：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 基础焦点样式 */</span></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">input</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">a</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  outline</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #0056b3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  outline-offset</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 高对比度支持 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (prefers-contrast: high) {</span></span>
<span class="line"><span style="color:#85E89D;">  button</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">  input</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">  a</span><span style="color:#B392F0;">:focus</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    outline</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> solid</span><span style="color:#79B8FF;"> #000000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    outline-offset</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 自定义组件焦点 */</span></span>
<span class="line"><span style="color:#B392F0;">.custom-component:focus</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  box-shadow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> 0</span><span style="color:#79B8FF;"> 0</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;">px</span><span style="color:#79B8FF;"> rgba</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">86</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">179</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">  border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#0056b3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 测试焦点状态 */</span></span>
<span class="line"><span style="color:#B392F0;">.focus-test-element:focus</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  /* 确保有可见的焦点指示 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>焦点测试清单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>☐ 默认焦点环不被CSS意外移除</span></span>
<span class="line"><span>☐ 自定义焦点样式对比度足够</span></span>
<span class="line"><span>☐ 焦点环不改变元素布局</span></span>
<span class="line"><span>☐ 高对比度模式下焦点仍然可见</span></span>
<span class="line"><span>☐ 触摸目标尺寸 ≥ 44×44px</span></span></code></pre></div><h2 id="认知无障碍测试" tabindex="-1">认知无障碍测试 <a class="header-anchor" href="#认知无障碍测试" aria-label="Permalink to &quot;认知无障碍测试&quot;">​</a></h2><h3 id="内容可读性评估" tabindex="-1">内容可读性评估 <a class="header-anchor" href="#内容可读性评估" aria-label="Permalink to &quot;内容可读性评估&quot;">​</a></h3><p>测试内容的清晰度和理解难度：</p><p>评估标准：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>- 阅读等级: 目标为初中水平(约8年级)</span></span>
<span class="line"><span>- 句子长度: 平均15-20个词</span></span>
<span class="line"><span>- 段落长度: 3-5句话</span></span>
<span class="line"><span>- 专业术语: 提供解释或链接</span></span>
<span class="line"><span>- 指令清晰度: 步骤明确无歧义</span></span></code></pre></div><p>代码示例 (可读性测试内容)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 良好实践示例 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">section</span><span style="color:#B392F0;"> aria-labelledby</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;clear-instructions&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;clear-instructions&quot;</span><span style="color:#E1E4E8;">&gt;设置您的账户&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;请按照以下步骤完成账户设置：&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;输入您的电子邮件地址&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      创建安全密码</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;至少8个字符&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;包含字母和数字&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;点击&quot;创建账户&quot;按钮&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;提示：&lt;/</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;保存您的登录信息以备后用。&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 不良实践示例 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;账户初始化流程&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    用户须于相应字段输入有效电邮地址并构想符合安全规范的密码组合，随后触发账户创建程序。</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="导航一致性测试" tabindex="-1">导航一致性测试 <a class="header-anchor" href="#导航一致性测试" aria-label="Permalink to &quot;导航一致性测试&quot;">​</a></h3><p>验证网站导航模式的统一性：</p><p>测试要点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>- 一致的导航位置和样式</span></span>
<span class="line"><span>- 面包屑导航的准确性</span></span>
<span class="line"><span>- 当前页面状态的视觉指示</span></span>
<span class="line"><span>- 错误页面的有用导航选项</span></span>
<span class="line"><span>- 搜索功能的可发现性</span></span></code></pre></div><p>代码示例 (一致性导航测试)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 测试主导航一致性 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">nav</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;主要导航&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;main-nav&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#B392F0;"> aria-current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;page&quot;</span><span style="color:#E1E4E8;">&gt;首页&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/products&quot;</span><span style="color:#E1E4E8;">&gt;产品&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">&gt;关于我们&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/contact&quot;</span><span style="color:#E1E4E8;">&gt;联系我们&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 测试面包屑导航 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">nav</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;面包屑导航&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ol</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;breadcrumbs&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">&gt;首页&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/products&quot;</span><span style="color:#E1E4E8;">&gt;产品&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/products/software&quot;</span><span style="color:#B392F0;"> aria-current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;location&quot;</span><span style="color:#E1E4E8;">&gt;软件&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 测试页脚导航一致性 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nav</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;辅助导航&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/privacy&quot;</span><span style="color:#E1E4E8;">&gt;隐私政策&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/accessibility&quot;</span><span style="color:#E1E4E8;">&gt;无障碍声明&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/sitemap&quot;</span><span style="color:#E1E4E8;">&gt;网站地图&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="移动设备无障碍测试" tabindex="-1">移动设备无障碍测试 <a class="header-anchor" href="#移动设备无障碍测试" aria-label="Permalink to &quot;移动设备无障碍测试&quot;">​</a></h2><h3 id="触摸目标测试" tabindex="-1">触摸目标测试 <a class="header-anchor" href="#触摸目标测试" aria-label="Permalink to &quot;触摸目标测试&quot;">​</a></h3><p>验证触摸目标尺寸和间距：</p><p>测试标准：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>- 最小触摸目标: 44×44像素</span></span>
<span class="line"><span>- 触摸目标间距: ≥ 8像素</span></span>
<span class="line"><span>- 错误预防: 危险操作确认</span></span>
<span class="line"><span>- 手势支持: 提供替代操作方式</span></span></code></pre></div><p>代码示例 (触摸目标测试)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 符合标准的触摸目标 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;touch-targets&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">    class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-large&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;min-width: 44px; min-height: 44px; padding: 12px;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    大按钮 ✓</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">    class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-small&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;min-width: 32px; min-height: 32px; padding: 6px;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    小按钮 ✗ (太小)</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">    class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;icon-button&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> aria-hidden</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;">&gt;🔍&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;visually-hidden&quot;</span><span style="color:#E1E4E8;">&gt;搜索&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  /* 触摸目标增强 */</span></span>
<span class="line"><span style="color:#B392F0;">  .btn-small</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /* 通过增加点击区域修复小按钮 */</span></span>
<span class="line"><span style="color:#79B8FF;">    position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .btn-small::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="移动屏幕阅读器测试" tabindex="-1">移动屏幕阅读器测试 <a class="header-anchor" href="#移动屏幕阅读器测试" aria-label="Permalink to &quot;移动屏幕阅读器测试&quot;">​</a></h3><p>测试移动端 VoiceOver/TalkBack 交互：</p><p>测试步骤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>VoiceOver (iOS):</span></span>
<span class="line"><span>1. 开启VoiceOver: 设置 → 辅助功能 → VoiceOver</span></span>
<span class="line"><span>2. 单指滑动浏览元素</span></span>
<span class="line"><span>3. 双击激活选中元素</span></span>
<span class="line"><span>4. 使用转子功能导航</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TalkBack (Android):</span></span>
<span class="line"><span>1. 开启TalkBack: 设置 → 辅助功能 → TalkBack</span></span>
<span class="line"><span>2. 单指滑动浏览</span></span>
<span class="line"><span>3. 双击激活</span></span>
<span class="line"><span>4. 使用局部扫描功能</span></span></code></pre></div><p>代码示例 (移动端 ARIA 测试)：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 移动端自定义控件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#B392F0;">  role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;打开菜单&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  onclick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">openMenu</span><span style="color:#9ECBFF;">()&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  onkeydown</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">handleMobileKey</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">event</span><span style="color:#9ECBFF;">)&quot;</span></span>
<span class="line"><span style="color:#B392F0;">  class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mobile-menu-button&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> aria-hidden</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;">&gt;☰&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> handleMobileKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 移动端键盘和屏幕阅读器支持</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Enter&#39;</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#F97583;"> ||</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.key </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;Spacebar&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 一些移动浏览器的空格键</span></span>
<span class="line"><span style="color:#E1E4E8;">      event.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">      openMenu</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="测试文档和报告" tabindex="-1">测试文档和报告 <a class="header-anchor" href="#测试文档和报告" aria-label="Permalink to &quot;测试文档和报告&quot;">​</a></h2><h3 id="问题记录模板" tabindex="-1">问题记录模板 <a class="header-anchor" href="#问题记录模板" aria-label="Permalink to &quot;问题记录模板&quot;">​</a></h3><p>使用标准化模板记录测试发现：</p><p>代码示例 (测试问题记录)：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;">## 问题报告</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;font-weight:bold;">**页面**</span><span style="color:#E1E4E8;">: 产品列表页 (/products)</span></span>
<span class="line"><span style="color:#E1E4E8;font-weight:bold;">**测试环境**</span><span style="color:#E1E4E8;">: Windows 11 + NVDA + Firefox</span></span>
<span class="line"><span style="color:#E1E4E8;font-weight:bold;">**严重程度**</span><span style="color:#E1E4E8;">: 高</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 问题描述</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">搜索表单缺少无障碍标签，屏幕阅读器用户无法理解表单用途。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 复现步骤</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">1.</span><span style="color:#E1E4E8;"> 使用 NVDA 屏幕阅读器导航到产品页面</span></span>
<span class="line"><span style="color:#FFAB70;">2.</span><span style="color:#E1E4E8;"> 尝试找到搜索功能</span></span>
<span class="line"><span style="color:#FFAB70;">3.</span><span style="color:#E1E4E8;"> 听到&quot;编辑框&quot;但没有上下文说明</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 当前代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`html</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;搜索产品...&quot;</span><span style="color:#E1E4E8;"> /&gt; &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;搜索&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span></code></pre></div><h3 id="建议修复" tabindex="-1">建议修复 <a class="header-anchor" href="#建议修复" aria-label="Permalink to &quot;建议修复&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">label</span><span style="color:#B392F0;"> for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;product-search&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;visually-hidden&quot;</span><span style="color:#E1E4E8;">&gt;搜索产品&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;product-search&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;输入产品名称...&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;执行搜索&quot;</span><span style="color:#E1E4E8;">&gt;搜索&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="测试证据" tabindex="-1">测试证据 <a class="header-anchor" href="#测试证据" aria-label="Permalink to &quot;测试证据&quot;">​</a></h3><ul><li>屏幕阅读器输出：“编辑框”(缺少标签)</li><li>键盘测试：可通过 Tab 访问，但目的不明确</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 测试清单自动化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建交互式测试清单：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码示例（测试清单生成器）：</span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>class ManualTestingChecklist {</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.checklist = {</span></span>
<span class="line"><span>      keyboard: [</span></span>
<span class="line"><span>        &#39;所有交互元素可通过键盘访问&#39;,</span></span>
<span class="line"><span>        &#39;焦点顺序逻辑合理&#39;,</span></span>
<span class="line"><span>        &#39;自定义组件支持键盘交互&#39;,</span></span>
<span class="line"><span>        &#39;无键盘陷阱&#39;,</span></span>
<span class="line"><span>        &#39;跳过链接工作正常&#39;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      screenReader: [</span></span>
<span class="line"><span>        &#39;页面标题描述准确&#39;,</span></span>
<span class="line"><span>        &#39;地标角色正确设置&#39;,</span></span>
<span class="line"><span>        &#39;标题层级结构合理&#39;,</span></span>
<span class="line"><span>        &#39;表单控件正确标签&#39;,</span></span>
<span class="line"><span>        &#39;图片有有意义的alt文本&#39;,</span></span>
<span class="line"><span>        &#39;动态内容更新正确宣布&#39;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      visual: [</span></span>
<span class="line"><span>        &#39;颜色对比度符合标准&#39;,</span></span>
<span class="line"><span>        &#39;文本可缩放至200%&#39;,</span></span>
<span class="line"><span>        &#39;焦点指示器清晰可见&#39;,</span></span>
<span class="line"><span>        &#39;无仅依赖颜色的信息传达&#39;,</span></span>
<span class="line"><span>        &#39;动画可禁用&#39;</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  generateChecklist() {</span></span>
<span class="line"><span>    let html = &#39;&lt;div class=&quot;testing-checklist&quot;&gt;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (const [category, items] of Object.entries(this.checklist)) {</span></span>
<span class="line"><span>      html += \`&lt;h3&gt;\${this.formatCategory(category)}&lt;/h3&gt;\`;</span></span>
<span class="line"><span>      html += &#39;&lt;ul&gt;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      items.forEach(item =&gt; {</span></span>
<span class="line"><span>        html += \`</span></span>
<span class="line"><span>          &lt;li&gt;</span></span>
<span class="line"><span>            &lt;label&gt;</span></span>
<span class="line"><span>              &lt;input type=&quot;checkbox&quot; data-category=&quot;\${category}&quot;&gt;</span></span>
<span class="line"><span>              \${item}</span></span>
<span class="line"><span>            &lt;/label&gt;</span></span>
<span class="line"><span>          &lt;/li&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      html += &#39;&lt;/ul&gt;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    html += &#39;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>    return html;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  formatCategory(category) {</span></span>
<span class="line"><span>    const names = {</span></span>
<span class="line"><span>      keyboard: &#39;键盘无障碍&#39;,</span></span>
<span class="line"><span>      screenReader: &#39;屏幕阅读器兼容&#39;,</span></span>
<span class="line"><span>      visual: &#39;视觉无障碍&#39;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    return names[category] || category;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>const checklist = new ManualTestingChecklist();</span></span>
<span class="line"><span>document.getElementById(&#39;checklist-container&#39;).innerHTML = checklist.generateChecklist();</span></span></code></pre></div><h3 id="测试进度跟踪" tabindex="-1">测试进度跟踪 <a class="header-anchor" href="#测试进度跟踪" aria-label="Permalink to &quot;测试进度跟踪&quot;">​</a></h3><p>创建可视化测试进度仪表板：</p><p>代码示例 (测试进度监控)：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 测试进度跟踪</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TestingProgress</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tests </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      completed: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      total: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      byCategory: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadProgress</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  loadProgress</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> saved</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> localStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a11y-testing-progress&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (saved) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.tests </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(saved)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  saveProgress</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;a11y-testing-progress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.tests),</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateProgress</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">category</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">completed</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">total</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tests.byCategory[category] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { completed, total }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateTotals</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">saveProgress</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateUI</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateTotals</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> completed </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> category</span><span style="color:#F97583;"> in</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tests.byCategory) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      completed </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tests.byCategory[category].completed</span></span>
<span class="line"><span style="color:#E1E4E8;">      total </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tests.byCategory[category].total</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tests.completed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> completed</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tests.total </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> total</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateUI</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> progress</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.tests.completed </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tests.total) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;progress-bar&#39;</span><span style="color:#E1E4E8;">).style.width </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">progress</span><span style="color:#9ECBFF;">}%\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;progress-text&#39;</span><span style="color:#E1E4E8;">).textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tests</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">completed</span></span>
<span class="line"><span style="color:#9ECBFF;">    }/\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tests</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">total</span><span style="color:#9ECBFF;">} 测试完成 (\${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">round</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">progress</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}%)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化进度跟踪</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> progressTracker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TestingProgress</span><span style="color:#E1E4E8;">()</span></span></code></pre></div>`,106)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
