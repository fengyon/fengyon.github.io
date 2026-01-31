import{_ as s,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"模块化","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是模块化？","slug":"什么是模块化","link":"#什么是模块化","children":[]},{"level":2,"title":"模块化演进历程","slug":"模块化演进历程","link":"#模块化演进历程","children":[{"level":3,"title":"全局函数时代","slug":"全局函数时代","link":"#全局函数时代","children":[]},{"level":3,"title":"命名空间模式","slug":"命名空间模式","link":"#命名空间模式","children":[]},{"level":3,"title":"IIFE 模式","slug":"iife-模式","link":"#iife-模式","children":[]}]},{"level":2,"title":"主流模块化规范","slug":"主流模块化规范","link":"#主流模块化规范","children":[{"level":3,"title":"CommonJS","slug":"commonjs","link":"#commonjs","children":[]},{"level":3,"title":"AMD (Asynchronous Module Definition)","slug":"amd-asynchronous-module-definition","link":"#amd-asynchronous-module-definition","children":[]},{"level":3,"title":"ES6 Modules","slug":"es6-modules","link":"#es6-modules","children":[]}]},{"level":2,"title":"模块化的核心概念","slug":"模块化的核心概念","link":"#模块化的核心概念","children":[{"level":3,"title":"导出与导入","slug":"导出与导入","link":"#导出与导入","children":[]},{"level":3,"title":"依赖关系","slug":"依赖关系","link":"#依赖关系","children":[]},{"level":3,"title":"循环依赖","slug":"循环依赖","link":"#循环依赖","children":[]}]},{"level":2,"title":"模块化的优势","slug":"模块化的优势","link":"#模块化的优势","children":[{"level":3,"title":"代码组织","slug":"代码组织","link":"#代码组织","children":[]},{"level":3,"title":"依赖管理","slug":"依赖管理","link":"#依赖管理","children":[]},{"level":3,"title":"作用域隔离","slug":"作用域隔离","link":"#作用域隔离","children":[]},{"level":3,"title":"可测试性","slug":"可测试性","link":"#可测试性","children":[]},{"level":3,"title":"团队协作","slug":"团队协作","link":"#团队协作","children":[]}]},{"level":2,"title":"现代模块系统实践","slug":"现代模块系统实践","link":"#现代模块系统实践","children":[{"level":3,"title":"模块打包","slug":"模块打包","link":"#模块打包","children":[]},{"level":3,"title":"代码分割","slug":"代码分割","link":"#代码分割","children":[]},{"level":3,"title":"Tree Shaking","slug":"tree-shaking","link":"#tree-shaking","children":[]}]}],"relativePath":"engineering/architecture/module.md","filePath":"engineering/architecture/module.md"}'),e={name:"engineering/architecture/module.md"};function i(t,n,c,o,d,r){return p(),a("div",null,[...n[0]||(n[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /engineering/architecture/module.md for this page in Markdown format</div><h1 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h1><p>模块化是将复杂程序拆分为独立、可复用模块的软件开发方法。在前端领域，模块化经历了从简单脚本到标准化模块系统的演进过程，是现代前端工程化的基石。</p><h2 id="什么是模块化" tabindex="-1">什么是模块化？ <a class="header-anchor" href="#什么是模块化" aria-label="Permalink to &quot;什么是模块化？&quot;">​</a></h2><p>模块化是一种代码组织方式，它允许开发者将大型程序分解为相互独立的小型模块，每个模块专注于单一功能，通过明确的接口进行通信。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>非模块化代码:</span></span>
<span class="line"><span>[一个巨大的JS文件]</span></span>
<span class="line"><span>  ├── 功能A代码</span></span>
<span class="line"><span>  ├── 功能B代码</span></span>
<span class="line"><span>  ├── 功能C代码</span></span>
<span class="line"><span>  └── 全局变量污染</span></span>
<span class="line"><span></span></span>
<span class="line"><span>模块化代码:</span></span>
<span class="line"><span>[模块A] -&gt; [导出接口] -&gt; [模块B] -&gt; [导出接口] -&gt; [模块C]</span></span>
<span class="line"><span>    |           |           |           |           |</span></span>
<span class="line"><span>独立开发      明确依赖     独立测试     明确依赖     独立维护</span></span></code></pre></div><h2 id="模块化演进历程" tabindex="-1">模块化演进历程 <a class="header-anchor" href="#模块化演进历程" aria-label="Permalink to &quot;模块化演进历程&quot;">​</a></h2><h3 id="全局函数时代" tabindex="-1">全局函数时代 <a class="header-anchor" href="#全局函数时代" aria-label="Permalink to &quot;全局函数时代&quot;">​</a></h3><p>最早的前端代码采用简单的函数组织方式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局命名空间污染</span></span>
<span class="line"><span>function util1() { ... }</span></span>
<span class="line"><span>function util2() { ... }</span></span>
<span class="line"><span>function main() { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题示意图:</span></span>
<span class="line"><span>[script1.js] -&gt; [全局变量A]</span></span>
<span class="line"><span>[script2.js] -&gt; [全局变量A]  // 冲突!</span></span>
<span class="line"><span>[script3.js] -&gt; [使用变量A]  // 不确定来自哪个文件</span></span></code></pre></div><h3 id="命名空间模式" tabindex="-1">命名空间模式 <a class="header-anchor" href="#命名空间模式" aria-label="Permalink to &quot;命名空间模式&quot;">​</a></h3><p>通过对象封装减少全局变量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 创建命名空间</span></span>
<span class="line"><span>var MyApp = {</span></span>
<span class="line"><span>    utils: {</span></span>
<span class="line"><span>        function1: function() { ... },</span></span>
<span class="line"><span>        function2: function() { ... }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结构示意图:</span></span>
<span class="line"><span>[全局作用域]</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>    +-- MyApp</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          +-- utils</span></span>
<span class="line"><span>          |     +-- function1</span></span>
<span class="line"><span>          |     +-- function2</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          +-- components</span></span></code></pre></div><h3 id="iife-模式" tabindex="-1">IIFE 模式 <a class="header-anchor" href="#iife-模式" aria-label="Permalink to &quot;IIFE 模式&quot;">​</a></h3><p>使用立即执行函数表达式创建私有作用域。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 模块模式</span></span>
<span class="line"><span>var Module = (function() {</span></span>
<span class="line"><span>    var privateVar = &#39;private&#39;;  // 私有变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function privateFunction() {</span></span>
<span class="line"><span>        // 私有方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        publicMethod: function() {</span></span>
<span class="line"><span>            // 公开接口</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作用域示意图:</span></span>
<span class="line"><span>[IIFE] -&gt; [创建闭包] -&gt; [私有变量] -&gt; [返回公共接口]</span></span>
<span class="line"><span>    |           |           |               |</span></span>
<span class="line"><span>隔离作用域     数据封装     信息隐藏       明确API</span></span></code></pre></div><h2 id="主流模块化规范" tabindex="-1">主流模块化规范 <a class="header-anchor" href="#主流模块化规范" aria-label="Permalink to &quot;主流模块化规范&quot;">​</a></h2><h3 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h3><p>Node.js 采用的同步模块加载规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 模块定义</span></span>
<span class="line"><span>// math.js</span></span>
<span class="line"><span>exports.add = function(a, b) {</span></span>
<span class="line"><span>    return a + b;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模块使用</span></span>
<span class="line"><span>// main.js</span></span>
<span class="line"><span>var math = require(&#39;./math.js&#39;);</span></span>
<span class="line"><span>math.add(1, 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加载流程:</span></span>
<span class="line"><span>[require调用] -&gt; [同步加载文件] -&gt; [执行模块代码] -&gt; [返回exports对象]</span></span>
<span class="line"><span>      |               |               |               |</span></span>
<span class="line"><span>   阻塞执行        读取文件        初始化模块       获得模块接口</span></span></code></pre></div><h3 id="amd-asynchronous-module-definition" tabindex="-1">AMD (Asynchronous Module Definition) <a class="header-anchor" href="#amd-asynchronous-module-definition" aria-label="Permalink to &quot;AMD (Asynchronous Module Definition)&quot;">​</a></h3><p>浏览器端的异步模块定义规范。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// AMD 模块定义</span></span>
<span class="line"><span>define([&#39;dependency1&#39;, &#39;dependency2&#39;], function(dep1, dep2) {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        exportFunction: function() {</span></span>
<span class="line"><span>            // 使用 dep1, dep2</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// AMD 模块使用</span></span>
<span class="line"><span>require([&#39;moduleA&#39;, &#39;moduleB&#39;], function(moduleA, moduleB) {</span></span>
<span class="line"><span>    // 回调中使用模块</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>异步加载示意图:</span></span>
<span class="line"><span>[require调用] -&gt; [分析依赖] -&gt; [并行下载依赖] -&gt; [所有依赖就绪] -&gt; [执行回调]</span></span>
<span class="line"><span>      |              |              |                |              |</span></span>
<span class="line"><span>   非阻塞         解析模块列表    同时下载多个文件   等待完成       初始化应用</span></span></code></pre></div><h3 id="es6-modules" tabindex="-1">ES6 Modules <a class="header-anchor" href="#es6-modules" aria-label="Permalink to &quot;ES6 Modules&quot;">​</a></h3><p>JavaScript 语言层面的模块标准。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>// 模块导出</span></span>
<span class="line"><span>// utils.js</span></span>
<span class="line"><span>export function formatDate(date) { ... }</span></span>
<span class="line"><span>export const API_URL = &#39;...&#39;;</span></span>
<span class="line"><span>export default class Utils { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模块导入</span></span>
<span class="line"><span>// main.js</span></span>
<span class="line"><span>import Utils, { formatDate, API_URL } from &#39;./utils.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>编译时加载示意图:</span></span>
<span class="line"><span>[import语句] -&gt; [编译时分析] -&gt; [构建依赖图] -&gt; [静态检查] -&gt; [运行时报错预防]</span></span>
<span class="line"><span>      |              |              |              |              |</span></span>
<span class="line"><span>   声明式导入      提前解析       优化打包       类型检查       更少运行时错误</span></span></code></pre></div><h2 id="模块化的核心概念" tabindex="-1">模块化的核心概念 <a class="header-anchor" href="#模块化的核心概念" aria-label="Permalink to &quot;模块化的核心概念&quot;">​</a></h2><h3 id="导出与导入" tabindex="-1">导出与导入 <a class="header-anchor" href="#导出与导入" aria-label="Permalink to &quot;导出与导入&quot;">​</a></h3><p>模块通过导出暴露接口，通过导入使用其他模块。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>导出方式:</span></span>
<span class="line"><span>命名导出: export function foo() {}</span></span>
<span class="line"><span>默认导出: export default class Bar {}</span></span>
<span class="line"><span>混合导出: export { foo, bar }; export default baz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导入方式:</span></span>
<span class="line"><span>// 命名导入</span></span>
<span class="line"><span>import { foo, bar } from &#39;./module.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认导入</span></span>
<span class="line"><span>import Baz from &#39;./module.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 混合导入</span></span>
<span class="line"><span>import Baz, { foo, bar } from &#39;./module.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命名空间导入</span></span>
<span class="line"><span>import * as Module from &#39;./module.js&#39;;</span></span></code></pre></div><h3 id="依赖关系" tabindex="-1">依赖关系 <a class="header-anchor" href="#依赖关系" aria-label="Permalink to &quot;依赖关系&quot;">​</a></h3><p>模块之间形成清晰的依赖图谱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>依赖图谱示例:</span></span>
<span class="line"><span>        [主模块]</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- import --&gt; [工具模块]</span></span>
<span class="line"><span>           |                  |</span></span>
<span class="line"><span>           |                  +-- import --&gt; [工具模块]</span></span>
<span class="line"><span>           |</span></span>
<span class="line"><span>           +-- import --&gt; [UI组件模块]</span></span>
<span class="line"><span>                            |</span></span>
<span class="line"><span>                            +-- import --&gt; [样式模块]</span></span>
<span class="line"><span>                            |</span></span>
<span class="line"><span>                            +-- import --&gt; [工具模块]</span></span></code></pre></div><h3 id="循环依赖" tabindex="-1">循环依赖 <a class="header-anchor" href="#循环依赖" aria-label="Permalink to &quot;循环依赖&quot;">​</a></h3><p>模块之间相互引用形成的复杂关系。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>循环依赖示例:</span></span>
<span class="line"><span>[模块A] &lt;-- import --&gt; [模块B]</span></span>
<span class="line"><span>    |                      |</span></span>
<span class="line"><span>    +-- import --&gt; [模块C] &lt;-- import --+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理方式:</span></span>
<span class="line"><span>- CommonJS: 动态解析，可能得到未完全初始化的模块</span></span>
<span class="line"><span>- ES6: 静态分析，创建绑定引用，支持循环依赖</span></span></code></pre></div><h2 id="模块化的优势" tabindex="-1">模块化的优势 <a class="header-anchor" href="#模块化的优势" aria-label="Permalink to &quot;模块化的优势&quot;">​</a></h2><h3 id="代码组织" tabindex="-1">代码组织 <a class="header-anchor" href="#代码组织" aria-label="Permalink to &quot;代码组织&quot;">​</a></h3><p>模块化使代码结构清晰，易于理解和维护。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>非模块化 vs 模块化:</span></span>
<span class="line"><span>非模块化: [一个巨大文件] -&gt; 难以定位 -&gt; 修改风险高</span></span>
<span class="line"><span>模块化:   [模块A] [模块B] [模块C] -&gt; 明确职责 -&gt; 安全修改</span></span>
<span class="line"><span>              |        |        |</span></span>
<span class="line"><span>          独立文件   独立功能   独立测试</span></span></code></pre></div><h3 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h3><p>明确的依赖声明避免隐式依赖问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>隐式依赖 vs 显式依赖:</span></span>
<span class="line"><span>隐式依赖: [模块使用全局变量] -&gt; 依赖不明确 -&gt; 运行时错误</span></span>
<span class="line"><span>显式依赖: [import { dep } from &#39;...&#39;] -&gt; 依赖明确 -&gt; 编译时检查</span></span></code></pre></div><h3 id="作用域隔离" tabindex="-1">作用域隔离 <a class="header-anchor" href="#作用域隔离" aria-label="Permalink to &quot;作用域隔离&quot;">​</a></h3><p>每个模块拥有独立作用域，避免命名冲突。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>作用域对比:</span></span>
<span class="line"><span>全局作用域: [所有变量都在全局] -&gt; 命名冲突 -&gt; 意外覆盖</span></span>
<span class="line"><span>模块作用域: [每个模块独立作用域] -&gt; 无冲突 -&gt; 安全封装</span></span>
<span class="line"><span>    |              |                |</span></span>
<span class="line"><span>模块A变量       模块B变量         互不影响</span></span></code></pre></div><h3 id="可测试性" tabindex="-1">可测试性 <a class="header-anchor" href="#可测试性" aria-label="Permalink to &quot;可测试性&quot;">​</a></h3><p>独立的模块更容易进行单元测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>测试示意图:</span></span>
<span class="line"><span>[测试框架] -&gt; [导入被测模块] -&gt; [模拟依赖] -&gt; [执行测试] -&gt; [验证结果]</span></span>
<span class="line"><span>      |              |              |            |           |</span></span>
<span class="line"><span>   快速运行       隔离测试       控制环境      专注功能     可靠断言</span></span></code></pre></div><h3 id="团队协作" tabindex="-1">团队协作 <a class="header-anchor" href="#团队协作" aria-label="Permalink to &quot;团队协作&quot;">​</a></h3><p>模块化支持多人并行开发。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>团队开发流程:</span></span>
<span class="line"><span>开发者A -&gt; [开发模块X] -&gt; [定义接口] -&gt; [提交]</span></span>
<span class="line"><span>开发者B -&gt; [开发模块Y] -&gt; [依赖模块X接口] -&gt; [并行开发]</span></span>
<span class="line"><span>    |           |               |               |</span></span>
<span class="line"><span>独立工作       明确契约       无需等待       高效协作</span></span></code></pre></div><h2 id="现代模块系统实践" tabindex="-1">现代模块系统实践 <a class="header-anchor" href="#现代模块系统实践" aria-label="Permalink to &quot;现代模块系统实践&quot;">​</a></h2><h3 id="模块打包" tabindex="-1">模块打包 <a class="header-anchor" href="#模块打包" aria-label="Permalink to &quot;模块打包&quot;">​</a></h3><p>使用构建工具将模块打包为浏览器可执行文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>打包流程:</span></span>
<span class="line"><span>[ES6模块] -&gt; [打包工具] -&gt; [分析依赖] -&gt; [合并代码] -&gt; [优化输出] -&gt; [浏览器脚本]</span></span>
<span class="line"><span>      |           |           |           |           |           |</span></span>
<span class="line"><span>源代码         webpack      构建依赖图    代码合并    压缩优化     可直接运行</span></span></code></pre></div><h3 id="代码分割" tabindex="-1">代码分割 <a class="header-anchor" href="#代码分割" aria-label="Permalink to &quot;代码分割&quot;">​</a></h3><p>按需加载模块，优化首屏加载性能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>代码分割效果:</span></span>
<span class="line"><span>初始加载: [主包] + [必要模块] -&gt; 快速首屏</span></span>
<span class="line"><span>动态加载: [用户交互] -&gt; [按需加载模块] -&gt; 优化体验</span></span>
<span class="line"><span>    |           |               |</span></span>
<span class="line"><span>较小初始包     延迟加载       减少带宽</span></span></code></pre></div><h3 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree Shaking&quot;">​</a></h3><p>消除未使用的代码，减少打包体积。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Tree Shaking 过程:</span></span>
<span class="line"><span>[源代码] -&gt; [静态分析] -&gt; [标记使用代码] -&gt; [移除死代码] -&gt; [优化包]</span></span>
<span class="line"><span>      |           |              |              |           |</span></span>
<span class="line"><span>所有导出       识别import      确定使用部分     删除未使用     更小体积</span></span></code></pre></div>`,62)])])}const g=s(e,[["render",i]]);export{h as __pageData,g as default};
