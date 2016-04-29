import '../styles/header_forum.scss';

export default class headerForum {
	constructor (subLinks) {
		this.subLinks = subLinks || [];

		this.html = [
			`<div class="header-forum">`,
				`<div class="section section1">`,
					`<div class="icon icon-ad fl"><a href="javascript:void(0)"></a></div>`,
					`<div class="icon icon-banner"><a href="javascript:void(0)"></a></div>`,
					`<div class="icon icon-ad fr"><a href="javascript:void(0)"></a></div>`,
				`</div>`,
				`<div class="section section2">`,
					`<div class="icon icon-logo"></div>`,
					`<div class="login fr">`,
						`<table>`,
							`<tbody>`,
								`<tr>`,
									`<td><span>用户名</span></td>`,
									`<td><input type="text"></input></td>`,
									`<td><input type="checkbox"></input><span>自动登录</span></td>`,
									`<td><span><a href="javascript:void(0)">找回密码</a></span></td>`,
								`</tr>`,
								`<tr>`,
									`<td><span>密码</span></td>`,
									`<td><input type="password"></input></td>`,
									`<td><button>登录</button></td>`,
									`<td><span class="register">`,
									`<a href="javascript:void(0)">注册</a>`,
									`</span></td>`,
								`</tr>`,
							`</tbody>`,
						`</table>`,
					`</div>`,
				`</div>`,
				`<div class="section section3">`,
					`<ul class="navs">`,
						`<li class="nav"><a href="forum.html">考研论坛</a></li>`,
						`<li class="nav"><a href="app.html">考研APP</a></li>`,
						`<li class="nav popup">`,
							`<a href="javascript:void(0)">考研资讯</a>`,
							`<div class="popup-wrapper">`,
								`<div class="content">`,
									`<ul>`,
										`<li><a href="javascript:void(0)">院校信息</a></li>`,
										`<li><a href="javascript:void(0)">导师介绍</a></li>`,
										`<li><a href="javascript:void(0)">分数线</a></li>`,
										`<li><a href="javascript:void(0)">推免保研</a></li>`,
										`<li><a href="javascript:void(0)">在职硕士</a></li>`,
										`<li><a href="javascript:void(0)">学费补助</a></li>`,
										`<li><a href="javascript:void(0)">专业介绍</a></li>`,
										`<li><a href="javascript:void(0)">考研复试</a></li>`,
										`<li><a href="javascript:void(0)">考研调剂</a></li>`,
										`<li><a href="javascript:void(0)">考研经验</a></li>`,
										`<li><a href="javascript:void(0)">联系方式</a></li>`,
									`</ul>`,
								`</div>`,
							`</div>`,
						`</li>`,
						`<li class="nav"><a href="javascript:void(0)">考研资料</a></li>`,
						`<li class="nav"><a href="javascript:void(0)">辅导班推荐</a></li>`,
						`<li class="nav"><a href="javascript:void(0)">联系慧升</a></li>`,
					`</ul>`,
					`<div class="search fr">`,
						`<input type="text" placeholder="请输入搜索内容"></input>`,
						`<button></button>`,
					`</div>`,
				`</div>`,
				`<div class="section section4">`,
					`<div class="icon icon-banner2"></div>`,
				`</div>`,
				`<div class="section section5">`,
					`<div class="icon icon-home"><a href="index.html"></a></div>`,
					`<div class="icon icon-arrow-right"></div>`,
					`<a href="forum.html" class="link">考研论坛</a>`,
				`</div>`,
			`</div>`,
		].join('');
	}

	render () {
		let _header = $(this.html);

		this.subLinks.map((_link)=> {
			$('.section5', _header)
			.append(
				$(`<div class="icon icon-arrow-right"></div>`)
			)
			.append(
				$(`<a href="${_link.href}" class="link">${_link.name}</a>`)
			);
		});

		$('.container').prepend(_header);
	}
};
