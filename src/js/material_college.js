import '../styles/material_college.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';

import url from 'url';

let {
	college_name,
	college_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id) {
	location.href = '/forum.html';
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
			name: `资料`,
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

	for (let i = 0; i < 4; ++i) {
		$('.introduction .center .upper ul').append($('.introduction .center .upper ul li').eq(0).clone());
	}

	for (let i = 0; i < 9; ++i) {
		$('.introduction .center .lower ul').append($('.introduction .center .lower ul li').eq(0).clone());
	}

	for (let i = 0; i < 7; ++i) {
		$('.introduction .right').append($('.introduction .right p').eq(1).clone());
	}

	for (let i = 0; i < 4; ++i) {
		$('.department-wrapper .content .row').append($('.department-wrapper .content .row .department').eq(i).clone());
	}

	for (let i = 0; i < 2; ++i) {
		$('.department-wrapper .content').append($('.department-wrapper .content .row').eq(i).clone());
	}
});
