export default [
  {
    name: 'basic',
    icon: 'user',
    zh: '基础知识',
    en: 'basic',
    routes: [
      {
        name: 'linux',
        zh: 'linux相关',
        en: 'about linux',
        routes: [{ name: 'auth', zh: '操作权限', en: 'linux auth', icon: 'android' }],
      },
      {
        name: 'js',
        zh: 'JS相关',
        en: 'about js',
        routes: [{ name: 'pureFunction', zh: '纯函数', en: 'pure function', icon: 'android' }],
      },
      { name: 'browserCommunicate', zh: '浏览器标签页通信', en: 'browser communicate' },
    ],
  },
  {
    name: 'safe',
    icon: 'user',
    zh: '安全',
    en: 'safe',
    routes: [{ name: 'xss', zh: 'XSS跨站攻击', en: 'xss attack' }],
  },
  {
    name: 'algorithm',
    icon: 'user',
    zh: '算法',
    en: 'algorithm',
    routes: [
      {
        name: 'sort',
        zh: '排序算法',
        en: 'sort',
        routes: [
          { name: 'selection-sort', zh: '选择排序', en: 'selection sort', icon: 'android' },
          { name: 'bubble-sort-v1', zh: '冒泡排序', en: 'bubble sort v1', icon: 'apple' },
          { name: 'bubble-sort-v2', zh: '冒泡排序优化', en: 'bubble sort v2', icon: 'windows' },
        ],
      },
    ],
  },
  {
    name: 'JS',
    icon: 'user',
    zh: 'JS',
    en: 'JS',
    routes: [
      {
        name: 'es6',
        zh: 'es6',
        en: 'es6',
        routes: [{ name: 'Promise', zh: 'Promise方法', en: 'Promise fn' }],
      },
    ],
  },
];
