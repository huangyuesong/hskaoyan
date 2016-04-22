import '../styles/forum.scss';

import './header';

import './footer';

let region = function () {
	return $([
		'<div class="section region">',
		'	<div class="title">',
		'		<span>北京</span>',
		'	</div>',
		'	<div class="content">',
		'	</div>',
		'</div>',
	].join(''));
};

$(()=> {
	$('.container').append(new region());
});
