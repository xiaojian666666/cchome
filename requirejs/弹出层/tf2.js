/**
 * Created by ZJ on 2017/2/20.
 */
define(['jquery'], function ($) {
    function Tf() {
        this.defaultValue = {
            width: 400,
            height: 300
        }
    }

    Tf.prototype.open =  function (options) {
        this.$container = $('<div class="container"></div>');
        this.$content = $('<div class="content"></div>');
        this.$box = $('<div class="box"></div>');
        this.$title = $('<div class="title"></div>');
        this.$head = $('<div class="head"></div>');
        this.$button = $('<div class="button">[X]</div>');
        this.$titleContent = $('<div class="title-content"></div>');

        var that = this;
        $.extend(this.defaultValue, options);
        this.$container.append(this.$content).append(this.$box);
        this.$box.append(this.$title).append(this.$titleContent.html($('.box-content').show()))
            .css({
                width: this.defaultValue.width,
                height: this.defaultValue.height,
                'margin-left': -this.defaultValue.width / 2,
                'margin-top': -this.defaultValue.height / 2
            })
        this.$title.append(this.$head.html(this.defaultValue.title)).append(this.$button);
        $('body').append(this.$container);

        this.$button.on('click', function () {
            that.close();
        })
    }
    Tf.prototype.close = function () {
        this.$container.remove();
    }

    return Tf;
} )