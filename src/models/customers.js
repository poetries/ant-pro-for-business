import { queryCustomers } from '@/services';

export default {
  namespace: 'customers',
  state: {
    data: [],
  },
  effects: {
    *fetchCustomers(_, { call, put }) {
      const response = yield call(queryCustomers);

      yield put({
        type: 'saveCustomers',
        payload: response.list
      });
    }
  },

  reducers: {
    saveCustomers(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
