import '../../styles/write_article.scss';

export default class WriteArticle {
	constructor (options) {
		let { url, labels, college_id } = options;

		this.url = url || '';
		this.labels = labels || [];
		this.college_id = college_id || 1;

		this.write = $([
			`<div class="write-article-wrapper">`,
				`<div class="title"><p>快速发帖</p></div>`,
				`<div class="content">`,
					`<select><option>选择主题</option></select>`,
					`<input type="text"></input>`,
					`<span>还可以输入<span class="count-down">50</span>个字符</span>`,
					`<textarea></textarea>`,
					`<span class="button">发表帖子</span>`,
				`</div>`,
			`</div>`,
		].join(''));
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

			$(evt.target).val(title.substring(0, 50))
			if (title.length > 50) return;
			countDown.text(50 - title.length);
		});

		$('.content .button', this.write).click((evt)=> {
			let _context = $(evt.target).parent();
			
			let label = $('select', _context).val().replace('选择主题', '').replace('无', '');
			let title = $('input', _context).val();
			let content = $('textarea', _context).val();

			if (!title || !content) {
				alert('标题和内容不能为空');
				return;
			}

			$.ajax({
				url: this.url,
				type: 'post',
				data: {
					college_id: this.college_id,
					labels: label,
					title: title,
					content: content,
				},
				cache: false,
				success: (data, status)=> {
					alert('发帖成功');
					location.reload();
				},
				error: (xhr, status, error)=> {
					alert(error);
				},
			});
		});

		return this.write;
	}
}