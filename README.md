#### 介绍

    关于前端监控的学习和相关代码

#### 为什么做前端监控

    更快发现问题和解决问题

    做产品的决策依据

    提升前端工程师的技术深度和广度,打造简历亮点

        什么样的简历会有亮点呢？

            写个脚手架cli、组件库、前端监控系统

            亮点：有技术难度、能够推动公司的产品的改进、证明你自己的推动协调能力

    为业务扩展提供了更多可能性

#### 前端监控的目标

    稳定性：加载正常、不会出错

    用户体验：加载速度、尽快看到有利的内容、SEO、不会卡顿

    业务：访问量、点击量

#### 前端监控流程

    前端埋点

    数据上报

    分析和计算：将采集到的数据进行加工汇总

    可视化展示：将数据按各种维度进行展示

    监控报警：发现问题后按一定的条件触发报警


    买点和数据上报是前端的主要工作内容，而数据的分析、可视化、报警等一般交由后端来进行处理，而阿里云等云平台就有相关的服务推荐或者也可以引入响应的框架就可以实现响应功能

##### 常见的埋点方案

    代码埋点

    可视化埋点

    无痕埋点

##### monitor

    通过webpack实现前端监控系统
