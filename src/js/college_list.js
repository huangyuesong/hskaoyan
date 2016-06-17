import '../styles/college_list.scss';

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
	is_211,
	is_985,
	is_34,
	keyword,
} = url.parse(location.href, true).query;

class CollegeList {
	constructor () {
		this.model = {
			boardList: [],
			myBoardList: [],
			searchResult: [],
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch(this.controller.setSearchResult);

				if (keyword) this.controller.setSearchResult(keyword);
			},
			setBoard: ()=> {
				let url = `${serverUrl}/college_list.php?__=__`
					.concat(title ? `&title=${title}` : ``)
					.concat(is_211 ? `&is_211=${is_211}` : ``)
					.concat(is_985 ? `&is_985=${is_985}` : ``)
					.concat(is_34 ? `&is_34=${is_34}` : ``);

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
			setMyBoard: ()=> {
				if (!title) {
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
			setSearchResult: (keyword)=> {
				$.ajax({
					url: `${serverUrl}/college_list.php?keyword=${keyword}`,
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
									<p>
										<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>
										<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">科目</a>
										<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>
									</p>
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
								<p>
									<a href="news_college.html?college_id=${id}&college_name=${title}" class="link">资讯</a>
									<a href="material_college.html?college_id=${id}&college_name=${title}" class="link">科目</a>
									<a href="forum_college.html?college_id=${id}&college_name=${title}" class="link">论坛</a>
								</p>
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

					$('.container .college-tabs-wrapper').append(wrapper);

					Tabs.refresh();
				})() : (()=> {
					$('.container .college-tabs-wrapper').empty().append($(`
						<div class="tabs">
							<ul class="tabs-nav"></ul>
							<div class="tabs-bd">
								<p style="text-align: center; line-height: 300px; ">暂无数据</p>
							</div>
						</div>
					`));
				})();
			},
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

				$('.container .search-wrapper .search-section').append($(`
					<a class="link" href="college_list.html?is_211=1">211</a>
					<a class="link" href="college_list.html?is_985=1">985</a>
					<a class="link" href="college_list.html?is_34=1">34所</a>
				`));
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