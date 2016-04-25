import '../styles/forum.scss';

import './header';

import './footer';

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
			`	<a href="${'javascript:void(0)'}" class="link">论坛</a>`,
			`	<a href="${'javascript:void(0)'}" class="link">资讯</a>`,
			`	<a href="${'javascript:void(0)'}" class="link">资料</a>`,
			`</div>`,
		].join(''));
	}

	renderRow (colleges) {
		let _row = $('<div class="row"></div>');

		colleges.map((_college)=> {
			_row.append(this.renderCollege( _college.id, _college.college));
		});

		return _row;
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
			$('.content', _district).append(this.renderRow(this.list.splice(0, 8)));
		}

		return _district;
	}
}

class Management {
	constructor () {

	}

	render () {
		return $([
			`<div class="management">`,
			`	<div class="title">`,
			`		<span>站务管理</span>`,
			`	</div>`,
			`	<div class="content">`,
			`		<div class="row">`, 
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">站务公告</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">举报建议和咨询</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">版主申请</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`		</div>`,
			`		<div class="row">`, 
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">站务公告</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">举报建议和咨询</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`			<span class="mng-link">`, 
			`				<a href="${'javascript:void(0)'}">版主申请</a>`,
			`				<span class="unread">(1)</span>`,
			`			</span>`,
			`		</div>`,
			`	</div>`,
			`</div>`,
		].join(''));
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('.section + .district').remove();

	let districts = [];
	for (let j = 0; j < 4; ++j) {
		districts.push({
			district: '北京地区',
			list: [],
		});
		for (let i = 0; i < 23; ++i) {
			districts[j].list.push({
				id: `${i + 1}`,
				college: '北京大学',
			});
		}
	}

	districts.map((_district)=> {
		let { district, list } = _district;

		let __district = new District({
			district: district,
			list: list,
		}).render();

		$('.container').append(__district);
	});

	$('.container').append(new Management().render());
});
