import {
  libraryGetServices,
  libraryStoreServices,
  libraryFileExists,
} from '@/services/library.service';
import { libraryModelProps } from '@/types/library';

/**
 * update article store - 更新文章仓库操作
 * @param {Array<object>} oldStore
 * @param {libraryModelProps} newart
 * @returns {any}
 */
let updateArticleStore = (oldStore: Array<object>, newart: libraryModelProps) => {
  const { libkey, articleContent } = newart;

  //is exist in store
  const isexist = oldStore.some(art => {
    return libkey in art;
  });

  //cover
  if (isexist) {
    return oldStore.map(art => {
      if (art[libkey]) {
        return (art[libkey] = {
          [libkey]: articleContent,
        });
      }
      return art;
    });
  }
  //add
  else {
    return [...oldStore, ...[{ [libkey]: articleContent }]];
  }
};

export default {
  namespace: 'library',

  state: {
    articleStore: JSON.parse(sessionStorage.getItem('articleStore')) || [], //文章仓库
    maxStock: 10, //最大库存数量
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
    *getLibraryData({ payload }, { call, put, select }) {
      console.info('%c Library - 知识库-数据获取及处理开始', 'color: #2480ff;');
      let { articleStore } = yield select(state => state.library); //article store list
      const filterArticle = articleStore.filter(art => art[payload.libkey]); //filter article list we want

      //article in library
      if (filterArticle && filterArticle.length > 0) {
        console.info('%c ========== 当前文章是 ===========', 'color: #71ff9c;');
        console.log({ article: filterArticle[0][payload.libkey] });
        console.info('%c ========== 库存中存在文章 ===========', 'color: #71ff9c;');
      }
      //article is not in library
      else {
        console.info('%c ========== 库存中不存在文章 ===========', 'color:#FF4148;');
        const response = yield call(libraryGetServices, payload);
        if (response && response.code === 200) {
          const articleContent = response.data;
          console.info('%c ========== 当前文章是 ===========', 'color: #71ff9c;');
          console.log({ article: articleContent });
          yield put({
            type: 'saveLibraryData',
            payload: {
              articleContent: articleContent,
              libkey: payload.libkey,
            },
          });
        }
      }
    },

    /**
     * store library article - 存储文章至图书馆
     * @param {any} payload
     * @param {any} callback
     * @param {any} call
     * @param {any} put
     * @returns {IterableIterator<any>}
     */
    *storeLibraryArticle({ payload, callback }, { call, put }) {
      const { contentText, libkey } = payload;

      const response = yield call(libraryStoreServices, payload);

      yield put({
        type: 'saveLibraryData',
        payload: {
          articleContent: contentText,
          libkey: libkey,
        },
      });

      callback(response.data); // 返
    },

    /**
     * article ( file or path )is exists in library
     * @param {any} payload
     * @param {any} callback
     * @param {any} call
     * @returns {IterableIterator<any>}
     */
    *islibraryFileExists({ payload, callback }, { call }) {
      const response = yield call(libraryFileExists, payload);
      callback(response.data); // 返
    },
  },

  reducers: {
    /**
     * save data 存储获取的数据
     * @param {libraryModelProps} state
     * @param {any} payload
     * @returns {{articleStore: Array<object>; maxStock: number; libkey?: string}}
     */
    saveLibraryData(state: libraryModelProps, { payload }) {
      console.info('%c Library - 知识库-数据存储开始', 'color:#2480ff;');

      /**
       * 库存中没有 => 合并库存 => 控制库存总量（截取库存)
       * 库存中有 => 覆盖 => 控制库存总量（截取库存)
       */
      const newStore = updateArticleStore(state.articleStore, payload).slice(-state.maxStock);

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
