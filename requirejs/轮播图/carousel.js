/**
 * Created by ZJ on 2017/2/20.
 */
define(['jquery'], function ($) {
    function Carousel(){
        this.defaultValue ={
            buttonStyle:'square',
            speed:800
        }
        this.$container=$('<div class="container"></div>');
        this.$content=$('<div class="content"></div>');
        this.$tab=$('<ul class="tab"></ul>');
        this.$arrow=$('<div class="arrow"></div>');
        this.$prev=$('<span class="prev">&lt;</span>');
        this.$next=$('<span class="next">&gt;</span>');

        this.init=function (options) {
            var that =this;
            var iNow=0;
            $.extend(this.defaultValue,options);
            $(this.$container).append(this.$content).append(this.$tab).append(this.$arrow);
            for(var i=0;i<this.defaultValue.imgData.length;i++){
                $(this.$tab).append('<li class="'+this.defaultValue.buttonStyle+''+(i==0?' selected':'')+'">'+(i+1)+'</li>');
                $(this.$content).append('<img class="'+(i==0?'selected':'')+'" src="'+this.defaultValue.imgData[i]+'">')
            }
            $(this.$arrow).append(this.$prev).append(this.$next);
            $(this.defaultValue.selector).append(this.$container);

            function changeImg(idx){
                $('li',that.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
                $('img',that.$content).eq(idx).addClass('selected').siblings().removeClass('selected');
            }
            $('li',this.$tab).on('click', function () {
                changeImg($(this).index());
                iNow=$(this).index();
            });
            this.$prev.on('click', function () {
                iNow--;
                if(iNow==-1){
                    iNow=that.defaultValue.imgData.length-1;
                }
                changeImg(iNow);
            })
            this.$next.on('click', function () {
                iNow++;
                if(iNow==that.defaultValue.imgData.length){
                    iNow=0;
                }
                changeImg(iNow);
            })

            var timer;
            function run(){
                timer=setInterval(function () {
                    that.$next.trigger('click');
                },that.defaultValue.speed)
            }
            run();
            $(this.$container).hover(function () {
                clearInterval(timer);
            }, function () {
                run();
            })

        };

    }
    //Carousel.prototype.init= function (options) {
    //    var that =this;
    //    var iNow=0;
    //    $.extend(this.defaultValue,options);
    //    $(this.$container).append(this.$content).append(this.$tab).append(this.$arrow);
    //    for(var i=0;i<this.defaultValue.imgData.length;i++){
    //        $(this.$tab).append('<li class="'+this.defaultValue.buttonStyle+''+(i==0?' selected':'')+'">'+(i+1)+'</li>');
    //        $(this.$content).append('<img class="'+(i==0?'selected':'')+'" src="'+this.defaultValue.imgData[i]+'">')
    //    }
    //    $(this.$arrow).append(this.$prev).append(this.$next);
    //    $(this.defaultValue.selector).append(this.$container);
    //
    //    function changeImg(idx){
    //        $('li',that.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
    //        $('img',that.$content).eq(idx).addClass('selected').siblings().removeClass('selected');
    //    }
    //    $('li',this.$tab).on('click', function () {
    //        changeImg($(this).index());
    //        iNow=$(this).index();
    //    });
    //    this.$prev.on('click', function () {
    //        iNow--;
    //        if(iNow==-1){
    //            iNow=that.defaultValue.imgData.length-1;
    //        }
    //        changeImg(iNow);
    //    })
    //    this.$next.on('click', function () {
    //        iNow++;
    //        if(iNow==that.defaultValue.imgData.length){
    //            iNow=0;
    //        }
    //        changeImg(iNow);
    //    })
    //
    //    var timer;
    //    function run(){
    //        timer=setInterval(function () {
    //            that.$next.trigger('click');
    //        },that.defaultValue.speed)
    //    }
    //    run();
    //    $(this.$container).hover(function () {
    //        clearInterval(timer);
    //    }, function () {
    //        run();
    //    })
    //
    //};
    return Carousel;
});
