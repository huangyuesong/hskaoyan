import '../styles/news_college.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id) {
	location.href = '/forum.html';
}

class NewsCollege {
	constructor () {
		this.model = {
			categories: [],
		};
		this.controller = {
			bindEvents: ()=> {},
			setCategory: ()=> {
				$.ajax({
					url: `${serverUrl}/news_type.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.categories = data.list;
						this.view.setCategory();
					},
					error: (xhr, status, error)=> {
						alert('Network Error!');
					},
				});
			},
		};
		this.view = {
			setCategory: ()=> {

			},
		};
	}

	init () {
		this.controller.setCategory();
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
			href: `javascript:`,
		},
	]).render();

	new OtherSite([
		{name: '百度', href: 'http://www.baidu.com'},
		{name: '百度', href: 'http://www.baidu.com'},
		{name: '百度', href: 'http://www.baidu.com'},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsCollege().init();

	for (let i = 0; i < 4; ++i) {
		$('.introduction .center .upper ul').append($('.introduction .center .upper ul li').eq(0).clone());
	}

	for (let i = 0; i < 12; ++i) {
		$('.introduction .center .lower ul').append($('.introduction .center .lower ul li').eq(0).clone());
	}

	for (let i = 0; i < 7; ++i) {
		$('.apply .left ul').append($('.apply .left ul li').eq(0).clone());
	}

	for (let i = 0; i < 6; ++i) {
		$('.apply .center .am-tabs-bd ul').append($('.apply .center .am-tabs-bd ul li').eq(0).clone());
	}

	for (let i = 0; i < 21; ++i) {
		$('.apply .right tbody').append($('.apply .right tbody tr').eq(0).clone());
	}
});
