/**
 * Created by Administrator on 2016/7/21.
 */
$(function () {
//        将所有的图片路径保存到数组中，然后清空
    var imgArr=[
        'img/SWXSQ01.jpg','img/SWXSQ02.jpg','img/SWXSQ03.jpg','img/SWXSQ04.jpg',
        'img/SWXSQ05.jpg','img/SWXSQ06.jpg','img/SWXSQ07.jpg','img/SWXSQ08.jpg',
        'img/SWXSQ09.jpg','img/SWXSQ10.jpg','img/SWXSQ11.jpg','img/SWXSQ12.jpg',
        'img/SWXSQ13.jpg','img/SWXSQ14.jpg','img/SWXSQ15.jpg','img/SWXSQ16.jpg',
        'img/SWXSQ17.jpg','img/SWXSQ18.jpg','img/SWXSQ19.jpg','img/SWXSQ20.jpg',
        'img/SWXSQ21.jpg','img/SWXSQ22.jpg','img/SWXSQ23.jpg','img/SWXSQ24.jpg'
    ];


//            初始化swiper
    var mySwiper = new Swiper ('.swiper-container', {
        resistance : true,
        resistanceRatio : 0.7,
//            图片延迟加载
        onTouchMove: function(swiper,event){
            $('img').eq(swiper.activeIndex+2).attr('src',imgArr[swiper.activeIndex+2])
        }
    })

})
