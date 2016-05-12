import '../../styles/pagination.scss';

export default class Pagination {
	constructor (options) {
		this.pagination = $([
			`<ul data-am-widget="pagination" class="am-pagination am-pagination-default">`,
			    `<li class="am-pagination-first "><a herf="javascript:" class="">第一页</a></li>`,
			    `<li class="am-pagination-prev "><a herf="javascript:" class="">上一页</a></li>`,
				    `<li class="am-active"><a herf="javascript:">1</a></li>`,
			    `<li class="am-pagination-next "><a herf="javascript:" class="">下一页</a></li>`,
			    `<li class="am-pagination-last "><a herf="javascript:" class="">最末页</a></li>`,
			    `<li><input type="text" placeholder="去第几页" /></li>`,
			    `<li class="am-pagination-go "><a herf="javascript:" class="">Go</a></li>`,
			`</ul>`,
		].join(''));

		let { idx, pages, onPageSelect, onFirstSelect, onLastSelect, onPrevSelect, onNextSelect, onGoSelect, onError } = options;
		this.idx = Number(idx) || 1;
		this.pages = Number(pages) || 1;
		this.onPageSelect = onPageSelect === undefined ? ()=> null : onPageSelect;
		this.onFirstSelect = onFirstSelect === undefined ? ()=> null : onFirstSelect;
		this.onLastSelect = onLastSelect === undefined ? ()=> null : onLastSelect;
		this.onPrevSelect = onPrevSelect === undefined ? ()=> null : onPrevSelect;
		this.onNextSelect = onNextSelect === undefined ? ()=> null : onNextSelect;
		this.onGoSelect = onGoSelect === undefined ? ()=> null : onGoSelect;
		this.onError = onError === undefined ? (err)=> alert(err) : onError;
	}

	render () {
		let { idx, pages, pagination, onPageSelect, onFirstSelect, onLastSelect, onPrevSelect, onNextSelect, onGoSelect, onError } = this;

		if (pages > 5) {
			$('.am-pagination-prev', pagination).next().remove();

			if (idx === 1) {
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">2</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === 2) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">2</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">3</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === pages - 1) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages - 2}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">${pages - 1}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages}</a></li>`));
			} else if (idx === pages) {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">${pages - 1}</a></li>`));
				$('.am-pagination-next', pagination).before($(`<li class="page am-active"><a herf="javascript:">${pages}</a></li>`));
			} else {
				$('.am-pagination-next', pagination).before($(`<li class="page"><a herf="javascript:">1</a></li>`));
				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));

				for (let i = idx - 1; i <= idx + 1; ++i) {
					$('.am-pagination-next', pagination).before($(`<li class="page ${idx === i ? 'am-active' : ''}"><a herf="javascript:">${i}</a></li>`));
				}

				$('.am-pagination-next', pagination).before($(`<span class="seperator">……</span>`));
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

		$('li.am-active', pagination).unbind();

		$('li.am-pagination-first', pagination).click((evt)=> {
			onFirstSelect();
		});

		$('li.am-pagination-last', pagination).click((evt)=> {
			onLastSelect();
		});

		$('li.am-pagination-prev', pagination).click((evt)=> {
			onPrevSelect();
		});

		$('li.am-pagination-next', pagination).click((evt)=> {
			onNextSelect();
		});

		$('li input', pagination).change((evt)=> {
			this.jumpTo = evt.target.value;
		});

		$('li.am-pagination-go', pagination).click((evt)=> {
			let { jumpTo } = this;

			if (jumpTo && /\d+/.test(jumpTo) && Number(jumpTo) <= this.pages && Number(jumpTo) > 0)
				onGoSelect(this.jumpTo);
			else 
				onError('请输入正确的页码');
		});

		return pagination;
	}
}
