export default [
  //测试 demo
  {
    name: 'test-demo',
    icon: 'dashboard',
    path: '/testdemo',
    routes: [
      {
        path: '/testdemo/testpage1',
        name: 'test-page1',
        component: './TestDemo/Test-page1/Layout',
      },
      {
        path: '/testdemo/testpage2',
        name: 'test-page2',
        component: './TestDemo/Test-page2/Layout',
      },
      {
        path: '/testdemo',
        component: './TestDemo/Index',
      },
    ],
  },
];
