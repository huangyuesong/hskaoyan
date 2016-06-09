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
		};
		this.view = {
			setCourse: ()=> {
				let { courseList } = this.model;

				let wrapper = $(`
					<div class="section district">
						<div class="title">
							<span>热门课程</span>
						</div>
						<div class="content"></div>
					</div>
				`);

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