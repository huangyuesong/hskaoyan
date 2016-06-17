import '../styles/material_download.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	course_id,
	course_code,
	course_name,
	file_id,
	file_name,
} = url.parse(location.href, true).query;

if (!board_id || !course_name || !file_id) {
	location.href = '/forum.html';
}

class MaterialDownload {
	constructor () {
		this.model = {
			file_desc: [],
		};
		this.controller = {
			setFileDesc: ()=> {
				$.ajax({
					url: `${serverUrl}/file_view.php?file_id=${file_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.file_desc = list;
						this.view.setFileDesc();
					},
				});
			},
		};
		this.view = {
			setFileDesc: ()=> {
				let { file_size, down_count, file_describe, pub_time, file_path, id } = this.model.file_desc;

				$('.container .material-wrapper .content table tbody').empty().append($(`
					<tr><td>文件大小&nbsp;:&nbsp;</td><td>${file_size}</td></tr>
					<tr><td>下载次数&nbsp;:&nbsp;</td><td>${down_count}</td></tr>
					<tr><td>文件描述&nbsp;:&nbsp;</td><td>${file_describe}</td></tr>
					<tr><td>上传时间&nbsp;:&nbsp;</td><td>${pub_time}</td></tr>
				`));

				$('#download-link').prop('href', serverUrl.concat(`/download.php?file_id=${id}`));
			},
		};
	}

	init () {
		this.controller.setFileDesc();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum([], 'undefined', '版面').render();

	$('p:last-of-type', $('.footer')).remove();
	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	$('.material-wrapper').append($('.footer').css({
		padding: '20px 0',
		background: 'white',
	}));

	new MaterialDownload().init();
});