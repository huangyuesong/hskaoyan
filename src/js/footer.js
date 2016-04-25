import '../styles/footer.scss';

export default (()=> {
    let footer = function () {
        return $([
            '<div class="footer">',
            '   <p>咨询热线：010-52899685&nbsp;&nbsp;13681568652&nbsp;&nbsp;15810695171</p>',
            '   <p>网络课堂报名电话：13681568652&nbsp;&nbsp;网络课堂技术支持：010-52899685</p>',
            '   <p>版权归属：慧升教育&nbsp;&nbsp;京ICP备</p>',
            '   <p>总部地址：北京市海淀区北四环中路238号柏彦大厦501</p>',
            '   <p>老师咨询QQ：李老师&nbsp;&nbsp;王老师&nbsp;&nbsp;张老师&nbsp;&nbsp;宗老师&nbsp;&nbsp;陈老师</p>',
            '</div>',
        ].join(''));
    };

    $('script', $('body')).before(new footer());
})();
