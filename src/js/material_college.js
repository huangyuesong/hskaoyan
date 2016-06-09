import '../styles/material_college.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id) {
	location.href = '/forum.html';
}

class MaterialCollege {
	constructor () {
		this.model = {
			linkList: [],
		};
		this.controller = {
			setCourseList: ()=> {
				$.ajax({
					url: `${serverUrl}/course_list.php?board_id=${college_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.courseList = list;
						this.view.setCourseList();
					},
				});
			},
		};
		this.view = {
			setCourseList: ()=> {
				let { courseList } = this.model;

				$('.container .department-wrapper .content').empty();

				if (!courseList.length) {
					$('.container .department-wrapper .content').append($(`
						<p class="text-align: center; line-height: 30px; ">暂无课程</p>
					`));
				} else {
					while (courseList.length) {
						let _row = $(`<div class="row"></div>`);

						courseList.splice(0, 5).map(_course=> {
							let { course_code, course, id} = _course;

							_row.append($(`
								<div class="department">
									<div class="name-wrapper">
										<a href="material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${id}&course_name=${course}" title="${course}">${course_code}${course}</a>
									</div>
									<a href="material_course.html?material_type=本科课件&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">课件</a>
									<a href="material_course.html?material_type=练习习题&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">习题</a>
									<a href="material_course.html?material_type=历年真题&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${id}&course_name=${course}" class="link">真题</a>
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
	new HeaderForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `科目`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new MaterialCollege().init();

	for (let i = 0; i < 4; ++i) {
		$('.introduction .center .upper ul').append($('.introduction .center .upper ul li').eq(0).clone());
	}

	for (let i = 0; i < 9; ++i) {
		$('.introduction .center .lower ul').append($('.introduction .center .lower ul li').eq(0).clone());
	}

	for (let i = 0; i < 7; ++i) {
		$('.introduction .right').append($('.introduction .right p').eq(1).clone());
	}
});