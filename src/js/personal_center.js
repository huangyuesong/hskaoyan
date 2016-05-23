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
			provinceList: [],
			collegeList: [],
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
			article: {
				question: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					articles: [],
				},
				answer: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					articles: [],
				},
			},
			favorate: {
				news: {
					PAGE_SIZE: 4,
					page: 1,
					pages: 1,
					entries: [],
				},
				article: {
					PAGE_SIZE: 4,
					page: 1,
					pages: 1,
					entries: [],
				},
				'wrong-question': {
					PAGE_SIZE: 4,
					page: 1,
					pages: 1,
					entries: [],
				},
			},
			questionnaire: {
				forum: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					questionnaires: [],
				},
				my: {
					PAGE_SIZE: 5,
					page: 1,
					pages: 1,
					questionnaires: [],
				},
			},
		};
		this.controller = {
			bindEvents: ()=> {
				$('.container .main .nav ul li a').click(evt=> location.reload());

				$('.container .main .setting #modify').click(evt=> {
					$('#modal-user-info').modal('toggle');
				});

				$('.modal-user-info #province').change(evt=> {
					this.controller.setCollege($(evt.target).val());
					if ($(evt.target).children().length - this.model.provinceList.length) {
						$(evt.target).children().eq(0).remove();
					}
				});

				$('.modal-user-info .button').click(evt=> {
					alert();
				});
			},
			renderPage: ()=> {
				let { hash } = url.parse(location.href, true);
				hash ? this.model.section = hash.substring(1) : ()=> null;
				this.controller.setProvince();
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
					case 'article':
						this.controller.setArticle('question');
						this.controller.setArticle('answer');
						break;
					case 'favorate':
						this.controller.setFavorate('news');
						this.controller.setFavorate('article');
						this.controller.setFavorate('wrong-question');
						break;
					case 'questionnaire':
						this.controller.setQuestionnaire('forum');
						this.controller.setQuestionnaire('my');
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
				});
			},
			setProvince: ()=> {
				$.ajax({
					url: `${serverUrl}/college_ajax.php?type=province`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.provinceList = data;
						this.view.setProvince();
					},
				});
			},
			setCollege: (province)=> {
				$.ajax({
					url: `${serverUrl}/college_ajax.php?type=college&value=${province}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.collegeList = data;
						this.view.setCollege();
					},
				});
			},
			setMessage: type=> {
				let url;
				let page = this.model.message[type].page = $(`.container .main div.message div.${type}`).data('page');
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
				});
			},
			setArticle: (type)=> {
				let url;
				let page = this.model.article[type].page = $(`.container .main div.article div.${type}`).data('page');
				let { PAGE_SIZE } = this.model.article[type];

				switch (type) {
					case 'question':
						url = `${serverUrl}/topic_list.php?board_id=-3&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'answer':
						url = `${serverUrl}/topic_list.php?board_id=-4&page=${page || 1}&page_size=${PAGE_SIZE}`;
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
							this.model.article[type].articles = list;
							this.model.article[type].pages = page_count;
							this.view.setArticle(type, ()=> this.controller.setArticle(type));
						}
					},
				});
			},
			setFavorate: (type)=> {
				let url;
				let page = this.model.favorate[type].page = $(`.container .main div.favorate div.${type}`).data('page');
				let { PAGE_SIZE } = this.model.favorate[type];

				switch (type) {
					case 'news':
						url = `${serverUrl}/mark_list.php?type=2&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'article':
						url = `${serverUrl}/mark_list.php?type=1&page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'wrong-question':
						url = `${serverUrl}/mark_list.php?type=0&page=${page || 1}&page_size=${PAGE_SIZE}`;
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
							this.model.favorate[type].entries = list;
							this.model.favorate[type].pages = page_count;
							this.view.setFavorate(type, ()=> this.controller.setFavorate(type));
						}
					},
				});
			},
			setQuestionnaire: (type)=> {
				let url;
				let page = this.model.questionnaire[type].page = $(`.container .main div.questionnaire div.${type}`).data('page');
				let { PAGE_SIZE } = this.model.questionnaire[type];

				switch (type) {
					case 'forum':
						url = `${serverUrl}/survey_list.php?page=${page || 1}&page_size=${PAGE_SIZE}`;
						break;
					case 'my':
						url = `${serverUrl}/survey_list.php?type=1&page=${page || 1}&page_size=${PAGE_SIZE}`;
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
							this.model.questionnaire[type].questionnaires = list;
							this.model.questionnaire[type].pages = page_count;
							this.view.setQuestionnaire(type, ()=> this.controller.setQuestionnaire(type));
						}
					},
				});
			},
		};
		this.view = {
			setCollege: ()=> {
				let { collegeList } = this.model;

				$('.modal-user-info #college').empty();
				collegeList.map(_college=> {
					$('.modal-user-info #college').append(`
						<option value="${_college.value}">${_college.text}</option>
					`);
				});
			},
			setProvince: ()=> {
				let { provinceList } = this.model;

				provinceList.map(_province=> {
					$('.modal-user-info .province').append($(`
						<option value="${_province.value}">${_province.text}</option>
					`));
				});
			},
			setQuestionnaire: (type, callback)=> {
				let { questionnaires, page, pages } = this.model.questionnaire[type];

				$(`.container .main .questionnaire .${type} > ul`).empty().append(questionnaires.length ? null : $(
					`<li><p style="text-align: center;">暂无问卷</p></li>`
				));

				questionnaires.map(_questionnaire=> {
					let { title, edit_time, id } = _questionnaire;

					let wrapper = $([
						`<li>`,
							`<p><a href="javascript:">${title}</a></p>`,
							`<p>`,
								/*`<span>`,
									`<img class="avatar" src="/images/web/personal_center/avatar.png" width="25" height="25" />哈哈1298`,
								`</span>`,*/
								`<span class="join">2人参与</span>`,
								`<span>3人关注</span>`,
								`<span class="fr">${edit_time}</span>`,
							`</p>`,
						`</li>`,
					].join(''));

					$(`.container .main .questionnaire .${type} > ul`).append(wrapper);
				});

				$(`.container .main .questionnaire .${type} .pagination-wrapper`).empty().append(new Pagination({
					idx: page,
					pages: pages,
					onPageSelect: (page)=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', page);
						callback && callback();
					},
					onFirstSelect: ()=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', 1);
						callback && callback();
					},
					onLastSelect: ()=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', pages);
						callback && callback();
					},
					onPrevSelect: ()=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', page > 1 ? page - 1 : 1);
						callback && callback();
					},
					onNextSelect: ()=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', page < pages ? page + 1 : pages);
						callback && callback();
					},
					onGoSelect: (target)=> {
						$(`.container .main div.questionnaire div.${type}`).data('page', target);
						callback && callback();
					},
				}).render());
			},
			setFavorate: (type, callback)=> {
				let { entries, page, pages } = this.model.favorate[type];

				$(`.container .main .favorate .${type} > ul`).empty().append(entries.length ? null : $(
					`<li><p style="text-align: center;">暂无收藏</p></li>`
				));

				entries.map(_entry=> {
					let { title, type:_type, edit_time, mark_id, board_id } = _entry;
					let href;

					switch (type) {
						case 'news':
							href = `news_detail.html?college_id=${board_id}&news_id=${mark_id}&news_name=${title}`;
							break;
						case 'article':
							href = `forum_article.html?college_id=${board_id}&article_id=${mark_id}`;
							break;
						case 'wrong-question':
							href = `javascript:`;
							break;
						default:
							break;
					}

					let wrapper = $([
						`<li>`,
							`<p><a href="${href}" title="${title}">${title}</a></p>`,
							`<p>`,
								`<span>${_type || '&nbsp;'}</span>`,
								`<span class="fr">${edit_time}</span>`,
							`</p>`,
						`</li>`,
					].join(''));

					$(`.container .main .favorate .${type} > ul`).append(wrapper);
				});

				$(`.container .main .favorate .${type} .pagination-wrapper`).empty().append(new Pagination({
					idx: page,
					pages: pages,
					onPageSelect: (page)=> {
						$(`.container .main div.favorate div.${type}`).data('page', page);
						callback && callback();
					},
					onFirstSelect: ()=> {
						$(`.container .main div.favorate div.${type}`).data('page', 1);
						callback && callback();
					},
					onLastSelect: ()=> {
						$(`.container .main div.favorate div.${type}`).data('page', pages);
						callback && callback();
					},
					onPrevSelect: ()=> {
						$(`.container .main div.favorate div.${type}`).data('page', page > 1 ? page - 1 : 1);
						callback && callback();
					},
					onNextSelect: ()=> {
						$(`.container .main div.favorate div.${type}`).data('page', page < pages ? page + 1 : pages);
						callback && callback();
					},
					onGoSelect: (target)=> {
						$(`.container .main div.favorate div.${type}`).data('page', target);
						callback && callback();
					},
				}).render());
			},
			setArticle: (type, callback)=> {
				let { articles, page, pages } = this.model.article[type];

				$(`.container .main .article .${type} > ul`).empty().append(articles.length ? null : $(
					`<li><p style="text-align: center;">暂无帖子</p></li>`
				));

				articles.map(_article=> {
					let { title, comment_count, view_count, pub_time, id, board_id } = _article;

					let wrapper = $([
						`<li>`,
							`<p>`,
								`<a href="forum_article.html?${[
									`college_id=${board_id}`,
									`article_id=${id}`,
								].join('&')}" title="${title}">${title}</a>`,
							`</p>`,
							`<p>`,
								`<span class="answer">${comment_count}个回答</span>`,
								`<span class="focus">${view_count}人查看</span>`,
								`<span class="date fr">${pub_time}</span>`,
							`</p>`,
						`</li>`,
					].join(''));

					$(`.container .main .article .${type} > ul`).append(wrapper);
				});

				$(`.container .main .article .${type} .pagination-wrapper`).empty().append(new Pagination({
					idx: page,
					pages: pages,
					onPageSelect: (page)=> {
						$(`.container .main div.article div.${type}`).data('page', page);
						callback && callback();
					},
					onFirstSelect: ()=> {
						$(`.container .main div.article div.${type}`).data('page', 1);
						callback && callback();
					},
					onLastSelect: ()=> {
						$(`.container .main div.article div.${type}`).data('page', pages);
						callback && callback();
					},
					onPrevSelect: ()=> {
						$(`.container .main div.article div.${type}`).data('page', page > 1 ? page - 1 : 1);
						callback && callback();
					},
					onNextSelect: ()=> {
						$(`.container .main div.article div.${type}`).data('page', page < pages ? page + 1 : pages);
						callback && callback();
					},
					onGoSelect: (target)=> {
						$(`.container .main div.article div.${type}`).data('page', target);
						callback && callback();
					},
				}).render());
			},
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
						$(`.container .main div.message div.${type}`).data('page', page);
						callback && callback();
					},
					onFirstSelect: ()=> {
						$(`.container .main div.message div.${type}`).data('page', 1);
						callback && callback();
					},
					onLastSelect: ()=> {
						$(`.container .main div.message div.${type}`).data('page', pages);
						callback && callback();
					},
					onPrevSelect: ()=> {
						$(`.container .main div.message div.${type}`).data('page', page > 1 ? page - 1 : 1);
						callback && callback();
					},
					onNextSelect: ()=> {
						$(`.container .main div.message div.${type}`).data('page', page < pages ? page + 1 : pages);
						callback && callback();
					},
					onGoSelect: (target)=> {
						$(`.container .main div.message div.${type}`).data('page', target);
						callback && callback();
					},
				}).render());
			},
			setUserInfo: ()=> {
				let { avatar, nick_name, true_name, gender, user_tel, college, message_count, college_id } = this.model.userInfo;

				$('.personal-center-top-bar ul li .avatar').prop('src', `${imagePrefix}${avatar}`).load();
				$('.personal-center-top-bar ul li .nick-name').html(nick_name);
				$('.container .main .nav .avatar-wrapper  img').prop('src', `${imagePrefix}${avatar}`).load();
				$('.container .main .setting .am-tabs-bd .profile .content li .name').html(true_name);
				$('.container .main .setting .am-tabs-bd .profile .content li .nick-name').html(nick_name);
				$('.container .main .setting .am-tabs-bd .profile .content li .gender').html(gender - 1 ? '女' : '男');
				$('.container .main .setting .am-tabs-bd .profile .content li .tel').html(user_tel);
				$('.container .main .setting .am-tabs-bd .profile .content li .college').html(college);
				if (message_count) {
					$('.container .main .nav ul li .badge').html(message_count).css({display: 'inline-block'});
				}
				$('.modal-user-info #nick-name').val(nick_name);
				$('.modal-user-info #gender').prop('selectedIndex', gender - 1);
				$('.modal-user-info #true-name').val(true_name);
				$('.modal-user-info #college').append(`<option value=${college_id}>${college}</option>`);
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
			this.controller.renderPage();
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