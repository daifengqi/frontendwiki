# 前端维基 FrontendWiki

前端知识日新月异，需要学习的知识点很多很杂，程序员们都希望掌握优质的学习资源，然而大部分官方文档都不够简单清晰，对新手不友好，这时候就需要各方共同努力，筛选出好的资源。

此站点通过建立一个**树状知识结构**组织起来的前端知识学习资料**链接索引**，对知识领域进行**分档、标签化**归类，用户可通过**点赞、评论**等方式推荐，以达到筛选出优质学习资源的目的。<u>汇总优质资源，避免二次创作</u>。

## 概述

此项目分为两个页面，一个是主页（树状图），另一个是个人（用户）信息页。

### 主页

- 待补充
- ...

### 个人页面

个人页面作为用户接触的页面，我们需要给用户尽量完善的功能与舒适的体验。作为个人信息展示的地方，我们实现了以下功能：

- 注册与登录

  l 登录注册前端部分会有输入检查（包括邮箱格式、长度、未输入）

  l 当输入无问题，点击注册或登录按钮，发送post请求，服务端处理相应的请求

  l 服务端返回结果，执行结果正确，自动跳转到个人页面

  l 通过缓存token保持登录状态

- 发布数据展示

  l 用户的被点赞数，被收藏数

  l 注册时间

- 个人发布、收藏、点赞、评论及浏览历史

  l 以列表的形式进行展示，支持不同排序规则

  l 当未登录或无数据时会有相应的提示

- 个人信息更新修改

  l 更新信息要在登录状态下才可以执行

  l 可以任意选择更新用户名、密码、邮箱

  l 发送patch请求

为了给用户更好的使用体验，我们使用了React-Router来实现前端路由，降低了用户翻页等待的时间。同时为了方便维护，我们引入了React-Router-Config来配置路由。在视觉上我们同样进行了一些设计，个人页面整体采用的是扁平化的设计思想，给用户一种清新的感觉。我们还引用了Ant Design来增强用户交互方面的体验。除此之外，我们还实现了一些细节的动画效果，例如登录注册页面的切换等。

### 版权声明

本项目由第一届[字节青训营](https://youthcamp.bytedance.com/)成员完成，名单如下

- [季悠然](https://github.com/youranreus)
- [SourceHeartLock](https://github.com/GrinZero)
- [2huo](https://github.com/2huo)
- [SumLee](https://github.com/Sum-Lee)
- [daifeng](https://github.com/daifengqi)
- [dcs](https://github.com/csDeng)
- [tecvan](https://github.com/Tecvan-fe)（导师）

#### The MIT License (MIT)

Copyright (c) 2013-2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
