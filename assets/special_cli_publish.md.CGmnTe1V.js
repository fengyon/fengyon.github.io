import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"发布","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node.js 命令行发布概述","slug":"node-js-命令行发布概述","link":"#node-js-命令行发布概述","children":[]},{"level":2,"title":"版本管理与策略","slug":"版本管理与策略","link":"#版本管理与策略","children":[{"level":3,"title":"语义化版本控制","slug":"语义化版本控制","link":"#语义化版本控制","children":[]},{"level":3,"title":"预发布版本管理","slug":"预发布版本管理","link":"#预发布版本管理","children":[]}]},{"level":2,"title":"npm 包发布配置","slug":"npm-包发布配置","link":"#npm-包发布配置","children":[{"level":3,"title":"package.json 发布优化","slug":"package-json-发布优化","link":"#package-json-发布优化","children":[]},{"level":3,"title":"发布前验证","slug":"发布前验证","link":"#发布前验证","children":[]}]},{"level":2,"title":"发布执行与自动化","slug":"发布执行与自动化","link":"#发布执行与自动化","children":[{"level":3,"title":"npm 发布流程","slug":"npm-发布流程","link":"#npm-发布流程","children":[]},{"level":3,"title":"多注册表发布","slug":"多注册表发布","link":"#多注册表发布","children":[]}]},{"level":2,"title":"发布后维护","slug":"发布后维护","link":"#发布后维护","children":[{"level":3,"title":"版本分发管理","slug":"版本分发管理","link":"#版本分发管理","children":[]},{"level":3,"title":"弃用管理","slug":"弃用管理","link":"#弃用管理","children":[]}]}],"relativePath":"special/cli/publish.md","filePath":"special/cli/publish.md"}'),o={name:"special/cli/publish.md"};function e(E,s,c,t,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/cli/publish.md for this page in Markdown format</div><h1 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h1><h2 id="node-js-命令行发布概述" tabindex="-1">Node.js 命令行发布概述 <a class="header-anchor" href="#node-js-命令行发布概述" aria-label="Permalink to &quot;Node.js 命令行发布概述&quot;">​</a></h2><p>在 Node.js 命令行工具开发中，发布是将构建完成的工具交付给最终用户的关键环节。一个完整的发布流程涉及版本管理、包分发、安装优化和更新维护等多个方面，直接影响工具的可达性和用户体验。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>发布流程全景图：</span></span>
<span class="line"><span>代码完成 → 版本管理 → 构建验证 → 包发布 → 安装测试 → 更新维护</span></span>
<span class="line"><span>    ↓          ↓          ↓          ↓          ↓          ↓</span></span>
<span class="line"><span>功能实现   语义版本   质量检查   npm注册表   用户环境   持续支持</span></span></code></pre></div><h2 id="版本管理与策略" tabindex="-1">版本管理与策略 <a class="header-anchor" href="#版本管理与策略" aria-label="Permalink to &quot;版本管理与策略&quot;">​</a></h2><h3 id="语义化版本控制" tabindex="-1">语义化版本控制 <a class="header-anchor" href="#语义化版本控制" aria-label="Permalink to &quot;语义化版本控制&quot;">​</a></h3><p>语义化版本 (SemVer) 是行业标准，通过版本号传达变更的性质和影响范围。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// version-strategy.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packagePath </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;package.json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 语义版本解析</span></span>
<span class="line"><span style="color:#B392F0;">  parseVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">major</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">minor</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">patch</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">preRelease</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> version.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\d.-]</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      major: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(major),</span></span>
<span class="line"><span style="color:#E1E4E8;">      minor: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(minor),</span></span>
<span class="line"><span style="color:#E1E4E8;">      patch: </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(patch),</span></span>
<span class="line"><span style="color:#E1E4E8;">      preRelease: preRelease.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 版本升级策略</span></span>
<span class="line"><span style="color:#B392F0;">  bumpVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">preReleaseId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parseVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.version);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;major&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">major</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}.0.0\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;minor&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">major</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">minor</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}.0\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        newVersion </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">major</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">minor</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">patch</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`无效的版本类型: \${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 预发布版本处理</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (preReleaseId) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      newVersion </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`-\${</span><span style="color:#E1E4E8;">preReleaseId</span><span style="color:#9ECBFF;">}.0\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 版本依赖分析</span></span>
<span class="line"><span style="color:#B392F0;">  analyzeDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">dependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#79B8FF;">peerDependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#79B8FF;">devDependencies</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {} } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> analysis</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      production: Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(dependencies).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        range,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVersionConstraintType</span><span style="color:#E1E4E8;">(range)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })),</span></span>
<span class="line"><span style="color:#E1E4E8;">      peer: Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(peerDependencies).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        range,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVersionConstraintType</span><span style="color:#E1E4E8;">(range)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })),</span></span>
<span class="line"><span style="color:#E1E4E8;">      development: Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(devDependencies).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name,</span></span>
<span class="line"><span style="color:#E1E4E8;">        range,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVersionConstraintType</span><span style="color:#E1E4E8;">(range)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }))</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> analysis;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getVersionConstraintType</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (range </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;*&#39;</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> range </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;any&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (range.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;^&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;compatible&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (range.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;~&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;patch&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (range.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;||&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;multiple&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (range.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#9ECBFF;"> &#39;range&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> &#39;exact&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 执行版本更新</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">preReleaseId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newVersion</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bumpVersion</span><span style="color:#E1E4E8;">(type, preReleaseId);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oldVersion</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.version;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🆙 版本更新: \${</span><span style="color:#E1E4E8;">oldVersion</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">newVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新 package.json</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData.version </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVersion;</span></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新 changelog</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateChangelog</span><span style="color:#E1E4E8;">(newVersion);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { oldVersion, newVersion };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateChangelog</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 这里可以集成 conventional-changelog</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> changelogEntry</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`## \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} (\${</span></span>
<span class="line"><span style="color:#F97583;">      new</span><span style="color:#B392F0;"> Date</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">toISOString</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">split</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;T&#39;</span><span style="color:#9ECBFF;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">]</span></span>
<span class="line"><span style="color:#9ECBFF;">    })</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">* 功能更新和修复</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 在实际项目中，这里会读取现有 CHANGELOG.md 并插入新条目</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📝 更新日志条目已准备:&#39;</span><span style="color:#E1E4E8;">, changelogEntry);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> versionManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> VersionManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> versionInfo</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> versionManager.</span><span style="color:#B392F0;">updateVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minor&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;版本信息:&#39;</span><span style="color:#E1E4E8;">, versionInfo);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> depsAnalysis</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> versionManager.</span><span style="color:#B392F0;">analyzeDependencies</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;依赖分析:&#39;</span><span style="color:#E1E4E8;">, depsAnalysis);</span></span></code></pre></div><h3 id="预发布版本管理" tabindex="-1">预发布版本管理 <a class="header-anchor" href="#预发布版本管理" aria-label="Permalink to &quot;预发布版本管理&quot;">​</a></h3><p>预发布版本用于测试和早期用户反馈，不破坏稳定版本流。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// pre-release.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PreReleaseManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 创建预发布版本</span></span>
<span class="line"><span style="color:#B392F0;">  createPreRelease</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;beta&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> current</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.version;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> preReleaseVersion</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">current</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">type</span><span style="color:#9ECBFF;">}.\${</span><span style="color:#E1E4E8;">Date</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">now</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用 npm version 但不提交</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm version \${</span><span style="color:#E1E4E8;">preReleaseVersion</span><span style="color:#9ECBFF;">} --no-git-tag-version\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🧪 创建预发布版本: \${</span><span style="color:#E1E4E8;">preReleaseVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> preReleaseVersion;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 发布预发布版本</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> publishPreRelease</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;beta&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createPreRelease</span><span style="color:#E1E4E8;">(tag);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🚀 发布预发布版本到 npm (tag: \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">})...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm publish --tag \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 预发布版本 \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已发布\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> version;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;❌ 预发布版本发布失败:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 从预发布升级到稳定版</span></span>
<span class="line"><span style="color:#B392F0;">  promoteToStable</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">preReleaseVersion</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stableVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> preReleaseVersion.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🎯 将预发布版本 \${</span><span style="color:#E1E4E8;">preReleaseVersion</span><span style="color:#9ECBFF;">} 升级为稳定版 \${</span><span style="color:#E1E4E8;">stableVersion</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 更新版本号</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm version \${</span><span style="color:#E1E4E8;">stableVersion</span><span style="color:#9ECBFF;">} --no-git-tag-version\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 重新发布为 latest</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm publish --tag latest&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> stableVersion;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> preReleaseManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PreReleaseManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建并发布 beta 版本</span></span>
<span class="line"><span style="color:#6A737D;">// const betaVersion = await preReleaseManager.publishPreRelease(&#39;beta&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当测试通过后，升级到稳定版</span></span>
<span class="line"><span style="color:#6A737D;">// const stableVersion = preReleaseManager.promoteToStable(betaVersion);</span></span></code></pre></div><h2 id="npm-包发布配置" tabindex="-1">npm 包发布配置 <a class="header-anchor" href="#npm-包发布配置" aria-label="Permalink to &quot;npm 包发布配置&quot;">​</a></h2><h3 id="package-json-发布优化" tabindex="-1">package.json 发布优化 <a class="header-anchor" href="#package-json-发布优化" aria-label="Permalink to &quot;package.json 发布优化&quot;">​</a></h3><p>精心配置的 package.json 是成功发布的关键。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package-optimization.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { readFileSync, writeFileSync, existsSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PackageOptimizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packagePath </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;package.json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 优化发布配置</span></span>
<span class="line"><span style="color:#B392F0;">  optimizeForPublish</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> optimized</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 关键发布字段</span></span>
<span class="line"><span style="color:#E1E4E8;">      files: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureFilesField</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      main: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureMainField</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      bin: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureBinField</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      exports: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureExportsField</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 发布元数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      keywords: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureKeywords</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      homepage: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.homepage </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`https://npmjs.com/package/\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      repository: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureRepository</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      bugs: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureBugs</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 发布配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      publishConfig: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensurePublishConfig</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 引擎要求</span></span>
<span class="line"><span style="color:#E1E4E8;">      engines: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureEngines</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      os: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureOS</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      cpu: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ensureCPU</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packagePath, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(optimized, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ package.json 已优化用于发布&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> optimized;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureFilesField</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> defaultFiles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;dist/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bin/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;README.md&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;LICENSE&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentFiles</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.files </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 合并并去重</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> merged</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">currentFiles, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">defaultFiles])];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证文件是否存在</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> missing</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> merged.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#F97583;"> =&gt;</span><span style="color:#F97583;"> !</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(file.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)));</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (missing.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;⚠️  以下文件在发布列表中但不存在:&#39;</span><span style="color:#E1E4E8;">, missing);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> merged;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureMainField</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.main </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> existsSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/cli.cjs&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;./dist/cli.cjs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.main;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureBinField</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.bin </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> existsSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bin/cli.mjs&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.name]: </span><span style="color:#9ECBFF;">&#39;./bin/cli.mjs&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.bin;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureExportsField</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;.&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        import: </span><span style="color:#9ECBFF;">&#39;./dist/cli.mjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        require: </span><span style="color:#9ECBFF;">&#39;./dist/cli.cjs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;./dist/cli.mjs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;./package.json&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;./package.json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 如果存在样式文件，添加样式导出</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/style.css&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#79B8FF;">      exports</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;./style.css&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;./dist/style.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> exports</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureKeywords</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> baseKeywords</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;cli&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;command-line&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;tool&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentKeywords</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.keywords </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">currentKeywords, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">baseKeywords])];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureRepository</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.repository) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.repository;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 尝试从 git 配置推断</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> remoteUrl</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;git config --get remote.origin.url&#39;</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (remoteUrl) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;git&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          url: remoteUrl.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;git@github.com:&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;https://github.com/&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 忽略错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensurePublishConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> defaultConfig</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      access: </span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      registry: </span><span style="color:#9ECBFF;">&#39;https://registry.npmjs.org/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">defaultConfig, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.publishConfig };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  ensureEngines</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.engines </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">      node: </span><span style="color:#9ECBFF;">&#39;&gt;=18.0.0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      npm: </span><span style="color:#9ECBFF;">&#39;&gt;=8.0.0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 操作系统兼容性声明</span></span>
<span class="line"><span style="color:#B392F0;">  ensureOS</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.os </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;darwin&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// macOS</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;linux&#39;</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// Linux</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;win32&#39;</span><span style="color:#6A737D;">    // Windows</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // CPU 架构兼容性声明</span></span>
<span class="line"><span style="color:#B392F0;">  ensureCPU</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.cpu </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;x64&#39;</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// 64位 Intel/AMD</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;arm64&#39;</span><span style="color:#6A737D;">    // Apple Silicon, ARM</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizer</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PackageOptimizer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> optimizedPackage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> optimizer.</span><span style="color:#B392F0;">optimizeForPublish</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;优化后的包配置:&#39;</span><span style="color:#E1E4E8;">, optimizedPackage);</span></span></code></pre></div><h3 id="发布前验证" tabindex="-1">发布前验证 <a class="header-anchor" href="#发布前验证" aria-label="Permalink to &quot;发布前验证&quot;">​</a></h3><p>确保发布包的质量和完整性。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// pre-publish-validation.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { existsSync, readFileSync, statSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:fs&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PrePublishValidator</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> runAllChecks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔍 运行发布前验证...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      passed: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      failed: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      warnings: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 运行所有检查</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkPackageSize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkRequiredFiles</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkBuildArtifacts</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkDependencies</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkLicense</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkReadme</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkExecutablePermissions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 汇总结果</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.checks) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (check.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.passed.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (check.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.failed.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results.warnings.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">printResults</span><span style="color:#E1E4E8;">(results);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkPackageSize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;包大小检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 估算包大小</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> totalSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> files</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.files </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> filePattern</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(filePattern)) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> statSync</span><span style="color:#E1E4E8;">(filePattern);</span></span>
<span class="line"><span style="color:#E1E4E8;">          totalSize </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> stats.size;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> sizeMB</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> totalSize </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 1024</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.details </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`估算大小: \${</span><span style="color:#E1E4E8;">sizeMB</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} MB\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (sizeMB </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 50</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;包大小超过 50MB，可能影响安装体验&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`大小检查失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkRequiredFiles</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;必要文件检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> requiredFiles</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;package.json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;README.md&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;LICENSE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.files </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [])</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> missing</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> file</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> requiredFiles) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(file)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        missing.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (missing.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`缺少必要文件: \${</span><span style="color:#E1E4E8;">missing</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;所有必要文件都存在&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkBuildArtifacts</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;构建产物检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查构建产物是否存在且可执行</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> binPath</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> typeof</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.bin </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        ?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.bin </span></span>
<span class="line"><span style="color:#F97583;">        :</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.bin </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {})[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (binPath </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> existsSync</span><span style="color:#E1E4E8;">(binPath)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 验证可执行文件</span></span>
<span class="line"><span style="color:#B392F0;">        execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`node \${</span><span style="color:#E1E4E8;">binPath</span><span style="color:#9ECBFF;">} --version\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;构建产物验证通过&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;可执行文件不存在或配置错误&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`构建产物验证失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkDependencies</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;依赖检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查是否有未声明的依赖</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npx depcheck&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;依赖关系正常&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;依赖检查发现警告，请检查 depcheck 输出&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkLicense</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;许可证检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.license) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;failed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;package.json 中未声明许可证&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">existsSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;LICENSE&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;已声明许可证但缺少 LICENSE 文件&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`许可证配置正常: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">license</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkExecutablePermissions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> check</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;可执行权限检查&#39;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&#39;pending&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> binPath</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> typeof</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.bin </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        ?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.packageData.bin </span></span>
<span class="line"><span style="color:#F97583;">        :</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageData.bin </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {})[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (binPath </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#B392F0;"> existsSync</span><span style="color:#E1E4E8;">(binPath)) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 在 Unix 系统上检查执行权限</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> stats</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> statSync</span><span style="color:#E1E4E8;">(binPath);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> hasExecutePermission</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (stats.mode </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0o111</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (hasExecutePermission) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;可执行文件权限正确&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;可执行文件缺少执行权限&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;passed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;无可执行文件需要检查&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;warning&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      check.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`权限检查失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.checks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(check);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  printResults</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">📊 发布前验证结果:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">✅ 通过的检查:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    results.passed.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">check</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  ✓ \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (results.warnings.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">⚠️  警告:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.warnings.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">check</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  ! \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (results.failed.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">❌ 失败的检查:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      results.failed.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">check</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  ✗ \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">check</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">🚫 发布被阻止，请修复上述问题后重试&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">🎉 所有检查通过，可以发布！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> validator</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PrePublishValidator</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> validator.</span><span style="color:#B392F0;">runAllChecks</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="发布执行与自动化" tabindex="-1">发布执行与自动化 <a class="header-anchor" href="#发布执行与自动化" aria-label="Permalink to &quot;发布执行与自动化&quot;">​</a></h2><h3 id="npm-发布流程" tabindex="-1">npm 发布流程 <a class="header-anchor" href="#npm-发布流程" aria-label="Permalink to &quot;npm 发布流程&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// publish-executor.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRequire } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> require</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createRequire</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> PublishExecutor</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dryRun: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tag: </span><span style="color:#9ECBFF;">&#39;latest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      otp: process.env.</span><span style="color:#79B8FF;">NPM_OTP</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#F97583;">      ...</span><span style="color:#E1E4E8;">options</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageData </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./package.json&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> publish</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🚀 开始发布 \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 构建发布命令</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> publishCommand </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;npm publish&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.tag </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.options.tag </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;latest&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        publishCommand </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \` --tag \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">options</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.otp) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        publishCommand </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \` --otp \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">options</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">otp</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.dryRun) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        publishCommand </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> &#39; --dry-run&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🧪 干运行模式，不会实际发布&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 执行发布</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`执行: \${</span><span style="color:#E1E4E8;">publishCommand</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(publishCommand, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;发布输出:&#39;</span><span style="color:#E1E4E8;">, output);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.dryRun) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 成功发布 \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">postPublishTasks</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 发布失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> postPublishTasks</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">🔧 执行发布后任务...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tasks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">verifyPackageOnNPM</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createGitTag</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateDistributionTags</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">notifyTeam</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> task</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> tasks) {</span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> task;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`发布后任务警告: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> verifyPackageOnNPM</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🔍 验证包在 npm 上的可用性...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用 npm view 检查包信息</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm view \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} version\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 包在 npm 上可访问&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;包在 npm 上不可访问，可能需要等待同步&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> createGitTag</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🏷️  创建 Git 标签...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> tagName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`v\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`git tag -a \${</span><span style="color:#E1E4E8;">tagName</span><span style="color:#9ECBFF;">} -m &quot;Release \${</span><span style="color:#E1E4E8;">tagName</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;git push --tags&#39;</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ Git 标签 \${</span><span style="color:#E1E4E8;">tagName</span><span style="color:#9ECBFF;">} 已创建并推送\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Git 标签创建失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> updateDistributionTags</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.tag </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;latest&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📢 更新最新版本标签...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        // 确保最新版本被标记为 latest</span></span>
<span class="line"><span style="color:#B392F0;">        execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm dist-tag add \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} latest\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;✅ 最新版本标签已更新&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`分布标签更新失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> notifyTeam</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;📢 发送发布通知...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 这里可以集成 Slack、Discord 或邮件通知</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`🎉 \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} v\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已发布！\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 实际项目中这里会有具体的通知逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> publisher</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> PublishExecutor</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  dryRun: process.argv.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;--dry-run&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  tag: process.env.</span><span style="color:#79B8FF;">NPM_TAG</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;latest&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> success</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> publisher.</span><span style="color:#B392F0;">publish</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(success </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="多注册表发布" tabindex="-1">多注册表发布 <a class="header-anchor" href="#多注册表发布" aria-label="Permalink to &quot;多注册表发布&quot;">​</a></h3><p>支持发布到多个包注册表 (npm、GitHub Packages 等)。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// multi-registry-publish.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MultiRegistryPublisher</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.registries </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      npm: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        command: </span><span style="color:#9ECBFF;">&#39;npm publish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        registry: </span><span style="color:#9ECBFF;">&#39;https://registry.npmjs.org/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        requiredAuth: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      github: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        command: </span><span style="color:#9ECBFF;">&#39;npm publish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        registry: </span><span style="color:#9ECBFF;">&#39;https://npm.pkg.github.com/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        requiredAuth: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        scope: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      verdaccio: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        command: </span><span style="color:#9ECBFF;">&#39;npm publish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        registry: </span><span style="color:#9ECBFF;">&#39;http://localhost:4873/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        requiredAuth: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> publishToAll</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">registries</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;npm&#39;</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> registryName</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> registries) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">🚀 发布到 \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">}...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> success</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">publishToRegistry</span><span style="color:#E1E4E8;">(registryName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        results[registryName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { success, error: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 成功发布到 \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        results[registryName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 发布到 \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">} 失败:\`</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">printPublishSummary</span><span style="color:#E1E4E8;">(results);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> results;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> publishToRegistry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">registryName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> registry</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.registries[registryName];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">registry) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未知的注册表: \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 检查认证</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (registry.requiredAuth) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkAuth</span><span style="color:#E1E4E8;">(registryName, registry.registry);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 构建发布命令</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> command </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> registry.command;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (registry.registry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      command </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \` --registry \${</span><span style="color:#E1E4E8;">registry</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">registry</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (registry.scope) {</span></span>
<span class="line"><span style="color:#6A737D;">      // GitHub Packages 需要 scope</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> packageName</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;npm pkg get name&#39;</span><span style="color:#E1E4E8;">, { encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> }));</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">packageName.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">} 需要作用域包名称 (如 @username/package)\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 执行发布</span></span>
<span class="line"><span style="color:#B392F0;">    execSync</span><span style="color:#E1E4E8;">(command, { stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkAuth</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">registryName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">registryUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查是否已登录</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm whoami --registry \${</span><span style="color:#E1E4E8;">registryUrl</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 已认证到 \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`未认证到 \${</span><span style="color:#E1E4E8;">registryName</span><span style="color:#9ECBFF;">}，请先运行: npm login --registry=\${</span><span style="color:#E1E4E8;">registryUrl</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  printPublishSummary</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">results</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">📊 多注册表发布摘要:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> successful</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(results).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> result.success);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> failed</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(results).</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">result.success);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (successful.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">✅ 成功发布的注册表:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      successful.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  ✓ \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (failed.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">❌ 发布失败的注册表:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      failed.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`  ✗ \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">result</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">🎯 总体结果: \${</span><span style="color:#E1E4E8;">successful</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">Object</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">keys</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">results</span><span style="color:#9ECBFF;">).</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 成功\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 配置多个注册表</span></span>
<span class="line"><span style="color:#B392F0;">  setupRegistryConfigs</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> configs</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;registry&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://registry.npmjs.org/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@mycompany:registry&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://npm.pkg.github.com/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;//registry.npmjs.org/:_authToken&#39;</span><span style="color:#E1E4E8;">: process.env.</span><span style="color:#79B8FF;">NPM_TOKEN</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;//npm.pkg.github.com/:_authToken&#39;</span><span style="color:#E1E4E8;">: process.env.</span><span style="color:#79B8FF;">GITHUB_TOKEN</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(configs)) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (value) {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm config set \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { stdio: </span><span style="color:#9ECBFF;">&#39;pipe&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 配置: \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">} = \${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️  配置失败: \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> multiPublisher</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MultiRegistryPublisher</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置注册表</span></span>
<span class="line"><span style="color:#E1E4E8;">multiPublisher.</span><span style="color:#B392F0;">setupRegistryConfigs</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发布到多个注册表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> results</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> multiPublisher.</span><span style="color:#B392F0;">publishToAll</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;npm&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">]);</span></span></code></pre></div><h2 id="发布后维护" tabindex="-1">发布后维护 <a class="header-anchor" href="#发布后维护" aria-label="Permalink to &quot;发布后维护&quot;">​</a></h2><h3 id="版本分发管理" tabindex="-1">版本分发管理 <a class="header-anchor" href="#版本分发管理" aria-label="Permalink to &quot;版本分发管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// distribution-management.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DistributionManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">packageName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> packageName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 查看分布标签</span></span>
<span class="line"><span style="color:#B392F0;">  listDistributionTags</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm dist-tag ls \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;🏷️  分布标签:&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(output);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">tag</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">version</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> s.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#E1E4E8;"> { tag, version };</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法获取分布标签:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 添加分布标签</span></span>
<span class="line"><span style="color:#B392F0;">  addDistributionTag</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">tag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm dist-tag add \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 添加标签: \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 添加标签失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 删除分布标签</span></span>
<span class="line"><span style="color:#B392F0;">  removeDistributionTag</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm dist-tag rm \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 删除标签: \${</span><span style="color:#E1E4E8;">tag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 删除标签失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 推广版本（如从 beta 到 latest）</span></span>
<span class="line"><span style="color:#B392F0;">  promoteVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fromTag</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">toTag</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;latest&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> tags</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">listDistributionTags</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> fromVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tags.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">t</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> t.tag </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> fromTag)?.version;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">fromVersion) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 未找到标签: \${</span><span style="color:#E1E4E8;">fromTag</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🎯 推广版本: \${</span><span style="color:#E1E4E8;">fromVersion</span><span style="color:#9ECBFF;">} (\${</span><span style="color:#E1E4E8;">fromTag</span><span style="color:#9ECBFF;">} → \${</span><span style="color:#E1E4E8;">toTag</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addDistributionTag</span><span style="color:#E1E4E8;">(fromVersion, toTag);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 检查版本采用情况</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> checkVersionAdoption</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 使用 npm stats 或其他分析工具</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm view \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> downloads</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDownloadStats</span><span style="color:#E1E4E8;">(version);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        version,</span></span>
<span class="line"><span style="color:#E1E4E8;">        info: info.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 前10行信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        downloads,</span></span>
<span class="line"><span style="color:#E1E4E8;">        published: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getPublishTime</span><span style="color:#E1E4E8;">(version)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { version, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getDownloadStats</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm stats \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, { </span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#6A737D;">      // 解析下载统计信息</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { lastDay: </span><span style="color:#9ECBFF;">&#39;N/A&#39;</span><span style="color:#E1E4E8;">, lastWeek: </span><span style="color:#9ECBFF;">&#39;N/A&#39;</span><span style="color:#E1E4E8;">, lastMonth: </span><span style="color:#9ECBFF;">&#39;N/A&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { error: </span><span style="color:#9ECBFF;">&#39;无法获取下载统计&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getPublishTime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm view \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} time\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> lines</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> publishLine</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> lines.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">line</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(version));</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> publishLine </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> publishLine.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&#39;&quot;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;未知&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#9ECBFF;"> &#39;未知&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> distManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DistributionManager</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-cli-tool&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 管理分布标签</span></span>
<span class="line"><span style="color:#E1E4E8;">distManager.</span><span style="color:#B392F0;">listDistributionTags</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// distManager.promoteVersion(&#39;beta&#39;, &#39;latest&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">// distManager.addDistributionTag(&#39;1.2.3&#39;, &#39;stable&#39;);</span></span></code></pre></div><h3 id="弃用管理" tabindex="-1">弃用管理 <a class="header-anchor" href="#弃用管理" aria-label="Permalink to &quot;弃用管理&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// deprecation-manager.mjs</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { execSync } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;node:child_process&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> DeprecationManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">packageName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.packageName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> packageName;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 弃用特定版本</span></span>
<span class="line"><span style="color:#B392F0;">  deprecateVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">version</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> deprecateMessage</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> message </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`版本 \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已弃用，请升级到最新版本\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm deprecate \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}@\${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} &quot;\${</span><span style="color:#E1E4E8;">deprecateMessage</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️  已弃用版本 \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">deprecateMessage</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 弃用操作失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 弃用版本范围</span></span>
<span class="line"><span style="color:#B392F0;">  deprecateVersionRange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">range</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm deprecate \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">}@&quot;\${</span><span style="color:#E1E4E8;">range</span><span style="color:#9ECBFF;">}&quot; &quot;\${</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}&quot;\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stdio: </span><span style="color:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`⚠️  已弃用版本范围 \${</span><span style="color:#E1E4E8;">range</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`❌ 范围弃用失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 批量弃用旧版本</span></span>
<span class="line"><span style="color:#B392F0;">  deprecateOldVersions</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keepLast</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> versions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVersionList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oldVersions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> versions.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">keepLast);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`🗑️  准备弃用 \${</span><span style="color:#E1E4E8;">oldVersions</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个旧版本，保留最新的 \${</span><span style="color:#E1E4E8;">keepLast</span><span style="color:#9ECBFF;">} 个版本\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> deprecatedCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> oldVersions) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> success</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">deprecateVersion</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        version, </span></span>
<span class="line"><span style="color:#9ECBFF;">        \`版本 \${</span><span style="color:#E1E4E8;">version</span><span style="color:#9ECBFF;">} 已过时，请升级到最新版本\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        deprecatedCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`✅ 已弃用 \${</span><span style="color:#E1E4E8;">deprecatedCount</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">oldVersions</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">} 个旧版本\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> deprecatedCount;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 获取版本列表</span></span>
<span class="line"><span style="color:#B392F0;">  getVersionList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm view \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">} versions --json\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(output);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法获取版本列表:&#39;</span><span style="color:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 生成弃用报告</span></span>
<span class="line"><span style="color:#B392F0;">  generateDeprecationReport</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> versions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getVersionList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentVersion</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> versions[versions.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      package: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.packageName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentVersion,</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalVersions: versions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      deprecated: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDeprecatedVersions</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      recommendations: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 生成建议</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (versions.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      report.recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;考虑弃用一些旧版本以减少维护负担&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> majorVersions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">groupByMajorVersion</span><span style="color:#E1E4E8;">(versions);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(majorVersions).</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;=</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      report.recommendations.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;多个主要版本并存，考虑弃用旧的主要版本&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> report;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  getDeprecatedVersions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> output</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> execSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`npm view \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">packageName</span><span style="color:#9ECBFF;">} --json\`</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> info</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(output);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> info.deprecated </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">  groupByMajorVersion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">versions</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> groups</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> version</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> versions) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> major</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> version.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">groups[major]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        groups[major] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      groups[major].</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(version);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> groups;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> deprecationManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DeprecationManager</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-cli-tool&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 生成弃用报告</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> report</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> deprecationManager.</span><span style="color:#B392F0;">generateDeprecationReport</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;弃用报告:&#39;</span><span style="color:#E1E4E8;">, report);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 弃用旧版本</span></span>
<span class="line"><span style="color:#6A737D;">// deprecationManager.deprecateOldVersions(3);</span></span></code></pre></div><p>通过实施这些发布策略和工具，Node.js 命令行工具可以实现专业化的发布流程，确保版本管理的规范性、发布过程的可控性以及用户获取的便利性。</p>`,31)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
