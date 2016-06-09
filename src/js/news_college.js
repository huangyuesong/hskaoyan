import '../styles/news_college.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import OtherSite from './component/other_site';
import './component/tabs';

import {
	serverUrl,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
} = url.parse(location.href, true).query;

if (!college_name || !college_id) {
	location.href = '/forum.html';
}

class NewsCollege {
	constructor () {
		this.model = {
			categories: [],
			topNews: [],
			hotNews: [],
			categoryContent: [],
			linkList: [],
		};
		this.controller = {
			setCategory: ()=> {
				$.ajax({
					url: `${serverUrl}/news_type.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.categories = data.list;
						this.view.setCategory();
					},
				});
			},
			setTopNews: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${college_id}&is_ontop=1&limit=3`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topNews = data.list;
						this.view.setTopNews();
					},
				});
			},
			setHotNews: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${college_id}&is_hot=1&limit=20`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotNews = data.list;
						this.view.setHotNews();
					},
				});
			},
			setCategoryContent: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${college_id}&type_ids=0,1,7,6&limit=8`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.categoryContent = data.list;
						this.view.setCategoryContent();
					},
				});
			},
			setOtherSite: ()=> {
				$.ajax({
					url: `${serverUrl}/flink_list.php?limit=18`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.linkList = list;
						this.view.setOtherSite();
					},
				});
			},
		};
		this.view = {
			setCategory: ()=> {
				let { categories } = this.model;

				$('.container .introduction .content .right p:last-of-type').empty();

				categories.map(_category=> {
					let { id, type } = _category;

					let wrapper = $([
						`<a href="news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${id}&category_name=${type}">`,
							`<span class="button">${type}</span>`,
						`</a>`,
					].join(''));

					$('.container .introduction .content .right p:last-of-type').append(wrapper);
				});

				$('.container .apply .content .layout .center .tabs ul.tabs-nav > li > a').eq(0)
					.prop('href', `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=0&category_name=院校信息`);
				$('.container .apply .content .layout .center .tabs ul.tabs-nav > li > a').eq(1)
					.prop('href', `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=导师介绍`);
				$('.container .apply .content .layout .center .tabs ul.tabs-nav > li > a').eq(2)
					.prop('href', `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=6&category_name=专业介绍`);
				$('.container .apply .content .layout .center .tabs ul.tabs-nav > li > a').eq(3)
					.prop('href', `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=7&category_name=复试信息`);
			},
			setTopNews: ()=> {
				let { topNews } = this.model;

				$('.container .introduction .content .center-wrapper .center .upper').empty();

				topNews.map(_news=> {
					let { id, title } = _news;

					let wrapper = $(`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title=${title}><p class="top blue">${title}</p></a>`);

					$('.container .introduction .content .center-wrapper .center .upper').append(wrapper);
				});
			},
			setHotNews: ()=> {
				let { hotNews } = this.model;

				$('.container .introduction .content .center-wrapper .center .lower ul').empty().append(hotNews.length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));
				$('.container .apply .content .layout .left ul').empty().append(hotNews.length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));

				hotNews.splice(0, 12).map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .introduction .content .center-wrapper .center .lower ul').append(wrapper);
				});

				hotNews.map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .apply .content .layout .left ul').append(wrapper);
				});
			},
			setCategoryContent: ()=> {
				let { categoryContent } = this.model;

				$('.container .apply .content .layout .center #upper-tab1 ul').empty().append(categoryContent[0].length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));
				$('.container .apply .content .layout .center #upper-tab2 ul').empty().append(categoryContent[1].length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));
				$('.container .apply .content .layout .center #lower-tab1 ul').empty().append(categoryContent[6].length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));
				$('.container .apply .content .layout .center #lower-tab2 ul').empty().append(categoryContent[7].length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));

				categoryContent[0].map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .apply .content .layout .center #upper-tab1 ul').append(wrapper);
				});

				categoryContent[1].map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .apply .content .layout .center #upper-tab2 ul').append(wrapper);
				});

				categoryContent[6].map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .apply .content .layout .center #lower-tab1 ul').append(wrapper);
				});

				categoryContent[7].map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .apply .content .layout .center #lower-tab2 ul').append(wrapper);
				});
			},
			setOtherSite: ()=> {
				let { linkList } = this.model;

				linkList.map(_link=> {
					_link.href = _link.url;
				});

				new OtherSite(linkList).render();
			},
		};
	}

	init () {
		this.controller.setCategory();
		this.controller.setTopNews();
		this.controller.setHotNews();
		this.controller.setCategoryContent();
		this.controller.setOtherSite();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new HeaderForum([
		{
			name: `${college_name}`,
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `资讯`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsCollege().init();

	for (let i = 0; i < 4; ++i) {
		$('.introduction .center .upper ul').append($('.introduction .center .upper ul li').eq(0).clone());
	}

	for (let i = 0; i < 12; ++i) {
		$('.introduction .center .lower ul').append($('.introduction .center .lower ul li').eq(0).clone());
	}

	for (let i = 0; i < 7; ++i) {
		$('.apply .left ul').append($('.apply .left ul li').eq(0).clone());
	}

	for (let i = 0; i < 6; ++i) {
		$('.apply .center .am-tabs-bd ul').append($('.apply .center .am-tabs-bd ul li').eq(0).clone());
	}

	for (let i = 0; i < 21; ++i) {
		$('.apply .right tbody').append($('.apply .right tbody tr').eq(0).clone());
	}
});
