import '../styles/pagination.scss';

export class Pagination {
	constructor (options) {
		this.pagination = $([
			`<ul data-am-widget="pagination" class="am-pagination am-pagination-default">`,
			    `<li class="am-pagination-first "><a herf="javascript:" class="">第一页</a></li>`,
			    `<li class="am-pagination-prev "><a herf="javascript:" class="">上一页</a></li>`,
				    `<li class="am-active"><a herf="javascript:">1</a></li>`,
			    `<li class="am-pagination-next "><a herf="javascript:" class="">下一页</a></li>`,
			    `<li class="am-pagination-last "><a herf="javascript:" class="">最末页</a></li>`,
			`</ul>`,
		].join(''));

		let { idx, pages, onPageSelect } = options;
		this.idx = idx || 1;
		this.pages = pages || 1;
		this.onPageSelect = onPageSelect || ()=> null;
	}

	render () {
		let { idx, pages, pagination, onPageSelect } = this;

		if (pages > 5) {
			$('.am-pagination .am-pagination-prev', pagination).next().remove();

			if (idx === 1) {
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">2</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === 2) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">2</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">3</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === pages - 1) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages - 2}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">${pages - 1}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === pages) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages - 1}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">${pages}</a></li>`));
			} else {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));

				for (let i = idx - 1; i <= idx + 1; ++i) {
					$('.am-pagination-next', pagination).before($(`<li class="page ${idx === i ? 'am-active' : ''}"><a herf="javascript:">${i}</a></li>`));
				}

				$('.am-pagination-next', pagination).before($(`<span style="margin: 0 10px 0 5px; ">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			}
		} else if (pages > 1) {
			$('.am-pagination-prev', pagination).next().remove();

			for(let i = 1; i <= pages; ++i) {
				$('.am-pagination-next', pagination).before($([
					`<li class="page ${idx === i ? 'am-active' : ''}"><a herf="javascript:">${i}</a></li>`,
				].join('')));
			}
		} else if (pages === 1) {
			pagination = $('<span></span>');
		}

		$('li.page', pagination).click((evt)=> {
			let { target } = evt;
			let idx = $(target).html();
			onPageSelect(idx);
		});

		return pagination;
	}
}
