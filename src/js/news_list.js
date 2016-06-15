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
						this.view.setCollegeTab();
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
			setCollegeTab: ()=> {
				let { boardList } = this.model;

				boardList.length ? (()=> {
					let wrapper = $(`
						<div class="tabs">
							<ul class="tabs-nav"></ul>
							<div class="tabs-bd"></div>
						</div>
					`);

					boardList.map((_district, idx)=> {
						let { title, list } = _district;

						$('ul.tabs-nav', wrapper).append($(`
							<li class="${idx === 0 ? 'active' : ''}">
								<a href="college_list.html?title=${title}">${title}</a>
							</li>
						`));

						list.length ? (()=> {
							let districtWrapper = $(`
								<div class="tab-panel district">
									<div class="content"></div>
								</div>
							`);

							while (list.length) {
								let row = $(`<div class="row"></div>`);

								list.splice(0, 5).map(_college=> {
									let { id, board:title } = _college;

									let collegeWrapper = $(`
							<div class="school">
								<div class="mark-wrapper">
									<a href="javascript:" id="mark">关注</a>
								</div>
								<div class="name-wrapper">
									<a href="news_college.html?college_id=${id}&college_name=${title}" title="${title}">
										${title}
									</a>
								</div>
							</div>
									`);

									$('#mark', collegeWrapper).click(evt=> {
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

									row.append(collegeWrapper);
								});

								$('.content', districtWrapper).append(row);
							}

							$('.tabs-bd', wrapper).append(districtWrapper);
						})() : (()=> {
							$('.tabs-bd', wrapper).append($(`
								<div class="tab-panel">
									<p style="text-align: center; line-height: 40px; ">暂无数据</p>
								</div>
							`));
						})();
					});

					$('.container .board-tabs-wrapper').append(wrapper);

					Tabs.refresh();
				})() : (()=> {
					$('.container .board-tabs-wrapper').empty().append($(`
						<div class="tabs">
							<ul class="tabs-nav"></ul>
							<div class="tabs-bd">
								<p style="text-align: center; line-height: 300px; ">暂无数据</p>
							</div>
						</div>
					`));
				})();
			},
			setTabs: ()=> {
				let { myBoardList } = this.model;

				myBoardList.length ? (()=> {
					$('.container .tabs-wrapper .tabs ul.tabs-nav').empty();
					$('.container .tabs-wrapper .tabs .tabs-bd').empty();
				})() : (()=> {
					$('.container .tabs-wrapper .tabs ul.tabs-nav').empty();
					$('.container .tabs-wrapper .tabs .tabs-bd').empty().append(
						$('<p style="text-align: center; line-height: 40px; ">暂无关注</p>')
					);
				})();

				myBoardList.map((_board, idx)=> {
					let { board, board_id, list, alias } = _board;

					$('.container .tabs-wrapper .tabs ul.tabs-nav').append($(`
						<li class="${idx === 0 ? 'active' : ''}">
							<a href="news_college.html?college_id=${board_id}&college_name=${board}">${alias || board}</a>
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
				Tabs.setManage($('.container .tabs-wrapper'), `${serverUrl}/news_list.php?tabs=1`, `${serverUrl}/board_select.php?type=1`, '版面');
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