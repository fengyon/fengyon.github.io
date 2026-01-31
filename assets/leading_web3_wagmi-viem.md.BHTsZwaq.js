import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"wagmi & viem","description":"","frontmatter":{},"headers":[{"level":2,"title":"wagmi & viem 核心特点","slug":"wagmi-viem-核心特点","link":"#wagmi-viem-核心特点","children":[{"level":3,"title":"现代化架构","slug":"现代化架构","link":"#现代化架构","children":[]},{"level":3,"title":"类型安全与 TypeScript 原生支持","slug":"类型安全与-typescript-原生支持","link":"#类型安全与-typescript-原生支持","children":[]},{"level":3,"title":"高性能与轻量级","slug":"高性能与轻量级","link":"#高性能与轻量级","children":[]},{"level":3,"title":"开发者体验优化","slug":"开发者体验优化","link":"#开发者体验优化","children":[]}]},{"level":2,"title":"安装与项目配置","slug":"安装与项目配置","link":"#安装与项目配置","children":[{"level":3,"title":"环境要求","slug":"环境要求","link":"#环境要求","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":3,"title":"React 应用集成","slug":"react-应用集成","link":"#react-应用集成","children":[]}]},{"level":2,"title":"wagmi 核心 Hooks 使用","slug":"wagmi-核心-hooks-使用","link":"#wagmi-核心-hooks-使用","children":[{"level":3,"title":"钱包连接管理","slug":"钱包连接管理","link":"#钱包连接管理","children":[]},{"level":3,"title":"网络与链管理","slug":"网络与链管理","link":"#网络与链管理","children":[]},{"level":3,"title":"资产与余额查询","slug":"资产与余额查询","link":"#资产与余额查询","children":[]}]},{"level":2,"title":"viem 核心功能使用","slug":"viem-核心功能使用","link":"#viem-核心功能使用","children":[{"level":3,"title":"客户端创建与配置","slug":"客户端创建与配置","link":"#客户端创建与配置","children":[]},{"level":3,"title":"区块链数据读取","slug":"区块链数据读取","link":"#区块链数据读取","children":[]},{"level":3,"title":"交易发送与签名","slug":"交易发送与签名","link":"#交易发送与签名","children":[]}]},{"level":2,"title":"智能合约交互","slug":"智能合约交互","link":"#智能合约交互","children":[{"level":3,"title":"ABI 定义与合约实例","slug":"abi-定义与合约实例","link":"#abi-定义与合约实例","children":[]},{"level":3,"title":"使用 wagmi 进行合约读写","slug":"使用-wagmi-进行合约读写","link":"#使用-wagmi-进行合约读写","children":[]}]},{"level":2,"title":"高级功能与模式","slug":"高级功能与模式","link":"#高级功能与模式","children":[{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]},{"level":3,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]},{"level":3,"title":"错误处理与状态管理","slug":"错误处理与状态管理","link":"#错误处理与状态管理","children":[]}]},{"level":2,"title":"实战示例：完整的 DApp 组件","slug":"实战示例-完整的-dapp-组件","link":"#实战示例-完整的-dapp-组件","children":[{"level":3,"title":"钱包连接组件","slug":"钱包连接组件","link":"#钱包连接组件","children":[]},{"level":3,"title":"代币交易组件","slug":"代币交易组件","link":"#代币交易组件","children":[]}]}],"relativePath":"leading/web3/wagmi-viem.md","filePath":"leading/web3/wagmi-viem.md"}'),o={name:"leading/web3/wagmi-viem.md"};function e(t,s,c,r,E,i){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/web3/wagmi-viem.md for this page in Markdown format</div><h1 id="wagmi-viem" tabindex="-1">wagmi &amp; viem <a class="header-anchor" href="#wagmi-viem" aria-label="Permalink to &quot;wagmi &amp; viem&quot;">​</a></h1><p>wagmi 和 viem 构成了现代 Web3 开发的强大工具组合。wagmi 提供了一套完整的 React Hooks，用于简化以太坊交互，而 viem 则是一个类型安全、高性能的以太坊 TypeScript 接口库。两者结合为开发者提供了比传统 Web3.js 和 ethers.js 更优的开发体验。</p><h2 id="wagmi-viem-核心特点" tabindex="-1">wagmi &amp; viem 核心特点 <a class="header-anchor" href="#wagmi-viem-核心特点" aria-label="Permalink to &quot;wagmi &amp; viem 核心特点&quot;">​</a></h2><h3 id="现代化架构" tabindex="-1">现代化架构 <a class="header-anchor" href="#现代化架构" aria-label="Permalink to &quot;现代化架构&quot;">​</a></h3><p>wagmi 采用 React Hooks 设计模式，与现代 React 开发范式完美契合。viem 提供低级别的以太坊交互能力，两者分工明确，协同高效。</p><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>传统架构: DApp -&gt; Web3.js/ethers.js -&gt; 以太坊节点</span></span>
<span class="line"><span>现代架构: DApp -&gt; wagmi(Hooks) -&gt; viem(核心逻辑) -&gt; 以太坊节点</span></span></code></pre></div><h3 id="类型安全与-typescript-原生支持" tabindex="-1">类型安全与 TypeScript 原生支持 <a class="header-anchor" href="#类型安全与-typescript-原生支持" aria-label="Permalink to &quot;类型安全与 TypeScript 原生支持&quot;">​</a></h3><p>viem 从一开始就为 TypeScript 设计，提供完整的类型推断。wagmi 能够从 ABI 自动推断类型，大幅减少运行时错误。</p><h3 id="高性能与轻量级" tabindex="-1">高性能与轻量级 <a class="header-anchor" href="#高性能与轻量级" aria-label="Permalink to &quot;高性能与轻量级&quot;">​</a></h3><p>viem 相比 ethers.js 具有更小的打包体积和更快的执行速度。内部优化包括缓存、重复请求降重和批量处理。</p><h3 id="开发者体验优化" tabindex="-1">开发者体验优化 <a class="header-anchor" href="#开发者体验优化" aria-label="Permalink to &quot;开发者体验优化&quot;">​</a></h3><p>wagmi 提供开箱即用的功能：自动连接钱包、多链支持、实时状态同步。开发服务器支持热重载，加速开发流程。</p><h2 id="安装与项目配置" tabindex="-1">安装与项目配置 <a class="header-anchor" href="#安装与项目配置" aria-label="Permalink to &quot;安装与项目配置&quot;">​</a></h2><h3 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h3><p>确保你的环境满足以下要求：</p><ul><li>Node.js 版本 18 或以上</li><li>React 16.8+ 或支持 Hooks 的框架</li><li>现代包管理器 (npm，yarn，pnpm，bun)</li></ul><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 使用 npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> wagmi</span><span style="color:#9ECBFF;"> viem</span><span style="color:#9ECBFF;"> @tanstack/react-query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> wagmi</span><span style="color:#9ECBFF;"> viem</span><span style="color:#9ECBFF;"> @tanstack/react-query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> wagmi</span><span style="color:#9ECBFF;"> viem</span><span style="color:#9ECBFF;"> @tanstack/react-query</span></span></code></pre></div><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h3><p>创建 wagmi 配置文件：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/wagmi.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createConfig, http } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet, sepolia } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi/chains&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { injected, walletConnect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi/connectors&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chains: [mainnet, sepolia],</span></span>
<span class="line"><span style="color:#E1E4E8;">  connectors: [</span></span>
<span class="line"><span style="color:#B392F0;">    injected</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#B392F0;">    walletConnect</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      projectId: </span><span style="color:#9ECBFF;">&#39;your-walletconnect-project-id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  transports: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    [mainnet.id]: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    [sepolia.id]: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssr: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启用 SSR 支持</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="react-应用集成" tabindex="-1">React 应用集成 <a class="header-anchor" href="#react-应用集成" aria-label="Permalink to &quot;React 应用集成&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// App.jsx</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WagmiProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { QueryClient, QueryClientProvider } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@tanstack/react-query&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { config } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./lib/wagmi.config.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> queryClient</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> QueryClient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">WagmiProvider</span><span style="color:#B392F0;"> config</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{config}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">QueryClientProvider</span><span style="color:#B392F0;"> client</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{queryClient}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">YourAppComponent</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#79B8FF;">QueryClientProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#79B8FF;">WagmiProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> App</span></span></code></pre></div><h2 id="wagmi-核心-hooks-使用" tabindex="-1">wagmi 核心 Hooks 使用 <a class="header-anchor" href="#wagmi-核心-hooks-使用" aria-label="Permalink to &quot;wagmi 核心 Hooks 使用&quot;">​</a></h2><h3 id="钱包连接管理" tabindex="-1">钱包连接管理 <a class="header-anchor" href="#钱包连接管理" aria-label="Permalink to &quot;钱包连接管理&quot;">​</a></h3><h4 id="useconnect-连接钱包" tabindex="-1">useConnect - 连接钱包 <a class="header-anchor" href="#useconnect-连接钱包" aria-label="Permalink to &quot;useConnect - 连接钱包&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useWalletConnect.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useConnect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> WalletConnector</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">connect</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">connectors</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useConnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {connectors.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">connector</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">          key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{connector.uid}</span></span>
<span class="line"><span style="color:#B392F0;">          onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> connect</span><span style="color:#E1E4E8;">({ connector })}</span></span>
<span class="line"><span style="color:#B392F0;">          disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">connector.ready}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          连接 {connector.name}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">      {error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;错误: {error.message}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="useaccount-账户信息" tabindex="-1">useAccount - 账户信息 <a class="header-anchor" href="#useaccount-账户信息" aria-label="Permalink to &quot;useAccount - 账户信息&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useAccountInfo.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useAccount, useEnsName, useEnsAvatar } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> AccountInfo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isConnected</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">chain</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAccount</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ensName</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useEnsName</span><span style="color:#E1E4E8;">({ address })</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ensAvatar</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useEnsAvatar</span><span style="color:#E1E4E8;">({ name: ensName })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isConnected) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;未连接钱包&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {ensAvatar </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">img</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{ensAvatar} </span><span style="color:#B392F0;">alt</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ENS Avatar&quot;</span><span style="color:#E1E4E8;"> /&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{ensName </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> address}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;网络: {chain?.name}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="usedisconnect-断开连接" tabindex="-1">useDisconnect - 断开连接 <a class="header-anchor" href="#usedisconnect-断开连接" aria-label="Permalink to &quot;useDisconnect - 断开连接&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useDisconnectButton.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useDisconnect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> DisconnectButton</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">disconnect</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useDisconnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> disconnect</span><span style="color:#E1E4E8;">()}&gt;断开钱包连接&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="网络与链管理" tabindex="-1">网络与链管理 <a class="header-anchor" href="#网络与链管理" aria-label="Permalink to &quot;网络与链管理&quot;">​</a></h3><h4 id="useswitchchain-切换网络" tabindex="-1">useSwitchChain - 切换网络 <a class="header-anchor" href="#useswitchchain-切换网络" aria-label="Permalink to &quot;useSwitchChain - 切换网络&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useNetworkSwitcher.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useSwitchChain, useAccount } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> NetworkSwitcher</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">chains</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">switchChain</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useSwitchChain</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">chain</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAccount</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">select</span></span>
<span class="line"><span style="color:#B392F0;">        value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{chain?.id}</span></span>
<span class="line"><span style="color:#B392F0;">        onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> switchChain</span><span style="color:#E1E4E8;">({ chainId: </span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(e.target.value) })}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {chains.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">network</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">option</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{network.id} </span><span style="color:#B392F0;">value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{network.id}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            {network.name}</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">option</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">select</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;状态: {status}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="资产与余额查询" tabindex="-1">资产与余额查询 <a class="header-anchor" href="#资产与余额查询" aria-label="Permalink to &quot;资产与余额查询&quot;">​</a></h3><h4 id="usebalance-查询余额" tabindex="-1">useBalance - 查询余额 <a class="header-anchor" href="#usebalance-查询余额" aria-label="Permalink to &quot;useBalance - 查询余额&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useTokenBalance.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useBalance, useAccount } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> TokenBalance</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAccount</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isLoading</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useBalance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address,</span></span>
<span class="line"><span style="color:#E1E4E8;">    token: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (isLoading) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;查询中...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;错误: {error.message}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      余额: {data?.formatted} {data?.symbol}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="viem-核心功能使用" tabindex="-1">viem 核心功能使用 <a class="header-anchor" href="#viem-核心功能使用" aria-label="Permalink to &quot;viem 核心功能使用&quot;">​</a></h2><h3 id="客户端创建与配置" tabindex="-1">客户端创建与配置 <a class="header-anchor" href="#客户端创建与配置" aria-label="Permalink to &quot;客户端创建与配置&quot;">​</a></h3><h4 id="公共客户端-public-client" tabindex="-1">公共客户端 (Public Client) <a class="header-anchor" href="#公共客户端-public-client" aria-label="Permalink to &quot;公共客户端 (Public Client)&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/viemClient.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> publicClient</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h4 id="钱包客户端-wallet-client" tabindex="-1">钱包客户端 (Wallet Client) <a class="header-anchor" href="#钱包客户端-wallet-client" aria-label="Permalink to &quot;钱包客户端 (Wallet Client)&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// lib/walletClient.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWalletClient, custom } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 浏览器环境</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> walletClient</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createWalletClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">custom</span><span style="color:#E1E4E8;">(window.ethereum),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre></div><h3 id="区块链数据读取" tabindex="-1">区块链数据读取 <a class="header-anchor" href="#区块链数据读取" aria-label="Permalink to &quot;区块链数据读取&quot;">​</a></h3><h4 id="查询区块信息" tabindex="-1">查询区块信息 <a class="header-anchor" href="#查询区块信息" aria-label="Permalink to &quot;查询区块信息&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/blockService.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/viemClient.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getBlockData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取最新区块号</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blockNumber</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlockNumber</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取区块详情</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> block</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlock</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      blockNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 获取 Gas 价格</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> gasPrice</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getGasPrice</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      blockNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">      block,</span></span>
<span class="line"><span style="color:#E1E4E8;">      gasPrice,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取区块数据失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="交易查询" tabindex="-1">交易查询 <a class="header-anchor" href="#交易查询" aria-label="Permalink to &quot;交易查询&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/transactionService.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/viemClient.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getTransaction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">txHash</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> transaction</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash: txHash,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> receipt</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionReceipt</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash: txHash,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { transaction, receipt }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取交易数据失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="交易发送与签名" tabindex="-1">交易发送与签名 <a class="header-anchor" href="#交易发送与签名" aria-label="Permalink to &quot;交易发送与签名&quot;">​</a></h3><h4 id="发送-eth-交易" tabindex="-1">发送 ETH 交易 <a class="header-anchor" href="#发送-eth-交易" aria-label="Permalink to &quot;发送 ETH 交易&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/transactionService.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { walletClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/walletClient.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> sendETH</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">toAddress</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">getAddresses</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">sendTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      account,</span></span>
<span class="line"><span style="color:#E1E4E8;">      to: toAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#B392F0;">BigInt</span><span style="color:#E1E4E8;">(amount),</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hash</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发送交易失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="消息签名" tabindex="-1">消息签名 <a class="header-anchor" href="#消息签名" aria-label="Permalink to &quot;消息签名&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/signatureService.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { walletClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/walletClient.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> signMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">getAddresses</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> signature</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      account,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> signature</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;签名失败:&#39;</span><span style="color:#E1E4E8;">, error)</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="智能合约交互" tabindex="-1">智能合约交互 <a class="header-anchor" href="#智能合约交互" aria-label="Permalink to &quot;智能合约交互&quot;">​</a></h2><h3 id="abi-定义与合约实例" tabindex="-1">ABI 定义与合约实例 <a class="header-anchor" href="#abi-定义与合约实例" aria-label="Permalink to &quot;ABI 定义与合约实例&quot;">​</a></h3><h4 id="erc-20-合约交互" tabindex="-1">ERC-20 合约交互 <a class="header-anchor" href="#erc-20-合约交互" aria-label="Permalink to &quot;ERC-20 合约交互&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// contracts/erc20Contract.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http, parseAbi } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> erc20Abi</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseAbi</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function name() view returns (string)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function symbol() view returns (string)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function decimals() view returns (uint8)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function totalSupply() view returns (uint256)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function balanceOf(address) view returns (uint256)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;function transfer(address to, uint256 amount) returns (bool)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;event Transfer(address indexed from, address indexed to, uint256 value)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> client</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> getERC20Info</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">symbol</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">decimals</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">totalSupply</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;symbol&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;decimals&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { name, symbol, decimals, totalSupply }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-wagmi-进行合约读写" tabindex="-1">使用 wagmi 进行合约读写 <a class="header-anchor" href="#使用-wagmi-进行合约读写" aria-label="Permalink to &quot;使用 wagmi 进行合约读写&quot;">​</a></h3><h4 id="usereadcontract-读取合约数据" tabindex="-1">useReadContract - 读取合约数据 <a class="header-anchor" href="#usereadcontract-读取合约数据" aria-label="Permalink to &quot;useReadContract - 读取合约数据&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useTokenData.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useReadContract } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> erc20Abi</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 同上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useTokenData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useReadContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">    abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">    functionName: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">symbol</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useReadContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">    abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">    functionName: </span><span style="color:#9ECBFF;">&#39;symbol&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">balance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useReadContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">    abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">    functionName: </span><span style="color:#9ECBFF;">&#39;balanceOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    args: [</span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 目标地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { name, symbol, balance };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h4 id="usewritecontract-写入合约数据" tabindex="-1">useWriteContract - 写入合约数据 <a class="header-anchor" href="#usewritecontract-写入合约数据" aria-label="Permalink to &quot;useWriteContract - 写入合约数据&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useTokenTransfer.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useWriteContract, useWaitForTransactionReceipt } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> erc20Abi</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 同上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useTokenTransfer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    writeContract</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    error</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    isPending</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useWriteContract</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">isLoading</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">isConfirming</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isSuccess</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">isConfirmed</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#B392F0;">    useWaitForTransactionReceipt</span><span style="color:#E1E4E8;">({ hash });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> transfer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    writeContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;transfer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      args: [to, </span><span style="color:#B392F0;">BigInt</span><span style="color:#E1E4E8;">(amount)],</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    transfer,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hash,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isPending,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isConfirming,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isConfirmed,</span></span>
<span class="line"><span style="color:#E1E4E8;">    error,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="高级功能与模式" tabindex="-1">高级功能与模式 <a class="header-anchor" href="#高级功能与模式" aria-label="Permalink to &quot;高级功能与模式&quot;">​</a></h2><h3 id="事件监听" tabindex="-1">事件监听 <a class="header-anchor" href="#事件监听" aria-label="Permalink to &quot;事件监听&quot;">​</a></h3><h4 id="合约事件监听" tabindex="-1">合约事件监听 <a class="header-anchor" href="#合约事件监听" aria-label="Permalink to &quot;合约事件监听&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hooks/useContractEvents.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useWatchContractEvent } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> erc20Abi</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 同上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useTokenTransfers</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  useWatchContractEvent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">    abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">    eventName: </span><span style="color:#9ECBFF;">&#39;Transfer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">    onLogs</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">logs</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的转账事件:&#39;</span><span style="color:#E1E4E8;">, logs);</span></span>
<span class="line"><span style="color:#6A737D;">      // 处理转账事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="批量操作" tabindex="-1">批量操作 <a class="header-anchor" href="#批量操作" aria-label="Permalink to &quot;批量操作&quot;">​</a></h3><h4 id="多合约调用批量查询" tabindex="-1">多合约调用批量查询 <a class="header-anchor" href="#多合约调用批量查询" aria-label="Permalink to &quot;多合约调用批量查询&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/batchQueryService.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../lib/viemClient.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> batchTokenInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tokenAddresses</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> contracts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tokenAddresses</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">address</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        address,</span></span>
<span class="line"><span style="color:#E1E4E8;">        abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">        functionName: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        address,</span></span>
<span class="line"><span style="color:#E1E4E8;">        abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">        functionName: </span><span style="color:#9ECBFF;">&#39;symbol&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        address,</span></span>
<span class="line"><span style="color:#E1E4E8;">        abi: erc20Abi,</span></span>
<span class="line"><span style="color:#E1E4E8;">        functionName: </span><span style="color:#9ECBFF;">&#39;decimals&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ])</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">flat</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    contracts,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理批量结果</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> tokenAddresses.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">address</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> baseIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 3</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: results[baseIndex].result,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbol: results[baseIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">].result,</span></span>
<span class="line"><span style="color:#E1E4E8;">      decimals: results[baseIndex </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">].result,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="错误处理与状态管理" tabindex="-1">错误处理与状态管理 <a class="header-anchor" href="#错误处理与状态管理" aria-label="Permalink to &quot;错误处理与状态管理&quot;">​</a></h3><h4 id="统一的错误处理" tabindex="-1">统一的错误处理 <a class="header-anchor" href="#统一的错误处理" aria-label="Permalink to &quot;统一的错误处理&quot;">​</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// utils/errorHandler.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> handleWagmiError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error?.name </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ConnectorNotFoundError&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;未找到钱包连接器，请安装 MetaMask 或其他兼容钱包&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error?.name </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;ChainNotConfiguredError&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;当前网络未配置，请切换网络&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error?.message?.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user rejected&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;用户拒绝了交易请求&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (error?.message?.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;insufficient funds&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;余额不足，无法完成交易&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> error?.message </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;未知错误发生&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="实战示例-完整的-dapp-组件" tabindex="-1">实战示例：完整的 DApp 组件 <a class="header-anchor" href="#实战示例-完整的-dapp-组件" aria-label="Permalink to &quot;实战示例：完整的 DApp 组件&quot;">​</a></h2><h3 id="钱包连接组件" tabindex="-1">钱包连接组件 <a class="header-anchor" href="#钱包连接组件" aria-label="Permalink to &quot;钱包连接组件&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// components/ConnectWallet.jsx</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useAccount, useConnect, useDisconnect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { injected, walletConnect } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi/connectors&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> ConnectWallet</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isConnected</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAccount</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">connect</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useConnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">disconnect</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useDisconnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (isConnected) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;已连接: {address}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> disconnect</span><span style="color:#E1E4E8;">()}&gt;断开连接&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> connect</span><span style="color:#E1E4E8;">({ connector: </span><span style="color:#B392F0;">injected</span><span style="color:#E1E4E8;">() })}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        连接 MetaMask</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span></span>
<span class="line"><span style="color:#B392F0;">        onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#B392F0;">          connect</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            connector: </span><span style="color:#B392F0;">walletConnect</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              projectId: </span><span style="color:#9ECBFF;">&#39;your-project-id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            }),</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        连接 WalletConnect</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="代币交易组件" tabindex="-1">代币交易组件 <a class="header-anchor" href="#代币交易组件" aria-label="Permalink to &quot;代币交易组件&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// components/TokenTransfer.jsx</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useAccount, useBalance } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;wagmi&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useTokenTransfer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;../hooks/useTokenTransfer.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> TokenTransfer</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">tokenAddress</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">recipient</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setRecipient</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">amount</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setAmount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useAccount</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">balance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useBalance</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    address,</span></span>
<span class="line"><span style="color:#E1E4E8;">    token: tokenAddress,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">transfer</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isPending</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">isConfirmed</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#B392F0;">    useTokenTransfer</span><span style="color:#E1E4E8;">(tokenAddress)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> handleSubmit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (recipient </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> amount) {</span></span>
<span class="line"><span style="color:#B392F0;">      transfer</span><span style="color:#E1E4E8;">(recipient, amount)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#B392F0;"> onSubmit</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;接收地址:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{recipient}</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setRecipient</span><span style="color:#E1E4E8;">(e.target.value)}</span></span>
<span class="line"><span style="color:#B392F0;">          placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0x...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;金额:&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;number&quot;</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{amount}</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setAmount</span><span style="color:#E1E4E8;">(e.target.value)}</span></span>
<span class="line"><span style="color:#B392F0;">          placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        余额: {balance?.formatted} {balance?.symbol}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#B392F0;"> disabled</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{isPending}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {isPending </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;发送中...&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;发送代币&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      {error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;错误: {error.message}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      {isConfirmed </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;交易确认成功!&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,79)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
