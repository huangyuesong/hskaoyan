import '../styles/material_course.scss';

import './component/header';
import './component/footer';

import Pagination from './component/pagination';
import HeaderForum from './component/header_forum';

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
	material_type,
	material_id,
} = url.parse(location.href, true).query;

if (!college_id || !course_id || !course_name || !course_code) {
	location.href = '/forum.html';
}

class MaterialCourse {
	constructor () {
		this.model = {
			file_list: [],
			pages: 1,
			file_type: [],
			material_list: [],
		};
		this.controller = {
			setTitle: ()=> {
				this.view.setTitle();
			},
			setFileList: ()=> {
				$.ajax({
					url: `${serverUrl}/file_list.php?page=${page || 1}&page_size=20&course_id=${course_id}${material_type ? '&material_type='.concat(material_type) : ''}${material_id ? '&material_id='.concat(material_id) : ''}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { file_list, page_count, material_list } = data;

						this.model.file_list = file_list;
						this.model.pages = page_count;
						this.model.material_list = material_list;
						this.view.setFileList();
						this.view.setMaterialList();
						this.view.setPagination();
						this.view.setHeader();
					},
				});
			},
			getFileType: (callback)=> {
				$.ajax({
					url: `${serverUrl}/file_type.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { file_type } = data;

						this.model.file_type = file_type;
						callback && callback();
					},
				});
			},
		};
		this.view = {
			setHeader: ()=> {
				new HeaderForum([], college_name, '版面').render();
			},
			setMaterialList: ()=> {
				let { material_list } = this.model;

				$('.container .main .layout .left ul').empty();
				material_list.map(_material=> {
					let { id, title } = _material;

					$('.container .main .layout .left ul').append($(`
						<li class="name"><a title="${title}" href="material_course.html?material_id=${id}&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_name}">${title}</a></li>
		    			<li><a href="material_course.html?material_type=本科课件&material_id=${id}&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_name}"><span>本科课件<span></a></li>
		    			<li><a href="material_course.html?material_type=练习习题&material_id=${id}&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_name}"><span>练习习题<span></a></li>
		    			<li><a href="material_course.html?material_type=历年真题&material_id=${id}&college_id=${college_id}&college_name=${college_name}&course_code=${course_code}&course_id=${course_id}&course_name=${course_name}"><span>历年真题<span></a></li>
					`));
				});
			},
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
						let { file_size, pub_time, id, file_name, material_type } = _file;

						$('.container .main table.layout td.right table tbody').append($(`
							<tr>
			    				<td><span>${idx + 1}</span></td>
			    				<td><span>${material_type}</span></td>
			    				<td><a href="material_download.html?course_code=${course_code}&course_id=${course_id}&college_id=${college_id}&college_name=${college_name}&course_name=${course_name}&file_id=${id}&file_name=${file_name}"><span>${file_name}</span></a></td>
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
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${page}`);
					},
					onFirstSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=1`);
					},
					onLastSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${pages}`);
					},
					onPrevSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${idx > 1 ? idx - 1 : 1}`);
					},
					onNextSelect: ()=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${idx < pages ? idx + 1 : pages}`);
					},
					onGoSelect: (target)=> {
						location.href = location.href.replace(/\&page=(\d*)/, '').concat(`&page=${target}`);
					},
				}).render());

				if (!pages || Number(pages) < 2) {
					$('.container .right .forum-body .keyword-section').css({border: '0'});
				}
			},
		};
	}

	init () {
		this.controller.setTitle();
		this.controller.getFileType(()=> {
			this.controller.setFileList();
		});
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
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