import '../styles/forum_article.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';

import url from 'url';

let {
	college_name,
	college_id,
	article_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !article_id) {
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
			name: `论坛`,
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `查看帖子`,
			href: `javascript:`,
		},
	]).render();

	let logo = $(`<div class="icon icon-logo"></div>`);
	$('.section3', $('.header-forum')).prepend(logo);
	$('.section1', $('.header-forum')).remove();
	$('.section2', $('.header-forum')).remove();
	$('.section4', $('.header-forum')).remove();
	$('.middle', $('.header')).remove();
	$('.nav-bar', $('.header')).remove();
	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	let article = $('.article-wrapper');
	$('.article-title-wrapper').after(article.clone());
	$('.article-title-wrapper').after($('.article-wrapper').eq(0).clone());
	$('.article-title-wrapper').after($('.article-wrapper').eq(0).clone());
	$('.article-title-wrapper').after($('.article-wrapper').eq(0).clone());
	$('.article-title-wrapper').after($('.article-wrapper').eq(0).clone());
});
