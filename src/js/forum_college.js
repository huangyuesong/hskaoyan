import '../styles/forum_college.scss';

import './header';

import './footer';

import HeaderForum from './header_forum';
import Pagination from './pagination';

import url from 'url';

import { serverUrl } from '../../config';

let {
	college_name,
	college_id,
	page, 
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
			labels: [],
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

				$('.write .content .button').click((evt)=> {
					let _context = $(evt.target).parent();
					
					let label = $('select', _context).val().replace('选择主题', '').replace('无', '');
					let title = $('input', _context).val();
					let content = $('textarea', _context).val();

					$.ajax({
						url: `${serverUrl}/topic_post.php`,
						type: 'post',
						data: {
							college_id: college_id,
							labels: label,
							title: title,
							content: content,
						},
						cache: false,
						success: (data)=> {
							alert('发帖成功');
							location.reload();
						},
						error: (err)=> {
							alert(err.statusText);
						},
					});
				});

				$('.write .content input').on('input', (evt)=> {
					let countDown = $('.write .content .count-down');
					let title = $(evt.target).val();

					$(evt.target).val(title.substring(0, 50))
					if (title.length > 50) return;
					countDown.text(50 - title.length);
				});
			},
			setHotTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/hot_topic_list.php?college_id=${college_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data)=> {
						this.model.hotTopics = data.list;
						this.view.setHotTopic();
					},
					error: (err)=> {
						alert(err.statusText);
					},
				});
			},
			setTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?college_id=${college_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data)=> {
						this.model.topics = data.list;
						this.model.pages = data.page_count;
						this.view.setPagination();
						this.view.setTopic();
					},
					error: (err)=> {
						alert(err.statusText);
					},
				});
			},
			setLabel: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_label.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data)=> {
						this.model.labels = data.list;
						this.view.setLabel();
					},
					error: (err)=> {
						alert(err.statusText);
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
			},
			setTopic: ()=> {
				let { topics } = this.model;

				$('.article ul').empty();
				topics.map((_topic)=> {
					$('.article ul').append($([
						`<li>`,
							`<img class="fl" src="${_topic.avatar}" width="50" height="50">`,
							`<p>`,
								`<a href="forum_article.html?article_id=${_topic.id}&college_id=${college_id}&college_name=${college_name}">`,
									`<span class="title" title="${_topic.title}">${_topic.title}</span>`,
								`</a>`,
							`</p>`,
							`<span class="author">${_topic.nick_name}</span>`,
							`<span class="release">发表于</span>`,
							`<span class="date">${_topic.pub_time}</span>`,
							`<span class="reply fr">${_topic.reply_num}</span>`,
							`<span class="visit fr">${_topic.view_num}</span>`,
						`</li>`,
					].join('')));
				});
			},
			setLabel: ()=> {
				let { labels } = this.model;

				labels.map((_label)=> {
					$('.write .content select').append($(`<option>${_label}</option>`));
				});

				$('.write .content select').change((evt)=> {
					$('.write .content select').children().eq(0).text('无');
				});
			},
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${page}`;
					},
					onFirstSelect: ()=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${1}`;
					},
					onLastSelect: ()=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${pages}`;
					},
					onPrevSelect: ()=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${idx > 1 ? idx - 1 : 1}`;
					},
					onNextSelect: ()=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${idx < pages ? idx + 1 : pages}`;
					},
					onGoSelect: (target)=> {
						location.href = `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${target}`;
					},
				}).render());
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
			href: `forum_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
	]).render();

	new ForumCollege().init();
});
