import '../styles/personal_center.scss';

import './component/footer';

import 'amazeui';
import 'amazeui-switch';
import 'amazeui-switch/amazeui.switch.css';

import Pagination from './component/pagination';

import {
	serverUrl,
	imagePrefix,
	SUCCESS,
	NEED_LOGIN,
} from '../../config';

import url from 'url';

let { page } = url.parse(location.href, true).query;

class PersonalCenter {
	constructor () {
		this.model = {
			section: 'setting',
			userInfo: [],
			message: {
				system: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					messages: [],
				},
				send: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					messages: [],
				},
				receive: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					messages: [],
				},
			},
		};
		this.controller = {
			bindEvents: ()=> {
				$('.container .main .nav ul li a').click(evt=> location.reload());
			},
			setPageState: ()=> {
				let { hash } = url.parse(location.href, true);
				hash ? this.model.section = hash.substring(1) : ()=> null;
				this.view.setActiveNav();
				this.view.setActiveTabs();
				this.view.setUserInfo();

				switch (this.model.section) {
					case 'setting':
						break;
					case 'message':
						this.controller.setMessage('system');
						this.controller.setMessage('send');
						this.controller.setMessage('receive');
						break;
					default: 
						break;
				}

				this.controller.setPagination();
				this.controller.setSwitch();
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
			getUserInfo: callback=> {
				$.ajax(`${serverUrl}/user_info.php`, {
					method: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { result, list } = data;

						if (result === SUCCESS) {
							this.model.userInfo = list;
							callback && callback();
						} else if (result === NEED_LOGIN) {
							alert('您还未登录，请登录后再进入个人中心');
							location.href = 'index.html';
						}
					},
					error: (xhr, status, error)=> {
						alert('Network Error!');
					},
				});
			},
			setMessage: type=> {
				let url;
				let page = this.model.message[type].page = $(`.container .main div.message`).data(`page-${type}`);
				let { PAGE_SIZE } = this.model.message[type];

				switch (type) {
					case 'system':
						url = `${serverUrl}/message_list.php?type=0&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'send':
						url = `${serverUrl}/message_list.php?type=2&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'receive':
						url = `${serverUrl}/message_list.php?type=1&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					default:
						break;
				}

				$.ajax(url, {
					method: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { result_code, list, page_count } = data;

						if (result_code === SUCCESS) {
							this.model.message[type].messages = list;
							this.model.message[type].pages = page_count;
							this.view.setMessage(type, ()=> this.controller.setMessage(type));
						}
					},
					error: (xhr, status, error)=> {
						alert('Network Error!');
					},
				});
			},
		};
		this.view = {
			setMessage: (type, callback)=> {
				let { messages, page, pages } = this.model.message[type];

				$(`.container .main .message .${type} > ul`).empty().append(messages.length ? null : $(
					`<li><p style="text-align: center;">暂无消息</p></li>`
				));

				messages.map(_message=> {
					let { title, content, edit_time } = _message;

					let wrapper = $([
						`<li>`,
							`<p>${title}</p>`,
							`<p>`,
								`${content}`,
								`<span class="date fr">${edit_time}</span>`,
							`</p>`,
						`</li>`,
					].join(''));

					$(`.container .main .message .${type} > ul`).append(wrapper);
				});

				$(`.container .main .message .${type} .pagination-wrapper`).empty().append(new Pagination({
					idx: page,
					pages: pages,
					onPageSelect: (page)=> {
						$(`.container .main div.message`).data(`page-${type}`, page);
						callback && callback();
					},
					onFirstSelect: ()=> {
						$(`.container .main div.message`).data(`page-${type}`, 1);
						callback && callback();
					},
					onLastSelect: ()=> {
						$(`.container .main div.message`).data(`page-${type}`, pages);
						callback && callback();
					},
					onPrevSelect: ()=> {
						$(`.container .main div.message`).data(`page-${type}`, page > 1 ? page - 1 : 1);
						callback && callback();
					},
					onNextSelect: ()=> {
						$(`.container .main div.message`).data(`page-${type}`, page < pages ? page + 1 : pages);
						callback && callback();
					},
					onGoSelect: (target)=> {
						$(`.container .main div.message`).data(`page-${type}`, target);
						callback && callback();
					},
				}).render());
			},
			setUserInfo: ()=> {
				let { avatar, nick_name, true_name, gender, user_tel, college } = this.model.userInfo;

				$('.personal-center-top-bar ul li .avatar').prop('src', `${imagePrefix}${avatar}`).load();
				$('.personal-center-top-bar ul li .nick-name').html(nick_name);
				$('.container .main .nav .avatar-wrapper  img').prop('src', `${imagePrefix}${avatar}`).load();
				$('.container .main .setting .am-tabs-bd .profile .content li .name').html(true_name);
				$('.container .main .setting .am-tabs-bd .profile .content li .nick-name').html(nick_name);
				$('.container .main .setting .am-tabs-bd .profile .content li.sex input').eq(gender - 1).prop('checked', true);
				$('.container .main .setting .am-tabs-bd .profile .content li .tel').html(user_tel);
				$('.container .main .setting .am-tabs-bd .profile .content li .college').html(college);
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
		this.controller.getUserInfo(()=> {
			this.controller.setPageState();
			this.controller.bindEvents();
		});
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new PersonalCenter().init();
});