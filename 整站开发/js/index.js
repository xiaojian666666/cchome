/**
 * Created by ZJ on 2017/2/22.
 */

$(function () {
    $(".header-list li a").on('mouseover', function () {
        $(this).addClass('selected').parent().siblings().children().removeClass('selected');
    });

    //ÂÖ²¥Í¼
    var iNow=0;
    var timer;
   $("#prev").on('click', function () {
       iNow--;
       if(iNow==-1){
           iNow=4
       }
       $('.banner-box img').eq(iNow).show().siblings().hide();
   })
    $("#next").on('click', function () {
        iNow++;
        if(iNow==5){
            iNow=0;
        }
        $('.banner-box img').eq(iNow).show().siblings().hide();
    })

    function run(){
        timer=setInterval(function () {
            $("#next").trigger('click');
        },1000)
    }
    run();
    $(".banner-car").hover(function () {
        clearInterval(timer);
    }, function () {
        run();
    })





});
