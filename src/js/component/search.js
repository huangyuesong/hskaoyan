import '../../styles/search.scss';

export default class Search {
	constructor (options) {
		let { placeholder, category, selected, onSearch } = options;

		this.placeholder = placeholder || '请输入搜索内容';
		this.category = category || [];
		this.selected = selected || '';
		this.onSearch = onSearch || null;
	}

	render () {
		let _html = $(`
			<div class="search-section">
				<input type="text" placeholder="${this.placeholder}"></input>
				<select></select>
				<button id="search"></button>
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
			this.onSearch($('select', _html).val());
		});

		return _html;
	}
}