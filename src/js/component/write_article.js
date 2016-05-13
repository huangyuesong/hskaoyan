import '../../styles/write_article.scss';

import {
	SUCCESS,
	NEED_LOGIN,
} from '../../../config';

export default class WriteArticle {
	constructor (options) {
		let { url, labels, board_id, tag, buttonText, topic_id, news_id } = options;

		this.url = url || '';
		this.labels = labels || [];
		this.board_id = board_id || 1;
		this.tag = tag || '发表帖子';
		this.buttonText = buttonText || '发表帖子';
		this.topic_id = topic_id;
		this.news_id = news_id;

		this.write = $([
			`<div class="write-article-wrapper">`,
				`<div class="title"><p>${this.tag}</p></div>`,
				`<div class="content">`,
					`<select><option>选择主题</option></select>`,
					`<input type="text"></input>`,
					`<span>还可以输入<span class="count-down">50</span>个字符</span>`,
					`<textarea></textarea>`,
					`<span class="button">${this.buttonText}</span>`,
				`</div>`,
			`</div>`,
		].join(''));

		if (this.tag === '回复') {
			$('input[type="text"]', this.write).prev().remove();
			$('input[type="text"]', this.write).next().remove();
			$('input[type="text"]', this.write).remove();
		}
	}

	render () {
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
			let content = $('textarea', _context).val();

			if (this.tag === '回复') {
				if (!content) {
					alert('内容不能为空');
					return;
				}

				let data = {content: content};

				if (this.topic_id) {
					data.topic_id = this.topic_id;
				}

				if (this.news_id) {
					data.news_id = this.news_id;
				}

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
					error: (xhr, status, error)=> {
						alert('Network Error!');
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
					error: (xhr, status, error)=> {
						alert('Network Error!');
					},
				});
			}
		});

		return this.write;
	}
}