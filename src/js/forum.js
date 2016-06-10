import '../styles/forum.scss';

import './component/header';
import './component/footer';

import Search from './component/search';
import Tabs from './component/tabs';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

import url from 'url';

let {
	title,
	keyword,
} = url.parse(location.href, true).query;

class Board {
	constructor (data) {
		let { title, list, last_data } = data;

		this.title = title;
		this.list = list;
		this.last_data = last_data;
	}

	renderBoard (id, title) {
		return $([
			`<div class="school">`,
			`	<div class="name-wrapper">`,
			`		<a href="forum_college.html?college_id=${id}&college_name=${title}" title="${title}">`,
			`			${title}`,
			`		</a>`,
			`	</div>`,
			/*`	<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>`,
			`	<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>`,
			`	<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">资料</a>`,*/
			`</div>`,
		].join(''));
	}

	renderRow (boards) {
		let row = $('<div class="row"></div>');

		boards.map((_board)=> {
			row.append(this.renderBoard( _board.id, _board.board));
		});

		return row;
	}

	renderMore () {
		return $(`<a class="more" href="forum.html?title=${this.title}">查看全部>></a>`);
	}

	render () {
		let _board = $([
			`<div class="section district">`,
			`	<div class="title">`,
			`		<a href="forum.html?title=${this.title}">${this.title}</a>`,
			`	</div>`,
			`	<div class="content"></div>`,
			`</div>`,
		].join(''));

		if (this.list.length) {
			while (this.list.length) {
				$('.content', _board).append(this.renderRow(this.list.splice(0, 5)));
			}

			if (!this.last_data) {
				let _row = $('.content .row:last-of-type', _board).eq(0);
				
				if ($(_row).children().length < 5) {
					$(_row).append(this.renderMore());
				} else {
					let _content = $(_row).parent();
					_content.append(this.renderRow([]));
					$('.row:last-of-type', _content).css({height: '70px'}).append(this.renderMore());
				}
			}
		} else {
			$('.content', _board).css({height: '300px'}).append($(`
				<p style="text-align: center; line-height: 300px">暂无数据</p>
			`));
		}

		return _board;
	}
}

class Forum {
	constructor () {
		this.model = {
			boardList: [],
			myBoardList: [],
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch();
			},
			setBoard: ()=> {
				let url = `${serverUrl}/board_list.php`;
				if (title !== undefined) {
					url = `${serverUrl}/board_list.php?title=${title}`;
				} else if (keyword !== undefined) {
					url = `${serverUrl}/board_list.php?keyword=${keyword}`;
				}

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.boardList = list;
						this.view.setBoard();
					},
				});
			},
			setTabs: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?tabs=1`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.myBoardList = data.list;
						this.view.setTabs();
					},
				});
			},
		};
		this.view = {
			setTabs: ()=> {
				let { myBoardList } = this.model;

				myBoardList.length ? (()=> {
					$('.container .tabs-wrapper .tabs ul.tabs-nav').empty();
					$('.container .tabs-wrapper .tabs .tabs-bd').empty();
				})() : (()=> null)();

				myBoardList.map((_board, idx)=> {
					let { board, board_id, list } = _board;

					$('.container .tabs-wrapper .tabs ul.tabs-nav').append($(`
						<li class="${idx === 0 ? 'active' : ''}">
							<a href="forum_college.html?college_id=${board_id}&college_name=${board}">${board}</a>
						</li>
					`));

					let _panel = $(`<div class="tab-panel article"></div>`);
					_panel.append(list.length ? null : $('<p style="text-align: center; line-height: 40px; ">暂无数据</p>'))
					list.map(_topic=> {
						_panel.append($(`
							<div>
								<img class="fl" src="${imagePrefix}${_topic.avatar}" width="50" height="50">
								<p>
									<a href="forum_article.html?article_id=${_topic.id}&college_id=${_topic.board_id}&college_name=">
										<span class="title" title="${_topic.title}">${_topic.title}</span>
									</a>
								</p>
								<span class="author">${_topic.nick_name}</span>
								<span class="release">发表于</span>
								<span class="date">${_topic.pub_time}</span>
								<span class="reply fr">回复：${_topic.comment_count}</span>
								<span class="visit fr">查看：${_topic.view_count}</span>
							</div>
						`));
					});
					$('.container .tabs-wrapper .tabs .tabs-bd').append(_panel);
				});

				Tabs.refresh();
			},
			setBoard: ()=> {
				let { boardList } = this.model;

				boardList.map((_board)=> {
					let { title, list, last_data } = _board;

					let __board = new Board({
						title: title,
						list: list,
						last_data: last_data,
					}).render();

					$('.container .board-wrapper').append(__board);
				});
			},
			setSearch: ()=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['版面'],
					selected: '版面',
					onSearch: (keyword, categoty)=> {
						if (!keyword) {
							alert('请输入搜索内容');
							return;
						}
						
						location.href = `forum.html?keyword=${keyword}`;
					},
				}).render());
			},
		}
	}

	init () {
		let { controller } = this;

		controller.setTabs();
		controller.setBoard();
		controller.setSearch();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new Forum().init();
});