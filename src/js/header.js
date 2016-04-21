import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/header.scss';

export default $(function () {
	let header = [
		'<div class="header">',
		'	<div class="top-bar">',
		'		<div class="navs">',
		'			<div class="nav">',
		'				<span id="dLabel1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
		'					<a href="#">网站导航<img class="search" src="/imgs/index/top-bar-arrow.png"></a>',
		'				</span>',
		'				<ul class="dropdown-menu" aria-labelledby="dLabel1">',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'				</ul>',
		'			</div>',
		'			<div class="nav">',
		'				<span id="dLabel1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
		'					<a href="#">全部课程<img class="search" src="/imgs/index/top-bar-arrow.png"></a>',
		'				</span>',
		'				<ul class="dropdown-menu" aria-labelledby="dLabel1">',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'				</ul>',
		'			</div>','			<div class="nav">',
		'				<span id="dLabel1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
		'					<a href="#">考研工具<img class="search" src="/imgs/index/top-bar-arrow.png"></a>',
		'				</span>',
		'				<ul class="dropdown-menu" aria-labelledby="dLabel1">',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'				</ul>',
		'			</div>',
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
		'			<dt><div class="dropdown" id="nav-bar-dropdown">',
		'				<span id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
		'					<a href="#">专业课辅导<img class="arrow" src="/imgs/index/arrow-down.png"></a></a>',
		'				</span>',
		'				<ul class="dropdown-menu" aria-labelledby="dLabel">',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'					<li class="dropdown-content-row"><a href="#">哈哈哈</a></li>',
		'				</ul>',
		'			</div></dt>',
		'			<dt><a href="#">集训营</a></dt>',
		'			<dt><a href="#">一对一</a></dt>',
		'			<dt><a href="#">资料下载</a></dt>',
		'		</dl>',
		'	</div>',
		'</div>',
	].join('');

    $('body').prepend($(header));

    $('#nav-bar-dropdown').on('shown.bs.dropdown', function () {
    	$('.arrow', this).attr('src', '/imgs/index/arrow-up.png');
	});

	$('#nav-bar-dropdown').on('hidden.bs.dropdown', function () {
    	$('.arrow', this).attr('src', '/imgs/index/arrow-down.png');
	});
});
