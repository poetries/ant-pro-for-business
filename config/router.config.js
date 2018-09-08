// 配置详情 https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js
// 预览 https://preview.pro.ant.design/dashboard
// 菜单路由配置参考 https://pro.ant.design/docs/router-and-nav-cn#%E6%B7%BB%E5%8A%A0%E8%B7%AF%E7%94%B1/%E8%8F%9C%E5%8D%95

export default [
  // 登录模块
  {
    path: '/user',
    component: '../layouts/UserLayout',// 登录布局
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
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
        component: './Dashboard',
      },
      {
        path: '/new1',
        icon: 'check-circle-o',
        name: 'new1',
        component: './NewPage1',
      },
      {
        path: '/new2',
        icon: 'check-circle-o',
        name: 'new2',
        component: './NewPage2',
      },
      {
        path: '/new3',
        icon: 'check-circle-o',
        name: 'new3',
        component: './NewPage3',
      },
      {
        path: '/list',
        icon: 'table', // 菜单图标
        name: 'list', // 菜单文本自定义,然后到src/locales.zh-CN.js中配置对应的信息
        // 二级菜单配置
        routes: [
          {
            path: '/list/new4', // 二级路由
            name: 'new4', // 二级菜单文本
            component: './List/NewPage4',
          }
        ],
      },
    ],
  },
  
];
