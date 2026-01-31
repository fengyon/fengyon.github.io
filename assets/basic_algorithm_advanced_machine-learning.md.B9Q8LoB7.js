import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"机器学习算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是机器学习算法","slug":"什么是机器学习算法","link":"#什么是机器学习算法","children":[]},{"level":2,"title":"机器学习算法分类","slug":"机器学习算法分类","link":"#机器学习算法分类","children":[{"level":3,"title":"监督学习","slug":"监督学习","link":"#监督学习","children":[]},{"level":3,"title":"无监督学习","slug":"无监督学习","link":"#无监督学习","children":[]}]},{"level":2,"title":"监督学习算法","slug":"监督学习算法","link":"#监督学习算法","children":[{"level":3,"title":"线性回归","slug":"线性回归","link":"#线性回归","children":[]},{"level":3,"title":"逻辑回归","slug":"逻辑回归","link":"#逻辑回归","children":[]},{"level":3,"title":"决策树","slug":"决策树","link":"#决策树","children":[]}]},{"level":2,"title":"无监督学习算法","slug":"无监督学习算法","link":"#无监督学习算法","children":[{"level":3,"title":"K 均值聚类","slug":"k-均值聚类","link":"#k-均值聚类","children":[]},{"level":3,"title":"主成分分析","slug":"主成分分析","link":"#主成分分析","children":[]}]},{"level":2,"title":"集成学习算法","slug":"集成学习算法","link":"#集成学习算法","children":[{"level":3,"title":"随机森林","slug":"随机森林","link":"#随机森林","children":[]}]}],"relativePath":"basic/algorithm/advanced/machine-learning.md","filePath":"basic/algorithm/advanced/machine-learning.md"}'),o={name:"basic/algorithm/advanced/machine-learning.md"};function e(t,s,c,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/advanced/machine-learning.md for this page in Markdown format</div><h1 id="机器学习算法" tabindex="-1">机器学习算法 <a class="header-anchor" href="#机器学习算法" aria-label="Permalink to &quot;机器学习算法&quot;">​</a></h1><h2 id="什么是机器学习算法" tabindex="-1">什么是机器学习算法 <a class="header-anchor" href="#什么是机器学习算法" aria-label="Permalink to &quot;什么是机器学习算法&quot;">​</a></h2><p>机器学习算法是让计算机从数据中学习模式并做出预测或决策的计算方法。它通过分析训练数据自动改进性能，而无需显式编程。机器学习是现代人工智能的核心技术，广泛应用于推荐系统、图像识别、自然语言处理等领域。</p><p>特点：</p><ul><li>数据驱动：从数据中自动学习规律</li><li>泛化能力：在未见过的数据上做出准确预测</li><li>自适应：随着新数据的加入不断改进模型</li><li>模式发现：自动发现数据中的复杂模式</li></ul><p>示意图 (机器学习流程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>训练数据 → [机器学习算法] → 训练模型 → 新数据 → 预测结果</span></span>
<span class="line"><span>              ↑</span></span>
<span class="line"><span>          参数优化</span></span></code></pre></div><h2 id="机器学习算法分类" tabindex="-1">机器学习算法分类 <a class="header-anchor" href="#机器学习算法分类" aria-label="Permalink to &quot;机器学习算法分类&quot;">​</a></h2><h3 id="监督学习" tabindex="-1">监督学习 <a class="header-anchor" href="#监督学习" aria-label="Permalink to &quot;监督学习&quot;">​</a></h3><p>从带有标签的训练数据中学习映射关系，用于预测新数据的标签。</p><p>特点：</p><ul><li>标签数据：训练数据包含输入和对应的输出标签</li><li>预测任务：分类 (离散输出) 或回归 (连续输出)</li><li>性能评估：通过测试集准确率、均方误差等指标评估</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 监督学习基类</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trainingHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 训练模型 - 子类必须实现</span></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;train method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测 - 子类必须实现</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;predict method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 评估模型性能</span></span>
<span class="line"><span style="color:#B392F0;">  evaluate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">testFeatures</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testLabels</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metric</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;accuracy&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(testFeatures);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (metric) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;accuracy&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAccuracy</span><span style="color:#E1E4E8;">(predictions, testLabels);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;mse&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMSE</span><span style="color:#E1E4E8;">(predictions, testLabels);</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#9ECBFF;"> &#39;mae&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMAE</span><span style="color:#E1E4E8;">(predictions, testLabels);</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Unsupported metric: \${</span><span style="color:#E1E4E8;">metric</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateAccuracy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">predictions</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> correct </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (predictions[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> labels[i]) correct</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> correct </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateMSE</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">predictions</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(predictions[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> labels[i], </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  calculateMAE</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">predictions</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(predictions[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> labels[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="无监督学习" tabindex="-1">无监督学习 <a class="header-anchor" href="#无监督学习" aria-label="Permalink to &quot;无监督学习&quot;">​</a></h3><p>从无标签数据中发现内在结构和模式，用于聚类、降维等任务。</p><p>特点：</p><ul><li>无标签数据：训练数据只有输入没有输出标签</li><li>结构发现：自动发现数据中的分组或降维表示</li><li>探索性分析：用于数据探索和预处理</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 无监督学习基类</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> UnsupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 拟合数据 - 子类必须实现</span></span>
<span class="line"><span style="color:#B392F0;">  fit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fit method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 转换数据 - 子类必须实现</span></span>
<span class="line"><span style="color:#B392F0;">  transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;transform method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 拟合并转换</span></span>
<span class="line"><span style="color:#B392F0;">  fitTransform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">fit</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (机器学习分类)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>机器学习算法</span></span>
<span class="line"><span>├── 监督学习</span></span>
<span class="line"><span>│   ├── 分类</span></span>
<span class="line"><span>│   │   ├── 逻辑回归</span></span>
<span class="line"><span>│   │   ├── 决策树</span></span>
<span class="line"><span>│   │   ├── 支持向量机</span></span>
<span class="line"><span>│   │   └── 随机森林</span></span>
<span class="line"><span>│   └── 回归</span></span>
<span class="line"><span>│       ├── 线性回归</span></span>
<span class="line"><span>│       ├── 多项式回归</span></span>
<span class="line"><span>│       └── 回归树</span></span>
<span class="line"><span>├── 无监督学习</span></span>
<span class="line"><span>│   ├── 聚类</span></span>
<span class="line"><span>│   │   ├── K均值</span></span>
<span class="line"><span>│   │   ├── 层次聚类</span></span>
<span class="line"><span>│   │   └── DBSCAN</span></span>
<span class="line"><span>│   └── 降维</span></span>
<span class="line"><span>│       ├── PCA</span></span>
<span class="line"><span>│       ├── t-SNE</span></span>
<span class="line"><span>│       └── 自编码器</span></span>
<span class="line"><span>└── 强化学习</span></span>
<span class="line"><span>    ├── Q学习</span></span>
<span class="line"><span>    ├── 策略梯度</span></span>
<span class="line"><span>    └── 深度强化学习</span></span></code></pre></div><h2 id="监督学习算法" tabindex="-1">监督学习算法 <a class="header-anchor" href="#监督学习算法" aria-label="Permalink to &quot;监督学习算法&quot;">​</a></h2><h3 id="线性回归" tabindex="-1">线性回归 <a class="header-anchor" href="#线性回归" aria-label="Permalink to &quot;线性回归&quot;">​</a></h3><p>通过线性方程拟合数据，预测连续数值输出。</p><p>特点：</p><ul><li>线性关系：假设特征和目标变量呈线性关系</li><li>最小二乘：通过最小化残差平方和求解参数</li><li>解释性强：模型参数有明确的统计意义</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 线性回归实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LinearRegression</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> SupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">learningRate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iterations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> learningRate;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.iterations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iterations;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.weights </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lossHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 添加偏置项</span></span>
<span class="line"><span style="color:#B392F0;">  addBiasTerm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">row]); </span><span style="color:#6A737D;">// 第一列为1，对应偏置</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 训练模型 - 梯度下降</span></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化参数</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.weights </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lossHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 梯度下降</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> iter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; iter </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.iterations; iter</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> totalLoss </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> weightGradients</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> biasGradient </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 计算梯度和损失</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> prediction</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictSingle</span><span style="color:#E1E4E8;">(features[i]);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> error</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> prediction </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> labels[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        totalLoss </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> error </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        // 计算梯度</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          weightGradients[j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> error </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> features[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        biasGradient </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 更新参数</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.weights[j] </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> weightGradients[j] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> biasGradient </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 记录损失</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> avgLoss</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> totalLoss </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.lossHistory.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(avgLoss);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 早期停止检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (iter </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lossHistory[iter] </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lossHistory[iter </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1e-6</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 单个预测</span></span>
<span class="line"><span style="color:#B392F0;">  predictSingle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> prediction </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bias;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prediction </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.weights[j] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> feature[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> prediction;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 批量预测</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictSingle</span><span style="color:#E1E4E8;">(feature));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算R²分数</span></span>
<span class="line"><span style="color:#B392F0;">  score</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(features);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> meanLabel</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> label, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalSumSquares </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> residualSumSquares </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalSumSquares </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(labels[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> meanLabel, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      residualSumSquares </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(labels[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> predictions[i], </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> (residualSumSquares </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalSumSquares);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多项式回归</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> PolynomialRegression</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> LinearRegression</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">degree</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">learningRate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iterations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">(learningRate, iterations);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.degree </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> degree;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成多项式特征</span></span>
<span class="line"><span style="color:#B392F0;">  generatePolynomialFeatures</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">featureRow</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> polyFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; d </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.degree; d</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> featureRow.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          polyFeatures.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(featureRow[i], d));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> polyFeatures;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> polyFeatures</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generatePolynomialFeatures</span><span style="color:#E1E4E8;">(features);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">train</span><span style="color:#E1E4E8;">(polyFeatures, labels);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> polyFeatures</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generatePolynomialFeatures</span><span style="color:#E1E4E8;">(features);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(polyFeatures);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (线性回归拟合)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据点分布:</span></span>
<span class="line"><span>(1, 2), (2, 4), (3, 5), (4, 4), (5, 6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>线性回归拟合:</span></span>
<span class="line"><span>y = w*x + b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>梯度下降过程:</span></span>
<span class="line"><span>迭代1: w=0, b=0 → 损失=15.4</span></span>
<span class="line"><span>迭代2: w=0.8, b=0.16 → 损失=8.2</span></span>
<span class="line"><span>迭代3: w=1.2, b=0.48 → 损失=3.1</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>迭代100: w=0.95, b=1.2 → 损失=0.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终模型: y = 0.95*x + 1.2</span></span>
<span class="line"><span>R²分数: 0.89</span></span></code></pre></div><h3 id="逻辑回归" tabindex="-1">逻辑回归 <a class="header-anchor" href="#逻辑回归" aria-label="Permalink to &quot;逻辑回归&quot;">​</a></h3><p>用于二分类问题的线性模型，通过 sigmoid 函数输出概率。</p><p>特点：</p><ul><li>概率输出：输出属于正类的概率</li><li>线性决策边界：在特征空间中创建线性分隔</li><li>最大似然估计：通过最大化似然函数求解参数</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 逻辑回归实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LogisticRegression</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> SupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">learningRate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.01</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iterations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1000</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">regularization</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> learningRate;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.iterations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iterations;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.regularization </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> regularization;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.weights </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lossHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // Sigmoid函数</span></span>
<span class="line"><span style="color:#B392F0;">  sigmoid</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">z</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">exp</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">z));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算损失函数（对数损失）</span></span>
<span class="line"><span style="color:#B392F0;">  computeLoss</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">predictions</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> loss </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> labels[i];</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> p</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> predictions[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      loss </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(p) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> y) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> p);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加正则化项</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.regularization </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> regTerm</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.weights.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> w, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      loss </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.regularization </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> regTerm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">loss </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 训练模型</span></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化参数</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.weights </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.lossHistory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 梯度下降</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> iter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; iter </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.iterations; iter</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> weightGradients</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> biasGradient </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 前向传播和梯度计算</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> z</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.weights.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> features[i][j], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> prediction</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sigmoid</span><span style="color:#E1E4E8;">(z);</span></span>
<span class="line"><span style="color:#E1E4E8;">        predictions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(prediction);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> error</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> prediction </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> labels[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 计算梯度</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          weightGradients[j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> error </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> features[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        biasGradient </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 更新参数（带正则化）</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> regTerm</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.regularization </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.weights[j];</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.weights[j] </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (weightGradients[j] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> regTerm);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">-=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.learningRate </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> biasGradient </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 记录损失</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> loss</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">computeLoss</span><span style="color:#E1E4E8;">(predictions, labels);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.lossHistory.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(loss);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">      // 早期停止检查</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (iter </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lossHistory[iter] </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.lossHistory[iter </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 1e-6</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测概率</span></span>
<span class="line"><span style="color:#B392F0;">  predictProbability</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> z</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bias </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.weights.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> w </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> feature[j], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sigmoid</span><span style="color:#E1E4E8;">(z);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测类别</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">threshold</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> probabilities</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictProbability</span><span style="color:#E1E4E8;">(features);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> probabilities.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> threshold </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算准确率、精确率、召回率等指标</span></span>
<span class="line"><span style="color:#B392F0;">  evaluateDetailed</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">testFeatures</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">testLabels</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">threshold</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> predictions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(testFeatures, threshold);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> truePositives </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, falsePositives </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, trueNegatives </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, falseNegatives </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (predictions[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> testLabels[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) truePositives</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (predictions[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> testLabels[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) falsePositives</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (predictions[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> testLabels[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) trueNegatives</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (predictions[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> testLabels[i] </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) falseNegatives</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> accuracy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (truePositives </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> trueNegatives) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> predictions.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> precision</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> truePositives </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (truePositives </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> falsePositives) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recall</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> truePositives </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (truePositives </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> falseNegatives) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> f1</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (precision </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> recall) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (precision </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> recall) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      accuracy,</span></span>
<span class="line"><span style="color:#E1E4E8;">      precision,</span></span>
<span class="line"><span style="color:#E1E4E8;">      recall,</span></span>
<span class="line"><span style="color:#E1E4E8;">      f1,</span></span>
<span class="line"><span style="color:#E1E4E8;">      confusionMatrix: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        truePositives,</span></span>
<span class="line"><span style="color:#E1E4E8;">        falsePositives,</span></span>
<span class="line"><span style="color:#E1E4E8;">        trueNegatives,</span></span>
<span class="line"><span style="color:#E1E4E8;">        falseNegatives</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (逻辑回归决策边界)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>二分类数据:</span></span>
<span class="line"><span>特征X1: [1,2,3,4,5,6,7,8]</span></span>
<span class="line"><span>特征X2: [1,1,2,2,3,3,4,4]</span></span>
<span class="line"><span>标签Y:  [0,0,0,0,1,1,1,1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>逻辑回归训练:</span></span>
<span class="line"><span>初始化: w1=0, w2=0, b=0</span></span>
<span class="line"><span>迭代过程:</span></span>
<span class="line"><span>计算概率: P(y=1) = σ(w1*x1 + w2*x2 + b)</span></span>
<span class="line"><span>更新参数使P(y=1)接近真实标签</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终模型:</span></span>
<span class="line"><span>w1=1.2, w2=-0.8, b=-3.5</span></span>
<span class="line"><span>决策边界: 1.2*x1 - 0.8*x2 - 3.5 = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分类结果:</span></span>
<span class="line"><span>x1=1,x2=1 → z=-3.1 → P=0.04 → 预测0 ✓</span></span>
<span class="line"><span>x1=8,x2=4 → z=4.1 → P=0.98 → 预测1 ✓</span></span></code></pre></div><h3 id="决策树" tabindex="-1">决策树 <a class="header-anchor" href="#决策树" aria-label="Permalink to &quot;决策树&quot;">​</a></h3><p>通过树形结构进行决策，易于理解和解释。</p><p>特点：</p><ul><li>可解释性强：决策过程清晰可见</li><li>非参数方法：不对数据分布做假设</li><li>特征重要性：自动评估特征重要性</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 决策树节点</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TreeNode</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.featureIndex </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.threshold </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.right </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.value </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 叶节点的预测值</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isLeaf </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 决策树实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> DecisionTree</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> SupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">maxDepth</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minSamplesSplit</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minSamplesLeaf</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxDepth </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> maxDepth;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.minSamplesSplit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minSamplesSplit;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.minSamplesLeaf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> minSamplesLeaf;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.featureImportance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算基尼不纯度（用于分类）</span></span>
<span class="line"><span style="color:#B392F0;">  giniImpurity</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> counts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">label</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      counts[label] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (counts[label] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> impurity </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(counts).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">count</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> probability</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      impurity </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> probability </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> probability;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> impurity;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算方差（用于回归）</span></span>
<span class="line"><span style="color:#B392F0;">  variance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">values</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mean</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> values.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> values.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> values.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(val </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> mean, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> values.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 寻找最佳分割点</span></span>
<span class="line"><span style="color:#B392F0;">  findBestSplit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isRegression</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> bestGain </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> bestFeature </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> bestThreshold </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 当前节点的基尼不纯度或方差</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> currentImpurity</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">variance</span><span style="color:#E1E4E8;">(labels) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">giniImpurity</span><span style="color:#E1E4E8;">(labels);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 遍历所有特征</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> featureIdx </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; featureIdx </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; featureIdx</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 获取该特征的所有唯一值作为候选阈值</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> featureValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> row[featureIdx]);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> uniqueValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(featureValues)].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 遍历所有候选阈值</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> threshold</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> uniqueValues) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> leftIndices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rightIndices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 根据阈值分割数据</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (features[i][featureIdx] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> threshold) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            leftIndices.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            rightIndices.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 检查分割是否有效</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (leftIndices.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.minSamplesLeaf </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> rightIndices.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.minSamplesLeaf) {</span></span>
<span class="line"><span style="color:#F97583;">          continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 计算左右子集的不纯度</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> leftLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> leftIndices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> labels[i]);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rightLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rightIndices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> labels[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> leftImpurity</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">variance</span><span style="color:#E1E4E8;">(leftLabels) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">giniImpurity</span><span style="color:#E1E4E8;">(leftLabels);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rightImpurity</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">variance</span><span style="color:#E1E4E8;">(rightLabels) </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">giniImpurity</span><span style="color:#E1E4E8;">(rightLabels);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 计算信息增益</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> leftWeight</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> leftIndices.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> rightWeight</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> rightIndices.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> gain</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> currentImpurity </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (leftWeight </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> leftImpurity </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> rightWeight </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> rightImpurity);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (gain </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> bestGain) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          bestGain </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gain;</span></span>
<span class="line"><span style="color:#E1E4E8;">          bestFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> featureIdx;</span></span>
<span class="line"><span style="color:#E1E4E8;">          bestThreshold </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> threshold;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { bestFeature, bestThreshold, bestGain };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 构建决策树</span></span>
<span class="line"><span style="color:#B392F0;">  buildTree</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">depth</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isRegression</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> node</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TreeNode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 终止条件</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (depth </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxDepth </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        features.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.minSamplesSplit </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">        (isRegression </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">variance</span><span style="color:#E1E4E8;">(labels) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> :</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">giniImpurity</span><span style="color:#E1E4E8;">(labels) </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.isLeaf </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        labels.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> :</span><span style="color:#6A737D;"> // 均值</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mostCommonLabel</span><span style="color:#E1E4E8;">(labels); </span><span style="color:#6A737D;">// 众数</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 寻找最佳分割</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">bestFeature</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">bestThreshold</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">bestGain</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findBestSplit</span><span style="color:#E1E4E8;">(features, labels, isRegression);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (bestGain </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.isLeaf </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      node.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        labels.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> labels.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> :</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mostCommonLabel</span><span style="color:#E1E4E8;">(labels);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 分割数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> leftFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> leftLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rightFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rightLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (features[i][bestFeature] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> bestThreshold) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        leftFeatures.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(features[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        leftLabels.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(labels[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rightFeatures.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(features[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        rightLabels.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(labels[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 递归构建子树</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.featureIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bestFeature;</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.threshold </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bestThreshold;</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.left </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildTree</span><span style="color:#E1E4E8;">(leftFeatures, leftLabels, depth </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, isRegression);</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.right </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildTree</span><span style="color:#E1E4E8;">(rightFeatures, rightLabels, depth </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">, isRegression);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 找到最常见的标签</span></span>
<span class="line"><span style="color:#B392F0;">  mostCommonLabel</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> counts</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    labels.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">label</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      counts[label] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (counts[label] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(counts).</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> b[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> b)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 训练分类树</span></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildTree</span><span style="color:#E1E4E8;">(features, labels, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测单个样本</span></span>
<span class="line"><span style="color:#B392F0;">  predictSingle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">node</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.root) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (node.isLeaf) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> node.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (feature[node.featureIndex] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> node.threshold) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictSingle</span><span style="color:#E1E4E8;">(feature, node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictSingle</span><span style="color:#E1E4E8;">(feature, node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 批量预测</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">predictSingle</span><span style="color:#E1E4E8;">(feature));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 回归树</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> RegressionTree</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> DecisionTree</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">maxDepth</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minSamplesSplit</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minSamplesLeaf</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">(maxDepth, minSamplesSplit, minSamplesLeaf);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">buildTree</span><span style="color:#E1E4E8;">(features, labels, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (决策树构建过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据:</span></span>
<span class="line"><span>[年龄, 收入, 购买]</span></span>
<span class="line"><span>[25, 30000, 否]</span></span>
<span class="line"><span>[35, 60000, 是]  </span></span>
<span class="line"><span>[45, 80000, 是]</span></span>
<span class="line"><span>[20, 20000, 否]</span></span>
<span class="line"><span>[55, 100000, 是]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>构建决策树:</span></span>
<span class="line"><span>根节点: 检查所有特征和阈值</span></span>
<span class="line"><span>- 按年龄&lt;=30分割: 基尼=0.48</span></span>
<span class="line"><span>- 按收入&lt;=50000分割: 基尼=0.32 ← 最佳</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根节点: 收入&lt;=50000</span></span>
<span class="line"><span>├── 左子节点(收入&lt;=50000): [25,30000,否], [20,20000,否] → 纯节点(否)</span></span>
<span class="line"><span>└── 右子节点(收入&gt;50000): [35,60000,是], [45,80000,是], [55,100000,是] → 纯节点(是)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终树:</span></span>
<span class="line"><span>收入&lt;=50000? </span></span>
<span class="line"><span>├── 是 → 预测&quot;否&quot;</span></span>
<span class="line"><span>└── 否 → 预测&quot;是&quot;</span></span></code></pre></div><h2 id="无监督学习算法" tabindex="-1">无监督学习算法 <a class="header-anchor" href="#无监督学习算法" aria-label="Permalink to &quot;无监督学习算法&quot;">​</a></h2><h3 id="k-均值聚类" tabindex="-1">K 均值聚类 <a class="header-anchor" href="#k-均值聚类" aria-label="Permalink to &quot;K 均值聚类&quot;">​</a></h3><p>将数据划分为 K 个簇，使簇内数据点尽可能相似。</p><p>特点：</p><ul><li>簇中心：每个簇用质心表示</li><li>距离度量：通常使用欧氏距离</li><li>迭代优化：通过交替分配和更新步骤收敛</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// K均值聚类实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> KMeans</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> UnsupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxIterations</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">tolerance</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 1e-4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxIterations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> maxIterations;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.tolerance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tolerance;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.centroids </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.labels </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.inertia </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 簇内平方和</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 初始化质心</span></span>
<span class="line"><span style="color:#B392F0;">  initializeCentroids</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> centroids</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 随机选择K个数据点作为初始质心</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> indices</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (indices.size </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      indices.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> n));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(indices).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      centroids.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">data[index]]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> centroids;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算欧氏距离</span></span>
<span class="line"><span style="color:#B392F0;">  euclideanDistance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> a.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(a[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b[i], </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(sum);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 分配数据点到最近的质心</span></span>
<span class="line"><span style="color:#B392F0;">  assignClusters</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">centroids</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> labels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalDistance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> minDistance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> bestCluster </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> centroids.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> distance</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">euclideanDistance</span><span style="color:#E1E4E8;">(data[i], centroids[j]);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (distance </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> minDistance) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          minDistance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> distance;</span></span>
<span class="line"><span style="color:#E1E4E8;">          bestCluster </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      labels.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(bestCluster);</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalDistance </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> minDistance;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { labels, totalDistance };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 更新质心位置</span></span>
<span class="line"><span style="color:#B392F0;">  updateCentroids</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> newCentroids</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.k).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> clusterSizes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.k).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 累加每个簇的数据点</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> cluster</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> labels[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      clusterSizes[cluster]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data[i].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        newCentroids[cluster][j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算平均值</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.k; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (clusterSizes[i] </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> newCentroids[i].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          newCentroids[i][j] </span><span style="color:#F97583;">/=</span><span style="color:#E1E4E8;"> clusterSizes[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> newCentroids;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 拟合数据</span></span>
<span class="line"><span style="color:#B392F0;">  fit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.k) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Number of data points must be &gt;= k&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始化</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.centroids </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initializeCentroids</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> previousDistance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 迭代优化</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> iter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; iter </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxIterations; iter</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 分配簇</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">labels</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">totalDistance</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">assignClusters</span><span style="color:#E1E4E8;">(data, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.centroids);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.labels </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> labels;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.inertia </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> totalDistance;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 检查收敛</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(previousDistance </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> totalDistance) </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.tolerance) {</span></span>
<span class="line"><span style="color:#F97583;">        break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      previousDistance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> totalDistance;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 更新质心</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.centroids </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateCentroids</span><span style="color:#E1E4E8;">(data, labels);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测新数据点的簇</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">labels</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">assignClusters</span><span style="color:#E1E4E8;">(data, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.centroids);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> labels;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算轮廓系数</span></span>
<span class="line"><span style="color:#B392F0;">  silhouetteScore</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> totalScore </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> currentCluster</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.labels[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算a(i)：与同簇其他点的平均距离</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> sameClusterCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.labels[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> currentCluster) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          a </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">euclideanDistance</span><span style="color:#E1E4E8;">(data[i], data[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">          sameClusterCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sameClusterCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sameClusterCount </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算b(i)：与最近其他簇的平均距离</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> cluster </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; cluster </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.k; cluster</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (cluster </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> currentCluster) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> clusterDistance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> clusterCount </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.labels[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> cluster) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            clusterDistance </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">euclideanDistance</span><span style="color:#E1E4E8;">(data[i], data[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">            clusterCount</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> avgClusterDistance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> clusterCount </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> clusterDistance </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> clusterCount </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> Infinity</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (avgClusterDistance </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> b) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> avgClusterDistance;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算轮廓系数</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> s</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(a, b);</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalScore </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> totalScore </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (K 均值聚类过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据点:</span></span>
<span class="line"><span>A(1,1), B(1,2), C(2,1), D(8,8), E(8,9), F(9,8)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>K=2聚类:</span></span>
<span class="line"><span>初始化: 随机选择A、D作为质心</span></span>
<span class="line"><span></span></span>
<span class="line"><span>迭代1:</span></span>
<span class="line"><span>分配簇:</span></span>
<span class="line"><span>  距离质心A: A:0, B:1, C:1, D:9.9, E:10.6, F:10.6</span></span>
<span class="line"><span>  距离质心D: A:9.9, B:10.6, C:10.6, D:0, E:1, F:1</span></span>
<span class="line"><span>簇分配: [A,B,C] → 簇0, [D,E,F] → 簇1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新质心:</span></span>
<span class="line"><span>簇0质心: ((1+1+2)/3, (1+2+1)/3) = (1.33, 1.33)</span></span>
<span class="line"><span>簇1质心: ((8+8+9)/3, (8+9+8)/3) = (8.33, 8.33)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>迭代2:</span></span>
<span class="line"><span>重新分配 → 分配不变 → 收敛</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终聚类:</span></span>
<span class="line"><span>簇0: A,B,C (质心1.33,1.33)</span></span>
<span class="line"><span>簇1: D,E,F (质心8.33,8.33)</span></span>
<span class="line"><span>轮廓系数: 0.85</span></span></code></pre></div><h3 id="主成分分析" tabindex="-1">主成分分析 <a class="header-anchor" href="#主成分分析" aria-label="Permalink to &quot;主成分分析&quot;">​</a></h3><p>通过线性变换将数据投影到低维空间，保留最大方差。</p><p>特点：</p><ul><li>方差最大化：找到保留最多信息的方向</li><li>去相关：主成分之间相互正交</li><li>降维可视化：将高维数据降到 2D 或 3D 进行可视化</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 主成分分析实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> PCA</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> UnsupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nComponents</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nComponents </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nComponents;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.components </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.explainedVariance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mean </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 标准化数据</span></span>
<span class="line"><span style="color:#B392F0;">  standardize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算均值和标准差</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mean</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> std</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算均值</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mean[j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mean[j] </span><span style="color:#F97583;">/=</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算标准差</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        std[j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">pow</span><span style="color:#E1E4E8;">(data[i][j] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> mean[j], </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      std[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(std[j] </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 标准化数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> standardized</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      row.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (val </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> mean[j]) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> std[j])</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { standardized, mean, std };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算协方差矩阵</span></span>
<span class="line"><span style="color:#B392F0;">  computeCovarianceMatrix</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> cov</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: m }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data[k][i] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> data[k][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        cov[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        cov[j][i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cov[i][j]; </span><span style="color:#6A737D;">// 对称矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> cov;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算特征值和特征向量</span></span>
<span class="line"><span style="color:#B392F0;">  eigenDecomposition</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">matrix</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> matrix.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 简化的幂迭代法（实际应用应使用更稳定的算法）</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> eigenvectors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nComponents }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: n }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> eigenvalues</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nComponents).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> comp </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; comp </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.nComponents; comp</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> vector </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> eigenvectors[comp];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 幂迭代</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> iter </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; iter </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">; iter</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 矩阵乘法: newVector = matrix × vector</span></span>
<span class="line"><span style="color:#F97583;">        let</span><span style="color:#E1E4E8;"> newVector </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(n).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            newVector[i] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> matrix[i][j] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> vector[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 归一化</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> norm</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(newVector.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        vector </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVector.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> norm);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 与前一个特征向量正交化</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; prev </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> comp; prev</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> dotProduct</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> eigenvectors[prev][i], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">          for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            vector[i] </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> dotProduct </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> eigenvectors[prev][i];</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 重新归一化</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> newNorm</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(vector.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        vector </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> newNorm);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      eigenvectors[comp] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算特征值</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> rayleigh </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          rayleigh </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> vector[i] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> matrix[i][j] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> vector[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      eigenvalues[comp] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rayleigh;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { eigenvalues, eigenvectors };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 拟合数据</span></span>
<span class="line"><span style="color:#B392F0;">  fit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">standardized</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">mean</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">standardize</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mean </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mean;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算协方差矩阵</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> covMatrix</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">computeCovarianceMatrix</span><span style="color:#E1E4E8;">(standardized);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 特征分解</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">eigenvalues</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">eigenvectors</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">eigenDecomposition</span><span style="color:#E1E4E8;">(covMatrix);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 按特征值降序排序</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sortedIndices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> eigenvalues.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [val, idx])</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">], [</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([, </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> idx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.components </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sortedIndices.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nComponents)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> eigenvectors[idx]);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.explainedVariance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sortedIndices.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nComponents)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> eigenvalues[idx]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 转换数据到主成分空间</span></span>
<span class="line"><span style="color:#B392F0;">  transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 中心化数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> centered</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      row.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mean[j])</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 投影到主成分</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> centered.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.components.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">component</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        row.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> component[j], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算解释方差比例</span></span>
<span class="line"><span style="color:#B392F0;">  explainedVarianceRatio</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.explainedVariance) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> totalVariance</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.explainedVariance.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.explainedVariance.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">variance</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> variance </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> totalVariance);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 逆变换（从主成分空间回到原始空间）</span></span>
<span class="line"><span style="color:#B392F0;">  inverseTransform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">transformedData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> transformedData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> original</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mean.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.components.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mean.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          original[j] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> row[i] </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.components[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 添加均值</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> original.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">j</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mean[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (PCA 降维过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>二维数据点:</span></span>
<span class="line"><span>(1,1), (2,2), (3,3), (1,2), (2,1), (3,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PCA过程:</span></span>
<span class="line"><span>1. 标准化数据:</span></span>
<span class="line"><span>   均值: (2,1.83), 标准化后数据...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 计算协方差矩阵:</span></span>
<span class="line"><span>   [[0.8, 0.4],</span></span>
<span class="line"><span>    [0.4, 0.8]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 特征分解:</span></span>
<span class="line"><span>   特征值: [1.2, 0.4]</span></span>
<span class="line"><span>   特征向量: </span></span>
<span class="line"><span>     PC1: [0.707, 0.707] (方差1.2, 75%)</span></span>
<span class="line"><span>     PC2: [-0.707, 0.707] (方差0.4, 25%)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 选择主成分:</span></span>
<span class="line"><span>   选择PC1，将2D数据投影到1D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 转换数据:</span></span>
<span class="line"><span>   (1,1) → 投影到PC1 → 1.41</span></span>
<span class="line"><span>   (2,2) → 2.83</span></span>
<span class="line"><span>   (3,3) → 4.24</span></span>
<span class="line"><span>   ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解释方差: PC1解释75%的总方差</span></span></code></pre></div><h2 id="集成学习算法" tabindex="-1">集成学习算法 <a class="header-anchor" href="#集成学习算法" aria-label="Permalink to &quot;集成学习算法&quot;">​</a></h2><h3 id="随机森林" tabindex="-1">随机森林 <a class="header-anchor" href="#随机森林" aria-label="Permalink to &quot;随机森林&quot;">​</a></h3><p>通过组合多个决策树提高预测性能和稳定性。</p><p>特点：</p><ul><li>装袋算法：通过自助采样构建多个训练集</li><li>特征随机：每个节点分裂时随机选择特征子集</li><li>投票机制：通过多数投票或平均进行预测</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 随机森林实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> RandomForest</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> SupervisedLearning</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nEstimators</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 100</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxDepth</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxFeatures</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;sqrt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isRegression</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.nEstimators </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nEstimators;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxDepth </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> maxDepth;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.maxFeatures </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> maxFeatures;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isRegression </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isRegression;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trees </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.featureImportance </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 自助采样</span></span>
<span class="line"><span style="color:#B392F0;">  bootstrapSample</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sampledFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sampledLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> oobIndices</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Set</span><span style="color:#E1E4E8;">(Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: n }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i)); </span><span style="color:#6A737D;">// 袋外样本</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> randomIndex</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> n);</span></span>
<span class="line"><span style="color:#E1E4E8;">      sampledFeatures.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(features[randomIndex]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      sampledLabels.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(labels[randomIndex]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      oobIndices.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(randomIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sampledFeatures,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sampledLabels,</span></span>
<span class="line"><span style="color:#E1E4E8;">      oobIndices: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(oobIndices)</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取特征子集</span></span>
<span class="line"><span style="color:#B392F0;">  getFeatureSubset</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nFeatures</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> nSelected;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.maxFeatures </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;sqrt&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nSelected </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">sqrt</span><span style="color:#E1E4E8;">(nFeatures));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.maxFeatures </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;log2&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nSelected </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">log2</span><span style="color:#E1E4E8;">(nFeatures));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nSelected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.maxFeatures;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    nSelected </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(nSelected, nFeatures));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 随机选择特征索引</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> allIndices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">({ length: nFeatures }, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> shuffled</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">allIndices].</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> shuffled.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, nSelected);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 训练随机森林</span></span>
<span class="line"><span style="color:#B392F0;">  train</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.trees </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 构建多棵树</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.nEstimators; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 自助采样</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">sampledFeatures</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sampledLabels</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">oobIndices</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bootstrapSample</span><span style="color:#E1E4E8;">(features, labels);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 创建决策树</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> tree</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> RegressionTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.maxDepth) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">        new</span><span style="color:#B392F0;"> DecisionTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.maxDepth);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 修改决策树的分割函数，只考虑特征子集</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> originalFindBestSplit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tree.findBestSplit.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(tree);</span></span>
<span class="line"><span style="color:#E1E4E8;">      tree.</span><span style="color:#B392F0;">findBestSplit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isRegression</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> featureSubset</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getFeatureSubset</span><span style="color:#E1E4E8;">(features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> subsetFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          featureSubset.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">idx</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> row[idx])</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> originalFindBestSplit</span><span style="color:#E1E4E8;">(subsetFeatures, labels, isRegression);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (result.bestFeature </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">          // 映射回原始特征索引</span></span>
<span class="line"><span style="color:#E1E4E8;">          result.bestFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> featureSubset[result.bestFeature];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 训练树</span></span>
<span class="line"><span style="color:#E1E4E8;">      tree.</span><span style="color:#B392F0;">train</span><span style="color:#E1E4E8;">(sampledFeatures, sampledLabels);</span></span>
<span class="line"><span style="color:#E1E4E8;">      tree.oobIndices </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> oobIndices;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.trees.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(tree);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算特征重要性</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateFeatureImportance</span><span style="color:#E1E4E8;">(features, labels);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isTrained </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算特征重要性</span></span>
<span class="line"><span style="color:#B392F0;">  calculateFeatureImportance</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">labels</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> m</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> features[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> importance</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(m).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 基于袋外误差计算特征重要性</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tree </span><span style="color:#F97583;">of</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trees) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (tree.oobIndices.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算原始袋外误差</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> oobFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tree.oobIndices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> features[i]);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> oobLabels</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tree.oobIndices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> labels[i]);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> originalPredictions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tree.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(oobFeatures);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> originalScore</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMSE</span><span style="color:#E1E4E8;">(originalPredictions, oobLabels) </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAccuracy</span><span style="color:#E1E4E8;">(originalPredictions, oobLabels);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 对每个特征计算重要性</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> featureIdx </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; featureIdx </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; featureIdx</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 打乱该特征的值</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> permutedFeatures</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> oobFeatures.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">row]);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> shuffledValues</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> permutedFeatures.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> row[featureIdx])</span></span>
<span class="line"><span style="color:#E1E4E8;">          .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> permutedFeatures.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          permutedFeatures[i][featureIdx] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> shuffledValues[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 计算打乱后的误差</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> permutedPredictions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> tree.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(permutedFeatures);</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> permutedScore</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isRegression </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateMSE</span><span style="color:#E1E4E8;">(permutedPredictions, oobLabels) </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">calculateAccuracy</span><span style="color:#E1E4E8;">(permutedPredictions, oobLabels);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 特征重要性 = 打乱后误差 - 原始误差</span></span>
<span class="line"><span style="color:#E1E4E8;">        importance[featureIdx] </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> permutedScore </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> originalScore;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 归一化重要性</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sumImportance</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> importance.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(val), </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.featureImportance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> importance.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sumImportance);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 预测</span></span>
<span class="line"><span style="color:#B392F0;">  predict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">features</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isTrained) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Model not trained&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 收集所有树的预测</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> allPredictions</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trees.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tree</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> tree.</span><span style="color:#B392F0;">predict</span><span style="color:#E1E4E8;">(features));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 组合预测（投票或平均）</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRegression) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 回归：取平均值</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> treePredictions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> allPredictions.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pred</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> pred[i]);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> treePredictions.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">sum</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pred</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pred, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.trees.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 分类：多数投票</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> features.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> votes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">        allPredictions.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pred</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          const</span><span style="color:#79B8FF;"> vote</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> pred[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">          votes[vote] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (votes[vote] </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(votes).</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> b[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> b)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取特征重要性</span></span>
<span class="line"><span style="color:#B392F0;">  getFeatureImportance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.featureImportance;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (随机森林构建)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>训练数据: 1000个样本, 10个特征</span></span>
<span class="line"><span>构建100棵决策树</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每棵树的构建:</span></span>
<span class="line"><span>1. 自助采样: 从1000个样本中随机选择1000个（有放回）</span></span>
<span class="line"><span>   袋外样本约37% (1-1/e)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 节点分裂: 从10个特征中随机选择√10≈3个特征</span></span>
<span class="line"><span>   寻找最佳分裂点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 构建完整决策树</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预测新样本:</span></span>
<span class="line"><span>样本 → 每棵树预测 → </span></span>
<span class="line"><span>  树1: 类别A</span></span>
<span class="line"><span>  树2: 类别B  </span></span>
<span class="line"><span>  树3: 类别A</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  树100: 类别A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>投票结果: 类别A (60票) &gt; 类别B (40票)</span></span>
<span class="line"><span>最终预测: 类别A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特征重要性:</span></span>
<span class="line"><span>基于袋外误差计算，特征3最重要(重要性0.25)</span></span></code></pre></div>`,66)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
