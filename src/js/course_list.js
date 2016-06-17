import '../styles/course_list.scss';

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
	keyword,
} = url.parse(location.href, true).query;

class CourseList {
	constructor () {
		this.model = {
			courseList: [],
			myCourseList: [],
			searchResult: [],
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch(this.controller.setSearchResult);

				if (keyword) this.controller.setSearchResult(keyword);
			},
			setCourse: ()=> {
				let url = `${serverUrl}/course_list.php`;

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.courseList = list;
						this.view.setCourse(course_id=> this.controller.setMark(course_id));
					},
				});
			},
			setMark: (course_id)=> {
				$.ajax({
					url: `${serverUrl}/course_select.php?course_id=${course_id}&value=1`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						alert(data.message);
						location.reload();
					},
				});
			},
			setTabs: ()=> {
				$.ajax({
					url: `${serverUrl}/course_list.php?tabs=1`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.myCourseList = data.list;
						this.view.setTabs();
					},
				});
			},
			setSearchResult: (keyword)=> {
				$.ajax({
					url: `${serverUrl}/course_list.php?keyword=${keyword}`,
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
				let { searchResult } = this.model;

				let wrapper = $(`
					<div class="district">
						<div class="title">
							<span>搜索结果</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				searchResult.length ? (()=> {
					while (searchResult.length) {
						let row = $(`<div class="row"></div>`);

						searchResult.splice(0, 5).map(_course=> {
							let { id, course, course_code, college, college_id } = _course;

							let courseWrapper = $(`
								<div class="department">
									<div class="mark-wrapper">
										<a href="javascript:" id="mark">关注</a>
									</div>
									<div class="name-wrapper">
										<a href="chapter_list.html?course_id=${id}" title="${course_code}${course}">${course_code}${course}</a>
									</div>
									<p class="link">${college}</p>
								</div>
							`);

							row.append(courseWrapper);

							$('#mark', courseWrapper).click(evt=> {
								$.ajax({
									url: `${serverUrl}/course_select.php?course_id=${id}&value=1`,
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

				$('.container .result-wrapper').empty().append(wrapper).show();
			},
			setTabs: ()=> {
				let { myCourseList } = this.model;

				myCourseList.length ? (()=> {
					$('.container .tabs-wrapper .tabs ul.tabs-nav').empty();
					$('.container .tabs-wrapper .tabs .tabs-bd').empty();
				})() : (()=> {
					$('.container .tabs-wrapper .tabs ul.tabs-nav').empty();
					$('.container .tabs-wrapper .tabs .tabs-bd').empty().append(
						$('<p style="text-align: center; line-height: 40px; ">暂无关注</p>')
					);
				})();

				myCourseList.map((_course, idx)=> {
					let { college, course, course_code, course_id, alias, list } = _course;

					$('.container .tabs-wrapper .tabs ul.tabs-nav').append($(`
						<li class="${idx === 0 ? 'active' : ''}">
							<a href="chapter_list.html?course_id=${course_id}">${alias || course_code.concat(course)}</a>
						</li>
					`));

					let _panel = $(`<div class="tab-panel course"></div>`);
					_panel.append(list.length ? null : $('<p style="text-align: center; line-height: 40px; ">暂无数据</p>'))
					list.map(_material=> {
						let { id, title, picture, summary, type, question_count } = _material;

						_panel.append($(`
							<div>
								<img class="fl" src="${imagePrefix}${picture}" width="50" height="50">
								<p>
									<a href="chapter_list.html?course_id=${course_id}&material_id=${id}">
										<span class="title" title="${title}">${title}</span>
									</a>
								</p>
								<span class="author">${summary}</span>
								<span class="reply fr">题目数：${question_count}</span>
							</div>
						`));
					});
					$('.container .tabs-wrapper .tabs .tabs-bd').append(_panel);
				});

				Tabs.refresh();
				Tabs.setManage($('.container .tabs-wrapper'), `${serverUrl}/course_list.php?tabs=1`, `${serverUrl}/course_select.php`, '课程');
			},
			setCourse: (callback)=> {
				let { courseList } = this.model;

				let wrapper = $(`
					<div class="section district">
						<div class="title">
							<span>热门科目</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				$('.content', wrapper).append(courseList.length ? null : $('<p style="text-align: center; line-height: 300px; ">暂无数据</p>'));

				while (courseList.length) {
					let _row = $(`<div class="row"></div>`);

					courseList.splice(0, 5).map(_course=> {
						let { id, course, course_code, college, college_id } = _course;

						let courseWrapper = $(`
							<div class="department">
								<div class="mark-wrapper">
									<a href="javascript:" id="mark">关注</a>
								</div>
								<div class="name-wrapper">
									<a href="chapter_list.html?course_id=${id}" title="${course_code}${course}">${course_code}${course}</a>
								</div>
								<p class="link">${college}</p>
							</div>
						`);

						$('#mark', courseWrapper).click(evt=> callback && callback(id));

						_row.append(courseWrapper);
					});

					$('.content', wrapper).append(_row);
				}

				$('.container .course-wrapper').append(wrapper);
			},
			setSearch: (callback)=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['科目'],
					selected: '科目',
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
		controller.setSearch();
		controller.setCourse();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new CourseList().init();
});