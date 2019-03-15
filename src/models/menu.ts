import {
  MOGetBreadcrumbNameMap,
  MOFormatter,
  filterMenuDataByHide,
  filterMenuDataByClass,
} from '@/utils/menu';

export default {
  namespace: 'menu',

  state: {
    topMenuActive: 'library',
    allMenuData: [], //所有菜单栏数据 - 对应路由映射
    menuData: [], //当前菜单栏数据
    breadcrumbNameMap: {},
  },

  effects: {
    *getMenuData({ payload }, { put, select }) {
      let { topMenuActive } = yield select(state => state.menu);
      const { routes } = payload;

      const allMenuData = filterMenuDataByHide(MOFormatter(routes)); //过滤需要隐藏的菜单
      // const menuData = filterMenuDataByClass(allMenuData, topMenuActive);//依据class过滤菜单
      const menuData = allMenuData; //依据class过滤菜单

      //获取面包屑映射
      const breadcrumbNameMap = MOGetBreadcrumbNameMap(menuData);

      console.log('所有侧边栏数据：');
      console.log(allMenuData);
      console.log('初始化侧边栏数据：');
      console.log(menuData);

      yield put({
        type: 'save',
        payload: { menuData, allMenuData, breadcrumbNameMap },
      });
    },
    *setTopMenuActive({ payload }, { put }) {
      const { active } = payload;
      const topMenuActive = active; //rename
      console.log('顶部菜单 Active :', topMenuActive);
      yield put({
        type: 'save',
        payload: { topMenuActive },
      });
    },
    *toggleSideBar({ payload }, { put, select }) {
      const { active } = payload;
      if (!active) return;
      let { allMenuData } = yield select(state => state.menu);
      const menuData = filterMenuDataByClass(allMenuData, active); //依据class过滤菜单
      console.log('当前侧边栏数据：');
      console.log(menuData);
      yield put({
        type: 'save',
        payload: { menuData },
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
