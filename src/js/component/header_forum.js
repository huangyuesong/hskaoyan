import '../../styles/header_forum.scss';

import {
	serverUrl,
} from '../../../config';

import url from 'url';

let {
	board_id,
	course_id,
	article_id,
	news_id,
} = url.parse(location.href, true).query;

let path = url.parse(location.href, true).pathname;

export default class HeaderForum {
	constructor (type, isMarked) {
		this.type = type;
		this.isMarked = isMarked;
	}

	render () {
		let url = `${serverUrl}/board_info.php?__=__`
			.concat(board_id ? `&board_id=${board_id}` : ``)
			.concat(course_id ? `&course_id=${course_id}` : ``)
			.concat(article_id ? `&topic_id=${article_id}` : ``)
			.concat(news_id ? `&news_id=${news_id}` : ``);

		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json',
			cache: false,
			success: (data, status)=> {
				let { board, board_id } = data;

				let _header = $([
					`<div class="header-forum">`,
						`<div class="section section4">`,
							`<div class="icon icon-banner2"></div>`,
						`</div>`,
						`<div class="section section3">`,
							`<ul class="navs">`,
								`<li class="nav"><span class="college-name"></span><span class="icon icon-arrow-right-white"></span></li>`,
								`<li class="nav${path.indexOf('news') > -1 ? ' active' : ''}"><a href="news_college.html?board_id=${board_id}">院校资讯</a></li>`,
								`<li class="nav${path.indexOf('material') > -1 || path.indexOf('chapter') > -1 ? ' active' : ''}"><a href="material_college.html?board_id=${board_id}">专业科目</a></li>`,
								`<li class="nav${path.indexOf('forum') > -1 ? ' active' : ''}"><a href="forum_college.html?board_id=${board_id}">院校论坛</a></li>`,
								`<li class="fr"><span class="button">${this.isMarked ? '取消关注' : '＋ 关 注'}</span></li>`,
							`</ul>`,
						`</div>`,
					`</div>`,
				].join(''));

				$('.college-name', _header).text(board);

				if (!board) {
					$('.section3 ul.navs', _header).css({padding: '0'});
					$('.section3 ul.navs li.nav:nth-child(1)', _header).hide();
					$('.section3 ul.navs li.nav:nth-child(2) > a', _header).prop('href', 'news_list.html');
					$('.section3 ul.navs li.nav:nth-child(3) > a', _header).prop('href', 'course_list.html');
					$('.section3 ul.navs li.nav:nth-child(4) > a', _header).prop('href', 'forum.html');
				}

				if (this.isMarked === undefined) {
					$('.section3 ul.navs li:last-of-type', _header).remove();
				}

				$('.button', _header).click(evt=> {
					if (this.type === '版面') {
						$.ajax(`${serverUrl}/board_select.php?board_id=${board_id}&value=${this.isMarked ? 0 : 1}`, {
							method: 'get',
							dataType: 'json',
							cache: false,
							success: (data, status)=> {
								alert(data.message);
								location.reload();
							},
						});
					} else if (this.type === '课程') {
						$.ajax(`${serverUrl}/course_select.php?course_id=${board_id}&value=${this.isMarked ? 0 : 1}`, {
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
			},
			error: (xhr, status, error)=> {
				$('.container').prepend($([
					`<div class="header-forum">`,
						`<div class="section section4">`,
							`<div class="icon icon-banner2"></div>`,
						`</div>`,
						`<div class="section section3">`,
							`<ul class="navs">`,
								`<li class="nav"><span class="college-name"></span><span class="icon icon-arrow-right-white"></span></li>`,
								`<li class="nav${path.indexOf('news') > -1 ? ' active' : ''}"><a href="news_list.html">院校资讯</a></li>`,
								`<li class="nav${path.indexOf('material') > -1 || path.indexOf('chapter') > -1 ? ' active' : ''}"><a href="course_list.html">专业科目</a></li>`,
								`<li class="nav${path.indexOf('forum') > -1 ? ' active' : ''}"><a href="forum.html">院校论坛</a></li>`,
							`</ul>`,
						`</div>`,
					`</div>`,
				].join('')));
			},
		});
	}
};