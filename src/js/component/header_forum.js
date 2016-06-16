import '../../styles/header_forum.scss';

import {
	serverUrl,
} from '../../../config';

import url from 'url';

let {
	college_id,
} = url.parse(location.href, true).query;

let path = url.parse(location.href, true).pathname;

export default class HeaderForum {
	constructor (subLinks, collegeName, type, isMarked) {
		this.subLinks = subLinks;
		this.collegeName = collegeName;
		this.type = type;
		this.isMarked = isMarked;

		this.html = [
			`<div class="header-forum">`,
				`<div class="section section4">`,
					`<div class="icon icon-banner2"></div>`,
				`</div>`,
				`<div class="section section3">`,
					`<ul class="navs">`,
						`<li class="nav"><span>${this.collegeName}</span><span class="icon icon-arrow-right-white"></span></li>`,
						`<li class="nav${path.indexOf('news') > -1 ? ' active' : ''}"><a href="news_college.html?college_id=${college_id}">院校资讯</a></li>`,
						`<li class="nav${path.indexOf('material') > -1 ? ' active' : ''}"><a href="material_college.html?college_id=${college_id}">专业科目</a></li>`,
						`<li class="nav${path.indexOf('forum') > -1 ? ' active' : ''}"><a href="forum_college.html?college_id=${college_id}">院校论坛</a></li>`,
						`<li class="fr"><span class="button">${this.isMarked ? '取消关注' : '＋ 关 注'}</span></li>`,
					`</ul>`,
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

		if (!college_id) {
			$('.section3 ul.navs', _header).css({padding: '0'});
			$('.section3 ul.navs li.nav:nth-child(1)', _header).hide();
			$('.section3 ul.navs li.nav:nth-child(2) > a', _header).prop('href', 'news_list.html');
			$('.section3 ul.navs li.nav:nth-child(3) > a', _header).prop('href', 'course_list.html');
			$('.section3 ul.navs li.nav:nth-child(4) > a', _header).prop('href', 'forum.html');
		}

		if (this.isMarked === undefined) {
			$('.section3 ul.navs li:last-of-type', _header).remove();
		}

		this.subLinks.map((_link)=> {
			$('.section5', _header)
			.append(
				$(`<div class="icon icon-arrow-right"></div>`)
			)
			.append(
				$(`<a href="${_link.href}" class="link">${_link.name}</a>`)
			);
		});

		$('.button', _header).click(evt=> {
			if (this.type === '版面') {
				$.ajax(`${serverUrl}/board_select.php?board_id=${college_id}&value=${this.isMarked ? 0 : 1}`, {
					method: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						alert(data.message);
						location.reload();
					},
				});
			} else if (this.type === '课程') {
				$.ajax(`${serverUrl}/course_select.php?course_id=${college_id}&value=${this.isMarked ? 0 : 1}`, {
					method: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						alert(data.message);
						location.reload();
					},
				});
			}
		});

		$('.container').prepend(_header);
	}
};