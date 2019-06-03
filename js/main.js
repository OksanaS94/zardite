$(function(){
    // var wow = new WOW({ offset: 100, mobile: false }); 
    // wow.init();
    // $(window).on('load', function () {
    //     $('#preloader').fadeOut(700);
    // });

    // fixing the menu to the top edge
    function fixedMenu() {

        let topScroll = $(document).scrollTop();
        let windowH = window.innerHeight;
        let navH = $('nav').height();
        let resH = windowH - navH;

        if (topScroll > resH && $(window).width() >= 768) {
            $('nav').addClass('fixed-menu');
        }else {
            $('nav').removeClass('fixed-menu');
        }
    }


    fixedMenu();

    $(window).scroll(function () {
        fixedMenu();
    });
 
    $(window).resize(function () {
        fixedMenu();
    });

    // script to mobile menu
    $('.nav-btn').click(function(){
        $('nav').toggleClass('show-menu')
    });

    $('.block-content').hover(function(){
        $(this).find('.gray-icon').css('display','none');
        $(this).find('.green-icon').css('display','block');
    }, function(){
        $(this).find('.green-icon').css('display','none');
        $(this).find('.gray-icon').css('display','block');
    });


    $('#email').focus(function() {
        $(this).next( "label" ).addClass('active_label');
    })
    .blur(function() {
        if(!$(this).val()){
            $(this).next( "label" ).removeClass('active_label');
        } 
    });

    $('.open-popap').click(function($event){
        var attribute = $event.target.getAttribute('data-number');
        if(attribute == 1) {
            $('.popap-img').css('display','block');
            $('.active-img-2').removeClass('block');
            $('.active-img-1').addClass('block');
        }

        if(attribute == 2) {
            $('.popap-img').css('display','block');
            $('.active-img-1').removeClass('block');
            $('.active-img-2').addClass('block');
        }
    });
    $('.close-button').click(function(){
        $('.popap-img').css('display','none');
    })
});



    window.addEventListener('load', function(){
        var expandImg = document.getElementById("expandedImg");
        var imgs = document.querySelectorAll('.item-img');
        expandImg.src = imgs[0].src;
        for(let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('click', function($event) {
                expandImg.src = imgs[$event.target.getAttribute('data-img')-1].src;
            });
        }
    });

    window.addEventListener('scroll', function(){
        progressBar();
    });

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

    function progressBar() {
        var docHeight = document.body.scrollHeight - window.innerHeight;
        var topScroll = document.documentElement.scrollTop

        var procent = ((topScroll / docHeight) * 100).toFixed(2) + '%';
        document.querySelector('.progress-bar').style.width = procent;
    }



    