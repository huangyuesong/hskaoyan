import '../styles/personal_center.scss';

import './component/footer';

import 'amazeui-switch';
import 'amazeui-switch/amazeui.switch.css';

import Pagination from './component/pagination';

import url from 'url';

let { hash } = url.parse(location.href, true);
let section = hash ? hash.substring(1) : 'setting';

class PersonalCenter {
	constructor () {
		this.model = {
			section: section,
		};
		this.controller = {
			bindEvents: ()=> {
				$('.container .main .nav ul li a').click((evt)=> location.reload());
			},
			setActiveNav: ()=> {
				$('.container .main .nav ul li').each((idx, li)=> {
					$(li).prop('class').indexOf(this.model.section) === -1 ? (()=> null)() : $(li).addClass('active');
				});
			},
			setActiveTabs: ()=> {
				$('.container .main .am-tabs').each((idx, tabs)=> {
					$(tabs).prop('class').indexOf(this.model.section) === -1 ? (()=> null)() : $(tabs).css({display: 'block'});
				});
			},
			setPagination: ()=> {
				this.view.setPagination();
			},
			setSwitch: ()=> {
				$('.container .main .practice .practice-setting input[type="checkbox"]').bootstrapSwitch();
				$('.container .main .practice .practice-setting input[type="checkbox"]').on('switchChange.bootstrapSwitch', (evt, state)=> {
					console.log(state)
				});
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
				$('.container .main .favorate .news .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .favorate .article .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .favorate .wrong-question .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .questionnaire .forum .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .questionnaire .my .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .practice .history .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
				$('.container .main .test .exam .pagination-wrapper').append(new Pagination({
					idx: 1,
					pages: 3,
				}).render());
			},
		};
	}

	init () {
		this.controller.setActiveNav();
		this.controller.setActiveTabs();
		this.controller.setSwitch();
		this.controller.setPagination();
		this.controller.bindEvents();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new PersonalCenter().init();
});