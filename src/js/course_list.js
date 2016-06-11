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
		};
		this.controller = {
			setSearch: ()=> {
				this.view.setSearch();
			},
			setCourse: ()=> {
				let url = `${serverUrl}/course_list.php`;
				if (keyword !== undefined) {
					url = `${serverUrl}/course_list.php?keyword=${keyword}`;
				}

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.courseList = list;
						this.view.setCourse();
					},
				});
			},
			setTabs: ()=> {
				if (!keyword) {
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
				} else {
					$('.container .my-wrapper').remove();
				}
			},
		};
		this.view = {
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
							<a href="javascript:">${alias || course_code.concat(course)}</a>
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
									<a href="javascript:">
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
			setCourse: ()=> {
				let { courseList } = this.model;

				let wrapper = $(`
					<div class="section district">
						<div class="title">
							<span>${keyword ? '搜索“'.concat(keyword).concat('”的结果') : '热门科目'}</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				$('.content', wrapper).append(courseList.length ? null : $('<p style="text-align: center; line-height: 300px; ">暂无数据</p>'));

				while (courseList.length) {
					let _row = $(`<div class="row"></div>`);

					courseList.splice(0, 5).map(_course=> {
						let { id, course, course_code, college, college_id } = _course;

						_row.append($(`
							<div class="department">
								<div class="name-wrapper">
									<a href="material_course.html?college_id=${college_id}&college_name=${college}&course_code=${course_code}&course_id=${id}&course_name=${course}">${course_code}${course}</a>
								</div>
								<span class="link">${college}</span>
							</div>
						`));
					});

					$('.content', wrapper).append(_row);
				}

				$('.container .course-wrapper').append(wrapper);
			},
			setSearch: ()=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['科目'],
					selected: '科目',
				}).render());
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