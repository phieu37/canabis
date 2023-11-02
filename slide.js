$(document).ready(function () {
    var $clientItems = $('.client__content-item');
    var currentIndex = 0;

    $('.client__nav-prev').click(function () {
        $clientItems.eq(currentIndex).removeClass('active').hide();

        // Loại bỏ lớp animate trước (nếu có) và thêm lớp mới
        $clientItems.eq(currentIndex).removeClass('animate__fadeInLeft');
        $clientItems.eq(currentIndex).removeClass('animate__fadeInRight');

        // giảm giá trị chuyển đến p/tử trước
        // nếu < 0 -> đã chuyển từ p/tử trước đó sang p/tử cuối
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = $clientItems.length - 1;
        }
        $clientItems.eq(currentIndex).addClass('active').show();

        $clientItems.eq(currentIndex).addClass('animate__fadeInLeft');

    });

    $('.client__nav-next').click(function () {
        $clientItems.eq(currentIndex).removeClass('active').hide();

        // Loại bỏ lớp animate trước và thêm lớp mới
        $clientItems.eq(currentIndex).removeClass('animate__fadeInRight');
        $clientItems.eq(currentIndex).removeClass('animate__fadeInLeft');

        currentIndex++;
        if (currentIndex >= $clientItems.length) {
            currentIndex = 0;
        }
        $clientItems.eq(currentIndex).addClass('active').show();

        $clientItems.eq(currentIndex).addClass('animate__fadeInRight');
    });
});







  