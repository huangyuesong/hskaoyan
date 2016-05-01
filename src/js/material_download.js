import '../styles/material_download.scss';

import './header';

import './footer';

import headerForum from './header_forum';

import url from 'url';

let {
	college_name,
	college_id,
	course,
	material_id,
	material_name,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !course || !material_id) {
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
			name: `资料`,
			href: `material_course.html?college_id=${college_id}&college_name=${college_name}&course=${course}`,
		},
		{
			name: `${course}`,
			href: `material_course.html?college_id=${college_id}&college_name=${college_name}&course=${course}`,
		},
		{
			name: `${material_name}`,
			href: `material_download.html?college_id=${college_id}&college_name=${college_name}
				&course=${course}&material_id=${material_id}&material_name=${material_name}`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	$('.material-wrapper').append($('.footer').css({
		padding: '20px 0',
		background: 'white',
	}));

	for (let i = 0; i < 10; ++i) {
		$('ul.knowledge-point-wrapper')
			.append($('ul.knowledge-point-wrapper li').eq(0).clone());
	}
});
