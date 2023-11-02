$(document).ready(function () {
    // Lắng nghe sự kiện cuộn chuột và thêm animate khi cuộn lên đầu trang
    $(window).scroll(function () {
        var scrollUpButton = $('#scrollUp');

        // cuộn xuống một khoảng > 400px, hiển thị nút kéo lên
        if ($(this).scrollTop() > 400) {
            scrollUpButton.addClass('scrollUp');
        } else {
            scrollUpButton.removeClass('scrollUp');
        }
    });

    $('#scrollUp').click(function () {
        $('html, body').animate({ 
            scrollTop: 0 
        }, 1000);
        return false; // ngăn chặn hành vi mặc định của thẻ <a> khi click 
    });
});





