import '../styles/question_view.scss';

import './component/header';
import './component/footer';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

import url from 'url';

let {
	section_id,
	partition_id,
	partition_ids,
} = url.parse(location.href, true).query;

if (!section_id && !partition_ids) location.href = 'course_list.html';

class QuestionView {
	constructor () {
		this.model = {
			partition: {},
		};
		this.controller = {
			setQuestion: ()=> {
				$.ajax({
					url: `${serverUrl}/question_view.php?section_id=${section_id || ''}&partition_id=${partition_id}&partition_ids=${partition_ids || ''}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.partition = data;
						this.view.setQuestion();
					},
				});
			},
		};
		this.view = {
			setQuestion: ()=> {
				let { partition } = this.model;

				let { id, node_type, title, list, content, partition_count, previous_id, next_id, partition_index } = partition;

				let partitionWrapper = $(`
					<div>
						<div class="header">
							<span class="btn-wrapper">
								<span class="btn active">做题模式</span>
								<span class="btn">看题模式</span>
							</span>
							<span class="title fl">${title}</span>
							<a href="javascript:"><span class="icon icon-index fr"></span></a>
						</div>
						<div class="desc-wrapper"></div>
						<div class="fixed-wrapper">
							<span class="fl">
								<span class="current">${partition_index}</span>
								<span>/${partition_count}</span>
							</span>
							<a href="question_view.html?section_id=${section_id || ''}&partition_id=${previous_id}&partition_ids=${partition_ids || ''}" class="prev">上一题</a>
							<a href="question_view.html?section_id=${section_id || ''}&partition_id=${next_id}&partition_ids=${partition_ids || ''}" class="next">下一题</a>
							<a href="javascript:">
								<span class="link fr">报错</span>
								<span class="icon icon-wrong fr"></span>
							</a>
							<a href="javascript:">
								<span class="link fr">收藏</span>
								<span class="icon icon-star fr"></span>
							</a>
						</div>
						<div class="content"></div>
					</div>
				`);

				if (!previous_id) $('.prev', partitionWrapper).hide();
				if (!next_id) $('.next', partitionWrapper).hide();

				if (node_type.toString() === '0') {
					$('.fixed-wrapper', partitionWrapper).hide();
					$('.content', partitionWrapper).hide();
					$('.desc-wrapper', partitionWrapper).empty().append($(`<div>${content}</div>`)).css({
						padding: '15px 30px',
						minHeight: '300px',
					});
				} else if (node_type.toString() === '1') {
					let { analysis, answer, choice, question, title } = list[0];

					$('.content', partitionWrapper).append($(`
						<div>${question}</div>
					`).hide());

					$('.content img', partitionWrapper).each((idx, _img)=> {
						_img.prop('src', imagePrefix.concat(_img.prop('src')));
					});
				} else if (node_type.toString() === '2') {

				}

				$('.btn-wrapper .btn', partitionWrapper).click(evt=> {
					$('.btn-wrapper', partitionWrapper).children().removeClass('active');
					$(evt.target).addClass('active');
				});

				$('.container .question-wrapper').empty().append(partitionWrapper);
			},
		};
	}

	init () {
		this.controller.setQuestion();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new QuestionView().init();
});