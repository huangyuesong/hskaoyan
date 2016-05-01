import '../styles/material_course.scss';

import './header';

import './footer';

import headerForum from './header_forum';

import url from 'url';

import OtherSite from './other_site';

let {
	college_name,
	college_id,
	course,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !course) {
	location.href = '/forum.html';
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new headerForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `资料`,
			href: `material_course.html?college_id=${college_id}&college_name=${college_name}&course=${course}`,
		},
		{
			name: `${course}`,
			href: `material_course.html?college_id=${college_id}&college_name=${college_name}&course=${course}`,
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

	for (let i = 0; i < 19; i++) {
		$('.layout .right table tbody').append($('.layout .right table tbody tr').eq(1).clone());
	}
});
