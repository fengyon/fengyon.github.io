import{_ as s,c as n,o as p,b as l}from"./chunks/framework.CMLuPXeo.js";const h=JSON.parse('{"title":"数据结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是数据结构","slug":"什么是数据结构","link":"#什么是数据结构","children":[]},{"level":2,"title":"数据结构分类","slug":"数据结构分类","link":"#数据结构分类","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"链表","slug":"链表","link":"#链表","children":[{"level":3,"title":"链表变种","slug":"链表变种","link":"#链表变种","children":[]}]},{"level":2,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":2,"title":"队列","slug":"队列","link":"#队列","children":[{"level":3,"title":"循环队列","slug":"循环队列","link":"#循环队列","children":[]}]},{"level":2,"title":"树","slug":"树","link":"#树","children":[{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"二叉搜索树","slug":"二叉搜索树","link":"#二叉搜索树","children":[]}]},{"level":2,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":2,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[{"level":3,"title":"冲突解决","slug":"冲突解决","link":"#冲突解决","children":[]}]},{"level":2,"title":"图","slug":"图","link":"#图","children":[{"level":3,"title":"图存储表示","slug":"图存储表示","link":"#图存储表示","children":[]}]}],"relativePath":"basic/algorithm/data-struct.md","filePath":"basic/algorithm/data-struct.md"}'),i={name:"basic/algorithm/data-struct.md"};function e(c,a,t,o,d,r){return p(),n("div",null,[...a[0]||(a[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /basic/algorithm/data-struct.md for this page in Markdown format</div><h1 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h1><h2 id="什么是数据结构" tabindex="-1">什么是数据结构 <a class="header-anchor" href="#什么是数据结构" aria-label="Permalink to &quot;什么是数据结构&quot;">​</a></h2><p>数据结构是计算机存储和组织数据的方式，旨在实现高效的数据访问和修改。选择合适的数据结构可以显著提升算法效率，是程序设计的基础。</p><p>特点：</p><ul><li>组织性：数据元素之间存在特定关系</li><li>操作性：支持插入、删除、查找等基本操作</li><li>效率性：不同结构在不同场景下性能差异显著</li></ul><p>示意图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>原始数据 → [数据结构] → 有序数据</span></span>
<span class="line"><span>         ↑</span></span>
<span class="line"><span>     操作接口(增删改查)</span></span></code></pre></div><h2 id="数据结构分类" tabindex="-1">数据结构分类 <a class="header-anchor" href="#数据结构分类" aria-label="Permalink to &quot;数据结构分类&quot;">​</a></h2><p>数据结构可分为线性结构和非线性结构，也可按物理存储分为连续和链式结构。</p><p>特点：</p><ul><li>线性结构：元素间存在一对一关系，如数组、链表</li><li>非线性结构：元素间存在一对多或多对多关系，如树、图</li><li>连续存储：数据在内存中连续存放，支持随机访问</li><li>链式存储：通过指针连接离散内存块，支持动态扩展</li></ul><p>示意图 (分类树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数据结构</span></span>
<span class="line"><span>├── 线性结构</span></span>
<span class="line"><span>│   ├── 数组</span></span>
<span class="line"><span>│   ├── 链表</span></span>
<span class="line"><span>│   ├── 栈</span></span>
<span class="line"><span>│   └── 队列</span></span>
<span class="line"><span>├── 非线性结构</span></span>
<span class="line"><span>│   ├── 树</span></span>
<span class="line"><span>│   │   ├── 二叉树</span></span>
<span class="line"><span>│   │   └── 堆</span></span>
<span class="line"><span>│   └── 图</span></span>
<span class="line"><span>└── 哈希表</span></span></code></pre></div><h2 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h2><p>数组是相同类型数据元素的集合，在内存中连续存储，通过索引直接访问。</p><p>特点：</p><ul><li>随机访问：通过下标在 O(1) 时间访问任意元素</li><li>内存连续：支持缓存预取，访问效率高</li><li>大小固定：创建后长度不可变 (静态数组)</li><li>插入删除：需要移动元素，平均 O(n) 时间</li></ul><p>示意图 (内存布局)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>索引:   0    1    2    3    4</span></span>
<span class="line"><span>值:   [10] [20] [30] [40] [50]</span></span>
<span class="line"><span>地址:  100  104  108  112  116</span></span></code></pre></div><p>每个元素占 4 字节，地址连续。</p><p>操作示例 (插入元素 25 到位置 2)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插入前: [10,20,30,40,50]</span></span>
<span class="line"><span>       将位置2及后元素右移: [10,20,_,30,40,50]</span></span>
<span class="line"><span>       插入25: [10,20,25,30,40,50]</span></span></code></pre></div><h2 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h2><p>链表通过节点和指针连接数据元素，每个节点包含数据和指向下一节点的指针。</p><p>特点：</p><ul><li>动态大小：运行时根据需要分配内存</li><li>内存不连续：节点可以分散在内存各处</li><li>插入删除：在已知位置时只需 O(1) 时间</li><li>随机访问：需要从头遍历，O(n) 时间</li></ul><p>示意图 (单向链表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>头指针 → [数据|next] → [数据|next] → [数据|next] → NULL</span></span>
<span class="line"><span>         节点1         节点2         节点3</span></span></code></pre></div><h3 id="链表变种" tabindex="-1">链表变种 <a class="header-anchor" href="#链表变种" aria-label="Permalink to &quot;链表变种&quot;">​</a></h3><p>双向链表和循环链表是链表的常见变种，各有特点。</p><p>双向链表特点：</p><ul><li>前向和后向遍历：每个节点包含前后指针</li><li>空间开销：每个节点需要两个指针</li><li>删除操作：在已知节点时更高效</li></ul><p>示意图 (双向链表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>NULL ← [prev|数据|next] ↔ [prev|数据|next] ↔ [prev|数据|next] → NULL</span></span></code></pre></div><p>循环链表特点：</p><ul><li>首尾相连：尾节点指向头节点</li><li>循环遍历：可从任意点开始遍历整个链表</li><li>应用场景：轮转调度、约瑟夫问题</li></ul><p>示意图 (单向循环链表)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>→ [数据|next] → [数据|next] → [数据|next] ─┐</span></span>
<span class="line"><span>↑_________________________________________│</span></span></code></pre></div><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h2><p>栈是后进先出 (LIFO) 的线性结构，只允许在顶端进行插入和删除操作。</p><p>特点：</p><ul><li>限制访问：只能访问栈顶元素</li><li>自动管理：系统自动维护栈指针</li><li>函数调用：用于保存函数调用上下文</li><li>撤销操作：支持操作的逆向执行</li></ul><p>示意图 (栈操作)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始:   |   |   |   |   |   |  栈空</span></span>
<span class="line"><span>push A: | A |   |   |   |   |  A入栈</span></span>
<span class="line"><span>push B: | A | B |   |   |   |  B入栈  </span></span>
<span class="line"><span>push C: | A | B | C |   |   |  C入栈</span></span>
<span class="line"><span>pop:    | A | B |   |   |   |  C出栈</span></span></code></pre></div><p>栈顶指针随操作上下移动。</p><h2 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h2><p>队列是先进先出 (FIFO) 的线性结构，元素从队尾进入，从队首离开。</p><p>特点：</p><ul><li>顺序处理：保持元素的到达顺序</li><li>缓冲区：平衡生产者和消费者速度差异</li><li>广度优先：图算法中的核心数据结构</li><li>并发编程：任务调度和消息传递</li></ul><p>示意图 (队列操作)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>初始: [][][][][][]  空队列</span></span>
<span class="line"><span>enqueue A: [A][][][][][]  A入队</span></span>
<span class="line"><span>enqueue B: [A][B][][][][] B入队</span></span>
<span class="line"><span>enqueue C: [A][B][C][][][] C入队</span></span>
<span class="line"><span>dequeue: [][B][C][][][]    A出队</span></span></code></pre></div><p>队首和队尾指针分别移动。</p><h3 id="循环队列" tabindex="-1">循环队列 <a class="header-anchor" href="#循环队列" aria-label="Permalink to &quot;循环队列&quot;">​</a></h3><p>循环队列使用固定数组模拟无限队列，通过模运算实现指针循环。</p><p>特点：</p><ul><li>空间复用：队尾到达数组末端时回到起点</li><li>满队判断：(尾指针+1)%大小 == 头指针</li><li>空队判断：头指针 == 尾指针</li><li>效率优化：避免数据移动</li></ul><p>示意图 (循环队列)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>数组: [0][1][2][3][4]  大小为5</span></span>
<span class="line"><span>初始: front=0, rear=0</span></span>
<span class="line"><span>入队A,B,C: [A][B][C][][], front=0, rear=3</span></span>
<span class="line"><span>出队A: [][B][C][][], front=1, rear=3</span></span>
<span class="line"><span>入队D,E: [E][B][C][D][], front=1, rear=0</span></span></code></pre></div><p>rear 从 4 回到 0，形成循环。</p><h2 id="树" tabindex="-1">树 <a class="header-anchor" href="#树" aria-label="Permalink to &quot;树&quot;">​</a></h2><p>树是分层级的非线性结构，由节点和边组成，每个节点有零个或多个子节点。</p><p>特点：</p><ul><li>层次关系：根节点到叶节点形成路径</li><li>递归定义：子树也是树结构</li><li>搜索效率：有序树中搜索比线性结构高效</li><li>数据关系：适合表示层级数据如文件系统</li></ul><p>示意图 (普通树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>      A</span></span>
<span class="line"><span>    / | \\</span></span>
<span class="line"><span>   B  C  D</span></span>
<span class="line"><span>  / \\    |</span></span>
<span class="line"><span> E   F   G</span></span></code></pre></div><p>节点 A 是根，B、C、D 是子节点，E、F 是 B 的子节点。</p><h3 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h3><p>二叉树每个节点最多有两个子节点，分别为左子和右子，是树结构的特例。</p><p>特点：</p><ul><li>结构规整：最多两个子节点，便于实现</li><li>遍历方式：前序、中序、后序三种深度优先遍历</li><li>搜索应用：二叉搜索树支持高效查找</li><li>内存效率：相比普通树浪费较少指针空间</li></ul><p>示意图 (二叉树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>        A</span></span>
<span class="line"><span>      /   \\</span></span>
<span class="line"><span>     B     C</span></span>
<span class="line"><span>    / \\   /</span></span>
<span class="line"><span>   D   E F</span></span></code></pre></div><p>节点 B 有左子 D 和右子 E，节点 C 只有左子 F。</p><p>二叉树遍历示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>前序: A → B → D → E → C → F  (根左右)</span></span>
<span class="line"><span>中序: D → B → E → A → F → C  (左根右)  </span></span>
<span class="line"><span>后序: D → E → B → F → C → A  (左右根)</span></span></code></pre></div><h3 id="二叉搜索树" tabindex="-1">二叉搜索树 <a class="header-anchor" href="#二叉搜索树" aria-label="Permalink to &quot;二叉搜索树&quot;">​</a></h3><p>二叉搜索树是有序二叉树，左子树所有节点值小于根，右子树所有节点值大于根。</p><p>特点：</p><ul><li>有序性：中序遍历得到有序序列</li><li>搜索效率：平均 O(log n)，最坏 O(n)</li><li>动态维护：插入删除后仍保持有序性</li><li>平衡问题：可能退化为链表</li></ul><p>示意图 (二叉搜索树)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>       8</span></span>
<span class="line"><span>      / \\</span></span>
<span class="line"><span>     3   10</span></span>
<span class="line"><span>    / \\    \\</span></span>
<span class="line"><span>   1   6    14</span></span>
<span class="line"><span>      / \\   /</span></span>
<span class="line"><span>     4   7 13</span></span></code></pre></div><p>对于任意节点，左子树值都小于它，右子树值都大于它。</p><p>搜索过程 (查找 7)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>从根8开始: 7&lt;8 → 左子3</span></span>
<span class="line"><span>7&gt;3 → 右子6  </span></span>
<span class="line"><span>7&gt;6 → 右子7 → 找到</span></span></code></pre></div><h2 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h2><p>堆是完全二叉树，满足堆性质：父节点值总是大于或小于所有子节点值。</p><p>特点：</p><ul><li>完全二叉树：除最后一层外都是满的，最后一层从左到右填充</li><li>堆序性：大顶堆中父节点 ≥ 子节点，小顶堆中父节点 ≤ 子节点</li><li>优先级队列：快速获取最大或最小元素</li><li>数组存储：用数组模拟二叉树，节省指针空间</li></ul><p>示意图 (大顶堆)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>        100</span></span>
<span class="line"><span>       /    \\</span></span>
<span class="line"><span>     19      36</span></span>
<span class="line"><span>    /  \\    /  \\</span></span>
<span class="line"><span>   17   3  25   1</span></span>
<span class="line"><span>  /  \\</span></span>
<span class="line"><span> 2    7</span></span></code></pre></div><p>每个节点值都大于等于其子节点值。</p><p>数组表示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>索引: 0   1   2   3   4   5   6   7   8</span></span>
<span class="line"><span>值:  [100,19,36,17,3,25,1,2,7]</span></span>
<span class="line"><span>父节点i的左子: 2i+1, 右子: 2i+2</span></span>
<span class="line"><span>子节点i的父节点: floor((i-1)/2)</span></span></code></pre></div><h2 id="哈希表" tabindex="-1">哈希表 <a class="header-anchor" href="#哈希表" aria-label="Permalink to &quot;哈希表&quot;">​</a></h2><p>哈希表通过哈希函数将键映射到数组索引，实现接近 O(1) 的查找效率。</p><p>特点：</p><ul><li>直接访问：通过键的哈希值直接定位存储位置</li><li>冲突处理：不同键可能映射到同一位置，需要解决冲突</li><li>负载因子：已用槽位与总槽位的比例，影响性能</li><li>动态扩容：当负载因子过高时需要重新哈希</li></ul><p>示意图 (哈希表结构)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>键&quot;John&quot; → 哈希函数 → 索引2 → [2] → &quot;John:数据&quot;</span></span>
<span class="line"><span>键&quot;Lisa&quot; → 哈希函数 → 索引5 → [5] → &quot;Lisa:数据&quot;  </span></span>
<span class="line"><span>键&quot;Mike&quot; → 哈希函数 → 索引2 → [2] → 冲突!</span></span></code></pre></div><h3 id="冲突解决" tabindex="-1">冲突解决 <a class="header-anchor" href="#冲突解决" aria-label="Permalink to &quot;冲突解决&quot;">​</a></h3><p>开放寻址和链地址法是两种主要的冲突解决方法。</p><p>开放寻址特点：</p><ul><li>线性探测：冲突时顺序查找下一个空槽</li><li>二次探测：使用二次函数计算下一个位置</li><li>双重哈希：使用第二个哈希函数</li></ul><p>示意图 (线性探测)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>插入键A到索引2: [][][A][][][]</span></span>
<span class="line"><span>插入键B到索引2(冲突): [][][A][B][][] 放到索引3</span></span>
<span class="line"><span>插入键C到索引2(冲突): [][][A][B][C][] 放到索引4</span></span></code></pre></div><p>链地址法特点：</p><ul><li>桶结构：每个槽位存储链表头指针</li><li>分离链接：冲突元素链接到同一桶中</li><li>简单有效：链表处理冲突，无需探测</li></ul><p>示意图 (链地址法)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>索引0: NULL</span></span>
<span class="line"><span>索引1: → [键1|值1] → NULL  </span></span>
<span class="line"><span>索引2: → [键A|值A] → [键B|值B] → NULL  // 冲突链</span></span>
<span class="line"><span>索引3: NULL</span></span></code></pre></div><h2 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h2><p>图由顶点和边组成，表示多对多关系，是最一般的非线性结构。</p><p>特点：</p><ul><li>关系建模：适合表示网络、社交关系等</li><li>路径分析：支持最短路径、连通性等分析</li><li>遍历算法：深度优先和广度优先搜索</li><li>存储结构：邻接矩阵或邻接表</li></ul><p>示意图 (无向图)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>    A</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  B---C</span></span>
<span class="line"><span>  |   |</span></span>
<span class="line"><span>  D   E</span></span></code></pre></div><p>顶点 {A,B,C,D,E}，边 {(A,B)，(A,C)，(B,C)，(B,D)，(C,E)}。</p><h3 id="图存储表示" tabindex="-1">图存储表示 <a class="header-anchor" href="#图存储表示" aria-label="Permalink to &quot;图存储表示&quot;">​</a></h3><p>邻接矩阵和邻接表是图的两种主要存储方式。</p><p>邻接矩阵特点：</p><ul><li>二维数组：matrix[i][j] 表示顶点 i 到 j 的边</li><li>空间开销：O(V²)，适合稠密图</li><li>快速查询：O(1) 时间判断两顶点是否相邻</li></ul><p>示意图 (邻接矩阵)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>   A B C D E</span></span>
<span class="line"><span>A: 0 1 1 0 0</span></span>
<span class="line"><span>B: 1 0 1 1 0  </span></span>
<span class="line"><span>C: 1 1 0 0 1</span></span>
<span class="line"><span>D: 0 1 0 0 0</span></span>
<span class="line"><span>E: 0 0 1 0 0</span></span>
<span class="line"><span>1表示有边，0表示无边。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>邻接表特点：</span></span>
<span class="line"><span>- 链表数组：每个顶点维护邻接顶点链表</span></span>
<span class="line"><span>- 空间效率：O(V+E)，适合稀疏图</span></span>
<span class="line"><span>- 遍历邻点：直接访问链表，无需扫描整个行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示意图（邻接表）：</span></span></code></pre></div><p>A: → B → C → NULL B: → A → C → D → NULL<br> C: → A → B → E → NULL D: → B → NULL E: → C → NULL</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 数据结构选择策略</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选择数据结构需考虑操作频率、数据规模、内存约束等因素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选择指南：</span></span>
<span class="line"><span>- 频繁搜索：哈希表(O(1))、二叉搜索树(O(log n))</span></span>
<span class="line"><span>- 频繁插入删除：链表(O(1))、平衡树(O(log n))</span></span>
<span class="line"><span>- 有序访问：数组(缓存友好)、二叉搜索树(中序遍历)</span></span>
<span class="line"><span>- 优先级操作：堆(O(1)获取极值)</span></span>
<span class="line"><span>- 层级数据：树(自然表示)</span></span>
<span class="line"><span>- 网络关系：图(直接建模)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示意图（选择流程）：</span></span></code></pre></div><p>需要快速搜索？ 是 → 需要有序？→ 是 → 二叉搜索树 ↓ 否 ↓ 否 哈希表需要键值对？→ 是 → 哈希表 ↓ 否 数组/链表</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>`,127)])])}const b=s(i,[["render",e]]);export{h as __pageData,b as default};
