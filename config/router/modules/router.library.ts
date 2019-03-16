import { getRouterMap } from '../../core/distribute';
import core_interviewMap from '../../core/modules/core.library';

export const routerMap = getRouterMap(core_interviewMap, 'library'); //处理好的路由队列

export const router_library = [
  //markdown edit
  {
    name: 'MD',
    icon: 'dashboard',
    path: '/MD',
    meta: {
      class: 'library',
      key: 'MD',
      en: 'Markdown',
      zh: 'Markdown',
      localeskey: '.MD',
    },
    routes: [
      {
        path: '/MD/MDEdit',
        name: 'MDEdit',
        component: './MDEditor/index',
        meta: {
          class: 'library',
          key: 'MDEdit',
          en: 'Markdown Edit',
          zh: 'Markdown 编辑器',
          localeskey: '.MD.MDEdit',
        },
      },
    ],
  },
  ...routerMap,
];

// {
//   name: 'algorithm',
//     icon: 'user',
//   path: '/algorithm',
//   routes: [
//   {
//     path: '/algorithm/sort',
//     name: 'sort',
//     component: './Algorithm/Sort/Layout',
//     routes: [
//       {
//         path: '/algorithm/sort',
//         component: './Algorithm/Sort/SelectionSort',
//       },
//       {
//         path: '/algorithm/sort/selection-Sort',
//         component: './Algorithm/Sort/SelectionSort',
//       },
//       {
//         path: '/algorithm/sort/bubble-Sort-v1',
//         component: './Algorithm/Sort/bubbleSortV1',
//       },
//       {
//         path: '/algorithm/sort/bubble-Sort-v2',
//         component: './Algorithm/Sort/bubbleSortV2',
//       },
//     ],
//   },
// ],
// },
