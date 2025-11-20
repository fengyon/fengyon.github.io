import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const E=JSON.parse('{"title":"Angular 管道","description":"","frontmatter":{},"headers":[{"level":2,"title":"管道概念","slug":"管道概念","link":"#管道概念","children":[]},{"level":2,"title":"内置管道","slug":"内置管道","link":"#内置管道","children":[{"level":3,"title":"常用内置管道","slug":"常用内置管道","link":"#常用内置管道","children":[]},{"level":3,"title":"文本转换管道","slug":"文本转换管道","link":"#文本转换管道","children":[]},{"level":3,"title":"数字格式化管道","slug":"数字格式化管道","link":"#数字格式化管道","children":[]},{"level":3,"title":"日期管道","slug":"日期管道","link":"#日期管道","children":[]}]},{"level":2,"title":"管道参数","slug":"管道参数","link":"#管道参数","children":[{"level":3,"title":"参数传递","slug":"参数传递","link":"#参数传递","children":[]},{"level":3,"title":"链式管道","slug":"链式管道","link":"#链式管道","children":[]}]},{"level":2,"title":"自定义管道","slug":"自定义管道","link":"#自定义管道","children":[{"level":3,"title":"创建自定义管道","slug":"创建自定义管道","link":"#创建自定义管道","children":[]},{"level":3,"title":"带参数的自定义管道","slug":"带参数的自定义管道","link":"#带参数的自定义管道","children":[]}]},{"level":2,"title":"纯管道与非纯管道","slug":"纯管道与非纯管道","link":"#纯管道与非纯管道","children":[{"level":3,"title":"纯管道","slug":"纯管道","link":"#纯管道","children":[]},{"level":3,"title":"非纯管道","slug":"非纯管道","link":"#非纯管道","children":[]}]},{"level":2,"title":"异步管道","slug":"异步管道","link":"#异步管道","children":[{"level":3,"title":"处理异步数据","slug":"处理异步数据","link":"#处理异步数据","children":[]},{"level":3,"title":"自动订阅管理","slug":"自动订阅管理","link":"#自动订阅管理","children":[]}]},{"level":2,"title":"管道性能","slug":"管道性能","link":"#管道性能","children":[{"level":3,"title":"性能考虑","slug":"性能考虑","link":"#性能考虑","children":[]},{"level":3,"title":"优化策略","slug":"优化策略","link":"#优化策略","children":[]}]},{"level":2,"title":"管道与变更检测","slug":"管道与变更检测","link":"#管道与变更检测","children":[{"level":3,"title":"变更检测机制","slug":"变更检测机制","link":"#变更检测机制","children":[]},{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}]},{"level":2,"title":"实用管道示例","slug":"实用管道示例","link":"#实用管道示例","children":[{"level":3,"title":"文件大小格式化","slug":"文件大小格式化","link":"#文件大小格式化","children":[]},{"level":3,"title":"搜索过滤管道","slug":"搜索过滤管道","link":"#搜索过滤管道","children":[]}]}],"relativePath":"framework/angular/pipe.md","filePath":"framework/angular/pipe.md"}'),e={name:"framework/angular/pipe.md"};function o(c,s,t,i,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/angular/pipe.md for this page in Markdown format</div><h1 id="angular-管道" tabindex="-1">Angular 管道 <a class="header-anchor" href="#angular-管道" aria-label="Permalink to &quot;Angular 管道&quot;">​</a></h1><h2 id="管道概念" tabindex="-1">管道概念 <a class="header-anchor" href="#管道概念" aria-label="Permalink to &quot;管道概念&quot;">​</a></h2><p>管道是一种用于在模板中转换数据的简单函数。它们接受输入值并返回转换后的值，常用于格式化显示数据而不改变原始数据。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据流经管道：</span></span>
<span class="line"><span>原始数据 → 管道处理 → 格式化显示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>模板语法：</span></span>
<span class="line"><span>{{ value | pipeName }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>带参数：</span></span>
<span class="line"><span>{{ value | pipeName:arg1:arg2 }}</span></span></code></pre></div><h2 id="内置管道" tabindex="-1">内置管道 <a class="header-anchor" href="#内置管道" aria-label="Permalink to &quot;内置管道&quot;">​</a></h2><h3 id="常用内置管道" tabindex="-1">常用内置管道 <a class="header-anchor" href="#常用内置管道" aria-label="Permalink to &quot;常用内置管道&quot;">​</a></h3><p>Angular 提供了一系列内置管道用于常见的数据格式化任务。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内置管道分类：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│   文本转换       │</span></span>
<span class="line"><span>│  uppercase     │</span></span>
<span class="line"><span>│  lowercase     │</span></span>
<span class="line"><span>│  titlecase     │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   数字格式化     │</span></span>
<span class="line"><span>│  number        │</span></span>
<span class="line"><span>│  percent       │</span></span>
<span class="line"><span>│  currency      │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   日期处理       │</span></span>
<span class="line"><span>│  date          │</span></span>
<span class="line"><span>├─────────────────┤</span></span>
<span class="line"><span>│   数据结构       │</span></span>
<span class="line"><span>│  json          │</span></span>
<span class="line"><span>│  slice         │</span></span>
<span class="line"><span>│  keyvalue      │</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h3 id="文本转换管道" tabindex="-1">文本转换管道 <a class="header-anchor" href="#文本转换管道" aria-label="Permalink to &quot;文本转换管道&quot;">​</a></h3><p>改变文本的显示格式。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>文本转换示例：</span></span>
<span class="line"><span>输入: &#39;hello world&#39;</span></span>
<span class="line"><span>↓ uppercase管道</span></span>
<span class="line"><span>输出: &#39;HELLO WORLD&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: &#39;HELLO WORLD&#39;  </span></span>
<span class="line"><span>↓ lowercase管道</span></span>
<span class="line"><span>输出: &#39;hello world&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: &#39;hello world&#39;</span></span>
<span class="line"><span>↓ titlecase管道</span></span>
<span class="line"><span>输出: &#39;Hello World&#39;</span></span></code></pre></div><h3 id="数字格式化管道" tabindex="-1">数字格式化管道 <a class="header-anchor" href="#数字格式化管道" aria-label="Permalink to &quot;数字格式化管道&quot;">​</a></h3><p>格式化数字、货币和百分比。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数字格式化：</span></span>
<span class="line"><span>输入: 1234.567</span></span>
<span class="line"><span>↓ number:&#39;1.2-2&#39;</span></span>
<span class="line"><span>输出: 1,234.57</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: 0.75</span></span>
<span class="line"><span>↓ percent</span></span>
<span class="line"><span>输出: 75%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: 19.99</span></span>
<span class="line"><span>↓ currency:&#39;USD&#39;</span></span>
<span class="line"><span>输出: $19.99</span></span></code></pre></div><h3 id="日期管道" tabindex="-1">日期管道 <a class="header-anchor" href="#日期管道" aria-label="Permalink to &quot;日期管道&quot;">​</a></h3><p>格式化日期和时间显示。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>日期格式化：</span></span>
<span class="line"><span>输入: new Date(&#39;2024-12-25&#39;)</span></span>
<span class="line"><span>↓ date:&#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span>输出: 2024-12-25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: new Date()</span></span>
<span class="line"><span>↓ date:&#39;short&#39;</span></span>
<span class="line"><span>输出: 12/25/24, 10:30 AM</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: new Date()</span></span>
<span class="line"><span>↓ date:&#39;fullDate&#39;</span></span>
<span class="line"><span>输出: Wednesday, December 25, 2024</span></span></code></pre></div><h2 id="管道参数" tabindex="-1">管道参数 <a class="header-anchor" href="#管道参数" aria-label="Permalink to &quot;管道参数&quot;">​</a></h2><h3 id="参数传递" tabindex="-1">参数传递 <a class="header-anchor" href="#参数传递" aria-label="Permalink to &quot;参数传递&quot;">​</a></h3><p>管道可以接受参数来定制转换行为。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>参数语法：</span></span>
<span class="line"><span>{{ value | pipe:param1:param2 }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>日期格式化: {{ today | date:&#39;yyyy-MM-dd&#39; }}</span></span>
<span class="line"><span>数字精度: {{ pi | number:&#39;1.2-2&#39; }}</span></span>
<span class="line"><span>货币代码: {{ price | currency:&#39;EUR&#39; }}</span></span></code></pre></div><h3 id="链式管道" tabindex="-1">链式管道 <a class="header-anchor" href="#链式管道" aria-label="Permalink to &quot;链式管道&quot;">​</a></h3><p>多个管道可以串联使用，数据从左到右依次通过。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>管道链：</span></span>
<span class="line"><span>数据 → 管道A → 管道B → 管道C → 最终结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>{{ message | uppercase | slice:0:10 }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span>1. &#39;hello angular&#39; → uppercase → &#39;HELLO ANGULAR&#39;</span></span>
<span class="line"><span>2. &#39;HELLO ANGULAR&#39; → slice:0:10 → &#39;HELLO ANGU&#39;</span></span></code></pre></div><h2 id="自定义管道" tabindex="-1">自定义管道 <a class="header-anchor" href="#自定义管道" aria-label="Permalink to &quot;自定义管道&quot;">​</a></h2><h3 id="创建自定义管道" tabindex="-1">创建自定义管道 <a class="header-anchor" href="#创建自定义管道" aria-label="Permalink to &quot;创建自定义管道&quot;">​</a></h3><p>通过 Angular CLI 或手动创建自定义管道来满足特定需求。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>创建步骤：</span></span>
<span class="line"><span>1. 定义管道类</span></span>
<span class="line"><span>2. 实现 PipeTransform 接口</span></span>
<span class="line"><span>3. 添加 @Pipe 装饰器</span></span>
<span class="line"><span>4. 注册到模块</span></span></code></pre></div><p>示例代码：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Pipe</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;reverse&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ReversePipe</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> PipeTransform</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>使用：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{ &#39;hello&#39; | reverse }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 显示: olleh --&gt;</span></span></code></pre></div><h3 id="带参数的自定义管道" tabindex="-1">带参数的自定义管道 <a class="header-anchor" href="#带参数的自定义管道" aria-label="Permalink to &quot;带参数的自定义管道&quot;">​</a></h3><p>管道可以接受参数来控制转换逻辑。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>参数化管道：</span></span>
<span class="line"><span>数据 + 参数 → 转换逻辑 → 结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>{{ text | truncate:20 }}</span></span></code></pre></div><p>实现：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Pipe</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;truncate&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> TruncatePipe</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> PipeTransform</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">limit</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (value.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;=</span><span style="color:#E1E4E8;"> limit) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, limit) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;...&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="纯管道与非纯管道" tabindex="-1">纯管道与非纯管道 <a class="header-anchor" href="#纯管道与非纯管道" aria-label="Permalink to &quot;纯管道与非纯管道&quot;">​</a></h2><h3 id="纯管道" tabindex="-1">纯管道 <a class="header-anchor" href="#纯管道" aria-label="Permalink to &quot;纯管道&quot;">​</a></h3><p>默认管道类型，仅在输入值发生改变时执行。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>纯管道特性：</span></span>
<span class="line"><span>输入引用改变 → 重新执行管道</span></span>
<span class="line"><span>输入引用不变 → 使用缓存结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：纯函数式转换</span></span></code></pre></div><h3 id="非纯管道" tabindex="-1">非纯管道 <a class="header-anchor" href="#非纯管道" aria-label="Permalink to &quot;非纯管道&quot;">​</a></h3><p>每次变更检测都会执行，适用于处理可变对象。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>非纯管道特性：</span></span>
<span class="line"><span>每次变更检测 → 重新执行管道</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置方式：</span></span>
<span class="line"><span>@Pipe({</span></span>
<span class="line"><span>  name: &#39;impurePipe&#39;,</span></span>
<span class="line"><span>  pure: false</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>使用场景对比：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 纯管道 - 数组引用改变时更新</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Pipe</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;pureArray&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// 非纯管道 - 数组内容改变时更新  </span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Pipe</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;impureArray&#39;</span><span style="color:#E1E4E8;">, pure: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span></code></pre></div><h2 id="异步管道" tabindex="-1">异步管道 <a class="header-anchor" href="#异步管道" aria-label="Permalink to &quot;异步管道&quot;">​</a></h2><h3 id="处理异步数据" tabindex="-1">处理异步数据 <a class="header-anchor" href="#处理异步数据" aria-label="Permalink to &quot;处理异步数据&quot;">​</a></h3><p>AsyncPipe 用于自动订阅和取消订阅 Observable 或 Promise。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>异步数据流：</span></span>
<span class="line"><span>Observable/Promise → AsyncPipe → 最新值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>模板: {{ data$ | async }}</span></span></code></pre></div><p>示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 组件中</span></span>
<span class="line"><span style="color:#E1E4E8;">data$ </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模板中</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">div</span><span style="color:#E1E4E8;">&gt;{{ data$ </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> async </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> json }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span></code></pre></div><h3 id="自动订阅管理" tabindex="-1">自动订阅管理 <a class="header-anchor" href="#自动订阅管理" aria-label="Permalink to &quot;自动订阅管理&quot;">​</a></h3><p>AsyncPipe 自动处理订阅生命周期，避免内存泄漏。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件初始化 → AsyncPipe订阅 → 获取数据</span></span>
<span class="line"><span>组件销毁 → AsyncPipe取消订阅 → 清理资源</span></span></code></pre></div><h2 id="管道性能" tabindex="-1">管道性能 <a class="header-anchor" href="#管道性能" aria-label="Permalink to &quot;管道性能&quot;">​</a></h2><h3 id="性能考虑" tabindex="-1">性能考虑 <a class="header-anchor" href="#性能考虑" aria-label="Permalink to &quot;性能考虑&quot;">​</a></h3><p>管道的执行频率影响应用性能，需要合理设计。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>性能影响因素：</span></span>
<span class="line"><span>├── 管道复杂度</span></span>
<span class="line"><span>├── 执行频率</span></span>
<span class="line"><span>├── 输入数据大小</span></span>
<span class="line"><span>└── 纯/非纯特性</span></span></code></pre></div><h3 id="优化策略" tabindex="-1">优化策略 <a class="header-anchor" href="#优化策略" aria-label="Permalink to &quot;优化策略&quot;">​</a></h3><p>提高管道性能的最佳实践。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>优化方法：</span></span>
<span class="line"><span>使用纯管道 → 减少不必要执行</span></span>
<span class="line"><span>避免复杂计算 → 简化转换逻辑</span></span>
<span class="line"><span>数据预处理 → 组件中准备数据</span></span>
<span class="line"><span>管道组合 → 合理使用管道链</span></span></code></pre></div><h2 id="管道与变更检测" tabindex="-1">管道与变更检测 <a class="header-anchor" href="#管道与变更检测" aria-label="Permalink to &quot;管道与变更检测&quot;">​</a></h2><h3 id="变更检测机制" tabindex="-1">变更检测机制 <a class="header-anchor" href="#变更检测机制" aria-label="Permalink to &quot;变更检测机制&quot;">​</a></h3><p>管道如何与 Angular 的变更检测系统交互。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>变更检测流程：</span></span>
<span class="line"><span>数据变化 → 触发检测 → 管道执行 → 更新视图</span></span>
<span class="line"><span></span></span>
<span class="line"><span>纯管道: 输入引用变化时执行</span></span>
<span class="line"><span>非纯管道: 每次检测周期执行</span></span></code></pre></div><h3 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h3><p>在变更检测环境中合理使用管道。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐做法：</span></span>
<span class="line"><span>┌─────────────────┐</span></span>
<span class="line"><span>│  使用纯管道      │ ← 性能更好</span></span>
<span class="line"><span>│  避免副作用      │ ← 保持纯净</span></span>
<span class="line"><span>│  合理使用async   │ ← 自动管理订阅</span></span>
<span class="line"><span>│  预处理复杂数据  │ ← 减少模板负担</span></span>
<span class="line"><span>└─────────────────┘</span></span></code></pre></div><h2 id="实用管道示例" tabindex="-1">实用管道示例 <a class="header-anchor" href="#实用管道示例" aria-label="Permalink to &quot;实用管道示例&quot;">​</a></h2><h3 id="文件大小格式化" tabindex="-1">文件大小格式化 <a class="header-anchor" href="#文件大小格式化" aria-label="Permalink to &quot;文件大小格式化&quot;">​</a></h3><p>将字节数转换为可读的文件大小。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>字节转换：</span></span>
<span class="line"><span>输入: 2048</span></span>
<span class="line"><span>↓ filesize</span></span>
<span class="line"><span>输出: 2 KB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: 1572864  </span></span>
<span class="line"><span>↓ filesize</span></span>
<span class="line"><span>输出: 1.5 MB</span></span></code></pre></div><p>实现：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Pipe</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;filesize&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> FileSizePipe</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> PipeTransform</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bytes</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">decimals</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (bytes </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;0 Bytes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sizes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;Bytes&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;KB&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;MB&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;GB&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> i</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(bytes) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(k));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> parseFloat</span><span style="color:#E1E4E8;">((bytes </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(k, i)).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(decimals)) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> sizes[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="搜索过滤管道" tabindex="-1">搜索过滤管道 <a class="header-anchor" href="#搜索过滤管道" aria-label="Permalink to &quot;搜索过滤管道&quot;">​</a></h3><p>在列表中实现实时搜索过滤。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>搜索过滤：</span></span>
<span class="line"><span>项目列表 + 搜索词 → filter管道 → 过滤结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用: </span></span>
<span class="line"><span>&lt;div *ngFor=&quot;let item of items | search:searchTerm&quot;&gt;</span></span></code></pre></div>`,98)])])}const u=a(e,[["render",o]]);export{E as __pageData,u as default};
