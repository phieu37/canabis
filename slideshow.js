// $(document).ready(function () {
//   // slideIndex để theo dõi vị trí của slide hiện tại
//   let slideIndex = 1;
//   // lấy class lưu vào biến
//   const $slides = $('.slide');
//   const $dots = $('.dot');
//   const $slideText = $('.slide__textBtn-text');

//   // hiển thị giá trị slide ban đầu
//   showSlides(slideIndex);

//   // hàm hiển thị slide dựa trên index
//   function showSlides(index) {
//   // kiểm tra giới hạn index
//     if (index < 1) {
//       slideIndex = $slides.length;
//     } else if (index > $slides.length) {
//       slideIndex = 1;
//     }

//     // ân slide và xóa active__slideshow
//     $slides.css('display', 'none');
//     $dots.removeClass('active__slideshow');

//     // hiện slide và thêm active__slideshow
//     $slides.eq(slideIndex - 1).css('display', 'block');
//     $dots.eq(slideIndex - 1).addClass('active__slideshow');
//   }

//   // gọi showSlides tăng giảm giá trị để chuyển slide
//   function nextSlide() {
//     showSlides(slideIndex += 1);
//   }

//   function prevSlide() {
//     showSlides(slideIndex -= 1);
//   }

//   // chọn slide cụ thể = cách truyền index
//   function currentSlide(index) {
//     showSlides(slideIndex = index);
//   }

//   // tự động chuyển slide 
//   function autoSlide() {
//     nextSlide();
//   }

//   // bắt sự kiện click vào nút và dầu chấm
//   $('.prev').click(function () {
//     prevSlide();
//   });

//   $('.next').click(function () {
//     nextSlide();
//   });

//   $dots.click(function () {
//     currentSlide($dots.index(this) + 1);
//   });

//   // chuyển slide sau mỗi 5 giây
//   setInterval(autoSlide, 3000);
// });


$(document).ready(function () {
  var owl = $('#slide__show .owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__rubberBand',
    items: 1,
    autoplay: true, // Bật chế độ tự động chạy
    autoplayTimeout: 4000, // Thời gian trễ 
    autoplayHoverPause: true // Tạm dừng tự động khi rê chuột vào Carousel
  });

  // Thêm sự kiện khi chuyển các mục trong Carousel
  owl.on('changed.owl.carousel', function (event) {
    // Xóa các hiệu ứng trước đó
    $('#slide__show .owl-item .slide__textBtn').removeClass('animate__animated animate__backInLeft');

    // Lấy chỉ mục hiện tại
    var currentItem = event.item.index;
    // Thêm hiệu ứng vào slide__textBtn của owl-item hiện tại
    var currentP = $('.owl-item').eq(currentItem).find('.slide__textBtn');

    // Kích hoạt lại animate bằng cách thêm lớp animate__animated animate__backInLeft
    setTimeout(function () {
      currentP.addClass('animate__animated animate__backInLeft');
    }, 100); // 100 giúp tránh xung đột với các hiệu ứng chuyển đổi
  });
})