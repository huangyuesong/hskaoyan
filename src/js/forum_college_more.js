import '../styles/forum_college_more.scss';

import './header';

import './footer';

import HeaderForum from './header_forum';
import OtherSite from './other_site';

import { serverUrl } from '../../config';

import url from 'url';

let {
	district,
} = url.parse(location.href, true).query;

if (!district) {
	location.href = 'forum.html';
}

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
			`	<a href="material_course.html?college_id=${id}&college_name=${college}&course=${'828信号与系统'}" class="link">资料</a>`,
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
			$('.content', _district).append(this.renderRow(this.list.splice(0, 5)));
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
			setData: ()=> {
				$.ajax({
					url: `${serverUrl}/college_list.php?district=${district}`,
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

				let { district, list } = collegeList;

				let __district = new District({
					district: district,
					list: list,
				}).render();

				$('.management').before(__district);
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
	new HeaderForum([{
		name: `${district}院校`,
		href: 'javascript:',
	}]).render();
	new Forum().init();
});
