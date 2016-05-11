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
			bindEvents: ()=> {

			},
			setArticle: ()=> {
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
				let titleWrapper = $('.container .article-title-wrapper').eq(0);
				let articleWrapper = $('.container .article-wrapper').eq(0);

				$('#title', titleWrapper).html(title);
				$('#nick-name', titleWrapper).html('[' + nick_name + ']');

				$('#view-num', articleWrapper).html(view_num);
				$('#reply-num', articleWrapper).html(reply_num);
				$('#nick-name', articleWrapper).html(nick_name);
				$('#avatar', articleWrapper).prop('src', `${imagePrefix}${avatar}`).load();
				$('#pub-time', articleWrapper).html(pub_time);
				$('#content', articleWrapper).html(content);
			},
			setComment: ()=> {
				let { comment_list } = this.model;

				comment_list.map((_comment, idx)=> {
					let wrapper = $('.container .article-wrapper').eq(0).clone();
					let { nick_name, avatar, content, pub_time } = _comment;

					$('#floor', wrapper).html(`${idx + 2}楼`);
					$('#nick-name', wrapper).html(nick_name);
					$('#avatar', wrapper).prop('src', `${imagePrefix}${avatar}`).load();
					$('#pub-time', wrapper).html(pub_time);
					$('#content', wrapper).html(content);

					$('.container .article-wrapper:last-of-type').after(wrapper);
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
		this.controller.setArticle();
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