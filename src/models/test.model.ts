import { testget, testpost } from '@/services/test.service';
// import { stringify } from 'qs';

export default {
  namespace: 'testServer',

  state: {
    testContent: {},
  },

  effects: {
    //调用请求的事件，获取数据
    *testGetEvent(_, { call, put }) {
      const response = yield call(testget);
      console.log(response);
      if (response && response.code === 200) {
        const testContent = response.data;
        console.log(testContent);
        yield put({
          type: 'saveTestContent',
          payload: testContent,
        });
      }
    },
    //调用请求的事件，获取数据
    *testPostEvent(_, { call, put }) {
      const response = yield call(testpost);
      console.log(response);
      if (response && response.code === 200) {
        const testContent = response.data;
        console.log(testContent);
        yield put({
          type: 'saveTestContent',
          payload: testContent,
        });
      }
    },
  },

  reducers: {
    //存储获取的数据
    saveTestContent(state, { payload }) {
      return {
        ...state,
        testContent: payload,
      };
    },
  },
};
