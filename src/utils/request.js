/**
 * 调用方式
request({
    endpoint: `/v1/advertiser-policy-reports`,
		query:{
      headers:{},
      method:'get',
			data:{ // 参数

      }
		}
})
 **/

import {camelizeKeys, decamelizeKeys} from 'humps'
import axios from 'axios'
import { message,notification } from 'antd'
import qs from 'qs'
import router from 'umi/router';
import eCodeMsg from '../../config/errorCode'
import config from '../../config/projectConfig'

const API_ROOT =  '//'+config.apiDomain

const callApi = (endpoint, query = null) => {
     let fullUrl = endpoint
     const {method = 'get', data , headers = {}} = query || {}

     if (method.toLowerCase() === 'get') {
         const q = decamelizeKeys(data||{})
         if (q && q.query_optional) {
             Object.keys(q.query_optional).forEach(v => {
                 q.query_optional[v] = JSON.parse(q.query_optional[v])
             })

         }
         const ps = Object.keys(q).map(v => {
             if(v && q[v])
                 return `${v}=${q[v]}`
             else
                 return ''
         }).filter(v => v && v.length)
         if (fullUrl.indexOf('?') === -1) {
             fullUrl += '?'
         } else {
             fullUrl += '&'
         }
         fullUrl +=  '&q=' + encodeURIComponent(JSON.stringify(q))
     }
     const config = {
         method,
         baseURL: API_ROOT,
         url: fullUrl,
         data,
         transformRequest: [
             data => {
                 if (data && (data.toString() !== '[object FormData]')) {
                     return JSON.stringify(decamelizeKeys(data))
                 }
                 return data
             }
         ],
         headers
     }

     method.toLowerCase() === 'post' && (delete config.headers)
     return axios(config)
 }

 export default (options)=> {

   if(!(options instanceof Object)){
     throw new Error('Expected an object of options')
   }
   let {endpoint,query} = options || {}

   if (typeof endpoint !== 'string') {
       throw new Error('Specify a string endpoint URL.')
   }
   let __loginInfo__ = localStorage.getItem('__loginInfo__')
   let loginInfo = null
   if(__loginInfo__){
     loginInfo = JSON.parse(__loginInfo__)
   }
   // console.log('loginInfo:',loginInfo)

   if (loginInfo && loginInfo.sign && loginInfo.token) {
       if (endpoint.indexOf('?') !== -1) {
           endpoint += '&'
       } else {
           endpoint += '?'
       }
       endpoint += `sign=${loginInfo.sign}&access_token=${loginInfo.token}&account_id=${loginInfo.accountId}&user_id=${loginInfo.userId}`
   }

   return callApi(endpoint, query).then(
       res => {
         if(res.status === 204){
             return {}
         }
         const json = camelizeKeys(res.data)

         if (json.code !== 0) {
             return Promise.reject({data: json})
         }
         return camelizeKeys(json.data)
       },
      error => {
         const {code='',message='', status} = (error.response||{}).data||{}
         console.log('error:',error.response)

         switch(status){
           case 401:
              window.g_app._store.dispatch({type: 'login/logout'});
              break
          case 403:
              router.push('/exception/403');
              break
          case 500:
              router.push('/exception/500');
              break
          case 404:
              router.push('/exception/404');
              break
          default:
              notification.error({message: '服务异常'});
         }

         return Promise.reject(error)
       })
 }
