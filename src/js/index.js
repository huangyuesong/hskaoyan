import '../styles/index.scss';

import './component/header';
import './component/footer';

import OtherSite from './component/other_site';
import Search from './component/search';
import './component/tabs';

import {
	serverUrl,
	imagePrefix,
	SUCCESS,
} from '../../config';

class Index {
	constructor () {
		this.model = {
			tutorList: [],
			linkList: [],
			boardList: [],
			topicList: [],
			newsList: [],
		};
		this.controller = {
			setTutor: ()=> {
				$.ajax({
					url: `${serverUrl}/tutor_list.php`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { result_code, list } = data;

						this.model.tutorList = list;
						if (result_code === SUCCESS) {
							this.view.setTutor();
						}
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
			setSearch: ()=> {
				this.view.setSearch();
			},
			setHotCollege: ()=> {
				$.ajax({
					url: `${serverUrl}/board_list.php?data=index`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.boardList = list;
						this.view.setHotCollege();
					},
				});
			},
			setHotArticle: ()=> {
				$.ajax({
					url: `${serverUrl}/topic_list.php?data=index`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						this.model.topicList = data.list;
						this.view.setHotArticle();
					},
				});
			},
			setHotNews: ()=> {
				$.ajax({
					url: `${serverUrl}/news_list.php?data=index`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { list } = data;

						this.model.newsList = list;
						this.view.setHotNews();
					},
				});
			},
		};
		this.view = {
			setHotNews: ()=> {
				let { newsList } = this.model;

				$('.container .tabs .tabs-bd > .news').empty();
				newsList.map(_news=> {
					let { id, title, edit_time } = _news;

					$('.container .tabs .tabs-bd > .news').append($(`
						<div>
							<a href="news_detail.html?news_id=${id}&news_name=${title}">${title}</a>
	    					<span class="fr"><span class="icon icon-arrow-right"></span>${edit_time}</span>
						</div>
					`));
				});
			},
			setHotArticle: ()=> {
				let { topicList } = this.model;

				$('.container .tabs .tabs-bd > .article').empty();
				topicList.map(_topic=> {
					$('.container .tabs .tabs-bd > .article').append($(`
						<div>
							<img class="fl" src="${imagePrefix}${_topic.avatar}" width="50" height="50">
							<p>
								<a href="forum_article.html?article_id=${_topic.id}">
									<span class="title" title="${_topic.title}">${_topic.title}</span>
								</a>
							</p>
							<span class="author">${_topic.nick_name}</span>
							<span class="release">发表于</span>
							<span class="date">${_topic.pub_time}</span>
							<span class="reply fr">回复：${_topic.comment_count}</span>
							<span class="visit fr">查看：${_topic.view_count}</span>
						</div>
					`));
				});
			},
			setHotCollege: ()=> {
				let { boardList } = this.model;

				$('.container .tabs .tabs-bd > .college').empty();
				while (boardList[1].list.length) {
					let _row = $(`<div class="row"></div>`);

					boardList[1].list.splice(0, 5).map(_board=> {
						let { id, board:title } = _board;

						_row.append($(`
							<div class="school">
								<div class="name-wrapper">
									<a href="news_college.html?board_id=${id}" title="${title}">
										${title}
									</a>
								</div>
								<a href="news_college.html?board_id=${id}" class="link">资讯</a>
								<a href="material_college.html?board_id=${id}" class="link">科目</a>
								<a href="forum_college.html?board_id=${id}" class="link">论坛</a>
							</div>
						`));
					});

					$('.container .tabs .tabs-bd > .college').append(_row);
				}
			},
			setOtherSite: ()=> {
				let { linkList } = this.model;

				linkList.map(_link=> {
					_link.href = _link.url;
				});

				new OtherSite(linkList).render();

				$('.container .other-site-wrapper').append($('.other-site'));
			},
			setTutor: ()=> {
				let { tutorList } = this.model;

				let wrapper = $(`
					<div class="slide-wrapper"></div>
				`);

				tutorList.map(_tutor=> {
					let { true_name, major, introduce, avatar } = _tutor;

					wrapper.append(`
						<div class="image-wrapper">
							<a href="javascript:">
								<div class="icon icon-person1"></div>
							</a>
							<div class="slogan">
								<span class="left-name">${true_name}</span>
								<span class="left-course">[${major}]</span>
								<p>${introduce}</p>
							</div>
						</div>
					`);

					$('.icon-person1', wrapper).css({backgroundImage: `url('${imagePrefix}${avatar}')`});
				});

				$('.container .section4').empty().append(wrapper.css({width: `${tutorList.length * 300}px`}));

				let interval;

				function left () {
					if (Number(wrapper.css('width').replace('px', '')) 
							- Number($('.container .section4').css('width').replace('px', '')) 
							> -Number(wrapper.css('left').replace('px', ''))) {
						wrapper.css({
							left: `${Number(wrapper.css('left').replace('px', '')) - 1}px`,
						});
					} else {
						clearInterval(interval);
						interval = setInterval(right, 10);
					}
				}

				function right () {
					if (Number(wrapper.css('left').replace('px', '')) < 0) {
						wrapper.css({
							left: `${Number(wrapper.css('left').replace('px', '')) + 1}px`,
						});
					} else {
						clearInterval(interval);
						interval = setInterval(left, 10);
					}
				}

				interval = setInterval(left, 10);
			},
			setSearch: ()=> {
				$('.container .search-wrapper').append(new Search({
					placeholder: '请输入搜索内容',
					category: ['院校', '科目', '资料'],
					selected: '院校',
				}).render());
			},
		};
	}

	init () {
		// this.controller.setTutor();
		this.controller.setOtherSite();
		this.controller.setSearch();
		this.controller.setHotCollege();
		this.controller.setHotNews();
		this.controller.setHotArticle();
	}
}

$(window).load(()=> {
	$('.loading').remove();
});

$(()=> {
	new Index().init();
});
