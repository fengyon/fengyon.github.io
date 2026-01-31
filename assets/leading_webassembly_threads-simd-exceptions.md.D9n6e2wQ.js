import{_ as a,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"WASM 线程、SIMD 与异常处理","description":"","frontmatter":{},"headers":[{"level":2,"title":"并发执行模型","slug":"并发执行模型","link":"#并发执行模型","children":[]},{"level":2,"title":"线程模型实现","slug":"线程模型实现","link":"#线程模型实现","children":[{"level":3,"title":"共享线性内存","slug":"共享线性内存","link":"#共享线性内存","children":[]},{"level":3,"title":"原子操作指令","slug":"原子操作指令","link":"#原子操作指令","children":[]},{"level":3,"title":"线程间同步","slug":"线程间同步","link":"#线程间同步","children":[]}]},{"level":2,"title":"SIMD 向量处理","slug":"simd-向量处理","link":"#simd-向量处理","children":[{"level":3,"title":"SIMD 基础概念","slug":"simd-基础概念","link":"#simd-基础概念","children":[]},{"level":3,"title":"WASM SIMD 指令集","slug":"wasm-simd-指令集","link":"#wasm-simd-指令集","children":[]},{"level":3,"title":"SIMD 实战示例","slug":"simd-实战示例","link":"#simd-实战示例","children":[]}]},{"level":2,"title":"异常处理机制","slug":"异常处理机制","link":"#异常处理机制","children":[{"level":3,"title":"异常处理提案","slug":"异常处理提案","link":"#异常处理提案","children":[]},{"level":3,"title":"异常指令集","slug":"异常指令集","link":"#异常指令集","children":[]},{"level":3,"title":"异常处理实战","slug":"异常处理实战","link":"#异常处理实战","children":[]},{"level":3,"title":"异常与性能","slug":"异常与性能","link":"#异常与性能","children":[]}]},{"level":2,"title":"集成应用模式","slug":"集成应用模式","link":"#集成应用模式","children":[{"level":3,"title":"线程 + SIMD 高性能计算","slug":"线程-simd-高性能计算","link":"#线程-simd-高性能计算","children":[]},{"level":3,"title":"异常安全的并发编程","slug":"异常安全的并发编程","link":"#异常安全的并发编程","children":[]}]},{"level":2,"title":"工具链支持","slug":"工具链支持","link":"#工具链支持","children":[{"level":3,"title":"编译时启用","slug":"编译时启用","link":"#编译时启用","children":[]},{"level":3,"title":"运行时检测","slug":"运行时检测","link":"#运行时检测","children":[]}]}],"relativePath":"leading/webassembly/threads-simd-exceptions.md","filePath":"leading/webassembly/threads-simd-exceptions.md"}'),e={name:"leading/webassembly/threads-simd-exceptions.md"};function c(o,s,i,t,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /leading/webassembly/threads-simd-exceptions.md for this page in Markdown format</div><h1 id="wasm-线程、simd-与异常处理" tabindex="-1">WASM 线程、SIMD 与异常处理 <a class="header-anchor" href="#wasm-线程、simd-与异常处理" aria-label="Permalink to &quot;WASM 线程、SIMD 与异常处理&quot;">​</a></h1><h2 id="并发执行模型" tabindex="-1">并发执行模型 <a class="header-anchor" href="#并发执行模型" aria-label="Permalink to &quot;并发执行模型&quot;">​</a></h2><p>WebAssembly 线程提案为 WASM 引入了真正的并行计算能力，通过共享内存和原子操作实现多线程编程。这种模型基于 Web Workers 和 SharedArrayBuffer，提供了高效的线程间通信机制。</p><p><strong>线程架构示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主线程 → 创建 Worker → 实例化 WASM 模块</span></span>
<span class="line"><span>    ↓ 共享内存</span></span>
<span class="line"><span>工作线程 ← 访问相同内存 ← 原子操作同步</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>并行执行 + 数据共享</span></span></code></pre></div><h2 id="线程模型实现" tabindex="-1">线程模型实现 <a class="header-anchor" href="#线程模型实现" aria-label="Permalink to &quot;线程模型实现&quot;">​</a></h2><h3 id="共享线性内存" tabindex="-1">共享线性内存 <a class="header-anchor" href="#共享线性内存" aria-label="Permalink to &quot;共享线性内存&quot;">​</a></h3><p>线程间通过共享的线性内存进行通信，所有线程访问相同的 Memory 对象。</p><p><strong>内存共享配置：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 在主线程中创建共享内存</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> memory</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> WebAssembly.</span><span style="color:#B392F0;">Memory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  initial: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  maximum: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  shared: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;">  // 启用共享内存</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在线程间传递相同的内存引用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> worker</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Worker</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;worker.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">worker.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">({ memory });</span></span></code></pre></div><h3 id="原子操作指令" tabindex="-1">原子操作指令 <a class="header-anchor" href="#原子操作指令" aria-label="Permalink to &quot;原子操作指令&quot;">​</a></h3><p>WASM 提供了一套完整的原子操作指令，确保多线程环境下的数据一致性。</p><p><strong>原子指令分类：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原子加载: i32.atomic.load, i64.atomic.load</span></span>
<span class="line"><span>原子存储: i32.atomic.store, i64.atomic.store  </span></span>
<span class="line"><span>原子读-修改-写: i32.atomic.rmw.add, i64.atomic.rmw.xor</span></span>
<span class="line"><span>原子比较交换: i32.atomic.rmw.cmpxchg</span></span></code></pre></div><h4 id="原子操作示例" tabindex="-1">原子操作示例 <a class="header-anchor" href="#原子操作示例" aria-label="Permalink to &quot;原子操作示例&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 多线程计数器实现</span></span>
<span class="line"><span>(module</span></span>
<span class="line"><span>  (memory 1 1 shared)  ;; 共享内存</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (global $counter (mut i32) (i32.const 0))</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 线程安全的计数器递增</span></span>
<span class="line"><span>  (func $increment_counter (result i32)</span></span>
<span class="line"><span>    (loop $spin</span></span>
<span class="line"><span>      ;; 加载当前值</span></span>
<span class="line"><span>      (local.set $current (i32.atomic.load (i32.const 0)))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 尝试原子比较交换</span></span>
<span class="line"><span>      (i32.atomic.rmw.cmpxchg</span></span>
<span class="line"><span>        (i32.const 0)           ;; 内存地址</span></span>
<span class="line"><span>        (local.get $current)    ;; 期望值</span></span>
<span class="line"><span>        (i32.add (local.get $current) (i32.const 1)) ;; 新值</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 检查是否成功，否则重试</span></span>
<span class="line"><span>      (if (i32.ne (local.get $current))</span></span>
<span class="line"><span>        (then (br $spin))</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    (i32.add (local.get $current) (i32.const 1))</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="线程间同步" tabindex="-1">线程间同步 <a class="header-anchor" href="#线程间同步" aria-label="Permalink to &quot;线程间同步&quot;">​</a></h3><p>除了原子操作，WASM 还提供了更高级的同步原语。</p><p><strong>等待和通知操作：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>atomic.notify - 唤醒等待的线程</span></span>
<span class="line"><span>atomic.wait - 使线程等待，直到被唤醒</span></span></code></pre></div><h4 id="生产者-消费者模式" tabindex="-1">生产者-消费者模式 <a class="header-anchor" href="#生产者-消费者模式" aria-label="Permalink to &quot;生产者-消费者模式&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 生产者-消费者缓冲区</span></span>
<span class="line"><span>(module</span></span>
<span class="line"><span>  (memory 1 1 shared)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (data (i32.const 0) &quot;\\00\\00\\00\\00&quot;)  ;; 缓冲区计数</span></span>
<span class="line"><span>  (data (i32.const 4) &quot;\\00\\00\\00\\00&quot;)  ;; 缓冲区数据...</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (func $produce (param $data i32)</span></span>
<span class="line"><span>    (loop $wait</span></span>
<span class="line"><span>      ;; 检查缓冲区是否有空间</span></span>
<span class="line"><span>      (if (i32.eq (i32.atomic.load (i32.const 0)) (i32.const 1024))</span></span>
<span class="line"><span>        (then</span></span>
<span class="line"><span>          ;; 等待消费者释放空间</span></span>
<span class="line"><span>          (atomic.wait (i32.const 0) (i32.const 1024) (i64.const -1))</span></span>
<span class="line"><span>          (br $wait)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 生产数据</span></span>
<span class="line"><span>    ;; ... 数据写入逻辑</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 增加计数并通知消费者</span></span>
<span class="line"><span>    (i32.atomic.store (i32.const 0) </span></span>
<span class="line"><span>      (i32.add (i32.atomic.load (i32.const 0)) (i32.const 1)))</span></span>
<span class="line"><span>    (atomic.notify (i32.const 0) (i32.const 1))</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="simd-向量处理" tabindex="-1">SIMD 向量处理 <a class="header-anchor" href="#simd-向量处理" aria-label="Permalink to &quot;SIMD 向量处理&quot;">​</a></h2><h3 id="simd-基础概念" tabindex="-1">SIMD 基础概念 <a class="header-anchor" href="#simd-基础概念" aria-label="Permalink to &quot;SIMD 基础概念&quot;">​</a></h3><p>单指令多数据 (SIMD) 允许在单个指令中处理多个数据元素，显著提升数据并行任务的性能。</p><p><strong>SIMD 操作示意图：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>标量处理: [A1] [A2] [A3] [A4] → 4次加法操作</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>SIMD 处理: [A1, A2, A3, A4] → 1次向量加法</span></span></code></pre></div><h3 id="wasm-simd-指令集" tabindex="-1">WASM SIMD 指令集 <a class="header-anchor" href="#wasm-simd-指令集" aria-label="Permalink to &quot;WASM SIMD 指令集&quot;">​</a></h3><p>WASM SIMD 提供 128 位向量操作，支持多种数据类型和操作模式。</p><p><strong>向量类型：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>v128 - 128位向量类型</span></span>
<span class="line"><span>支持的数据格式:</span></span>
<span class="line"><span>  i8x16 - 16个8位整数</span></span>
<span class="line"><span>  i16x8 - 8个16位整数  </span></span>
<span class="line"><span>  i32x4 - 4个32位整数</span></span>
<span class="line"><span>  i64x2 - 2个64位整数</span></span>
<span class="line"><span>  f32x4 - 4个32位浮点数</span></span>
<span class="line"><span>  f64x2 - 2个64位浮点数</span></span></code></pre></div><h4 id="simd-操作分类" tabindex="-1">SIMD 操作分类 <a class="header-anchor" href="#simd-操作分类" aria-label="Permalink to &quot;SIMD 操作分类&quot;">​</a></h4><p><strong>算术运算：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i8x16.add, i16x8.mul, f32x4.div</span></span></code></pre></div><p><strong>比较运算：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i32x4.eq, f64x2.gt, i8x16.lt_s</span></span></code></pre></div><p><strong>位运算：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>v128.and, v128.or, v128.xor, v128.not</span></span></code></pre></div><p><strong>移位运算：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i16x8.shl, i32x4.shr_u, i64x2.shr_s</span></span></code></pre></div><p><strong>数据重排：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>i8x16.shuffle, v128.swizzle</span></span></code></pre></div><h3 id="simd-实战示例" tabindex="-1">SIMD 实战示例 <a class="header-anchor" href="#simd-实战示例" aria-label="Permalink to &quot;SIMD 实战示例&quot;">​</a></h3><h4 id="图像处理优化" tabindex="-1">图像处理优化 <a class="header-anchor" href="#图像处理优化" aria-label="Permalink to &quot;图像处理优化&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; SIMD 加速的图像灰度化</span></span>
<span class="line"><span>(module</span></span>
<span class="line"><span>  (memory 1)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (func $grayscale_simd (param $pixels i32) (param $count i32)</span></span>
<span class="line"><span>    (local $i i32)</span></span>
<span class="line"><span>    (local $vector v128)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    (loop $process</span></span>
<span class="line"><span>      ;; 一次处理4个像素 (16字节)</span></span>
<span class="line"><span>      (local.set $vector (v128.load (local.get $pixels)))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 提取RGB分量并计算灰度</span></span>
<span class="line"><span>      ;; R * 0.299 + G * 0.587 + B * 0.114</span></span>
<span class="line"><span>      (local.set $vector</span></span>
<span class="line"><span>        (f32x4.mul</span></span>
<span class="line"><span>          (f32x4.add</span></span>
<span class="line"><span>            (f32x4.mul</span></span>
<span class="line"><span>              (f32x4.convert_i32x4_u (i32x4.extend_low_i16x8_u (i16x8.extend_low_i8x16_u (local.get $vector))))</span></span>
<span class="line"><span>              (f32x4.splat (f32.const 0.299))</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            (f32x4.mul</span></span>
<span class="line"><span>              (f32x4.convert_i32x4_u (i32x4.extend_low_i16x8_u (i16x8.extend_high_i8x16_u (local.get $vector))))</span></span>
<span class="line"><span>              (f32x4.splat (f32.const 0.587))</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>          ;; ... 继续处理B分量</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 存储结果</span></span>
<span class="line"><span>      (v128.store (local.get $pixels) (local.get $vector))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 更新指针和计数器</span></span>
<span class="line"><span>      (local.set $pixels (i32.add (local.get $pixels) (i32.const 16)))</span></span>
<span class="line"><span>      (local.set $i (i32.add (local.get $i) (i32.const 4)))</span></span>
<span class="line"><span>      (br_if $process (i32.lt_u (local.get $i) (local.get $count)))</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="矩阵乘法加速" tabindex="-1">矩阵乘法加速 <a class="header-anchor" href="#矩阵乘法加速" aria-label="Permalink to &quot;矩阵乘法加速&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; SIMD 加速的矩阵乘法</span></span>
<span class="line"><span>(func $matrix_multiply_simd</span></span>
<span class="line"><span>  (param $a i32) (param $b i32) (param $result i32)</span></span>
<span class="line"><span>  (param $rows i32) (param $cols i32) (param $inner i32)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (local $i i32) (local $j i32) (local $k i32)</span></span>
<span class="line"><span>  (local $sum v128) (local $a_vec v128) (local $b_vec v128)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ;; 外层循环遍历行</span></span>
<span class="line"><span>  (loop $rows_loop</span></span>
<span class="line"><span>    ;; 内层循环遍历列  </span></span>
<span class="line"><span>    (loop $cols_loop</span></span>
<span class="line"><span>      (local.set $sum (f32x4.splat (f32.const 0.0)))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 向量化内积计算</span></span>
<span class="line"><span>      (loop $inner_loop</span></span>
<span class="line"><span>        ;; 加载A的4个元素和B的4个元素</span></span>
<span class="line"><span>        (local.set $a_vec (v128.load (local.get $a)))</span></span>
<span class="line"><span>        (local.set $b_vec (v128.load (local.get $b)))</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        ;; 乘积累加</span></span>
<span class="line"><span>        (local.set $sum</span></span>
<span class="line"><span>          (f32x4.add</span></span>
<span class="line"><span>            (local.get $sum)</span></span>
<span class="line"><span>            (f32x4.mul (local.get $a_vec) (local.get $b_vec))</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        ;; 更新指针</span></span>
<span class="line"><span>        (local.set $a (i32.add (local.get $a) (i32.const 16)))</span></span>
<span class="line"><span>        (local.set $b (i32.add (local.get $b) (i32.const 16)))</span></span>
<span class="line"><span>        (local.set $k (i32.add (local.get $k) (i32.const 4)))</span></span>
<span class="line"><span>        (br_if $inner_loop (i32.lt_u (local.get $k) (local.get $inner)))</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 水平求和并存储结果</span></span>
<span class="line"><span>      (f32.store</span></span>
<span class="line"><span>        (local.get $result)</span></span>
<span class="line"><span>        (f32x4.extract_lane (local.get $sum) 0)</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      ;; ... 更新循环变量</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="异常处理机制" tabindex="-1">异常处理机制 <a class="header-anchor" href="#异常处理机制" aria-label="Permalink to &quot;异常处理机制&quot;">​</a></h2><h3 id="异常处理提案" tabindex="-1">异常处理提案 <a class="header-anchor" href="#异常处理提案" aria-label="Permalink to &quot;异常处理提案&quot;">​</a></h3><p>WASM 异常处理提供了结构化的错误处理机制，类似于传统语言的 try-catch 模式。</p><p><strong>异常处理流程：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>try</span></span>
<span class="line"><span>  → 可能抛出异常的操作</span></span>
<span class="line"><span>catch → 异常处理逻辑</span></span>
<span class="line"><span>catch_all → 兜底处理</span></span>
<span class="line"><span>delegate → 异常重新抛出</span></span></code></pre></div><h3 id="异常指令集" tabindex="-1">异常指令集 <a class="header-anchor" href="#异常指令集" aria-label="Permalink to &quot;异常指令集&quot;">​</a></h3><p><strong>核心异常指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>try - 开始异常处理块</span></span>
<span class="line"><span>catch - 捕获特定类型异常  </span></span>
<span class="line"><span>catch_all - 捕获所有异常</span></span>
<span class="line"><span>throw - 抛出异常</span></span>
<span class="line"><span>rethrow - 重新抛出异常</span></span>
<span class="line"><span>delegate - 委托异常处理</span></span></code></pre></div><h4 id="异常类型定义" tabindex="-1">异常类型定义 <a class="header-anchor" href="#异常类型定义" aria-label="Permalink to &quot;异常类型定义&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 定义异常类型</span></span>
<span class="line"><span>(exception $math_error (param i32))     ;; 数学错误，带错误码</span></span>
<span class="line"><span>(exception $io_error (param i32 i32))   ;; IO错误，带错误码和详情</span></span>
<span class="line"><span>(exception $generic_error)              ;; 通用错误，无参数</span></span></code></pre></div><h3 id="异常处理实战" tabindex="-1">异常处理实战 <a class="header-anchor" href="#异常处理实战" aria-label="Permalink to &quot;异常处理实战&quot;">​</a></h3><h4 id="基础异常处理模式" tabindex="-1">基础异常处理模式 <a class="header-anchor" href="#基础异常处理模式" aria-label="Permalink to &quot;基础异常处理模式&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 基本的 try-catch 模式</span></span>
<span class="line"><span>(func $safe_divide (param $a i32) (param $b i32) (result i32)</span></span>
<span class="line"><span>  (try $try_block (result i32)</span></span>
<span class="line"><span>    (do</span></span>
<span class="line"><span>      ;; 检查除数是否为零</span></span>
<span class="line"><span>      (if (i32.eqz (local.get $b))</span></span>
<span class="line"><span>        (then</span></span>
<span class="line"><span>          ;; 抛出除零异常</span></span>
<span class="line"><span>          (throw $math_error (i32.const 0))</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      ;; 正常除法运算</span></span>
<span class="line"><span>      (i32.div_s (local.get $a) (local.get $b))</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    (catch $math_error</span></span>
<span class="line"><span>      ;; 处理数学错误</span></span>
<span class="line"><span>      (i32.const -1)  ;; 返回错误值</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    (catch_all</span></span>
<span class="line"><span>      ;; 处理其他所有异常</span></span>
<span class="line"><span>      (i32.const -2)  ;; 返回通用错误值</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="复杂的异常传播" tabindex="-1">复杂的异常传播 <a class="header-anchor" href="#复杂的异常传播" aria-label="Permalink to &quot;复杂的异常传播&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 多级异常处理和重新抛出</span></span>
<span class="line"><span>(func $process_data (param $data_ptr i32) (result i32)</span></span>
<span class="line"><span>  (try $outer (result i32)</span></span>
<span class="line"><span>    (do</span></span>
<span class="line"><span>      (try $inner (result i32)</span></span>
<span class="line"><span>        (do</span></span>
<span class="line"><span>          ;; 数据验证</span></span>
<span class="line"><span>          (call $validate_data (local.get $data_ptr))</span></span>
<span class="line"><span>          ;; 数据处理</span></span>
<span class="line"><span>          (call $transform_data (local.get $data_ptr))</span></span>
<span class="line"><span>          (i32.const 0)  ;; 成功</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        (catch $validation_error</span></span>
<span class="line"><span>          ;; 记录验证错误</span></span>
<span class="line"><span>          (call $log_error (i32.const 1001))</span></span>
<span class="line"><span>          (rethrow $outer)  ;; 重新抛到外层</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        (catch $processing_error</span></span>
<span class="line"><span>          ;; 处理特定的处理错误</span></span>
<span class="line"><span>          (call $recover_processing (local.get $data_ptr))</span></span>
<span class="line"><span>          (i32.const 1)  ;; 部分成功</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    (catch_all</span></span>
<span class="line"><span>      ;; 外层捕获所有未处理异常</span></span>
<span class="line"><span>      (call $log_fatal_error)</span></span>
<span class="line"><span>      (i32.const -1)  ;; 完全失败</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="异常与性能" tabindex="-1">异常与性能 <a class="header-anchor" href="#异常与性能" aria-label="Permalink to &quot;异常与性能&quot;">​</a></h3><p>异常处理机制经过精心设计，确保在无异常抛出时几乎零开销。</p><p><strong>异常性能特征：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>正常执行路径: 无额外开销</span></span>
<span class="line"><span>异常抛出时: 栈展开成本，但远优于通过返回码传播错误</span></span></code></pre></div><h2 id="集成应用模式" tabindex="-1">集成应用模式 <a class="header-anchor" href="#集成应用模式" aria-label="Permalink to &quot;集成应用模式&quot;">​</a></h2><h3 id="线程-simd-高性能计算" tabindex="-1">线程 + SIMD 高性能计算 <a class="header-anchor" href="#线程-simd-高性能计算" aria-label="Permalink to &quot;线程 + SIMD 高性能计算&quot;">​</a></h3><p>结合线程和 SIMD 可以实现极致的并行计算性能。</p><p><strong>并行向量处理架构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>主线程: 数据分片 → 工作线程池</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>工作线程: SIMD 向量处理 → 部分结果</span></span>
<span class="line"><span>    ↓  </span></span>
<span class="line"><span>主线程: 结果聚合 ← 原子操作同步</span></span></code></pre></div><h4 id="并行归约示例" tabindex="-1">并行归约示例 <a class="header-anchor" href="#并行归约示例" aria-label="Permalink to &quot;并行归约示例&quot;">​</a></h4><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 多线程 SIMD 归约求和</span></span>
<span class="line"><span>(module</span></span>
<span class="line"><span>  (memory 1 1 shared)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (func $parallel_sum (param $data_ptr i32) (param $length i32) (result f64)</span></span>
<span class="line"><span>    (local $thread_count i32)</span></span>
<span class="line"><span>    (local $chunk_size i32)</span></span>
<span class="line"><span>    (local $partial_results i32)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 计算分片大小</span></span>
<span class="line"><span>    (local.set $thread_count (i32.atomic.load (i32.const 0)))</span></span>
<span class="line"><span>    (local.set $chunk_size </span></span>
<span class="line"><span>      (i32.div_u (local.get $length) (local.get $thread_count)))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 等待所有线程完成初始化</span></span>
<span class="line"><span>    (atomic.wait (i32.const 4) (i32.const 0) (i64.const -1))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 使用 SIMD 处理本地数据分片</span></span>
<span class="line"><span>    (local.set $local_sum (call $simd_sum </span></span>
<span class="line"><span>      (local.get $data_ptr) </span></span>
<span class="line"><span>      (local.get $chunk_size)))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ;; 原子累加到全局结果</span></span>
<span class="line"><span>    (loop $accumulate</span></span>
<span class="line"><span>      (local.set $current (f64.atomic.load (i32.const 8)))</span></span>
<span class="line"><span>      (if (f64.atomic.rmw.cmpxchg</span></span>
<span class="line"><span>            (i32.const 8)</span></span>
<span class="line"><span>            (local.get $current)</span></span>
<span class="line"><span>            (f64.add (local.get $current) (local.get $local_sum)))</span></span>
<span class="line"><span>        (then</span></span>
<span class="line"><span>          ;; 成功累加，通知主线程</span></span>
<span class="line"><span>          (i32.atomic.rmw.add (i32.const 4) (i32.const 1))</span></span>
<span class="line"><span>          (atomic.notify (i32.const 4) (i32.const 1))</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        (else</span></span>
<span class="line"><span>          (br $accumulate)  ;; 重试</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    (local.get $local_sum)</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  (func $simd_sum (param $ptr i32) (param $len i32) (result f64)</span></span>
<span class="line"><span>    ;; SIMD 向量求和实现</span></span>
<span class="line"><span>    ;; ... 使用 f64x2 向量操作</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="异常安全的并发编程" tabindex="-1">异常安全的并发编程 <a class="header-anchor" href="#异常安全的并发编程" aria-label="Permalink to &quot;异常安全的并发编程&quot;">​</a></h3><p>在多线程环境中，异常处理需要特别考虑资源清理和状态一致性。</p><p><strong>线程安全异常处理模式：</strong></p><div class="language-wat"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>;; 带资源清理的异常安全操作</span></span>
<span class="line"><span>(func $thread_safe_operation (param $resource_ptr i32)</span></span>
<span class="line"><span>  (try $cleanup_scope</span></span>
<span class="line"><span>    (do</span></span>
<span class="line"><span>      ;; 获取锁</span></span>
<span class="line"><span>      (call $acquire_lock (local.get $resource_ptr))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      ;; 受保护的操作，可能抛出异常</span></span>
<span class="line"><span>      (call $critical_section (local.get $resource_ptr))</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    (catch_all</span></span>
<span class="line"><span>      ;; 异常时确保释放锁</span></span>
<span class="line"><span>      (call $release_lock (local.get $resource_ptr))</span></span>
<span class="line"><span>      (rethrow)  ;; 继续传播异常</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="工具链支持" tabindex="-1">工具链支持 <a class="header-anchor" href="#工具链支持" aria-label="Permalink to &quot;工具链支持&quot;">​</a></h2><h3 id="编译时启用" tabindex="-1">编译时启用 <a class="header-anchor" href="#编译时启用" aria-label="Permalink to &quot;编译时启用&quot;">​</a></h3><p>现代 WASM 工具链支持按需启用这些高级特性。</p><p><strong>Rust 配置示例：</strong></p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># Cargo.toml</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">package</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">metadata</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">wasm-pack</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">profile</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">release</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">wasm-opt = [</span><span style="color:#9ECBFF;">&quot;-O3&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;--enable-threads&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;--enable-simd&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;--enable-exceptions&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre></div><p><strong>编译标志：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启用所有高级特性</span></span>
<span class="line"><span style="color:#B392F0;">wasm-pack</span><span style="color:#9ECBFF;"> build</span><span style="color:#79B8FF;"> --target</span><span style="color:#9ECBFF;"> web</span><span style="color:#79B8FF;"> --release</span><span style="color:#79B8FF;"> \\</span></span>
<span class="line"><span style="color:#79B8FF;">  --</span><span style="color:#79B8FF;"> -C</span><span style="color:#9ECBFF;"> target-feature=+atomics,+bulk-memory,+simd,+exception-handling</span></span></code></pre></div><h3 id="运行时检测" tabindex="-1">运行时检测 <a class="header-anchor" href="#运行时检测" aria-label="Permalink to &quot;运行时检测&quot;">​</a></h3><p>应用程序可以动态检测运行时对高级特性的支持。</p><p><strong>特性检测示例：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 检测运行时支持</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> checkFeatures</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> features</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    threads: WebAssembly.Memory </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> WebAssembly.Memory.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.grow,</span></span>
<span class="line"><span style="color:#E1E4E8;">    simd: WebAssembly.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">97</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">115</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">109</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">96</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">253</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">253</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">98</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">])),</span></span>
<span class="line"><span style="color:#E1E4E8;">    exceptions: </span><span style="color:#79B8FF;">false</span><span style="color:#6A737D;"> // 需要更复杂的检测逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> features;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>通过线程、SIMD 和异常处理这些高级特性，WebAssembly 能够满足现代高性能应用的复杂需求，在保持安全性的同时提供接近原生的性能表现。</p>`,90)])])}const y=a(e,[["render",c]]);export{h as __pageData,y as default};
