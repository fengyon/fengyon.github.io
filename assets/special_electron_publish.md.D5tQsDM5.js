import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"Electron 发布与更新","description":"","frontmatter":{},"headers":[{"level":2,"title":"发布与更新概述","slug":"发布与更新概述","link":"#发布与更新概述","children":[]},{"level":2,"title":"应用打包与分发","slug":"应用打包与分发","link":"#应用打包与分发","children":[{"level":3,"title":"打包工具选择","slug":"打包工具选择","link":"#打包工具选择","children":[]},{"level":3,"title":"electron-builder 配置","slug":"electron-builder-配置","link":"#electron-builder-配置","children":[]},{"level":3,"title":"自动化构建脚本","slug":"自动化构建脚本","link":"#自动化构建脚本","children":[]}]},{"level":2,"title":"自动更新机制","slug":"自动更新机制","link":"#自动更新机制","children":[{"level":3,"title":"自动更新架构","slug":"自动更新架构","link":"#自动更新架构","children":[]},{"level":3,"title":"基本更新配置","slug":"基本更新配置","link":"#基本更新配置","children":[]},{"level":3,"title":"渲染进程集成","slug":"渲染进程集成","link":"#渲染进程集成","children":[]}]},{"level":2,"title":"版本管理与发布策略","slug":"版本管理与发布策略","link":"#版本管理与发布策略","children":[{"level":3,"title":"版本控制策略","slug":"版本控制策略","link":"#版本控制策略","children":[]},{"level":3,"title":"发布渠道管理","slug":"发布渠道管理","link":"#发布渠道管理","children":[]}]},{"level":2,"title":"第三方更新服务","slug":"第三方更新服务","link":"#第三方更新服务","children":[{"level":3,"title":"集成 electron-update-sdk","slug":"集成-electron-update-sdk","link":"#集成-electron-update-sdk","children":[]}]},{"level":2,"title":"安全与验证","slug":"安全与验证","link":"#安全与验证","children":[{"level":3,"title":"代码签名与验证","slug":"代码签名与验证","link":"#代码签名与验证","children":[]},{"level":3,"title":"安全更新策略","slug":"安全更新策略","link":"#安全更新策略","children":[]}]}],"relativePath":"special/electron/publish.md","filePath":"special/electron/publish.md"}'),o={name:"special/electron/publish.md"};function e(E,s,t,c,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/publish.md for this page in Markdown format</div><h1 id="electron-发布与更新" tabindex="-1">Electron 发布与更新 <a class="header-anchor" href="#electron-发布与更新" aria-label="Permalink to &quot;Electron 发布与更新&quot;">​</a></h1><h2 id="发布与更新概述" tabindex="-1">发布与更新概述 <a class="header-anchor" href="#发布与更新概述" aria-label="Permalink to &quot;发布与更新概述&quot;">​</a></h2><p>Electron 应用的发布与更新是应用生命周期中的关键环节，它涵盖了从<strong>应用打包</strong>、<strong>代码签名</strong>到<strong>分发给用户</strong>并<strong>持续提供更新</strong>的完整流程。与传统的 Web 应用不同，Electron 应用需要处理跨平台分发、自动更新机制和版本管理等一系列复杂问题。</p><p>完整的发布与更新流程构成了一个循环的周期：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>开发 → 打包 → 签名 → 发布 → 更新检查 → 下载 → 安装 → 重启</span></span>
<span class="line"><span>         ↑                                      ↓</span></span>
<span class="line"><span>         └──────────────────────────────────────┘</span></span></code></pre></div><h2 id="应用打包与分发" tabindex="-1">应用打包与分发 <a class="header-anchor" href="#应用打包与分发" aria-label="Permalink to &quot;应用打包与分发&quot;">​</a></h2><h3 id="打包工具选择" tabindex="-1">打包工具选择 <a class="header-anchor" href="#打包工具选择" aria-label="Permalink to &quot;打包工具选择&quot;">​</a></h3><p>Electron 应用打包的主要工具包括 <strong>electron-builder</strong> 和 <strong>Electron Forge</strong>。electron-builder 因其丰富的功能和配置灵活性成为最流行的选择。</p><p><strong>打包工具对比示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>源代码 + 资源文件</span></span>
<span class="line"><span>    ├── electron-builder (功能全面，配置灵活)</span></span>
<span class="line"><span>    ├── Electron Forge (一体化解决方案)  </span></span>
<span class="line"><span>    └── 手动打包 (完全控制，复杂度高)</span></span></code></pre></div><h3 id="electron-builder-配置" tabindex="-1">electron-builder 配置 <a class="header-anchor" href="#electron-builder-配置" aria-label="Permalink to &quot;electron-builder 配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// electron-builder.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-builder&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appId: </span><span style="color:#9ECBFF;">&#39;com.yourcompany.yourapp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  productName: </span><span style="color:#9ECBFF;">&#39;Your Awesome App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  copyright: </span><span style="color:#9ECBFF;">\`Copyright © \${</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">} Your Company\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  directories: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    buildResources: </span><span style="color:#9ECBFF;">&#39;build&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  files: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;package.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;build/**/*&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;dist/**/*&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;node_modules/**/*&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;!node_modules/.cache&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 压缩配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  compression: </span><span style="color:#9ECBFF;">&#39;maximum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  asar: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 自动更新配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  publish: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    owner: </span><span style="color:#9ECBFF;">&#39;your-username&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    repo: </span><span style="color:#9ECBFF;">&#39;your-repo-name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    releaseType: </span><span style="color:#9ECBFF;">&#39;release&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 平台特定配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  mac: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    category: </span><span style="color:#9ECBFF;">&#39;public.app-category.productivity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: [</span><span style="color:#9ECBFF;">&#39;dmg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;zip&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;build/icons/icon.icns&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    darkModeSupport: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hardenedRuntime: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  win: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: [</span><span style="color:#9ECBFF;">&#39;nsis&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;portable&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;build/icons/icon.ico&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    publisherName: </span><span style="color:#9ECBFF;">&#39;Your Company&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  nsis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    oneClick: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    allowToChangeInstallationDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    createDesktopShortcut: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    createStartMenuShortcut: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  linux: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: [</span><span style="color:#9ECBFF;">&#39;AppImage&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;deb&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    category: </span><span style="color:#9ECBFF;">&#39;Office&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;build/icons&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h3 id="自动化构建脚本" tabindex="-1">自动化构建脚本 <a class="header-anchor" href="#自动化构建脚本" aria-label="Permalink to &quot;自动化构建脚本&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// scripts/build.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { build } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-builder&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFile, writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createHash } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BuildManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.platforms </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { platform: </span><span style="color:#9ECBFF;">&#39;win32&#39;</span><span style="color:#E1E4E8;">, arch: [</span><span style="color:#9ECBFF;">&#39;x64&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { platform: </span><span style="color:#9ECBFF;">&#39;darwin&#39;</span><span style="color:#E1E4E8;">, arch: [</span><span style="color:#9ECBFF;">&#39;x64&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;arm64&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { platform: </span><span style="color:#9ECBFF;">&#39;linux&#39;</span><span style="color:#E1E4E8;">, arch: [</span><span style="color:#9ECBFF;">&#39;x64&#39;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateVersion</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 读取 package.json</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> packageJson</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在生产环境中自动增加构建版本号</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#F97583;"> ===</span><span style="color:#9ECBFF;"> &#39;production&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> packageJson.version.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      version[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> String</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(version[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      packageJson.version </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> version.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;./package.json&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#79B8FF;">        JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(packageJson, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> packageJson.version;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> generateChecksums</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 为构建文件生成校验和</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> files</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> glob</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/**/*.{exe,dmg,AppImage,deb}&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> checksums</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> file</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> content</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">      checksums[path.</span><span style="color:#B392F0;">basename</span><span style="color:#E1E4E8;">(file)] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">        createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha256&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(content).</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;dist/checksums.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(checksums, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> buildAllPlatforms</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateVersion</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🚀 开始构建版本 \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">platform</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arch</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.platforms) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> arch) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔨 构建 \${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">a</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#B392F0;"> build</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          targets: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPlatformTarget</span><span style="color:#E1E4E8;">(platform),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [platform]: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">          config: {</span></span>
<span class="line"><span style="color:#F97583;">            ...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config,</span></span>
<span class="line"><span style="color:#E1E4E8;">            [platform]: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.config[platform] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateChecksums</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 所有平台构建完成！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getPlatformTarget</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">platform</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> targetMap</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      win32: </span><span style="color:#9ECBFF;">&#39;nsis&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      darwin: </span><span style="color:#9ECBFF;">&#39;dmg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      linux: </span><span style="color:#9ECBFF;">&#39;AppImage&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> targetMap[platform] </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;dir&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> buildManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BuildManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> buildManager;</span></span></code></pre></div><h2 id="自动更新机制" tabindex="-1">自动更新机制 <a class="header-anchor" href="#自动更新机制" aria-label="Permalink to &quot;自动更新机制&quot;">​</a></h2><h3 id="自动更新架构" tabindex="-1">自动更新架构 <a class="header-anchor" href="#自动更新架构" aria-label="Permalink to &quot;自动更新架构&quot;">​</a></h3><p>Electron 应用的自动更新主要依赖 <strong>electron-updater</strong> 模块，它提供了完整的更新检查、下载和安装功能。</p><p><strong>更新流程示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端应用</span></span>
<span class="line"><span>    ↓ 检查更新</span></span>
<span class="line"><span>更新服务器 (GitHub/GitLab/自定义)</span></span>
<span class="line"><span>    ↓ 返回更新信息</span></span>
<span class="line"><span>客户端下载更新包</span></span>
<span class="line"><span>    ↓ 验证签名</span></span>
<span class="line"><span>安装更新并重启</span></span></code></pre></div><h3 id="基本更新配置" tabindex="-1">基本更新配置 <a class="header-anchor" href="#基本更新配置" aria-label="Permalink to &quot;基本更新配置&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// update/update-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { autoUpdater } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron-updater&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { dialog, app, BrowserWindow } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { writeFile } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UpdateManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mainWindow</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mainWindow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.autoDownload </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupAutoUpdater</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupAutoUpdater</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 配置自动更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.autoDownload </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.autoDownload;</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.autoInstallOnAppQuit </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.allowDowngrade </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.fullChangelog </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置事件监听</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 记录更新状态</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新管理器初始化完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查更新中</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;checking-for-update&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;正在检查更新...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;checking-for-update&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 有可用更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-available&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`发现新版本: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-available&#39;</span><span style="color:#E1E4E8;">, info);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleUpdateAvailable</span><span style="color:#E1E4E8;">(info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 没有可用更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-not-available&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`当前已是最新版本: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-not-available&#39;</span><span style="color:#E1E4E8;">, info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 下载进度</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-progress&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-progress&#39;</span><span style="color:#E1E4E8;">, progress);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`下载进度: \${</span><span style="color:#E1E4E8;">Math</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">floor</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">progress</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">percent</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}% \`</span><span style="color:#F97583;"> +</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`(\${</span><span style="color:#E1E4E8;">progress</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">bytesPerSecond</span><span style="color:#9ECBFF;">} B/s)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新下载完成</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-downloaded&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`更新下载完成: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-downloaded&#39;</span><span style="color:#E1E4E8;">, info);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleUpdateDownloaded</span><span style="color:#E1E4E8;">(info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoUpdater.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`更新错误: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-error&#39;</span><span style="color:#E1E4E8;">, { error: error.message });</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleUpdateError</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> handleUpdateAvailable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;发现新版本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">\`发现新版本 \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}，是否立即下载？\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: info.releaseNotes </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;新版本包含功能改进和错误修复。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;立即下载&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;稍后提醒&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;忽略此版本&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cancelId: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (response) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 立即下载</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户选择下载更新&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> autoUpdater.</span><span style="color:#B392F0;">downloadUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 稍后提醒</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户选择稍后更新&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 忽略此版本</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`用户忽略版本: \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ignoreVersion</span><span style="color:#E1E4E8;">(info.version);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleUpdateDownloaded</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;更新下载完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;新版本已下载完成，是否立即重启应用？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: </span><span style="color:#9ECBFF;">&#39;应用将在重启后完成更新。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;立即重启&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;稍后重启&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cancelId: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户确认安装更新，准备重启...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoUpdater.</span><span style="color:#B392F0;">quitAndInstall</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleUpdateError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;更新错误&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;检查更新或下载更新时发生错误&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: error.message,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;重试&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkForUpdates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;开始检查更新...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> autoUpdater.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`检查更新失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  sendStatusToWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow.</span><span style="color:#B392F0;">isDestroyed</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-status&#39;</span><span style="color:#E1E4E8;">, { event, data });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logEntry</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update.log&#39;</span><span style="color:#E1E4E8;">, logEntry, { flag: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入更新日志失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`📝 \${</span><span style="color:#E1E4E8;">logEntry</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> ignoreVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 将忽略的版本保存到配置中</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ignoredVersions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getIgnoredVersions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    ignoredVersions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(version);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;update-config.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({ ignoredVersions }, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getIgnoredVersions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-config.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> config.ignoredVersions </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> UpdateManager;</span></span></code></pre></div><h3 id="渲染进程集成" tabindex="-1">渲染进程集成 <a class="header-anchor" href="#渲染进程集成" aria-label="Permalink to &quot;渲染进程集成&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer/update-ui.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> UpdateUI</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.updateRenderer </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">renderUpdateStatus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监听主进程发送的更新状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.electronAPI.</span><span style="color:#B392F0;">onUpdateStatus</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleUpdateStatus</span><span style="color:#E1E4E8;">(status, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 手动检查更新按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;check-updates&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 下载更新按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-update&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">downloadUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 安装更新按钮</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;install-update&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">installUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleUpdateStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">status</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> statusElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-status&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> progressElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;download-progress&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (status) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;checking-for-update&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;正在检查更新...&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;正在检查更新&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;update-available&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`发现新版本: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showUpdateAvailableDialog</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;update-not-available&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;当前已是最新版本&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前已是最新版本&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;download-progress&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> percent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(data.percent);</span></span>
<span class="line"><span style="color:#E1E4E8;">        progressElement.style.width </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">percent</span><span style="color:#9ECBFF;">}%\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        progressElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">percent</span><span style="color:#9ECBFF;">}%\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#9ECBFF;">          \`下载进度: \${</span><span style="color:#E1E4E8;">percent</span><span style="color:#9ECBFF;">}% (\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">formatBytes</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">bytesPerSecond</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}/s)\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;update-downloaded&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;更新下载完成，准备安装&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showUpdateReadyDialog</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;update-error&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`更新失败: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`更新失败: \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showUpdateAvailableDialog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dialog</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-dialog&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-message&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    message.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;h3&gt;发现新版本 \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;\${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">releaseNotes</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;新版本包含功能改进和错误修复。&#39;}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;update-actions&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button id=&quot;confirm-download&quot; class=&quot;btn-primary&quot;&gt;立即下载&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button id=&quot;cancel-download&quot; class=&quot;btn-secondary&quot;&gt;稍后&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;confirm-download&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.electronAPI.</span><span style="color:#B392F0;">downloadUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      dialog.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cancel-download&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dialog.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showUpdateReadyDialog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dialog</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-dialog&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update-message&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    message.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;h3&gt;更新下载完成&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;版本 \${</span><span style="color:#E1E4E8;">info</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已下载完成，可以安装。&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;update-actions&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button id=&quot;confirm-install&quot; class=&quot;btn-primary&quot;&gt;立即重启并安装&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button id=&quot;delay-install&quot; class=&quot;btn-secondary&quot;&gt;稍后重启&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;block&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;confirm-install&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.electronAPI.</span><span style="color:#B392F0;">installUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;delay-install&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dialog.style.display </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  formatBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (bytes </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;0 B&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sizes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;KB&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;MB&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;GB&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> i</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(bytes) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(k));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> parseFloat</span><span style="color:#E1E4E8;">((bytes </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(k, i)).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39; &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> sizes[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;info&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> notification</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    notification.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`notification notification-\${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    notification.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(notification);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      notification.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkForUpdates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> window.electronAPI.</span><span style="color:#B392F0;">checkForUpdates</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showNotification</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`检查更新失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> UpdateUI;</span></span></code></pre></div><h2 id="版本管理与发布策略" tabindex="-1">版本管理与发布策略 <a class="header-anchor" href="#版本管理与发布策略" aria-label="Permalink to &quot;版本管理与发布策略&quot;">​</a></h2><h3 id="版本控制策略" tabindex="-1">版本控制策略 <a class="header-anchor" href="#版本控制策略" aria-label="Permalink to &quot;版本控制策略&quot;">​</a></h3><p>Electron 遵循语义化版本控制，并与 Chromium 发布周期保持同步。</p><p><strong>版本支持时间线示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Electron 版本 → Chromium 版本 → Node.js 版本</span></span>
<span class="line"><span>    ↓               ↓               ↓</span></span>
<span class="line"><span>支持周期 →   ~6个月支持  →  安全更新  →  终止支持</span></span></code></pre></div><h3 id="发布渠道管理" tabindex="-1">发布渠道管理 <a class="header-anchor" href="#发布渠道管理" aria-label="Permalink to &quot;发布渠道管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// config/release-channels.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ReleaseChannelManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.channels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stable: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;stable&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateUrl: </span><span style="color:#9ECBFF;">&#39;https://github.com/your-username/your-repo/releases/latest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prerelease: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoUpdate: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      beta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;beta&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateUrl: </span><span style="color:#9ECBFF;">&#39;https://github.com/your-username/your-repo/releases/beta&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prerelease: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoUpdate: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      development: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;dev&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateUrl: </span><span style="color:#9ECBFF;">&#39;https://github.com/your-username/your-repo/releases/dev&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        prerelease: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoUpdate: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getCurrentChannel</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 从配置文件中获取当前渠道</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getAppConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> config.updateChannel </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;stable&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> switchChannel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channelName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.channels[channelName]) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知的发布渠道: \${</span><span style="color:#E1E4E8;">channelName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> channel</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.channels[channelName];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新自动更新配置</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateUpdaterConfig</span><span style="color:#E1E4E8;">(channel);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 记录渠道切换</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logChannelSwitch</span><span style="color:#E1E4E8;">(channelName);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔄 已切换到 \${</span><span style="color:#E1E4E8;">channelName</span><span style="color:#9ECBFF;">} 渠道\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> channel;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkChannelUpdates</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentChannel</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentChannel</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> channel</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.channels[currentChannel];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">channel.autoUpdate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🔕 \${</span><span style="color:#E1E4E8;">currentChannel</span><span style="color:#9ECBFF;">} 渠道已禁用自动更新\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> updateInfo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fetchUpdateInfo</span><span style="color:#E1E4E8;">(channel);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">validateUpdateCompatibility</span><span style="color:#E1E4E8;">(updateInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`检查 \${</span><span style="color:#E1E4E8;">currentChannel</span><span style="color:#9ECBFF;">} 渠道更新失败:\`</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> fetchUpdateInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(channel.updateUrl);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">response.ok) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`获取更新信息失败: \${</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">statusText</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      version: data.tag_name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      releaseNotes: data.body,</span></span>
<span class="line"><span style="color:#E1E4E8;">      publishDate: data.published_at,</span></span>
<span class="line"><span style="color:#E1E4E8;">      downloadUrl: data.assets[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]?.browser_download_url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      channel: channel.name</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  validateUpdateCompatibility</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> app.</span><span style="color:#B392F0;">getVersion</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentPlatform</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.platform;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentArch</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.arch;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查版本兼容性</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isVersionCompatible</span><span style="color:#E1E4E8;">(updateInfo.version, currentVersion)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`版本不兼容: \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 检查平台兼容性</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isPlatformSupported</span><span style="color:#E1E4E8;">(updateInfo, currentPlatform, currentArch)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;平台架构不支持&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> updateInfo;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isVersionCompatible</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVersion</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">currentVersion</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实现版本兼容性检查逻辑</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newParts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> newVersion.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentParts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentVersion.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(Number);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 主要版本号不同时不兼容</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> newParts[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> currentParts[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isPlatformSupported</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">platform</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arch</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查更新是否支持当前平台和架构</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> supportedPatterns</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`\${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">arch</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      \`\${</span><span style="color:#E1E4E8;">platform</span><span style="color:#9ECBFF;">}-universal\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;multi-platform&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> supportedPatterns.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pattern</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      updateInfo.downloadUrl.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(pattern)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getAppConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app-config.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { updateChannel: </span><span style="color:#9ECBFF;">&#39;stable&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateUpdaterConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> config</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;generic&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: channel.updateUrl,</span></span>
<span class="line"><span style="color:#E1E4E8;">      channel: channel.name</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;updater-config.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(config, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> logChannelSwitch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">channelName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logEntry</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timestamp: </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      previousChannel: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurrentChannel</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      newChannel: channelName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      version: app.</span><span style="color:#B392F0;">getVersion</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#B392F0;"> writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;channel-switch.log&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(logEntry) </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">      flag: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> channelManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ReleaseChannelManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="第三方更新服务" tabindex="-1">第三方更新服务 <a class="header-anchor" href="#第三方更新服务" aria-label="Permalink to &quot;第三方更新服务&quot;">​</a></h2><h3 id="集成-electron-update-sdk" tabindex="-1">集成 electron-update-sdk <a class="header-anchor" href="#集成-electron-update-sdk" aria-label="Permalink to &quot;集成 electron-update-sdk&quot;">​</a></h3><p>对于需要更高级更新功能的场景，可以使用第三方封装库。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// services/update-service.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> updateServiceMain </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@bugonly/electron-update-sdk/libs/main&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> updateServicePreload </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@bugonly/electron-update-sdk/libs/preload&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> EnhancedUpdateService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mainWindow</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mainWindow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mainWindow;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupUpdateService</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupUpdateService</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置更新服务</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      feedUrl: </span><span style="color:#9ECBFF;">&#39;https://your-update-server.com/updates&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      autoDownload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enableProgress: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      logger: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getLogger</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置自定义事件处理</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupCustomEventHandlers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupCustomEventHandlers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查更新中</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">onCheckingUpdate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SDK: 开始检查更新&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sdk-update-status&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;checking&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新可用</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">onNeedUpdate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`SDK: 发现新版本 \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sdk-update-status&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;available&#39;</span><span style="color:#E1E4E8;">, updateInfo);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showSDKUpdateDialog</span><span style="color:#E1E4E8;">(updateInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 下载进度</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">onDownloading</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">progress</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sdk-download-progress&#39;</span><span style="color:#E1E4E8;">, progress);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 下载完成</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">onDownloadSuccess</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SDK: 更新下载完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sdk-update-status&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;downloaded&#39;</span><span style="color:#E1E4E8;">, updateInfo);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showSDKInstallDialog</span><span style="color:#E1E4E8;">(updateInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 更新失败</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateServiceMain.</span><span style="color:#B392F0;">onUpdateFail</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`SDK: 更新失败 \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sdk-update-status&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showSDKUpdateDialog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;发现新版本&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">\`发现新版本 \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: </span><span style="color:#9ECBFF;">&#39;是否立即下载并安装更新？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;立即更新&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;稍后提醒&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cancelId: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateServiceMain.</span><span style="color:#B392F0;">confirmDownload</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  showSDKInstallDialog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    dialog.</span><span style="color:#B392F0;">showMessageBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainWindow, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;更新准备就绪&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">\`版本 \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已下载完成\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: </span><span style="color:#9ECBFF;">&#39;应用将在重启后完成更新。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      buttons: [</span><span style="color:#9ECBFF;">&#39;立即重启&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;稍后重启&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultId: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      cancelId: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (response </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        updateServiceMain.</span><span style="color:#B392F0;">confirmUpdate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getLogger</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      info</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`ℹ️ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">      error</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">      warn</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️ \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">      debug</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🐛 \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  logUpdateEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 预加载脚本中暴露 API</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> exposeUpdateAPI</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;electronUpdateSDK&#39;</span><span style="color:#E1E4E8;">, updateServicePreload.content);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> EnhancedUpdateService;</span></span></code></pre></div><h2 id="安全与验证" tabindex="-1">安全与验证 <a class="header-anchor" href="#安全与验证" aria-label="Permalink to &quot;安全与验证&quot;">​</a></h2><h3 id="代码签名与验证" tabindex="-1">代码签名与验证 <a class="header-anchor" href="#代码签名与验证" aria-label="Permalink to &quot;代码签名与验证&quot;">​</a></h3><p>代码签名是发布过程中的关键安全步骤。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// security/signing-manager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createVerify } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;crypto&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, existsSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SigningManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.publicKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadPublicKey</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> verifyUpdateSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateFilePath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signatureFilePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> updateData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(updateFilePath);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> signature</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(signatureFilePath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> verifier</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createVerify</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;SHA256&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      verifier.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(updateData);</span></span>
<span class="line"><span style="color:#E1E4E8;">      verifier.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> isValid</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> verifier.</span><span style="color:#B392F0;">verify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.publicKey, signature, </span><span style="color:#9ECBFF;">&#39;base64&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isValid) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;更新文件签名验证失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 更新文件签名验证成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 更新文件签名验证失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  loadPublicKey</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> keyPath</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;security/public-key.pem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(keyPath)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;公钥文件不存在&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> readFileSync</span><span style="color:#E1E4E8;">(keyPath, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> validateUpdateIntegrity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 验证版本号格式</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isValidVersion</span><span style="color:#E1E4E8;">(updateInfo.version)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无效的版本号: \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证发布时间</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isValidReleaseDate</span><span style="color:#E1E4E8;">(updateInfo.publishDate)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无效的发布时间: \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">publishDate</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证文件大小</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isValidFileSize</span><span style="color:#E1E4E8;">(updateInfo.fileSize)) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无效的文件大小: \${</span><span style="color:#E1E4E8;">updateInfo</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">fileSize</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isValidVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> versionRegex</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> /</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">(-</span><span style="color:#79B8FF;">[a-z0-9]</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> versionRegex.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(version);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isValidReleaseDate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dateString</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> releaseDate</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(dateString);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> now</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 发布时间不能是未来时间</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (releaseDate </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> now) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 发布时间不能早于一年前</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oneYearAgo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    oneYearAgo.</span><span style="color:#B392F0;">setFullYear</span><span style="color:#E1E4E8;">(oneYearAgo.</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> releaseDate </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> oneYearAgo;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isValidFileSize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fileSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 文件大小应在 1MB 到 500MB 之间</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> minSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 1MB</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> maxSize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 500</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 500MB</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> fileSize </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> minSize </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> fileSize </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxSize;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createIntegrityCheck</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateFilePath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> readFile</span><span style="color:#E1E4E8;">(updateFilePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hashes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sha256: </span><span style="color:#B392F0;">createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha256&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(data).</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      sha512: </span><span style="color:#B392F0;">createHash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sha512&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(data).</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: data.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hashes;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> signingManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SigningManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h3 id="安全更新策略" tabindex="-1">安全更新策略 <a class="header-anchor" href="#安全更新策略" aria-label="Permalink to &quot;安全更新策略&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// security/update-policy.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UpdatePolicyManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.policies </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      security: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        priority: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoDownload: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoInstall: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxRetries: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      feature: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        priority: </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoDownload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoInstall: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxRetries: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      maintenance: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        priority: </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoDownload: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoInstall: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxRetries: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  determineUpdateType</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">version</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">releaseNotes</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> updateInfo;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isSecurityUpdate</span><span style="color:#E1E4E8;">(releaseNotes)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;security&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isFeatureUpdate</span><span style="color:#E1E4E8;">(releaseNotes)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;feature&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;maintenance&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isSecurityUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">releaseNotes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> securityKeywords</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;security&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;vulnerability&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;cve&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;patch&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;fix&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;protection&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;safe&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;critical&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> notes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> releaseNotes.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> securityKeywords.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keyword</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> notes.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(keyword));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  isFeatureUpdate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">releaseNotes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> featureKeywords</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;feature&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;new&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;enhancement&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;improvement&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;added&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;introduced&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;functionality&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> notes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> releaseNotes.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> featureKeywords.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keyword</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> notes.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(keyword));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getUpdatePolicy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.policies[updateType] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.policies.maintenance;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> shouldAutoInstall</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">updateInfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> updateType</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">determineUpdateType</span><span style="color:#E1E4E8;">(updateInfo);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> policy</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getUpdatePolicy</span><span style="color:#E1E4E8;">(updateType);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">policy.autoInstall) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查当前网络状态</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> networkState</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkNetworkState</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">networkState.isStable) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查系统负载</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> systemLoad</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkSystemLoad</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (systemLoad.isHigh) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查用户活动状态</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> userActivity</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkUserActivity</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (userActivity.isActive) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkNetworkState</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> response</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.google.com&#39;</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;HEAD&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isStable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: navigator.connection?.effectiveType </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;unknown&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        isStable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;offline&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkSystemLoad</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 简化的系统负载检查</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryUsage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> process.</span><span style="color:#B392F0;">memoryUsage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> memoryPercent</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> memoryUsage.heapUsed </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> memoryUsage.heapTotal;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isHigh: memoryPercent </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0.8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      memoryUsage: memoryPercent</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  checkUserActivity</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查用户最近是否有活动</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lastActivity</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getLastUserActivity</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> inactiveThreshold</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 60</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 5分钟</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isActive: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastActivity </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> inactiveThreshold,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastActivity</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getLastUserActivity</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 从应用状态获取最后活动时间</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app-state.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> state.lastUserActivity </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> const</span><span style="color:#79B8FF;"> policyManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> UpdatePolicyManager</span><span style="color:#E1E4E8;">();</span></span></code></pre></div>`,41)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
