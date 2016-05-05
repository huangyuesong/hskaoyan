import '../styles/forum.scss';

import './header';

import './footer';

import HeaderForum from './header_forum';
import OtherSite from './other_site';

import { serverUrl } from '../../config';

class District {
	constructor (data) {
		let { district, list } = data;

		this.district = district;
		this.list = list;
	}

	renderCollege (id, college) {
		return $([
			`<div class="school">`,
			`	<div class="name-wrapper">`,
			`		<a href="${'javascript:void(0)'}" title="${college}">`,
			`			${college}`,
			`		</a>`,
			`	</div>`,
			`	<a href="forum_college.html?college_id=${id}&college_name=${college}" class="link">论坛</a>`,
			`	<a href="news_college.html?college_id=${id}&college_name=${college}" class="link">资讯</a>`,
			`	<a href="material_college.html?college_id=${id}&college_name=${college}" class="link">资料</a>`,
			`</div>`,
		].join(''));
	}

	renderRow (colleges) {
		let row = $('<div class="row"></div>');

		colleges.map((_college)=> {
			row.append(this.renderCollege( _college.id, _college.college));
		});

		return row;
	}

	renderMore () {
		return $(`<a class="more" href="forum_college_more.html?district=${this.district}">查看更多学校>></a>`);
	}

	render () {
		let _district = $([
			`<div class="section district">`,
			`	<div class="title">`,
			`		<span>${this.district}</span>`,
			`	</div>`,
			`	<div class="content"></div>`,
			`</div>`,
		].join(''));

		while (this.list.length) {
			$('.content', _district).append(this.renderRow(this.list.splice(0, 5)));
		}

		$('.content .row:last-of-type', _district).append(this.renderMore());

		return _district;
	}
}

class Forum {
	constructor () {
		this.model = {
			collegeList: [],
			linkList: [],
		};
		this.controller = {
			setData: ()=> {
				$.ajax({
					url: `${serverUrl}/college_list.php?college_limit=24`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data)=> {
						let { list, list_flink } = data

						this.model.collegeList = list;
						this.model.linkList = list_flink;
						this.view.setDistrict();
						this.view.setOtherSite();
					},
					error: (err)=> {
						alert(err.statusText);
					},
				});
			},
		};
		this.view = {
			setDistrict: ()=> {
				let { collegeList } = this.model;

				collegeList.map((_district)=> {
					let { district, list } = _district;

					let __district = new District({
						district: district,
						list: list,
					}).render();

					$('.management').before(__district);
				});
			},
			setOtherSite: ()=> {
				let { linkList } = this.model;

				new OtherSite(linkList).render();

				$('.other-site .title, .other-site .content').css({background: '#F5F5F5'});
			},
		}
	}

	init () {
		let { controller } = this;

		controller.setData();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum().render();
	new Forum().init();
});
