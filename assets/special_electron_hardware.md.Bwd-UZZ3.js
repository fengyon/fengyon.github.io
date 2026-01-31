import{_ as n,c as a,o as l,b as p}from"./chunks/framework.CMLuPXeo.js";const F=JSON.parse('{"title":"Electron 硬件功能开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"硬件功能开发概述","slug":"硬件功能开发概述","link":"#硬件功能开发概述","children":[]},{"level":2,"title":"硬件访问架构设计","slug":"硬件访问架构设计","link":"#硬件访问架构设计","children":[{"level":3,"title":"多层硬件访问架构","slug":"多层硬件访问架构","link":"#多层硬件访问架构","children":[]},{"level":3,"title":"安全的硬件访问模式","slug":"安全的硬件访问模式","link":"#安全的硬件访问模式","children":[]}]},{"level":2,"title":"USB 设备开发","slug":"usb-设备开发","link":"#usb-设备开发","children":[{"level":3,"title":"node-usb 库使用","slug":"node-usb-库使用","link":"#node-usb-库使用","children":[]}]},{"level":2,"title":"串口通信开发","slug":"串口通信开发","link":"#串口通信开发","children":[{"level":3,"title":"serialport 库使用","slug":"serialport-库使用","link":"#serialport-库使用","children":[]}]},{"level":2,"title":"蓝牙设备开发","slug":"蓝牙设备开发","link":"#蓝牙设备开发","children":[{"level":3,"title":"Web Bluetooth API 集成","slug":"web-bluetooth-api-集成","link":"#web-bluetooth-api-集成","children":[]}]},{"level":2,"title":"摄像头和麦克风访问","slug":"摄像头和麦克风访问","link":"#摄像头和麦克风访问","children":[{"level":3,"title":"媒体设备访问","slug":"媒体设备访问","link":"#媒体设备访问","children":[]}]},{"level":2,"title":"硬件功能项目结构","slug":"硬件功能项目结构","link":"#硬件功能项目结构","children":[]},{"level":2,"title":"硬件访问权限配置","slug":"硬件访问权限配置","link":"#硬件访问权限配置","children":[]}],"relativePath":"special/electron/hardware.md","filePath":"special/electron/hardware.md"}'),o={name:"special/electron/hardware.md"};function e(c,s,t,E,r,y){return l(),a("div",null,[...s[0]||(s[0]=[p(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /special/electron/hardware.md for this page in Markdown format</div><h1 id="electron-硬件功能开发" tabindex="-1">Electron 硬件功能开发 <a class="header-anchor" href="#electron-硬件功能开发" aria-label="Permalink to &quot;Electron 硬件功能开发&quot;">​</a></h1><h2 id="硬件功能开发概述" tabindex="-1">硬件功能开发概述 <a class="header-anchor" href="#硬件功能开发概述" aria-label="Permalink to &quot;硬件功能开发概述&quot;">​</a></h2><p>Electron 硬件功能开发指的是利用 Electron 应用访问和控制系统硬件设备的能力。与传统 Web 应用受限于浏览器沙箱不同，Electron 通过 Node.js 集成可以<strong>直接调用系统硬件接口</strong>，访问 USB 设备、串口、蓝牙设备、摄像头、麦克风、打印机等物理硬件资源。</p><p>硬件功能开发的核心挑战在于<strong>桥接 Web 技术与原生硬件接口</strong>。Electron 应用通过主进程运行在 Node.js 环境中，可以加载各种硬件相关的原生模块，而渲染进程则负责用户界面展示，两者通过 IPC 机制进行数据交换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>用户界面 (渲染进程)</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       | IPC 通信</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>硬件控制层 (主进程)</span></span>
<span class="line"><span>       |</span></span>
<span class="line"><span>       | 原生硬件 API</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>物理硬件设备 (USB/蓝牙/串口等)</span></span></code></pre></div><h2 id="硬件访问架构设计" tabindex="-1">硬件访问架构设计 <a class="header-anchor" href="#硬件访问架构设计" aria-label="Permalink to &quot;硬件访问架构设计&quot;">​</a></h2><h3 id="多层硬件访问架构" tabindex="-1">多层硬件访问架构 <a class="header-anchor" href="#多层硬件访问架构" aria-label="Permalink to &quot;多层硬件访问架构&quot;">​</a></h3><p>Electron 硬件功能开发通常采用分层架构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染进程 (UI层)</span></span>
<span class="line"><span>    ↑↓ IPC</span></span>
<span class="line"><span>主进程 (硬件控制层)</span></span>
<span class="line"><span>    ↑↓ Node.js 原生模块</span></span>
<span class="line"><span>系统硬件接口</span></span>
<span class="line"><span>    ↑↓ 设备驱动</span></span>
<span class="line"><span>物理硬件设备</span></span></code></pre></div><h3 id="安全的硬件访问模式" tabindex="-1">安全的硬件访问模式 <a class="header-anchor" href="#安全的硬件访问模式" aria-label="Permalink to &quot;安全的硬件访问模式&quot;">​</a></h3><p>由于硬件操作涉及系统级权限，必须采用安全的访问模式：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// preload.js - 硬件 API 安全暴露</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { contextBridge, ipcRenderer } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;electron&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">contextBridge.</span><span style="color:#B392F0;">exposeInMainWorld</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardwareAPI&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#6A737D;">  // USB 设备操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  usb: {</span></span>
<span class="line"><span style="color:#B392F0;">    getDevices</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:getDevices&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    openDevice</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:openDevice&#39;</span><span style="color:#E1E4E8;">, deviceId),</span></span>
<span class="line"><span style="color:#B392F0;">    sendData</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:sendData&#39;</span><span style="color:#E1E4E8;">, deviceId, data),</span></span>
<span class="line"><span style="color:#B392F0;">    receiveData</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:dataReceived&#39;</span><span style="color:#E1E4E8;">, callback)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 串口操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  serial: {</span></span>
<span class="line"><span style="color:#B392F0;">    listPorts</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:listPorts&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#B392F0;">    openPort</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">portName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:openPort&#39;</span><span style="color:#E1E4E8;">, portName, options),</span></span>
<span class="line"><span style="color:#B392F0;">    writeData</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">portName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:writeData&#39;</span><span style="color:#E1E4E8;">, portName, data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">  // 蓝牙操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  bluetooth: {</span></span>
<span class="line"><span style="color:#B392F0;">    requestDevice</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:bluetooth:requestDevice&#39;</span><span style="color:#E1E4E8;">, options),</span></span>
<span class="line"><span style="color:#B392F0;">    connect</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:bluetooth:connect&#39;</span><span style="color:#E1E4E8;">, deviceId),</span></span>
<span class="line"><span style="color:#B392F0;">    disconnect</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ipcRenderer.</span><span style="color:#B392F0;">invoke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:bluetooth:disconnect&#39;</span><span style="color:#E1E4E8;">, deviceId)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="usb-设备开发" tabindex="-1">USB 设备开发 <a class="header-anchor" href="#usb-设备开发" aria-label="Permalink to &quot;USB 设备开发&quot;">​</a></h2><h3 id="node-usb-库使用" tabindex="-1">node-usb 库使用 <a class="header-anchor" href="#node-usb-库使用" aria-label="Permalink to &quot;node-usb 库使用&quot;">​</a></h3><p><code>node-usb</code> 库提供底层的 USB 设备访问能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hardware/usbManager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> usb </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;usb&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> USBManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.devices </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupUSBEvents</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupUSBEvents</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 监听设备连接事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    usb.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;attach&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;USB 设备连接:&#39;</span><span style="color:#E1E4E8;">, device.deviceDescriptor);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDeviceAttach</span><span style="color:#E1E4E8;">(device);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听设备断开事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    usb.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;detach&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;USB 设备断开:&#39;</span><span style="color:#E1E4E8;">, device.deviceDescriptor);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDeviceDetach</span><span style="color:#E1E4E8;">(device);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取所有 USB 设备</span></span>
<span class="line"><span style="color:#B392F0;">  getDevices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> devices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> usb.</span><span style="color:#B392F0;">getDeviceList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> devices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDeviceId</span><span style="color:#E1E4E8;">(device),</span></span>
<span class="line"><span style="color:#E1E4E8;">      vendorId: device.deviceDescriptor.idVendor,</span></span>
<span class="line"><span style="color:#E1E4E8;">      productId: device.deviceDescriptor.idProduct,</span></span>
<span class="line"><span style="color:#E1E4E8;">      manufacturer: device.deviceDescriptor.iManufacturer,</span></span>
<span class="line"><span style="color:#E1E4E8;">      product: device.deviceDescriptor.iProduct,</span></span>
<span class="line"><span style="color:#E1E4E8;">      busNumber: device.busNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">      deviceAddress: device.deviceAddress</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 打开 USB 设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> openDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> device</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findDeviceById</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">device) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设备未找到: \${</span><span style="color:#E1E4E8;">deviceId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    device.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 获取设备接口</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> iface</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> device.</span><span style="color:#B392F0;">interface</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (iface.</span><span style="color:#B392F0;">isKernelDriverActive</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      iface.</span><span style="color:#B392F0;">detachKernelDriver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    iface.</span><span style="color:#B392F0;">claim</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 设置端点</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> endpointIn</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> iface.</span><span style="color:#B392F0;">endpoint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x81</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> endpointOut</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> iface.</span><span style="color:#B392F0;">endpoint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x01</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.devices.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(deviceId, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      device,</span></span>
<span class="line"><span style="color:#E1E4E8;">      iface,</span></span>
<span class="line"><span style="color:#E1E4E8;">      endpointIn,</span></span>
<span class="line"><span style="color:#E1E4E8;">      endpointOut</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, deviceId };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送数据到 USB 设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> sendData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> deviceInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.devices.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">deviceInfo) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设备未打开: \${</span><span style="color:#E1E4E8;">deviceId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deviceInfo.endpointOut.</span><span style="color:#B392F0;">transfer</span><span style="color:#E1E4E8;">(Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(data), (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 从 USB 设备接收数据</span></span>
<span class="line"><span style="color:#B392F0;">  startReceivingData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> deviceInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.devices.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">deviceInfo) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`设备未打开: \${</span><span style="color:#E1E4E8;">deviceId</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> receive</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      deviceInfo.endpointIn.</span><span style="color:#B392F0;">transfer</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;接收数据错误:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;"> (data </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> &gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">          callback</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 继续接收下一个数据包</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.devices.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(deviceId)) {</span></span>
<span class="line"><span style="color:#B392F0;">          setImmediate</span><span style="color:#E1E4E8;">(receive);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">    receive</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getDeviceId</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">busNumber</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">deviceAddress</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  findDeviceById</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> devices</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> usb.</span><span style="color:#B392F0;">getDeviceList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> devices.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDeviceId</span><span style="color:#E1E4E8;">(device) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> deviceId</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> USBManager;</span></span></code></pre></div><p>在主进程中集成 USB 管理：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - USB 功能集成</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> USBManager </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./hardware/usbManager.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> usbManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> USBManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// USB 设备列表</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:getDevices&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> usbManager.</span><span style="color:#B392F0;">getDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打开 USB 设备</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:openDevice&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> usbManager.</span><span style="color:#B392F0;">openDevice</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送数据到 USB 设备</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:sendData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> usbManager.</span><span style="color:#B392F0;">sendData</span><span style="color:#E1E4E8;">(deviceId, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动数据接收</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:startReceive&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">fromWebContents</span><span style="color:#E1E4E8;">(event.sender);</span></span>
<span class="line"><span style="color:#E1E4E8;">    usbManager.</span><span style="color:#B392F0;">startReceivingData</span><span style="color:#E1E4E8;">(deviceId, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:usb:dataReceived&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        deviceId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>在渲染进程中使用 USB 功能：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - USB 设备操作</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> USBDeviceController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.connectedDevice </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 扫描 USB 设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> scanDevices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> devices</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.hardwareAPI.usb.</span><span style="color:#B392F0;">getDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayDevices</span><span style="color:#E1E4E8;">(devices);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> devices;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;扫描 USB 设备失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 连接 USB 设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connectDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.hardwareAPI.usb.</span><span style="color:#B392F0;">openDevice</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.connectedDevice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> deviceId;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#6A737D;">        // 启动数据接收监听</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.hardwareAPI.usb.</span><span style="color:#B392F0;">receiveData</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleReceivedData</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#F97583;">        await</span><span style="color:#E1E4E8;"> window.hardwareAPI.usb.</span><span style="color:#B392F0;">startReceive</span><span style="color:#E1E4E8;">(deviceId);</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接设备失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 发送数据到设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> sendDataToDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connectedDevice) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有已连接的设备&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.hardwareAPI.usb.</span><span style="color:#B392F0;">sendData</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.connectedDevice, </span></span>
<span class="line"><span style="color:#E1E4E8;">      data</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">result.success) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayDevices</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">devices</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> deviceList</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;usb-device-list&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    deviceList.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> devices.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;device-item&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;厂商: 0x\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">vendorId</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">16</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;产品: 0x\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">productId</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">toString</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">16</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div&gt;地址: \${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">busNumber</span><span style="color:#9ECBFF;">}-\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">deviceAddress</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;button onclick=&quot;connectToDevice(&#39;\${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}&#39;)&quot;&gt;连接&lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleReceivedData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;收到设备数据:&#39;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#6A737D;">    // 更新 UI 显示接收到的数据</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dataDisplay</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;received-data&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataDisplay.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`收到数据: [\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化 USB 控制器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> usbController</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> USBDeviceController</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 页面加载完成后扫描设备</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DOMContentLoaded&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  usbController.</span><span style="color:#B392F0;">scanDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="串口通信开发" tabindex="-1">串口通信开发 <a class="header-anchor" href="#串口通信开发" aria-label="Permalink to &quot;串口通信开发&quot;">​</a></h2><h3 id="serialport-库使用" tabindex="-1">serialport 库使用 <a class="header-anchor" href="#serialport-库使用" aria-label="Permalink to &quot;serialport 库使用&quot;">​</a></h3><p><code>serialport</code> 库提供跨平台的串口通信能力。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hardware/serialManager.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { SerialPort } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;serialport&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ReadlineParser } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@serialport/parser-readline&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SerialManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.ports </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取可用串口列表</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> listPorts</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> ports</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> SerialPort.</span><span style="color:#B392F0;">list</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> ports.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: port.path,</span></span>
<span class="line"><span style="color:#E1E4E8;">        manufacturer: port.manufacturer,</span></span>
<span class="line"><span style="color:#E1E4E8;">        serialNumber: port.serialNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pnpId: port.pnpId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        locationId: port.locationId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        vendorId: port.vendorId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        productId: port.productId</span></span>
<span class="line"><span style="color:#E1E4E8;">      }));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取串口列表失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 打开串口</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> openPort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> portOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: portPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">        baudRate: options.baudRate </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 9600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataBits: options.dataBits </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stopBits: options.stopBits </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parity: options.parity </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;none&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        autoOpen: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> port</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SerialPort</span><span style="color:#E1E4E8;">(portOptions);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 创建解析器（按行解析）</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> parser</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> port.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> ReadlineParser</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">        delimiter: </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        encoding: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        port.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">            reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            const</span><span style="color:#79B8FF;"> portInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              port,</span></span>
<span class="line"><span style="color:#E1E4E8;">              parser,</span></span>
<span class="line"><span style="color:#E1E4E8;">              isOpen: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#79B8FF;">            this</span><span style="color:#E1E4E8;">.ports.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(portPath, portInfo);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#6A737D;">            // 设置数据接收处理</span></span>
<span class="line"><span style="color:#E1E4E8;">            parser.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">              this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDataReceived</span><span style="color:#E1E4E8;">(portPath, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, portPath });</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 关闭串口</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> closePort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.ports.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(portPath);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">portInfo) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`串口未找到: \${</span><span style="color:#E1E4E8;">portPath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      portInfo.port.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.ports.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(portPath);</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 向串口写入数据</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> writeData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.ports.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(portPath);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">portInfo </span><span style="color:#F97583;">||</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">portInfo.isOpen) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`串口未打开: \${</span><span style="color:#E1E4E8;">portPath</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      portInfo.port.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(data, (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">          // 确保数据发送完成</span></span>
<span class="line"><span style="color:#E1E4E8;">          portInfo.port.</span><span style="color:#B392F0;">drain</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            resolve</span><span style="color:#E1E4E8;">({ success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理接收到的数据</span></span>
<span class="line"><span style="color:#B392F0;">  handleDataReceived</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 通过 IPC 发送数据到渲染进程</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> mainWindow</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> BrowserWindow.</span><span style="color:#B392F0;">getAllWindows</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainWindow.webContents.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:dataReceived&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        portPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: data.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取端口状态</span></span>
<span class="line"><span style="color:#B392F0;">  getPortStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portInfo</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.ports.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(portPath);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> portInfo </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOpen: portInfo.isOpen,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: portPath</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> SerialManager;</span></span></code></pre></div><p>串口功能 IPC 集成：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// main.js - 串口功能集成</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SerialManager </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./hardware/serialManager.js&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> serialManager</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SerialManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取串口列表</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:listPorts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> serialManager.</span><span style="color:#B392F0;">listPorts</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打开串口</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:openPort&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> serialManager.</span><span style="color:#B392F0;">openPort</span><span style="color:#E1E4E8;">(portPath, options);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭串口</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:closePort&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> serialManager.</span><span style="color:#B392F0;">closePort</span><span style="color:#E1E4E8;">(portPath);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 写入串口数据</span></span>
<span class="line"><span style="color:#E1E4E8;">ipcMain.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hardware:serial:writeData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">portPath</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> serialManager.</span><span style="color:#B392F0;">writeData</span><span style="color:#E1E4E8;">(portPath, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>串口操作界面示例：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - 串口通信界面</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> SerialPortController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.connectedPort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 刷新串口列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;refresh-ports&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">refreshPortList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 连接串口</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connect-port&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">connectToPort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 发送数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;send-data&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sendData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听接收数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.hardwareAPI.serial.</span><span style="color:#B392F0;">receiveData</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayReceivedData</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> refreshPortList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> ports</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.hardwareAPI.serial.</span><span style="color:#B392F0;">listPorts</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updatePortSelect</span><span style="color:#E1E4E8;">(ports);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;刷新串口列表失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updatePortSelect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ports</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> select</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;port-select&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    select.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;option value=&quot;&quot;&gt;选择串口&lt;/option&gt;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    ports.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">port</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> option</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;option&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> port.path;</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`\${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">} - \${</span><span style="color:#E1E4E8;">port</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">manufacturer</span><span style="color:#F97583;"> ||</span><span style="color:#9ECBFF;"> &#39;未知设备&#39;}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      select.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connectToPort</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portSelect</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;port-select&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> portPath</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> portSelect.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">portPath) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请选择串口&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> baudRate</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> parseInt</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;baud-rate&#39;</span><span style="color:#E1E4E8;">).value) </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 9600</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> window.hardwareAPI.serial.</span><span style="color:#B392F0;">openPort</span><span style="color:#E1E4E8;">(portPath, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        baudRate: baudRate</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.connectedPort </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> portPath;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`连接串口失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> sendData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connectedPort) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请先连接串口&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> dataInput</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;send-data-input&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> dataInput.value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">data) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请输入要发送的数据&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> window.hardwareAPI.serial.</span><span style="color:#B392F0;">writeData</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connectedPort, data </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataInput.value </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`发送数据失败: \${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayReceivedData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logArea</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;receive-log&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toLocaleTimeString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.value </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] \${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> logArea.scrollHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">connected</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> statusElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connection-status&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> connectButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connect-port&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connected) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`已连接: \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">connectedPort</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;status-connected&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;断开连接&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.</span><span style="color:#B392F0;">onclick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disconnectPort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;未连接&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;status-disconnected&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;连接串口&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.</span><span style="color:#B392F0;">onclick</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">connectToPort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> disconnectPort</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connectedPort) {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> window.hardwareAPI.serial.</span><span style="color:#B392F0;">closePort</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.connectedPort);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.connectedPort </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化串口控制器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> serialController</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SerialPortController</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="蓝牙设备开发" tabindex="-1">蓝牙设备开发 <a class="header-anchor" href="#蓝牙设备开发" aria-label="Permalink to &quot;蓝牙设备开发&quot;">​</a></h2><h3 id="web-bluetooth-api-集成" tabindex="-1">Web Bluetooth API 集成 <a class="header-anchor" href="#web-bluetooth-api-集成" aria-label="Permalink to &quot;Web Bluetooth API 集成&quot;">​</a></h3><p>Electron 支持 Web Bluetooth API，可以在渲染进程中直接使用。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hardware/bluetoothManager.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BluetoothManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.server </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.characteristics </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 请求蓝牙设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> requestDevice</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> device</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.bluetooth.</span><span style="color:#B392F0;">requestDevice</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        acceptAllDevices: options.acceptAllDevices </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        optionalServices: options.services </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;generic_access&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;battery_service&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 监听设备断开事件</span></span>
<span class="line"><span style="color:#E1E4E8;">      device.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gattserverdisconnected&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDisconnected</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, device: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getDeviceInfo</span><span style="color:#E1E4E8;">(device) };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 连接蓝牙设备</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connect</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.device) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有选择的设备&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.server </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.gatt.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#6A737D;">      // 获取所有服务</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> services</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.server.</span><span style="color:#B392F0;">getPrimaryServices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> serviceInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> of</span><span style="color:#E1E4E8;"> services) {</span></span>
<span class="line"><span style="color:#F97583;">        const</span><span style="color:#79B8FF;"> characteristics</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">getCharacteristics</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        serviceInfo.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          uuid: service.uuid,</span></span>
<span class="line"><span style="color:#E1E4E8;">          characteristics: characteristics.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">char</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">            uuid: char.uuid,</span></span>
<span class="line"><span style="color:#E1E4E8;">            properties: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getCharacteristicProperties</span><span style="color:#E1E4E8;">(char)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }))</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">        success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        services: serviceInfo </span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 读取特征值</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> readCharacteristic</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.server.</span><span style="color:#B392F0;">getPrimaryService</span><span style="color:#E1E4E8;">(serviceUuid);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> characteristic</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">getCharacteristic</span><span style="color:#E1E4E8;">(characteristicUuid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> characteristic.</span><span style="color:#B392F0;">readValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(value.buffer))</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 写入特征值</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> writeCharacteristic</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.server.</span><span style="color:#B392F0;">getPrimaryService</span><span style="color:#E1E4E8;">(serviceUuid);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> characteristic</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">getCharacteristic</span><span style="color:#E1E4E8;">(characteristicUuid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> characteristic.</span><span style="color:#B392F0;">writeValue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(data));</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动特征值通知</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startNotifications</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> service</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.server.</span><span style="color:#B392F0;">getPrimaryService</span><span style="color:#E1E4E8;">(serviceUuid);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> characteristic</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> service.</span><span style="color:#B392F0;">getCharacteristic</span><span style="color:#E1E4E8;">(characteristicUuid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    await</span><span style="color:#E1E4E8;"> characteristic.</span><span style="color:#B392F0;">startNotifications</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    characteristic.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;characteristicvaluechanged&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> value</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> event.target.value;</span></span>
<span class="line"><span style="color:#B392F0;">      callback</span><span style="color:#E1E4E8;">(Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Uint8Array</span><span style="color:#E1E4E8;">(value.buffer)));</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 断开连接</span></span>
<span class="line"><span style="color:#B392F0;">  disconnect</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.device.gatt.connected) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.device.gatt.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.device </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.server </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.characteristics.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getDeviceInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      id: device.id,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: device.name </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;未知设备&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      gattConnected: device.gatt?.connected </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  getCharacteristicProperties</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">characteristic</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> props</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (characteristic.properties.read) props.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;read&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (characteristic.properties.write) props.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;write&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (characteristic.properties.notify) props.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;notify&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (characteristic.properties.indicate) props.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;indicate&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> props;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleDisconnected</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;蓝牙设备已断开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 通知渲染进程设备已断开</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> event</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CustomEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetoothDisconnected&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">dispatchEvent</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>蓝牙设备界面控制：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - 蓝牙设备控制</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> BluetoothController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bluetoothManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BluetoothManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.connected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;scan-bluetooth&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">scanDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connect-bluetooth&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">connectDevice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnect-bluetooth&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disconnectDevice</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听设备断开事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetoothDisconnected&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDisconnected</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> scanDevices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bluetoothManager.</span><span style="color:#B392F0;">requestDevice</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        acceptAllDevices: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        services: [</span><span style="color:#9ECBFF;">&#39;battery_service&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;device_information&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateDeviceInfo</span><span style="color:#E1E4E8;">(result.device);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;扫描设备失败: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;蓝牙扫描错误: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> connectDevice</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bluetoothManager.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.connected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayServices</span><span style="color:#E1E4E8;">(result.services);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接错误: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  disconnectDevice</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.bluetoothManager.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleDisconnected</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleDisconnected</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.connected </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">clearServices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateDeviceInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> deviceInfo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-device-info&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    deviceInfo.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div&gt;设备名称: \${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div&gt;设备ID: \${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div&gt;连接状态: \${</span><span style="color:#E1E4E8;">device</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">gattConnected</span><span style="color:#F97583;"> ?</span><span style="color:#9ECBFF;"> &#39;已连接&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;未连接&#39;}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateConnectionStatus</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">connected</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> statusElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-status&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> connectButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;connect-bluetooth&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> disconnectButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnect-bluetooth&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (connected) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;已连接&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;status-connected&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      disconnectButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;未连接&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      statusElement.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;status-disconnected&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      connectButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      disconnectButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayServices</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">services</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> servicesContainer</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-services&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    servicesContainer.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> services.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">service</span><span style="color:#F97583;"> =&gt;</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;div class=&quot;service-item&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div class=&quot;service-uuid&quot;&gt;服务: \${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;div class=&quot;characteristics&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          \${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">characteristics</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">map</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">char</span><span style="color:#F97583;"> =&gt;</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;characteristic&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;span&gt;特征: \${</span><span style="color:#E1E4E8;">char</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;span&gt;属性: [\${</span><span style="color:#E1E4E8;">char</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">properties</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]&lt;/span&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;button onclick=&quot;readCharacteristic(&#39;\${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&#39;, &#39;\${</span><span style="color:#E1E4E8;">char</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&#39;)&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                读取</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              \${</span><span style="color:#E1E4E8;">char</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">properties</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">includes</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;notify&#39;</span><span style="color:#9ECBFF;">) </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;button onclick=&quot;startNotifications(&#39;\${</span><span style="color:#E1E4E8;">service</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&#39;, &#39;\${</span><span style="color:#E1E4E8;">char</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">uuid</span><span style="color:#9ECBFF;">}&#39;)&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  监听</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              \`</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;}</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  clearServices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-services&#39;</span><span style="color:#E1E4E8;">).innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-device-info&#39;</span><span style="color:#E1E4E8;">).innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 读取特征值</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> readCharacteristic</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bluetoothManager.</span><span style="color:#B392F0;">readCharacteristic</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        serviceUuid, </span></span>
<span class="line"><span style="color:#E1E4E8;">        characteristicUuid</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayCharacteristicValue</span><span style="color:#E1E4E8;">(serviceUuid, characteristicUuid, result.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取特征值失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动通知</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startNotifications</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.bluetoothManager.</span><span style="color:#B392F0;">startNotifications</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        serviceUuid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        characteristicUuid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayNotificationValue</span><span style="color:#E1E4E8;">(serviceUuid, characteristicUuid, value);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动通知失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayCharacteristicValue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logArea</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-log&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toLocaleTimeString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.value </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] 读取 \${</span><span style="color:#E1E4E8;">characteristicUuid</span><span style="color:#9ECBFF;">}: [\${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> logArea.scrollHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayNotificationValue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">serviceUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">characteristicUuid</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> logArea</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bluetooth-log&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> timestamp</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toLocaleTimeString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.value </span><span style="color:#F97583;">+=</span><span style="color:#9ECBFF;"> \`[\${</span><span style="color:#E1E4E8;">timestamp</span><span style="color:#9ECBFF;">}] 通知 \${</span><span style="color:#E1E4E8;">characteristicUuid</span><span style="color:#9ECBFF;">}: [\${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;, &#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}]</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    logArea.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> logArea.scrollHeight;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化蓝牙控制器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> bluetoothController</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> BluetoothController</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="摄像头和麦克风访问" tabindex="-1">摄像头和麦克风访问 <a class="header-anchor" href="#摄像头和麦克风访问" aria-label="Permalink to &quot;摄像头和麦克风访问&quot;">​</a></h2><h3 id="媒体设备访问" tabindex="-1">媒体设备访问 <a class="header-anchor" href="#媒体设备访问" aria-label="Permalink to &quot;媒体设备访问&quot;">​</a></h3><p>Electron 支持通过 WebRTC API 访问摄像头和麦克风。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// hardware/mediaManager.js</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MediaManager</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mediaStream </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.recorder </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.recordedChunks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 获取媒体设备列表</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> getMediaDevices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      await</span><span style="color:#E1E4E8;"> navigator.mediaDevices.</span><span style="color:#B392F0;">getUserMedia</span><span style="color:#E1E4E8;">({ audio: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, video: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> devices</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.mediaDevices.</span><span style="color:#B392F0;">enumerateDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        audioInputs: devices.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> device.kind </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;audioinput&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoInputs: devices.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> device.kind </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;videoinput&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        audioOutputs: devices.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> device.kind </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;audiooutput&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取媒体设备失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { audioInputs: [], videoInputs: [], audioOutputs: [] };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动摄像头</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> videoConstraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: constraints.width </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 1280</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: constraints.height </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 720</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        frameRate: constraints.frameRate </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        deviceId: deviceId </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> { exact: deviceId } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mediaStream </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.mediaDevices.</span><span style="color:#B392F0;">getUserMedia</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        video: videoConstraints,</span></span>
<span class="line"><span style="color:#E1E4E8;">        audio: constraints.audio </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, stream: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 启动麦克风</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startMicrophone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deviceId</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">constraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> audioConstraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        sampleRate: constraints.sampleRate </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 44100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        channelCount: constraints.channelCount </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        deviceId: deviceId </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> { exact: deviceId } </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        echoCancellation: constraints.echoCancellation </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        noiseSuppression: constraints.noiseSuppression </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mediaStream </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> navigator.mediaDevices.</span><span style="color:#B392F0;">getUserMedia</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        audio: audioConstraints,</span></span>
<span class="line"><span style="color:#E1E4E8;">        video: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, stream: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 开始录制</span></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startRecording</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有可用的媒体流&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recordedChunks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MediaRecorder</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mimeType: options.mimeType </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;video/webm;codecs=vp9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoBitsPerSecond: options.videoBitsPerSecond </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 2500000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        audioBitsPerSecond: options.audioBitsPerSecond </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> 128000</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder.</span><span style="color:#B392F0;">ondataavailable</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (event.data.size </span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.recordedChunks.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(event.data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder.</span><span style="color:#B392F0;">onstop</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleRecordingStopped</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 每1秒收集一次数据</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { success: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, error: error.message };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 停止录制</span></span>
<span class="line"><span style="color:#B392F0;">  stopRecording</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.recorder </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.recorder.state </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;inactive&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 停止所有媒体流</span></span>
<span class="line"><span style="color:#B392F0;">  stopAll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.recorder </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.recorder.state </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;inactive&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.recorder.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mediaStream.</span><span style="color:#B392F0;">getTracks</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">track</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        track.</span><span style="color:#B392F0;">stop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mediaStream </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 处理录制完成</span></span>
<span class="line"><span style="color:#B392F0;">  handleRecordingStopped</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> blob</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Blob</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.recordedChunks, { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.recorder.mimeType </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> url</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> URL</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createObjectURL</span><span style="color:#E1E4E8;">(blob);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 触发下载或播放</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> event</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> CustomEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;recordingCompleted&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      detail: { url, blob, mimeType: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.recorder.mimeType }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">dispatchEvent</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 捕获当前帧</span></span>
<span class="line"><span style="color:#B392F0;">  captureFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">canvasElement</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mediaStream) {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;没有可用的视频流&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> videoTrack</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mediaStream.</span><span style="color:#B392F0;">getVideoTracks</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> imageCapture</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> ImageCapture</span><span style="color:#E1E4E8;">(videoTrack);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> imageCapture.</span><span style="color:#B392F0;">grabFrame</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">imageBitmap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> context</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> canvasElement.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2d&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      canvasElement.width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageBitmap.width;</span></span>
<span class="line"><span style="color:#E1E4E8;">      canvasElement.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> imageBitmap.height;</span></span>
<span class="line"><span style="color:#E1E4E8;">      context.</span><span style="color:#B392F0;">drawImage</span><span style="color:#E1E4E8;">(imageBitmap, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> canvasElement.</span><span style="color:#B392F0;">toDataURL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image/png&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>媒体设备控制界面：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// renderer.js - 媒体设备控制</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> MediaController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mediaManager </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MediaManager</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.isRecording </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupEventListeners</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupEventListeners</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;refresh-media-devices&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">refreshMediaDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-camera&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">startCamera</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stop-camera&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stopCamera</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-recording&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toggleRecording</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;capture-frame&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">captureFrame</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 监听录制完成事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;recordingCompleted&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">handleRecordingCompleted</span><span style="color:#E1E4E8;">(event.detail);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> refreshMediaDevices</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> devices</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">getMediaDevices</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateDeviceSelects</span><span style="color:#E1E4E8;">(devices);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;刷新媒体设备失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateDeviceSelects</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">devices</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> videoSelect</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;video-device-select&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> audioSelect</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;audio-device-select&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    videoSelect.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;option value=&quot;&quot;&gt;默认摄像头&lt;/option&gt;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    audioSelect.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;option value=&quot;&quot;&gt;默认麦克风&lt;/option&gt;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    devices.videoInputs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> option</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;option&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device.deviceId;</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device.label </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`摄像头 \${</span><span style="color:#E1E4E8;">videoSelect</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">children</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      videoSelect.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    devices.audioInputs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">device</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> option</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;option&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device.deviceId;</span></span>
<span class="line"><span style="color:#E1E4E8;">      option.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> device.label </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> \`麦克风 \${</span><span style="color:#E1E4E8;">audioSelect</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">children</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">length</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      audioSelect.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> startCamera</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> videoDevice</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;video-device-select&#39;</span><span style="color:#E1E4E8;">).value;</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> audioDevice</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;audio-device-select&#39;</span><span style="color:#E1E4E8;">).value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> constraints</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1280</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#79B8FF;">720</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      frameRate: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      audio: </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">audioDevice</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">startCamera</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        videoDevice </span><span style="color:#F97583;">||</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        constraints</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setupVideoElement</span><span style="color:#E1E4E8;">(result.stream);</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateCameraControls</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动摄像头失败: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> result.error);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;摄像头错误: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  stopCamera</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">stopAll</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateCameraControls</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> videoElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;camera-preview&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    videoElement.srcObject </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRecording) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toggleRecording</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  setupVideoElement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">stream</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> videoElement</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;camera-preview&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    videoElement.srcObject </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stream;</span></span>
<span class="line"><span style="color:#E1E4E8;">    videoElement.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> toggleRecording</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRecording) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 开始录制</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">startRecording</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (result.success) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.isRecording </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateRecordingButton</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 停止录制</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">stopRecording</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.isRecording </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">updateRecordingButton</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  async</span><span style="color:#B392F0;"> captureFrame</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> canvas</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;capture-canvas&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> dataUrl</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.mediaManager.</span><span style="color:#B392F0;">captureFrame</span><span style="color:#E1E4E8;">(canvas);</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">displayCapturedImage</span><span style="color:#E1E4E8;">(dataUrl);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#B392F0;">      alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;捕获画面失败: &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> error.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  displayCapturedImage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dataUrl</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> container</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;captured-images&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> img</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    img.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dataUrl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    img.style.maxWidth </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;200px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    img.style.margin </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;5px&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(img);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  handleRecordingCompleted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">detail</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建下载链接</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> a</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    a.href </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> detail.url;</span></span>
<span class="line"><span style="color:#E1E4E8;">    a.download </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`recording-\${</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Date</span><span style="color:#9ECBFF;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#9ECBFF;">()</span><span style="color:#9ECBFF;">}.webm\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    a.textContent </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;下载录制视频&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> container</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;recordings-container&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">    container.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;br&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">    // 自动下载</span></span>
<span class="line"><span style="color:#E1E4E8;">    a.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateCameraControls</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">started</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> startButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-camera&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> stopButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;stop-camera&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> recordButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-recording&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> captureButton</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;capture-frame&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    startButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> started;</span></span>
<span class="line"><span style="color:#E1E4E8;">    stopButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">started;</span></span>
<span class="line"><span style="color:#E1E4E8;">    recordButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">started;</span></span>
<span class="line"><span style="color:#E1E4E8;">    captureButton.disabled </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">started;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  updateRecordingButton</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">recording</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> button</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start-recording&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    button.textContent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> recording </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;停止录制&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;开始录制&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    button.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> recording </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> &#39;recording&#39;</span><span style="color:#F97583;"> :</span><span style="color:#9ECBFF;"> &#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化媒体控制器</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> mediaController</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MediaController</span><span style="color:#E1E4E8;">();</span></span></code></pre></div><h2 id="硬件功能项目结构" tabindex="-1">硬件功能项目结构 <a class="header-anchor" href="#硬件功能项目结构" aria-label="Permalink to &quot;硬件功能项目结构&quot;">​</a></h2><p>推荐的硬件功能项目组织结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>electron-hardware-app/</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── main.js</span></span>
<span class="line"><span>├── preload.js</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── hardware/</span></span>
<span class="line"><span>│   │   ├── managers/</span></span>
<span class="line"><span>│   │   │   ├── usbManager.js</span></span>
<span class="line"><span>│   │   │   ├── serialManager.js</span></span>
<span class="line"><span>│   │   │   ├── bluetoothManager.js</span></span>
<span class="line"><span>│   │   │   └── mediaManager.js</span></span>
<span class="line"><span>│   │   ├── drivers/</span></span>
<span class="line"><span>│   │   │   ├── customUSBDriver.js</span></span>
<span class="line"><span>│   │   │   └── deviceProtocols.js</span></span>
<span class="line"><span>│   │   ├── utils/</span></span>
<span class="line"><span>│   │   │   ├── bufferUtils.js</span></span>
<span class="line"><span>│   │   │   ├── dataParser.js</span></span>
<span class="line"><span>│   │   │   └── errorHandler.js</span></span>
<span class="line"><span>│   │   └── constants/</span></span>
<span class="line"><span>│   │       ├── usbConstants.js</span></span>
<span class="line"><span>│   │       └── serialConstants.js</span></span>
<span class="line"><span>│   ├── renderer/</span></span>
<span class="line"><span>│   │   ├── controllers/</span></span>
<span class="line"><span>│   │   │   ├── usbController.js</span></span>
<span class="line"><span>│   │   │   ├── serialController.js</span></span>
<span class="line"><span>│   │   │   ├── bluetoothController.js</span></span>
<span class="line"><span>│   │   │   └── mediaController.js</span></span>
<span class="line"><span>│   │   ├── components/</span></span>
<span class="line"><span>│   │   │   ├── DeviceList.js</span></span>
<span class="line"><span>│   │   │   ├── DataMonitor.js</span></span>
<span class="line"><span>│   │   │   └── ConnectionStatus.js</span></span>
<span class="line"><span>│   │   └── utils/</span></span>
<span class="line"><span>│   │       ├── uiHelpers.js</span></span>
<span class="line"><span>│   │       └── dataFormatters.js</span></span>
<span class="line"><span>│   └── shared/</span></span>
<span class="line"><span>│       ├── ipcChannels.js</span></span>
<span class="line"><span>│       └── eventTypes.js</span></span>
<span class="line"><span>├── assets/</span></span>
<span class="line"><span>│   ├── icons/</span></span>
<span class="line"><span>│   └── device-profiles/</span></span>
<span class="line"><span>└── build/</span></span>
<span class="line"><span>    ├── native-modules/</span></span>
<span class="line"><span>    └── drivers/</span></span></code></pre></div><h2 id="硬件访问权限配置" tabindex="-1">硬件访问权限配置 <a class="header-anchor" href="#硬件访问权限配置" aria-label="Permalink to &quot;硬件访问权限配置&quot;">​</a></h2><p>在不同平台上，硬件访问可能需要特定的权限配置：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// package.json - 硬件权限配置</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron-hardware-app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Electron 硬件功能应用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron-builder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;rebuild&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;electron-rebuild&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;build&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;appId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;com.example.hardwareapp&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;productName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;硬件控制应用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;directories&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;output&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dist&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;files&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;src/**/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;preload.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;package.json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;mac&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;category&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;public.app-category.developer-tools&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;entitlements&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;build/entitlements.mac.plist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;extendInfo&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;com.apple.security.device.usb&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;com.apple.security.device.bluetooth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;com.apple.security.device.audio-input&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;com.apple.security.device.camera&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;win&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;nsis&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;requestedExecutionLevel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;requireAdministrator&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;linux&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;category&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Development&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;target&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;AppImage&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;usb&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^2.5.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;serialport&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^10.5.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;@serialport/parser-readline&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^10.5.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;node-hid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^2.1.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;node-bluetooth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.2.6&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;electron&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^22.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;electron-builder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^23.6.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;electron-rebuild&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.2.9&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,47)])])}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
