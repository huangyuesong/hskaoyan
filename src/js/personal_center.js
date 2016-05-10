import '../styles/personal_center.scss';

import './component/footer';

import 'amazeui';

import url from 'url';

let section = url.parse(location.href, true).hash.substring(1) || 'setting';

$(window).load(()=> {
	$('.loading').remove();
});

class PersonalCenter {
	constructor () {
		this.model = {};
		this.controller = {
			bindEvent: ()=> {},
		};
		this.view = {};
	}

	init () {
		$('.container .main .nav ul li').each((idx, li)=> {
			$(li).prop('class').indexOf(section) === -1 ? (()=> null)() : $(li).addClass('active');
		});

		$('.container .main .am-tabs').each((idx, tabs)=> {
			$(tabs).prop('class').indexOf(section) === -1 ? (()=> null)() : $(tabs).css({display: 'block'});
		});
	}
}

$(()=> {
	new PersonalCenter().init();
});