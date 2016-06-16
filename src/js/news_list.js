import '../styles/news_list.scss';

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

class NewsList {
	constructor () {
		this.model = {
			boardList: [],
			myBoardList: [],
			imageList: [],
			hotList: [],
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch(this.controller.setSearchResult);
			},
			setBoard: ()=> {
				let url = `${serverUrl}/college_list.php?news=1`.concat(title ? `&title=${title}` : ``);

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
				if (!title) {
					$.ajax({
						url: `${serverUrl}/news_list.php?data=mine`,
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
			setImageSlider: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?data=image`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.imageList = data.list;
						this.view.setImageSlider();
					},
				});
			},
			setHotNews: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?data=recommend`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotList = data.list;
						this.view.setHotNews();
					},
				});
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
		};
		this.view = {
			setHotNews: ()=> {
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

						list.map(_news=> {
							let { title, id, edit_time } = _news;

							$('.tabs-bd', wrapper).append($(`
								<div class="tab-panel news">
									<div>
										<a href="news_detail.html?news_id=${id}" title="${title}">${title}</a>
				    					<span class="fr"><span class="icon icon-arrow-right"></span>${edit_time}</span>
				    				</div>
								</div>
							`));
						});
					});

					$('.container .hot-wrapper .news-wrapper').empty().append(wrapper);

					Tabs.refresh();
				})() : (()=> {
					$('.container .hot-wrapper .news-wrapper').empty();
				})();
			},
			setImageSlider: ()=> {
				let { imageList } = this.model;

				imageList.length ? (()=> {
					$('.container .hot-wrapper .image-wrapper').empty();

					let wrapper = $(`
						<div class="am-slider am-slider-a1">
							<ul class="am-slides"></ul>
						</div>
					`);

					imageList.map(_img=> {
						$('ul.am-slides', wrapper).append($(`
							<li>
					        	<a href="news_detail.html?news_id=${_img.id}">
					        		<img src="${imagePrefix}${_img.picture}" width="280" height="200">
					        	</a>
					        </li>
						`));
					});

					$('.container .hot-wrapper .image-wrapper').append(wrapper);

					wrapper.flexslider({
						directionNav: false,
						slideshowSpeed: 4000,
						pauseOnAction: false,
					});
				})() : (()=> {
					$('.container .hot-wrapper .image-wrapper').empty();
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
								<a href="news_list.html?title=${title}">${title}</a>
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
								<a href="news_detail.html?college_id=${board_id}&college_name=${board}&news_id=${id}&news_name=${title}" title="${title}">${title}</a>
		    					<span class="fr"><span class="icon icon-arrow-right"></span>${edit_time}</span>
		    				</div>
						`));
					});
					$('.container .tabs-wrapper .tabs .tabs-bd').append(_panel);
				});

				Tabs.refresh();
				Tabs.setManage($('.container .tabs-wrapper'), `${serverUrl}/news_list.php?tabs=1`, `${serverUrl}/board_select.php?type=1`, '版面');
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
		controller.setImageSlider();
		controller.setHotNews();
		controller.setSearch();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new NewsList().init();
});