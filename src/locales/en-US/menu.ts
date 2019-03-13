import { router_library } from '../../../config/router/modules/router.library';
import { getLocalesMap } from '../../../config/core/distribute';

const locales_library_en = getLocalesMap(router_library, 'menu', 'en');

export default {
  'menu.home': 'Home',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',
  'menu.exception': 'Exception',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'Trigger',
  'menu.system': '系统管理',
  'menu.system.user': '人员管理',
  'menu.system.user.groups': '用户组',
  'menu.system.user.users': '用户',
  'menu.system.permission': '权限管理',
  'menu.system.permission.permissions': '授权',
  'menu.system.permission.policies': '策略管理',
  'menu.account': 'Account',
  'menu.account.center': 'Account Center',
  'menu.account.settings': 'Account Settings',
  'menu.test-demo': 'test demo',
  'menu.test-demo.test-page1': 'test page1',
  'menu.test-demo.test-page2': 'test page2',
  'menu.account.trigger': 'Trigger Error',
  'menu.account.logout': 'Logout',
  ...locales_library_en,
};


//
// 'menu.algorithm': 'algorithm',
//   'menu.algorithm.sort': 'sort algorithm',
//   'menu.algorithm.sort.selection-Sort': 'selection sort',
//   'menu.algorithm.sort.bubble-Sort-v1': 'bubble sort v1',
//   'menu.algorithm.sort.bubble-Sort-v2': 'bubble sort v2',
// 'menu.algorithm': '算法',
//   'menu.algorithm.sort': '排序算法',
//   'menu.algorithm.sort.selection-Sort': '选择排序',
//   'menu.algorithm.sort.bubble-Sort-v1': '冒泡排序',
//   'menu.algorithm.sort.bubble-Sort-v2': '冒泡排序优化',
