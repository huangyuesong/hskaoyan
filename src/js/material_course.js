import '../styles/material_course.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';
import Pagination from './component/pagination';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	course_id,
	course_code,
	course_name,
	page,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !course_id || !course_name || !course_code) {
	location.href = '/forum.html';
}

class MaterialCourse {
	constructor () {
		this.model = {
			linkList: [],
			file_list: [],
			pages: 1,
		};
		this.controller = {
			setOtherSite: ()=> {
				$.ajax({
					url: `${serverUrl}/flink_list.php?limit=18`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.linkList = list;
						this.view.setOtherSite();
					},
				});
			},
			setTitle: ()=> {
				this.view.setTitle();
			},
			setFileList: ()=> {
				$.ajax({
					url: `${serverUrl}/file_list.php?page=${page || 1}&page_size=20&course_id=${course_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { file_list, page_count } = data;

						this.model.file_list = file_list;
						this.model.pages = page_count;
						this.view.setFileList();
						this.view.setPagination();
					},
				});
			},
		};
		this.view = {
			setFileList: ()=> {
				let { file_list } = this.model;

				$('.container .main table.layout td.right tr:not(:first-of-type)').remove();
				if (!file_list.length) {
					$('.container .main table.layout td.right tr td:nth-of-type(3)').css({width: '487px'});
					$('.container .main table.layout td.right').append($(`
						<p style="line-height: 40px; text-align: center; ">暂无资料</p>
					`));
				} else {
					file_list.length < 20 ? 
						$('.container .main table.layout td.right table').css({paddingBottom: `${400 - file_list.length * 36}px`}) :
						()=> null;

					file_list.map((_file, idx)=> {
						let { file_size, pub_time, material_id, file_name } = _file;

						$('.container .main table.layout td.right table tbody').append($(`
							<tr>
			    				<td><span>${idx + 1}</span></td>
			    				<td><span>${course_name}</span></td>
			    				<td><a href="material_download.html?college_id=${course_id}&college_name=${college_name}&course_name=${course_name}&material_id=${material_id}&material_name=${file_name}"><span>${file_name}</span></a></td>
			    				<td><span>${file_size}</span></td>
			    				<td><span>${pub_time}</span></td>
			    			</tr>
						`));
					});
				}
			},
			setTitle: ()=> {
				$('.container .title span').text(`${college_name} ${course_code}${course_name} 考研复习资料下载`);
			},
			setOtherSite: ()=> {
				let { linkList } = this.model;

				linkList.map(_link=> {
					_link.href = _link.url;
				});

				new OtherSite(linkList).render();
			},
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_name}&page=${page}`;
					},
					onFirstSelect: ()=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_id}&page=${1}`;
					},
					onLastSelect: ()=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_id}&page=${pages}`;
					},
					onPrevSelect: ()=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_id}&page=${idx > 1 ? idx - 1 : 1}`;
					},
					onNextSelect: ()=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_id}&page=${idx < pages ? idx + 1 : pages}`;
					},
					onGoSelect: (target)=> {
						location.href = `material_course.html?college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_id}&page=${target}`;
					},
				}).render());

				if (!pages || Number(pages) < 2) {
					$('.container .right .forum-body .keyword-section').css({border: '0'});
				}
			},
		};
	}

	init () {
		this.controller.setOtherSite();
		this.controller.setTitle();
		this.controller.setFileList();
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
			name: `资料`,
			href: `material_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `${course_code}${course_name}`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new MaterialCourse().init();

	for (let i = 0; i < 19; i++) {
		$('.layout .right table tbody').append($('.layout .right table tbody tr').eq(1).clone());
	}
});