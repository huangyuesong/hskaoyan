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
} = url.parse(location.href, true).query;

class Forum {
	constructor () {
		this.model = {
			boardList: [],
			myBoardList: [],
			hotList: [],
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch(this.controller.setSearchResult);
			},
			setBoard: ()=> {
				let url = `${serverUrl}/board_list.php`.concat(title ? `?title=${title}` : ``);

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.boardList = list;
						this.view.setBoardTabs();
					},
				});
			},
			setTabs: ()=> {
				if (!title) {
					$.ajax({
						url: `${serverUrl}/topic_list.php?data=mine`,
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
			setSearchResult: (keyword)=> {
				$.ajax({
					url: `${serverUrl}/board_list.php?keyword=${keyword}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.searchResult = data.list;
						this.view.setSearchResult();
					},
				});
			},
			setHotTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?data=recommend`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotList = data.list;
						this.view.setHotTopic();
					},
				});
			},
		};
		this.view = {
			setHotTopic: ()=> {
				let { hotList } = this.model;

				hotList.length ? (()=> {
					let wrapper = $(`
						<div class="tabs">
							<ul class="tabs-nav"></ul>
							<div class="tabs-bd"></div>
						</div>
					`);

					hotList.map((_tab, idx)=> {
						let { title, list } = _tab;

						$('ul.tabs-nav', wrapper).append($(`
							<li class="${idx === 0 ? 'active' : ''}">
								<a href="javascript:">${title}</a>
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
						$('.tabs-bd', wrapper).append(_panel);
					});

					$('.container .hot-wrapper').append(wrapper);
					Tabs.refresh();
				})() : (()=> {
					$('.container .hot-wrapper .tabs ul.tabs-nav').empty();
					$('.container .hot-wrapper .tabs .tabs-bd').empty().append(
						$('<p style="text-align: center; line-height: 40px; ">暂无关注</p>')
					);
				})();
			},
			setSearchResult: ()=> {
				let { title, list } = this.model.searchResult[0];

				let wrapper = $(`
					<div class="district">
						<div class="title">
							<span>${title}</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				list.length ? (()=> {
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

							row.append(collegeWrapper);

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
						});

						$('.content', wrapper).append(row);
					}
				})() : (()=> {
					$('.content', wrapper).append($(`
						<p style="text-align: center; line-height: 300px; ">暂无数据</p>
					`));
				})();

				$('.container .result-wrapper').empty().append(wrapper);
			},
			setBoardTabs: ()=> {
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
								<a href="forum.html?title=${title}">${title}</a>
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
									<a href="forum_college.html?college_id=${id}&college_name=${title}" title="${title}">
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
							<a href="forum_college.html?college_id=${board_id}&college_name=${board}">${alias || board}</a>
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
				Tabs.setManage($('.container .tabs-wrapper'), `${serverUrl}/topic_list.php?data=mine`, `${serverUrl}/board_select.php`, '版面');
			},
			setSearch: (callback)=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['院校'],
					selected: '院校',
					onSearch: (keyword, type)=> {
						if (!keyword) {
							alert('请输入搜索内容');
							return;
						}

						callback && callback(keyword);
					},
				}).render());

				$('.container .search-wrapper .search-section select').hide();
			},
		}
	}

	init () {
		let { controller } = this;

		controller.setTabs();
		controller.setBoard();
		controller.setHotTopic();
		controller.setSearch();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new Forum().init();
});