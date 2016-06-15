import '../../styles/tabs.scss';

import {
	serverUrl,
} from '../../../config';

import url from 'url';

$(()=> {
	$('.tabs > ul.tabs-nav > li:not(.manage) > a').mouseenter(evt=> {
		$(evt.target).parent().parent().find('li').removeClass('active');
		$(evt.target).parent().addClass('active');
		
		let idx = $(evt.target).parent().index();
		$(evt.target).parent().parent().next().find('.tab-panel').hide();
		$(evt.target).parent().parent().next().find('.tab-panel').eq(idx).show();
	});

	$('.tabs > .tabs-bd > .tab-panel').each((idx, _panel)=> {
		if ($(_panel).height() < $(_panel).parent().height()) {
			$(_panel).height($(_panel).parent().height());
		}
	});
});

export default class Tabs {
	static refresh () {
		console.log($('.tabs'))
		$('.tabs > ul.tabs-nav > li:not(.manage) > a').mouseenter(evt=> {
			$(evt.target).parent().parent().find('li').removeClass('active');
			$(evt.target).parent().addClass('active');
			
			let idx = $(evt.target).parent().index();
			$(evt.target).parent().parent().next().find('.tab-panel').hide();
			$(evt.target).parent().parent().next().find('.tab-panel').eq(idx).show();
		});

		$('.tabs > .tabs-bd > .tab-panel').each((idx, _panel)=> {
			if ($(_panel).height() < $(_panel).parent().height()) {
				$(_panel).height($(_panel).parent().height());
			}
		});
	}

	static setManage (wrapper, srcUrl, submitUrl, type) {
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

		if (type === '版面') {
			$.ajax({
				url: srcUrl,
				type: 'get',
				dataType: 'json',
				cache: false,
				success: (data, status)=> {
					data.list.map((_tab, idx)=> {
						let { alias, board, board_id } = _tab;

						let _tabRow = $(`
							<div class="tab-row">
								<span class="real-name">${board}</span>
								<a href="javascript:" class="fr top">置顶</a>
								<a href="javascript:" class="fr delete">删除</a>
								<p class="alias">
									<a href="javascript:" class="modify"><i class="am-icon-pencil-square-o"></i></a>
									<span>${alias || '未设置显示名称'}</span>
								</p>
							</div>
						`).data('board_id', board_id).data('alias', alias);

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

						$('.modify', _tabRow).click(evt=> {
							let _modify = $(`
								<input type="text" placeholder="请输入显示名称" id="alias" />
							`);

							_modify.val($(evt.target).parent().parent().parent().data('alias'));
							$(evt.target).parent().parent().html(_modify);
						});

						$('.am-modal-bd', _modalManage).append(_tabRow);
					});

					$('.tabs', wrapper).append(_modalManage);

					let  _manageLink = $(`
						<li class="fr manage">
							<a href="javascript:">管理</a>
						</li>
					`);

					_manageLink.click(evt=> {
						$('.tabs #modal-manage', wrapper).modal({
							relatedTarget: this,
							onConfirm: options=> {
								let list = [];

								$('.tab-row', wrapper).each((idx, _row)=> {
									let _rowData = {};
									
									_rowData.alias = $('input#alias', $(_row)).val() || $(_row).data('alias');
									_rowData.priority = idx;
									_rowData.board_id = $(_row).data('board_id');

									list.push(_rowData);
								});

								let data = {};
								Object.assign(data, url.parse(submitUrl, true).query);

								data.list = JSON.stringify(list);
								$.ajax({
									url: submitUrl,
									type: 'post',
									data: data,
									dataType: 'json',
									cache: false,
									success: (data, status)=> {
										alert(data.message);
										location.reload();
									},
								});
							},
							onCancel: ()=> location.reload(),
						});
					});

					$('.tabs ul.tabs-nav').append(_manageLink);
				},
			});
		} else if (type === '课程') {
			$.ajax({
				url: srcUrl,
				type: 'get',
				dataType: 'json',
				cache: false,
				success: (data, status)=> {
					data.list.map((_tab, idx)=> {
						let { alias, course, course_code, course_id } = _tab;

						let _tabRow = $(`
							<div class="tab-row">
								<span class="real-name">${course_code.concat(course)}</span>
								<a href="javascript:" class="fr top">置顶</a>
								<a href="javascript:" class="fr delete">删除</a>
								<p class="alias">
									<a href="javascript:" class="modify"><i class="am-icon-pencil-square-o"></i></a>
									<span>${alias || '未设置显示名称'}</span>
								</p>
							</div>
						`).data('course_id', course_id).data('alias', alias);

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

						$('.modify', _tabRow).click(evt=> {
							let _modify = $(`
								<input type="text" placeholder="请输入显示名称" id="alias" />
							`);

							_modify.val($(evt.target).parent().parent().parent().data('alias'));
							$(evt.target).parent().parent().html(_modify);
						});

						$('.am-modal-bd', _modalManage).append(_tabRow);
					});

					$('.tabs', wrapper).append(_modalManage);

					let  _manageLink = $(`
						<li class="fr manage">
							<a href="javascript:">管理</a>
						</li>
					`);

					_manageLink.click(evt=> {
						$('.tabs #modal-manage', wrapper).modal({
							relatedTarget: this,
							onConfirm: options=> {
								let list = [];

								$('.tab-row', wrapper).each((idx, _row)=> {
									let _rowData = {};
									
									_rowData.alias = $('input#alias', $(_row)).val();
									_rowData.priority = idx;
									_rowData.course_id = $(_row).data('course_id');

									list.push(_rowData);
								});

								let data = {};
								Object.assign(data, url.parse(submitUrl, true).query);

								data.list = JSON.stringify(list);
								$.ajax({
									url: submitUrl,
									type: 'post',
									data: data,
									dataType: 'json',
									cache: false,
									success: (data, status)=> {
										alert(data.message);
										location.reload();
									},
								});
							},
							onCancel: ()=> location.reload(),
						});
					});

					$('.tabs ul.tabs-nav').append(_manageLink);
				},
			});
		}
	}
}