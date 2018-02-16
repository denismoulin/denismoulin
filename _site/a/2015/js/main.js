jQuery(document).ready(function($){
    var MQL = 100;
    if($(window).width() > MQL) {
        var headerHeight = $('.primary-nav').height();
        $(window).on('scroll',
        {
            previousTop: 0
        }, 
        function () {
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop ) {
                if (currentTop > 0 && $('.primary-nav').hasClass('is-fixed')) {
                    $('.primary-nav').addClass('is-visible');
                } else {
                    $('.primary-nav').removeClass('is-visible is-fixed');
                }
            } else {
                $('.primary-nav').removeClass('is-visible');
                if( currentTop > headerHeight && !$('.primary-nav').hasClass('is-fixed')) $('.primary-nav').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
    }
});