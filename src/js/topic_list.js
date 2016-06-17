import '../styles/topic_list.scss';

import './component/header';
import './component/footer';

import Pagination from './component/pagination';

import url from 'url';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

let {
	question_id,
	section_id,
	material_id,
	pub_user,
	reply_user,
	type,
	attaches,
	label,
	is_hot,
	page,
} = url.parse(location.href, true).query;

class TopicList {
	constructor () {
		this.model = {
			topics: [],
			pages: 1,
			is_marked: false,
			recommend: {},
		};
		this.controller = {
			setTopic: ()=> {
				let url = `${serverUrl}/topic_list.php?__=__`
					.concat(question_id ? `&question_id=${question_id}` : '')
					.concat(section_id ? `&section_id=${section_id}` : '')
					.concat(material_id ? `&material_id=${material_id}` : '')
					.concat(pub_user ? `&pub_user=${pub_user}` : '')
					.concat(reply_user ? `&reply_user=${reply_user}` : '')
					.concat(type ? `&type=${type}` : '')
					.concat(attaches ? `&attaches=${attaches}` : '')
					.concat(label ? `&label=${label}` : '')
					.concat(is_hot ? `&is_hot=${is_hot}` : '');

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topics = data.list;
						this.model.is_marked = data.is_marked;
						this.model.pages = data.page_count;
						this.model.recommend = data.topics;

						this.view.setPagination();
						this.view.setTopic();
						this.view.setRecommend();
					},
				});
			},
		};
		this.view = {
			setRecommend: ()=> {
				let { recommend } = this.model;

				recommend.list.length ? (()=> {
					$('.container .right .recommend-wrapper').empty().append($(`
						<p class="title">${recommend.title}</p>
					`));

					recommend.list.map(_topic=> {
						let { title, id } = _topic;

						$('.container .right .recommend-wrapper').append($(`
							<p><a href="forum_article.html?article_id=${id}" title="${title}">${title}</a></p>
						`));
					});
				})() : (()=> {
					$('.container .right .recommend-wrapper').empty().append($(`
						<p class="title">${recommend.title}</p>
			            <p style="text-align: center; line-height: 40px; ">暂无帖子</p>
					`));
				})();
			},
			setTopic: ()=> {
				let { topics } = this.model;

				$('.article ul').empty();
				topics.map((_topic)=> {
					$('.article ul').append($(`
						<li>
							<img class="fl" src="${imagePrefix}${_topic.avatar}" width="50" height="50">
							<p>
								${_topic.label ? '<a href="forum_college.html?label=' + _topic.label + '"><span class="label" style="color: ' + _topic.label_color + '; border-color: ' + _topic.label_color + '; ">' + _topic.label + '</span></a>' : ''}
								<a href="forum_article.html?article_id=${_topic.id}">
									<span class="title" title="${_topic.title}">${_topic.title}</span>
								</a>
							</p>
							<span class="author">${_topic.nick_name}</span>
							<span class="release">发表于</span>
							<span class="date">${_topic.pub_time}</span>
							${_topic.attaches.length ? '<a class="type" href="forum_college.html?attaches=1">附件</a>' : ''}
							${_topic.type.length ? '<a class="type" href="forum_college.html?type=' + _topic.type + '" style="background: ' + _topic.type_color + '; ">' + _topic.type + '</a>' : ''}
							${Number(_topic.is_hot) ? '<a href="forum_college.html?is_hot=1"><span class="icon icon-hot"></span></a>' : ''}
							<span class="reply fr">${_topic.comment_count}</span>
							<span class="visit fr">${_topic.view_count}</span>
						</li>
					`));
				});

				if (!topics.length) {
					$('.article ul').css({'padding': '130px 0', 'text-align': 'center'}).text('暂无帖子');
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
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${page}`);
					},
					onFirstSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=1`);
					},
					onLastSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${pages}`);
					},
					onPrevSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${idx > 1 ? idx - 1 : 1}`);
					},
					onNextSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${idx < pages ? idx + 1 : pages}`);
					},
					onGoSelect: (target)=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${target}`);
					},
				}).render());

				if (!pages || Number(pages) < 2) {
					$('.container .right .forum-body').css({
						marginTop: '10px',
					});

					$('.pagination-wrapper').eq(1).css({
						display: 'inline-block',
						width: '100%',
						height: '20px',
					});
				}
			},
		};
	}

	init () {
		this.controller.setTopic();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new TopicList().init();
});