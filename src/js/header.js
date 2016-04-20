import '../styles/header.scss';

import 'bootstrap/dist/css/bootstrap-min.css';
import 'bootstrap/dist/js/bootstrap-min.js';

export default $(function () {
	let header = [
		'<div class="header">',
		'	<div class="top-bar">',
		'		<div class="navs">',
		'			<span class="nav"><a href="#">网站导航</a></span>',
		'			<span class="nav"><a href="#">全部课程</a></span>',
		'			<span class="nav"><a href="#">考研工具</a></span>',
		'		</div>',
		'		<div class="icons">',
		'			<a href="#"><img class="icon" src="/imgs/index/phone.png"></a>',
		'			<a href="#"><img class="icon" src="/imgs/index/weixin.png"></a>',
		'			<a href="#"><img class="icon" src="/imgs/index/weibo.png"></a>',
		'			<a href="#"><img class="icon" src="/imgs/index/qq.png"></a>',
		'		</div>',
		'	</div>',
		'	<div class="middle">',
		'		<img class="logo" src="/imgs/index/logo.png">',
		'		<div class="right">',
		'			<a href="#"><img class="search" src="/imgs/index/search.png"></a>',
		'			<a href="#"><span class="login">登录</span></a>',
		'			<a href="#"><span class="register">注册</span></a>',
		'		</div>',
		'	</div>',
		'	<div class="nav-bar">',
		'		<dl>',
		'			<dt><a href="#">首页</a></dt>',
		'			<dt><a href="#">考研APP</a></dt>',
		'			<dt><a href="#">论坛</a></dt>',
		'			<dt><a href="#">公共课</a></dt>',
		'			<dt><a href="#">专业课辅导</a></dt>',
		'			<dt><a href="#">集训营</a></dt>',
		'			<dt><a href="#">一对一</a></dt>',
		'			<dt><a href="#">资料下载</a></dt>',
		'		</dl>',
		'	</div>',
		'</div>',
	].join('');

    $('body').prepend($(header));
});
