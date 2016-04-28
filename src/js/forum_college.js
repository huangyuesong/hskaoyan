import '../styles/forum_college.scss';

import './header';

import './footer';

import headerForum from './header_forum';

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
	new headerForum([
		{
			name: `${college_name || ''}论坛`,
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
	]).render();

	for (let i = 0; i < 17; ++i) {
		$('.keyword-section').append($('.keyword-wrapper').eq(1).parent().clone());
	}

	for (let i = 0; i < 10; ++i) {
		$('.article ul').append($('.article ul li').eq(0).clone());
	}
});
