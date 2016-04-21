import '../styles/AppDownload.scss';

import 'fullpage.js'
import 'fullpage.js/jquery.fullPage.css'

$(()=> {
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
	});
});
