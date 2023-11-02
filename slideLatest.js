$(document).ready(function() {
    // $('.grid.wide .owl-carousel').owlCarousel({
    $('#latest').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 3,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Custom nav events
    $('.latest__nav-next').click(function() {
        $("#latest").trigger('next.owl.carousel');
    });
    
    $('.latest__nav-prev').click(function() {
        $("#latest").trigger('prev.owl.carousel');
    });

    // brand
    $('#brand').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items: 3,
        dots:false,
        responsive: {
            414: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
    // Custom nav events
    $('.brand__nav-next').click(function() {
        $("#brand").trigger('next.owl.carousel');
    });
    
    $('.brand__nav-prev').click(function() {
        $("#brand").trigger('prev.owl.carousel');
    });
});
