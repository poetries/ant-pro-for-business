import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { appLogin, loadCode,loadCodeUrl,appDomain } from '@/services';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';


export default {
  namespace: 'login',

  state: {
    status: undefined,
    currentUser: {
      name:'静观流叶'
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
     
      const {email, password, code, accountId} = payload
      const response = yield call(appLogin(email, password, code, accountId));

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.status === 'ok') {
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.startsWith('/#')) {
              redirect = redirect.substr(2);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *getCaptcha({ payload }, { call }) {
      
      try {
        const data = yield call(loadCode)
        yield put({
          type:'saveCaptcha',
          payload:{
            captchaUrl:`${appDomain}${data.url}`
          }
        })
      } catch(e){

      }
      
     },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
    saveCaptcha(state,{payload:{captchaUrl}}) {
      return {
        ...state,
        captchaUrl,
      };
    }
  },
};
