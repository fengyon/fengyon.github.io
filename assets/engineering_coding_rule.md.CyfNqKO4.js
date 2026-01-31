import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"代码类型检查","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是类型检查？","slug":"什么是类型检查","link":"#什么是类型检查","children":[]},{"level":2,"title":"类型检查的价值","slug":"类型检查的价值","link":"#类型检查的价值","children":[{"level":3,"title":"错误预防","slug":"错误预防","link":"#错误预防","children":[]},{"level":3,"title":"代码智能感知","slug":"代码智能感知","link":"#代码智能感知","children":[]}]},{"level":2,"title":"主要类型检查方案","slug":"主要类型检查方案","link":"#主要类型检查方案","children":[{"level":3,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":3,"title":"Flow","slug":"flow","link":"#flow","children":[]},{"level":3,"title":"JSDoc + TypeScript","slug":"jsdoc-typescript","link":"#jsdoc-typescript","children":[]}]},{"level":2,"title":"类型系统特性","slug":"类型系统特性","link":"#类型系统特性","children":[{"level":3,"title":"静态类型检查","slug":"静态类型检查","link":"#静态类型检查","children":[]},{"level":3,"title":"类型推断","slug":"类型推断","link":"#类型推断","children":[]},{"level":3,"title":"泛型支持","slug":"泛型支持","link":"#泛型支持","children":[]}]},{"level":2,"title":"集成到开发流程","slug":"集成到开发流程","link":"#集成到开发流程","children":[{"level":3,"title":"编辑器集成","slug":"编辑器集成","link":"#编辑器集成","children":[]},{"level":3,"title":"构建流程集成","slug":"构建流程集成","link":"#构建流程集成","children":[]}]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"TypeScript 配置","slug":"typescript-配置","link":"#typescript-配置","children":[]},{"level":3,"title":"ESLint 类型规则","slug":"eslint-类型规则","link":"#eslint-类型规则","children":[]}]},{"level":2,"title":"实际应用场景","slug":"实际应用场景","link":"#实际应用场景","children":[{"level":3,"title":"组件属性验证","slug":"组件属性验证","link":"#组件属性验证","children":[]},{"level":3,"title":"API 数据验证","slug":"api-数据验证","link":"#api-数据验证","children":[]}]},{"level":2,"title":"渐进式采用策略","slug":"渐进式采用策略","link":"#渐进式采用策略","children":[{"level":3,"title":"现有项目迁移","slug":"现有项目迁移","link":"#现有项目迁移","children":[]},{"level":3,"title":"严格级别控制","slug":"严格级别控制","link":"#严格级别控制","children":[]}]},{"level":2,"title":"工具生态系统","slug":"工具生态系统","link":"#工具生态系统","children":[{"level":3,"title":"主要工具对比","slug":"主要工具对比","link":"#主要工具对比","children":[]},{"level":3,"title":"配套工具","slug":"配套工具","link":"#配套工具","children":[]}]}],"relativePath":"engineering/coding/rule.md","filePath":"engineering/coding/rule.md"}'),e={name:"engineering/coding/rule.md"};function i(t,s,c,o,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/coding/rule.md for this page in Markdown format</div><h1 id="代码类型检查" tabindex="-1">代码类型检查 <a class="header-anchor" href="#代码类型检查" aria-label="Permalink to &quot;代码类型检查&quot;">​</a></h1><p>代码类型检查是在编程过程中对变量、函数参数和返回值等数据结构的类型进行验证的过程。它帮助开发者在代码运行前发现类型相关的错误，提高代码的可靠性和可维护性，已成为现代前端开发的重要实践。</p><h2 id="什么是类型检查" tabindex="-1">什么是类型检查？ <a class="header-anchor" href="#什么是类型检查" aria-label="Permalink to &quot;什么是类型检查？&quot;">​</a></h2><p>类型检查是通过分析代码中数据的类型使用，确保类型操作的安全性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>无类型检查:</span></span>
<span class="line"><span>let name = &#39;Alice&#39;;</span></span>
<span class="line"><span>name = 42;          // 意外改变类型</span></span>
<span class="line"><span>name.toUpperCase(); // 运行时错误: toUpperCase不是函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有类型检查:</span></span>
<span class="line"><span>let name: string = &#39;Alice&#39;;</span></span>
<span class="line"><span>name = 42;          // 编译时报错: 不能将number赋值给string</span></span>
<span class="line"><span>name.toUpperCase(); // 安全调用</span></span></code></pre></div><h2 id="类型检查的价值" tabindex="-1">类型检查的价值 <a class="header-anchor" href="#类型检查的价值" aria-label="Permalink to &quot;类型检查的价值&quot;">​</a></h2><h3 id="错误预防" tabindex="-1">错误预防 <a class="header-anchor" href="#错误预防" aria-label="Permalink to &quot;错误预防&quot;">​</a></h3><p>在代码运行前发现潜在的类型错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型错误检测:</span></span>
<span class="line"><span>// 函数定义</span></span>
<span class="line"><span>function greet(user: { name: string }): string {</span></span>
<span class="line"><span>    return \`Hello, \${user.name.toUpperCase()}\`;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误调用</span></span>
<span class="line"><span>greet({ name: null });  // 类型检查报错: name不能为null</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>        编译时发现，避免运行时崩溃</span></span></code></pre></div><h3 id="代码智能感知" tabindex="-1">代码智能感知 <a class="header-anchor" href="#代码智能感知" aria-label="Permalink to &quot;代码智能感知&quot;">​</a></h3><p>类型信息为编辑器提供准确的代码补全和提示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发体验提升:</span></span>
<span class="line"><span>// 输入 user. 时获得属性提示</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>    id: number;</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    email: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const user: User = { id: 1, name: &#39;Alice&#39;, email: &#39;alice@example.com&#39; };</span></span>
<span class="line"><span>user.  // 编辑器提示: id, name, email</span></span></code></pre></div><h2 id="主要类型检查方案" tabindex="-1">主要类型检查方案 <a class="header-anchor" href="#主要类型检查方案" aria-label="Permalink to &quot;主要类型检查方案&quot;">​</a></h2><h3 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h3><p>微软开发的 JavaScript 超集，提供完整的静态类型系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>TypeScript 工作流程:</span></span>
<span class="line"><span>[TS源码] -&gt; [TS编译器] -&gt; [类型检查] -&gt; [JS输出]</span></span>
<span class="line"><span>     |          |           |           |</span></span>
<span class="line"><span> .ts文件    解析类型      验证类型      .js文件</span></span>
<span class="line"><span>           生成声明文件   报告错误     可运行代码</span></span></code></pre></div><h3 id="flow" tabindex="-1">Flow <a class="header-anchor" href="#flow" aria-label="Permalink to &quot;Flow&quot;">​</a></h3><p>Facebook 推出的 JavaScript 静态类型检查器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Flow 工作流程:</span></span>
<span class="line"><span>[JS源码] -&gt; [Flow类型注解] -&gt; [Flow检查] -&gt; [类型报告]</span></span>
<span class="line"><span>     |           |              |           |</span></span>
<span class="line"><span> .js文件      // @flow        分析代码     错误信息</span></span>
<span class="line"><span>            类型注释        类型推断     不修改源码</span></span></code></pre></div><h3 id="jsdoc-typescript" tabindex="-1">JSDoc + TypeScript <a class="header-anchor" href="#jsdoc-typescript" aria-label="Permalink to &quot;JSDoc + TypeScript&quot;">​</a></h3><p>在普通 JavaScript 中使用 JSDoc 注释实现类型检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>JSDoc 类型注解:</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @param {string} name - 用户名</span></span>
<span class="line"><span> * @returns {string} 问候语</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function greet(name) {</span></span>
<span class="line"><span>    return \`Hello, \${name}\`;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greet(42);  // TypeScript检查报错: 参数应为string</span></span></code></pre></div><h2 id="类型系统特性" tabindex="-1">类型系统特性 <a class="header-anchor" href="#类型系统特性" aria-label="Permalink to &quot;类型系统特性&quot;">​</a></h2><h3 id="静态类型检查" tabindex="-1">静态类型检查 <a class="header-anchor" href="#静态类型检查" aria-label="Permalink to &quot;静态类型检查&quot;">​</a></h3><p>在编译阶段进行类型验证，不依赖运行时信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态检查流程:</span></span>
<span class="line"><span>[编写代码] -&gt; [编译/检查] -&gt; [发现错误] -&gt; [修复错误] -&gt; [运行代码]</span></span>
<span class="line"><span>      |           |           |           |           |</span></span>
<span class="line"><span>   开发阶段     提前验证     立即反馈     修改代码     安全执行</span></span></code></pre></div><h3 id="类型推断" tabindex="-1">类型推断 <a class="header-anchor" href="#类型推断" aria-label="Permalink to &quot;类型推断&quot;">​</a></h3><p>类型检查器能够自动推断变量的类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型推断示例:</span></span>
<span class="line"><span>let count = 42;        // 推断为number类型</span></span>
<span class="line"><span>count = &#39;hello&#39;;       // 错误: 不能将string赋值给number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function double(x) {   // 推断参数和返回值类型</span></span>
<span class="line"><span>    return x * 2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>double(&#39;hello&#39;);       // 错误: 字符串不能用于乘法</span></span></code></pre></div><h3 id="泛型支持" tabindex="-1">泛型支持 <a class="header-anchor" href="#泛型支持" aria-label="Permalink to &quot;泛型支持&quot;">​</a></h3><p>创建可重用的类型安全组件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>泛型函数:</span></span>
<span class="line"><span>function identity&lt;T&gt;(value: T): T {</span></span>
<span class="line"><span>    return value;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自动类型推断</span></span>
<span class="line"><span>const num = identity(42);    // T推断为number</span></span>
<span class="line"><span>const str = identity(&#39;hi&#39;);  // T推断为string</span></span></code></pre></div><h2 id="集成到开发流程" tabindex="-1">集成到开发流程 <a class="header-anchor" href="#集成到开发流程" aria-label="Permalink to &quot;集成到开发流程&quot;">​</a></h2><h3 id="编辑器集成" tabindex="-1">编辑器集成 <a class="header-anchor" href="#编辑器集成" aria-label="Permalink to &quot;编辑器集成&quot;">​</a></h3><p>类型检查与代码编辑器深度集成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>编辑器支持:</span></span>
<span class="line"><span>[实时检查] -&gt; [错误高亮] -&gt; [快速修复] -&gt; [代码补全]</span></span>
<span class="line"><span>      |           |           |           |</span></span>
<span class="line"><span> 输入时验证    视觉提示    自动修复     类型感知</span></span></code></pre></div><h3 id="构建流程集成" tabindex="-1">构建流程集成 <a class="header-anchor" href="#构建流程集成" aria-label="Permalink to &quot;构建流程集成&quot;">​</a></h3><p>在构建过程中强制执行类型检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>构建集成:</span></span>
<span class="line"><span>[代码变更] -&gt; [类型检查] -&gt; [检查通过] -&gt; [继续构建]</span></span>
<span class="line"><span>      |           |           |           |</span></span>
<span class="line"><span>  提交代码     严格验证     类型安全     打包部署</span></span>
<span class="line"><span>             失败则中止</span></span></code></pre></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><h3 id="typescript-配置" tabindex="-1">TypeScript 配置 <a class="header-anchor" href="#typescript-配置" aria-label="Permalink to &quot;TypeScript 配置&quot;">​</a></h3><p>通过 <code>tsconfig.json</code> 配置 TypeScript 编译选项。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ES2020&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ESNext&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;strict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;noEmitOnError&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;include&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/**/*&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="eslint-类型规则" tabindex="-1">ESLint 类型规则 <a class="header-anchor" href="#eslint-类型规则" aria-label="Permalink to &quot;ESLint 类型规则&quot;">​</a></h3><p>使用 ESLint 插件进行基础类型检查。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#9ECBFF;">&#39;@typescript-eslint&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;@typescript-eslint/no-explicit-any&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;@typescript-eslint/explicit-function-return-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="实际应用场景" tabindex="-1">实际应用场景 <a class="header-anchor" href="#实际应用场景" aria-label="Permalink to &quot;实际应用场景&quot;">​</a></h2><h3 id="组件属性验证" tabindex="-1">组件属性验证 <a class="header-anchor" href="#组件属性验证" aria-label="Permalink to &quot;组件属性验证&quot;">​</a></h3><p>在 React/Vue 组件中验证 props 的类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>React组件Props检查:</span></span>
<span class="line"><span>interface ButtonProps {</span></span>
<span class="line"><span>    label: string;</span></span>
<span class="line"><span>    onClick: () =&gt; void;</span></span>
<span class="line"><span>    disabled?: boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Button({ label, onClick, disabled }: ButtonProps) {</span></span>
<span class="line"><span>    return &lt;button onClick={onClick} disabled={disabled}&gt;{label}&lt;/button&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误使用</span></span>
<span class="line"><span>&lt;Button label={42} /&gt;  // 报错: label应为string</span></span></code></pre></div><h3 id="api-数据验证" tabindex="-1">API 数据验证 <a class="header-anchor" href="#api-数据验证" aria-label="Permalink to &quot;API 数据验证&quot;">​</a></h3><p>验证从 API 获取的数据结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>API响应验证:</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>    id: number;</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    email: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function fetchUser(id: number): Promise&lt;User&gt; {</span></span>
<span class="line"><span>    const response = await fetch(\`/api/users/\${id}\`);</span></span>
<span class="line"><span>    const user: User = await response.json();</span></span>
<span class="line"><span>    return user;  // 确保返回数据符合User接口</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="渐进式采用策略" tabindex="-1">渐进式采用策略 <a class="header-anchor" href="#渐进式采用策略" aria-label="Permalink to &quot;渐进式采用策略&quot;">​</a></h2><h3 id="现有项目迁移" tabindex="-1">现有项目迁移 <a class="header-anchor" href="#现有项目迁移" aria-label="Permalink to &quot;现有项目迁移&quot;">​</a></h3><p>在已有 JavaScript 项目中逐步引入类型检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>迁移路径:</span></span>
<span class="line"><span>[普通JS] -&gt; [JSDoc注解] -&gt; [TypeScript声明文件] -&gt; [完整TypeScript]</span></span>
<span class="line"><span>     |           |               |                   |</span></span>
<span class="line"><span> 无类型检查    基础类型支持    第三方库类型       全面类型安全</span></span></code></pre></div><h3 id="严格级别控制" tabindex="-1">严格级别控制 <a class="header-anchor" href="#严格级别控制" aria-label="Permalink to &quot;严格级别控制&quot;">​</a></h3><p>根据需要调整类型检查的严格程度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>严格度级别:</span></span>
<span class="line"><span>基础:    any类型允许，宽松检查</span></span>
<span class="line"><span>推荐:    禁止隐式any，中等严格</span></span>
<span class="line"><span>严格:    所有严格标志开启，最高安全</span></span></code></pre></div><h2 id="工具生态系统" tabindex="-1">工具生态系统 <a class="header-anchor" href="#工具生态系统" aria-label="Permalink to &quot;工具生态系统&quot;">​</a></h2><h3 id="主要工具对比" tabindex="-1">主要工具对比 <a class="header-anchor" href="#主要工具对比" aria-label="Permalink to &quot;主要工具对比&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型检查工具对比:</span></span>
<span class="line"><span>TypeScript: [完整类型系统] -&gt; [强大生态] -&gt; [行业标准]</span></span>
<span class="line"><span>                |               |           |</span></span>
<span class="line"><span>           微软维护       丰富工具链     广泛应用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Flow:       [渐进采用] -&gt; [React集成] -&gt; [灵活配置]</span></span>
<span class="line"><span>                |           |           |</span></span>
<span class="line"><span>           Facebook     深度优化     可调整严格度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ESLint:     [基础检查] -&gt; [规则可配置] -&gt; [无类型系统]</span></span>
<span class="line"><span>                |           |           |</span></span>
<span class="line"><span>           代码质量     自定义规则     语法层面检查</span></span></code></pre></div><h3 id="配套工具" tabindex="-1">配套工具 <a class="header-anchor" href="#配套工具" aria-label="Permalink to &quot;配套工具&quot;">​</a></h3><p>类型检查相关的开发工具。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发工具链:</span></span>
<span class="line"><span>[类型检查器] -&gt; [构建工具] -&gt; [测试工具] -&gt; [监控工具]</span></span>
<span class="line"><span>      |            |           |           |</span></span>
<span class="line"><span> TypeScript    Webpack      Jest      错误监控</span></span>
<span class="line"><span>   Flow        Vite        Cypress   性能分析</span></span></code></pre></div>`,67)])])}const g=a(e,[["render",i]]);export{h as __pageData,g as default};
