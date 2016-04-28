import '../styles/forum.scss';

import './header';

import './footer';

import headerForum from './header_forum';

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
			`	<a href="${'javascript:void(0)'}" class="link">资讯</a>`,
			`	<a href="${'javascript:void(0)'}" class="link">资料</a>`,
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
			$('.content', _district).append(this.renderRow(this.list.splice(0, 6)));
		}

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
			ajaxGetData: ()=> {
				$.ajax({
					url: 'http://www.hskaoyan.com/html_php/college_list.php',
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
				let content = $('.content', $('.section + .other-site'));

				content.children().remove();

				linkList.map((_link)=> {
					let { name, href } = _link;

					let link = $([
						`<span class="link">`,
						`	<a href="${href}" target="_blank">${name}</a>`,
						`</span>`,
					].join(''));

					content.append(link);
				});
			},
		}
	}

	init () {
		let { controller } = this;

		controller.ajaxGetData();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new headerForum().render();
	new Forum().init();
});