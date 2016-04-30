import '../styles/news_college.scss';

import './header';

import './footer';

import headerForum from './header_forum';

import url from 'url';

import 'amazeui';

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
			name: `${college_name || ''}资讯`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
	]).render();
});
