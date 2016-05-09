import '../../styles/header.scss';

import 'amazeui';

import { serverUrl } from '../../../config';

export default (()=> {
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
			'					<input type="checkbox" id="auto-login" /><span>下次自动登录</span>',
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
			'				<p><input type="text" placeholder="请输入手机号码" /></p>',
			'				<p class="al">',
			'					<input class="captcha" type="text" placeholder="短信验证码" />',
			'					<a href="javascript:"><span class="button get-captcha">获取验证码</span></a>',
			'				</p>',
			'				<a href="javascript:"><span class="button">登录</span></a>',
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

			if (result !== -1) {
				let { avatar, nick_name, message_count } = list;

				$('.header .middle .right .login').remove();
				$('.header .middle .right .register').remove();

				let alreadyLogin = $([
					`<img class="avatar" width="30" height="30" src="http://hskaoyan.com/${avatar}">`,
					`<span class="nick-name">${nick_name}</span>`,
					`<a href="javascript:"><span>站内消息<span class="unread">（${message_count}）</span></span></a>`,
					`<a href="personal_center.html"><span>个人中心</span></a>`,
					`<a href="javascript:" id="logout"><span>退出登录</span></a>`,
				].join(''));

				$('.header .middle .right').append(alreadyLogin);
			}

			$('.middle .right #logout', header).click((evt)=> {
		    	$.ajax(`${serverUrl}/logout.php`, {
					method: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						if (data.result_code === 0) {
							location.reload();
						}
					},
					error: (xhr, status, error)=> {
						alert(error);
					},
				});
		    });
		},
		error: (xhr, status, error)=> {
			alert(error);
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

		$.ajax(`${serverUrl}/login.php`, {
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
				
				if (result_code === 0) {
					location.reload();
				} else {
					alert(message);
				}
			},
			error: (xhr, status, error)=> {
				alert(error);
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
				console.log(data)
			},
			error: (xhr, status, error)=> {
				alert(error);
			},
    	});
    });
})();
