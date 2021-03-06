import '../../styles/write.scss';

import {
	SUCCESS,
} from '../../../config';

import ubbEditor from './ubbeditor/ubbEditor';

export default class Write {
	constructor (options) {
		let { url, labels, board_id, tag, buttonText, topic_id, news_id, fileUploadUrl, imageUploadUrl } = options;

		this.url = url || '';
		this.labels = labels || [];
		this.board_id = board_id || 1;
		this.tag = tag || '发表帖子';
		this.buttonText = buttonText || '发表帖子';
		this.topic_id = topic_id;
		this.news_id = news_id;
		this.fileUploadUrl = fileUploadUrl;
		this.imageUploadUrl = imageUploadUrl;
		this.fileUploading = false;

		this.write = $([
			`<div class="write-article-wrapper">`,
				`<div class="title"><p>${this.tag}</p></div>`,
				`<div class="content">`,
					`<select><option>选择主题</option></select>`,
					`<input type="text"></input>`,
					`<span>还可以输入<span class="count-down">50</span>个字符</span>`,
					`<textarea id="editor"></textarea>`,
					`<span class="button">${this.buttonText}</span>`,
				`</div>`,
			`</div>`,
		].join(''));

		let attachmentWrapper = $(`
			<div class="attachment-wrapper">
				<form id="file-form" enctype="multipart/form-data">
					<input type="file" id="file-input" name="file" />
				</form>
				<button class="select-btn">添加附件</button>
				<ul></ul>
			</div>
		`);

		$('#editor', this.write).after(attachmentWrapper);

		if (this.tag === '回复' || this.tag === '评论资讯') {
			$('input[type="text"]', this.write).prev().remove();
			$('input[type="text"]', this.write).next().remove();
			$('input[type="text"]', this.write).remove();
		}
	}

	render (wrapper) {
		$('.select-btn', this.write).click(evt=> {
			if (this.fileUploading) {
				alert('附件正在上传，请稍后');
				return;
			}
			$('#file-input', this.write).val('');
			$('#file-input', this.write).click();
		});

		$('#file-input', this.write).change(evt=> {
			this.fileUploading = true;
			let form = new FormData($('form', this.write)[0]);
			$.ajax({
				url: this.fileUploadUrl,
				type: 'post',
				data: form,
				cache: false,
				contentType: false,
				processData: false,
				dataType: 'json',
				success: (data, status)=> {
					this.fileUploading = false;
					if (!data.file_name) {
						alert('附件上传失败，请重新选择文件');
					} else {
						let attachment = $(`
							<li data-file-name="${data.file_name}">
								<span>${$(evt.target).val().replace(/C\:\\fakepath\\/, '').replace(/C\:\/fakepath\//, '')}</span>
								<a href="javascript:">删除</a>
							</li>
						`);

						$('a', attachment).click(evt=> $(evt.target).parent().remove());

						$('.attachment-wrapper ul', this.write).append(attachment);
					}
				},
			});
		});

		this.labels.map((_label)=> {
			$('.content select', this.write).append($(`<option>${_label}</option>`));
		});

		$('.content select', this.write).change((evt)=> {
			$('.content select', this.write).children().eq(0).text('无');
		});

		$('.content input[type="text"]', this.write).on('input', (evt)=> {
			let countDown = $('.content .count-down', this.write);
			let title = $(evt.target).val();

			if (title.length > 50) {
				$(evt.target).val(title.substring(0, 50));
				return;
			}
			countDown.text(50 - title.length);
		});

		$('.content .button', this.write).click((evt)=> {
			let _context = $(evt.target).parent();
			let content = nEditor.tGetUBB();
			let attaches = [];

			$('.attachment-wrapper ul li', this.write).each((_, _attach)=> {
				attaches.push($(_attach).data('file-name'));
			});

			if (this.tag === '回复') {
				if (!content) {
					alert('内容不能为空');
					return;
				}

				let data = {
					content: content,
					attaches: attaches.join('//'),
					topic_id: this.topic_id,
				};

				$.ajax({
					url: this.url,
					type: 'post',
					data: data,
					cache: false,
					success: (data, status)=> {
						let { result_code, message } = JSON.parse(data);

						if (result_code === SUCCESS) {
							alert('发表成功');
							location.reload();
						} else  {
							alert(message);
						}
					},
				});
			} else if (this.tag === '评论资讯') {
				if (!content) {
					alert('内容不能为空');
					return;
				}

				let data = {
					content: content,
					news_id: this.news_id,
				};

				$.ajax({
					url: this.url,
					type: 'post',
					data: data,
					cache: false,
					success: (data, status)=> {
						let { result_code, message } = JSON.parse(data);

						if (result_code === SUCCESS) {
							alert('发表成功');
							location.reload();
						} else  {
							alert(message);
						}
					},
				});
			} else {
				let label = $('select', _context).val().replace('选择主题', '').replace('无', '');
				let title = $('input', _context).val();

				if (!title || !content) {
					alert('标题和内容不能为空');
					return;
				}

				$.ajax({
					url: this.url,
					type: 'post',
					data: {
						board_id: this.board_id,
						labels: label,
						title: title,
						content: content,
						attaches: attaches.join('//'),
					},
					cache: false,
					success: (data, status)=> {
						let { result_code, message } = JSON.parse(data);

						if (result_code === SUCCESS) {
							alert('发帖成功');
							location.reload();
						} else {
							alert(message);
						}
					},
				});
			}
		});

		wrapper.append(this.write);

		let nEditor = new ubbEditor('editor');
		nEditor.imageUploadUrl = this.imageUploadUrl;
		nEditor.tLang = 'zh-cn';
		nEditor.tToolbar = 'custom';
		nEditor.tInit('nEditor', '/ubbeditor/');
		return nEditor;
	}
}