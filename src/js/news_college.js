import '../styles/news_college.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import Tabs from './component/tabs';

import {
	serverUrl,
	imagePrefix,
} from '../../config';

import url from 'url';

let {
	board_id,
} = url.parse(location.href, true).query;

if (!board_id) {
	location.href = '/forum.html';
}

class NewsCollege {
	constructor () {
		this.model = {
			categories: [],
			topNews: [],
			hotNews: [],
			categoryContent: [],
			is_marked: false,
			schoolList: [],
			hotTopicList: [],
			teacherList: [],
			expList: [],
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
					url: `${serverUrl}/news_list.php?board_id=${board_id}&is_ontop=1&limit=3`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topNews = data.list;
						this.model.is_marked = data.is_marked;
						this.view.setTopNews();
						this.view.setHeader();
					},
				});
			},
			setHotNews: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?board_id=${board_id}&is_hot=1&limit=20`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotNews = data.list;
						this.view.setHotNews();
					},
				});
			},
			setSchool: ()=> {
				$.ajax({
					url: `${serverUrl}/school_list.php?board_id=${board_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.schoolList = data.list;
						this.view.setSchool();
					},
				});
			},
			setHotTopic: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?board_id=${board_id}&category=热门&limit=15`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.hotTopicList = data.list;
						this.view.setHotTopic();
					},
				});
			},
			setTeacher: ()=> {
				$.ajax({
					url: `${serverUrl}/teacher_list.php?board_id=${board_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.teacherList = data.list;
						this.view.setTeacher();
					},
				});
			},
			setExp: ()=> {
				$.ajax({
					url: `${serverUrl}/experience_list.php?board_id=${board_id}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.expList = data.list;
						this.view.setExp();
					},
				});
			},
		};
		this.view = {
			setExp: ()=> {
				let { expList } = this.model;

				expList.length ? (()=> {
					$('.container .apply .content .tabs:last-of-type .tabs-bd .tab-panel ul').empty();

					expList.map(_exp=> {
						let { id, title } = _exp;

						$('.container .apply .content .tabs:last-of-type .tabs-bd .tab-panel ul').append($(`
							<li><a href="javascript:" title="${title}"><span class="point"></span><span>${title}</span></a></li>
						`));
					});

					$('.container .apply .content .tabs:last-of-type .tabs-bd .tab-panel').height((()=> {
						return $('.container .apply .content .tabs:last-of-type .tabs-bd .tab-panel ul').height() + 10 + 10;
					})());
				})() : (()=> {
					$('.container .apply .content .tabs:last-of-type .tabs-bd .tab-panel').empty().append($(`
						<p style="text-align: center; line-height: 100px;">暂无数据</p>
					`));
				})();
			},
			setTeacher: ()=> {
				let { teacherList } = this.model;

				teacherList.length ? (()=> {
					$('.container .apply .content .tabs:first-of-type .tabs-bd .tab-panel').empty();

					teacherList.map(_teacher=> {
						let { picture, name, title } = _teacher;
						
						$('.container .apply .content .tabs:first-of-type .tabs-bd .tab-panel').append($(`
							<div class="teacher-wrapper">
								<img src="${imagePrefix}${picture}">
								<p class="name">${name}</p>
								<p class="profile">${title}</p>
							</div>
						`));
					});

					let _wrapperHeight = $('.container .apply .content .tabs:first-of-type .tabs-bd .tab-panel .teacher-wrapper').height();
					let _height = Math.round(teacherList.length / 4) * (_wrapperHeight + 10 + 10);
					$('.container .apply .content .tabs:first-of-type .tabs-bd .tab-panel').height(_height);
				})() : (()=> {
					$('.container .apply .content .tabs:first-of-type .tabs-bd .tab-panel').empty().append($(`
						<p style="text-align: center; line-height: 100px;">暂无数据</p>
					`));
				})();
			},
			setHotTopic: ()=> {
				let { hotTopicList } = this.model;

				hotTopicList.length ? (()=> {
					$('.container .apply .content .left ul').empty();

					hotTopicList.map(_topic=> {
						let { id, title } = _topic;

						$('.container .apply .content .left ul').append($(`
							<li><a href="forum_article.html?article_id=${id}&board_id=${board_id}" title=${title}><span class="point"></span><span>${title}</span></a></li>
						`));
					});
				})() : (()=> {
					$('.container .apply .content .left ul').empty().append($(`
						<p style="text-align: center; line-height: 300px;">暂无数据</p>
					`));
				})();
			},
			setSchool: ()=> {
				let { schoolList } = this.model;

				schoolList.length ? (()=> {
					$('.container .apply .content .right > div table tbody').empty();

					schoolList.map(_school=> {
						$('.container .apply .content .right > div table tbody').append($(`
							<tr>
								<td><a href="javascript:">${_school.school}</a></td>
							</tr>
						`));
					});
				})() : (()=> {
					$('.container .apply .content .right > div').empty().append($(`
						<p class="top"><span class="rect"></span>招生院系</p>
						<p style="text-align: center; line-height: 300px;">暂无数据</p>
					`));
				})();
			},
			setHeader: ()=> {
				let { is_marked } = this.model;

				new HeaderForum('版面', is_marked).render();
			},
			setCategory: ()=> {
				let { categories } = this.model;

				$('.container .introduction .content .right p:last-of-type').empty();

				categories.map(_category=> {
					let { id, type } = _category;

					let wrapper = $([
						`<a href="news_college_list.html?board_id=${board_id}&category_id=${id}&category_name=${type}">`,
							`<span class="button">${type}</span>`,
						`</a>`,
					].join(''));

					$('.container .introduction .content .right p:last-of-type').append(wrapper);
				});
			},
			setTopNews: ()=> {
				let { topNews } = this.model;

				$('.container .introduction .content .center-wrapper .center .upper').empty();

				topNews.map(_news=> {
					let { id, title } = _news;

					let wrapper = $(`<a href="news_detail.html?board_id=${board_id}&news_id=${id}&news_name=${title}" title=${title}><p class="top blue">${title}</p></a>`);

					$('.container .introduction .content .center-wrapper .center .upper').append(wrapper);
				});
			},
			setHotNews: ()=> {
				let { hotNews } = this.model;

				$('.container .introduction .content .center-wrapper .center .lower ul').empty().append(hotNews.length ? null : $(
					`<li><p style="text-align: center; ">暂无资讯</p></li>`
				));

				hotNews.splice(0, 12).map(_news=> {
					let { id, title } = _news;

					let wrapper = $([
						`<li>`,
							`<a href="news_detail.html?board_id=${board_id}&news_id=${id}&news_name=${title}" title="${title}">`,
								`<span class="point"></span>`,
								`<span>${title}</span>`,
							`</a>`,
						`</li>`,
					].join(''));

					$('.container .introduction .content .center-wrapper .center .lower ul').append(wrapper);
				});
			},
		};
	}

	init () {
		this.controller.setCategory();
		this.controller.setTopNews();
		this.controller.setHotNews();
		this.controller.setSchool();
		this.controller.setHotTopic();
		this.controller.setTeacher();
		this.controller.setExp();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsCollege().init();
});
