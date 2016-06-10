import '../styles/news_list.scss';

import './component/header';
import './component/footer';

import Search from './component/search';
import Tabs from './component/tabs';

import {
	serverUrl,
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
			`		<a href="news_college.html?college_id=${id}&college_name=${title}" title="${title}">`,
			`			${title}`,
			`		</a>`,
			`	</div>`,
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
		return $(`<a class="more" href="news_list.html?title=${this.title}">查看全部>></a>`);
	}

	render () {
		let _board = $([
			`<div class="section district">`,
			`	<div class="title">`,
			`		<a href="news_list.html?title=${this.title}">${this.title}</a>`,
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

class NewsList {
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
				let url = `${serverUrl}/college_list.php?news=1`;
				if (keyword !== undefined) {
					url = `${serverUrl}/college_list.php?news=1&keyword=${keyword}`;
				} else if (title !== undefined) {
					url = `${serverUrl}/college_list.php?news=1&title=${title}`;
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
				if (!title && !keyword) {
					$.ajax({
						url: `${serverUrl}/news_list.php?tabs=1`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.myBoardList = data.list;
							this.view.setTabs();
						},
					});
				} else {
					$('.container .tabs-wrapper').remove();
				}
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
							<a href="news_college.html?college_id=${board_id}&college_name=${board}">${board}</a>
						</li>
					`));

					let _panel = $(`<div class="tab-panel news"></div>`);
					_panel.append(list.length ? null : $('<p style="text-align: center; line-height: 40px; ">暂无数据</p>'))
					list.map(_news=> {
						let { id, title, edit_time } = _news;

						_panel.append($(`
							<div>
								<a href="news_detail.html?college_id=${board_id}&college_name=${board}&news_id=${id}&news_name=${title}">${title}</a>
		    					<span class="fr"><span class="icon icon-arrow-right"></span>${edit_time}</span>
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
					category: ['院校'],
					selected: '院校',
					onSearch: (keyword, category)=> {
						if (!keyword) {
							alert('请输入搜索内容');
							return;
						}

						location.href = `news_list.html?keyword=${keyword}`;
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
	new NewsList().init();
});