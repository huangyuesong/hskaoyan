import url from 'url';

export const [SUCCESS, COMMON_ERROR, NEED_LOGIN, NEED_CAPTCHA] = [0, 1, 2, 3];
export const serverUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php' : '/html_php';
export const loginUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php/login_local.php' : '/html_php/login.php';
export const imagePrefix = DEVELOPMENT ? 'http://www.hskaoyan.com/' : '';
export const _resultCodeFilter = (()=> {
	$(document).ajaxSuccess((evt, xhr, options)=> {
		if (url.parse(options.url, true).pathname.indexOf('user_info.php') > -1) return;
		let { result_code } = JSON.parse(xhr.responseText);
		if (result_code) {
			if (result_code === NEED_LOGIN) {
				$('#modal-login', $('.header')).modal({
		    		relatedTarget: this,
		    	});
			}
		}
	});
})();
export const _devAjaxSend = (()=> {
	DEVELOPMENT ? (()=> {
    	$(document).ajaxSend((evt, xhr, options)=> {
    		if (!window.localStorage.token) return;
    		if (options.type === 'GET') {
    			options.url += options.url.indexOf('&') > -1 ? `&token=${window.localStorage.token}` : 
    				options.url.indexOf('?') > -1 ? `&token=${window.localStorage.token}` : `?token=${window.localStorage.token}`;
    		} else if (options.type === 'POST') {
    			options.data += `&token=${window.localStorage.token}`
    		}
    	});
    })() : ()=> null;
})();