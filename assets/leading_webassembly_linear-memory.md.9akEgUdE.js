import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"WASM 线性内存模型","description":"","frontmatter":{},"headers":[{"level":2,"title":"内存模型基础概念","slug":"内存模型基础概念","link":"#内存模型基础概念","children":[]},{"level":2,"title":"内存定义与初始化","slug":"内存定义与初始化","link":"#内存定义与初始化","children":[{"level":3,"title":"内存类型定义","slug":"内存类型定义","link":"#内存类型定义","children":[]},{"level":3,"title":"数据段初始化","slug":"数据段初始化","link":"#数据段初始化","children":[]}]},{"level":2,"title":"内存访问指令","slug":"内存访问指令","link":"#内存访问指令","children":[{"level":3,"title":"加载指令族","slug":"加载指令族","link":"#加载指令族","children":[]},{"level":3,"title":"存储指令族","slug":"存储指令族","link":"#存储指令族","children":[]},{"level":3,"title":"内存访问示例","slug":"内存访问示例","link":"#内存访问示例","children":[]}]},{"level":2,"title":"内存管理与增长","slug":"内存管理与增长","link":"#内存管理与增长","children":[{"level":3,"title":"动态内存增长","slug":"动态内存增长","link":"#动态内存增长","children":[]},{"level":3,"title":"内存边界保护","slug":"内存边界保护","link":"#内存边界保护","children":[]}]},{"level":2,"title":"内存布局模式","slug":"内存布局模式","link":"#内存布局模式","children":[{"level":3,"title":"典型应用布局","slug":"典型应用布局","link":"#典型应用布局","children":[]},{"level":3,"title":"数据对齐策略","slug":"数据对齐策略","link":"#数据对齐策略","children":[]}]},{"level":2,"title":"批量内存操作","slug":"批量内存操作","link":"#批量内存操作","children":[{"level":3,"title":"内存初始化与复制","slug":"内存初始化与复制","link":"#内存初始化与复制","children":[]},{"level":3,"title":"批量操作示例","slug":"批量操作示例","link":"#批量操作示例","children":[]}]},{"level":2,"title":"跨语言内存交互","slug":"跨语言内存交互","link":"#跨语言内存交互","children":[{"level":3,"title":"JavaScript 内存共享","slug":"javascript-内存共享","link":"#javascript-内存共享","children":[]},{"level":3,"title":"高效数据交换策略","slug":"高效数据交换策略","link":"#高效数据交换策略","children":[]}]},{"level":2,"title":"内存安全与隔离","slug":"内存安全与隔离","link":"#内存安全与隔离","children":[{"level":3,"title":"沙箱内存保护","slug":"沙箱内存保护","link":"#沙箱内存保护","children":[]},{"level":3,"title":"边界检查优化","slug":"边界检查优化","link":"#边界检查优化","children":[]}]},{"level":2,"title":"性能优化实践","slug":"性能优化实践","link":"#性能优化实践","children":[{"level":3,"title":"内存访问模式优化","slug":"内存访问模式优化","link":"#内存访问模式优化","children":[]},{"level":3,"title":"数据局部性利用","slug":"数据局部性利用","link":"#数据局部性利用","children":[]}]}],"relativePath":"leading/webassembly/linear-memory.md","filePath":"leading/webassembly/linear-memory.md"}'),e={name:"leading/webassembly/linear-memory.md"};function o(t,s,c,i,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/webassembly/linear-memory.md for this page in Markdown format</div><h1 id="wasm-线性内存模型" tabindex="-1">WASM 线性内存模型 <a class="header-anchor" href="#wasm-线性内存模型" aria-label="Permalink to &quot;WASM 线性内存模型&quot;">​</a></h1><h2 id="内存模型基础概念" tabindex="-1">内存模型基础概念 <a class="header-anchor" href="#内存模型基础概念" aria-label="Permalink to &quot;内存模型基础概念&quot;">​</a></h2><p>WebAssembly 采用线性内存模型，这是一种简单而高效的连续字节数组设计。与传统的分段内存模型不同，线性内存提供统一的地址空间，简化了内存管理和安全验证。</p><p><strong>核心内存架构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>线性地址空间: 0x00000000 → 0xFFFFFFFF (4GB)</span></span>
<span class="line"><span>    ├── 代码和数据段 (只读/初始化)</span></span>
<span class="line"><span>    ├── 堆区域 (动态分配)</span></span>
<span class="line"><span>    ├── 栈区域 (函数调用)</span></span>
<span class="line"><span>    └── 未分配区域</span></span></code></pre></div><h2 id="内存定义与初始化" tabindex="-1">内存定义与初始化 <a class="header-anchor" href="#内存定义与初始化" aria-label="Permalink to &quot;内存定义与初始化&quot;">​</a></h2><h3 id="内存类型定义" tabindex="-1">内存类型定义 <a class="header-anchor" href="#内存类型定义" aria-label="Permalink to &quot;内存类型定义&quot;">​</a></h3><p>在 WebAssembly 模块中，内存通过内存段进行声明和配置。</p><p><strong>内存类型结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>内存标志:</span></span>
<span class="line"><span>  0x00 → 仅初始大小</span></span>
<span class="line"><span>  0x01 → 初始大小 + 最大大小</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>初始页数: N (1页 = 64KiB = 65536字节)</span></span>
<span class="line"><span>最大页数: M (如果标志为0x01)</span></span></code></pre></div><p><strong>Wat 文本格式示例：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>(memory 1)           ; 1页初始内存 (64KiB)</span></span>
<span class="line"><span>(memory 1 4)         ; 1页初始，最大4页 (256KiB)</span></span>
<span class="line"><span>(memory (import &quot;env&quot; &quot;mem&quot;) 1)  ; 导入外部内存</span></span></code></pre></div><h3 id="数据段初始化" tabindex="-1">数据段初始化 <a class="header-anchor" href="#数据段初始化" aria-label="Permalink to &quot;数据段初始化&quot;">​</a></h3><p>数据段用于在模块实例化时初始化内存内容。</p><p><strong>数据段结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据段头部</span></span>
<span class="line"><span>├── 内存索引 (通常为0)</span></span>
<span class="line"><span>├── 偏移量表达式</span></span>
<span class="line"><span>└── 原始字节数据</span></span></code></pre></div><p><strong>初始化示例：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 静态数据初始化</span></span>
<span class="line"><span>(data (i32.const 0x1000) &quot;Hello, WebAssembly!\\00&quot;)</span></span>
<span class="line"><span>(data (i32.const 0x2000) &quot;\\01\\02\\03\\04\\05\\06&quot;)  ; 二进制数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; 通过全局变量计算偏移量</span></span>
<span class="line"><span>(global $data_offset i32 (i32.const 0x3000))</span></span>
<span class="line"><span>(data (global.get $data_offset) &quot;Dynamic offset data&quot;)</span></span></code></pre></div><h2 id="内存访问指令" tabindex="-1">内存访问指令 <a class="header-anchor" href="#内存访问指令" aria-label="Permalink to &quot;内存访问指令&quot;">​</a></h2><h3 id="加载指令族" tabindex="-1">加载指令族 <a class="header-anchor" href="#加载指令族" aria-label="Permalink to &quot;加载指令族&quot;">​</a></h3><p>加载指令从内存读取数据到操作数栈，支持多种数据类型和寻址模式。</p><p><strong>基本加载指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.load [offset] [align]   ; 32位整数加载</span></span>
<span class="line"><span>i64.load [offset] [align]   ; 64位整数加载  </span></span>
<span class="line"><span>f32.load [offset] [align]   ; 32位浮点数加载</span></span>
<span class="line"><span>f64.load [offset] [align]   ; 64位浮点数加载</span></span></code></pre></div><p><strong>扩展加载指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.load8_s   ; 有符号8位加载到32位</span></span>
<span class="line"><span>i32.load8_u   ; 无符号8位加载到32位</span></span>
<span class="line"><span>i64.load16_s  ; 有符号16位加载到64位</span></span>
<span class="line"><span>i64.load32_u  ; 无符号32位加载到64位</span></span></code></pre></div><p><strong>内存访问语义：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>有效地址 = base_address + offset</span></span>
<span class="line"><span>对齐要求 = 2^align 字节边界</span></span>
<span class="line"><span>边界检查: 确保 [地址, 地址+类型大小) 在内存有效范围内</span></span></code></pre></div><h3 id="存储指令族" tabindex="-1">存储指令族 <a class="header-anchor" href="#存储指令族" aria-label="Permalink to &quot;存储指令族&quot;">​</a></h3><p>存储指令将数据从操作数栈写入内存。</p><p><strong>基本存储指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.store [offset] [align]   ; 32位整数存储</span></span>
<span class="line"><span>i64.store [offset] [align]   ; 64位整数存储</span></span>
<span class="line"><span>f32.store [offset] [align]   ; 32位浮点数存储  </span></span>
<span class="line"><span>f64.store [offset] [align]   ; 64位浮点数存储</span></span></code></pre></div><p><strong>扩展存储指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.store8   ; 8位截断存储</span></span>
<span class="line"><span>i32.store16  ; 16位截断存储</span></span>
<span class="line"><span>i64.store8   ; 8位截断存储到64位</span></span>
<span class="line"><span>i64.store16  ; 16位截断存储到64位</span></span>
<span class="line"><span>i64.store32  ; 32位截断存储到64位</span></span></code></pre></div><h3 id="内存访问示例" tabindex="-1">内存访问示例 <a class="header-anchor" href="#内存访问示例" aria-label="Permalink to &quot;内存访问示例&quot;">​</a></h3><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 内存读写操作示例</span></span>
<span class="line"><span>(func $memory_ops</span></span>
<span class="line"><span>  ;; 写入字符串到内存</span></span>
<span class="line"><span>  (i32.store (i32.const 0x1000) (i32.const 0x48656C6C))  ; &quot;Hell&quot;</span></span>
<span class="line"><span>  (i32.store (i32.const 0x1004) (i32.const 0x6F210000))  ; &quot;o!\\0\\0&quot;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 读取并修改数据</span></span>
<span class="line"><span>  (local $value i32)</span></span>
<span class="line"><span>  (local.set $value (i32.load (i32.const 0x1000)))</span></span>
<span class="line"><span>  (i32.store (i32.const 0x1008) </span></span>
<span class="line"><span>    (i32.add (local.get $value) (i32.const 0x00000001)))</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="内存管理与增长" tabindex="-1">内存管理与增长 <a class="header-anchor" href="#内存管理与增长" aria-label="Permalink to &quot;内存管理与增长&quot;">​</a></h2><h3 id="动态内存增长" tabindex="-1">动态内存增长 <a class="header-anchor" href="#动态内存增长" aria-label="Permalink to &quot;动态内存增长&quot;">​</a></h3><p>WebAssembly 内存可以在运行时动态增长，以适应数据量的变化。</p><p><strong>内存增长指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>memory.grow $pages  ; 尝试增加指定页数</span></span>
<span class="line"><span>                    ; 返回旧内存大小，失败返回-1</span></span>
<span class="line"><span>memory.size         ; 返回当前内存大小（页数）</span></span></code></pre></div><p><strong>增长策略示例：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 安全的内存分配函数</span></span>
<span class="line"><span>(func $allocate_memory (param $size i32) (result i32)</span></span>
<span class="line"><span>  (local $current_pages i32)</span></span>
<span class="line"><span>  (local $required_pages i32)</span></span>
<span class="line"><span>  (local $old_pages i32)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 计算所需页数</span></span>
<span class="line"><span>  (local.set $current_pages (memory.size))</span></span>
<span class="line"><span>  (local.set $required_pages </span></span>
<span class="line"><span>    (i32.div_u </span></span>
<span class="line"><span>      (i32.add (local.get $size) (i32.const 65535))</span></span>
<span class="line"><span>      (i32.const 65536)))</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 检查是否需要增长</span></span>
<span class="line"><span>  (if (i32.gt_u (local.get $required_pages) (local.get $current_pages))</span></span>
<span class="line"><span>    (then</span></span>
<span class="line"><span>      (local.set $old_pages</span></span>
<span class="line"><span>        (memory.grow </span></span>
<span class="line"><span>          (i32.sub (local.get $required_pages) (local.get $current_pages))))</span></span>
<span class="line"><span>      (if (i32.eq (local.get $old_pages) (i32.const -1))</span></span>
<span class="line"><span>        (then</span></span>
<span class="line"><span>          (unreachable)  ;; 内存增长失败</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 返回分配区域的起始偏移量</span></span>
<span class="line"><span>  (i32.mul (local.get $current_pages) (i32.const 65536))</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="内存边界保护" tabindex="-1">内存边界保护 <a class="header-anchor" href="#内存边界保护" aria-label="Permalink to &quot;内存边界保护&quot;">​</a></h3><p>所有内存访问都受到严格的边界检查保护。</p><p><strong>访问验证流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>指令: i32.load offset=4 align=2</span></span>
<span class="line"><span>地址计算: base + 4</span></span>
<span class="line"><span>边界检查: [地址, 地址+4) 必须在 [0, 当前内存大小) 范围内</span></span>
<span class="line"><span>对齐检查: 地址必须满足 2^2 = 4 字节对齐</span></span></code></pre></div><h2 id="内存布局模式" tabindex="-1">内存布局模式 <a class="header-anchor" href="#内存布局模式" aria-label="Permalink to &quot;内存布局模式&quot;">​</a></h2><h3 id="典型应用布局" tabindex="-1">典型应用布局 <a class="header-anchor" href="#典型应用布局" aria-label="Permalink to &quot;典型应用布局&quot;">​</a></h3><p><strong>结构化内存组织：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>0x00000000 ┌─────────────────┐</span></span>
<span class="line"><span>          │   代码和数据段   │ ← 静态初始化</span></span>
<span class="line"><span>0x00001000 ├─────────────────┤</span></span>
<span class="line"><span>          │     堆起始      │</span></span>
<span class="line"><span>          │                 │</span></span>
<span class="line"><span>          │   动态分配区域   │ → 运行时增长</span></span>
<span class="line"><span>          │                 │</span></span>
<span class="line"><span>0x00080000 ├─────────────────┤</span></span>
<span class="line"><span>          │     栈顶        │ ← 栈向下生长</span></span>
<span class="line"><span>          │     ...         │</span></span>
<span class="line"><span>          │     栈底        │</span></span>
<span class="line"><span>          └─────────────────┘</span></span></code></pre></div><h3 id="数据对齐策略" tabindex="-1">数据对齐策略 <a class="header-anchor" href="#数据对齐策略" aria-label="Permalink to &quot;数据对齐策略&quot;">​</a></h3><p>合理的内存对齐可以显著提升访问性能。</p><p><strong>数据类型对齐要求：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据类型  大小  推荐对齐</span></span>
<span class="line"><span>i8        1    1字节</span></span>
<span class="line"><span>i16       2    2字节  </span></span>
<span class="line"><span>i32       4    4字节</span></span>
<span class="line"><span>i64       8    8字节</span></span>
<span class="line"><span>f32       4    4字节</span></span>
<span class="line"><span>f64       8    8字节</span></span></code></pre></div><p><strong>结构体布局示例：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; C结构体等效布局:</span></span>
<span class="line"><span>;; struct Point { float x, y; int id; };</span></span>
<span class="line"><span>;; 总大小: 12字节，对齐: 4字节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(data (i32.const 0x1000) </span></span>
<span class="line"><span>  &quot;\\00\\00\\00\\00&quot;  ;; x: f32 = 0.0 (偏移0)</span></span>
<span class="line"><span>  &quot;\\00\\00\\80\\3F&quot;  ;; y: f32 = 1.0 (偏移4) </span></span>
<span class="line"><span>  &quot;\\01\\00\\00\\00&quot;  ;; id: i32 = 1 (偏移8)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="批量内存操作" tabindex="-1">批量内存操作 <a class="header-anchor" href="#批量内存操作" aria-label="Permalink to &quot;批量内存操作&quot;">​</a></h2><h3 id="内存初始化与复制" tabindex="-1">内存初始化与复制 <a class="header-anchor" href="#内存初始化与复制" aria-label="Permalink to &quot;内存初始化与复制&quot;">​</a></h3><p>WebAssembly 提供高效的批量内存操作指令。</p><p><strong>内存初始化：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>memory.init $segment_index  ; 从数据段初始化内存区域</span></span>
<span class="line"><span>参数: [dest, source, size]</span></span></code></pre></div><p><strong>内存复制：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>memory.copy  ; 内存区域间复制</span></span>
<span class="line"><span>参数: [dest, src, size]</span></span></code></pre></div><p><strong>内存填充：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>memory.fill  ; 用指定值填充内存区域  </span></span>
<span class="line"><span>参数: [dest, value, size]</span></span></code></pre></div><h3 id="批量操作示例" tabindex="-1">批量操作示例 <a class="header-anchor" href="#批量操作示例" aria-label="Permalink to &quot;批量操作示例&quot;">​</a></h3><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 高效内存操作示例</span></span>
<span class="line"><span>(func $init_data_structures</span></span>
<span class="line"><span>  ;; 从数据段初始化</span></span>
<span class="line"><span>  (memory.init 0</span></span>
<span class="line"><span>    (i32.const 0x2000)  ;; 目标地址</span></span>
<span class="line"><span>    (i32.const 0)       ;; 源偏移量</span></span>
<span class="line"><span>    (i32.const 1024))   ;; 大小</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 复制配置数据</span></span>
<span class="line"><span>  (memory.copy</span></span>
<span class="line"><span>    (i32.const 0x3000)  ;; 目标</span></span>
<span class="line"><span>    (i32.const 0x2000)  ;; 源</span></span>
<span class="line"><span>    (i32.const 512))    ;; 大小</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 填充缓冲区为零</span></span>
<span class="line"><span>  (memory.fill</span></span>
<span class="line"><span>    (i32.const 0x4000)  ;; 目标</span></span>
<span class="line"><span>    (i32.const 0)       ;; 填充值</span></span>
<span class="line"><span>    (i32.const 256))    ;; 大小</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="跨语言内存交互" tabindex="-1">跨语言内存交互 <a class="header-anchor" href="#跨语言内存交互" aria-label="Permalink to &quot;跨语言内存交互&quot;">​</a></h2><h3 id="javascript-内存共享" tabindex="-1">JavaScript 内存共享 <a class="header-anchor" href="#javascript-内存共享" aria-label="Permalink to &quot;JavaScript 内存共享&quot;">​</a></h3><p>WebAssembly 内存可以通过 JavaScript API 与宿主环境共享。</p><p><strong>内存创建与共享：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在 JavaScript 中创建内存</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">Memory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  initial: </span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 初始256页 (16MB)</span></span>
<span class="line"><span style="color:#E1E4E8;">  maximum: </span><span style="color:#79B8FF;">65536</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 最大65536页 (4GB)</span></span>
<span class="line"><span style="color:#E1E4E8;">  shared: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">     // 是否共享内存（用于多线程）</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 访问内存内容</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> uint8View</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(memory.buffer);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> uint32View</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint32Array</span><span style="color:#E1E4E8;">(memory.buffer);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> float64View</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Float64Array</span><span style="color:#E1E4E8;">(memory.buffer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 写入数据到 WASM 内存</span></span>
<span class="line"><span style="color:#E1E4E8;">uint8View.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">0x48</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x65</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x6C</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x6C</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0x6F</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">0x1000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &quot;Hello&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从 WASM 内存读取数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextDecoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">decode</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">  new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(memory.buffer, </span><span style="color:#79B8FF;">0x1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><h3 id="高效数据交换策略" tabindex="-1">高效数据交换策略 <a class="header-anchor" href="#高效数据交换策略" aria-label="Permalink to &quot;高效数据交换策略&quot;">​</a></h3><p><strong>零拷贝数据传递：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// JavaScript 到 WASM 的高效数据传输</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> transferDataToWasm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memory</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">offset</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(memory.buffer);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (data </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> ArrayBuffer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 直接复制 ArrayBuffer</span></span>
<span class="line"><span style="color:#E1E4E8;">    view.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(data), offset);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 字符串编码后复制</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encoder</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextEncoder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> encoded</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> encoder.</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    view.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(encoded, offset);</span></span>
<span class="line"><span style="color:#E1E4E8;">    view[offset </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> encoded.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// null终止符</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> offset;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// WASM 到 JavaScript 的高效数据读取</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> readStringFromWasm</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memory</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">offset</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxLength</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> view</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(memory.buffer);</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> length </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 查找null终止符</span></span>
<span class="line"><span style="color:#F97583;">  while</span><span style="color:#E1E4E8;"> (length </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> maxLength </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> view[offset </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> length] </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    length</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> TextDecoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">decode</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#F97583;">    new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(memory.buffer, offset, length)</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="内存安全与隔离" tabindex="-1">内存安全与隔离 <a class="header-anchor" href="#内存安全与隔离" aria-label="Permalink to &quot;内存安全与隔离&quot;">​</a></h2><h3 id="沙箱内存保护" tabindex="-1">沙箱内存保护 <a class="header-anchor" href="#沙箱内存保护" aria-label="Permalink to &quot;沙箱内存保护&quot;">​</a></h3><p>WebAssembly 的线性内存模型天然提供内存隔离保护。</p><p><strong>安全边界：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WASM 实例内存</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>独立地址空间 ← 无法访问宿主或其他实例内存</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>所有访问经过边界检查</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>无野指针或越界访问</span></span></code></pre></div><h3 id="边界检查优化" tabindex="-1">边界检查优化 <a class="header-anchor" href="#边界检查优化" aria-label="Permalink to &quot;边界检查优化&quot;">​</a></h3><p>现代 WASM 运行时采用高效的边界检查策略。</p><p><strong>检查优化技术：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>静态边界分析 → 消除冗余检查</span></span>
<span class="line"><span>保护页技术 → 利用硬件内存保护</span></span>
<span class="line"><span>JIT 编译优化 → 内联检查代码</span></span></code></pre></div><h2 id="性能优化实践" tabindex="-1">性能优化实践 <a class="header-anchor" href="#性能优化实践" aria-label="Permalink to &quot;性能优化实践&quot;">​</a></h2><h3 id="内存访问模式优化" tabindex="-1">内存访问模式优化 <a class="header-anchor" href="#内存访问模式优化" aria-label="Permalink to &quot;内存访问模式优化&quot;">​</a></h3><p><strong>顺序访问模式：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 高效: 顺序访问，利于预取</span></span>
<span class="line"><span>(func $sum_array (param $ptr i32) (param $len i32) (result i32)</span></span>
<span class="line"><span>  (local $sum i32)</span></span>
<span class="line"><span>  (local $i i32)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (loop $loop</span></span>
<span class="line"><span>    (local.set $sum</span></span>
<span class="line"><span>      (i32.add</span></span>
<span class="line"><span>        (local.get $sum)</span></span>
<span class="line"><span>        (i32.load (i32.add (local.get $ptr) (i32.mul (local.get $i) (i32.const 4))))))</span></span>
<span class="line"><span>    (local.set $i (i32.add (local.get $i) (i32.const 1)))</span></span>
<span class="line"><span>    (br_if $loop (i32.lt_u (local.get $i) (local.get $len)))</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  (local.get $sum)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="数据局部性利用" tabindex="-1">数据局部性利用 <a class="header-anchor" href="#数据局部性利用" aria-label="Permalink to &quot;数据局部性利用&quot;">​</a></h3><p><strong>缓存友好布局：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>结构数组布局 (SoA):</span></span>
<span class="line"><span>[所有x坐标] [所有y坐标] [所有z坐标]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数组结构布局 (AoS):</span></span>
<span class="line"><span>[x1,y1,z1] [x2,y2,z2] [x3,y3,z3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选择策略:</span></span>
<span class="line"><span>顺序处理 → SoA (缓存友好)</span></span>
<span class="line"><span>随机访问 → AoS (数据局部性)</span></span></code></pre></div><p>通过深入理解和优化 WebAssembly 线性内存模型的使用，开发者可以构建出既安全又高性能的应用程序，充分发挥 WASM 在现代计算环境中的潜力。</p>`,93)])])}const g=a(e,[["render",o]]);export{u as __pageData,g as default};
