import PathToRegexp from 'path-to-regexp';
import { urlToList } from '@/utils/pathTools';

export const getFlatMenuKeys = menuData => {
  let keys = [];
  menuData.forEach(item => {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

/**
 * 获取菜单匹配项
 * @param flatMenuKeys
 * @param path
 * @returns {any}
 */
export const getMenuMatches = (flatMenuKeys, path) =>
  flatMenuKeys.filter(item => {
    if (item) {
      return PathToRegexp(item).test(path);
    }
    return false;
  });

/**
 * 获取默认折叠的子菜单
 * @param props
 * @returns {any[]}
 */
export const getDefaultCollapsedSubMenus = props => {
  const {
    location: { pathname },
    flatMenuKeys,
  } = props;
  return urlToList(pathname)
    .map(item => getMenuMatches(flatMenuKeys, item)[0])
    .filter(item => item);
};
