import '../styles/personal_center.scss';

import './component/footer';

import 'amazeui';

import Pagination from './component/pagination';

import url from 'url';

let section = url.parse(location.href, true).hash.substring(1) || 'setting';

$(window).load(()=> {
	$('.loading').remove();
});

class PersonalCenter {
	constructor () {
		this.model = {};
		this.controller = {
			bindEvent: ()=> {
				$('.container .main .nav ul li a').click((evt)=> location.reload());
			},
		};
		this.view = {
			setPagination: ()=> {
				$('.container .main .message .system .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());

				$('.container .main .message .send .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());

				$('.container .main .message .receive .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());

				$('.container .main .article .question .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());

				$('.container .main .article .answer .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());

				$('.container .main .article .my-article .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
			},
		};
	}

	init () {
		$('.container .main .nav ul li').each((idx, li)=> {
			$(li).prop('class').indexOf(section) === -1 ? (()=> null)() : $(li).addClass('active');
		});

		$('.container .main .am-tabs').each((idx, tabs)=> {
			$(tabs).prop('class').indexOf(section) === -1 ? (()=> null)() : $(tabs).css({display: 'block'});
		});

		this.view.setPagination();

		this.controller.bindEvent();
	}
}

$(()=> {
	new PersonalCenter().init();
});