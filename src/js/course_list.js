import '../styles/course_list.scss';

import './component/header';
import './component/footer';

import Search from './component/search';

import {
	serverUrl,
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
			setMyCourse: ()=> {
				if (!keyword) {
					$.ajax({
						url: `${serverUrl}/course_list.php?tabs=1`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.myCourseList = data.list;
							this.view.setMyCourse();
						},
					});
				} else {
					$('.container .my-wrapper').remove();
				}
			},
		};
		this.view = {
			setMyCourse: ()=> {
				let { myCourseList } = this.model;

				let wrapper = $(`
					<div class="section district">
						<div class="title">
							<span>我关注的科目</span>
						</div>
						<div class="content"></div>
					</div>
				`);

				while (myCourseList.length) {
					let _row = $(`<div class="row"></div>`);

					myCourseList.splice(0, 5).map(_course=> {
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

				$('.container .my-wrapper').append(wrapper);
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

		controller.setMyCourse();
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