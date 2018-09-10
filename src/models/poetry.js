import { queryPoetry } from '@/services';

export default {
  namespace: 'poetry',
  state: {
    poetries: [],
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
        poetries: action.payload,
      };
    },
  },
};
