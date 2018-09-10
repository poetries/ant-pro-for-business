import {doLogin,loadCode as _loadCode,loadCodeUrl as _loadCodeUrl,userAccountKey as uKey} from './OpenLogin'

export const appDomain = 'api.ops.yesdat.com'
export const oAuthDomain = 'api.o.yesdat.com'
export const userAccountKey = uKey
export const appLogin = doLogin(appDomain,oAuthDomain,'6','aHR0cDovL2Jvc3NsaXRlLnllc2RhdC5jb20v',
	(key,value) => {
		try{
			console.log('value:',value)
			window.localStorage.setItem(key,value)
		}catch (e){}
	}
	)
export const loadCode = _loadCode(oAuthDomain)
export const loadCodeUrl = _loadCodeUrl(oAuthDomain)