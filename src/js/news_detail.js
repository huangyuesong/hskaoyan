import '../styles/news_detail.scss';

import './component/header';
import './component/footer';

import HeaderForum from './component/header_forum';
import Write from './component/write';
import Pagination from './component/pagination';

import {
	serverUrl,
	imagePrefix,
	SUCCESS,
} from '../../config';

import url from 'url';

let {
	college_name,
	college_id,
	news_id,
	news_name,
	page,
} = url.parse(location.href, true).query;

if (!college_id || !news_id || !news_name) {
	location.href = '/forum.html';
}

class NewsDetail {
	constructor () {
		this.model = {
			avatar: '',
			title : '',
			author: '',
			is_locked: 0,
			comment_count: 0,
			edit_time: '',
			media: 0,
			content: '',
			mark_value: 0,
			comment_list: [],
			pages: 1,
		};
		this.controller = {
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
			setDetailAndComment: ()=> {
				$.ajax({
					url: `${serverUrl}/news_view.php?news_id=${news_id}&page=${page}`,
					type: 'get',
					dataType: 'json',
					cache: false,
					success: (data, status)=> {
						let { title, author, is_locked, comment_count, edit_time, 
							media, content, mark_value, comment_list } = data.news_array;
						let { page_count } = data;

						this.model.title = title;
						this.model.author = author;
						this.model.is_locked = is_locked;
						this.model.comment_count = comment_count;
						this.model.edit_time = edit_time;
						this.model.media = media;
						this.model.content = content;
						this.model.mark_value = mark_value;
						this.model.comment_list = comment_list;
						this.model.pages = page_count;

						this.view.setDetail();
						this.view.setComment(()=> {
							this.view.setCommentPagination();
						});
					},
				});
			},
			setCollegeName: ()=> {
				if (!college_name) {
					$.ajax({
						url: `${serverUrl}/board_list.php?board_id=${college_id}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							this.model.college_name = data.list.college;
							this.view.setCollegeName();
						},
					});
				}
			},
			setWrite: ()=> {
				this.view.setWrite();
			},
		};
		this.view = {
			setCommentPagination: ()=> {
				let { pages } = this.model;
				let idx = Number(page) || 1;
				pages = Number(pages) || 1;

				$('.pagination-wrapper').append(new Pagination({
					idx: idx,
					pages: pages,
					onPageSelect: (page)=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${page}`);
					},
					onFirstSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=1`);
					},
					onLastSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${pages}`);
					},
					onPrevSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${idx > 1 ? idx - 1 : 1}`);
					},
					onNextSelect: ()=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${idx < pages ? idx + 1 : pages}`);
					},
					onGoSelect: (target)=> {
						location.href = location.href.replace(/\&page=\d/, '').concat(`&page=${target}`);
					},
				}).render());
			},
			setComment: (callback)=> {
				let { comment_list } = this.model;

				$('.container .comment-wrapper').empty();
				comment_list.map(_comment=> {
					let { avatar, id, is_liked, nick_name, pub_time, content } = _comment;

					let wrapper = $(`
						<div class="comment-entry">
				            <div class="left">
				                <img src="${imagePrefix}${avatar}" width="50" height="50">
				            </div>
				            <div class="right">
				                <ul>
				                    <li>
				                        <span class="nick-name">${nick_name}</span>
				                        <span class="pub-time fr">${pub_time}</span>
				                    </li>
				                    <li>${content}</li>
				                    <li>
				                        <a href="javascript:" id="like">
				                        	<span class="good">
				                        		<span class="icon icon-good"></span>
				                        		${Number(is_liked) ? '取消点赞': '点赞'}
				                        	</span>
				                        </a>
				                        <a href="javascript:">举报</a>
				                    </li>
				                </ul>
				            </div>
				        </div>
					`);

					$('#like', wrapper).click(evt=> {
						$.ajax({
							url: `${serverUrl}/user_like.php?comment_id=${id}&is_liked=${Number(is_liked) ? 0 : 1}`,
							type: 'get',
							dataType: 'json',
							cache: false,
							success: (data, status)=> {
								let { result_code, message } = data;

								if (result_code === SUCCESS) {
									alert(message);
									location.reload();
								} else {
									alert(message);
								}
							},
						});
					});

					$('.container .comment-wrapper').append(wrapper);
				});

				$('.container .comment-wrapper').append($(`<div class="pagination-wrapper"></div>`));

				callback && callback();
			},
			setWrite: ()=> {
				window.nEditor = new Write({
					url: `${serverUrl}/comment_post.php`,
					news_id: news_id,
					tag: '评论资讯',
					buttonText: '发表评论',
					fileUploadUrl: `${serverUrl}/upload_file.php`,
					imageUploadUrl: `${serverUrl}/upload_image.php`,
				}).render($('.container > .write-wrapper'));

				$('.container > .write-wrapper .attachment-wrapper').hide();
			},
			setCollegeName: ()=> {
				$('.container .header-forum .section5 > a').eq(1).html(this.model.college_name);
				$('.container .header-forum .section5 > a').eq(1).prop('href', 
					`news_college.html?college_id=${college_id}&college_name=${this.model.college_name}`);
			},
			setDetail: ()=> {
				let { title, author, is_locked, comment_count, edit_time, content, mark_value } = this.model;

				let detailWrapper = $([
					`<p class="news-name">${title}</p>`,
					`<p class="instruction">`,
						`<span>来源：${author}</span>`,
						`<span>${edit_time}</span>`,
						`<span>相关院校：</span>`,
						`<a class="college-link" 
							href="news_college.html?college_id=${college_id}&college_name=${college_name}">${college_name}</a>`,
					`</p>`,
					`
					<p class="operation">
	                    <a href="javascript:" id="favorate">
	                    	<span class="collect">
	                    		<span class="icon icon-star"></span>
	                    		${Number(mark_value) ? '取消收藏' : '收藏'}
	                    	</span>
	                    </a>
	                    <a href="javascript:"><span>举报</span></a>
	                </p>
					`,
					`<div class="news-content">`,
						`<p>${content}</p>`,
					`</div>`,
				].join(''));

				$('#favorate', detailWrapper).click(evt=> {
					$.ajax({
						url: `${serverUrl}/mark_item.php?mark_id=${news_id}&type=2&value=${Number(mark_value) ? 0 : 1}`,
						type: 'get',
						dataType: 'json',
						cache: false,
						success: (data, status)=> {
							let { result_code, message } = data;

							if (result_code === SUCCESS) {
								alert(message.replace('标记', '收藏'));
								location.reload();
							} else {
								alert(message);
							}
						},
					});
				});

				$('.container .main-wrapper .left').empty();
				$('.container .main-wrapper .left').append(detailWrapper);
			},
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
		};
	}

	init () {
		this.controller.setHotNewsList();
		this.controller.setCollegeName();
		this.controller.setDetailAndComment();
		this.controller.setWrite();
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
			name: `${news_name}`,
			href: `javascript:`,
		},
	]).render();

	$('p:last-of-type', $('.footer')).remove();
	$('.footer').css({
		background: '#ECECEC',
		color: '#9E9E9E',
	});

	new NewsDetail().init();

	for (let i = 0; i < 6; ++i) {
		$('.score-over-year ul.link').append($('.score-over-year ul.link li').eq(i).clone());
	}

	for (let i = 0; i < 6; ++i) {
		$('.latest-news ul').append($('.latest-news ul li').eq(i).clone());
	}

	for (let i = 0; i < 4; ++i) {
		$('.hot-course ul').append($('.hot-course ul li').eq(i).clone());
	}
});
