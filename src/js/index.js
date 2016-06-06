import '../styles/index.scss';

import './component/header';
import './component/footer';

import {
	serverUrl,
	imagePrefix,
	SUCCESS,
} from '../../config';

class Index {
	constructor () {
		this.model = {
			tutorList: [],
		};
		this.controller = {
			setTutor: ()=> {
				$.ajax({
					url: `${serverUrl}/tutor_list.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { result_code, list } = data;

						this.model.tutorList = list;
						if (result_code === SUCCESS) {
							this.view.setTutor();
						}
					},
				});
			},
		};
		this.view = {
			setTutor: ()=> {
				let { tutorList } = this.model;

				let wrapper = $(`
					<div class="slide-wrapper"></div>
				`);

				tutorList.map(_tutor=> {
					let { true_name, major, introduce, avatar } = _tutor;

					wrapper.append(`
						<div class="image-wrapper">
							<a href="javascript:">
								<div class="icon icon-person1"></div>
							</a>
							<div class="slogan">
								<span class="left-name">${true_name}</span>
								<span class="left-course">[${major}]</span>
								<p>${introduce}</p>
							</div>
						</div>
					`);

					$('.icon-person1', wrapper).css({backgroundImage: `url('${imagePrefix}${avatar}')`});
				});

				$('.container .section4').empty().append(wrapper.css({width: `${tutorList.length * 300}px`}));

				let interval;

				function left () {
					if (Number(wrapper.css('width').replace('px', '')) 
							- Number($('.container .section4').css('width').replace('px', '')) 
							> -Number(wrapper.css('left').replace('px', ''))) {
						wrapper.css({
							left: `${Number(wrapper.css('left').replace('px', '')) - 1}px`,
						});
					} else {
						clearInterval(interval);
						interval = setInterval(right, 10);
					}
				}

				function right () {
					if (Number(wrapper.css('left').replace('px', '')) < 0) {
						wrapper.css({
							left: `${Number(wrapper.css('left').replace('px', '')) + 1}px`,
						});
					} else {
						clearInterval(interval);
						interval = setInterval(left, 10);
					}
				}

				interval = setInterval(left, 10);
			},
		};
	}

	init () {
		this.controller.setTutor();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new Index().init();
});
