import { filterParams } from './utils';
import { routeKeyType } from '@/types/route';

let redirectIndex = 0;//重定向指向当前同级路由的索引

/**
 * get base component-path by level
 * @param level     - 路由层级
 * @param hasChildren
 * @returns {any}
 */
let baseComponentPathBylevel = (level, hasChildren) => {
  if (!hasChildren && level === 2) return './Library/Layout-Single';
  return {
    1: null,//模块主页
    2: './Library/Layout-Multiple',//模块子页首页
    3: './Library/SubModule',//模块子页分页
  }[level];
};

/**
 * get component path by level  - 在需要特殊处理的向路由信息操作中，根据不用情况，输出不同的对象
 * @param level       - 路由层级
 * @param fatherPath  - 父路由path
 * @param redirectPath - 重定向path
 * @returns {any}
 */
let componentPathBylevel = (level, fatherPath, redirectPath) => {
  return {
    1: { 'component': './Library/Index' },
    2: { 'component': './Library/Nav' },
    3: { 'redirect': fatherPath + '/' + redirectPath },
  }[level];
};


/**
 *  获取路由信息对象
 * @param map
 * @param {string} Class
 * @returns {any}
 */
export const getRouterMap = (map, Class: string = '') => {
  // let level = 0;
  /**
   * traverse - 路由信息循环操作本体
   * @param arr          上级路由数组数据
   * @param {ot} father  上级路由信息 - object
   */
  let traverse = (arr: Array<object>, father: routeKeyType = { path: '', component: '', meta: { level: 0, localeskey: '' } }): void => {
    if (!arr || arr.length === 0) return;
    arr.push({ path: null, component: null, meta: {} });//每一层循环的路由新增一个对象，作为后续重定向或者目录路由
    let redirectPath = '';//重定向path
    for (let child of arr) {
      let L = father.meta.level;
      child['meta'] = { level: ++L };
    }
    arr.forEach((child: routeKeyType, index) => {
      if (index === redirectIndex) redirectPath = child.name;//存储重定向指向当前同级路由的索引路径
      ['zh', 'en'].forEach(k => {
        child.meta[k] = child[k];
        delete child[k];
      });  //将路由根对象下的字段移到meta字段对象下,并删除原字段

      child.meta['key'] = child.name ? child.name : father.name + '-index';//name => key or father's name + 'index' => key
      child.meta.localeskey = child.name ? father.meta.localeskey + '.' + child.name : null;
      child.meta.class = Class;
      const l = child.meta.level;
      //常规向路由信息操作
      if (child.name) {
        const hasChildren = child.routes ? child.routes.length > 0 : false;
        child.component = baseComponentPathBylevel(l, hasChildren);//模板
        child.path = father.path ? `${father.path}/${child.name}` : `/${child.name}`;//路径
      }
      //需要特殊处理的向路由信息操作
      else {
        child.path = father.path;
        //合并对象，注册component / redirect 字段
        Object.assign(child, componentPathBylevel(l, father.path, redirectPath));
      }
      filterParams(child);//filter params in object - 深度清除对象中所有空属性值，以及空数组
      traverse(child.routes, child);
    });
  };
  traverse(map);
  return map;
};


/**
 * get locales map => menu language
 * @param {Array<object>} map
 * @param {string} type
 * @param {string} lan
 */
export const getLocalesMap = (map: Array<object>, type: string = '', lan: string = 'zh') => {
  let _newobj: object = {};
  let traverse = (map, type, lan): void => {
    map.forEach((child: routeKeyType) => {
      if (child.name && child.meta) {
        _newobj[type + child.meta.localeskey] = child.meta[lan];
      }
      if (child.routes) {
        traverse(child.routes, type, lan);
      }
    });
  };
  traverse(map, type, lan);
  return _newobj;
};





