import { libraryServices } from '@/services/library.service';
import { libraryModelProps } from '@/types/library';

export default {
  namespace: 'library',

  state: {
    articleStore: JSON.parse(sessionStorage.getItem('articleStore')) || [],//文章仓库
    maxStock: 10,//最大库存数量
  },

  effects: {
    /**
     * get library content 调用请求的事件，获取数据
     * @param {any} payload
     * @param {any} call
     * @param {any} put
     * @param {any} select
     * @returns {IterableIterator<any>}
     */
    * getLibraryData({ payload }, { call, put, select }) {
      console.info('%c Library - 知识库-数据获取及处理开始', 'color: #2480ff;');
      let { articleStore } = yield select(state => state.library);//article store list
      const filterArticle = articleStore.filter(art => art[payload.libkey]);//filter article list we want
      //库存中存在文章
      if (filterArticle && filterArticle.length > 0) {
        console.info('%c ========== 当前文章是 ===========', 'color: #71ff9c;');
        console.log({ article: filterArticle[0][payload.libkey] });
        console.info('%c ========== 库存中存在文章 ===========', 'color: #71ff9c;');
        yield put({
          type: 'saveLibraryData',
          payload: {
            instock: true,//库存中有
            libkey: payload.libkey,
          },
        });
      }
      //库存中不存在文章
      else {
        console.info('%c ========== 库存中不存在文章 ===========', 'color:#FF4148;');
        const response = yield call(libraryServices, payload);
        if (response && response.code === 200) {
          const articleContent = response.data;
          console.info('%c ========== 当前文章是 ===========', 'color: #71ff9c;');
          console.log({ article: articleContent });
          yield put({
            type: 'saveLibraryData',
            payload: {
              instock: false,//库存中没有
              articleContent: articleContent,
              libkey: payload.libkey,
            },
          });
        }
      }
    },
  },

  reducers: {
    /**
     * save data 存储获取的数据
     * @param state
     * @param {any} payload
     * @returns {{articleContent: any; articleStore: any}}
     */
    saveLibraryData(state: libraryModelProps, { payload }) {
      console.info('%c Library - 知识库-数据存储开始', 'color:#2480ff;');
      /**
       * 库存中没有 => 合并库存 => 控制库存总量（截取库存)
       * 库存中有 => 直接后去原库存 => 控制库存总量（截取库存)
       */
      const newStore = (!payload.instock ?
        [...state.articleStore, ...[{ [payload.libkey]: payload.articleContent }]]
        : state.articleStore).slice(-state.maxStock);
      sessionStorage.setItem('articleStore', JSON.stringify(newStore));
      //store data
      return {
        ...state,
        ...{
          articleStore: newStore,
        },
      };
    },
  },
};
