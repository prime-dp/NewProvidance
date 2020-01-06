$(document).ready(function(){

    //шапка
    $(window).scroll(function(){

        let wScroll = $(this).scrollTop();

        if (wScroll > 20) {
            $('.header-nav').addClass('header-active');
        }
        else {
            $('.header-nav').removeClass('header-active');
        }

    });

    //переключатель тарифа
    let individualPriceTable = $('.price-wrap').find('.starter');
    let companyPriceTable = $('.price-wrap').find('.pro');


    $('.switch-toggles').find('.individual').addClass('active');
    $('#price_tables').find('.individual').addClass('active');

    $('.switch-toggles').find('.individual').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.switch-toggles').removeClass('active');
        $(this).siblings().removeClass('active');
        individualPriceTable.addClass('active');
        companyPriceTable.removeClass('active');
    });

    $('.switch-toggles').find('.company').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.switch-toggles').addClass('active');
        $(this).siblings().removeClass('active');
        companyPriceTable.addClass('active');
        individualPriceTable.removeClass('active');
    });

    //слайдер
    $('.carousel').carousel({
        //interval: false
        touch: true,
        ride: true
    });

    //анимация
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            live:         true
        }
    );

    wow.init();

    //валидация форм
    let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    let mailForInvite = $('#mail-for-invite');
    let mailForSubscribe = $('#mail-for-subscribe');

    $('#invite-btn').on('click', function(event){
        if(mailForInvite.val() != ''){
            if(mailForInvite.val().search(pattern) == 0){
                //alert("алё");

            }else{
                //alert("не алё");
                $('#invite-form').addClass('invalid-mail');
                setTimeout(function () {
                    $('#invite-form').removeClass('invalid-mail');
                },1000);
            }
        }else{
            //alert("пусто");
            $('#invite-form').addClass('empty-mail');
            setTimeout(function () {
                $('#invite-form').removeClass('empty-mail');
            },1000);
        }
        event.preventDefault();
    });

    $('#subscribe-btn').on('click', function(event){
        if(mailForSubscribe.val() != ''){
            if(mailForSubscribe.val().search(pattern) == 0){
                //alert("алё");

            }else{
                //alert("не алё");
                $('#subscribe-form').addClass('invalid-mail');
                setTimeout(function () {
                    $('#subscribe-form').removeClass('invalid-mail');
                },1000);
            }
        }else{
            //alert("пусто");
            $('#subscribe-form').addClass('empty-mail');
            setTimeout(function () {
                $('#subscribe-form').removeClass('empty-mail');
            },1000);
        }
        event.preventDefault();
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            showinfo : 0
        },
    });
});