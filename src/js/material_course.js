import '../styles/material_course.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';

import url from 'url';

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
	new HeaderForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `资料`,
			href: `material_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `${course}`,
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

	for (let i = 0; i < 19; i++) {
		$('.layout .right table tbody').append($('.layout .right table tbody tr').eq(1).clone());
	}
});
