import '../styles/join_us.scss';

import './component/header';
import './component/footer';

import {
	serverUrl,
} from '../../config';

class JoinUs {
	constructor () {
		this.model = {
			school: '',
			school_id: '',
			situation: '',
			major: '',
			score_zz: '',
			score_yy: '',
			score_sx: '',
			score_zy: '',
			course_code: '',
			has_exp: '',
			provinceList: [],
			schoolList: [],
			situationList: [],
			fileUploading: false,
			file_name: '',
		};
		this.controller = {
			bindEvents: ()=> {
				$('.container .form .bd ul.col li #file-select').click(evt=> {
					$('.container form#form > input[type="file"]').click();
				});

				$('.container form#form > input[type="file"]').change(evt=> {
					$('.container .form .bd ul.col li #file-select').val($(evt.target).val().replace(/C\:(\\|\/)fakepath(\\|\/)/, ''));

					let form = new FormData($('.container form#form')[0]);
					this.model.fileUploading = true;
					$.ajax({
						url: `${serverUrl}/upload_file.php`,
						type: 'post',
						data: form,
						cache: false,
						contentType: false,
						processData: false,
						dataType: 'json',
						success: (data, status)=> {
							if (data.file_name) {
								this.model.file_name = data.file_name;
								this.model.fileUploading = false;
							} else {
								alert('文件上传失败，请您重新选择文件');
							}
						},
					});
				});

				$('.container .form .bd .button').click(evt=> {
					if (this.model.fileUploading) {
						alert('文件上传中，请稍候');
					} else {
						$.ajax({
							url: `${serverUrl}/tutor_info_update.php`,
							type: 'post',
							data: {
								'school-id': $('.container .form .bd #school').val(),
								'situation': $('.container .form .bd #situation').val(),
								'major': $('.container .form .bd #major').val(),
								'score-zz': $('.container .form .bd #score-zz').val(),
								'score-yy': $('.container .form .bd #score-yy').val(),
								'score-sx': $('.container .form .bd #score-sx').val(),
								'score-zy': $('.container .form .bd #score-zy').val(),
								'course-code': $('.container .form .bd #course-code').val(),
								'has-exp': $('.container .form .bd #has-exp').val(),
								'file-name': this.model.file_name,
							},
							cache: false,
							dataType: 'json',
							success: (data, status)=> {
								alert(data.message);
							},
						});
					}
				});

				$(`.container .form select#province`).change(evt=> {
					if ($(evt.target).children().length > this.model.provinceList.length) {
						$(evt.target).children().eq(0).remove();
					}
					this.controller.setSchool($(evt.target).val());
				});
			},
			setProvince: ()=> {
				$.ajax({
					url: `${serverUrl}/college_ajax.php?type=province`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.provinceList = data;
						this.view.setProvince();
					},
				});
			},
			setSchool: (province)=> {
				$.ajax({
					url: `${serverUrl}/college_ajax.php?type=college&value=${province}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.schoolList = data;
						this.view.setSchool();
					},
				});
			},
			setSituation: (callback)=> {
				$.ajax({
					url: `${serverUrl}/tutor_situation.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.situationList = data.list;
						this.view.setSituation();
						callback && callback();
					},
				});
			},
			setForm: ()=> {
				$.ajax({
					url: `${serverUrl}/tutor_info.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						Object.keys(data.list).map(key=> this.model[key] = data.list[key]);
						this.view.setForm();
					},
				});
			},
		};
		this.view = {
			setProvince: ()=> {
				this.model.provinceList.map(_province=> {
					let { text, value } = _province;
					$(`.container .form select#province`).append($(`<option value="${value}">${text}</option>`));
				});
			},
			setSchool: ()=> {
				$(`.container .form select#school`).empty();
				this.model.schoolList.map(_school=> {
					let { text, value } = _school;
					$(`.container .form select#school`).append($(`<option value="${value}">${text}</option>`));
				});
			},
			setSituation: ()=> {
				this.model.situationList.map(_situation=> {
					let { id, situation } = _situation;
					$(`.container .form select#situation`).append($(`<option value="${id}">${situation}</option>`));
				});
			},
			setForm: ()=> {
				Object.keys(this.model).map(key=> {
					let value = this.model[key];
					
					$(`.container .form input#${key.replace('_', '-')}`).val(value);

					$(`.container .form select#${key.replace('_', '-')}`).each((_, select)=> {
						if ($('option', $(select)).length) {
							$('option', $(select)).each((idx, option)=> {
								if (value === $(option).val()) {
									$(select).prop('selectedIndex', idx);
								}
							});
						} else {
							let _htmlValue = `value="${this.model.school_id}"`;
							$(select).append($(`<option ${key === 'school' ? _htmlValue : ''}>${value}</option>`));
						}
					});
				});
			},
		};
	}

	init () {
		this.controller.bindEvents();
		this.controller.setProvince();
		this.controller.setSituation(()=> {
			this.controller.setForm();
		});
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('.footer').css({background: '#CA1332'});

	new JoinUs().init();
});