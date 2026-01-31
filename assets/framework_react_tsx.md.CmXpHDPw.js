import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"React TSX","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 TSX？","slug":"什么是-tsx","link":"#什么是-tsx","children":[{"level":3,"title":"TSX 的优势","slug":"tsx-的优势","link":"#tsx-的优势","children":[]}]},{"level":2,"title":"定义组件 Props 类型","slug":"定义组件-props-类型","link":"#定义组件-props-类型","children":[{"level":3,"title":"使用接口定义 Props","slug":"使用接口定义-props","link":"#使用接口定义-props","children":[]},{"level":3,"title":"使用类型别名定义 Props","slug":"使用类型别名定义-props","link":"#使用类型别名定义-props","children":[]},{"level":3,"title":"扩展 HTML 属性","slug":"扩展-html-属性","link":"#扩展-html-属性","children":[]}]},{"level":2,"title":"定义 Ref 类型","slug":"定义-ref-类型","link":"#定义-ref-类型","children":[{"level":3,"title":"使用 useRef Hook","slug":"使用-useref-hook","link":"#使用-useref-hook","children":[]},{"level":3,"title":"使用 forwardRef","slug":"使用-forwardref","link":"#使用-forwardref","children":[]}]},{"level":2,"title":"定义 Hook 类型","slug":"定义-hook-类型","link":"#定义-hook-类型","children":[{"level":3,"title":"自定义 Hook 类型定义","slug":"自定义-hook-类型定义","link":"#自定义-hook-类型定义","children":[]},{"level":3,"title":"API 请求 Hook","slug":"api-请求-hook","link":"#api-请求-hook","children":[]},{"level":3,"title":"表单处理 Hook","slug":"表单处理-hook","link":"#表单处理-hook","children":[]}]}],"relativePath":"framework/react/tsx.md","filePath":"framework/react/tsx.md"}'),o={name:"framework/react/tsx.md"};function e(t,s,c,r,E,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/react/tsx.md for this page in Markdown format</div><h1 id="react-tsx" tabindex="-1">React TSX <a class="header-anchor" href="#react-tsx" aria-label="Permalink to &quot;React TSX&quot;">​</a></h1><h2 id="什么是-tsx" tabindex="-1">什么是 TSX？ <a class="header-anchor" href="#什么是-tsx" aria-label="Permalink to &quot;什么是 TSX？&quot;">​</a></h2><p>TSX 是 TypeScript 与 JSX 的结合，它允许我们在 TypeScript 文件中编写类似 HTML 的语法来创建 React 组件。</p><h3 id="tsx-的优势" tabindex="-1">TSX 的优势 <a class="header-anchor" href="#tsx-的优势" aria-label="Permalink to &quot;TSX 的优势&quot;">​</a></h3><ul><li><strong>类型安全</strong>：编译时类型检查，减少运行时错误</li><li><strong>更好的开发体验</strong>：智能提示、自动补全和重构支持</li><li><strong>代码可维护性</strong>：明确的接口定义，便于团队协作</li></ul><h2 id="定义组件-props-类型" tabindex="-1">定义组件 Props 类型 <a class="header-anchor" href="#定义组件-props-类型" aria-label="Permalink to &quot;定义组件 Props 类型&quot;">​</a></h2><h3 id="使用接口定义-props" tabindex="-1">使用接口定义 Props <a class="header-anchor" href="#使用接口定义-props" aria-label="Permalink to &quot;使用接口定义 Props&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ButtonProps</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  text</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#B392F0;">  onClick</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#FFAB70;">  disabled</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#FFAB70;">  variant</span><span style="color:#F97583;">?:</span><span style="color:#9ECBFF;"> &#39;primary&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;secondary&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;danger&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">  size</span><span style="color:#F97583;">?:</span><span style="color:#9ECBFF;"> &#39;small&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;large&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Button</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ButtonProps</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  text,</span></span>
<span class="line"><span style="color:#E1E4E8;">  onClick,</span></span>
<span class="line"><span style="color:#E1E4E8;">  disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  variant </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;primary&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  size </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;medium&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">      className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`btn btn-\${</span><span style="color:#E1E4E8;">variant</span><span style="color:#9ECBFF;">} btn-\${</span><span style="color:#E1E4E8;">size</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">      onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{onClick}</span></span>
<span class="line"><span style="color:#B392F0;">      disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{disabled}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {text}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用类型别名定义-props" tabindex="-1">使用类型别名定义 Props <a class="header-anchor" href="#使用类型别名定义-props" aria-label="Permalink to &quot;使用类型别名定义 Props&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#B392F0;"> CardProps</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  title</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  children</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ReactNode</span></span>
<span class="line"><span style="color:#FFAB70;">  imageUrl</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  footer</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ReactElement</span></span>
<span class="line"><span style="color:#FFAB70;">  className</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Card</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CardProps</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title,</span></span>
<span class="line"><span style="color:#E1E4E8;">  children,</span></span>
<span class="line"><span style="color:#E1E4E8;">  imageUrl,</span></span>
<span class="line"><span style="color:#E1E4E8;">  footer,</span></span>
<span class="line"><span style="color:#E1E4E8;">  className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`card \${</span><span style="color:#E1E4E8;">className</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {imageUrl </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">img</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{imageUrl} </span><span style="color:#B392F0;">alt</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{title} /&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;card-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{title}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {children}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {footer </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;card-footer&quot;</span><span style="color:#E1E4E8;">&gt;{footer}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="扩展-html-属性" tabindex="-1">扩展 HTML 属性 <a class="header-anchor" href="#扩展-html-属性" aria-label="Permalink to &quot;扩展 HTML 属性&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> InputProps</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">InputHTMLAttributes</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLInputElement</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70;">  label</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  error</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  helperText</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Input</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">InputProps</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  label,</span></span>
<span class="line"><span style="color:#E1E4E8;">  error,</span></span>
<span class="line"><span style="color:#E1E4E8;">  helperText,</span></span>
<span class="line"><span style="color:#F97583;">  ...</span><span style="color:#E1E4E8;">inputProps</span></span>
<span class="line"><span style="color:#E1E4E8;">}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;input-wrapper&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {label </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">label</span><span style="color:#B392F0;"> htmlFor</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputProps.id}&gt;{label}&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">inputProps}</span></span>
<span class="line"><span style="color:#B392F0;">        className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">\`input \${</span><span style="color:#E1E4E8;">error</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;input-error&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;} \${</span></span>
<span class="line"><span style="color:#E1E4E8;">          inputProps</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">className</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">        }\`</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;error-text&quot;</span><span style="color:#E1E4E8;">&gt;{error}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      {helperText </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;helper-text&quot;</span><span style="color:#E1E4E8;">&gt;{helperText}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="定义-ref-类型" tabindex="-1">定义 Ref 类型 <a class="header-anchor" href="#定义-ref-类型" aria-label="Permalink to &quot;定义 Ref 类型&quot;">​</a></h2><h3 id="使用-useref-hook" tabindex="-1">使用 useRef Hook <a class="header-anchor" href="#使用-useref-hook" aria-label="Permalink to &quot;使用 useRef Hook&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { useRef, useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对于 DOM 元素</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> FocusableInput</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inputRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLInputElement</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 自动聚焦</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (inputRef.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputRef.current.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleClick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (inputRef.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputRef.current.</span><span style="color:#B392F0;">select</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputRef} </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;点击按钮选中我&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleClick}&gt;选中输入框文本&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对于自定义值（不会触发重新渲染）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> TimerComponent</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> timerRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">number</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> countRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> startTimer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    timerRef.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      countRef.current </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`计数: \${</span><span style="color:#E1E4E8;">countRef</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> stopTimer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (timerRef.current) {</span></span>
<span class="line"><span style="color:#B392F0;">      clearInterval</span><span style="color:#E1E4E8;">(timerRef.current)</span></span>
<span class="line"><span style="color:#E1E4E8;">      timerRef.current </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{startTimer}&gt;开始计时&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{stopTimer}&gt;停止计时&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-forwardref" tabindex="-1">使用 forwardRef <a class="header-anchor" href="#使用-forwardref" aria-label="Permalink to &quot;使用 forwardRef&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { forwardRef, useImperativeHandle } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义 ref 接口</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> CustomInputRef</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  focus</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  clear</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  getValue</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> CustomInputProps</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  placeholder</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  defaultValue</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CustomInput</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> forwardRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CustomInputRef</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">CustomInputProps</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">  ({ </span><span style="color:#FFAB70;">placeholder</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;请输入...&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaultValue</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">ref</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inputRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLInputElement</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    useImperativeHandle</span><span style="color:#E1E4E8;">(ref, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#B392F0;">      focus</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        inputRef.current?.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      clear</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (inputRef.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          inputRef.current.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      getValue</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> inputRef.current?.value </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputRef}</span></span>
<span class="line"><span style="color:#B392F0;">        type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">        placeholder</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{placeholder}</span></span>
<span class="line"><span style="color:#B392F0;">        defaultValue</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{defaultValue}</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> ParentComponent</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> inputRef</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CustomInputRef</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleFocus</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputRef.current?.</span><span style="color:#B392F0;">focus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleClear</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputRef.current?.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleGetValue</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> inputRef.current?.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;输入框值:&#39;</span><span style="color:#E1E4E8;">, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">CustomInput</span><span style="color:#B392F0;"> ref</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputRef} </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;自定义输入框&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleFocus}&gt;聚焦&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleClear}&gt;清空&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleGetValue}&gt;获取值&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="定义-hook-类型" tabindex="-1">定义 Hook 类型 <a class="header-anchor" href="#定义-hook-类型" aria-label="Permalink to &quot;定义 Hook 类型&quot;">​</a></h2><h3 id="自定义-hook-类型定义" tabindex="-1">自定义 Hook 类型定义 <a class="header-anchor" href="#自定义-hook-类型定义" aria-label="Permalink to &quot;自定义 Hook 类型定义&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useEffect, useCallback } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计数器 Hook</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UseCounterReturn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  count</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#B392F0;">  increment</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  decrement</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  reset</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  setCount</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> useCounter</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">initialValue</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> UseCounterReturn</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">&gt;(initialValue)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setCount</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> decrement</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setCount</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> reset</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setCount</span><span style="color:#E1E4E8;">(initialValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [initialValue])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    count,</span></span>
<span class="line"><span style="color:#E1E4E8;">    increment,</span></span>
<span class="line"><span style="color:#E1E4E8;">    decrement,</span></span>
<span class="line"><span style="color:#E1E4E8;">    reset,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> CounterComponent</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">increment</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">decrement</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">reset</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useCounter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;当前计数: {count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{increment}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{decrement}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{reset}&gt;重置&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="api-请求-hook" tabindex="-1">API 请求 Hook <a class="header-anchor" href="#api-请求-hook" aria-label="Permalink to &quot;API 请求 Hook&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useEffect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通用 API 响应类型</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ApiResponse</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70;">  data</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#FFAB70;">  loading</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#FFAB70;">  error</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> useApi</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">,&gt;(</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> ApiResponse</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setData</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setLoading</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setError</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> fetchData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        setLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">        setError</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url)</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">response.ok) {</span></span>
<span class="line"><span style="color:#F97583;">          throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`HTTP error! status: \${</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">as</span><span style="color:#B392F0;"> T</span></span>
<span class="line"><span style="color:#B392F0;">        setData</span><span style="color:#E1E4E8;">(result)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#B392F0;">        setError</span><span style="color:#E1E4E8;">(err </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Error</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> err.message </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;An error occurred&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        setLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    fetchData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [url])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { data, loading, error }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  email</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> UserList</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">users</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useApi</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">User</span><span style="color:#E1E4E8;">[]&gt;(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (loading) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;错误: {error}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;用户列表&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {users?.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{user.id}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{user.name}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{user.email}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="表单处理-hook" tabindex="-1">表单处理 Hook <a class="header-anchor" href="#表单处理-hook" aria-label="Permalink to &quot;表单处理 Hook&quot;">​</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState, useCallback } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 表单字段验证规则</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ValidationRule</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  required</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#FFAB70;">  minLength</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  maxLength</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  pattern</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> RegExp</span></span>
<span class="line"><span style="color:#B392F0;">  validator</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> FormField</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70;">  value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span></span>
<span class="line"><span style="color:#FFAB70;">  error</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"><span style="color:#FFAB70;">  touched</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> UseFormReturn</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#FFAB70;">  fields</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { [</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> in</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> FormField</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]&gt; }</span></span>
<span class="line"><span style="color:#B392F0;">  setFieldValue</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  setFieldTouched</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">touched</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#B392F0;">  validateField</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#B392F0;">  validateForm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#B392F0;">  resetForm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"><span style="color:#FFAB70;">  isFormValid</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> useForm</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#FFAB70;">  initialValues</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">  validations</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> { [</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> in</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ValidationRule</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> UseFormReturn</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">fields</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setFields</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> in</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> FormField</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }&gt;(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> initialFields</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {} </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> { [</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> in</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> FormField</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]&gt; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(initialValues).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      initialFields[key </span><span style="color:#F97583;">as</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: initialValues[key </span><span style="color:#F97583;">as</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        error: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        touched: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> initialFields</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> validateField</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">validations?.[name]) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> field</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> fields[name]</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> rules</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> validations[name]</span><span style="color:#F97583;">!</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> errorMessage</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (rules.required </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">field.value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorMessage </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;此字段为必填项&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules.minLength </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#B392F0;">        String</span><span style="color:#E1E4E8;">(field.value).</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;"> rules.minLength</span></span>
<span class="line"><span style="color:#E1E4E8;">      ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorMessage </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`最小长度为 \${</span><span style="color:#E1E4E8;">rules</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">minLength</span><span style="color:#9ECBFF;">} 个字符\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules.maxLength </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#B392F0;">        String</span><span style="color:#E1E4E8;">(field.value).</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#E1E4E8;"> rules.maxLength</span></span>
<span class="line"><span style="color:#E1E4E8;">      ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorMessage </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`最大长度为 \${</span><span style="color:#E1E4E8;">rules</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">maxLength</span><span style="color:#9ECBFF;">} 个字符\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules.pattern </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F97583;">        !</span><span style="color:#E1E4E8;">rules.pattern.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(field.value))</span></span>
<span class="line"><span style="color:#E1E4E8;">      ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorMessage </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;格式不正确&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules.validator </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F97583;">        !</span><span style="color:#E1E4E8;">rules.</span><span style="color:#B392F0;">validator</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(field.value))</span></span>
<span class="line"><span style="color:#E1E4E8;">      ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">        errorMessage </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;验证失败&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      setFields</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">prev,</span></span>
<span class="line"><span style="color:#E1E4E8;">        [name]: {</span></span>
<span class="line"><span style="color:#F97583;">          ...</span><span style="color:#E1E4E8;">prev[name],</span></span>
<span class="line"><span style="color:#E1E4E8;">          error: errorMessage,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> isValid</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    [fields, validations],</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> setFieldValue</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setFields</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">prev,</span></span>
<span class="line"><span style="color:#E1E4E8;">        [name]: {</span></span>
<span class="line"><span style="color:#F97583;">          ...</span><span style="color:#E1E4E8;">prev[name],</span></span>
<span class="line"><span style="color:#E1E4E8;">          value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }))</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> setFieldTouched</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> extends</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> K</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">touched</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setFields</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#F97583;">        ...</span><span style="color:#E1E4E8;">prev,</span></span>
<span class="line"><span style="color:#E1E4E8;">        [name]: {</span></span>
<span class="line"><span style="color:#F97583;">          ...</span><span style="color:#E1E4E8;">prev[name],</span></span>
<span class="line"><span style="color:#E1E4E8;">          touched,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }))</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> validateForm</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">validations) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(validations).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> fieldIsValid</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> validateField</span><span style="color:#E1E4E8;">(key </span><span style="color:#F97583;">as</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">fieldIsValid) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isValid </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> isValid</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [validations, validateField])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> resetForm</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useCallback</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setFields</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> resetFields</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {} </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> { [</span><span style="color:#B392F0;">K</span><span style="color:#F97583;"> in</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> FormField</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]&gt; }</span></span>
<span class="line"><span style="color:#E1E4E8;">      Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(initialValues).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        resetFields[key </span><span style="color:#F97583;">as</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          value: initialValues[key </span><span style="color:#F97583;">as</span><span style="color:#F97583;"> keyof</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          error: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          touched: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> resetFields</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [initialValues])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> isFormValid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(fields).</span><span style="color:#B392F0;">every</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">field</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">field.error)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fields,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setFieldValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setFieldTouched,</span></span>
<span class="line"><span style="color:#E1E4E8;">    validateField,</span></span>
<span class="line"><span style="color:#E1E4E8;">    validateForm,</span></span>
<span class="line"><span style="color:#E1E4E8;">    resetForm,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFormValid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> LoginForm</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  email</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  password</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> LoginFormComponent</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FC</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    fields</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    setFieldValue</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    setFieldTouched</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    validateField</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    isFormValid</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useForm</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">LoginForm</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pattern:</span><span style="color:#9ECBFF;"> /</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">@</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\s@]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      password: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        minLength: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleSubmit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">FormEvent</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">validateForm</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;表单提交:&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        email: fields.email.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password: fields.password.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#B392F0;"> onSubmit</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;邮箱:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{fields.email.value}</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setFieldValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">, e.target.value)}</span></span>
<span class="line"><span style="color:#B392F0;">          onBlur</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            setFieldTouched</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">            validateField</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {fields.email.touched </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> fields.email.error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;"> }}&gt;{fields.email.error}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;密码:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{fields.password.value}</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setFieldValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">, e.target.value)}</span></span>
<span class="line"><span style="color:#B392F0;">          onBlur</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            setFieldTouched</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">            validateField</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {fields.password.touched </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> fields.password.error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;"> }}&gt;{fields.password.error}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#B392F0;"> disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isFormValid}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        登录</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,25)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
