import{_ as n,c as a,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const i=JSON.parse('{"title":"密码学算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是密码学算法","slug":"什么是密码学算法","link":"#什么是密码学算法","children":[]},{"level":2,"title":"密码学基础概念","slug":"密码学基础概念","link":"#密码学基础概念","children":[{"level":3,"title":"加密系统组成","slug":"加密系统组成","link":"#加密系统组成","children":[]},{"level":3,"title":"密码学分类","slug":"密码学分类","link":"#密码学分类","children":[]}]},{"level":2,"title":"对称加密算法","slug":"对称加密算法","link":"#对称加密算法","children":[{"level":3,"title":"AES 算法","slug":"aes-算法","link":"#aes-算法","children":[]},{"level":3,"title":"加密模式","slug":"加密模式","link":"#加密模式","children":[]}]},{"level":2,"title":"非对称加密算法","slug":"非对称加密算法","link":"#非对称加密算法","children":[{"level":3,"title":"RSA 算法","slug":"rsa-算法","link":"#rsa-算法","children":[]},{"level":3,"title":"椭圆曲线密码学","slug":"椭圆曲线密码学","link":"#椭圆曲线密码学","children":[]}]},{"level":2,"title":"密码学哈希函数","slug":"密码学哈希函数","link":"#密码学哈希函数","children":[{"level":3,"title":"SHA-256 算法","slug":"sha-256-算法","link":"#sha-256-算法","children":[]}]},{"level":2,"title":"密钥交换协议","slug":"密钥交换协议","link":"#密钥交换协议","children":[{"level":3,"title":"Diffie-Hellman 密钥交换","slug":"diffie-hellman-密钥交换","link":"#diffie-hellman-密钥交换","children":[]}]},{"level":2,"title":"数字签名算法","slug":"数字签名算法","link":"#数字签名算法","children":[{"level":3,"title":"数字签名基础","slug":"数字签名基础","link":"#数字签名基础","children":[]},{"level":3,"title":"ECDSA 签名","slug":"ecdsa-签名","link":"#ecdsa-签名","children":[]}]}],"relativePath":"basic/algorithm/advanced/cryptography.md","filePath":"basic/algorithm/advanced/cryptography.md"}'),o={name:"basic/algorithm/advanced/cryptography.md"};function e(c,s,t,E,r,y){return p(),a("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/advanced/cryptography.md for this page in Markdown format</div><h1 id="密码学算法" tabindex="-1">密码学算法 <a class="header-anchor" href="#密码学算法" aria-label="Permalink to &quot;密码学算法&quot;">​</a></h1><h2 id="什么是密码学算法" tabindex="-1">什么是密码学算法 <a class="header-anchor" href="#什么是密码学算法" aria-label="Permalink to &quot;什么是密码学算法&quot;">​</a></h2><p>密码学算法是保护信息安全的数学方法，通过加密、解密、签名和验证等操作确保数据的机密性、完整性和真实性。密码学是现代数字世界的基石，支撑着网络安全、数字货币和隐私保护等关键领域。</p><p>特点：</p><ul><li>机密性：防止未授权访问信息内容</li><li>完整性：确保信息在传输过程中不被篡改</li><li>认证性：验证信息发送者的身份</li><li>不可否认性：防止发送者事后否认发送行为</li></ul><p>示意图 (加密解密过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>明文 → [加密算法] → 密文 → [解密算法] → 明文</span></span>
<span class="line"><span>        ↑              ↑</span></span>
<span class="line"><span>       密钥           密钥</span></span></code></pre></div><h2 id="密码学基础概念" tabindex="-1">密码学基础概念 <a class="header-anchor" href="#密码学基础概念" aria-label="Permalink to &quot;密码学基础概念&quot;">​</a></h2><h3 id="加密系统组成" tabindex="-1">加密系统组成 <a class="header-anchor" href="#加密系统组成" aria-label="Permalink to &quot;加密系统组成&quot;">​</a></h3><p>密码系统由算法、密钥、明文、密文等核心要素构成。</p><p>特点：</p><ul><li>算法公开：现代密码学遵循 Kerckhoffs 原则，安全性依赖于密钥而非算法保密</li><li>密钥管理：密钥的安全存储和分发至关重要</li><li>安全目标：实现机密性、完整性、认证性和不可否认性</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 密码系统基础类</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Cryptosystem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.keySize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mode </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 密钥生成接口</span></span>
<span class="line"><span style="color:#B392F0;">  generateKey</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;generateKey method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加密接口</span></span>
<span class="line"><span style="color:#B392F0;">  encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;encrypt method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 解密接口</span></span>
<span class="line"><span style="color:#B392F0;">  decrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ciphertext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;decrypt method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 密钥验证</span></span>
<span class="line"><span style="color:#B392F0;">  validateKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">key </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> key.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> !==</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.keySize) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`Invalid key size. Expected \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">keySize</span><span style="color:#9ECBFF;">} bytes\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 填充方案</span></span>
<span class="line"><span style="color:#B392F0;">  applyPadding</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">blockSize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> paddingLength</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> blockSize </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (data.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> %</span><span style="color:#E1E4E8;"> blockSize);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> padding</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(paddingLength).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(paddingLength);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">data, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">padding]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 移除填充</span></span>
<span class="line"><span style="color:#B392F0;">  removePadding</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> paddingLength</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> data[data.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, data.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> paddingLength);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="密码学分类" tabindex="-1">密码学分类 <a class="header-anchor" href="#密码学分类" aria-label="Permalink to &quot;密码学分类&quot;">​</a></h3><p>密码学算法根据密钥使用方式分为对称加密和非对称加密。</p><p>特点：</p><ul><li>对称加密：加解密使用相同密钥，效率高但密钥分发困难</li><li>非对称加密：使用公钥-私钥对，解决密钥分发问题但效率较低</li><li>混合加密：结合两者优势，用非对称加密传输对称密钥</li></ul><p>示意图 (密码学分类)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>密码学算法</span></span>
<span class="line"><span>├── 对称加密</span></span>
<span class="line"><span>│   ├── 流密码</span></span>
<span class="line"><span>│   │   ├── RC4</span></span>
<span class="line"><span>│   │   └── ChaCha20</span></span>
<span class="line"><span>│   └── 分组密码</span></span>
<span class="line"><span>│       ├── AES</span></span>
<span class="line"><span>│       ├── DES</span></span>
<span class="line"><span>│       └── 3DES</span></span>
<span class="line"><span>├── 非对称加密</span></span>
<span class="line"><span>│   ├── RSA</span></span>
<span class="line"><span>│   ├── ECC</span></span>
<span class="line"><span>│   └── ElGamal</span></span>
<span class="line"><span>└── 密码学哈希</span></span>
<span class="line"><span>    ├── SHA-256</span></span>
<span class="line"><span>    ├── SHA-3</span></span>
<span class="line"><span>    └── BLAKE2</span></span></code></pre></div><h2 id="对称加密算法" tabindex="-1">对称加密算法 <a class="header-anchor" href="#对称加密算法" aria-label="Permalink to &quot;对称加密算法&quot;">​</a></h2><h3 id="aes-算法" tabindex="-1">AES 算法 <a class="header-anchor" href="#aes-算法" aria-label="Permalink to &quot;AES 算法&quot;">​</a></h3><p>高级加密标准，是目前最常用的对称加密算法。</p><p>特点：</p><ul><li>分组加密：固定 128 位分组大小</li><li>多轮加密：根据密钥长度进行 10-14 轮变换</li><li>强安全性：抵抗已知密码分析攻击</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// AES加密实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> AES</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Cryptosystem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keySize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.keySize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keySize; </span><span style="color:#6A737D;">// 128, 192, 256位</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.blockSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 128位 = 16字节</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.rounds </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getRounds</span><span style="color:#E1E4E8;">(keySize);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;AES&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getRounds</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keySize</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    switch</span><span style="color:#E1E4E8;"> (keySize) {</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 128</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 192</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 12</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      case</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> 14</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      default</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Invalid key size&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // S盒 - 字节替换表</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> S_BOX</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#79B8FF;">    0x63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x7c</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x77</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x7b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xf2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x6b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x6f</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x01</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x67</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x2b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xfe</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xd7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xab</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x76</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    0xca</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x82</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x7d</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xfa</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x59</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x47</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xf0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xad</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xd4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xaf</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x9c</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x72</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">    // ... 完整的S盒数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 轮常数</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> RCON</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#79B8FF;">    0x01</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x02</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x04</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x08</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x40</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x80</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x1b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x36</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 密钥扩展</span></span>
<span class="line"><span style="color:#B392F0;">  keyExpansion</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> keyWords</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> key.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> /</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> expandedKey</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rounds </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    expandedKey.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keyWords; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rounds </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">); i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> expandedKey.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> keyWords </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 密钥扩展核心函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">subWord</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotWord</span><span style="color:#E1E4E8;">(temp));</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^=</span><span style="color:#79B8FF;"> AES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">RCON</span><span style="color:#E1E4E8;">[Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> keyWords) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (keyWords </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 6</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> keyWords </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        temp </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">subWord</span><span style="color:#E1E4E8;">(temp);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        expandedKey[</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> expandedKey[</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> keyWords) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> temp[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> expandedKey;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 字节替换</span></span>
<span class="line"><span style="color:#B392F0;">  subWord</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(word.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">byte</span><span style="color:#F97583;"> =&gt;</span><span style="color:#79B8FF;"> AES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">S_BOX</span><span style="color:#E1E4E8;">[byte]));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 字循环</span></span>
<span class="line"><span style="color:#B392F0;">  rotWord</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">word</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([word[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], word[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], word[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], word[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加密单块</span></span>
<span class="line"><span style="color:#B392F0;">  encryptBlock</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expandedKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> state </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(block);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始轮密钥加</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addRoundKey</span><span style="color:#E1E4E8;">(state, expandedKey, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 主轮次</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> round </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; round </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.rounds; round</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">subBytes</span><span style="color:#E1E4E8;">(state);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shiftRows</span><span style="color:#E1E4E8;">(state);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mixColumns</span><span style="color:#E1E4E8;">(state);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addRoundKey</span><span style="color:#E1E4E8;">(state, expandedKey, round);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 最终轮</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">subBytes</span><span style="color:#E1E4E8;">(state);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shiftRows</span><span style="color:#E1E4E8;">(state);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addRoundKey</span><span style="color:#E1E4E8;">(state, expandedKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rounds);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> state;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 字节替换</span></span>
<span class="line"><span style="color:#B392F0;">  subBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> AES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">S_BOX</span><span style="color:#E1E4E8;">[state[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 行移位</span></span>
<span class="line"><span style="color:#B392F0;">  shiftRows</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 第1行左移1位</span></span>
<span class="line"><span style="color:#E1E4E8;">    [state[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [state[</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#6A737D;">    // 第2行左移2位</span></span>
<span class="line"><span style="color:#E1E4E8;">    [state[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [state[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#6A737D;">    // 第3行左移3位</span></span>
<span class="line"><span style="color:#E1E4E8;">    [state[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [state[</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">], state[</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">]];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 列混合</span></span>
<span class="line"><span style="color:#B392F0;">  mixColumns</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> state.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">, i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x02</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x03</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x02</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x03</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x02</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x03</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 3</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x03</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> a[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x02</span><span style="color:#E1E4E8;">, a[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // Galois域乘法</span></span>
<span class="line"><span style="color:#B392F0;">  gmul</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) p </span><span style="color:#F97583;">^=</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> hiBit</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0x80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      a </span><span style="color:#F97583;">&lt;&lt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (hiBit) a </span><span style="color:#F97583;">^=</span><span style="color:#79B8FF;"> 0x1b</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      b </span><span style="color:#F97583;">&gt;&gt;=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 轮密钥加</span></span>
<span class="line"><span style="color:#B392F0;">  addRoundKey</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expandedKey</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">round</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state[i] </span><span style="color:#F97583;">^=</span><span style="color:#E1E4E8;"> expandedKey[round </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 16</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加密</span></span>
<span class="line"><span style="color:#B392F0;">  encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">validateKey</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> expandedKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">keyExpansion</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">splitIntoBlocks</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ciphertext</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(plaintext.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> blocks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> encryptedBlock</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encryptBlock</span><span style="color:#E1E4E8;">(blocks[i], expandedKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">      ciphertext.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(encryptedBlock, i </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> ciphertext;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 分块处理</span></span>
<span class="line"><span style="color:#B392F0;">  splitIntoBlocks</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.blockSize) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> block</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">      block.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(i, i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.blockSize));</span></span>
<span class="line"><span style="color:#E1E4E8;">      blocks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(block);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> blocks;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (AES 加密轮次)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>AES-128加密流程 (10轮):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>明文块 (16字节)</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>初始轮密钥加</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>循环9轮:</span></span>
<span class="line"><span>  字节替换 (SubBytes)</span></span>
<span class="line"><span>  行移位 (ShiftRows) </span></span>
<span class="line"><span>  列混合 (MixColumns)</span></span>
<span class="line"><span>  轮密钥加 (AddRoundKey)</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>最终轮:</span></span>
<span class="line"><span>  字节替换</span></span>
<span class="line"><span>  行移位</span></span>
<span class="line"><span>  轮密钥加</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>密文块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>状态矩阵变化:</span></span>
<span class="line"><span>初始:    [s00 s01 s02 s03]</span></span>
<span class="line"><span>         [s10 s11 s12 s13]</span></span>
<span class="line"><span>         [s20 s21 s22 s23] </span></span>
<span class="line"><span>         [s30 s31 s32 s33]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>字节替换后: [S(s00) S(s01) S(s02) S(s03)]</span></span>
<span class="line"><span>          [S(s10) S(s11) S(s12) S(s13)]</span></span>
<span class="line"><span>          [S(s20) S(s21) S(s22) S(s23)]</span></span>
<span class="line"><span>          [S(s30) S(s31) S(s32) S(s33)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>行移位后:  [S(s00) S(s01) S(s02) S(s03)]</span></span>
<span class="line"><span>          [S(s11) S(s12) S(s13) S(s10)]</span></span>
<span class="line"><span>          [S(s22) S(s23) S(s20) S(s21)]</span></span>
<span class="line"><span>          [S(s33) S(s30) S(s31) S(s32)]</span></span></code></pre></div><h3 id="加密模式" tabindex="-1">加密模式 <a class="header-anchor" href="#加密模式" aria-label="Permalink to &quot;加密模式&quot;">​</a></h3><p>分组密码的工作模式，定义如何对多个数据块进行加密。</p><p>特点：</p><ul><li>ECB 模式：简单但不安全，相同明文块产生相同密文块</li><li>CBC 模式：使用初始化向量，每个块依赖于前一个块</li><li>CTR 模式：将分组密码转换为流密码，支持并行加密</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 加密模式实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> BlockCipherModes</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> ECB</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> class</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cipher</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">splitIntoBlocks</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> ciphertext</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(plaintext.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> blocks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> encryptedBlock</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">encryptBlock</span><span style="color:#E1E4E8;">(blocks[i], key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        ciphertext.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(encryptedBlock, i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cipher.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ciphertext;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> CBC</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> class</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cipher</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iv</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (iv.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> !==</span><span style="color:#E1E4E8;"> cipher.blockSize) {</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;IV must match block size&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">splitIntoBlocks</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> ciphertext</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(plaintext.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> previousBlock </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iv;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> blocks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 与前一个密文块异或</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> xoredBlock</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(cipher.blockSize);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> cipher.blockSize; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          xoredBlock[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> blocks[i][j] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> previousBlock[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> encryptedBlock</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">encryptBlock</span><span style="color:#E1E4E8;">(xoredBlock, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        ciphertext.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(encryptedBlock, i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cipher.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">        previousBlock </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> encryptedBlock;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ciphertext;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> decrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ciphertext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cipher</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">iv</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">splitIntoBlocks</span><span style="color:#E1E4E8;">(ciphertext);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> plaintext</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(ciphertext.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> previousBlock </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> iv;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> blocks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> decryptedBlock</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">decryptBlock</span><span style="color:#E1E4E8;">(blocks[i], key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 与前一个密文块异或</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> xoredBlock</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(cipher.blockSize);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> cipher.blockSize; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          xoredBlock[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> decryptedBlock[j] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> previousBlock[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        plaintext.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(xoredBlock, i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cipher.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">        previousBlock </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> blocks[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> plaintext;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  static</span><span style="color:#FFAB70;"> CTR</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> class</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cipher</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">nonce</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">splitIntoBlocks</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> ciphertext</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(plaintext.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> blocks.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 生成计数器值: nonce + counter</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> counter</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(cipher.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">        counter.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(nonce);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">incrementCounter</span><span style="color:#E1E4E8;">(counter, i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 加密计数器值作为密钥流</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> keyStream</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">encryptBlock</span><span style="color:#E1E4E8;">(counter, key);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 与明文异或</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> encryptedBlock</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(cipher.blockSize);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> cipher.blockSize; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          encryptedBlock[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> blocks[i][j] </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> keyStream[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        ciphertext.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(encryptedBlock, i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cipher.blockSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ciphertext;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    static</span><span style="color:#B392F0;"> incrementCounter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">counter</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 简单的计数器递增实现</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> counter.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> sum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> counter[i] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xff</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        counter[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (sum </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (CBC 模式加密)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>CBC加密模式:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>初始化向量 (IV)</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>明文块1 → XOR → 加密 → 密文块1</span></span>
<span class="line"><span>    ↓               ↓</span></span>
<span class="line"><span>明文块2 → XOR → 加密 → 密文块2</span></span>
<span class="line"><span>    ↓               ↓</span></span>
<span class="line"><span>明文块3 → XOR → 加密 → 密文块3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解密过程:</span></span>
<span class="line"><span>密文块1 → 解密 → XOR → 明文块1</span></span>
<span class="line"><span>    ↓               ↑</span></span>
<span class="line"><span>    └───────────────┘ (使用IV)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>密文块2 → 解密 → XOR → 明文块2  </span></span>
<span class="line"><span>    ↓               ↑</span></span>
<span class="line"><span>    └───────────────┘ (使用密文块1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每个块的解密依赖于前一个密文块</span></span></code></pre></div><h2 id="非对称加密算法" tabindex="-1">非对称加密算法 <a class="header-anchor" href="#非对称加密算法" aria-label="Permalink to &quot;非对称加密算法&quot;">​</a></h2><h3 id="rsa-算法" tabindex="-1">RSA 算法 <a class="header-anchor" href="#rsa-算法" aria-label="Permalink to &quot;RSA 算法&quot;">​</a></h3><p>基于大数分解困难性的非对称加密算法。</p><p>特点：</p><ul><li>密钥对：公钥用于加密，私钥用于解密</li><li>数学基础：依赖大素数分解的困难性</li><li>数字签名：支持签名和验证功能</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// RSA算法实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> RSA</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Cryptosystem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">keySize</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2048</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.keySize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> keySize;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;RSA&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.publicKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.privateKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成RSA密钥对</span></span>
<span class="line"><span style="color:#B392F0;">  generateKey</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 生成大素数</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> p</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateLargePrime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keySize </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> q</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateLargePrime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keySize </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> n</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> q; </span><span style="color:#6A737D;">// 模数</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> phi</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 欧拉函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 选择公钥指数</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> e </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 65537</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gcd</span><span style="color:#E1E4E8;">(e, phi) </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      e </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算私钥指数</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> d</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modInverse</span><span style="color:#E1E4E8;">(e, phi);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.publicKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { e, n };</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.privateKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { d, n };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      publicKey: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.publicKey,</span></span>
<span class="line"><span style="color:#E1E4E8;">      privateKey: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.privateKey</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成大素数（简化版）</span></span>
<span class="line"><span style="color:#B392F0;">  generateLargePrime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bits</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实际应用中应使用更复杂的素数生成算法</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> min</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(bits </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> max</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(bits) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> candidate</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(min, max);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isPrime</span><span style="color:#E1E4E8;">(candidate)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> candidate;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 随机大整数</span></span>
<span class="line"><span style="color:#B392F0;">  randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">min</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> range</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bits</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> range.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> bits; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result </span><span style="color:#F97583;">|=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> &lt;&lt;</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 米勒-拉宾素性测试</span></span>
<span class="line"><span style="color:#B392F0;">  isPrime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 将n-1写成2^s * d</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (d </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      d </span><span style="color:#F97583;">/=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      s</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> k; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(a, d, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> continueLoop </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(x, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          continueLoop </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">continueLoop) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模幂运算</span></span>
<span class="line"><span style="color:#B392F0;">  modPow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">base</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exponent</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modulus</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      exponent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> exponent </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (base </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 扩展欧几里得算法</span></span>
<span class="line"><span style="color:#B392F0;">  extendedGcd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [a, </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">gcd</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">x1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">y1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extendedGcd</span><span style="color:#E1E4E8;">(b, a </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> x</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> y1;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> x1 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> y1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> [gcd, x, y];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模逆元</span></span>
<span class="line"><span style="color:#B392F0;">  modInverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">gcd</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">extendedGcd</span><span style="color:#E1E4E8;">(a, m);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (gcd </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Modular inverse does not exist&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> m;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 最大公约数</span></span>
<span class="line"><span style="color:#B392F0;">  gcd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      [a, b] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [b, a </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> b];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 加密</span></span>
<span class="line"><span style="color:#B392F0;">  encrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">plaintext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">publicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">textToBigInt</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">e</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicKey;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (message </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Message too large for modulus&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> ciphertext</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(message, e, n);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntToText</span><span style="color:#E1E4E8;">(ciphertext);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 解密</span></span>
<span class="line"><span style="color:#B392F0;">  decrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ciphertext</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">textToBigInt</span><span style="color:#E1E4E8;">(ciphertext);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">d</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> privateKey;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> plaintext</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(message, d, n);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntToText</span><span style="color:#E1E4E8;">(plaintext);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 文本与大整数转换</span></span>
<span class="line"><span style="color:#B392F0;">  textToBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> text.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> +</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(text.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  bigIntToText</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bigint</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bigint;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> String.</span><span style="color:#B392F0;">fromCharCode</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">      n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // RSA签名</span></span>
<span class="line"><span style="color:#B392F0;">  sign</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hashMessage</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> signature</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(hash, privateKey.d, privateKey.n);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> signature;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 验证签名</span></span>
<span class="line"><span style="color:#B392F0;">  verify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">publicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hashMessage</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> decryptedHash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(signature, publicKey.e, publicKey.n);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hash </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> decryptedHash;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 简单的哈希函数</span></span>
<span class="line"><span style="color:#B392F0;">  hashMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 实际应用中应使用加密哈希函数如SHA-256</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> hash </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> message.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (hash </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 31</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> +</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(message.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(i))) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hash;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (RSA 加密过程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>RSA密钥生成:</span></span>
<span class="line"><span>1. 选择两个大素数 p 和 q</span></span>
<span class="line"><span>2. 计算 n = p × q</span></span>
<span class="line"><span>3. 计算 φ(n) = (p-1)(q-1)  </span></span>
<span class="line"><span>4. 选择 e 使得 1 &lt; e &lt; φ(n) 且 gcd(e, φ(n)) = 1</span></span>
<span class="line"><span>5. 计算 d = e⁻¹ mod φ(n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>公钥: (e, n)</span></span>
<span class="line"><span>私钥: (d, n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加密: c = mᵉ mod n</span></span>
<span class="line"><span>解密: m = cᵈ mod n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数字签名:</span></span>
<span class="line"><span>签名: s = hash(m)ᵈ mod n  </span></span>
<span class="line"><span>验证: hash(m) = sᵉ mod n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>p=61, q=53</span></span>
<span class="line"><span>n=3233, φ(n)=3120</span></span>
<span class="line"><span>选择e=17</span></span>
<span class="line"><span>计算d=2753 (17×2753=46801≡1 mod 3120)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加密m=65: </span></span>
<span class="line"><span>c=65¹⁷ mod 3233=2790</span></span>
<span class="line"><span>解密c=2790:</span></span>
<span class="line"><span>m=2790²⁷⁵³ mod 3233=65</span></span></code></pre></div><h3 id="椭圆曲线密码学" tabindex="-1">椭圆曲线密码学 <a class="header-anchor" href="#椭圆曲线密码学" aria-label="Permalink to &quot;椭圆曲线密码学&quot;">​</a></h3><p>基于椭圆曲线离散对数问题的非对称加密算法。</p><p>特点：</p><ul><li>高安全性：相同安全强度下密钥长度比 RSA 短</li><li>计算效率：运算速度比 RSA 快</li><li>资源友好：适合资源受限环境</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 椭圆曲线密码学实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ECC</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Cryptosystem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">curveName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;secp256k1&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.curve </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCurveParameters</span><span style="color:#E1E4E8;">(curveName);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;ECC&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取椭圆曲线参数</span></span>
<span class="line"><span style="color:#B392F0;">  getCurveParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">curveName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> curves</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;secp256k1&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        p: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#79B8FF;"> 256</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#79B8FF;"> 32</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 977</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        a: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        b: </span><span style="color:#79B8FF;">7</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        n: </span><span style="color:#79B8FF;">0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        Gx: </span><span style="color:#79B8FF;">0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        Gy: </span><span style="color:#79B8FF;">0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8</span><span style="color:#F97583;">n</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> curves[curveName];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 椭圆曲线点类</span></span>
<span class="line"><span style="color:#F97583;">  class</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isInfinity</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isInfinity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isInfinity;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 点相等判断</span></span>
<span class="line"><span style="color:#B392F0;">    equals</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">other</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInfinity </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> other.isInfinity) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isInfinity </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> other.isInfinity) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> other.x </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.y </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> other.y;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.isInfinity </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;Point(Infinity)&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> \`Point(\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">x</span><span style="color:#9ECBFF;">}, \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">y</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 点加法</span></span>
<span class="line"><span style="color:#B392F0;">  pointAdd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">P</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">Q</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">curve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">.isInfinity) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> Q</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Q</span><span style="color:#E1E4E8;">.isInfinity) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">equals</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Q</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pointDouble</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">, curve);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">p</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> curve;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算斜率 λ = (Qy - Py) / (Qx - Px) mod p</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> numerator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Q</span><span style="color:#E1E4E8;">.y </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.y) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> denominator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Q</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.x) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lambda</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (numerator </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modInverse</span><span style="color:#E1E4E8;">(denominator, p)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算新点坐标</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> x</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (lambda </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> lambda </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> Q</span><span style="color:#E1E4E8;">.x) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (lambda </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> x) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.y) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPositive</span><span style="color:#E1E4E8;">(x, p), </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPositive</span><span style="color:#E1E4E8;">(y, p));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 点倍乘</span></span>
<span class="line"><span style="color:#B392F0;">  pointDouble</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">P</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">curve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">.isInfinity) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">p</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> curve;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算斜率 λ = (3Px² + a) / (2Py) mod p</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> numerator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> a) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> denominator</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.y) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lambda</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (numerator </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modInverse</span><span style="color:#E1E4E8;">(denominator, p)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算新点坐标</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> x</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (lambda </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> lambda </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.x) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> y</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (lambda </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">P</span><span style="color:#E1E4E8;">.x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> x) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">.y) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPositive</span><span style="color:#E1E4E8;">(x, p), </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPositive</span><span style="color:#E1E4E8;">(y, p));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 标量乘法 k * P</span></span>
<span class="line"><span style="color:#B392F0;">  scalarMultiply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">k</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">P</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">curve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 无穷远点</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> addend </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> P</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pointAdd</span><span style="color:#E1E4E8;">(result, addend, curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      addend </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pointDouble</span><span style="color:#E1E4E8;">(addend, curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">      k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模逆元</span></span>
<span class="line"><span style="color:#B392F0;">  modInverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(a, m </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, m); </span><span style="color:#6A737D;">// 使用费马小定理</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模幂运算</span></span>
<span class="line"><span style="color:#B392F0;">  modPow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">base</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exponent</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modulus</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      exponent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> exponent </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (base </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 确保模运算结果为正值</span></span>
<span class="line"><span style="color:#B392F0;">  modPositive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> p) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成密钥对</span></span>
<span class="line"><span style="color:#B392F0;">  generateKey</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gy</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> G</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Point</span><span style="color:#E1E4E8;">(Gx, Gy);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 生成私钥 (1 &lt; privateKey &lt; n)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> privateKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算公钥 publicKey = privateKey * G</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> publicKey</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scalarMultiply</span><span style="color:#E1E4E8;">(privateKey, </span><span style="color:#79B8FF;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      privateKey,</span></span>
<span class="line"><span style="color:#E1E4E8;">      publicKey</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // ECDH密钥交换</span></span>
<span class="line"><span style="color:#B392F0;">  computeSharedSecret</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">privateKey</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">otherPublicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sharedPoint</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scalarMultiply</span><span style="color:#E1E4E8;">(privateKey, otherPublicKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 使用共享点的x坐标作为共享密钥</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sharedPoint.x;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 随机大整数</span></span>
<span class="line"><span style="color:#B392F0;">  randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">min</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> range</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bits</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> range.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> bits; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result </span><span style="color:#F97583;">|=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> &lt;&lt;</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (椭圆曲线运算)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>椭圆曲线: y² = x³ + ax + b mod p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>点加法几何解释:</span></span>
<span class="line"><span>给定点P和Q，连接P和Q的直线与曲线交于第三点R&#39;</span></span>
<span class="line"><span>点P+Q是R&#39;关于x轴的对称点R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>点倍乘: </span></span>
<span class="line"><span>给定点P，曲线在P点的切线与曲线交于另一点R&#39;</span></span>
<span class="line"><span>点2P是R&#39;关于x轴的对称点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>secp256k1曲线参数:</span></span>
<span class="line"><span>p = 2²⁵⁶ - 2³² - 977</span></span>
<span class="line"><span>a = 0, b = 7</span></span>
<span class="line"><span>基点G: </span></span>
<span class="line"><span>x=79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798</span></span>
<span class="line"><span>y=483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>密钥生成:</span></span>
<span class="line"><span>私钥d: 随机数 1 &lt; d &lt; n</span></span>
<span class="line"><span>公钥Q: Q = d × G</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ECDH密钥交换:</span></span>
<span class="line"><span>Alice: 私钥a, 公钥A = a×G</span></span>
<span class="line"><span>Bob: 私钥b, 公钥B = b×G  </span></span>
<span class="line"><span>共享密钥: a×B = a×(b×G) = b×(a×G) = b×A</span></span></code></pre></div><h2 id="密码学哈希函数" tabindex="-1">密码学哈希函数 <a class="header-anchor" href="#密码学哈希函数" aria-label="Permalink to &quot;密码学哈希函数&quot;">​</a></h2><h3 id="sha-256-算法" tabindex="-1">SHA-256 算法 <a class="header-anchor" href="#sha-256-算法" aria-label="Permalink to &quot;SHA-256 算法&quot;">​</a></h3><p>安全哈希算法，产生 256 位哈希值。</p><p>特点：</p><ul><li>抗碰撞性：难以找到两个不同输入产生相同哈希值</li><li>雪崩效应：输入微小变化导致输出巨大变化</li><li>单向性：从哈希值无法推导出原始输入</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// SHA-256实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> SHA256</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;SHA-256&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.blockSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 字节</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.digestSize </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 32</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 字节</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 初始哈希值</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">      0x6a09e667</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xbb67ae85</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x3c6ef372</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa54ff53a</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0x510e527f</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x9b05688c</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x1f83d9ab</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x5be0cd19</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 常数K</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">K</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#79B8FF;">      0x428a2f98</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x71374491</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xb5c0fbcf</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xe9b5dba5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x3956c25b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x59f111f1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x923f82a4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xab1c5ed5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0xd807aa98</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x12835b01</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x243185be</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x550c7dc3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x72be5d74</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x80deb1fe</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x9bdc06a7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc19bf174</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0xe49b69c1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xefbe4786</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x0fc19dc6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x240ca1cc</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x2de92c6f</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x4a7484aa</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x5cb0a9dc</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x76f988da</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0x983e5152</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa831c66d</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xb00327c8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xbf597fc7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc6e00bf3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xd5a79147</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x06ca6351</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x14292967</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0x27b70a85</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x2e1b2138</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x4d2c6dfc</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x53380d13</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x650a7354</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x766a0abb</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x81c2c92e</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x92722c85</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0xa2bfe8a1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa81a664b</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc24b8b70</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc76c51a3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xd192e819</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xd6990624</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xf40e3585</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x106aa070</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0x19a4c116</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x1e376c08</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x2748774c</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x34b0bcb5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x391c0cb3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x4ed8aa4a</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x5b9cca4f</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x682e6ff3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      0x748f82ee</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x78a5636f</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x84c87814</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x8cc70208</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x90befffa</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xa4506ceb</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xbef9a3f7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0xc67178f2</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 右旋转</span></span>
<span class="line"><span style="color:#B392F0;">  rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> n) </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">32</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> n));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 右移位</span></span>
<span class="line"><span style="color:#B392F0;">  shr</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // SHA-256函数</span></span>
<span class="line"><span style="color:#B392F0;">  sigma0</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  sigma1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">shr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  Sigma0</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  Sigma1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, x) </span><span style="color:#F97583;">^</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  ch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">z</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> y) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> z);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  maj</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">z</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> y) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> z) </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;"> (y </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> z);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 消息填充</span></span>
<span class="line"><span style="color:#B392F0;">  padMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bitLength</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> message.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> *</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> padded</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.blockSize </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">((message.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> 9</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.blockSize));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加原始消息</span></span>
<span class="line"><span style="color:#E1E4E8;">    padded.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加1位后跟0位</span></span>
<span class="line"><span style="color:#E1E4E8;">    padded[message.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0x80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 添加长度（大端序64位）</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> lengthBytes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DataView</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> ArrayBuffer</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    lengthBytes.</span><span style="color:#B392F0;">setBigUint64</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">BigInt</span><span style="color:#E1E4E8;">(bitLength), </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      padded[padded.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 8</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lengthBytes.</span><span style="color:#B392F0;">getUint8</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> padded;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算哈希</span></span>
<span class="line"><span style="color:#B392F0;">  hash</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> message </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextEncoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> padded</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padMessage</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parseMessage</span><span style="color:#E1E4E8;">(padded);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> [a, b, c, d, e, f, g, h] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.h;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 处理每个512位块</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> block</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> blocks) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> W</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 准备消息调度</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; t </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; t</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        W</span><span style="color:#E1E4E8;">[t] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> block[t];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; t </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">; t</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">        W</span><span style="color:#E1E4E8;">[t] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sigma1</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">W</span><span style="color:#E1E4E8;">[t</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> W</span><span style="color:#E1E4E8;">[t</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sigma0</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">W</span><span style="color:#E1E4E8;">[t</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> W</span><span style="color:#E1E4E8;">[t</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 初始化工作变量</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> [a2, b2, c2, d2, e2, f2, g2, h2] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [a, b, c, d, e, f, g, h];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 主循环</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; t </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">; t</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> T1</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (h2 </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Sigma1</span><span style="color:#E1E4E8;">(e2) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ch</span><span style="color:#E1E4E8;">(e2, f2, g2) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">K</span><span style="color:#E1E4E8;">[t] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> W</span><span style="color:#E1E4E8;">[t]) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> T2</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Sigma0</span><span style="color:#E1E4E8;">(a2) </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">maj</span><span style="color:#E1E4E8;">(a2, b2, c2)) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        h2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> g2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        g2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> f2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        f2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        e2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (d2 </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> T1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        d2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        c2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        b2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a2;</span></span>
<span class="line"><span style="color:#E1E4E8;">        a2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">T1</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> T2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 更新哈希值</span></span>
<span class="line"><span style="color:#E1E4E8;">      a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> a2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (b </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (c </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (d </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> d2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (e </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> e2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (f </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> f2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (g </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> g2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (h </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> h2) </span><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 生成最终哈希值</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hashBytes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hashView</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DataView</span><span style="color:#E1E4E8;">(hashBytes.buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    [a, b, c, d, e, f, g, h].</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      hashView.</span><span style="color:#B392F0;">setUint32</span><span style="color:#E1E4E8;">(index </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">, value, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> hashBytes;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 解析消息为32位字数组</span></span>
<span class="line"><span style="color:#B392F0;">  parseMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">padded</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blocks</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> DataView</span><span style="color:#E1E4E8;">(padded.buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> padded.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 64</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> block</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 16</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        block[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> view.</span><span style="color:#B392F0;">getUint32</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      blocks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(block);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> blocks;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 哈希值转换为十六进制字符串</span></span>
<span class="line"><span style="color:#B392F0;">  toHex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hashBytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(hashBytes)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">b</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> b.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (SHA-256 压缩函数)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>SHA-256处理流程:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>消息填充:</span></span>
<span class="line"><span>原始消息 → 添加1 → 添加0 → 添加长度(64位) → 填充后消息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分块处理(512位/块):</span></span>
<span class="line"><span>对于每个消息块:</span></span>
<span class="line"><span>  扩展消息调度W[0..63]:</span></span>
<span class="line"><span>    W[0..15] = 消息块</span></span>
<span class="line"><span>    W[16..63]: W[t] = σ1(W[t-2]) + W[t-7] + σ0(W[t-15]) + W[t-16]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  压缩函数:</span></span>
<span class="line"><span>    初始化: a,b,c,d,e,f,g,h = 当前哈希值</span></span>
<span class="line"><span>    for t=0 to 63:</span></span>
<span class="line"><span>      T1 = h + Σ1(e) + Ch(e,f,g) + K[t] + W[t]</span></span>
<span class="line"><span>      T2 = Σ0(a) + Maj(a,b,c)</span></span>
<span class="line"><span>      h = g</span></span>
<span class="line"><span>      g = f  </span></span>
<span class="line"><span>      f = e</span></span>
<span class="line"><span>      e = d + T1</span></span>
<span class="line"><span>      d = c</span></span>
<span class="line"><span>      c = b</span></span>
<span class="line"><span>      b = a</span></span>
<span class="line"><span>      a = T1 + T2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    更新哈希值: </span></span>
<span class="line"><span>      a,b,c,d,e,f,g,h += 工作变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终哈希 = 连接a,b,c,d,e,f,g,h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数定义:</span></span>
<span class="line"><span>Ch(x,y,z) = (x ∧ y) ⊕ (¬x ∧ z)</span></span>
<span class="line"><span>Maj(x,y,z) = (x ∧ y) ⊕ (x ∧ z) ⊕ (y ∧ z)</span></span>
<span class="line"><span>Σ0(x) = ROTR²(x) ⊕ ROTR¹³(x) ⊕ ROTR²²(x)</span></span>
<span class="line"><span>Σ1(x) = ROTR⁶(x) ⊕ ROTR¹¹(x) ⊕ ROTR²⁵(x)</span></span>
<span class="line"><span>σ0(x) = ROTR⁷(x) ⊕ ROTR¹⁸(x) ⊕ SHR³(x)</span></span>
<span class="line"><span>σ1(x) = ROTR¹⁷(x) ⊕ ROTR¹⁹(x) ⊕ SHR¹⁰(x)</span></span></code></pre></div><h2 id="密钥交换协议" tabindex="-1">密钥交换协议 <a class="header-anchor" href="#密钥交换协议" aria-label="Permalink to &quot;密钥交换协议&quot;">​</a></h2><h3 id="diffie-hellman-密钥交换" tabindex="-1">Diffie-Hellman 密钥交换 <a class="header-anchor" href="#diffie-hellman-密钥交换" aria-label="Permalink to &quot;Diffie-Hellman 密钥交换&quot;">​</a></h3><p>允许双方在不安全信道上建立共享密钥。</p><p>特点：</p><ul><li>完美前向保密：长期私钥泄露不影响过去会话安全</li><li>中间人攻击：需要额外认证机制防止中间人攻击</li><li>数学基础：基于离散对数问题的困难性</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// Diffie-Hellman密钥交换实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> DiffieHellman</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">primeLength</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2048</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.primeLength </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> primeLength;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.p </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 大素数</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.g </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 生成元</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.privateKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.publicKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成DH参数</span></span>
<span class="line"><span style="color:#B392F0;">  generateParameters</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 生成安全素数 p = 2q + 1</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.p </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateSafePrime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.primeLength);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 寻找生成元 g</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.g </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findGenerator</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { p: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p, g: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.g };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成安全素数</span></span>
<span class="line"><span style="color:#B392F0;">  generateSafePrime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bits</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 生成随机奇数</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> q </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">        2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(bits </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#79B8FF;">        2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> **</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(bits </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 确保q是奇数</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (q </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) q </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> p</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> q </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isPrime</span><span style="color:#E1E4E8;">(p) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">isPrime</span><span style="color:#E1E4E8;">(q)) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 寻找生成元</span></span>
<span class="line"><span style="color:#B392F0;">  findGenerator</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> q</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">; g </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">; g</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 检查g是模p的生成元</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(g, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, p) </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(g, q, p) </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> g;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 回退值</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成密钥对</span></span>
<span class="line"><span style="color:#B392F0;">  generateKeyPair</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.g) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">generateParameters</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 生成私钥 (1 &lt; privateKey &lt; p-1)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.privateKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算公钥 publicKey = g^privateKey mod p</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.publicKey </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.g, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.privateKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      privateKey: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.privateKey,</span></span>
<span class="line"><span style="color:#E1E4E8;">      publicKey: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.publicKey</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 计算共享密钥</span></span>
<span class="line"><span style="color:#B392F0;">  computeSharedSecret</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">otherPublicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.privateKey) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Private key not generated&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // sharedSecret = otherPublicKey^privateKey mod p</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(otherPublicKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.privateKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.p);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 模幂运算</span></span>
<span class="line"><span style="color:#B392F0;">  modPow</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">base</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exponent</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">modulus</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> base </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (exponent </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      exponent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> exponent </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (base </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> base) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> modulus;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 随机大整数</span></span>
<span class="line"><span style="color:#B392F0;">  randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">min</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> range</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bits</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> range.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> bits; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0.5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          result </span><span style="color:#F97583;">|=</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> &lt;&lt;</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> min;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 米勒-拉宾素性测试</span></span>
<span class="line"><span style="color:#B392F0;">  isPrime</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 3</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> (d </span><span style="color:#F97583;">%</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      d </span><span style="color:#F97583;">/=</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      s</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> k; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(a, d, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      let</span><span style="color:#E1E4E8;"> continueLoop </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        x </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">modPow</span><span style="color:#E1E4E8;">(x, </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n);</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          continueLoop </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">          break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">continueLoop) </span><span style="color:#F97583;">return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (Diffie-Hellman 密钥交换)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>Diffie-Hellman协议:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>公共参数: 大素数p, 生成元g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Alice                         Bob</span></span>
<span class="line"><span>生成私钥a                    生成私钥b</span></span>
<span class="line"><span>计算公钥A = gᵃ mod p        计算公钥B = gᵇ mod p</span></span>
<span class="line"><span>交换公钥 A → → → → → → → → → B</span></span>
<span class="line"><span>交换公钥 A ← ← ← ← ← ← ← ← ← B</span></span>
<span class="line"><span>计算共享密钥                计算共享密钥</span></span>
<span class="line"><span>s = Bᵃ mod p               s = Aᵇ mod p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数学原理:</span></span>
<span class="line"><span>Bᵃ mod p = (gᵇ)ᵃ mod p = gᵃᵇ mod p</span></span>
<span class="line"><span>Aᵇ mod p = (gᵃ)ᵇ mod p = gᵃᵇ mod p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>双方得到相同的共享密钥s = gᵃᵇ mod p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>p=23, g=5</span></span>
<span class="line"><span>Alice: a=6, A=5⁶ mod 23=8</span></span>
<span class="line"><span>Bob: b=15, B=5¹⁵ mod 23=19</span></span>
<span class="line"><span>共享密钥: </span></span>
<span class="line"><span>Alice: 19⁶ mod 23=2</span></span>
<span class="line"><span>Bob: 8¹⁵ mod 23=2</span></span></code></pre></div><h2 id="数字签名算法" tabindex="-1">数字签名算法 <a class="header-anchor" href="#数字签名算法" aria-label="Permalink to &quot;数字签名算法&quot;">​</a></h2><h3 id="数字签名基础" tabindex="-1">数字签名基础 <a class="header-anchor" href="#数字签名基础" aria-label="Permalink to &quot;数字签名基础&quot;">​</a></h3><p>使用私钥对消息摘要进行加密，提供认证和不可否认性。</p><p>特点：</p><ul><li>身份认证：验证消息发送者身份</li><li>完整性保护：确保消息未被篡改</li><li>不可否认性：防止发送者事后否认</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 数字签名基类</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> DigitalSignature</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成密钥对</span></span>
<span class="line"><span style="color:#B392F0;">  generateKeyPair</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;generateKeyPair method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 签名</span></span>
<span class="line"><span style="color:#B392F0;">  sign</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sign method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 验证</span></span>
<span class="line"><span style="color:#B392F0;">  verify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">publicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;verify method must be implemented&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 消息哈希</span></span>
<span class="line"><span style="color:#B392F0;">  hashMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sha256</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SHA256</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sha256.</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="ecdsa-签名" tabindex="-1">ECDSA 签名 <a class="header-anchor" href="#ecdsa-签名" aria-label="Permalink to &quot;ECDSA 签名&quot;">​</a></h3><p>基于椭圆曲线的数字签名算法。</p><p>特点：</p><ul><li>高效安全：相比 RSA 签名更短的签名长度</li><li>标准广泛：被比特币、TLS 等广泛采用</li><li>随机数敏感：签名随机数泄露会导致私钥泄露</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// ECDSA实现</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> ECDSA</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> DigitalSignature</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">curveName</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &#39;secp256k1&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.curve </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ECC</span><span style="color:#E1E4E8;">(curveName);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.algorithm </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;ECDSA&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 生成密钥对</span></span>
<span class="line"><span style="color:#B392F0;">  generateKeyPair</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">generateKey</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 签名</span></span>
<span class="line"><span style="color:#B392F0;">  sign</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">privateKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gy</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.curve;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> G</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(Gx, Gy);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntFromHash</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hashMessage</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> r, s;</span></span>
<span class="line"><span style="color:#F97583;">    do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 生成随机数k</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> k</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">randomBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, n </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算点 (x1, y1) = k * G</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> point</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">scalarMultiply</span><span style="color:#E1E4E8;">(k, </span><span style="color:#79B8FF;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve.curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">      r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> point.x </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 计算 s = k⁻¹ * (hash + r * privateKey) mod n</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> kInv</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">modInverse</span><span style="color:#E1E4E8;">(k, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">      s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (kInv </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (hash </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> privateKey)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (s </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">===</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { r, s };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 验证签名</span></span>
<span class="line"><span style="color:#B392F0;">  verify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">signature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">publicKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">r</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">s</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> signature;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">Gy</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.curve;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> G</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(Gx, Gy);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证签名范围</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#F97583;"> ||</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> hash</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntFromHash</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">hashMessage</span><span style="color:#E1E4E8;">(message));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算 w = s⁻¹ mod n</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> w</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">modInverse</span><span style="color:#E1E4E8;">(s, n);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算 u1 = hash * w mod n, u2 = r * w mod n</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> u1</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (hash </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> w) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> u2</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> w) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 计算点 (x1, y1) = u1 * G + u2 * publicKey</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> point1</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">scalarMultiply</span><span style="color:#E1E4E8;">(u1, </span><span style="color:#79B8FF;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve.curve);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> point2</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">scalarMultiply</span><span style="color:#E1E4E8;">(u2, publicKey, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve.curve);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> point</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.curve.</span><span style="color:#B392F0;">pointAdd</span><span style="color:#E1E4E8;">(point1, point2, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.curve.curve);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 验证 r ≡ x1 mod n</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (point.x </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> n) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 从哈希值生成大整数</span></span>
<span class="line"><span style="color:#B392F0;">  bigIntFromHash</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hashBytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> hashBytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">|</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(hashBytes[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 签名序列化</span></span>
<span class="line"><span style="color:#B392F0;">  serializeSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">signature</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> rBytes</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntToBytes</span><span style="color:#E1E4E8;">(signature.r, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> sBytes</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bigIntToBytes</span><span style="color:#E1E4E8;">(signature.s, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rBytes, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">sBytes]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 反序列化签名</span></span>
<span class="line"><span style="color:#B392F0;">  deserializeSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">signatureBytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> r</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bytesToBigInt</span><span style="color:#E1E4E8;">(signatureBytes.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> s</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bytesToBigInt</span><span style="color:#E1E4E8;">(signatureBytes.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { r, s };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 大整数转换为字节数组</span></span>
<span class="line"><span style="color:#B392F0;">  bigIntToBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bigint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> bytes</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(length);</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> length </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      bytes[i] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> Number</span><span style="color:#E1E4E8;">(bigint </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xff</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      bigint </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bigint </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> bytes;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 字节数组转换为大整数</span></span>
<span class="line"><span style="color:#B392F0;">  bytesToBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">bytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> bytes.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#79B8FF;"> 8</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">|</span><span style="color:#B392F0;"> BigInt</span><span style="color:#E1E4E8;">(bytes[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>示意图 (ECDSA 签名流程)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>ECDSA签名:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: 消息m, 私钥d, 椭圆曲线参数</span></span>
<span class="line"><span>输出: 签名(r,s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 计算消息哈希: h = hash(m)</span></span>
<span class="line"><span>2. 生成随机数k, 1 ≤ k ≤ n-1</span></span>
<span class="line"><span>3. 计算点(x₁,y₁) = k×G</span></span>
<span class="line"><span>4. 计算 r = x₁ mod n, 如果r=0则回到步骤2</span></span>
<span class="line"><span>5. 计算 s = k⁻¹(h + r×d) mod n, 如果s=0则回到步骤2</span></span>
<span class="line"><span>6. 输出签名(r,s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ECDSA验证:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: 消息m, 签名(r,s), 公钥Q</span></span>
<span class="line"><span>输出: 签名是否有效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 验证 1 ≤ r ≤ n-1 且 1 ≤ s ≤ n-1</span></span>
<span class="line"><span>2. 计算消息哈希: h = hash(m)  </span></span>
<span class="line"><span>3. 计算 w = s⁻¹ mod n</span></span>
<span class="line"><span>4. 计算 u₁ = h×w mod n, u₂ = r×w mod n</span></span>
<span class="line"><span>5. 计算点(x₁,y₁) = u₁×G + u₂×Q</span></span>
<span class="line"><span>6. 验证 r ≡ x₁ mod n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数学原理:</span></span>
<span class="line"><span>验证时: u₁×G + u₂×Q = h×w×G + r×w×Q </span></span>
<span class="line"><span>        = w×(h×G + r×d×G) </span></span>
<span class="line"><span>        = w×(h + r×d)×G</span></span>
<span class="line"><span>        = (h + r×d)×w×G</span></span>
<span class="line"><span>        = (h + r×d)×s⁻¹×G</span></span>
<span class="line"><span>        = (h + r×d)×(k×(h + r×d)⁻¹)×G  </span></span>
<span class="line"><span>        = k×G</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此 x₁ = r mod n</span></span></code></pre></div>`,79)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
