import '../styles/forum_article.scss';

import './component/header';

import './component/footer';

import HeaderForum from './component/header_forum';
import WriteArticle from './component/write_article';

import { serverUrl, imagePrefix } from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	article_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !article_id) {
	location.href = '/forum.html';
}

class ForumArticle {
	constructor () {
		this.model = {
			title: '',
			nick_name: '',
			view_num: 0,
			reply_num: 0,
			avatar: '/images/web/forum_article/avatar.png',
			pub_time: '2016-01-01',
			content: '',
			comment_list: [],
		};
		this.controller = {
			bindEvents: ()=> {},
			setArticleAndComment: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_view.php?topic_id=${article_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { title, nick_name, view_num, reply_num, avatar, pub_time, content, comment_list } = data.topic_array;

						this.model.title = title;
						this.model.nick_name = nick_name;
						this.model.view_num = view_num;
						this.model.reply_num = reply_num;
						this.model.avatar = avatar;
						this.model.pub_time = pub_time;
						this.model.content = content;
						this.model.comment_list = comment_list;

						this.view.setArticle();
						this.view.setComment();
					},
					error: (xhr, status, error)=> {
						alert(error);
					},
				});
			},
			setWrite: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_label.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.view.setWrite(data.list);
					},
					error: (xhr, status, error)=> {
						alert(error);
					},
				});
			},
		};
		this.view = {
			setArticle: ()=> {
				let { title, nick_name, view_num, reply_num, avatar, pub_time, content } = this.model;

				let wrapper = $([
					`<div class="article-title-wrapper">`,
						`<span class="author" id="nick-name">[${nick_name}]</span>`,
						`<span class="article-title" id="title">`,
							`${title}`,
						`</span>`,
					`</div>`,
					`<div class="article-wrapper">`,
						`<div class="user-info fl">`,
							`<p class="top">`,
								`<span>查看:</span>`,
								`<span class="red" id="view-num">${view_num}</span>`,
								`<span>回复:</span>`,
								`<span class="red" id="reply-num">${reply_num}</span>`,
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
								`<a href="javascript:"><span>只看该作者</span></a>`,
								`<a href="javascript:"><span>倒序浏览</span></a>`,
								`<a href="javascript:"><span>删除主题</span></a>`,
								`<span class="fr" id="floor">1楼</span>`,
							`</div>`,
							`<div class="content" id="content">${content}</div>`,
							`<div class="bottom">`,
								`<a href="javascript:"><span class="fl"><!-- 删除回复 --></span></a>`,
								`<a href="javascript:"><span class="collect"><span class="icon icon-star"></span>收藏</span></a>`,
								`<a href="javascript:"><span class="good"><span class="icon icon-good"></span>点赞</span></a>`,
								`<a href="javascript:"><span class="fr">举报</span></a>`,
							`</div>`,
						`</div>`,
					`</div>`,
				].join(''));

				$('.container .article-title-wrapper, .container .article-wrapper').remove();

				$('.container > .button:first-of-type').after(wrapper);
			},
			setComment: ()=> {
				let { comment_list } = this.model;

				comment_list.map((_comment, idx)=> {
					let { nick_name, avatar, content, pub_time } = _comment;

					let wrapper = $([
						`<div class="article-wrapper">`,
							`<div class="user-info fl">`,
								`<p class="author red" id="nick-name">${nick_name}</p>`,
								`<img class="avatar" src="${imagePrefix}${avatar}" width="50%" id="avatar">`,
								`<p class="star"><span class="icon icon-star"></span><span class="icon icon-star"></span></p>`,
								`<a href="javascript:"><p class="send-message"><span class="icon icon-message"></span><span>发消息</span></p></a>`,
							`</div>`,
							`<div class="content-wrapper">`,
								`<div class="top">`,
									`<span>发表于</span>`,
									`<span id="pub-time">${pub_time}</span>`,
									`<a href="javascript:"><span>只看该作者</span></a>`,
									`<a href="javascript:"><span>倒序浏览</span></a>`,
									`<a href="javascript:"><span>删除主题</span></a>`,
									`<span class="fr" id="floor">${idx + 2}楼</span>`,
								`</div>`,
								`<div class="content" id="content">${content}</div>`,
								`<div class="bottom">`,
									`<a href="javascript:"><span class="fl"><!-- 删除回复 --></span></a>`,
									`<a href="javascript:"><span class="collect"><span class="icon icon-star"></span>收藏</span></a>`,
									`<a href="javascript:"><span class="good"><span class="icon icon-good"></span>点赞</span></a>`,
									`<a href="javascript:"><span class="fr">举报</span></a>`,
								`</div>`,
							`</div>`,
						`</div>`,
					].join(''));

					$('.container > .button:last-of-type').before(wrapper);
				});
			},
			setWrite: (labels)=> {
				$('.container > .button:last-of-type').after(new WriteArticle({
					url: `${serverUrl}/topic_post.php`,
					labels: labels,
					college_id: college_id,
				}).render());
			},
		};
	}

	init () {
		this.controller.setArticleAndComment();
		this.controller.setWrite();
		this.controller.bindEvents();
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
	$('.middle', $('.header')).remove();
	$('.nav-bar', $('.header')).remove();
	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new ForumArticle().init();
});