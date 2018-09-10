// import { queryNotices } from '@/services/api';

export default {
  namespace: 'global',

  state: {
    notices: [],
    collapsed: false
  },

  effects: {
    // *fetchNotices(_, { call, put }) {
    //   const data = yield call(queryNotices);
    //   yield put({
    //     type: 'saveNotices',
    //     payload: data,
    //   });
    //   yield put({
    //     type: 'user/changeNotifyCount',
    //     payload: data.length,
    //   });
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    }
  },
  
  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
