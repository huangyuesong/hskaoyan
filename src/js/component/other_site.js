import '../../styles/other_site.scss';

export default class OtherSite {
	constructor (linkArr) {
		this.linkArr = linkArr;
	}

	render () {
		let _otherSite = $([
			`<div class="other-site">`,
				`<div class="title"><span>友情链接</span></div>`,
				`<div class="content">`,
					`<ul></ul>`,
				`</div>`,
			`</div>`,
		].join(''));

		this.linkArr.map((link)=> {
			$('.content ul', _otherSite).append(`<li><a href="${link.href || 'javascript:'}" target="_blank"><span>${link.name || '友情链接'}</span></a></li>`)
		});

		$('.container').append(_otherSite);
	}
}
