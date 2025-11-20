import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Linux","description":"","frontmatter":{},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"体系架构","slug":"体系架构","link":"#体系架构","children":[{"level":3,"title":"整体架构","slug":"整体架构","link":"#整体架构","children":[]},{"level":3,"title":"内核空间与用户空间","slug":"内核空间与用户空间","link":"#内核空间与用户空间","children":[]}]},{"level":2,"title":"核心组件","slug":"核心组件","link":"#核心组件","children":[{"level":3,"title":"进程管理","slug":"进程管理","link":"#进程管理","children":[]},{"level":3,"title":"内存管理","slug":"内存管理","link":"#内存管理","children":[]},{"level":3,"title":"文件系统","slug":"文件系统","link":"#文件系统","children":[]}]},{"level":2,"title":"系统调用","slug":"系统调用","link":"#系统调用","children":[{"level":3,"title":"文件操作系统调用","slug":"文件操作系统调用","link":"#文件操作系统调用","children":[]},{"level":3,"title":"进程控制系统调用","slug":"进程控制系统调用","link":"#进程控制系统调用","children":[]},{"level":3,"title":"网络系统调用","slug":"网络系统调用","link":"#网络系统调用","children":[]}]},{"level":2,"title":"Shell 编程","slug":"shell-编程","link":"#shell-编程","children":[{"level":3,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[]},{"level":3,"title":"高级脚本技巧","slug":"高级脚本技巧","link":"#高级脚本技巧","children":[]}]},{"level":2,"title":"系统管理","slug":"系统管理","link":"#系统管理","children":[{"level":3,"title":"用户和权限管理","slug":"用户和权限管理","link":"#用户和权限管理","children":[]},{"level":3,"title":"软件包管理","slug":"软件包管理","link":"#软件包管理","children":[]}]},{"level":2,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[{"level":3,"title":"网络接口管理","slug":"网络接口管理","link":"#网络接口管理","children":[]},{"level":3,"title":"防火墙配置","slug":"防火墙配置","link":"#防火墙配置","children":[]}]},{"level":2,"title":"性能监控","slug":"性能监控","link":"#性能监控","children":[{"level":3,"title":"系统资源监控","slug":"系统资源监控","link":"#系统资源监控","children":[]},{"level":3,"title":"进程和性能分析","slug":"进程和性能分析","link":"#进程和性能分析","children":[]}]},{"level":2,"title":"内核模块","slug":"内核模块","link":"#内核模块","children":[{"level":3,"title":"模块开发基础","slug":"模块开发基础","link":"#模块开发基础","children":[]},{"level":3,"title":"字符设备驱动","slug":"字符设备驱动","link":"#字符设备驱动","children":[]}]},{"level":2,"title":"容器技术","slug":"容器技术","link":"#容器技术","children":[{"level":3,"title":"Docker 基础","slug":"docker-基础","link":"#docker-基础","children":[]},{"level":3,"title":"系统调用封装","slug":"系统调用封装","link":"#系统调用封装","children":[]}]},{"level":2,"title":"安全机制","slug":"安全机制","link":"#安全机制","children":[{"level":3,"title":"SELinux 配置","slug":"selinux-配置","link":"#selinux-配置","children":[]},{"level":3,"title":"能力管理","slug":"能力管理","link":"#能力管理","children":[]}]},{"level":2,"title":"调试与诊断","slug":"调试与诊断","link":"#调试与诊断","children":[{"level":3,"title":"核心转储分析","slug":"核心转储分析","link":"#核心转储分析","children":[]},{"level":3,"title":"系统日志分析","slug":"系统日志分析","link":"#系统日志分析","children":[]}]}],"relativePath":"full-stack/operation/linux.md","filePath":"full-stack/operation/linux.md"}'),o={name:"full-stack/operation/linux.md"};function e(c,s,t,r,i,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /full-stack/operation/linux.md for this page in Markdown format</div><h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h1><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>Linux 是一个开源的类 Unix 操作系统内核，由林纳斯·托瓦兹在 1991 年首次发布。作为现代计算基础设施的基石，Linux 以其稳定性、安全性和灵活性著称，广泛应用于服务器、嵌入式设备、超级计算机和个人电脑等领域。</p><h2 id="体系架构" tabindex="-1">体系架构 <a class="header-anchor" href="#体系架构" aria-label="Permalink to &quot;体系架构&quot;">​</a></h2><h3 id="整体架构" tabindex="-1">整体架构 <a class="header-anchor" href="#整体架构" aria-label="Permalink to &quot;整体架构&quot;">​</a></h3><p>Linux 采用分层架构，各组件之间通过清晰的接口进行通信：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>应用程序</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>系统调用接口</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>Linux 内核</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>硬件抽象层</span></span>
<span class="line"><span>    |</span></span>
<span class="line"><span>物理硬件</span></span></code></pre></div><h3 id="内核空间与用户空间" tabindex="-1">内核空间与用户空间 <a class="header-anchor" href="#内核空间与用户空间" aria-label="Permalink to &quot;内核空间与用户空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>用户空间</span></span>
<span class="line"><span>├── 应用程序 (进程)</span></span>
<span class="line"><span>├── 系统库 (glibc)</span></span>
<span class="line"><span>└── 运行环境</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统调用边界</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>内核空间</span></span>
<span class="line"><span>├── 系统调用接口</span></span>
<span class="line"><span>├── 进程管理</span></span>
<span class="line"><span>├── 内存管理</span></span>
<span class="line"><span>├── 文件系统</span></span>
<span class="line"><span>├── 设备驱动</span></span>
<span class="line"><span>└── 网络栈</span></span></code></pre></div><h2 id="核心组件" tabindex="-1">核心组件 <a class="header-anchor" href="#核心组件" aria-label="Permalink to &quot;核心组件&quot;">​</a></h2><h3 id="进程管理" tabindex="-1">进程管理 <a class="header-anchor" href="#进程管理" aria-label="Permalink to &quot;进程管理&quot;">​</a></h3><p>Linux 使用进程和线程作为执行单元，通过调度器管理 CPU 时间分配。</p><p><strong>进程状态转换：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>新建 → 就绪 ↔ 运行 → 终止</span></span>
<span class="line"><span>            ↑</span></span>
<span class="line"><span>            └── 等待/阻塞</span></span></code></pre></div><p><strong>进程相关命令示例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看进程树</span></span>
<span class="line"><span style="color:#B392F0;">pstree</span><span style="color:#79B8FF;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 实时进程监控</span></span>
<span class="line"><span style="color:#B392F0;">top</span></span>
<span class="line"><span style="color:#B392F0;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进程信号发送</span></span>
<span class="line"><span style="color:#79B8FF;">kill</span><span style="color:#79B8FF;"> -TERM</span><span style="color:#79B8FF;"> 1234</span></span>
<span class="line"><span style="color:#79B8FF;">kill</span><span style="color:#79B8FF;"> -KILL</span><span style="color:#79B8FF;"> 5678</span></span></code></pre></div><h3 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h3><p>Linux 使用虚拟内存管理，为每个进程提供独立的地址空间。</p><p><strong>虚拟内存布局：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>0xFFFFFFFF</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│   内核空间   │</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   栈空间     │ ← 向下增长</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   共享库     │</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   堆空间     │ ← 向上增长</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   BSS段     │</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   数据段     │</span></span>
<span class="line"><span>├─────────────┤</span></span>
<span class="line"><span>│   代码段     │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>0x00000000</span></span></code></pre></div><h3 id="文件系统" tabindex="-1">文件系统 <a class="header-anchor" href="#文件系统" aria-label="Permalink to &quot;文件系统&quot;">​</a></h3><p>Linux 采用统一的文件系统模型，“一切皆文件”是其核心哲学。</p><p><strong>文件系统层次结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>/</span></span>
<span class="line"><span>├── bin    (基本命令)</span></span>
<span class="line"><span>├── etc    (系统配置)</span></span>
<span class="line"><span>├── home   (用户目录)</span></span>
<span class="line"><span>├── proc   (进程信息)</span></span>
<span class="line"><span>├── sys    (内核参数)</span></span>
<span class="line"><span>├── tmp    (临时文件)</span></span>
<span class="line"><span>├── usr    (用户程序)</span></span>
<span class="line"><span>└── var    (可变数据)</span></span></code></pre></div><h2 id="系统调用" tabindex="-1">系统调用 <a class="header-anchor" href="#系统调用" aria-label="Permalink to &quot;系统调用&quot;">​</a></h2><h3 id="文件操作系统调用" tabindex="-1">文件操作系统调用 <a class="header-anchor" href="#文件操作系统调用" aria-label="Permalink to &quot;文件操作系统调用&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;fcntl.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/stat.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 文件描述符操作</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> open</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">pathname</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> flags</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">mode_t</span><span style="color:#FFAB70;"> mode</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">ssize_t</span><span style="color:#B392F0;"> read</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> fd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">void</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">buf</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">size_t</span><span style="color:#FFAB70;"> count</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">ssize_t</span><span style="color:#B392F0;"> write</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> fd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#F97583;"> void</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">buf</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">size_t</span><span style="color:#FFAB70;"> count</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> close</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> fd</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例：文件复制</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> copy_file</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">dst</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> src_fd </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> open</span><span style="color:#E1E4E8;">(src, O_RDONLY);</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> dst_fd </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> open</span><span style="color:#E1E4E8;">(dst, O_WRONLY </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> O_CREAT </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> O_TRUNC, </span><span style="color:#F97583;">0</span><span style="color:#79B8FF;">644</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    char</span><span style="color:#FFAB70;"> buffer</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">4096</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    ssize_t</span><span style="color:#E1E4E8;"> bytes_read;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    while</span><span style="color:#E1E4E8;"> ((bytes_read </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> read</span><span style="color:#E1E4E8;">(src_fd, buffer, </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(buffer))) </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        write</span><span style="color:#E1E4E8;">(dst_fd, buffer, bytes_read);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    close</span><span style="color:#E1E4E8;">(src_fd);</span></span>
<span class="line"><span style="color:#B392F0;">    close</span><span style="color:#E1E4E8;">(dst_fd);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="进程控制系统调用" tabindex="-1">进程控制系统调用 <a class="header-anchor" href="#进程控制系统调用" aria-label="Permalink to &quot;进程控制系统调用&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/wait.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;signal.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 进程创建和执行</span></span>
<span class="line"><span style="color:#F97583;">pid_t</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> execve</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#F97583;"> char</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">pathname</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char</span><span style="color:#F97583;"> *const</span><span style="color:#FFAB70;"> argv</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char</span><span style="color:#F97583;"> *const</span><span style="color:#FFAB70;"> envp</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">pid_t</span><span style="color:#B392F0;"> waitpid</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">pid_t</span><span style="color:#FFAB70;"> pid</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">wstatus</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> options</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 信号处理</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> kill</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">pid_t</span><span style="color:#FFAB70;"> pid</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sig</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">sighandler_t</span><span style="color:#B392F0;"> signal</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sig</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sighandler_t</span><span style="color:#FFAB70;"> handler</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例：创建子进程</span></span>
<span class="line"><span style="color:#F97583;">pid_t</span><span style="color:#E1E4E8;"> child_pid </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> fork</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (child_pid </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 子进程</span></span>
<span class="line"><span style="color:#B392F0;">    execl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/bin/ls&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-l&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">    exit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  // 如果exec失败</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (child_pid </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 父进程</span></span>
<span class="line"><span style="color:#B392F0;">    waitpid</span><span style="color:#E1E4E8;">(child_pid, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="网络系统调用" tabindex="-1">网络系统调用 <a class="header-anchor" href="#网络系统调用" aria-label="Permalink to &quot;网络系统调用&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/socket.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;netinet/in.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;arpa/inet.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 网络通信</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> socket</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> domain</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> type</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> protocol</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> bind</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sockfd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#F97583;"> struct</span><span style="color:#E1E4E8;"> sockaddr </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">addr</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">socklen_t</span><span style="color:#FFAB70;"> addrlen</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> listen</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sockfd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> backlog</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> accept</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sockfd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> sockaddr </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">addr</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">socklen_t</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">addrlen</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">ssize_t</span><span style="color:#B392F0;"> send</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sockfd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#F97583;"> void</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">buf</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">size_t</span><span style="color:#FFAB70;"> len</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> flags</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">ssize_t</span><span style="color:#B392F0;"> recv</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> sockfd</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">void</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">buf</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">size_t</span><span style="color:#FFAB70;"> len</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> flags</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 示例：TCP服务器</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> create_tcp_server</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> port</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> sockfd </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> socket</span><span style="color:#E1E4E8;">(AF_INET, SOCK_STREAM, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    struct</span><span style="color:#E1E4E8;"> sockaddr_in addr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        .sin_family </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AF_INET,</span></span>
<span class="line"><span style="color:#E1E4E8;">        .sin_port </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> htons</span><span style="color:#E1E4E8;">(port),</span></span>
<span class="line"><span style="color:#E1E4E8;">        .sin_addr.s_addr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INADDR_ANY</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    bind</span><span style="color:#E1E4E8;">(sockfd, (</span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> sockaddr</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">addr, </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(addr));</span></span>
<span class="line"><span style="color:#B392F0;">    listen</span><span style="color:#E1E4E8;">(sockfd, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> sockfd;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="shell-编程" tabindex="-1">Shell 编程 <a class="header-anchor" href="#shell-编程" aria-label="Permalink to &quot;Shell 编程&quot;">​</a></h2><h3 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-label="Permalink to &quot;基础语法&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 变量定义和使用</span></span>
<span class="line"><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Linux&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;Hello, </span><span style="color:#E1E4E8;">$name</span><span style="color:#9ECBFF;">!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 条件判断</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-f</span><span style="color:#9ECBFF;"> &quot;/etc/passwd&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;文件存在&quot;</span></span>
<span class="line"><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-d</span><span style="color:#9ECBFF;"> &quot;/etc&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;目录存在&quot;</span></span>
<span class="line"><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;都不存在&quot;</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 循环处理</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">in</span><span style="color:#9ECBFF;"> *.txt</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">do</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;处理文件: </span><span style="color:#E1E4E8;">$file</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#F97583;">done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 函数定义</span></span>
<span class="line"><span style="color:#B392F0;">create_backup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    local</span><span style="color:#E1E4E8;"> src</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">$1</span></span>
<span class="line"><span style="color:#F97583;">    local</span><span style="color:#E1E4E8;"> dst</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">src</span><span style="color:#9ECBFF;">}.bak&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    cp</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$src</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$dst</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;备份创建: </span><span style="color:#E1E4E8;">$dst</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="高级脚本技巧" tabindex="-1">高级脚本技巧 <a class="header-anchor" href="#高级脚本技巧" aria-label="Permalink to &quot;高级脚本技巧&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 错误处理</span></span>
<span class="line"><span style="color:#79B8FF;">set</span><span style="color:#79B8FF;"> -euo</span><span style="color:#9ECBFF;"> pipefail</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 日志函数</span></span>
<span class="line"><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;[$(</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> &#39;+%Y-%m-%d %H:%M:%S&#39;)] </span><span style="color:#79B8FF;">$*</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#F97583;"> &gt;&gt;</span><span style="color:#9ECBFF;"> /var/log/myscript.log</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 信号处理</span></span>
<span class="line"><span style="color:#B392F0;">cleanup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">    log</span><span style="color:#9ECBFF;"> &quot;收到中断信号，正在清理...&quot;</span></span>
<span class="line"><span style="color:#B392F0;">    rm</span><span style="color:#79B8FF;"> -f</span><span style="color:#9ECBFF;"> /tmp/tempfile.</span><span style="color:#79B8FF;">*</span></span>
<span class="line"><span style="color:#79B8FF;">    exit</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">trap</span><span style="color:#9ECBFF;"> cleanup</span><span style="color:#9ECBFF;"> SIGINT</span><span style="color:#9ECBFF;"> SIGTERM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进程锁</span></span>
<span class="line"><span style="color:#E1E4E8;">LOCKFILE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/var/run/myscript.lock&quot;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-e</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$LOCKFILE</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#79B8FF;">    echo</span><span style="color:#9ECBFF;"> &quot;脚本已在运行&quot;</span><span style="color:#F97583;"> &gt;&amp;2</span></span>
<span class="line"><span style="color:#79B8FF;">    exit</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#79B8FF;"> $$</span><span style="color:#F97583;"> &gt;</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$LOCKFILE</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保锁文件被删除</span></span>
<span class="line"><span style="color:#79B8FF;">trap</span><span style="color:#9ECBFF;"> &#39;rm -f &quot;$LOCKFILE&quot;&#39;</span><span style="color:#9ECBFF;"> EXIT</span></span></code></pre></div><h2 id="系统管理" tabindex="-1">系统管理 <a class="header-anchor" href="#系统管理" aria-label="Permalink to &quot;系统管理&quot;">​</a></h2><h3 id="用户和权限管理" tabindex="-1">用户和权限管理 <a class="header-anchor" href="#用户和权限管理" aria-label="Permalink to &quot;用户和权限管理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 用户管理</span></span>
<span class="line"><span style="color:#B392F0;">useradd</span><span style="color:#79B8FF;"> -m</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> /bin/bash</span><span style="color:#9ECBFF;"> newuser</span></span>
<span class="line"><span style="color:#B392F0;">usermod</span><span style="color:#79B8FF;"> -aG</span><span style="color:#9ECBFF;"> wheel</span><span style="color:#9ECBFF;"> newuser</span></span>
<span class="line"><span style="color:#B392F0;">userdel</span><span style="color:#79B8FF;"> -r</span><span style="color:#9ECBFF;"> olduser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 权限管理</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#79B8FF;"> 755</span><span style="color:#9ECBFF;"> script.sh</span></span>
<span class="line"><span style="color:#B392F0;">chown</span><span style="color:#9ECBFF;"> user:group</span><span style="color:#9ECBFF;"> file.txt</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#9ECBFF;"> u+s</span><span style="color:#9ECBFF;"> executable</span><span style="color:#6A737D;">  # 设置SUID位</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ACL高级权限</span></span>
<span class="line"><span style="color:#B392F0;">setfacl</span><span style="color:#79B8FF;"> -m</span><span style="color:#9ECBFF;"> u:username:rwx</span><span style="color:#9ECBFF;"> /path/to/dir</span></span>
<span class="line"><span style="color:#B392F0;">getfacl</span><span style="color:#9ECBFF;"> /path/to/dir</span></span></code></pre></div><h3 id="软件包管理" tabindex="-1">软件包管理 <a class="header-anchor" href="#软件包管理" aria-label="Permalink to &quot;软件包管理&quot;">​</a></h3><p><strong>APT (Debian/Ubuntu):</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 更新软件源</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装软件</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索软件包</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#9ECBFF;"> search</span><span style="color:#9ECBFF;"> python3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载软件</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#9ECBFF;"> remove</span><span style="color:#9ECBFF;"> package-name</span></span>
<span class="line"><span style="color:#B392F0;">apt</span><span style="color:#9ECBFF;"> autoremove</span></span></code></pre></div><p><strong>YUM (RHEL/CentOS):</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 安装软件</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> httpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 更新系统</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 管理服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#9ECBFF;"> start</span><span style="color:#9ECBFF;"> httpd</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#9ECBFF;"> enable</span><span style="color:#9ECBFF;"> httpd</span></span></code></pre></div><h2 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-label="Permalink to &quot;网络配置&quot;">​</a></h2><h3 id="网络接口管理" tabindex="-1">网络接口管理 <a class="header-anchor" href="#网络接口管理" aria-label="Permalink to &quot;网络接口管理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看网络接口</span></span>
<span class="line"><span style="color:#B392F0;">ip</span><span style="color:#9ECBFF;"> addr</span><span style="color:#9ECBFF;"> show</span></span>
<span class="line"><span style="color:#B392F0;">ip</span><span style="color:#9ECBFF;"> link</span><span style="color:#9ECBFF;"> show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置IP地址</span></span>
<span class="line"><span style="color:#B392F0;">ip</span><span style="color:#9ECBFF;"> addr</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> 192.168.1.100/24</span><span style="color:#9ECBFF;"> dev</span><span style="color:#9ECBFF;"> eth0</span></span>
<span class="line"><span style="color:#B392F0;">ip</span><span style="color:#9ECBFF;"> route</span><span style="color:#9ECBFF;"> add</span><span style="color:#9ECBFF;"> default</span><span style="color:#9ECBFF;"> via</span><span style="color:#79B8FF;"> 192.168.1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 网络诊断</span></span>
<span class="line"><span style="color:#B392F0;">ping</span><span style="color:#79B8FF;"> -c</span><span style="color:#79B8FF;"> 4</span><span style="color:#9ECBFF;"> google.com</span></span>
<span class="line"><span style="color:#B392F0;">traceroute</span><span style="color:#9ECBFF;"> google.com</span></span>
<span class="line"><span style="color:#B392F0;">netstat</span><span style="color:#79B8FF;"> -tuln</span></span>
<span class="line"><span style="color:#B392F0;">ss</span><span style="color:#79B8FF;"> -tuln</span></span></code></pre></div><h3 id="防火墙配置" tabindex="-1">防火墙配置 <a class="header-anchor" href="#防火墙配置" aria-label="Permalink to &quot;防火墙配置&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># iptables 基础配置</span></span>
<span class="line"><span style="color:#B392F0;">iptables</span><span style="color:#79B8FF;"> -A</span><span style="color:#9ECBFF;"> INPUT</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> tcp</span><span style="color:#79B8FF;"> --dport</span><span style="color:#79B8FF;"> 22</span><span style="color:#79B8FF;"> -j</span><span style="color:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="color:#B392F0;">iptables</span><span style="color:#79B8FF;"> -A</span><span style="color:#9ECBFF;"> INPUT</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> tcp</span><span style="color:#79B8FF;"> --dport</span><span style="color:#79B8FF;"> 80</span><span style="color:#79B8FF;"> -j</span><span style="color:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="color:#B392F0;">iptables</span><span style="color:#79B8FF;"> -A</span><span style="color:#9ECBFF;"> INPUT</span><span style="color:#79B8FF;"> -m</span><span style="color:#9ECBFF;"> state</span><span style="color:#79B8FF;"> --state</span><span style="color:#9ECBFF;"> ESTABLISHED,RELATED</span><span style="color:#79B8FF;"> -j</span><span style="color:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="color:#B392F0;">iptables</span><span style="color:#79B8FF;"> -P</span><span style="color:#9ECBFF;"> INPUT</span><span style="color:#9ECBFF;"> DROP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># firewalld (现代Linux)</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#79B8FF;"> --permanent</span><span style="color:#79B8FF;"> --add-service=http</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#79B8FF;"> --permanent</span><span style="color:#79B8FF;"> --add-service=https</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#79B8FF;"> --reload</span></span></code></pre></div><h2 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h2><h3 id="系统资源监控" tabindex="-1">系统资源监控 <a class="header-anchor" href="#系统资源监控" aria-label="Permalink to &quot;系统资源监控&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 实时系统监控</span></span>
<span class="line"><span style="color:#B392F0;">top</span></span>
<span class="line"><span style="color:#B392F0;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 内存使用情况</span></span>
<span class="line"><span style="color:#B392F0;">free</span><span style="color:#79B8FF;"> -h</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#9ECBFF;"> /proc/meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 磁盘使用情况</span></span>
<span class="line"><span style="color:#B392F0;">df</span><span style="color:#79B8FF;"> -h</span></span>
<span class="line"><span style="color:#B392F0;">du</span><span style="color:#79B8FF;"> -sh</span><span style="color:#9ECBFF;"> /path/to/dir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># I/O 监控</span></span>
<span class="line"><span style="color:#B392F0;">iostat</span><span style="color:#79B8FF;"> -x</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#B392F0;">iotop</span></span></code></pre></div><h3 id="进程和性能分析" tabindex="-1">进程和性能分析 <a class="header-anchor" href="#进程和性能分析" aria-label="Permalink to &quot;进程和性能分析&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 进程监控</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#9ECBFF;"> aux</span><span style="color:#79B8FF;"> --sort=-%cpu</span><span style="color:#F97583;"> |</span><span style="color:#B392F0;"> head</span><span style="color:#79B8FF;"> -10</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#9ECBFF;"> aux</span><span style="color:#79B8FF;"> --sort=-%mem</span><span style="color:#F97583;"> |</span><span style="color:#B392F0;"> head</span><span style="color:#79B8FF;"> -10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 系统负载</span></span>
<span class="line"><span style="color:#B392F0;">uptime</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#9ECBFF;"> /proc/loadavg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 性能分析工具</span></span>
<span class="line"><span style="color:#B392F0;">perf</span><span style="color:#9ECBFF;"> record</span><span style="color:#79B8FF;"> -g</span><span style="color:#9ECBFF;"> ./program</span></span>
<span class="line"><span style="color:#B392F0;">perf</span><span style="color:#9ECBFF;"> report</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 跟踪系统调用</span></span>
<span class="line"><span style="color:#B392F0;">strace</span><span style="color:#79B8FF;"> -f</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> trace.log</span><span style="color:#9ECBFF;"> ./program</span></span></code></pre></div><h2 id="内核模块" tabindex="-1">内核模块 <a class="header-anchor" href="#内核模块" aria-label="Permalink to &quot;内核模块&quot;">​</a></h2><h3 id="模块开发基础" tabindex="-1">模块开发基础 <a class="header-anchor" href="#模块开发基础" aria-label="Permalink to &quot;模块开发基础&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;linux/init.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;linux/module.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;linux/kernel.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">MODULE_LICENSE</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;GPL&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">MODULE_AUTHOR</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Your Name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">MODULE_DESCRIPTION</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;A simple Linux driver&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#F97583;"> int</span><span style="color:#E1E4E8;"> __init </span><span style="color:#B392F0;">hello_init</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    printk</span><span style="color:#E1E4E8;">(KERN_INFO </span><span style="color:#9ECBFF;">&quot;Hello, Linux Kernel!</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#F97583;"> void</span><span style="color:#E1E4E8;"> __exit </span><span style="color:#B392F0;">hello_exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    printk</span><span style="color:#E1E4E8;">(KERN_INFO </span><span style="color:#9ECBFF;">&quot;Goodbye, Linux Kernel!</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">module_init</span><span style="color:#E1E4E8;">(hello_init);</span></span>
<span class="line"><span style="color:#B392F0;">module_exit</span><span style="color:#E1E4E8;">(hello_exit);</span></span></code></pre></div><p><strong>Makefile:</strong></p><div class="language-makefile"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">obj-m += hello.o</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">KDIR := /lib/modules/</span><span style="color:#9ECBFF;">$(</span><span style="color:#79B8FF;">shell</span><span style="color:#9ECBFF;"> uname -r)</span><span style="color:#E1E4E8;">/build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">	make -C </span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">KDIR</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> M=</span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">PWD</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> modules</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">clean</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">	make -C </span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">KDIR</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> M=</span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">PWD</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> clean</span></span></code></pre></div><h3 id="字符设备驱动" tabindex="-1">字符设备驱动 <a class="header-anchor" href="#字符设备驱动" aria-label="Permalink to &quot;字符设备驱动&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;linux/fs.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;linux/cdev.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#F97583;"> int</span><span style="color:#B392F0;"> device_open</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> inode </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">inode</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    printk</span><span style="color:#E1E4E8;">(KERN_INFO </span><span style="color:#9ECBFF;">&quot;设备被打开</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#F97583;"> ssize_t</span><span style="color:#B392F0;"> device_read</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">filp</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> __user </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#F97583;">                          size_t</span><span style="color:#FFAB70;"> length</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">loff_t</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">offset</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#F97583;"> char</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;">message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;Hello from kernel!</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    size_t</span><span style="color:#E1E4E8;"> message_len </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> strlen</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">offset </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> message_len)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (length </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> message_len </span><span style="color:#F97583;">-</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;">offset)</span></span>
<span class="line"><span style="color:#E1E4E8;">        length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message_len </span><span style="color:#F97583;">-</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;">offset;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">copy_to_user</span><span style="color:#E1E4E8;">(buffer, message </span><span style="color:#F97583;">+</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;">offset, length))</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;">EFAULT;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">    *</span><span style="color:#E1E4E8;">offset </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> length;</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> length;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#F97583;"> struct</span><span style="color:#E1E4E8;"> file_operations fops </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    .open </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device_open,</span></span>
<span class="line"><span style="color:#E1E4E8;">    .read </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device_read,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div><h2 id="容器技术" tabindex="-1">容器技术 <a class="header-anchor" href="#容器技术" aria-label="Permalink to &quot;容器技术&quot;">​</a></h2><h3 id="docker-基础" tabindex="-1">Docker 基础 <a class="header-anchor" href="#docker-基础" aria-label="Permalink to &quot;Docker 基础&quot;">​</a></h3><div class="language-dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># Dockerfile 示例</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> ubuntu:20.04</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> apt-get update &amp;&amp; apt-get install -y \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    python3 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    python3-pip \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    &amp;&amp; rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . /app</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> pip3 install -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8000</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;python3&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;app.py&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre></div><p><strong>容器管理命令：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 构建镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> build</span><span style="color:#79B8FF;"> -t</span><span style="color:#9ECBFF;"> myapp</span><span style="color:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> run</span><span style="color:#79B8FF;"> -d</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> 8000:8000</span><span style="color:#79B8FF;"> --name</span><span style="color:#9ECBFF;"> myapp-container</span><span style="color:#9ECBFF;"> myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 容器管理</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> ps</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> logs</span><span style="color:#9ECBFF;"> myapp-container</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#9ECBFF;"> exec</span><span style="color:#79B8FF;"> -it</span><span style="color:#9ECBFF;"> myapp-container</span><span style="color:#9ECBFF;"> bash</span></span></code></pre></div><h3 id="系统调用封装" tabindex="-1">系统调用封装 <a class="header-anchor" href="#系统调用封装" aria-label="Permalink to &quot;系统调用封装&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 使用命名空间进行进程隔离</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#B392F0;"> _GNU_SOURCE</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sched.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/wait.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/mount.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> create_container</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    int</span><span style="color:#E1E4E8;"> container_pid </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> clone</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        container_main,</span></span>
<span class="line"><span style="color:#E1E4E8;">        container_stack </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> STACK_SIZE,</span></span>
<span class="line"><span style="color:#E1E4E8;">        CLONE_NEWPID </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> CLONE_NEWNS </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> CLONE_NEWNET </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> SIGCHLD,</span></span>
<span class="line"><span style="color:#79B8FF;">        NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> container_pid;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> container_main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#F97583;"> *</span><span style="color:#FFAB70;">arg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置主机名</span></span>
<span class="line"><span style="color:#B392F0;">    sethostname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 挂载proc文件系统</span></span>
<span class="line"><span style="color:#B392F0;">    mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;proc&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;/proc&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;proc&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 执行容器内的命令</span></span>
<span class="line"><span style="color:#B392F0;">    execl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/bin/bash&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;/bin/bash&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="安全机制" tabindex="-1">安全机制 <a class="header-anchor" href="#安全机制" aria-label="Permalink to &quot;安全机制&quot;">​</a></h2><h3 id="selinux-配置" tabindex="-1">SELinux 配置 <a class="header-anchor" href="#selinux-配置" aria-label="Permalink to &quot;SELinux 配置&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># SELinux 状态管理</span></span>
<span class="line"><span style="color:#B392F0;">getenforce</span></span>
<span class="line"><span style="color:#B392F0;">setenforce</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上下文管理</span></span>
<span class="line"><span style="color:#B392F0;">ls</span><span style="color:#79B8FF;"> -Z</span><span style="color:#9ECBFF;"> /var/www/html</span></span>
<span class="line"><span style="color:#B392F0;">chcon</span><span style="color:#79B8FF;"> -t</span><span style="color:#9ECBFF;"> httpd_sys_content_t</span><span style="color:#9ECBFF;"> /path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 策略管理</span></span>
<span class="line"><span style="color:#B392F0;">semanage</span><span style="color:#9ECBFF;"> fcontext</span><span style="color:#79B8FF;"> -a</span><span style="color:#79B8FF;"> -t</span><span style="color:#9ECBFF;"> httpd_sys_content_t</span><span style="color:#9ECBFF;"> &quot;/web(/.*)?&quot;</span></span>
<span class="line"><span style="color:#B392F0;">restorecon</span><span style="color:#79B8FF;"> -R</span><span style="color:#9ECBFF;"> /web</span></span></code></pre></div><h3 id="能力管理" tabindex="-1">能力管理 <a class="header-anchor" href="#能力管理" aria-label="Permalink to &quot;能力管理&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#9ECBFF;"> &lt;sys/capability.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 放弃不必要的权限</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#B392F0;"> drop_privileges</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    cap_t</span><span style="color:#E1E4E8;"> caps </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> cap_init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 只保留网络绑定能力</span></span>
<span class="line"><span style="color:#79B8FF;">    cap_value_t</span><span style="color:#E1E4E8;"> cap_list</span><span style="color:#F97583;">[]</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { CAP_NET_BIND_SERVICE };</span></span>
<span class="line"><span style="color:#B392F0;">    cap_set_flag</span><span style="color:#E1E4E8;">(caps, CAP_EFFECTIVE, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, cap_list, CAP_SET);</span></span>
<span class="line"><span style="color:#B392F0;">    cap_set_flag</span><span style="color:#E1E4E8;">(caps, CAP_PERMITTED, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, cap_list, CAP_SET);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">cap_set_proc</span><span style="color:#E1E4E8;">(caps) </span><span style="color:#F97583;">==</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#B392F0;">    cap_free</span><span style="color:#E1E4E8;">(caps);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="调试与诊断" tabindex="-1">调试与诊断 <a class="header-anchor" href="#调试与诊断" aria-label="Permalink to &quot;调试与诊断&quot;">​</a></h2><h3 id="核心转储分析" tabindex="-1">核心转储分析 <a class="header-anchor" href="#核心转储分析" aria-label="Permalink to &quot;核心转储分析&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 启用核心转储</span></span>
<span class="line"><span style="color:#79B8FF;">ulimit</span><span style="color:#79B8FF;"> -c</span><span style="color:#9ECBFF;"> unlimited</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;/tmp/core.%e.%p&quot;</span><span style="color:#F97583;"> &gt;</span><span style="color:#9ECBFF;"> /proc/sys/kernel/core_pattern</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 分析核心转储</span></span>
<span class="line"><span style="color:#B392F0;">gdb</span><span style="color:#9ECBFF;"> /path/to/program</span><span style="color:#9ECBFF;"> /tmp/core.program.1234</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在GDB中常用命令</span></span>
<span class="line"><span style="color:#B392F0;">bt</span><span style="color:#6A737D;">          # 查看调用栈</span></span>
<span class="line"><span style="color:#B392F0;">info</span><span style="color:#9ECBFF;"> locals</span><span style="color:#6A737D;"> # 查看局部变量</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#9ECBFF;"> var</span><span style="color:#6A737D;">   # 打印变量值</span></span></code></pre></div><h3 id="系统日志分析" tabindex="-1">系统日志分析 <a class="header-anchor" href="#系统日志分析" aria-label="Permalink to &quot;系统日志分析&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># 查看系统日志</span></span>
<span class="line"><span style="color:#B392F0;">journalctl</span><span style="color:#79B8FF;"> -f</span></span>
<span class="line"><span style="color:#B392F0;">tail</span><span style="color:#79B8FF;"> -f</span><span style="color:#9ECBFF;"> /var/log/syslog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 日志过滤</span></span>
<span class="line"><span style="color:#B392F0;">journalctl</span><span style="color:#79B8FF;"> --since</span><span style="color:#9ECBFF;"> &quot;2024-01-01&quot;</span><span style="color:#79B8FF;"> --until</span><span style="color:#9ECBFF;"> &quot;2024-01-02&quot;</span></span>
<span class="line"><span style="color:#B392F0;">journalctl</span><span style="color:#79B8FF;"> -u</span><span style="color:#9ECBFF;"> nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 自定义日志</span></span>
<span class="line"><span style="color:#B392F0;">logger</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> local0.info</span><span style="color:#9ECBFF;"> &quot;自定义日志消息&quot;</span></span></code></pre></div>`,79)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
