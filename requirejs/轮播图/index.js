/**
 * Created by ZJ on 2017/2/20.
 */
require(['jquery','carousel'], function ($,Carousel) {
    var carl =new Carousel();
    carl.init({
        selector:'#content1',
        buttonStyle:'circle',
        speed:'400',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg']
    });

    var cal2=new Carousel();
    cal2.init({
        selector:'#content2',
        buttonStyle:'que',
        speed:'800',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/3.jpg']
    })
});