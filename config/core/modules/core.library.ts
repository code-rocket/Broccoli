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
      {
        name: 'data-objects',
        zh: '数据类型',
        en: 'data objects',
        routes: [
          { name: 'kindsOfDataObjects', zh: '介绍JS数据类型', en: 'kinds of data objects' },
          { name: 'basic-reference', zh: '基本类型和引用类型', en: 'basic and reference' },
        ],
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
        name: 'global-API',
        zh: '全局 API',
        en: 'global API',
        routes: [{ name: 'delete', zh: 'vue.delete 使用', en: 'vue.delete' }],
      },
      {
        name: 'directive',
        zh: '指令',
        en: 'directive',
        routes: [{ name: 'v-el', zh: '指令v-el', en: 'v-el' }],
      },
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
        routes: [{ name: 'mode', zh: '路由模式区别', en: 'router-mode' }],
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
    name: 'engineering',
    icon: 'user',
    zh: '工程化',
    en: 'engineering',
    routes: [
      {
        name: 'stylelint',
        zh: 'css 审查',
        en: 'stylelint',
        routes: [{ name: 'stylelint-issues', zh: '问题', en: 'stylelint-issues' }],
      },
      {
        name: 'prod-package',
        zh: '打包',
        en: 'prod-package',
        routes: [{ name: 'prod-package-issues', zh: '打包问题', en: 'prod-package-issues' }],
      },
    ],
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
