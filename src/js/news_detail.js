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
	category_id,
	category_name,
	news_id,
	news_name,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !news_id || !news_name) {
	location.href = '/forum.html';
}

class NewsDetail {
	constructor () {
		this.model = {
			avatar: '',
		};
		this.controller = {
			bindEvents: ()=> {},
			onLogin: ()=> {
				let { avatar } = JSON.parse($('body').data('userInfo'));

				if (avatar) {
					this.model.avatar = avatar;
					this.view.setComment();
				}
			},
		};
		this.view = {
			setComment: ()=> {
				let { avatar } = this.model;

				$('.container .comment #avatar').prop('src', `${imagePrefix}${avatar}`).load();
			},
		};
	}

	init () {
		window.onLogin = this.controller.onLogin;
		this.controller.bindEvents();
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
			name: `${category_name}`,
			href: `news_college_list.html?college_id=${college_id}&college_name=${college_name}
				&category_id=${category_id}&category_name=${category_name}`,
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
