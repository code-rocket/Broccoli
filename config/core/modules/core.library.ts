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
      {
        name: 'package',
        zh: 'package 相关',
        en: 'about package',
        routes: [{ name: 'yarn', zh: 'yarn', en: 'yarn', icon: 'android' }],
      },
      { name: 'browserCommunicate', zh: '浏览器标签页通信', en: 'browser communicate' },
    ],
  },
  {
    name: 'css',
    icon: 'user',
    zh: '关于css',
    en: 'about css',
    routes: [{ name: 'clearfloat', zh: '清除浮动', en: 'clearfloat' }],
  },
  {
    name: 'js',
    icon: 'user',
    zh: 'JS',
    en: 'JS',
    routes: [
      {
        name: 'object',
        zh: 'JS对象',
        en: 'js object',
        routes: [{ name: 'objhasproperty', zh: '对象是否含有属性', en: 'obj has property' }],
      },
    ],
  },
  {
    name: 'es6',
    icon: 'user',
    zh: 'ECMAScript 6',
    en: 'ECMAScript 6',
    routes: [
      {
        name: 'promise',
        zh: 'Promise方法',
        en: 'Promise fn',
      },
    ],
  },
  {
    name: 'vue',
    icon: 'user',
    zh: 'Vue 相关',
    en: 'about vue',
    routes: [
      {
        name: 'axios',
        zh: 'axios 相关',
        en: 'about axios',
        routes: [{ name: 'axiosdifference', zh: 'axios和同类区别', en: 'obj has property' }],
      },
      {
        name: 'vue-router',
        zh: 'vue-router',
        en: 'vue-router',
        routes: [],
      },
      {
        name: 'directive',
        zh: '指令',
        en: 'directive',
        routes: [{ name: 'v-el', zh: '指令v-el', en: 'v-el' }],
      },
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
    name: 'http',
    icon: 'user',
    zh: '关于http',
    en: 'about http',
    routes: [{ name: 'http2.0', zh: 'http2.0', en: 'http2.0' }],
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
];
