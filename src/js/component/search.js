import '../../styles/search.scss';

export default class Search {
	constructor (options) {
		let { placeholder, category, selected, onSearch } = options;

		this.placeholder = placeholder || '请输入搜索内容';
		this.category = category || [];
		this.selected = selected || '';
		this.onSearch = onSearch === undefined ? null : onSearch;
	}

	render () {
		let _html = $(`
			<div class="search-section">
				<input type="text" placeholder="${this.placeholder}"></input>
				<select></select>
				<button id="search">搜　索</button>
			</div>
		`);

		this.category.map((_option, idx)=> {
			let select = $('select', _html);

			select.append($(`
				<option>${_option}</option>
			`));

			if (this.selected === _option) {
				select.prop('selectedIndex', idx);
			}
		});

		$('button', _html).click(evt=> {
			this.onSearch !== null ? 
			this.onSearch($('input', _html).val(), $('select', _html).val()) : 
			(()=> {
				if (!$('input', _html).val()) {
					alert('请输入搜索内容');
					return;
				}

				switch ($('select', _html).val()) {
					case '院校':
						location.href = `college_list.html?keyword=${$('input', _html).val()}`;
						break;
					case '科目':
						location.href = `course_list.html?keyword=${$('input', _html).val()}`;
						break;
					case '资料':
						break;
					default:
						break;
				}
			})();
		});

		$('input', _html).keydown(evt=> evt.which === 13 ? $('button', _html).click() : (()=> null)());

		return _html;
	}
}