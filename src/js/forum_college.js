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
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `论坛`,
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
	]).render();

	$('.keyword-section p:first-of-type a').click((evt)=> {
		if ($(evt.target).attr('class') === 'up') {
			$(evt.target).html('<span class="icon icon-arrow-down-gray"></span>展开');
			$('.keyword-section p:first-of-type').nextAll().css({display: 'none'});
			$(evt.target).removeClass('up').addClass('down');
		} else if ($(evt.target).attr('class') === 'down') {
			$(evt.target).html('<span class="icon icon-arrow-up"></span>收起');
			$('.keyword-section p:first-of-type').nextAll().css({display: 'inline-block'});
			$(evt.target).removeClass('down').addClass('up');
		}
	});

	for (let i = 0; i < 17; ++i) {
		$('.keyword-section').append($('.keyword-wrapper').eq(1).parent().clone());
	}

	for (let i = 0; i < 10; ++i) {
		$('.article ul').append($('.article ul li').eq(0).clone());
	}
});
