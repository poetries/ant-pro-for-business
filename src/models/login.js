import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { appLogin, loadCode,loadCodeUrl,oAuthDomain } from '@/services';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';


export default {
  namespace: 'login',

  state: {
    status: undefined,
    accountName:''
  },

  effects: {
    *loginAfter({ payload }, { call, put }) {
      const {data} = payload
      yield put({
        type: 'changeLoginStatus',
        payload: data,
      });
      // Login successfully
      if (data && data.accountName) {
        reloadAuthorized();//重新授权路由
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

    *getCaptcha({ payload }, { call,put }) {

        const data = yield call(loadCode)
        yield put({
          type:'saveCaptcha',
          payload:{
            captchaUrl: `//${oAuthDomain}${data.data.data.url}`
          }
        })

     },

    *logout(_, { put }) {
      yield put({
        type: 'clearLoginInfo',
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
    saveCaptcha(state,{payload}) {

      return {
        ...state,
        captchaUrl:payload.captchaUrl
      };
    },
    clearLoginInfo(state,{payload}){
      localStorage.clear()
      return state
    },
    changeLoginStatus(state, { payload }) {

      let accountId = localStorage.getItem('__account_id__')
      let auth = JSON.parse(localStorage.getItem('auth'))
      if (!auth||!auth.data)return state
      let accountKeyStr = 'userAccount|'
      const {data : {id,token}} = auth
      if(auth && id){
        accountKeyStr += id + '|' + accountId
      }
      const accountStr = localStorage.getItem(accountKeyStr)

      if (accountStr && accountStr.length) {
        const account = JSON.parse(accountStr)
          const {data: {accountName, sign}} = account
          const loginInfo =  {
            accountId,
            accountName,
            token,
            sign,
            userId : id
          }
          localStorage.setItem('__loginInfo__',JSON.stringify(loginInfo))
          return {
            ...state,
            ...loginInfo
          }
      }
      return {
        ...state
      }

    }
  },
};
