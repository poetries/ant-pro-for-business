setTimeout(()=>{
	window.g_app && window.g_app._store &&window.g_app._store.dispatch({type:'login/changeLoginStatus'})
},200)