$(document).ready(function () {
    // thêm class để ẩn
    $('.icon__bars').click(function () {
        $('.mobile__overlay').addClass('mobile__overlay-active');
        $('.mobile__menu').addClass('mobile__menu-active');
    });

    // bỏ class ẩn
    $('.mobile__overlay').click(function () {
        $(this).removeClass('mobile__overlay-active');
        $('.mobile__menu').removeClass('mobile__menu-active');
    });

    $('.mobile__menu').click(function () {
        $(this).removeClass('mobile__menu-active');
        $('.mobile__overlay').removeClass('mobile__overlay-active');
    });

    $('.mobile__menu-main').click(function (event) {
        // Ngăn chặn sự kiện nổi bọt để không đóng menu khi click vào nó
        event.stopPropagation();
    });
});


// $(document).ready(function () {
//     // thêm class để ẩn
//     $('.icon__bars').click(function () {
//         $('.mobile__overlay').addClass('mobile__overlay-active');
//         $('.mobile__menu').addClass('mobile__menu-active');
//     });

//     // bỏ class ẩn khi click vào overlay
//     $('.mobile__overlay').click(function () {
//         closeMobileMenu();
//     });

//     // bỏ class ẩn khi click vào close button
//     $('.mobile__menu-close').click(function () {
//         closeMobileMenu();
//     });

//     // Hàm để đóng mobile menu
//     function closeMobileMenu() {
//         $('.mobile__menu').removeClass('mobile__menu-active');
//         $('.mobile__overlay').removeClass('mobile__overlay-active');
//     }

//     // Bắt sự kiện khi click vào mobile__menu-main
//     $('.mobile__menu-main').click(function (event) {
//         // Ngăn chặn sự kiện nổi bọt để không đóng menu khi click vào nó
//         event.stopPropagation();
//     });
// });
