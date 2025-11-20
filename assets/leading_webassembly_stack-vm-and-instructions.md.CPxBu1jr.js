import{_ as s,c as n,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const u=JSON.parse('{"title":"WASM 栈式虚拟机与指令集","description":"","frontmatter":{},"headers":[{"level":2,"title":"虚拟机架构概述","slug":"虚拟机架构概述","link":"#虚拟机架构概述","children":[]},{"level":2,"title":"栈执行模型","slug":"栈执行模型","link":"#栈执行模型","children":[{"level":3,"title":"操作数栈机制","slug":"操作数栈机制","link":"#操作数栈机制","children":[]},{"level":3,"title":"栈帧管理","slug":"栈帧管理","link":"#栈帧管理","children":[]}]},{"level":2,"title":"指令集分类与编码","slug":"指令集分类与编码","link":"#指令集分类与编码","children":[{"level":3,"title":"数值指令","slug":"数值指令","link":"#数值指令","children":[]},{"level":3,"title":"控制流指令","slug":"控制流指令","link":"#控制流指令","children":[]},{"level":3,"title":"内存访问指令","slug":"内存访问指令","link":"#内存访问指令","children":[]},{"level":3,"title":"变量访问指令","slug":"变量访问指令","link":"#变量访问指令","children":[]}]},{"level":2,"title":"函数调用机制","slug":"函数调用机制","link":"#函数调用机制","children":[{"level":3,"title":"直接调用","slug":"直接调用","link":"#直接调用","children":[]},{"level":3,"title":"间接调用","slug":"间接调用","link":"#间接调用","children":[]}]},{"level":2,"title":"高级指令特性","slug":"高级指令特性","link":"#高级指令特性","children":[{"level":3,"title":"多值操作","slug":"多值操作","link":"#多值操作","children":[]},{"level":3,"title":"批量内存操作","slug":"批量内存操作","link":"#批量内存操作","children":[]}]},{"level":2,"title":"指令编码优化","slug":"指令编码优化","link":"#指令编码优化","children":[{"level":3,"title":"紧凑操作码设计","slug":"紧凑操作码设计","link":"#紧凑操作码设计","children":[]},{"level":3,"title":"立即数编码","slug":"立即数编码","link":"#立即数编码","children":[]}]},{"level":2,"title":"验证与安全","slug":"验证与安全","link":"#验证与安全","children":[{"level":3,"title":"栈高度验证","slug":"栈高度验证","link":"#栈高度验证","children":[]},{"level":3,"title":"类型安全验证","slug":"类型安全验证","link":"#类型安全验证","children":[]}]},{"level":2,"title":"性能优化策略","slug":"性能优化策略","link":"#性能优化策略","children":[{"level":3,"title":"栈操作优化","slug":"栈操作优化","link":"#栈操作优化","children":[]},{"level":3,"title":"指令流水线","slug":"指令流水线","link":"#指令流水线","children":[]}]},{"level":2,"title":"实际执行示例","slug":"实际执行示例","link":"#实际执行示例","children":[{"level":3,"title":"完整函数执行跟踪","slug":"完整函数执行跟踪","link":"#完整函数执行跟踪","children":[]},{"level":3,"title":"复杂控制流示例","slug":"复杂控制流示例","link":"#复杂控制流示例","children":[]}]}],"relativePath":"leading/webassembly/stack-vm-and-instructions.md","filePath":"leading/webassembly/stack-vm-and-instructions.md"}'),e={name:"leading/webassembly/stack-vm-and-instructions.md"};function i(t,a,c,o,d,r){return l(),n("div",null,[...a[0]||(a[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/webassembly/stack-vm-and-instructions.md for this page in Markdown format</div><h1 id="wasm-栈式虚拟机与指令集" tabindex="-1">WASM 栈式虚拟机与指令集 <a class="header-anchor" href="#wasm-栈式虚拟机与指令集" aria-label="Permalink to &quot;WASM 栈式虚拟机与指令集&quot;">​</a></h1><h2 id="虚拟机架构概述" tabindex="-1">虚拟机架构概述 <a class="header-anchor" href="#虚拟机架构概述" aria-label="Permalink to &quot;虚拟机架构概述&quot;">​</a></h2><p>WebAssembly 采用基于栈的虚拟机设计，这种架构选择在代码密度和执行效率之间取得了精心平衡。与基于寄存器的虚拟机相比，栈式虚拟机使用更紧凑的指令编码，同时保持了良好的运行时性能。</p><p><strong>核心架构对比：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>基于寄存器的虚拟机:</span></span>
<span class="line"><span>指令: add r1, r2, r3</span></span>
<span class="line"><span>操作: 从指定寄存器读取操作数，结果写入目标寄存器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>基于栈的虚拟机:  </span></span>
<span class="line"><span>指令: i32.const 5 → i32.const 3 → i32.add</span></span>
<span class="line"><span>操作: 操作数从栈顶弹出，结果压回栈顶</span></span></code></pre></div><h2 id="栈执行模型" tabindex="-1">栈执行模型 <a class="header-anchor" href="#栈执行模型" aria-label="Permalink to &quot;栈执行模型&quot;">​</a></h2><h3 id="操作数栈机制" tabindex="-1">操作数栈机制 <a class="header-anchor" href="#操作数栈机制" aria-label="Permalink to &quot;操作数栈机制&quot;">​</a></h3><p>操作数栈是 WASM 虚拟机的核心执行引擎，所有计算都通过栈操作完成。</p><p><strong>栈状态变迁示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始栈状态: []</span></span>
<span class="line"><span>执行 i32.const 5: [5]</span></span>
<span class="line"><span>执行 i32.const 3: [5, 3]</span></span>
<span class="line"><span>执行 i32.add:    [8]        ; 弹出5和3，压入8</span></span>
<span class="line"><span>执行 i32.const 2: [8, 2]</span></span>
<span class="line"><span>执行 i32.mul:    [16]       ; 弹出8和2，压入16</span></span></code></pre></div><h3 id="栈帧管理" tabindex="-1">栈帧管理 <a class="header-anchor" href="#栈帧管理" aria-label="Permalink to &quot;栈帧管理&quot;">​</a></h3><p>函数调用时创建新的栈帧，包含局部变量和返回地址等信息。</p><p><strong>栈帧布局：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>调用前栈: [参数N, ..., 参数1, 返回地址?]</span></span>
<span class="line"><span>调用后栈帧:</span></span>
<span class="line"><span>[局部变量M] ... [局部变量1] [参数N] ... [参数1] [返回地址]</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>当前栈指针</span></span></code></pre></div><h2 id="指令集分类与编码" tabindex="-1">指令集分类与编码 <a class="header-anchor" href="#指令集分类与编码" aria-label="Permalink to &quot;指令集分类与编码&quot;">​</a></h2><h3 id="数值指令" tabindex="-1">数值指令 <a class="header-anchor" href="#数值指令" aria-label="Permalink to &quot;数值指令&quot;">​</a></h3><p>数值指令操作基本数据类型，包括整数和浮点数的算术、比较、转换运算。</p><p><strong>整数运算指令示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.add:  弹出两个i32，压入它们的和</span></span>
<span class="line"><span>i64.sub:  弹出两个i64，压入它们的差  </span></span>
<span class="line"><span>i32.mul:  弹出两个i32，压入它们的积</span></span>
<span class="line"><span>i32.div_s: 有符号除法</span></span>
<span class="line"><span>i32.div_u: 无符号除法</span></span></code></pre></div><p><strong>位运算指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.and:  按位与</span></span>
<span class="line"><span>i32.or:   按位或</span></span>
<span class="line"><span>i32.xor:  按位异或</span></span>
<span class="line"><span>i32.shl:  左移位</span></span>
<span class="line"><span>i32.shr_s: 算术右移位</span></span>
<span class="line"><span>i32.shr_u: 逻辑右移位</span></span></code></pre></div><h3 id="控制流指令" tabindex="-1">控制流指令 <a class="header-anchor" href="#控制流指令" aria-label="Permalink to &quot;控制流指令&quot;">​</a></h3><p>控制流指令实现结构化编程范式，确保代码的可验证性和安全性。</p><h4 id="块结构指令" tabindex="-1">块结构指令 <a class="header-anchor" href="#块结构指令" aria-label="Permalink to &quot;块结构指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>block $label [结果类型]</span></span>
<span class="line"><span>    ... 指令序列 ...</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loop $label [结果类型]  </span></span>
<span class="line"><span>    ... 循环体 ...</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if $label [结果类型]</span></span>
<span class="line"><span>    ... 条件为真时执行 ...</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    ... 条件为假时执行 ...  </span></span>
<span class="line"><span>end</span></span></code></pre></div><p><strong>块执行流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>if 指令: 弹出条件值</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>条件为真 → 执行 then 分支</span></span>
<span class="line"><span>条件为假 → 执行 else 分支 (如果有)</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>分支出口栈高度必须匹配块声明的结果类型</span></span></code></pre></div><h4 id="分支指令" tabindex="-1">分支指令 <a class="header-anchor" href="#分支指令" aria-label="Permalink to &quot;分支指令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>br $label      ; 无条件跳转到指定标签</span></span>
<span class="line"><span>br_if $label   ; 条件跳转，弹出条件值</span></span>
<span class="line"><span>br_table [标签列表] $default ; 跳转表，弹出索引值</span></span></code></pre></div><p><strong>br_table 执行逻辑：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>弹出索引值 i</span></span>
<span class="line"><span>如果 i &lt; 标签列表长度 → 跳转到 labels[i]</span></span>
<span class="line"><span>否则 → 跳转到 default 标签</span></span></code></pre></div><h3 id="内存访问指令" tabindex="-1">内存访问指令 <a class="header-anchor" href="#内存访问指令" aria-label="Permalink to &quot;内存访问指令&quot;">​</a></h3><p>内存指令提供对线性内存的精细控制，支持多种数据类型和访问模式。</p><p><strong>加载指令格式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.load [offset=imm] [align=imm]</span></span>
<span class="line"><span>i64.load8_s [offset=imm] [align=imm]  </span></span>
<span class="line"><span>f32.load [offset=imm] [align=imm]</span></span></code></pre></div><p><strong>存储指令格式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.store [offset=imm] [align=imm]</span></span>
<span class="line"><span>i64.store16 [offset=imm] [align=imm]</span></span>
<span class="line"><span>f64.store [offset=imm] [align=imm]</span></span></code></pre></div><p><strong>内存访问语义：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>地址计算: base_address + offset</span></span>
<span class="line"><span>对齐要求: 访问必须在 2^align 字节边界上</span></span>
<span class="line"><span>边界检查: 运行时验证地址在内存有效范围内</span></span></code></pre></div><h3 id="变量访问指令" tabindex="-1">变量访问指令 <a class="header-anchor" href="#变量访问指令" aria-label="Permalink to &quot;变量访问指令&quot;">​</a></h3><p>变量指令操作局部变量和全局变量，实现数据存储和检索。</p><p><strong>局部变量指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>local.get $index  ; 获取局部变量值压栈</span></span>
<span class="line"><span>local.set $index  ; 弹出值设置到局部变量  </span></span>
<span class="line"><span>local.tee $index  ; 弹出值设置变量并保留值在栈顶</span></span></code></pre></div><p><strong>全局变量指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>global.get $index ; 获取全局变量值</span></span>
<span class="line"><span>global.set $index ; 设置全局变量值</span></span></code></pre></div><p><strong>变量访问示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>局部变量空间: [var0, var1, var2, ...]</span></span>
<span class="line"><span>全局变量空间: [global0, global1, ...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行 local.get 2: 读取 var2 值压栈</span></span>
<span class="line"><span>执行 global.set 0: 弹出栈顶值设置到 global0</span></span></code></pre></div><h2 id="函数调用机制" tabindex="-1">函数调用机制 <a class="header-anchor" href="#函数调用机制" aria-label="Permalink to &quot;函数调用机制&quot;">​</a></h2><h3 id="直接调用" tabindex="-1">直接调用 <a class="header-anchor" href="#直接调用" aria-label="Permalink to &quot;直接调用&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>call $func_index ; 直接调用函数</span></span></code></pre></div><p><strong>调用过程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 压入返回地址</span></span>
<span class="line"><span>2. 为被调用函数创建新栈帧</span></span>
<span class="line"><span>3. 传递参数到新栈帧</span></span>
<span class="line"><span>4. 执行函数体</span></span>
<span class="line"><span>5. 返回时弹出结果，恢复调用者栈帧</span></span></code></pre></div><h3 id="间接调用" tabindex="-1">间接调用 <a class="header-anchor" href="#间接调用" aria-label="Permalink to &quot;间接调用&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>call_indirect $type_index ; 通过函数表间接调用</span></span></code></pre></div><p><strong>间接调用验证：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 弹出表索引和调用参数</span></span>
<span class="line"><span>2. 检查表索引有效性</span></span>
<span class="line"><span>3. 验证函数签名匹配 type_index</span></span>
<span class="line"><span>4. 执行动态调用</span></span></code></pre></div><h2 id="高级指令特性" tabindex="-1">高级指令特性 <a class="header-anchor" href="#高级指令特性" aria-label="Permalink to &quot;高级指令特性&quot;">​</a></h2><h3 id="多值操作" tabindex="-1">多值操作 <a class="header-anchor" href="#多值操作" aria-label="Permalink to &quot;多值操作&quot;">​</a></h3><p>WebAssembly 支持多值返回，增强函数间数据传递能力。</p><p><strong>多值块示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>block (result i32 i32)</span></span>
<span class="line"><span>    i32.const 42</span></span>
<span class="line"><span>    i32.const 100</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; 栈状态: [42, 100]</span></span></code></pre></div><h3 id="批量内存操作" tabindex="-1">批量内存操作 <a class="header-anchor" href="#批量内存操作" aria-label="Permalink to &quot;批量内存操作&quot;">​</a></h3><p>内存初始化、复制和填充指令支持高效数据处理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>memory.init $segment ; 从数据段初始化内存</span></span>
<span class="line"><span>memory.copy          ; 内存区域复制  </span></span>
<span class="line"><span>memory.fill          ; 用指定值填充内存区域</span></span></code></pre></div><p><strong>memory.copy 操作：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>参数: [dest, src, size]</span></span>
<span class="line"><span>效果: 将 src 开始的 size 字节复制到 dest</span></span>
<span class="line"><span>自动边界检查确保操作在有效内存范围内</span></span></code></pre></div><h2 id="指令编码优化" tabindex="-1">指令编码优化 <a class="header-anchor" href="#指令编码优化" aria-label="Permalink to &quot;指令编码优化&quot;">​</a></h2><h3 id="紧凑操作码设计" tabindex="-1">紧凑操作码设计 <a class="header-anchor" href="#紧凑操作码设计" aria-label="Permalink to &quot;紧凑操作码设计&quot;">​</a></h3><p>WASM 指令采用单字节或多字节操作码，常用指令使用短编码。</p><p><strong>操作码分布：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>0x00-0xBF: 核心指令 (数值运算、变量访问等)</span></span>
<span class="line"><span>0xC0-0xFF: 扩展指令 (SIMD、原子操作等)</span></span></code></pre></div><h3 id="立即数编码" tabindex="-1">立即数编码 <a class="header-anchor" href="#立即数编码" aria-label="Permalink to &quot;立即数编码&quot;">​</a></h3><p>立即数使用 LEB128 变长编码，实现空间效率优化。</p><p><strong>LEB128 编码示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>值: 127    → 编码: 0x7F</span></span>
<span class="line"><span>值: 128    → 编码: 0x80 0x01  </span></span>
<span class="line"><span>值: 624485 → 编码: 0xE5 0x8E 0x26</span></span></code></pre></div><h2 id="验证与安全" tabindex="-1">验证与安全 <a class="header-anchor" href="#验证与安全" aria-label="Permalink to &quot;验证与安全&quot;">​</a></h2><h3 id="栈高度验证" tabindex="-1">栈高度验证 <a class="header-anchor" href="#栈高度验证" aria-label="Permalink to &quot;栈高度验证&quot;">​</a></h3><p>在验证阶段检查所有执行路径的栈高度一致性。</p><p><strong>栈高度规则：</strong></p><ul><li>块入口和出口栈高度必须匹配声明结果类型</li><li>分支目标栈高度必须一致</li><li>函数返回栈高度必须匹配签名</li></ul><h3 id="类型安全验证" tabindex="-1">类型安全验证 <a class="header-anchor" href="#类型安全验证" aria-label="Permalink to &quot;类型安全验证&quot;">​</a></h3><p>所有指令操作数类型在验证阶段检查，确保运行时类型正确。</p><p><strong>类型检查示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32.add 指令:</span></span>
<span class="line"><span>期望栈顶: [i32, i32]</span></span>
<span class="line"><span>实际栈顶类型不匹配 → 验证失败</span></span></code></pre></div><h2 id="性能优化策略" tabindex="-1">性能优化策略 <a class="header-anchor" href="#性能优化策略" aria-label="Permalink to &quot;性能优化策略&quot;">​</a></h2><h3 id="栈操作优化" tabindex="-1">栈操作优化 <a class="header-anchor" href="#栈操作优化" aria-label="Permalink to &quot;栈操作优化&quot;">​</a></h3><p>现代 WASM 运行时将栈操作映射到寄存器操作，减少实际内存访问。</p><p><strong>JIT 编译优化：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>WASM 栈操作 → 中间表示 → 寄存器分配 → 本地代码</span></span>
<span class="line"><span>    i32.add          %0 = add %1, %2</span></span></code></pre></div><h3 id="指令流水线" tabindex="-1">指令流水线 <a class="header-anchor" href="#指令流水线" aria-label="Permalink to &quot;指令流水线&quot;">​</a></h3><p>利用 CPU 流水线特性优化指令解码和执行。</p><p><strong>执行流水线：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>指令获取 → 解码 → 操作数准备 → 执行 → 结果写回</span></span></code></pre></div><h2 id="实际执行示例" tabindex="-1">实际执行示例 <a class="header-anchor" href="#实际执行示例" aria-label="Permalink to &quot;实际执行示例&quot;">​</a></h2><h3 id="完整函数执行跟踪" tabindex="-1">完整函数执行跟踪 <a class="header-anchor" href="#完整函数执行跟踪" aria-label="Permalink to &quot;完整函数执行跟踪&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>函数签名: (i32, i32) → i32</span></span>
<span class="line"><span>函数体:</span></span>
<span class="line"><span>local.get 0      ; 栈: [a]</span></span>
<span class="line"><span>local.get 1      ; 栈: [a, b]  </span></span>
<span class="line"><span>i32.add          ; 栈: [a+b]</span></span>
<span class="line"><span>i32.const 1      ; 栈: [a+b, 1]</span></span>
<span class="line"><span>i32.sub          ; 栈: [a+b-1]</span></span>
<span class="line"><span>end              ; 返回栈顶值</span></span></code></pre></div><h3 id="复杂控制流示例" tabindex="-1">复杂控制流示例 <a class="header-anchor" href="#复杂控制流示例" aria-label="Permalink to &quot;复杂控制流示例&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>block $outer (result i32)</span></span>
<span class="line"><span>    i32.const 0</span></span>
<span class="line"><span>    local.set $i</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    loop $loop</span></span>
<span class="line"><span>        local.get $i</span></span>
<span class="line"><span>        i32.const 10</span></span>
<span class="line"><span>        i32.lt_s</span></span>
<span class="line"><span>        if</span></span>
<span class="line"><span>            local.get $i</span></span>
<span class="line"><span>            i32.const 1</span></span>
<span class="line"><span>            i32.add</span></span>
<span class="line"><span>            local.set $i</span></span>
<span class="line"><span>            br $loop</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            local.get $i</span></span>
<span class="line"><span>            br $outer</span></span>
<span class="line"><span>        end</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>通过深入理解 WebAssembly 栈式虚拟机和指令集的设计原理，开发者能够编写出更高效、更安全的 WASM 代码，并更好地理解运行时行为和执行特征。</p>`,100)])])}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
