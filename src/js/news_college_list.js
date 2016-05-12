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

class NewsCollegeList {
	constructor () {
		this.model = {
			newsList: [],
			pages: 1,
		};
		this.controller = {
			bindEvents: ()=> {},
			setNewsList: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${college_id}&news_limit=20&page=${page || 1}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list, page } = data;

						this.model.newsList = list;
						this.model.pages = page;

						this.view.setNewsList();
						this.view.setPagination();
					},
					error: (xhr, status, error)=> {
						alert(error);
					},
				});
			},
		};
		this.view = {
			setNewsList: ()=> {
				let { newsList } = this.model;

				$('.main-wrapper .list ul').empty();

				newsList.map((_news)=> {
					let { id, title, edit_time } = _news;

					let wrapper = $(`
						<li>
	    					<a href="news_detail.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&news_id=${id}&news_name=${title}">${title}</a>
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
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=${page}`;
					},
					onFirstSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=1`;
					},
					onLastSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=${pages}`;
					},
					onPrevSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=${idx > 1 ? idx - 1 : 1}`;
					},
					onNextSelect: ()=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=${idx < pages ? idx + 1 : pages}`;
					},
					onGoSelect: (target)=> {
						location.href = `news_college_list.html?college_id=${college_id}&college_name=${college_name}&category_id=1&category_name=招生简介&page=${target}`;
					},
				}).render());
			},
		};
	}

	init () {
		this.controller.setNewsList();
		this.controller.bindEvents();
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
