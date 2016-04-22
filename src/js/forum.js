import '../styles/forum.scss';

import './header';

import './footer';

let schools = [];
for (let i = 0; i < 22; ++i) {
	schools.push({
		name: '北京大学',
		forumLink: '#',
		newsLink: '#',
		dataLink: '#',
	});
}

let School = function (data) {
	return $([
		`<div class="school">`,
		`	<div class="name-wrapper"><a href="#" title="${data.name || '清华大学'}">${data.name || '清华大学'}</a></div>`,
		`	<a href="${data.forumLink || 'javascript:void(0)'}" class="link">论坛</a>`,
		`	<a href="${data.newsLink || 'javascript:void(0)'}" class="link">资讯</a>`,
		`	<a href="${data.dataLink || 'javascript:void(0)'}" class="link">资料</a>`,
		`</div>`,
	].join(''));
};

let Row = function (schools) {
	let _row = $('<div class="row"></div>');

	schools.map((school)=> {
		_row.append(new School({
			name: school.name,
			forumLink: school.forumLink,
			newsLink: school.newsLink,
			dataLink: school.dataLink,
		}));
	});

	return _row;
};

let Region = function (data) {
	return $([
		'<div class="section region">',
		'	<div class="title">',
		`		<span>${data.region || '北京'}</span>`,
		'	</div>',
		'	<div class="content"></div>',
		'</div>',
	].join(''));
};

$(()=> {
	$('.section + .region').remove();

	let region = new Region({
		region: '北京',
	});

	while (schools.length) {
		$('.content', region).append(new Row(schools.splice(0, 8)));
	}

	$('.container').append(region);
});
