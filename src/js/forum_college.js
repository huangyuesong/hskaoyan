import '../styles/forum_college.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import Pagination from './component/pagination';
import Write from './component/write';

import url from 'url';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

let {
	college_name,
	college_id,
	page,
	type,
} = url.parse(location.href, true).query;

if (!college_name || !college_id) {
	location.href = '/forum.html';
}

class ForumCollege {
	constructor () {
		this.model = {
			topics: [],
			hotTopics: [],
			pages: 1,
		};
		this.controller = {
			bindEvents: ()=> {
				$('.keyword-section p:first-of-type a').click((evt)=> {
					if ($(evt.target).attr('class') === 'up') {
						$(evt.target).html('<span class="icon icon-arrow-down-gray"></span>展开');
						$('.keyword-section p:first-of-type').nextAll().css({display: 'none'});
						$(evt.target).removeClass('up').addClass('down');
					} else if ($(evt.target).attr('class') === 'down') {
						$(evt.target).html('<span class="icon icon-arrow-up"></span>收起');
						$('.keyword-section p:first-of-type').nextAll().css({display: 'inline-block'});
						$(evt.target).removeClass('down').addClass('up');
					}
				});

				$('.write .content input').on('input', (evt)=> {
					let countDown = $('.write .content .count-down');
					let title = $(evt.target).val();

					$(evt.target).val(title.substring(0, 50))
					if (title.length > 50) return;
					countDown.text(50 - title.length);
				});

				$('.operation-bar a').click((evt)=> {
					location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&type=${$(evt.target).prop('type')}`;
				});

				$('.operation-bar a').each((idx, _link)=> {
					if (!type) {
						$(_link).prop('type') === '1' ? $(_link).addClass('active') : ()=> null;
					} else {
						$(_link).prop('type') === type ? $(_link).addClass('active') : ()=> null;
					}
				});
			},
			setHotTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?board_id=${college_id}&type=3&limit=5`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotTopics = data.list;
						this.view.setHotTopic();
					},
				});
			},
			setTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?board_id=${college_id}&type=${type || 1}&page=${page || 1}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topics = data.list;
						this.model.pages = data.page_count;
						this.view.setPagination();
						this.view.setTopic();
					},
				});
			},
			setLabel: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_label.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.view.setLabel(data.list);
					},
				});
			},
		};
		this.view = {
			setHotTopic: ()=> {
				let { hotTopics } = this.model;

				$('.recommend .content ul').empty();
				hotTopics.map((_hotTopic)=> {
					$('.recommend .content ul').append($([
						`<li>`,
							`<a class="bbs-title" title="${_hotTopic.title}" href="forum_article.html?
								article_id=${_hotTopic.id}&college_id=${college_id}&college_name=${college_name}">${_hotTopic.title}</a>`,
							`<p><span class="bbs-author" title="${_hotTopic.nick_name}">${_hotTopic.nick_name}</span></p>`,
						`</li>`
					].join('')));
				});

				if (!hotTopics.length) {
					$('.recommend .content ul').css({'padding': '130px 0', 'text-align': 'center'}).text('暂无帖子');
				}
			},
			setTopic: ()=> {
				let { topics } = this.model;

				$('.article ul').empty();
				topics.map((_topic)=> {
					$('.article ul').append($([
						`<li>`,
							`<img class="fl" src="${imagePrefix}${_topic.avatar}" width="50" height="50">`,
							`<p>`,
								`<a href="forum_article.html?article_id=${_topic.id}&college_id=${college_id}&college_name=${college_name}">`,
									`<span class="title" title="${_topic.title}">${_topic.title}</span>`,
								`</a>`,
							`</p>`,
							`<span class="author">${_topic.nick_name}</span>`,
							`<span class="release">发表于</span>`,
							`<span class="date">${_topic.pub_time}</span>`,
							`<span class="reply fr">${_topic.comment_count}</span>`,
							`<span class="visit fr">${_topic.view_count}</span>`,
						`</li>`,
					].join('')));
				});

				if (!topics.length) {
					$('.article ul').css({'padding': '130px 0', 'text-align': 'center'}).text('暂无帖子');
				}
			},
			setLabel: (labels)=> {
				window.nEditor = new Write({
					url: `${serverUrl}/topic_post.php`,
					labels: Object.keys(labels),
					board_id: college_id,
					fileUploadUrl: `${serverUrl}/upload_file.php`,
					imageUploadUrl: `${serverUrl}/upload_image.php`,
				}).render($('.container .write-wrapper'));
			},
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${page}`);
					},
					onFirstSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=1`);
					},
					onLastSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${pages}`);
					},
					onPrevSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${idx > 1 ? idx - 1 : 1}`);
					},
					onNextSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${idx < pages ? idx + 1 : pages}`);
					},
					onGoSelect: (target)=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${target}`);
					},
				}).render());

				if (!pages || Number(pages) < 2) {
					$('.container .right .forum-body .keyword-section').css({border: '0'});
				}
			},
		};
	}

	init () {
		this.controller.setHotTopic();
		this.controller.setTopic();
		this.controller.setLabel();
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
			href: `javascript:`,
		},
	]).render();

	$('.container .right .forum-body > .button').hide();

	new ForumCollege().init();
});
