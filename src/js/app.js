import '../styles/app.scss';

import 'fullpage.js'
import 'fullpage.js/jquery.fullPage.css'

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
	});

	$('.sroll-to-top', $('.float-bar')).click((evt)=> {
		location.href = 'app.html#page1';
	});
});
