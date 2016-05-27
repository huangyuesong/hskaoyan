import '../styles/news_college_list.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import Pagination from './component/pagination';

import { 
	serverUrl,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	category_id,
	category_name,
	page,
} = url.parse(location.href, true).query;

if (!college_name || !college_id || !category_id || !category_name) {
	location.href = '/forum.html';
}

const PAGE_SIZE = 15;

class NewsCollegeList {
	constructor () {
		this.model = {
			newsList: [],
			pages: 1,
			categories: [],
			hotNewsList: [],
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
			setNewsList: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${college_id}&page_size=${PAGE_SIZE}&page=${page || 1}&types=${category_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list, page_count } = data;

						this.model.newsList = list;
						this.model.pages = page_count;

						this.view.setNewsList();
						this.view.setPagination();
					},
				});
			},
			setHotNewsList: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?limit=10`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.hotNewsList = list;
						this.view.setHotNewsList();
					},
				});
			},
		};
		this.view = {
			setHotNewsList: ()=> {
				let { hotNewsList } = this.model;

				$('.container .main-wrapper ul.layout li .latest-news ul').empty().append(hotNewsList.length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));

				hotNewsList.map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<span class="point"></span>`,
							`<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}" title="${title}">${title}</a>`,
						`</li>`,
					].join(''));

					$('.container .main-wrapper ul.layout li .latest-news ul').append(wrapper);
				});
			},
			setCategory: ()=> {
				let { categories } = this.model;

				$('.container .main-wrapper .layout .right .college-section p:not(.top)').remove();

				while (categories.length) {
					let p = $('<p></p>');

					categories.splice(0, 3).map(_category=> {
						let { id, type } = _category;

						let wrapper = $([
							`<a href="news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${id}&category_name=${type}">`,
								`<span class="button">${type}</span>`,
							`</a>`,
						].join(''));

						p.append(wrapper);
					});

					$('.container .main-wrapper .layout .right .college-section').append(p);
				}

				$('.container .main-wrapper .layout .left p.top').html(`${college_name}${category_name}`);
			},
			setNewsList: ()=> {
				let { newsList } = this.model;

				$('.main-wrapper .list ul').empty().append(newsList.length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));

				newsList.map((_news)=> {
					let { id, title, edit_time } = _news;

					let wrapper = $(`
						<li>
	    					<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&news_id=${id}&news_name=${title}">${title}</a>
	    					<span class="fr"><span class="icon icon-arrow-right"></span>${edit_time}</span>
	    				</li>
					`);

					$('.main-wrapper .list ul').append(wrapper);
				});
			},
			setPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.container .pagination-wrapper').html(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=${page}`;
					},
					onFirstSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=1`;
					},
					onLastSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=${pages}`;
					},
					onPrevSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=${idx > 1 ? idx - 1 : 1}`;
					},
					onNextSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=${idx < pages ? idx + 1 : pages}`;
					},
					onGoSelect: (target)=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=${category_id}&category_name=${category_name}&page=${target}`;
					},
				}).render());
			},
		};
	}

	init () {
		this.controller.setCategory();
		this.controller.setNewsList();
		this.controller.setHotNewsList();
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
			href: `news_college.html?college_id=${college_id}&college_name=${college_name}`,
		},
		{
			name: `${category_name}`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsCollegeList().init();

	for (let i = 0; i < 6; ++i) {
		$('.latest-news ul').append($('.latest-news ul li').eq(i).clone());
	}

	for (let i = 0; i < 4; ++i) {
		$('.hot-course ul').append($('.hot-course ul li').eq(i).clone());
	}
});
