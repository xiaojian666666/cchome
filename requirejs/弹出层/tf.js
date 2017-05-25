/**
 * Created by ZJ on 2017/2/19.
 */
define(['jquery'],function ($) {

    return {
        defaultValue: {
            width: 400,
            height: 300
        },

        open: function (options) {
            var that =this;
            $.extend(this.defaultValue,options);
            var str='<div class="container">'
                    +'<div class="content"></div>'
                    +'<div class="box">'
                    +'<div class="title">'
                    +'<div class="head">'+this.defaultValue.title+'</div>'
                    +'<div class="button">[X]</div>'
                    +'</div>'
                    +'<div class="title-content">'+this.defaultValue.content+'</div>'
                    +'</div>'
                    +'</div>'
            $('body').append(str);
            $('.box').css({
                width:this.defaultValue.width,
                height:this.defaultValue.height,
                'margin-left':-this.defaultValue.width/2,
                'margin-top':-this.defaultValue.height/2
            })
            $('.button').on('click', function () {
                that.close();
            })
            },
        close: function () {
                $(".button").on('click', function () {
                    $('.container').remove();
                })
        }
    }
})