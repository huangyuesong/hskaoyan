import '../styles/news_detail.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	news_id,
	news_name,
} = url.parse(location.href, true).query;

if (!college_id || !news_id || !news_name) {
	location.href = '/forum.html';
}

class NewsDetail {
	constructor () {
		this.model = {
			avatar: '',
			title : '',
			author: '',
			is_locked: 0,
			comment_count: 0,
			edit_time: '',
			media: 0,
			content: '',
		};
		this.controller = {
			onLogin: ()=> {
				let { avatar } = JSON.parse($('body').data('userInfo'));

				if (avatar) {
					this.model.avatar = avatar;
					this.view.setComment();
				}
			},
			setDetail: ()=> {
				$.ajax({
					url: `${serverUrl}/news_view.php?news_id=${news_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { title, author, is_locked, comment_count, edit_time, media, content } = data.news_array;

						this.model.title = title;
						this.model.author = author;
						this.model.is_locked = is_locked;
						this.model.comment_count = comment_count;
						this.model.edit_time = edit_time;
						this.model.media = media;
						this.model.content = content;

						this.view.setDetail();
					},
					error: (xhr, status, error)=> {
						alert('Network Error!');
					},
				});
			},
			setCollegeName: ()=> {
				if (!college_name) {
					$.ajax({
						url: `${serverUrl}/board_list.php?board_id=${college_id}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.college_name = data.list.college;
							this.view.setCollegeName();
						},
						error: (xhr, status, error)=> {
							alert('Network Error!');
						},
					});
				}
			},
		};
		this.view = {
			setCollegeName: ()=> {
				$('.container .header-forum .section5 > a').eq(1).html(this.model.college_name);
				$('.container .header-forum .section5 > a').eq(1).prop('href', 
					`news_college.html?college_id=${college_id}&college_name=${this.model.college_name}`);
			},
			setComment: ()=> {
				let { avatar } = this.model;

				$('.container .comment #avatar').prop('src', `${imagePrefix}${avatar}`).load();
			},
			setDetail: ()=> {
				let { title, author, is_locked, comment_count, edit_time, content } = this.model;

				let detailWrapper = $([
					`<p class="news-name">${title}</p>`,
					`<p class="instruction">`,
						`<span>来源：${author}</span>`,
						`<span>${edit_time}</span>`,
						`<span>相关院校：</span>`,
						`<a class="college-link" 
							href="news_college.html?college_id=${college_id}&college_name=${college_name}">${college_name}</a>`,
					`</p>`,
					`<div class="news-content">`,
						`<p>${content}</p>`,
					`</div>`,
				].join(''));

				$('.container .main-wrapper .left').empty();
				$('.container .main-wrapper .left').append(detailWrapper);
			},
		};
	}

	init () {
		window.onLogin = this.controller.onLogin;
		this.controller.setCollegeName();
		this.controller.setDetail();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `资讯`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `${news_name}`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsDetail().init();

	for (let i = 0; i < 6; ++i) {
		$('.score-over-year ul.link').append($('.score-over-year ul.link li').eq(i).clone());
	}

	for (let i = 0; i < 6; ++i) {
		$('.latest-news ul').append($('.latest-news ul li').eq(i).clone());
	}

	for (let i = 0; i < 4; ++i) {
		$('.hot-course ul').append($('.hot-course ul li').eq(i).clone());
	}
});
