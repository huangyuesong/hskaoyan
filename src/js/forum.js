import '../styles/forum.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';

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
		let { title, list, last_data, special } = data;

		this.title = title;
		this.list = list;
		this.last_data = last_data;
		this.special = special;
	}

	renderNormalLink (id, title) {
		return $(`
			<span class="mng-link"> 
				<a href="forum_college.html?college_id=${id}&college_name=${title}">${title}</a>
			</span>
		`);
	}

	renderBoard (id, title) {
		return $([
			`<div class="school">`,
			`	<div class="name-wrapper">`,
			`		<a href="${'javascript:void(0)'}" title="${title}">`,
			`			${title}`,
			`		</a>`,
			`	</div>`,
			`	<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>`,
			`	<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>`,
			`	<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">资料</a>`,
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
		if (this.special) {
			let _board = $([
				`<div class="section management">`,
				`	<div class="title">`,
				`		<span>${this.title}</span>`,
				`	</div>`,
				`	<div class="content"></div>`,
				`</div>`,
			].join(''));

			while (this.list.length) {
				let _row = $(`<div class="row"></div>`);

				this.list.splice(0, 5).map(_link=> {
					_row.append(this.renderNormalLink(_link.id, _link.board));
					$('.content', _board).append(_row);
				});
			}

			return _board;
		} else {
			let _board = $([
				`<div class="section district">`,
				`	<div class="title">`,
				`		<span>${this.title}</span>`,
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
}

class Forum {
	constructor () {
		this.model = {
			boardList: [],
			linkList: [],
		};
		this.controller = {
			bindEvents: ()=> {
				$('.container .search-section button#search').click(evt=> {
					let idx = $(evt.target).prev().prop('selectedIndex');

					if (idx === 0) {
						let keyword = $(evt.target).prev().prev().val();

						if (!keyword) {
							alert('请输入搜索关键字');
						} else {
							location.href = `forum.html?keyword=${keyword}`;
						}
					}
				});
			},
			setData: (callback)=> {
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
						this.view.setDistrict();
						callback && callback();
					},
				});
			},
			setOtherSite: ()=> {
				$.ajax({
					url: `${serverUrl}/flink_list.php?limit=18`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.linkList = list;
						this.view.setOtherSite();
					},
				});
			},
		};
		this.view = {
			setDistrict: ()=> {
				let { boardList } = this.model;

				boardList.map((_board)=> {
					let { title, list, last_data, special } = _board;

					let __board = new Board({
						title: title,
						list: list,
						last_data: last_data,
						special: special,
					}).render();

					$('.container').append(__board);
				});
			},
			setOtherSite: ()=> {
				let { linkList } = this.model;

				linkList.map(_link=> {
					_link.href = _link.url;
				});

				new OtherSite(linkList).render();

				$('.other-site .title, .other-site .content').css({background: '#F5F5F5'});
			},
		}
	}

	init () {
		let { controller } = this;

		controller.setData(()=> {
			controller.setOtherSite();
		});
		controller.bindEvents();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum().render();
	new Forum().init();
});