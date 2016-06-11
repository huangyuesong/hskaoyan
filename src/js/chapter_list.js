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
				let _id;

				materialList.length ? (()=> {
					$('.container .material-wrapper ul').empty();
				})() : (()=> {
					$('.container .material-wrapper ul').empty().append($(`
						<p style="text-align: center; line-height: 300px; ">暂无数据</p>
					`));
				})();

				materialList.map((_material, idx)=> {
					let { material_id:id, summary, title, question_count, topic_count } = _material;

					if (!material_id && idx === 0) {
						_id = id;
					}

					let materialWrapper = $(`
						<li>
							<div class="material${id === material_id || (!material_id && idx === 0) ? ' active' : ''}">
								<div>
									<p><a href="javascript:"><span id="title">${title}</span></a></p>
									<p class="question-count"><span>包含${question_count}道题</span></p>
								</div>
								<div>
									<a href="javascript:">
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
				});

				if (!material_id) {
					callback && callback(_id);
				} else {
					callback && callback(material_id);
				}
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
										<p><a href="javascript:"><span>${title}</span></a></p>
										<p class="question-count"><span>包含${question_count}道题</span></p>
									</div>
									<div>
										<a href="javascript:">
											<p><span class="icon icon-download"></span></p>
											<p>下载</p>
										</a>
									</div>
									<div>
										<a href="javascript:">
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