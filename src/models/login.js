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
    *login({ payload }, { call, put }) {
     
      const {email, password, captcha} = payload
      const response = yield call(appLogin,email, password, captcha);

      console.log(response,'res===')
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.data && response.data.accountName) {
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

    *getCaptcha({ payload }, { call,put }) {

        const data = yield call(loadCode)

        yield put({
          type:'saveCaptcha',
          payload:{
            captchaUrl: `//${oAuthDomain}${data.data.url}`
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
      setAuthority(payload.currentAuthority);
      localStorage.clear()
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
    changeLoginStatus(state, { payload }) {
      let accountId = 9990001
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
          return {
            accountId,
            ...state,
            accountName,
            token,
            sign,
            userId : id
          }
      }
      return {
        ...state
      }

    }
  },
};
