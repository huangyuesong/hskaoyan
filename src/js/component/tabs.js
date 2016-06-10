import '../../styles/tabs.scss';

$(()=> {
	$('.tabs > ul.tabs-nav > li > a').mouseenter(evt=> {
		$(evt.target).parent().parent().find('li').removeClass('active');
		$(evt.target).parent().addClass('active');
		
		let idx = $(evt.target).parent().index();
		$(evt.target).parent().parent().next().find('.tab-panel').hide();
		$(evt.target).parent().parent().next().find('.tab-panel').eq(idx).show();
	});

	$('.tabs > .tabs-bd > .tab-panel').each((idx, _panel)=> {
		if ($(_panel).height() < $(_panel).parent().height()) {
			$(_panel).height($(_panel).parent().height());
		}
	});
});

export default class Tabs {
	static refresh () {
		$('.tabs > ul.tabs-nav > li > a').mouseenter(evt=> {
			$(evt.target).parent().parent().find('li').removeClass('active');
			$(evt.target).parent().addClass('active');
			
			let idx = $(evt.target).parent().index();
			$(evt.target).parent().parent().next().find('.tab-panel').hide();
			$(evt.target).parent().parent().next().find('.tab-panel').eq(idx).show();
		});

		$('.tabs > .tabs-bd > .tab-panel').each((idx, _panel)=> {
			if ($(_panel).height() < $(_panel).parent().height()) {
				$(_panel).height($(_panel).parent().height());
			}
		});
	}
}