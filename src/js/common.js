$(function() {
    // 自动加链接
    $('[data-href]').on('click', function() {
         location.href = $(this).data('href');
    });

    /*
     * 关闭遮罩
     * */
    $('.close-shadow').on('click', function (e) {
        var $el = $(this);

        if($(e.target).hasClass('close-shadow')) {
            $el.hide();
        }
    });

    /*
     * 禁止滑动
     * */
    $('.disabled-touch').on('touchstart', function (e) {
        //禁止滑动
        e.preventDefault();
    });
});