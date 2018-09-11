<h2 align="center">基于Ant Design Pro改造业务系统 </h2>

### 系统特性

- 基于 `Ant Design` 体系精心设计
- 使用 `React/umi/dva/antd` 等前端前沿技术开发
- 针对不同屏幕大小设计
- 可配置的主题满足多样化的品牌诉求
- `Mock` 数据实用的本地数据调试方案

### 目录结构

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.js            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

### 启动

```shell
git clone https://github.com/poetries/ant-pro-for-business.git

# install 
npm install

# start
npm start
```

> 打开`config/project.js`的`debug`置为`true`，不需要授权登录后台，即可访问本地 http://localhost:8000/dashboard

![login](https://upload-images.jianshu.io/upload_images/1480597-fef435e19716033d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![dashboard](https://upload-images.jianshu.io/upload_images/1480597-8caf0adc7df2f33d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 新建页面

**step1 新增 js、less 文件**

> 在`src/pages`下新建`NewPage.js`，及 `NewPage.less` 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件

**step2 将文件加入菜单和路由**

> 加入菜单和路由的方式请参照 路由和菜单 - 添加路由/菜单 中的介绍完成。加好后，访问 http://localhost:8000/new 就可以看到新增的页面了

> 在`config/router.config.js`中配置路由和菜单

```javascript
{
    path: '/new',
    icon: 'dashboard',//菜单图标
    name: 'new',// 菜单文本
    component: './NewPage', 
}
```

> 然后在`src/locales/zh-CN.js`中配置菜单文本信息

```javascript
export default {
  'menu.home': '首页',
  'menu.dashboard': 'Dashboard',

  'menu.list': '二级菜单',
  'menu.list.new4': '新页面4',

  // 新页面配置
  'menu.new1': '新页面1',
  'menu.new2': '新页面2',
  'menu.new3': '新页面3',
  'menu.new4': '新页面4',
};
```

**step3 新增 model、service**

> 布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了,如果需要用到` dva `中的数据流，还需要在 `src/models ` `src/services` 中建立相应的 `model `和 `service`，[具体可以参考 ](https://github.com/ant-design/ant-design-pro/blob/master/src/pages/Dashboard/models/activities.js)


### 前置知识

> 为更好使用ant pro系统，您需要了解`dva`、`umi`、`ant-design`

- [dva实践总结](http://blog.poetries.top/2018/09/05/dva/)
- [使用umi改进dva项目](http://blog.poetries.top/2018/09/06/umi-dva/)
- [Ant Design of React](https://ant.design/docs/react/introduce-cn)
- [ant pro使用文档](https://pro.ant.design/docs/getting-started-cn)