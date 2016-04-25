import '../styles/header.scss';

export default $(()=> {
	let header = function () {
		return $([
			'<div class="header">',
			'	<div class="top-bar">',
			'		<div class="navs">',
			'			<div class="nav popup">',
			'				<a href="#">网站导航<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'			<div class="nav popup">',
			'				<a href="#">全部课程<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'			<div class="nav popup">',
			'				<a href="#">考研工具<div class="icon icon-top-bar-arrow"></div></a>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</div>',
			'		</div>',
			'		<div class="icons-wrapper">',
			'			<a href="app.html"><div class="icon icon-phone"></div></a>',
			'			<a href="#"><div class="icon icon-weixin"></div></a>',
			'			<a href="#"><div class="icon icon-weibo"></div></a>',
			'			<a href="#"><div class="icon icon-qq"></div></a>',
			'		</div>',
			'	</div>',
			'	<div class="middle">',
			'		<div class="icon icon-logo"></div>',
			'		<div class="right">',
			'			<a href="#"><div class="icon icon-search"></div></a>',
			'			<a href="#"><span class="login">登录</span></a>',
			'			<a href="#"><span class="register">注册</span></a>',
			'		</div>',
			'	</div>',
			'	<div class="nav-bar">',
			'		<dl>',
			'			<dt><a href="index.html">首页</a></dt>',
			'			<dt><a href="#">考研APP</a></dt>',
			'			<dt><a href="forum.html">论坛</a></dt>',
			'			<dt><a href="#">公共课</a></dt>',
			'			<dt class="popup">',
			'				<a href="#" class="title">专业课辅导</a>',
			'				<div class="icon icon-arrow"></div>',
			'				<div class="popup-wrapper">',
			'					<div class="content">',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'						<p><a href="#">正在建设中...</a></p>',
			'					</div>',
			'				</div>',
			'			</dt>',
			'			<dt><a href="#">集训营</a></dt>',
			'			<dt><a href="#">一对一</a></dt>',
			'			<dt><a href="#">资料下载</a></dt>',
			'		</dl>',
			'	</div>',
			'</div>',
		].join(''));
	};

    $('body').prepend(new header());
});
