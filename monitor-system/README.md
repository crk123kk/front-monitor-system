#### 项目介绍

    通过webpack实现监控采集脚本

#### 技术支持

    需要阿里云的log日志

#### 遇到的技术问题

    webpack和webpack-dev-server版本不兼容：

        webpack-dev-server": "^3.11.2" 需要通过 webpack serve --open指令启动

#### 遇到的知识点问题

        window.someVar.error????

        someVar是啥？

        document.elementsFromPoint()???

        通过监控页面加载的各个流程从而实现之后的性能优化：performance.timing

        document.ready 和 document.onload的是不一样的

        connectTime = connectEnd - connectStart // 连接时间
        ttfbTime: responseStart - requestStart // 首字节到达时间
        responseTime: responseEnd - responseStart // 响应的读取时间
        parseDOMTime: loadEventStart - domLoading // DOM解析的时间
        domContentLoadedTime domContentLoadedEventEnd - domContentLoadedEventStart //文件加载结束的时间

        const {
            fetchStart,
            connectStart,
            connectEnd,
            requestStart,
            responseStart,
            responseEnd,
            domLoading,
            domInteractive,
            domContentLoadedEventEnd,
            domContentLoadedEventStart,
            loadEventStart,
        } = performance.timing;


        浏览器的performance过程中：

            Loading的时间和Scripting的时间为什么会重合？
            js的加载和解析不是会阻塞页面的加载和解析吗？
            Rendering和Painting之间的区别是什么？
            System、Idle、Total又分别表示什么？


            painting：浏览器没16.6ms换一次图片，rendering渲染之后的图片

                相当于页面有两张画布，当每16.6ms的时候切换一次画布，从而实现页面的切换
