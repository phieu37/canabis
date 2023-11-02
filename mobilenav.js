$(document).ready(function() {

    // Bắt sự kiện khi click vào biểu tượng plus cấp 1
    $(".navbar__mobile-item.mobile__has-children > .navbar__mobile--link > .fa-plus").on("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện nổi bọt

        // Tìm menu con cấp 2 trong li được click
        var $ul = $(this).closest("li").find(".mobile__list-dropdown-1");

        // Ẩn tất cả menu con cấp 1 trước khi toggle hiển thị
        $(".navbar__mobile-item.mobile__has-children .mobile__list-dropdown-1").not($ul).hide();

        // Toggle hiển thị menu con cấp 1
        $ul.slideToggle();

        // Thay đổi biểu tượng từ plus sang minus và ngược lại
        $(this).toggleClass("fa-plus fa-minus");
    });

    // Bắt sự kiện khi click vào biểu tượng plus cấp 2
    $(".dropdown__mobile-item.mobile__has-children > .navbar__mobile--link > .fa-plus").on("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện nổi bọt

        // Tìm menu con cấp 3 trong li được click
        var $ul = $(this).closest("li").find(".mobile__list-dropdown-2");

        // Ẩn tất cả menu con cấp 2 trước khi toggle hiển thị
        $(".dropdown__mobile-item.mobile__has-children .mobile__list-dropdown-2").not($ul).hide();

        // Toggle hiển thị menu con cấp 2
        $ul.slideToggle();

        // Thay đổi biểu tượng từ plus sang minus và ngược lại
        $(this).toggleClass("fa-plus fa-minus");
    });
});



