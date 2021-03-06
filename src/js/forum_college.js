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
	board_id,
	page,
	type,
	attaches,
	label,
	is_hot,
	category,
	keyword,
} = url.parse(location.href, true).query;

if (!board_id) {
	location.href = '/forum.html';
}

class ForumCollege {
	constructor () {
		this.model = {
			topics: [],
			pages: 1,
			is_marked: false,
			boards: [],
			categories: [],
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
					location.href = `forum_college.html?board_id=${board_id}&type=${$(evt.target).prop('type')}`;
				});

				$('.operation-bar a').each((idx, _link)=> {
					if (!type) {
						$(_link).prop('type') === '1' ? $(_link).addClass('active') : ()=> null;
					} else {
						$(_link).prop('type') === type ? $(_link).addClass('active') : ()=> null;
					}
				});
			},
			setTopic: ()=> {
				let url = `${serverUrl}/topic_list.php?board_id=${board_id}`
					.concat(type ? `&type=${type}` : '')
					.concat(attaches ? `&attaches=${attaches}` : '')
					.concat(label ? `&label=${label}` : '')
					.concat(is_hot ? `&is_hot=${is_hot}` : '')
					.concat(category ? `&category=${category}` : '')
					.concat(keyword ? `&keyword=${keyword}` : '')
					.concat(page ? `&page=${page}` : '&page=1');

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topics = data.list;
						this.model.is_marked = data.is_marked;
						this.model.pages = data.page_count;
						this.model.boards = data.boards;
						this.model.categories = data.category;

						this.view.setCategory();
						this.view.setBoard();
						this.view.setPagination();
						this.view.setTopic();
						this.view.setHeader();
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
			setBoard: ()=> {
				let { boards } = this.model;

				boards.length ? (()=> {
					$('.container .right .hot-wrapper').empty();

					boards.map(_boardList=> {
						let { title, list } = _boardList;

						$('.container .right .hot-wrapper').append($(`
							<p>${title}</p>
						`));

						list.map(_board=> {
							let { board, id } = _board;

							$('.container .right .hot-wrapper').append($(`
								<div class="hot"><a href="forum_college.html?board_id=${id}" title="${board}">${board}</a></div>
							`));
						});
					});
				})() : (()=> {
					$('.container .right .hot-wrapper').empty().append($(`
						<p style="text-align: center; line-height: 40px; ">暂无数据</p>
					`));
				})();
			},
			setCategory: ()=> {
				let { categories } = this.model;

				categories.length ? (()=> {
					$('.container .right .category-wrapper').empty().append($(`
						<p>分类</p>
					`));

					categories.map(_category=> {
						let { name, value } = _category;

						$('.container .right .category-wrapper').append($(`
							<div class="category">
								<span class="category-text">
									<a href="forum_college.html?board_id=${board_id}&category=${value}">${name}</a>
								</span>
							</div>
						`));
					});
				})() : (()=> {
					$('.container .right .category-wrapper').empty().append($(`
						<p style="text-align: center; line-height: 40px; ">暂无分类</p>
					`));
				})();

				let searchWrapper = $(`
					<div class="search-wrapper">
		                <input type="text" placeholder="在本版内搜索" />
		                <button>搜 索</button>
		            </div>
				`);

				$('button', searchWrapper).click(evt=> location.href = `forum_college.html?board_id=${board_id}&keyword=${$(evt.target).prev().val()}`);

				$('.container .right .category-wrapper').append(searchWrapper);
			},
			setHeader: ()=> {
				let { is_marked } = this.model;

				new HeaderForum('版面', is_marked).render();
			},
			setTopic: ()=> {
				let { topics } = this.model;

				$('.article ul').empty();
				topics.map((_topic)=> {
					$('.article ul').append($(`
						<li>
							<img class="fl" src="${imagePrefix}${_topic.avatar}" width="50" height="50">
							<p>
								${_topic.label ? '<a href="forum_college.html?board_id=' + board_id + '&label=' + _topic.label + '"><span class="label" style="color: ' + _topic.label_color + '; border-color: ' + _topic.label_color + '; ">' + _topic.label + '</span></a>' : ''}
								<a href="forum_article.html?article_id=${_topic.id}">
									<span class="title" title="${_topic.title}">${_topic.title}</span>
								</a>
							</p>
							<span class="author">${_topic.nick_name}</span>
							<span class="release">发表于</span>
							<span class="date">${_topic.pub_time}</span>
							${_topic.attaches.length ? '<a class="type" href="forum_college.html?board_id=' + board_id + '&attaches=1">附件</a>' : ''}
							${_topic.type.length ? '<a class="type" href="forum_college.html?board_id=' + board_id + '&type=' + _topic.type + '" style="background: ' + _topic.type_color + '; ">' + _topic.type + '</a>' : ''}
							${Number(_topic.is_hot) ? '<a href="forum_college.html?board_id=' + board_id + '&is_hot=1"><span class="icon icon-hot"></span></a>' : ''}
							<span class="reply fr">${_topic.comment_count}</span>
							<span class="visit fr">${_topic.view_count}</span>
						</li>
					`));
				});

				if (!topics.length) {
					$('.article ul').css({'padding': '130px 0', 'text-align': 'center'}).text('暂无帖子');
				}
			},
			setLabel: (labels)=> {
				window.nEditor = new Write({
					url: `${serverUrl}/topic_post.php`,
					labels: Object.keys(labels),
					board_id: board_id,
					fileUploadUrl: `${serverUrl}/upload_file.php`,
					imageUploadUrl: `${serverUrl}/upload_image.php`,
				}).render($('.container .write-wrapper'));

				$('.container .write-wrapper .ubbEditorDiv').css({width: '818px'});
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
				}
			},
		};
	}

	init () {
		this.controller.setTopic();
		this.controller.setLabel();
		this.controller.bindEvents();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('.container .right .forum-body > .button').hide();

	new ForumCollege().init();
});
