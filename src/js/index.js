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

						this.model = list;
						if (result_code === SUCCESS) {
							this.view.setTutor();
						}
					},
				});
			},
		};
		this.view = {
			setTutor: ()=> {
				
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
