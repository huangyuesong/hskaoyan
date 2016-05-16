import '../../styles/header.scss';

import 'amazeui';

import {
	serverUrl,
	imagePrefix,
	loginUrl,
	SUCCESS,
	COMMON_ERROR,
	NEED_CAPTCHA,
} from '../../../config';

export default $(()=> {
	let header = function () {
		return $([
			'<div class="header">',
			'	<div class="top-bar">',
			'		<div class="navs">',
			'			<div class="nav popup">',
			'				<a href="javascript:">网站导航<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'			<div class="nav popup">',
			'				<a href="javascript:">全部课程<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'			<div class="nav popup">',
			'				<a href="javascript:">考研工具<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'		</div>',
			'		<div class="icons-wrapper">',
			'			<a href="app.html"><div class="icon icon-phone"></div></a>',
			'			<a href="javascript:"><div class="icon icon-weixin"></div></a>',
			'			<a href="javascript:"><div class="icon icon-weibo"></div></a>',
			'			<a href="javascript:"><div class="icon icon-qq"></div></a>',
			'		</div>',
			'	</div>',
			'	<div class="middle">',
			'		<div class="icon icon-logo"></div>',
			'		<div class="right">',
			'			<a href="javascript:"><div class="icon icon-search"></div></a>',
			'			<a href="javascript:" id="login-link"><span class="login">登录</span></a>',
			'			<a href="javascript:" id="register-link"><span class="register">注册</span></a>',
			'		</div>',
			'	</div>',
			'	<div class="nav-bar">',
			'		<dl>',
			'			<dt><a href="index.html">首页</a></dt>',
			'			<dt><a href="app.html">考研APP</a></dt>',
			'			<dt><a href="forum.html">论坛</a></dt>',
			'			<dt><a href="javascript:">公共课</a></dt>',
			'			<dt class="popup">',
			'				<a href="javascript:" class="title">专业课辅导</a>',
			'				<div class="icon icon-arrow"></div>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'						<p><a href="javascript:">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</dt>',
			'			<dt><a href="javascript:">集训营</a></dt>',
			'			<dt><a href="javascript:">一对一</a></dt>',
			'			<dt><a href="javascript:">资料下载</a></dt>',
			'		</dl>',
			'	</div>',
			'	<div class="am-modal" id="modal-login">',
			'		<div class="am-modal-dialog modal-login">',
			'			<div class="am-modal-hd">',
			'				<span class="icon icon-modal-logo"></span>',
			'				<span>登录慧升账号</span>',
			'				<a href="javascript:" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
			'			</div>',
			'			<div class="am-modal-bd">',
			'				<p><span class="icon icon-user"></span><input id="username" type="text" placeholder="请输入手机号" /></p>',
			'				<p><span class="icon icon-key"></span><input id="password" type="password" placeholder="请输入密码" /></p>',
			'				<p class="al">',
			'					<input type="checkbox" id="auto-login" checked /><span>下次自动登录</span>',
			'					<a class="forget" href="javascript:">忘记密码?</a>',
			'				</p>',
			'				<a href="javascript:"><span class="button">登录</span></a>',
			'				<p class="al">没有账户?',
			'					<a href="javascript:"><span class="color-link to-register">立即注册>></span></a>',
			'				</p>',
			'			</div>',
			'		</div>',
			'	</div>',
			'	<div class="am-modal" id="modal-register">',
			'		<div class="am-modal-dialog modal-register">',
			'			<div class="am-modal-hd">',
			'				<span class="icon icon-modal-logo"></span>',
			'				<span>慧升新用户注册</span>',
			'				<a href="javascript:" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
			'			</div>',
			'			<div class="am-modal-bd">',
			'				<p><input id="username" type="text" placeholder="请输入手机号码" /></p>',
			'				<p class="al">',
			'					<input id="captcha" class="captcha" type="text" placeholder="短信验证码" />',
			'					<a href="javascript:"><span id="get-captcha" class="button get-captcha">获取验证码</span></a>',
			'				</p>',
			'				<p><input id="password" type="password" placeholder="请输入密码" /></p>',
			'				<a href="javascript:"><span id="register" class="button">注册</span></a>',
			'				<p class="al">已有账户?',
			'					<a href="javascript:"><span class="color-link to-login">直接登录>></span></a>',
			'					<span class="fr">',
			'						<input type="checkbox" /><span>同意协议条款</span>',
			'					</span>',
			'				</p>',
			'			</div>',
			'		</div>',
			'	</div>',
			'	<div class="am-modal" id="modal-forget-password">',
			'		<div class="am-modal-dialog modal-forget-password">',
			'			<div class="am-modal-hd">',
			'				<span class="icon icon-modal-logo"></span>',
			'				<span>慧升用户手机验证码登录</span>',
			'				<a href="javascript:" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
			'			</div>',
			'			<div class="am-modal-bd">',
			'				<p><input type="text" placeholder="请输入手机号码" id="username" /></p>',
			'				<p class="al">',
			'					<input class="captcha" type="text" placeholder="短信验证码" id="captcha" />',
			'					<a href="javascript:"><span class="button get-captcha" id="get-captcha">获取验证码</span></a>',
			'				</p>',
			'				<a href="javascript:"><span class="button" id="login">登录</span></a>',
			'			</div>',
			'		</div>',
			'	</div>',
			'	<div class="am-modal" id="modal-captcha">',
			'		<div class="am-modal-dialog modal-captcha">',
			'			<div class="am-modal-hd">',
			'				<span class="icon icon-modal-logo"></span>',
			'				<span>请输入图片验证码</span>',
			'				<a href="javascript:" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
			'			</div>',
			'			<div class="am-modal-bd">',
			'				<p class="al">',
			'					<input type="hidden" id="type" value="login" />',
			'					<input class="captcha" type="text" placeholder="请输入右侧的验证码" id="image_code" />',
			'					<img id="captcha" src="" width="100" height="40">',
			'				</p>',
			'				<a href="javascript:"><span class="button">确定</span></a>',
			'			</div>',
			'		</div>',
			'	</div>',
			'</div>',
		].join(''));
	};

	$.ajax(`${serverUrl}/user_info.php`, {
		method: 'get',
		dataType: 'json',
		cache: false,
		success: (data, status)=> {
			let { result, list } = data;

			if (result === SUCCESS) {
				let { avatar, nick_name, message_count } = list;

				$('body').data('userInfo', JSON.stringify({
					avatar: avatar,
					nick_name: nick_name,
				}));

				$('.header .middle .right .login').remove();
				$('.header .middle .right .register').remove();

				let alreadyLogin = $([
					`<img class="avatar" width="30" height="30" src="${imagePrefix}${avatar}">`,
					`<span class="nick-name">${nick_name}</span>`,
					`<a href="personal_center.html#message"><span>站内消息<span class="unread">（${message_count}）</span></span></a>`,
					`<a href="personal_center.html"><span>个人中心</span></a>`,
					`<a href="javascript:" id="logout"><span>退出登录</span></a>`,
				].join(''));

				$('.header .middle .right').append(alreadyLogin);

				$('.middle .right #logout', header).click((evt)=> {
					DEVELOPMENT ? (()=> window.localStorage.removeItem('token'))(): ()=> null;

					$('body').removeData('userInfo');

			    	$.ajax(`${serverUrl}/logout.php`, {
						method: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							if (data.result_code === SUCCESS) {
								location.reload();
							}
						},
						error: (xhr, status, error)=> {
							alert('Network Error!');
						},
					});
			    });

			    if (window.onLogin) {
			    	window.onLogin();
			    }
			}
		},
		error: (xhr, status, error)=> {
			alert('Network Error!');
		},
	});

    $('body').prepend(new header());

    $('#login-link', $('.header')).click((evt)=> {
    	$('#modal-login', $('.header')).modal({
    		relatedTarget: this,
    	});
    });

    $('#register-link', $('.header')).click((evt)=> {
    	$('#modal-register', $('.header')).modal({
    		relatedTarget: this,
    	});
    });

    $('#modal-login .forget').click((evt)=> {
    	$('#modal-login', $('.header')).modal('toggle');
    	$('#modal-forget-password', $('.header')).modal('toggle');
    });

    $('#modal-register .to-login, #modal-login .to-register').click((evt)=> {
    	$('#modal-login', $('.header')).modal('toggle');
    	$('#modal-register', $('.header')).modal('toggle');
    });

    $('.button', $('#modal-login')).click((evt)=> {
    	let username = $('#username', $('#modal-login')).val();
    	let password = $('#password', $('#modal-login')).val();
    	let autoLogin = $('#auto-login', $('#modal-login')).prop('checked');

		$.ajax(`${loginUrl}`, {
			method: 'post',
			data: {
				user_tel: username,
				user_pwd: password,
				auto_login: autoLogin ? 1 : 0,
			},
			dataType: 'json',
			cache: false,
			success: (data, status)=> {
				let { result_code, message } = data;
				
				DEVELOPMENT ? (()=> window.localStorage.token = data.token)() : ()=> null;

				if (result_code === SUCCESS) {
					location.reload();
				} else if (result_code === NEED_CAPTCHA) {
					$('.header #modal-captcha #image_code').val('');
					$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
					$('.header #modal-login').modal('toggle');
					$('#type', $('#modal-captcha')).val('login');
					$('.header #modal-captcha').modal('toggle');
				} else {
					alert(message);
				}
			},
			error: (xhr, status, error)=> {
				alert('Network Error!');
			},
		});
    });

    $('#register', $('#modal-register')).click((evt)=> {
    	let username = $('#username', $('#modal-register')).val();
    	let password = $('#password', $('#modal-register')).val();
    	let captcha = $('#captcha', $('#modal-register')).val();

    	$.ajax(`${serverUrl}/register.php`, {
    		method: 'post',
    		data: {
    			user_tel: username,
    			user_pwd: password,
    			phone_code: captcha,
    		},
			dataType: 'json',
    		cache: false,
			success: (data, status)=> {
				let { result_code, message } = data;

				if (result_code === SUCCESS) {
					alert(message);
					location.reload();
				} else {
					alert(message)
				}
			},
			error: (xhr, status, error)=> {
				alert('Network Error!');
			},
    	});
    });

    $('#get-captcha', $('#modal-register')).click(onModalRegisterGetCaptchaClick);

     $('#login', $('#modal-forget-password')).click((evt)=> {
    	let username = $('#username', $('#modal-forget-password')).val();
    	let captcha = $('#captcha', $('#modal-forget-password')).val();

    	$.ajax(`${serverUrl}/register.php`, {
    		method: 'post',
    		data: {
    			user_tel: username,
    			phone_code: captcha,
    		},
			dataType: 'json',
    		cache: false,
			success: (data, status)=> {
				let { result_code, message } = data;

				if (result_code === SUCCESS) {
					alert(message);
					location.reload();
				} else {
					alert(message)
				}
			},
			error: (xhr, status, error)=> {
				alert('Network Error!');
			},
    	});
    });

    $('#get-captcha', $('#modal-forget-password')).click(onModalForgetPasswordGetCaptcha);

    $('.button', $('#modal-captcha')).click((evt)=> {
    	let image_code = $('#image_code', $('#modal-captcha')).val();
    	let type = $('#type', $('#modal-captcha')).val();

		if (type === 'login') {
			let username = $('#username', $('#modal-login')).val();
	    	let password = $('#password', $('#modal-login')).val();
	    	let autoLogin = $('#auto-login', $('#modal-login')).prop('checked');

			$.ajax(`${serverUrl}/login.php`, {
				method: 'post',
				data: {
					user_tel: username,
					user_pwd: password,
					auto_login: autoLogin ? 1 : 0,
					image_code: image_code,
				},
				dataType: 'json',
				cache: false,
				success: (data, status)=> {
					let { result_code, message } = data;
					
					if (result_code === SUCCESS) {
						location.reload();
					} else if (result_code === NEED_CAPTCHA) {
						$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
						alert(message);
					} else {
						alert(message);
					}
				},
				error: (xhr, status, error)=> {
					alert('Network Error!');
				},
			});
		} else if (type === 'register') {
			let username = $('#username', $('#modal-register')).val();

	    	$.ajax(`${serverUrl}/phone_code.php?user_tel=${username}&image_code=${image_code}`, {
	    		method: 'get',
				dataType: 'json',
	    		cache: false,
				success: (data, status)=> {
					let { result_code, message } = data;

					if (result_code === NEED_CAPTCHA) {
						$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
						alert(message);
					} else {
						alert(message);
						$('.header #modal-register').modal('toggle');
						$('.header #modal-captcha').modal('toggle');
					}
				},
				error: (xhr, status, error)=> {
					alert('Network Error!');
				},
	    	});
		} else if (type === 'captcha-login') {
			let username = $('#username', $('#modal-forget-password')).val();

	    	$.ajax(`${serverUrl}/phone_code.php?user_tel=${username}&image_code=${image_code}`, {
	    		method: 'get',
				dataType: 'json',
	    		cache: false,
				success: (data, status)=> {
					let { result_code, message } = data;

					if (result_code === NEED_CAPTCHA) {
						$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
						alert(message);
					} else {
						alert(message);
						$('.header #modal-forget-password').modal('toggle');
						$('.header #modal-captcha').modal('toggle');
					}
				},
				error: (xhr, status, error)=> {
					alert('Network Error!');
				},
	    	});
		}
    });
});

function onModalRegisterGetCaptchaClick (evt) {
	let username = $('#username', $('#modal-register')).val();

	$.ajax(`${serverUrl}/phone_code.php?user_tel=${username}`, {
		method: 'get',
		dataType: 'json',
		cache: false,
		success: (data, status)=> {
			let { result_code, message } = data;

			if (result_code === NEED_CAPTCHA) {
				$('.header #modal-captcha #image_code').val('');
				$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
				$('.header #modal-register').modal('toggle');
				$('#type', $('#modal-captcha')).val('register');
				$('.header #modal-captcha').modal('toggle');
			} else if (result_code === SUCCESS) {
				countDown('modal-register');

				alert(message);
			} else {
				alert(message);
			}
		},
		error: (xhr, status, error)=> {
			alert('Network Error!');
		},
	});
}

function onModalForgetPasswordGetCaptcha (evt) {
	let username = $('#username', $('#modal-forget-password')).val();

	$.ajax(`${serverUrl}/phone_code.php?user_tel=${username}`, {
		method: 'get',
		dataType: 'json',
		cache: false,
		success: (data, status)=> {
			let { result_code, message } = data;

			if (result_code === NEED_CAPTCHA) {
				$('.header #modal-captcha #image_code').val('');
				$('.header #modal-captcha #captcha').prop('src', `${serverUrl}/image_code.php`).load();
				$('.header #modal-forget-password').modal('toggle');
				$('#type', $('#modal-captcha')).val('captcha-login');
				$('.header #modal-captcha').modal('toggle');
			} else if (result_code === SUCCESS) {
				countDown('modal-forget-password');

				alert(message);
			} else {
				alert(message);
			}
		},
		error: (xhr, status, error)=> {
			alert('Network Error!');
		},
	});
}

function countDown (modal) {
	let second = 60;
	let button = $(`.header .${modal} #get-captcha`);
	button.addClass('disabled');
	button.unbind();
	button.text(`请等待60秒`);
	let interval = setInterval(()=> {
		--second;
		button.text(`请等待${second}秒`);

		if (second === 0) {
			clearInterval(interval);
			button.text(`获取验证码`);
			button.removeClass('disabled');
			if (modal === 'modal-register') {
				button.click(onModalRegisterGetCaptchaClick);
			} else if (modal === 'modal-forget-password') {
				button.click(onModalForgetPasswordGetCaptcha);
			}
		}
	}, 1000);
}