export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
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
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/home' },
      // list
      {
        path: '/dashboard',
        icon: 'dashboard',
        name: '首页',
        routes: [
          {
            path: '/dashboard/home',
            name: 'searchtable',
            component: './Dashboard/Home',
          }
        ],
      }
    ],
  },
];
