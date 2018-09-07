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

### 前置知识

> 为更好使用ant pro系统，您需要了解`dva`、`umi`、`ant-design`

- [dva实践总结](http://blog.poetries.top/2018/09/05/dva/)
- [使用umi改进dva项目](http://blog.poetries.top/2018/09/06/umi-dva/)
- [Ant Design of React](https://ant.design/docs/react/introduce-cn)
- [ant pro使用文档](https://pro.ant.design/docs/getting-started-cn)