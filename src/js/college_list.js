import '../styles/college_list.scss';

import './component/header';
import './component/footer';

import Search from './component/search';

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
		let boardWrapper = $(`
			<div class="school">
				<div class="mark-wrapper">
					<a href="javascript:" id="mark">关注</a>
				</div>
				<div class="name-wrapper">
					<a href="news_college.html?college_id=${id}&college_name=${title}" title="${title}">
						${title}
					</a>
				</div>
				<p>
					<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>
					<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">科目</a>
					<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>
				</p>
			</div>
		`);

		$('#mark', boardWrapper).click(evt=> {
			$.ajax({
				url: `${serverUrl}/board_select.php?board_id=${id}&value=1`,
				type: 'get',
				dataType: 'json',
				cache: false,
				success: (data, status)=> {
					alert(data.message);
					location.reload();
				},
			});
		});

		return boardWrapper;
	}

	renderRow (boards) {
		let row = $('<div class="row"></div>');

		boards.map((_board)=> {
			row.append(this.renderBoard( _board.id, _board.board));
		});

		return row;
	}

	renderMore () {
		return $(`<a class="more" href="college_list.html?title=${this.title}">查看全部>></a>`);
	}

	render () {
		let _board = $([
			`<div class="section district">`,
			`	<div class="title">`,
			`		<a href="college_list.html?title=${this.title}">${this.title}</a>`,
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

class CollegeList {
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
				let url = `${serverUrl}/college_list.php`;
				if (title !== undefined) {
					url = `${serverUrl}/college_list.php?title=${title}`;
				} else if (keyword !== undefined) {
					url = `${serverUrl}/college_list.php?keyword=${keyword}`;
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
			setMyBoard: ()=> {
				if (!title && !keyword) {
					$.ajax({
						url: `${serverUrl}/college_list.php?tabs=1`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.myBoardList = data.list;
							this.view.setMyBoard();
						},
					});
				}
			},
		};
		this.view = {
			setMyBoard: ()=> {
				let { myBoardList } = this.model;

				let wrapper = $(`
					<div class="section district">
						<div class="title">
							<span>我关注的院校</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				while (myBoardList.length) {
					let _row = $(`<div class="row"></div>`);

					myBoardList.splice(0, 5).map(_board=> {
						let { id, board:title } = _board;

						_row.append($(`
							<div class="school">
								<div class="name-wrapper">
									<a href="news_college.html?college_id=${id}&college_name=${title}" title="${title}">
										${title}
									</a>
								</div>
								<p>
									<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>
									<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">科目</a>
									<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>
								</p>
							</div>
						`));
					});

					$('.content', wrapper).append(_row);
				}

				$('.container .my-wrapper').append(wrapper);
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

					$('.container .college-wrapper').append(__board);
				});
			},
			setSearch: ()=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['院校'],
					selected: '院校',
				}).render());
			},
		}
	}

	init () {
		let { controller } = this;

		controller.setSearch();
		controller.setBoard();
		controller.setMyBoard();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new CollegeList().init();
});