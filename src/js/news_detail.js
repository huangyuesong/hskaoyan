import '../styles/news_detail.scss';

import './header';

import './footer';

import headerForum from './header_forum';

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

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new headerForum([
		{
			name: `${college_name}`,
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
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
			href: `news_detail.html?college_id=${college_id}&college_name=${college_name}
				&news_id=${news_id}&news_name=${news_name}`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

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
