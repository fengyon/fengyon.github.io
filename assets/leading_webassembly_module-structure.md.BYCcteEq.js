import{_ as s,c as n,o as e,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"WASM 内部模块","description":"","frontmatter":{},"headers":[{"level":2,"title":"模块结构概述","slug":"模块结构概述","link":"#模块结构概述","children":[]},{"level":2,"title":"核心段结构详解","slug":"核心段结构详解","link":"#核心段结构详解","children":[{"level":3,"title":"类型段 (Type Section)","slug":"类型段-type-section","link":"#类型段-type-section","children":[]},{"level":3,"title":"函数段 (Function Section)","slug":"函数段-function-section","link":"#函数段-function-section","children":[]},{"level":3,"title":"代码段 (Code Section)","slug":"代码段-code-section","link":"#代码段-code-section","children":[]},{"level":3,"title":"内存段 (Memory Section)","slug":"内存段-memory-section","link":"#内存段-memory-section","children":[]}]},{"level":2,"title":"执行模型与指令集","slug":"执行模型与指令集","link":"#执行模型与指令集","children":[{"level":3,"title":"基于栈的虚拟机","slug":"基于栈的虚拟机","link":"#基于栈的虚拟机","children":[]},{"level":3,"title":"控制流指令","slug":"控制流指令","link":"#控制流指令","children":[]},{"level":3,"title":"内存指令","slug":"内存指令","link":"#内存指令","children":[]}]},{"level":2,"title":"高级模块特性","slug":"高级模块特性","link":"#高级模块特性","children":[{"level":3,"title":"表段与间接调用","slug":"表段与间接调用","link":"#表段与间接调用","children":[]},{"level":3,"title":"全局段 (Global Section)","slug":"全局段-global-section","link":"#全局段-global-section","children":[]},{"level":3,"title":"元素段 (Data Section)","slug":"元素段-data-section","link":"#元素段-data-section","children":[]}]},{"level":2,"title":"模块链接与实例化","slug":"模块链接与实例化","link":"#模块链接与实例化","children":[{"level":3,"title":"导入与导出机制","slug":"导入与导出机制","link":"#导入与导出机制","children":[]},{"level":3,"title":"起始段 (Start Section)","slug":"起始段-start-section","link":"#起始段-start-section","children":[]}]},{"level":2,"title":"自定义段与元数据","slug":"自定义段与元数据","link":"#自定义段与元数据","children":[{"level":3,"title":"名称段 (Name Section)","slug":"名称段-name-section","link":"#名称段-name-section","children":[]},{"level":3,"title":"源码映射段","slug":"源码映射段","link":"#源码映射段","children":[]}]},{"level":2,"title":"验证与安全特性","slug":"验证与安全特性","link":"#验证与安全特性","children":[{"level":3,"title":"模块验证流程","slug":"模块验证流程","link":"#模块验证流程","children":[]},{"level":3,"title":"类型安全保证","slug":"类型安全保证","link":"#类型安全保证","children":[]},{"level":3,"title":"内存安全机制","slug":"内存安全机制","link":"#内存安全机制","children":[]}]},{"level":2,"title":"二进制编码细节","slug":"二进制编码细节","link":"#二进制编码细节","children":[{"level":3,"title":"LEB128 变长编码","slug":"leb128-变长编码","link":"#leb128-变长编码","children":[]},{"level":3,"title":"段序列化格式","slug":"段序列化格式","link":"#段序列化格式","children":[]}]},{"level":2,"title":"高级模块模式","slug":"高级模块模式","link":"#高级模块模式","children":[{"level":3,"title":"动态链接模块","slug":"动态链接模块","link":"#动态链接模块","children":[]},{"level":3,"title":"组件模型","slug":"组件模型","link":"#组件模型","children":[]}]}],"relativePath":"leading/webassembly/module-structure.md","filePath":"leading/webassembly/module-structure.md"}'),p={name:"leading/webassembly/module-structure.md"};function i(t,a,c,o,d,r){return e(),n("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/webassembly/module-structure.md for this page in Markdown format</div><h1 id="wasm-内部模块" tabindex="-1">WASM 内部模块 <a class="header-anchor" href="#wasm-内部模块" aria-label="Permalink to &quot;WASM 内部模块&quot;">​</a></h1><h2 id="模块结构概述" tabindex="-1">模块结构概述 <a class="header-anchor" href="#模块结构概述" aria-label="Permalink to &quot;模块结构概述&quot;">​</a></h2><p>WebAssembly 模块是一个结构化的二进制单元，采用自定义的二进制格式设计，旨在实现紧凑的编码和快速的解码。每个模块都遵循严格的格式规范，由一系列有序的段 (section) 组成。</p><p><strong>基础模块结构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>wasm 二进制文件</span></span>
<span class="line"><span>├── 魔数头 (0x00 0x61 0x73 0x6D)</span></span>
<span class="line"><span>├── 版本号 (0x01 0x00 0x00 0x00)</span></span>
<span class="line"><span>└── 段序列</span></span>
<span class="line"><span>    ├── 类型段</span></span>
<span class="line"><span>    ├── 导入段</span></span>
<span class="line"><span>    ├── 函数段</span></span>
<span class="line"><span>    ├── 表段</span></span>
<span class="line"><span>    ├── 内存段</span></span>
<span class="line"><span>    ├── 全局段</span></span>
<span class="line"><span>    ├── 导出段</span></span>
<span class="line"><span>    ├── 起始段</span></span>
<span class="line"><span>    ├── 元素段</span></span>
<span class="line"><span>    ├── 代码段</span></span>
<span class="line"><span>    └── 数据段</span></span></code></pre></div><h2 id="核心段结构详解" tabindex="-1">核心段结构详解 <a class="header-anchor" href="#核心段结构详解" aria-label="Permalink to &quot;核心段结构详解&quot;">​</a></h2><h3 id="类型段-type-section" tabindex="-1">类型段 (Type Section) <a class="header-anchor" href="#类型段-type-section" aria-label="Permalink to &quot;类型段 (Type Section)&quot;">​</a></h3><p>类型段定义了模块中所有函数的签名，采用函数类型形式化描述。每个函数类型由参数类型列表和返回类型列表组成。</p><p><strong>函数类型编码示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>函数类型结构:</span></span>
<span class="line"><span>0x60 → 函数类型前缀</span></span>
<span class="line"><span>参数数量 → 参数类型序列</span></span>
<span class="line"><span>返回数量 → 返回类型序列</span></span></code></pre></div><p>类型段二进制布局：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型段头部: [段ID: 0x01] [段长度]</span></span>
<span class="line"><span>类型数量: N</span></span>
<span class="line"><span>重复N次:</span></span>
<span class="line"><span>    0x60 (函数类型标识)</span></span>
<span class="line"><span>    参数个数 → 参数类型序列 (i32=0x7F, i64=0x7E, f32=0x7D, f64=0x7C)</span></span>
<span class="line"><span>    返回个数 → 返回类型序列</span></span></code></pre></div><h3 id="函数段-function-section" tabindex="-1">函数段 (Function Section) <a class="header-anchor" href="#函数段-function-section" aria-label="Permalink to &quot;函数段 (Function Section)&quot;">​</a></h3><p>函数段声明了模块中所有函数的类型索引，将函数体与类型签名关联起来。</p><p><strong>函数声明流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>类型段: [签名1, 签名2, ...]</span></span>
<span class="line"><span>    ↓ 类型索引引用</span></span>
<span class="line"><span>函数段: [函数1:类型索引, 函数2:类型索引, ...]</span></span>
<span class="line"><span>    ↓ 对应函数体</span></span>
<span class="line"><span>代码段: [函数1体, 函数2体, ...]</span></span></code></pre></div><h3 id="代码段-code-section" tabindex="-1">代码段 (Code Section) <a class="header-anchor" href="#代码段-code-section" aria-label="Permalink to &quot;代码段 (Code Section)&quot;">​</a></h3><p>代码段包含所有函数的实际指令代码，采用局部变量声明后接指令序列的格式。</p><p><strong>函数体结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>函数体大小 (u32)</span></span>
<span class="line"><span>局部变量声明数量</span></span>
<span class="line"><span>重复局部变量声明:</span></span>
<span class="line"><span>    局部变量数量 → 值类型</span></span>
<span class="line"><span>指令序列:</span></span>
<span class="line"><span>    操作码 → 立即数 (可选) → ...</span></span>
<span class="line"><span>结束符: 0x0B (end)</span></span></code></pre></div><h3 id="内存段-memory-section" tabindex="-1">内存段 (Memory Section) <a class="header-anchor" href="#内存段-memory-section" aria-label="Permalink to &quot;内存段 (Memory Section)&quot;">​</a></h3><p>内存段定义了模块的线性内存配置，采用页为单位 (64KiB) 进行管理。</p><p><strong>内存类型编码：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内存标志: </span></span>
<span class="line"><span>  0x00 → 无最大值</span></span>
<span class="line"><span>  0x01 → 有最大值</span></span>
<span class="line"><span>初始页数</span></span>
<span class="line"><span>最大页数 (如果标志为0x01)</span></span></code></pre></div><p>内存布局示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>线性内存地址空间:</span></span>
<span class="line"><span>0x00000000 ┌─────────────────┐</span></span>
<span class="line"><span>          │   代码和数据段   │</span></span>
<span class="line"><span>0x00001000 ├─────────────────┤</span></span>
<span class="line"><span>          │     堆区域      │ → 可动态增长</span></span>
<span class="line"><span>0x00002000 ├─────────────────┤</span></span>
<span class="line"><span>          │     栈区域      │</span></span>
<span class="line"><span>          └─────────────────┘</span></span></code></pre></div><h2 id="执行模型与指令集" tabindex="-1">执行模型与指令集 <a class="header-anchor" href="#执行模型与指令集" aria-label="Permalink to &quot;执行模型与指令集&quot;">​</a></h2><h3 id="基于栈的虚拟机" tabindex="-1">基于栈的虚拟机 <a class="header-anchor" href="#基于栈的虚拟机" aria-label="Permalink to &quot;基于栈的虚拟机&quot;">​</a></h3><p>WebAssembly 采用基于栈的执行模型，所有操作都通过操作数栈进行。</p><p><strong>栈执行示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>指令序列: i32.const 5 → i32.const 3 → i32.add → end</span></span>
<span class="line"><span>栈状态变化:</span></span>
<span class="line"><span>初始: []</span></span>
<span class="line"><span>i32.const 5: [5]</span></span>
<span class="line"><span>i32.const 3: [5, 3] </span></span>
<span class="line"><span>i32.add:     [8]</span></span>
<span class="line"><span>end:         []</span></span></code></pre></div><h3 id="控制流指令" tabindex="-1">控制流指令 <a class="header-anchor" href="#控制流指令" aria-label="Permalink to &quot;控制流指令&quot;">​</a></h3><p>控制流指令采用结构化编程范式，确保代码的安全性和可验证性。</p><p><strong>块结构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>block $label → 结果类型</span></span>
<span class="line"><span>    ... 指令序列 ...</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loop $label → 结果类型</span></span>
<span class="line"><span>    ... 循环体 ...</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if $label → 结果类型</span></span>
<span class="line"><span>    ... 条件为真时的指令 ...</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    ... 条件为假时的指令 ...</span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="内存指令" tabindex="-1">内存指令 <a class="header-anchor" href="#内存指令" aria-label="Permalink to &quot;内存指令&quot;">​</a></h3><p>内存指令提供对线性内存的精细控制，支持多种访问模式和地址计算。</p><p><strong>内存访问模式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>加载指令: i32.load [offset=imm] [align=imm]</span></span>
<span class="line"><span>存储指令: i32.store [offset=imm] [align=imm]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>地址计算: base_address + offset</span></span>
<span class="line"><span>对齐要求: 2^align 字节边界</span></span></code></pre></div><h2 id="高级模块特性" tabindex="-1">高级模块特性 <a class="header-anchor" href="#高级模块特性" aria-label="Permalink to &quot;高级模块特性&quot;">​</a></h2><h3 id="表段与间接调用" tabindex="-1">表段与间接调用 <a class="header-anchor" href="#表段与间接调用" aria-label="Permalink to &quot;表段与间接调用&quot;">​</a></h3><p>表段实现了函数指针机制，支持动态函数调用。</p><p><strong>间接调用流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>表段: [函数引用1, 函数引用2, ...]</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>call_indirect 类型索引 → 表索引</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>运行时类型检查 → 函数调用</span></span></code></pre></div><p>表段结构示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>表类型: 0x70 (anyfunc) → 初始大小 → 最大大小</span></span>
<span class="line"><span>元素段: 初始化表内容</span></span>
<span class="line"><span>    [表索引] → [偏移量] → [函数索引列表]</span></span></code></pre></div><h3 id="全局段-global-section" tabindex="-1">全局段 (Global Section) <a class="header-anchor" href="#全局段-global-section" aria-label="Permalink to &quot;全局段 (Global Section)&quot;">​</a></h3><p>全局段定义了模块的全局变量，支持可变和不可变两种类型。</p><p><strong>全局变量编码：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>全局数量: N</span></span>
<span class="line"><span>重复N次:</span></span>
<span class="line"><span>    值类型</span></span>
<span class="line"><span>    可变性 (0x00=不可变, 0x01=可变)</span></span>
<span class="line"><span>    初始化表达式</span></span></code></pre></div><p>初始化表达式示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.const 42 → end  ; 常量42</span></span>
<span class="line"><span>global.get 0 → i32.add → end  ; 基于其他全局的计算</span></span></code></pre></div><h3 id="元素段-data-section" tabindex="-1">元素段 (Data Section) <a class="header-anchor" href="#元素段-data-section" aria-label="Permalink to &quot;元素段 (Data Section)&quot;">​</a></h3><p>数据段用于初始化线性内存的内容，支持复杂的初始化模式。</p><p><strong>数据段结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据段数量: N</span></span>
<span class="line"><span>重复N次:</span></span>
<span class="line"><span>    内存索引 (通常为0)</span></span>
<span class="line"><span>    偏移量表达式</span></span>
<span class="line"><span>    数据大小 → 原始字节数据</span></span></code></pre></div><h2 id="模块链接与实例化" tabindex="-1">模块链接与实例化 <a class="header-anchor" href="#模块链接与实例化" aria-label="Permalink to &quot;模块链接与实例化&quot;">​</a></h2><h3 id="导入与导出机制" tabindex="-1">导入与导出机制 <a class="header-anchor" href="#导入与导出机制" aria-label="Permalink to &quot;导入与导出机制&quot;">​</a></h3><p>导入导出系统实现了模块间的依赖管理和接口暴露。</p><p><strong>模块链接示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块A</span></span>
<span class="line"><span>├── 导出: [func1, memory1, global1]</span></span>
<span class="line"><span>└── 依赖: [模块B的funcX]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>模块B</span></span>
<span class="line"><span>├── 导入: [env.memory, 模块A.func1]</span></span>
<span class="line"><span>└── 导出: [funcX]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实例化流程:</span></span>
<span class="line"><span>解析导入 → 初始化内存/表 → 运行起始函数</span></span></code></pre></div><h3 id="起始段-start-section" tabindex="-1">起始段 (Start Section) <a class="header-anchor" href="#起始段-start-section" aria-label="Permalink to &quot;起始段 (Start Section)&quot;">​</a></h3><p>起始段指定了模块实例化后自动执行的函数，用于初始化逻辑。</p><p><strong>起始函数特征：</strong></p><ul><li>无参数无返回值</li><li>在实例化完成后自动调用</li><li>主要用于模块初始化</li></ul><h2 id="自定义段与元数据" tabindex="-1">自定义段与元数据 <a class="header-anchor" href="#自定义段与元数据" aria-label="Permalink to &quot;自定义段与元数据&quot;">​</a></h2><h3 id="名称段-name-section" tabindex="-1">名称段 (Name Section) <a class="header-anchor" href="#名称段-name-section" aria-label="Permalink to &quot;名称段 (Name Section)&quot;">​</a></h3><p>名称段存储调试信息，包含函数名、局部变量名等符号信息。</p><p><strong>名称段结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>模块名称子段</span></span>
<span class="line"><span>函数名称子段</span></span>
<span class="line"><span>局部变量名称子段</span></span></code></pre></div><h3 id="源码映射段" tabindex="-1">源码映射段 <a class="header-anchor" href="#源码映射段" aria-label="Permalink to &quot;源码映射段&quot;">​</a></h3><p>源码映射段将 WASM 指令映射回原始源代码位置，支持源码级调试。</p><h2 id="验证与安全特性" tabindex="-1">验证与安全特性 <a class="header-anchor" href="#验证与安全特性" aria-label="Permalink to &quot;验证与安全特性&quot;">​</a></h2><h3 id="模块验证流程" tabindex="-1">模块验证流程 <a class="header-anchor" href="#模块验证流程" aria-label="Permalink to &quot;模块验证流程&quot;">​</a></h3><p>WebAssembly 模块在加载时必须通过严格的验证过程。</p><p><strong>验证阶段：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>结构验证 → 类型检查 → 指令验证 → 内存安全验证</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>可安全执行的模块实例</span></span></code></pre></div><h3 id="类型安全保证" tabindex="-1">类型安全保证 <a class="header-anchor" href="#类型安全保证" aria-label="Permalink to &quot;类型安全保证&quot;">​</a></h3><p>类型系统确保所有操作在编译时类型正确，防止运行时类型错误。</p><p><strong>类型检查规则：</strong></p><ul><li>操作数栈类型必须匹配指令期望</li><li>控制流必须保持栈高度平衡</li><li>函数调用必须匹配类型签名</li></ul><h3 id="内存安全机制" tabindex="-1">内存安全机制 <a class="header-anchor" href="#内存安全机制" aria-label="Permalink to &quot;内存安全机制&quot;">​</a></h3><p>线性内存模型提供强大的内存安全保证。</p><p><strong>内存保护特性：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>边界检查: 所有内存访问验证在有效范围内</span></span>
<span class="line"><span>隔离性: 模块无法访问外部内存</span></span>
<span class="line"><span>初始化: 数据段确保内存正确初始化</span></span></code></pre></div><h2 id="二进制编码细节" tabindex="-1">二进制编码细节 <a class="header-anchor" href="#二进制编码细节" aria-label="Permalink to &quot;二进制编码细节&quot;">​</a></h2><h3 id="leb128-变长编码" tabindex="-1">LEB128 变长编码 <a class="header-anchor" href="#leb128-变长编码" aria-label="Permalink to &quot;LEB128 变长编码&quot;">​</a></h3><p>WebAssembly 广泛使用 LEB128 编码实现紧凑的整数表示。</p><p><strong>编码示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>值: 127 → 编码: 0x7F</span></span>
<span class="line"><span>值: 128 → 编码: 0x80 0x01</span></span>
<span class="line"><span>值: 624485 → 编码: 0xE5 0x8E 0x26</span></span></code></pre></div><h3 id="段序列化格式" tabindex="-1">段序列化格式 <a class="header-anchor" href="#段序列化格式" aria-label="Permalink to &quot;段序列化格式&quot;">​</a></h3><p>每个段都遵循统一的序列化格式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>段ID (1字节) → 段长度 (u32) → 段内容</span></span></code></pre></div><h2 id="高级模块模式" tabindex="-1">高级模块模式 <a class="header-anchor" href="#高级模块模式" aria-label="Permalink to &quot;高级模块模式&quot;">​</a></h2><h3 id="动态链接模块" tabindex="-1">动态链接模块 <a class="header-anchor" href="#动态链接模块" aria-label="Permalink to &quot;动态链接模块&quot;">​</a></h3><p>通过共享内存和表实现模块间的动态链接。</p><p><strong>动态链接架构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主模块</span></span>
<span class="line"><span>├── 导出共享内存</span></span>
<span class="line"><span>├── 导出函数表</span></span>
<span class="line"><span>└── 导入外部函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>侧模块</span></span>
<span class="line"><span>├── 导入共享内存</span></span>
<span class="line"><span>├── 导入函数表</span></span>
<span class="line"><span>└── 导出新增函数</span></span></code></pre></div><h3 id="组件模型" tabindex="-1">组件模型 <a class="header-anchor" href="#组件模型" aria-label="Permalink to &quot;组件模型&quot;">​</a></h3><p>基于接口类型的组件模型支持高级的跨模块交互。</p><p><strong>组件结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>组件包装器</span></span>
<span class="line"><span>├── 实例化参数</span></span>
<span class="line"><span>├── 导入适配器</span></span>
<span class="line"><span>└── 导出适配器</span></span></code></pre></div><p>通过深入理解 WebAssembly 模块的内部结构，开发者能够更好地优化模块性能、调试复杂问题，并充分利用 WASM 的安全和可移植特性。</p>`,104)])])}const b=s(p,[["render",i]]);export{u as __pageData,b as default};
