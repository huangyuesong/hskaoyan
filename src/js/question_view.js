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
			indexList: [],
		};
		this.controller = {
			setQuestion: (_partition_id, callback)=> {
				$.ajax({
					url: `${serverUrl}/question_view.php?section_id=${section_id || ''}&partition_id=${_partition_id || partition_id || ''}&partition_ids=${partition_ids || ''}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.partition = data;
						this.view.setQuestion(id=> this.controller.setQuestion(id, ()=> this.controller.setIndex()));
						callback && callback();
					},
				});
			},
			setIndex: ()=> {
				$.ajax({
					url: `${serverUrl}/question_index.php?section_id=${section_id || ''}&partition_id=${partition_id || ''}&partition_ids=${partition_ids || ''}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.indexList = data.list;
						this.view.setIndex(id=> this.controller.setQuestion(id, ()=> this.controller.setIndex()));
					},
				});
			}
		};
		this.view = {
			setIndex: (callback)=> {
				let { indexList } = this.model;

				let indexWrapper = $(`
					<div class="am-modal am-modal-alert" tabindex="-1" id="modal-index">
					  	<div class="am-modal-dialog">
				    		<div class="am-modal-bd"></div>
					    	<div class="am-modal-footer">
					      		<span class="am-modal-btn" data-am-modal-confirm>收起</span>
					    	</div>
					  	</div>
					</div>
				`);

				indexList.map(_partition=> {
					let { id, index, node_type, title } = _partition;

					if (node_type.toString() === '0') {
						$('.am-modal-bd', indexWrapper).append($(`
							<p class="title">${title}</p>
						`));
					} else if (node_type.toString() === '1') {
						let _index = $(`
							<span class="index">${index}</span>
						`);

						_index.click(evt=> {
							indexWrapper.modal('close');
							
							indexWrapper.on('closed.modal.amui', evt=> callback && callback(id));
						});

						$('.am-modal-bd', indexWrapper).append(_index);
					}
				});

				$('.container > .question-wrapper .header #index').click(evt=> {
					indexWrapper.modal({
						relatedTarget: this,
					});
				});

				$('.container > .question-wrapper .index-modal-wrapper').append(indexWrapper);
			},
			setQuestion: (callback)=> {
				let { partition } = this.model;

				let { id, node_type, title, list, content, partition_count, previous_id, next_id, partition_index } = partition;

				let partitionWrapper = $(`
					<div>
						<div class="header">
							<span class="title">${title}</span>
							<span class="btn-wrapper fr">
								<span class="btn active">看题模式</span>
								<span class="btn">做题模式</span>
							</span>
							<a href="javascript:" id="index"><span class="icon icon-index fr"></span></a>
						</div>
						<div class="fixed-wrapper">
							<span class="index fl">
								<span class="current">${partition_index}</span>
								<span>/${partition_count}</span>
							</span>
							<span class="nav">
								<a href="javascript:" class="prev fl">上一题</a>
								<a href="javascript:" class="next fr">下一题</a>
							</span>
							<a href="javascript:">
								<span class="link fr">报错</span>
								<span class="icon icon-wrong fr"></span>
							</a>
							<a href="javascript:">
								<span class="link fr">收藏</span>
								<span class="icon icon-star fr"></span>
							</a>
						</div>
						<div class="desc-wrapper"></div>
						<div class="content"></div>
						<div class="index-modal-wrapper"></div>
					</div>
				`);

				$('.fixed-wrapper > .nav > .prev', partitionWrapper).click(evt=> callback && callback(previous_id));
				$('.fixed-wrapper > .nav > .next', partitionWrapper).click(evt=> callback && callback(next_id));

				if (!previous_id) $('.prev', partitionWrapper).hide();
				if (!next_id) $('.next', partitionWrapper).hide();

				if (node_type.toString() === '0') {
					$('.content', partitionWrapper).hide();
					$('.fixed-wrapper > .index', partitionWrapper).children().css({color: 'white'});
					$('.desc-wrapper', partitionWrapper).empty().append($(`<div>${list[0].question}</div>`)).css({
						padding: '15px 30px',
						minHeight: '400px',
					});
				} else if (node_type.toString() === '1') {
					let { analysis, answer, choice, question, title } = list[0];

					$('.content', partitionWrapper).append($(`
						<div class="question">${question}</div>
					`).hide());

					$('.content', partitionWrapper).append($(`
						<div class="choice"></div>
					`).hide());
					
					if (choice.length) {
						for (let i = 0; i < choice.split('//').length; ++i) {
							$('.content > .choice', partitionWrapper).append($(`
								<p>${String.fromCharCode(i + 65)}: ${choice.split('//')[i]}</p>
							`));
						}
					}

					if (answer.length) {
						$('.content', partitionWrapper).append($(`
							<div class="answer">
								<span class="icon icon-answer"></span>
								<span>答案</span>
								<p>${answer}</p>
							</div>
						`).hide());
					}

					if (analysis.length) {
						$('.content', partitionWrapper).append($(`
							<div class="analysis">
								<span class="icon icon-answer"></span>
								<span>解析</span>
								<p>${analysis}</p>
							</div>
						`).hide());
					}

					$('.content img', partitionWrapper).each((idx, _img)=> {
						$(_img).prop('src', $(_img).prop('src').replace(/172.22.11.1/, 'www.hskaoyan.com'));
					});

					$('.content img[alt="latex"]', partitionWrapper).each((idx, _img)=> {
						$(_img).load(evt=> {
							$(evt.target).width($(evt.target).width() * 0.45);
						});
					});

					$('.content', partitionWrapper).children().show();
				} else if (node_type.toString() === '2') {

				}

				if (location.hash === '#hide_answer') {
					$('.btn-wrapper', partitionWrapper).children().removeClass('active');
					$('.btn-wrapper > .btn', partitionWrapper).eq(1).addClass('active');
					$('.content > .answer, .content > .analysis', partitionWrapper).hide();
				}

				$('.btn-wrapper .btn', partitionWrapper).click(evt=> {
					$('.btn-wrapper', partitionWrapper).children().removeClass('active');
					$(evt.target).addClass('active');

					if ($(evt.target).index() === 1) {
						$('.content > .answer, .content > .analysis', partitionWrapper).hide();
						location.hash = '#hide_answer';
					} else if ($(evt.target).index() === 0) {
						$('.content > .answer, .content > .analysis', partitionWrapper).show();
						location.hash = '';
					}
				});

				$('.container .question-wrapper').empty().append(partitionWrapper);
			},
		};
	}

	init () {
		this.controller.setQuestion(null, ()=> this.controller.setIndex());
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new QuestionView().init();
});