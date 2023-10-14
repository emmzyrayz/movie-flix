$(document).ready(function () {
    var slides = $(".banner-slide");
    var currentSlide = 0;

    function showSlide(index) {
        slides.eq(currentSlide).fadeOut(1000);
        slides.eq(index).fadeIn(1000);
        currentSlide = index;
    }

    function nextSlide() {
        var nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    $('.filter-button').click(function() {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });

    // Optional: Add navigation buttons or controls to manually navigate through slides.
    $("#next-button").click(function () {
        nextSlide();
    });

    $("#prev-button").click(function () {
        var prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });
});
