import '../styles/forum_college.scss';

import './header';

import './footer';

import headerForum from './header_forum';

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
		};
		this.controller = {
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
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;

				if (pages > 5) {
					$('.am-pagination .am-pagination-prev').next().remove();

					if (idx === 1) {
						$('.am-pagination .am-pagination-next').before($(`<li class="page am-active"><a herf="javascript:">1</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">2</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
					} else if (idx === 2) {
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">1</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page am-active"><a herf="javascript:">2</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">3</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
					} else if (idx === pages - 1) {
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">1</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages - 2}</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page am-active"><a herf="javascript:">${pages - 1}</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
					} else if (idx === pages) {
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">1</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages - 1}</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page am-active"><a herf="javascript:">${pages}</a></li>`));
					} else {
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">1</a></li>`));
						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));

						for (let i = idx - 1; i <= idx + 1; ++i) {
							$('.am-pagination .am-pagination-next').before($(`<li class="page ${idx === i ? 'am-active' : ''}"><a herf="javascript:">${i}</a></li>`));
						}

						$('.am-pagination .am-pagination-next').before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
						$('.am-pagination .am-pagination-next').before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
					}
				} else if (pages > 1) {
					$('.am-pagination .am-pagination-prev').next().remove();

					for(let i = 1; i <= pages; ++i) {
						$('.am-pagination .am-pagination-next').before($([
							`<li class="page ${idx === i ? 'am-active' : ''}"><a herf="javascript:">${i}</a></li>`,
						].join('')));
					}
				} else if (pages === 1) {
					$('.am-pagination').remove();
				}

				$('.am-pagination li.page').click((evt)=> {
					let { target } = evt;
					let idx = $(target).html();
					$(target).attr('href', `forum_college.html?college_id=${college_id}&college_name=${college_name}&page=${idx}`);
				});
			},
		};
	}

	init () {
		this.controller.setHotTopic();
		this.controller.setTopic();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new headerForum([
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
});
