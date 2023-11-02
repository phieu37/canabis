$(document).ready(function () {
    // menu toggle
    $(".categories__title").click(function () {
        $(".category__menu").slideToggle();
    });

    // + -
    $(".categories__item.side-show").click(function (e) {
        // Ngăn sự kiện click lan truyền lên
        e.stopPropagation();
        // Tìm thẻ <i> trong phần tử <li> và thay đổi nội dung
        let icon = $(this).find("i.fa-solid");
        if (icon.hasClass("fa-circle-plus")) {
            icon.removeClass("fa-circle-plus").addClass("fa-circle-minus");
        } else {
            icon.removeClass("fa-circle-minus").addClass("fa-circle-plus");
        }
        // Sổ ra / thu lại menu con
        $(this).find(".categories__list-dropdown").slideToggle();
    });

    // Nếu không phải là phần tử .categories__title hoặc con của nó, đóng category__menu
    $(document).on("click", function (e) {
        if (!$(e.target).closest('.categories__title').length) {
            $(".category__menu").hide();
        }
    });
});





