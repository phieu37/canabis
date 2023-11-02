$(document).ready(function () {
  $(".search__input").click(function (e) {
    e.stopPropagation();
    $(".search__history").show();
  });

  $(document).click(function (e) {
    // Nếu không phải là phần tử .search__input hoặc con của nó, đóng search__history
    if (!$(e.target).closest('.search__input').length) {
      $(".search__history").hide();
    }
  });

  // Sử dụng sự kiện touchstart cho thiết bị di động(phải check ở giao diện mobile, pc ko check được)
  $(document).on("touchstart", function (e) {
    if (!$(e.target).closest('.search__input').length) {
      // Nếu không phải là phần tử .search__input hoặc con của nó, ẩn search__history
      $(".search__history").hide();
    }
  });

  $(".search__input").on("click touchstart", function (e) {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền ra ngoài
    $(".search__history").show();
  });

});
