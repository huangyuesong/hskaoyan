import '../styles/chapter_list.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	course_id,
	material_id,
} = url.parse(location.href, true).query;

if (!course_id && !material_id) {
	location.href = 'course_list.html';
}

class ChapterList {
	constructor () {
		this.model = {
			chapterList: [],
			materialList: [],
		};
		this.controller = {
			setChapter: (_id)=> {
				$.ajax({
					url: `${serverUrl}/chapter_list.php?material_id=${_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.chapterList = data.list;
						this.view.setChapter();
					},
				});
			},
			setMaterial: ()=> {
				let url = `${serverUrl}/material_list.php?`
				if (course_id) {
					url = url.concat(`course_id=${course_id}`);
				} else if (material_id) {
					url = url.concat(`material_id=${material_id}`);
				}

				$.ajax({
					url: url,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.materialList = data.list;
						this.view.setHeader();
						this.view.setMaterial(this.controller.setChapter);
					},
				});
			},
		};
		this.view = {
			setMaterial: (callback)=> {
				let { materialList } = this.model;

				if (materialList.length) {
					$('.container .material-wrapper ul').empty();
				} else {
					$('.container .material-wrapper ul').empty().append($(`
						<p style="text-align: center; line-height: 300px; ">暂无数据</p>
					`));

					callback && callback(null);
					return;
				}

				let _id = material_id ? material_id : materialList[0].material_id;
				let _modalManage = $(`
					<div class="am-modal am-modal-confirm" tabindex="-1" id="modal-manage">
						<div class="am-modal-dialog">
							<div class="am-modal-bd"></div>
							<div class="am-modal-footer">
								<span class="am-modal-btn" data-am-modal-cancel>取消</span>
								<span class="am-modal-btn" data-am-modal-confirm>确定</span>
							</div>
						</div>
					</div>
				`);

				materialList.map((_material, idx)=> {
					let { material_id:id, summary, title, question_count, topic_count } = _material;

					let materialWrapper = $(`
						<li>
							<div class="material${id === _id ? ' active' : ''}">
								<div>
									<p><a href="javascript:"><span id="title">${title}</span></a></p>
									<p class="question-count"><span>包含${question_count}道题</span></p>
								</div>
								<div>
									<a href="topic_list.html?material_id=${id}">
										<p><span class="icon icon-discuss"></span></p>
										<p>${topic_count}帖</p>
									</a>
								</div>
							</div>
						</li>
					`);

					$('#title', materialWrapper).click(evt=> {
						$('.container .material-wrapper ul > li > .material').removeClass('active');
						$(evt.target).parent().parent().parent().parent().addClass('active');
						callback && callback(id);
					});

					$('.container .material-wrapper ul').append(materialWrapper);

					let _tabRow = $(`
						<div class="tab-row">
							<span class="real-name">${title}</span>
							<a href="javascript:" class="fr top">置顶</a>
							<a href="javascript:" class="fr delete">删除</a>
						</div>
					`).data('material_id', id);

					$('.top', _tabRow).click(evt=> {
						$('.am-modal-bd', _modalManage).prepend($(evt.target).parent());
					});

					$('.delete', _tabRow).click(evt=> {
						$(evt.target).parent().remove();

						if (!$('.am-modal-bd', _modalManage).children().length) {
							$('.am-modal-bd', _modalManage).append($(`
								<p style="text-align: center; line-height: 40px; ">您已删除所有关注</p>
							`));
						}
					});

					$('.am-modal-bd', _modalManage).append(_tabRow).css({
						minHeight: $('.am-modal-bd', _modalManage).height(),
					});
				});

				if (!$('.container .material-wrapper ul > li > .material').hasClass('active')) {
					$('.container .material-wrapper ul > li > .material').eq(0).addClass('active');
					callback && callback(materialList[0].material_id);
				} else {
					callback && callback(_id);
				}

				$('.container .material-wrapper ul').after(_modalManage);
				
				let _manage = $(`
					<li class="manage"><a href="javascript:">资料管理</a></li>
				`);

				$('a', _manage).click(evt=> {
					$('#modal-manage').modal({
						relatedTarget: this,
						onConfirm: options=> {
							let list = [];

							$('.tab-row', _modalManage).each((idx, _row)=> {
								let _rowData = {};
								
								_rowData.material_id = $(_row).data('material_id');
								_rowData.priority = idx;

								list.push(_rowData);
							});

							$.ajax({
								url: `${serverUrl}/material_select.php`,
								type: 'post',
								data: {
									course_id: course_id,
									list: JSON.stringify(list),
								},
								dataType: 'json',
								cache: false,
								success: (data, status)=> {
									alert(data.message);
									location.href = `${location.pathname}?course_id=${data.course_id}`;
								},
							});
						},
						onCancel: ()=> location.reload(),
					});
				});

				course_id && $('.container .material-wrapper ul').append(_manage);
			},
			setHeader: ()=> {
				new HeaderForum([], 'undefined', '课程').render();
			},
			setChapter: ()=> {
				let { chapterList } = this.model;

				chapterList.length ? (()=> {
					$('.container .chapter-wrapper .am-accordion').empty();
				})() : (()=> {
					$('.container .chapter-wrapper .am-accordion').empty().append($(`
						<p style="text-align: center; line-height: 300px; ">暂无数据</p>
					`));
				})();

				chapterList.map((_chapter, idx)=> {
					let { id, list, question_count, single, title, topic_count, url } = _chapter;

					let wrapper;

					if (url) {
						wrapper = $(`
							<dl class="am-accordion-item">
					        	<dt class="am-accordion-title url">
					        		<a href="javascript:">${title}</a>
					        	</dt>
					      	</dl>
						`);

						wrapper.click(evt=> wrapper.removeClass('am-active'));
					} else {
						wrapper = $(`
							<dl class="am-accordion-item">
					        	<dt class="am-accordion-title">
					        		${title}
					        	</dt>
						        <dd class="am-accordion-bd am-collapse">
						        	<div class="am-accordion-content"></div>
						        </dd>
					      	</dl>
						`);

						list.map(_section=> {
							let { file_id, file_name, id, question_count, title, topic_count } = _section;

							let sectionWrapper = $(`
								<div class="section">
									<div>
										<p><a href="question_view.html?section_id=${id}" id="link"><span>${title}</span></a></p>
										<p class="question-count"><span>包含${question_count}道题</span></p>
									</div>
									<div>
										<a href="javascript:">
											<p><span class="icon icon-download"></span></p>
											<p>下载</p>
										</a>
									</div>
									<div>
										<a href="topic_list.html?section_id=${id}">
											<p><span class="icon icon-discuss"></span></p>
											<p>${topic_count}帖</p>
										</a>
									</div>
								</div>
							`);

							if (!Number(question_count) > 0) {
								$('.question-count', sectionWrapper).prev().after($(`
									<p class="no-question">点击进入本节讨论组</p>
								`));

								$('.question-count', sectionWrapper).remove();

								$('#link', sectionWrapper).prop('href', `topic_list.html?section_id=${id}`);
							}

							if (!Number(file_id) > 0) {
								$('.icon-download', sectionWrapper).parent().parent().remove();
							}

							if (Number(single)) {
								wrapper.empty().append(sectionWrapper).addClass('single');
							}

							$('.am-accordion-content', wrapper).append(sectionWrapper);
						});
					}

					$('.container .chapter-wrapper .am-accordion').append(wrapper);
				});

				$.AMUI.accordion.init();
			},
		};
	}

	init () {
		this.controller.setMaterial();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new ChapterList().init();
});