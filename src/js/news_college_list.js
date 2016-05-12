import '../styles/news_college_list.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';

import url from 'url';

let {
	college_name,
	college_id,
	category_id,
	category_name,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !category_id || !category_name) {
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
			name: `资讯`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `${category_name}`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	for (let i = 0; i < 19; ++i) {
		$('.main-wrapper .list ul').append($('.main-wrapper .list ul li').eq(i).clone());
	}

	for (let i = 0; i < 6; ++i) {
		$('.latest-news ul').append($('.latest-news ul li').eq(i).clone());
	}

	for (let i = 0; i < 4; ++i) {
		$('.hot-course ul').append($('.hot-course ul li').eq(i).clone());
	}
});
