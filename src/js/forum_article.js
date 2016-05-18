import '../styles/forum_article.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';
import WriteArticle from './component/write_article';
import Pagination from './component/pagination';

import {
	serverUrl,
	imagePrefix,
	SUCCESS,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	article_id,
	reverse_order,
	select_comment,
	page,
} = url.parse(location.href, true).query;

if (!college_id || !article_id) {
	location.href = '/forum.html';
}

const PAGE_SIZE = 9;

class ForumArticle {
	constructor () {
		this.model = {
			title: '',
			nick_name: '',
			view_count: '0',
			comment_count: '0',
			avatar: '/images/web/forum_article/avatar.png',
			pub_time: '2016-01-01',
			content: '',
			comment_list: [],
			is_locked: '0',
			labels: '',
			is_liked: '0',
			check_delete: '0',
			mark_value: '0',
			pages: 1,
			college_name: college_name || '',
		};
		this.controller = {
			setArticleAndComment: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_view.php?topic_id=${article_id}&page=${page || 1}&page_size=${PAGE_SIZE}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.pages = data.page_count;
						Object.keys(data.topic_array).map(key=> this.model[key] = data.topic_array[key]);

						this.view.setArticle();
						this.view.setComment();
						this.view.setPagination();
					},
				});
			},
			setWrite: ()=> {
				this.view.setWrite();
			},
			setCollegeName: ()=> {
				if (!college_name) {
					$.ajax({
						url: `${serverUrl}/board_list.php?board_id=${college_id}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.college_name = data.list.college;
							this.view.setCollegeName();
						},
					});
				}
			},
		};
		this.view = {
			setCollegeName: ()=> {
				$('.container .header-forum .section5 > a').eq(1).html(this.model.college_name);
				$('.container .header-forum .section5 > a').eq(1).prop('href', 
					`news_college.html?college_id=${college_id}&college_name=${this.model.college_name}`);
			},
			setArticle: ()=> {
				let { title, nick_name, view_count, comment_count, avatar, pub_time, 
					content, labels, is_liked, id, check_delete, mark_value } = this.model;

				let wrapper = $([
					`<div class="article-title-wrapper">`,
						`<span class="author" id="nick-name">[${labels.split(',').filter(_=> _).join(',') || '无主题'}]</span>`,
						`<span class="article-title" id="title">`,
							`${title}`,
						`</span>`,
					`</div>`,
					`<div class="article-wrapper">`,
						`<div class="user-info fl">`,
							`<p class="top">`,
								`<span>查看:</span>`,
								`<span class="red" id="view-num">${view_count}</span>`,
								`<span>回复:</span>`,
								`<span class="red" id="reply-num">${comment_count}</span>`,
							`</p>`,
							`<p class="author red" id="nick-name">${nick_name}</p>`,
							`<img class="avatar" src="${imagePrefix}${avatar}" width="50%" id="avatar">`,
							`<p class="star"><span class="icon icon-star"></span><span class="icon icon-star"></span></p>`,
							`<a href="javascript:"><p class="send-message"><span class="icon icon-message"></span><span>发消息</span></p></a>`,
						`</div>`,
						`<div class="content-wrapper">`,
							`<div class="top">`,
								`<span>发表于</span>`,
								`<span id="pub-time">${pub_time}</span>`,
								`<a href="${select_comment ?
									location.href.replace(/\&select_comment=1/, '') :
									location.href.concat('&select_comment=1')}">`,
									`<span>${select_comment ? '查看所有回复': '只看该作者'}</span>`,
								`</a>`,
								`<a href="${reverse_order ? 
										location.href.replace(/\&reverse_order=1/, '') : 
										location.href.concat('&reverse_order=1')}">`,
									`<span>${reverse_order ? '顺序': '倒序'}浏览</span>`,
								`</a>`,
								`<a href="javascript:"><span id="delete-article">${Number(check_delete) ? '删除主题' : ''}</span></a>`,
								`<span class="fr" id="floor">1楼</span>`,
							`</div>`,
							`<div class="content" id="content">${content}</div>`,
							`<div class="bottom">`,
								`<a href="javascript:"><span class="fl"><!-- 删除回复 --></span></a>`,
								`<a href="javascript:">`,
									`<span class="collect" id="favorate">`,
										`<span class="icon icon-star"></span>${Number(mark_value) ? '取消收藏' : '收藏'}`,
									`</span>`,
								`</a>`,
								`<a href="javascript:">`,
									`<span class="good" id="like">`,
										`<span class="icon icon-good"></span>${Number(is_liked) ? '取消点赞': '点赞'}`,
									`</span>`,
								`</a>`,
								`<a href="javascript:"><span class="fr">举报</span></a>`,
							`</div>`,
						`</div>`,
					`</div>`,
				].join(''));

				$('#delete-article', wrapper).click((evt=> {
					$.ajax({
						url: `${serverUrl}/topic_post.php`,
						type: 'post',
						data: {
							delete_id: id,
						},
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							let { result_code, message } = data;

							if (result_code === SUCCESS) {
								alert(message);
								location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}`;
							} else {
								alert(message);
							}
						},
						error: (xhr, status, error)=> {
							alert('Network Error!');
						},
					});
				}));

				$('#like', wrapper).click(evt=> {
					$.ajax({
						url: `${serverUrl}/user_like.php?topic_id=${id}&is_liked=${Number(is_liked) ? 0 : 1}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							let { result_code, message } = data;

							if (result_code === SUCCESS) {
								alert(message);
								location.reload();
							} else {
								alert(message);
							}
						},
						error: (xhr, status, error)=> {
							alert('Network Error!');
						},
					});
				});

				$('#favorate', wrapper).click(evt=> {
					$.ajax({
						url: `${serverUrl}/mark_item.php?mark_id=${id}&type=1&value=${Number(mark_value) ? 0 : 1}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							let { result_code, message } = data;

							if (result_code === SUCCESS) {
								alert(message.replace('标记', '收藏'));
								location.reload();
							} else {
								alert(message);
							}
						},
						error: (xhr, status, error)=> {
							alert('Network Error!');
						},
					});
				});

				$('.container .article-title-wrapper, .container .article-wrapper').remove();

				$('.container > .button:first-of-type').css({display: 'none'}).after(wrapper);
			},
			setComment: ()=> {
				let { comment_list } = this.model;

				comment_list.map((_comment, idx)=> {
					let { nick_name, avatar, content, pub_time, id, check_delete, is_liked, floor } = _comment;

					let wrapper = $([
						`<div class="article-wrapper">`,
							`<div class="user-info fl">`,
								`<p class="author red" id="nick-name">${nick_name}</p>`,
								`<img class="avatar" src="${imagePrefix}${avatar}" width="50%" id="avatar">`,
								`<p class="star"><span class="icon icon-star"></span><span class="icon icon-star"></span></p>`,
								`<a href="javascript:">`,
									`<p class="send-message"><span class="icon icon-message"></span><span>发消息</span></p>`,
								`</a>`,
							`</div>`,
							`<div class="content-wrapper">`,
								`<div class="top">`,
									`<span>发表于</span>`,
									`<span id="pub-time">${pub_time}</span>`,
									`<a href="${select_comment ?
										location.href.replace(/\&select_comment=1/, '') :
										location.href.concat('&select_comment=1')}">`,
										`<span>${select_comment ? '查看所有回复': '只看该作者'}</span>`,
									`</a>`,
									`<a href="${reverse_order ? 
											location.href.replace(/\&reverse_order=1/, '') : 
											location.href.concat('&reverse_order=1')}">`,
										`<span>${reverse_order ? '顺序': '倒序'}浏览</span>`,
									`</a>`,
									`<a href="javascript:"><span id="delete-comment">${Number(check_delete) ? '删除该回复' : ''}</span></a>`,
									`<span class="fr" id="floor">${floor}楼</span>`,
								`</div>`,
								`<div class="content" id="content">${content}</div>`,
								`<div class="bottom">`,
									`<a href="javascript:"><span class="fl"><!-- 删除回复 --></span></a>`,
									`<a href="javascript:">`,
									`<span class="good" id="like">`,
											`<span class="icon icon-good"></span>${Number(is_liked) ? '取消点赞': '点赞'}`,
										`</span>`,
									`</a>`,
									`<a href="javascript:"><span class="fr">举报</span></a>`,
								`</div>`,
							`</div>`,
						`</div>`,
					].join(''));

					$('#delete-comment', wrapper).click(evt=> {
							$.ajax({
							url: `${serverUrl}/comment_post.php`,
							type: 'post',
							data: {
								delete_id: id,
							},
							dataType: 'json',
							cache: false,
							success: (data, status)=> {
								let { result_code, message } = data;

								if (result_code === SUCCESS) {
									alert(message);
									location.reload();
								} else {
									alert(message);
								}
							},
							error: (xhr, status, error)=> {
								alert('Network Error!');
							},
						});
					});

					$('#like', wrapper).click(evt=> {
						$.ajax({
							url: `${serverUrl}/user_like.php?comment_id=${id}&is_liked=${Number(is_liked) ? 0 : 1}`,
							type: 'get',
							dataType: 'json',
							cache: false,
							success: (data, status)=> {
								let { result_code, message } = data;

								if (result_code === SUCCESS) {
									alert(message);
									location.reload();
								} else {
									alert(message);
								}
							},
							error: (xhr, status, error)=> {
								alert('Network Error!');
							},
						});
					});

					$('.container > .button:last-of-type').css({display: 'none'}).before(wrapper);
				});
			},
			setWrite: ()=> {
				let { is_locked } = this.model;

				if (!Number(is_locked)) {
					window.nEditor = new WriteArticle({
						url: `${serverUrl}/comment_post.php`,
						topic_id: article_id,
						tag: '回复',
						buttonText: '发表回复',
					}).render($('.container > .write-wrapper'));
				}
			},
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${page}`;
					},
					onFirstSelect: ()=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${1}`;
					},
					onLastSelect: ()=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${pages}`;
					},
					onPrevSelect: ()=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${idx > 1 ? idx - 1 : 1}`;
					},
					onNextSelect: ()=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${idx < pages ? idx + 1 : pages}`;
					},
					onGoSelect: (target)=> {
						location.href = `forum_article.html?article_id=371&college_id=${college_id}&college_name=${college_name}&page=${target}`;
					},
				}).render());
			},
		};
	}

	init () {
		this.controller.setCollegeName();
		this.controller.setArticleAndComment();
		this.controller.setWrite(()=> {
			this.controller.setPagination();
		});
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `论坛`,
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `查看帖子`,
			href: `javascript:`,
		},
	]).render();

	let logo = $(`<div class="icon icon-logo"></div>`);
	$('.section3', $('.header-forum')).prepend(logo);
	$('.section1', $('.header-forum')).remove();
	$('.section2', $('.header-forum')).remove();
	$('.section4', $('.header-forum')).remove();
	// $('.middle', $('.header')).remove();
	$('.nav-bar', $('.header')).remove();
	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new ForumArticle().init();
});