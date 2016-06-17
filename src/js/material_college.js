import '../styles/material_college.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	board_id,
} = url.parse(location.href, true).query;

if (!board_id) {
	location.href = '/forum.html';
}

class MaterialCollege {
	constructor () {
		this.model = {
			linkList: [],
			is_marked: [],
		};
		this.controller = {
			setCourseList: ()=> {
				$.ajax({
					url: `${serverUrl}/course_list.php?board_id=${board_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.courseList = list;
						this.model.is_marked = data.is_marked;
						this.view.setCourseList();
						this.view.setHeader();
					},
				});
			},
		};
		this.view = {
			setHeader: ()=> {
				let { is_marked } = this.model;

				new HeaderForum('版面', is_marked).render();
			},
			setCourseList: ()=> {
				let { courseList } = this.model;

				$('.container .department-wrapper .content').empty();

				if (!courseList.length) {
					$('.container .department-wrapper .content').append($(`
						<p style="text-align: center; line-height: 300px; ">暂无课程</p>
					`));
				} else {
					while (courseList.length) {
						let _row = $(`<div class="row"></div>`);

						courseList.splice(0, 5).map(_course=> {
							let { course_code, course, id} = _course;

							_row.append($(`
								<div class="department">
									<div class="name-wrapper">
										<a href="chapter_list.html?course_code=${course_code}&course_id=${id}&course_name=${course}" title="${course}">${course_code}${course}</a>
									</div>
									<a href="chapter_list.html?course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">课件</a>
									<a href="chapter_list.html?course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">习题</a>
									<a href="chapter_list.html?course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">真题</a>
								</div>
							`));
						});

						$('.container .department-wrapper .content').append(_row);
					}
				}
			},
		};
	}

	init () {
		this.controller.setCourseList();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new MaterialCollege().init();
});