import '../../styles/footer.scss';

export default (()=> {
    let footer = function () {
        return $([
            '<div class="footer">',
            '   <p>咨询热线：010-52899685&nbsp;&nbsp;13681568652&nbsp;&nbsp;15810695171</p>',
            '   <p>公司地址：北京市海淀区学院路35号世宁大厦</p>',
            '   <p>版权归属：慧升教育&nbsp;&nbsp;京ICP备：11018255号&nbsp;&nbsp京公网安备：1101080201729号</p>',
            '</div>',
        ].join(''));
    };

    $('script', $('body')).before(new footer());
})();