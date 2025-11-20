import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"React 状态管理方案大全","description":"","frontmatter":{},"headers":[{"level":2,"title":"内置状态管理","slug":"内置状态管理","link":"#内置状态管理","children":[{"level":3,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":3,"title":"useReducer","slug":"usereducer","link":"#usereducer","children":[]}]},{"level":2,"title":"上下文 API","slug":"上下文-api","link":"#上下文-api","children":[{"level":3,"title":"React Context","slug":"react-context","link":"#react-context","children":[]}]},{"level":2,"title":"第三方状态管理库","slug":"第三方状态管理库","link":"#第三方状态管理库","children":[{"level":3,"title":"Redux Toolkit","slug":"redux-toolkit","link":"#redux-toolkit","children":[]},{"level":3,"title":"Zustand","slug":"zustand","link":"#zustand","children":[]},{"level":3,"title":"Jotai","slug":"jotai","link":"#jotai","children":[]},{"level":3,"title":"Recoil","slug":"recoil","link":"#recoil","children":[]},{"level":3,"title":"MobX","slug":"mobx","link":"#mobx","children":[]},{"level":3,"title":"Valtio","slug":"valtio","link":"#valtio","children":[]}]},{"level":2,"title":"服务端状态管理","slug":"服务端状态管理","link":"#服务端状态管理","children":[{"level":3,"title":"React Query / TanStack Query","slug":"react-query-tanstack-query","link":"#react-query-tanstack-query","children":[]},{"level":3,"title":"SWR","slug":"swr","link":"#swr","children":[]}]},{"level":2,"title":"表单状态管理","slug":"表单状态管理","link":"#表单状态管理","children":[{"level":3,"title":"React Hook Form","slug":"react-hook-form","link":"#react-hook-form","children":[]},{"level":3,"title":"Formik","slug":"formik","link":"#formik","children":[]}]},{"level":2,"title":"选择指南","slug":"选择指南","link":"#选择指南","children":[]}],"relativePath":"framework/react/managing-state.md","filePath":"framework/react/managing-state.md"}'),o={name:"framework/react/managing-state.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /framework/react/managing-state.md for this page in Markdown format</div><h1 id="react-状态管理方案大全" tabindex="-1">React 状态管理方案大全 <a class="header-anchor" href="#react-状态管理方案大全" aria-label="Permalink to &quot;React 状态管理方案大全&quot;">​</a></h1><h2 id="内置状态管理" tabindex="-1">内置状态管理 <a class="header-anchor" href="#内置状态管理" aria-label="Permalink to &quot;内置状态管理&quot;">​</a></h2><h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useState(initialValue)</code></li><li><code>setState(newValue)</code></li><li><code>setState(prev =&gt; prev + 1)</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setUser</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)}&gt;Increment&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">prev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Decrement</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{user.name}</span></span>
<span class="line"><span style="color:#B392F0;">        onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setUser</span><span style="color:#E1E4E8;">({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">user, name: e.target.value })}</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useReducer(reducer, initialState)</code></li><li><code>dispatch(action)</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useReducer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> initialState</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reducer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">action</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (action.type) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;increment&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { count: state.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;decrement&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { count: state.count </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &#39;reset&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> initialState</span></span>
<span class="line"><span style="color:#F97583;">    default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dispatch</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useReducer</span><span style="color:#E1E4E8;">(reducer, initialState)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {state.count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;increment&#39;</span><span style="color:#E1E4E8;"> })}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;decrement&#39;</span><span style="color:#E1E4E8;"> })}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">({ type: </span><span style="color:#9ECBFF;">&#39;reset&#39;</span><span style="color:#E1E4E8;"> })}&gt;Reset&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="上下文-api" tabindex="-1">上下文 API <a class="header-anchor" href="#上下文-api" aria-label="Permalink to &quot;上下文 API&quot;">​</a></h2><h3 id="react-context" tabindex="-1">React Context <a class="header-anchor" href="#react-context" aria-label="Permalink to &quot;React Context&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>createContext(defaultValue)</code></li><li><code>Context.Provider</code></li><li><code>useContext(Context)</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createContext, useContext, useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> UserContext</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createContext</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserProvider</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">children</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setUser</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setTheme</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    user,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setUser,</span></span>
<span class="line"><span style="color:#E1E4E8;">    theme,</span></span>
<span class="line"><span style="color:#E1E4E8;">    setTheme,</span></span>
<span class="line"><span style="color:#B392F0;">    login</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">userData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setUser</span><span style="color:#E1E4E8;">(userData),</span></span>
<span class="line"><span style="color:#B392F0;">    logout</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">UserContext.Provider</span><span style="color:#B392F0;"> value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{value}&gt;{children}&lt;/</span><span style="color:#79B8FF;">UserContext.Provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserProfile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">logout</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useContext</span><span style="color:#E1E4E8;">(UserContext)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{theme}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;User: {user?.name}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{logout}&gt;Logout&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">UserProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">UserProfile</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">UserProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="第三方状态管理库" tabindex="-1">第三方状态管理库 <a class="header-anchor" href="#第三方状态管理库" aria-label="Permalink to &quot;第三方状态管理库&quot;">​</a></h2><h3 id="redux-toolkit" tabindex="-1">Redux Toolkit <a class="header-anchor" href="#redux-toolkit" aria-label="Permalink to &quot;Redux Toolkit&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>configureStore()</code></li><li><code>createSlice()</code></li><li><code>useSelector()</code></li><li><code>useDispatch()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { configureStore, createSlice } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@reduxjs/toolkit&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useSelector, useDispatch, Provider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react-redux&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Slice</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> counterSlice</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createSlice</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;counter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  initialState: { value: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  reducers: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.value </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    decrement</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.value </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    incrementByAmount</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">action</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.value </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> action.payload</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Store</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> configureStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  reducer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    counter: counterSlice.reducer,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Components</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useSelector</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state.counter.value)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dispatch</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useDispatch</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{count}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">(counterSlice.actions.</span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">())}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        +1</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> dispatch</span><span style="color:#E1E4E8;">(counterSlice.actions.</span><span style="color:#B392F0;">decrement</span><span style="color:#E1E4E8;">())}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        -1</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">Provider</span><span style="color:#B392F0;"> store</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{store}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Counter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">Provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">increment</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">decrement</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> counterSlice.actions</span></span></code></pre></div><h3 id="zustand" tabindex="-1">Zustand <a class="header-anchor" href="#zustand" aria-label="Permalink to &quot;Zustand&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>create((set, get) =&gt; ({ ... }))</code></li><li><code>useStore(state =&gt; state.value)</code></li><li><code>useStore.getState()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { create } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;zustand&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> useStore</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> create</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">set</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  increment</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> set</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: state.count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> })),</span></span>
<span class="line"><span style="color:#B392F0;">  decrement</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> set</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: state.count </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;"> })),</span></span>
<span class="line"><span style="color:#B392F0;">  reset</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> set</span><span style="color:#E1E4E8;">({ count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#6A737D;">  // 访问当前状态</span></span>
<span class="line"><span style="color:#B392F0;">  doubleCount</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">().count</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">({ count: currentCount </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  setUser</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> set</span><span style="color:#E1E4E8;">({ user }),</span></span>
<span class="line"><span style="color:#E1E4E8;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">increment</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">decrement</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">doubleCount</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{increment}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{decrement}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{doubleCount}&gt;Double&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state.user)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> setUser</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useStore</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> state.setUser)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setUser</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;"> })}&gt;Set User&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;User: {user?.name}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="jotai" tabindex="-1">Jotai <a class="header-anchor" href="#jotai" aria-label="Permalink to &quot;Jotai&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>atom(initialValue)</code></li><li><code>useAtom(atom)</code></li><li><code>useAtomValue(atom)</code></li><li><code>useSetAtom(atom)</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { atom, useAtom, useAtomValue, useSetAtom } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;jotai&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 基础atom</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> countAtom</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userAtom</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 派生atom</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> doubledCountAtom</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">(countAtom) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> countPlusAtom</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">(countAtom) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可写派生atom</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> incrementCountAtom</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">(countAtom),</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">set</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">_arg</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> set</span><span style="color:#E1E4E8;">(countAtom, </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(countAtom) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAtom</span><span style="color:#E1E4E8;">(countAtom)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> doubledCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useAtomValue</span><span style="color:#E1E4E8;">(doubledCountAtom)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useSetAtom</span><span style="color:#E1E4E8;">(incrementCountAtom)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Doubled: {doubledCount}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{increment}&gt;Increment&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)}&gt;Reset&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setUser</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAtom</span><span style="color:#E1E4E8;">(userAtom)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setUser</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;Alice&#39;</span><span style="color:#E1E4E8;"> })}&gt;Set User&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;User: {user?.name}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="recoil" tabindex="-1">Recoil <a class="header-anchor" href="#recoil" aria-label="Permalink to &quot;Recoil&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>atom()</code></li><li><code>selector()</code></li><li><code>useRecoilState()</code></li><li><code>useRecoilValue()</code></li><li><code>useSetRecoilState()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  atom,</span></span>
<span class="line"><span style="color:#E1E4E8;">  selector,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useRecoilState,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useRecoilValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">  RecoilRoot,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;recoil&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> countState</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#9ECBFF;">&#39;countState&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  default: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> doubledCountState</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> selector</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#9ECBFF;">&#39;doubledCountState&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">  get</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">get</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> get</span><span style="color:#E1E4E8;">(countState) </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> userState</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> atom</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  key: </span><span style="color:#9ECBFF;">&#39;userState&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useRecoilState</span><span style="color:#E1E4E8;">(countState)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> doubledCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useRecoilValue</span><span style="color:#E1E4E8;">(doubledCountState)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Doubled: {doubledCount}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">RecoilRoot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Counter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">RecoilRoot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="mobx" tabindex="-1">MobX <a class="header-anchor" href="#mobx" aria-label="Permalink to &quot;MobX&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>makeAutoObservable()</code></li><li><code>makeObservable()</code></li><li><code>observer()</code></li><li><code>useObserver()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { makeAutoObservable } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;mobx&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { observer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;mobx-react-lite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createContext, useContext } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> CounterStore</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  count</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#FFAB70;">  user</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    makeAutoObservable</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  decrement</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  reset</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  get</span><span style="color:#B392F0;"> doubled</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> CounterContext</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createContext</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> counterStore</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useContext</span><span style="color:#E1E4E8;">(CounterContext)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {counterStore.count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Doubled: {counterStore.doubled}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> counterStore.</span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">()}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> counterStore.</span><span style="color:#B392F0;">decrement</span><span style="color:#E1E4E8;">()}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> counterStore.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">()}&gt;Reset&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 observer 包装组件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> ObservableCounter</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> observer</span><span style="color:#E1E4E8;">(Counter)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> store</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CounterStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">CounterContext.Provider</span><span style="color:#B392F0;"> value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{store}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">ObservableCounter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">CounterContext.Provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="valtio" tabindex="-1">Valtio <a class="header-anchor" href="#valtio" aria-label="Permalink to &quot;Valtio&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>proxy()</code></li><li><code>useSnapshot()</code></li><li><code>subscribe()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { proxy, useSnapshot, subscribe } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;valtio&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> proxy</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">  get</span><span style="color:#B392F0;"> doubled</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.count </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在组件外修改状态</span></span>
<span class="line"><span style="color:#E1E4E8;">state.</span><span style="color:#B392F0;">increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  state.count </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">state.</span><span style="color:#B392F0;">decrement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  state.count </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">state.</span><span style="color:#B392F0;">setUser</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  state.user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> user</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> snap</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useSnapshot</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Count: {snap.count}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Doubled: {snap.doubled}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{state.increment}&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{state.decrement}&gt;-1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (state.count </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)}&gt;Reset&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 订阅状态变化</span></span>
<span class="line"><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(state, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;State changed:&#39;</span><span style="color:#E1E4E8;">, state.count)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h2 id="服务端状态管理" tabindex="-1">服务端状态管理 <a class="header-anchor" href="#服务端状态管理" aria-label="Permalink to &quot;服务端状态管理&quot;">​</a></h2><h3 id="react-query-tanstack-query" tabindex="-1">React Query / TanStack Query <a class="header-anchor" href="#react-query-tanstack-query" aria-label="Permalink to &quot;React Query / TanStack Query&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useQuery()</code></li><li><code>useMutation()</code></li><li><code>useQueryClient()</code></li><li><code>QueryClientProvider</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  useQuery,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useMutation,</span></span>
<span class="line"><span style="color:#E1E4E8;">  useQueryClient,</span></span>
<span class="line"><span style="color:#E1E4E8;">  QueryClient,</span></span>
<span class="line"><span style="color:#E1E4E8;">  QueryClientProvider,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@tanstack/react-query&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> queryClient</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> QueryClient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> fetchUsers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> addUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/users&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(user),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Users</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> queryClient</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useQueryClient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 查询</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">    data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">users</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    isLoading</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    error</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useQuery</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    queryKey: [</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    queryFn: fetchUsers,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 突变</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> mutation</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useMutation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutationFn: addUser,</span></span>
<span class="line"><span style="color:#B392F0;">    onSuccess</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 使查询失效并重新获取</span></span>
<span class="line"><span style="color:#E1E4E8;">      queryClient.</span><span style="color:#B392F0;">invalidateQueries</span><span style="color:#E1E4E8;">({ queryKey: [</span><span style="color:#9ECBFF;">&#39;users&#39;</span><span style="color:#E1E4E8;">] })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (isLoading) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Error: {error.message}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {users?.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{user.id}&gt;{user.name}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> mutation.</span><span style="color:#B392F0;">mutate</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;New User&#39;</span><span style="color:#E1E4E8;"> })}</span></span>
<span class="line"><span style="color:#B392F0;">        disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{mutation.isLoading}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Add User</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">QueryClientProvider</span><span style="color:#B392F0;"> client</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{queryClient}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Users</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">QueryClientProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="swr" tabindex="-1">SWR <a class="header-anchor" href="#swr" aria-label="Permalink to &quot;SWR&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useSWR()</code></li><li><code>mutate()</code></li><li><code>useSWRConfig()</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useSWR, { useSWRConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;swr&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> fetcher</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(url).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Profile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">mutate</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useSWRConfig</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isLoading</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useSWR</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/user&#39;</span><span style="color:#E1E4E8;">, fetcher, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    refreshInterval: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 每3秒刷新</span></span>
<span class="line"><span style="color:#E1E4E8;">    revalidateOnFocus: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 窗口聚焦时重新验证</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleUpdate</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 乐观更新</span></span>
<span class="line"><span style="color:#B392F0;">    mutate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/user&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">data, name: </span><span style="color:#9ECBFF;">&#39;New Name&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 实际更新</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/user&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;PUT&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      body: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;New Name&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 重新验证</span></span>
<span class="line"><span style="color:#B392F0;">    mutate</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/user&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Failed to load&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (isLoading) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Loading...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello {data.name}!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleUpdate}&gt;Update Name&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="表单状态管理" tabindex="-1">表单状态管理 <a class="header-anchor" href="#表单状态管理" aria-label="Permalink to &quot;表单状态管理&quot;">​</a></h2><h3 id="react-hook-form" tabindex="-1">React Hook Form <a class="header-anchor" href="#react-hook-form" aria-label="Permalink to &quot;React Hook Form&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useForm()</code></li><li><code>register()</code></li><li><code>handleSubmit()</code></li><li><code>watch()</code></li><li><code>formState</code></li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useForm, Controller } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react-hook-form&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { zodResolver } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@hookform/resolvers/zod&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { z } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;zod&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> schema</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> z.</span><span style="color:#B392F0;">object</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: z.</span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: z.</span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">email</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: z.</span><span style="color:#B392F0;">number</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserForm</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    register</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    handleSubmit</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    control</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    watch</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    formState</span><span style="color:#E1E4E8;">: { </span><span style="color:#79B8FF;">errors</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isSubmitting</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useForm</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolver: </span><span style="color:#B392F0;">zodResolver</span><span style="color:#E1E4E8;">(schema),</span></span>
<span class="line"><span style="color:#E1E4E8;">    defaultValues: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> onSubmit</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#6A737D;">    // 提交逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 监听字段变化</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> name</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> watch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#B392F0;"> onSubmit</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">handleSubmit</span><span style="color:#E1E4E8;">(onSubmit)}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> {</span><span style="color:#F97583;">...</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">)} </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Name&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {errors.name </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{errors.name.message}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> {</span><span style="color:#F97583;">...</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;email&#39;</span><span style="color:#E1E4E8;">)} </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Email&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {errors.email </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{errors.email.message}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Controller</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;age&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          control</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{control}</span></span>
<span class="line"><span style="color:#B392F0;">          render</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{({ </span><span style="color:#FFAB70;">field</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">field}</span></span>
<span class="line"><span style="color:#B392F0;">              type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;number&quot;</span></span>
<span class="line"><span style="color:#B392F0;">              onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> field.</span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(e.target.value))}</span></span>
<span class="line"><span style="color:#E1E4E8;">            /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          )}</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {errors.age </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{errors.age.message}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Watched name: {name}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#B392F0;"> disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isSubmitting}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Submit</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="formik" tabindex="-1">Formik <a class="header-anchor" href="#formik" aria-label="Permalink to &quot;Formik&quot;">​</a></h3><p><strong>常用 API：</strong></p><ul><li><code>useFormik()</code></li><li><code>Formik</code> 组件</li><li><code>Field</code> 组件</li><li><code>ErrorMessage</code> 组件</li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFormik } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;formik&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> UserForm</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> formik</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> useFormik</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    initialValues: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      email: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    onSubmit</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(values)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    validate</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> errors</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">values.name) errors.name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;Required&#39;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">values.email) errors.email </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;Required&#39;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> errors</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#B392F0;"> onSubmit</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{formik.handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{formik.handleChange}</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{formik.values.name}</span></span>
<span class="line"><span style="color:#B392F0;">          placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Name&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {formik.errors.name </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> formik.touched.name </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{formik.errors.name}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;email&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{formik.handleChange}</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{formik.values.email}</span></span>
<span class="line"><span style="color:#B392F0;">          placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Email&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {formik.errors.email </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> formik.touched.email </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{formik.errors.email}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        )}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;">&gt;Submit&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="选择指南" tabindex="-1">选择指南 <a class="header-anchor" href="#选择指南" aria-label="Permalink to &quot;选择指南&quot;">​</a></h2><table tabindex="0"><thead><tr><th>场景</th><th>推荐方案</th><th>理由</th></tr></thead><tbody><tr><td>简单组件状态</td><td><code>useState</code></td><td>内置，简单直接</td></tr><tr><td>复杂状态逻辑</td><td><code>useReducer</code></td><td>类似 Redux 模式，可预测</td></tr><tr><td>跨组件共享</td><td><code>Context + useReducer</code></td><td>内置解决方案</td></tr><tr><td>大型企业应用</td><td><code>Redux Toolkit</code></td><td>完善的工具链和中间件</td></tr><tr><td>轻量级需求</td><td><code>Zustand</code></td><td>API 简单，无样板代码</td></tr><tr><td>原子化状态</td><td><code>Jotai</code></td><td>React 风格，自动优化</td></tr><tr><td>服务端状态</td><td><code>React Query</code></td><td>专业的数据获取和缓存</td></tr><tr><td>表单处理</td><td><code>React Hook Form</code></td><td>高性能，优秀的验证支持</td></tr></tbody></table>`,61)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
