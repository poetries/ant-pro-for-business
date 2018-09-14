// 配置详情 https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js
// 预览 https://preview.pro.ant.design/dashboard
// 菜单路由配置参考 https://pro.ant.design/docs/router-and-nav-cn#%E6%B7%BB%E5%8A%A0%E8%B7%AF%E7%94%B1/%E8%8F%9C%E5%8D%95
/**
name 和 icon分别代表生成菜单项的图标和文本。

hideChildrenInMenu 用于隐藏不需要在菜单中展示的子路由。用法可以查看 分步表单 的配置。

hideInMenu 可以在菜单中不展示这个路由，包括子路由。效果可以查看 exception/trigger页面。

authority 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示
**/

export default [
  // 登录模块
  {
    path: '/user',
    component: '../layouts/UserLayout',// 登录布局
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' }
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout', // 布局组件
    Routes: ['src/pages/Authorized'], // 授权路由
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard' },

      // 一级菜单配置
      {
        path: '/dashboard',
        icon: 'dashboard',
        name: 'dashboard',
        // authority:['bosslite','devboss'],// 只有这些角色可有权限访问系统
        component: './Dashboard',
      },
      {
        path: '/list',
        icon: 'table', // 菜单图标
        name: 'list', // 菜单文本自定义,然后到src/locales.zh-CN.js中配置对应的信息
        // 二级菜单配置
        routes: [
          {
            path: '/list/new1', // 二级路由
            name: 'new1', // 二级菜单文本
            component: './List/NewPage1'
          }
        ],
      },
      // 异常
      {
          name: 'exception',
          icon: 'warning',
          path: '/exception',
          hideInMenu:true,
          routes: [
            // exception
            {
              path: '/exception/403',
              name: 'not-permission',
              component: './Exception/403',
            },
            {
              path: '/exception/404',
              name: 'not-find',
              component: './Exception/404',
            },
            {
              path: '/exception/500',
              name: 'server-error',
              component: './Exception/500',
            },
            {
              path: '/exception/trigger',
              name: 'trigger',
              hideInMenu: true,
              component: './Exception/TriggerException',
            },
          ],
        },
    ],
  }

];
