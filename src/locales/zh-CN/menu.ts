import { router_library } from '../../../config/router/modules/router.library';
import { getLocalesMap } from '../../../config/core/distribute';

const locales_library_zh = getLocalesMap(router_library, 'menu', 'zh');
export default {
  'menu.home': '首页',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.exception': '异常页',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': '触发错误',
  'menu.system': '系统管理',
  'menu.system.user': '人员管理',
  'menu.system.user.groups': '用户组',
  'menu.system.user.users': '用户',
  'menu.system.permission': '权限管理',
  'menu.system.permission.permissions': '授权',
  'menu.system.permission.policies': '策略管理',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.test-demo': '测试示例',
  'menu.test-demo.test-page1': '测试页面1',
  'menu.test-demo.test-page2': '测试页面2',
  'menu.account.trigger': '触发报错',
  'menu.account.logout': '退出登录',
  ...locales_library_zh,
};
