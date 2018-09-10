import { queryPoetry } from '@/services';

export default {
  namespace: 'ListNewPage',
  state: {
    newPage: [],
  },

  effects: {
    *fetchPoetry(_, { call, put }) {
      const response = yield call(queryPoetry);
      yield put({
        type: 'savePoetries',
        payload: response.data
      });
    },
  },

  reducers: {
    savePoetries(state, action) {
      return {
        ...state,
        newPage: action.payload,
      };
    },
  },
};
