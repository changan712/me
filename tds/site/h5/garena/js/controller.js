var images = {};

var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);


var main = {
    init: function () {
        if (this.inited) return this;
        images = images || {};

        var manifest2 = this.manifest2 = [
            {src: "img/env1.png"},
            {src: "img/env2.png"},
            {src: "img/env3.png"},
            {src: "img/env4.png"},
            {src: "img/env5.png"},
            {src: "img/about0.png"},
            {src: "img/about1.png"},
            {src: "img/about2.png"},
            {src: "img/about3.png"},
            {src: "img/about4.png"},
            {src: "img/about-btn0.png"},
            {src: "img/about-btn1.png"},
            {src: "img/about-btn2.png"},
            {src: "img/about-btn3.png"},
            {src: "img/bg.jpg"},
            {src: "img/btn-back.png"},
            {src: "img/logo.jpg"},
            {src: "img/tit1.png"},
            {src: "img/tit2.png"},
            {src: "img/tit3.png"},
            {src: "img/tt1.png"},
            {src: "img/tt2.png"},
            {src: "img/tt3.png"},
            {src: "img/tt4.png"}
        ];

        $(window).on('pageShow', function (e, data) {
            if ($(data.element).prop('id') == 'page-show') {
                about.init(data.index);
            }
        });


        var loader = new createjs.LoadQueue(false);
        var loader2 = new createjs.LoadQueue(false);

        loader.addEventListener("complete", this.complete);
        loader.addEventListener("fileload", this.handleFileLoad);

        loader2.addEventListener("complete", this.complete2);

        loader.loadManifest(lib.properties.manifest);
        loader2.loadManifest(manifest2);

    },

    handleFileLoad: function (evt) {
        if (evt.item.type == "image" && evt.item.id) {
            images[evt.item.id] = evt.result;
        }
    },
    complete2: function () {
        $('.page2 img').each(function () {
            $(this).prop('src', $(this).data('src'));
        })
    },

    complete: function () {
        var btnM = $('#btn-m');
        var _this = this;
        this.music = true;
        this.audio = $('#audio').get(0);

        $('#loading').hide();
        btnM.show();

        if (isAndroid) {
            btnM.addClass('android');
        }

        btnM.on('tap', function () {
            _this.music = !_this.music;
            if (_this.music) {
                $(this).addClass('play');
                _this.audio.play();
            } else {
                $(this).removeClass('play');
                _this.audio.pause();
            }
        });

        this.canvas = document.getElementById("canvas");
        this.stage = new createjs.Stage(canvas);
        createjs.MotionGuidePlugin.install();

        var root = main.all = this.root = new lib.Root();
        var all = main.all = this.all = root.all;


        this.stage.addChild(root);
        this.stage.enableMouseOver();
        this.stage.update();

        main.setLoop();
        //all.gotoAndPlay(990);
        all.btn.addEventListener('click', function () {
            all.play();
        });

        all.btn2.addEventListener('click', function () {
            all.play();
        });

        all.btn3.addEventListener('click', function () {
            all.play();
        });
        all.btn4.addEventListener('click', function () {
            all.gotoAndPlay('xc');
        });
        all.btn5.addEventListener('click', function () {
            all.gotoAndPlay('qh');
        });
        all.btn6.addEventListener('click', function () {
            all.play();
        });

        all.btn8.addEventListener('click', function () {
            all.gotoAndPlay(935);
        });

        all.about.addEventListener('click', function () {
            page.show(2, 'fadeIn', 1, 0);
        });

        all.hj.addEventListener('click', function () {
            page.show(2, 'fadeIn', 1, 1);
        });

        all.nb.addEventListener('click', function () {
            page.show(2, 'fadeIn', 1, 2);
        });
        all.zw.addEventListener('click', function () {
            location.href = "http://cv.jingle.cn/jingle/app_g/#/position/list/2";
        });


        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", main.tick);

        page.show(1, 'fadeIn');

    }
    ,
    tick: function (e) {
        var paused = createjs.Ticker.getPaused();
        if (!paused) {
            this.stage.update();
        }
    }
    ,
    setLoop: function () {
        var all = main.all;
        all.instance.loop = false;
        all.instance_20.loop = false;
        all.instance_21.loop = false;
        all.instance_22.loop = false;
        all.instance_8.loop = false;
        all.instance_9.loop = false;
        all.instance_13.loop = false;
        all.instance_14.loop = false;
        all.instance_10.loop = false;
        all.instance_15.loop = false;
        all.instance_24.loop = false;
        all.instance_4.loop = false;
        all.instance_17.loop = false;
    }
};

var page = {
    show: function (index, classNames, indexToHide, slideIndex) {

        var element = this._getElementByIndex(index);
        if (indexToHide)  this.hide(indexToHide);
        element.addClass('active').addClass('animated ' + classNames).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated').removeClass(classNames);
        });
        $(window).trigger('pageShow', {element: element, index: slideIndex});
    },
    hide: function (index, classNames) {

        var element = this._getElementByIndex(index);
        if (classNames) {
            element.addClass('animated ' + classNames).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated ' + classNames);
                $(this).removeClass('active')
            });
        } else {
            element.removeClass('active')
        }

        $(window).trigger('pageHide', element);
    },
    hideOthers: function () {
        var activePage = $('.page.active').removeClass('active');

    },
    _getElementByIndex: function (index) {
        return $('.page').filter(function () {
            return $(this).data('index') == index;
        });
    }
};

var about = {
    init: function (index) {
        if (this.inited) {
            if (index >= 0) {
                this.aboutPage.slideTo(index, 0);
            }
            return this;
        }
        var _this = this;
        this.inited = true;
        this.con = $('.about-con');
        this.btnArray = this.con.find('.btn');
        this.currentIndex = 0;
        this.textList = this.con.find('.text li');
        this.textBg = this.con.find('.main-bg');


        this.aboutPage = crateSwipe();
        if (index >= 0) {
            this.aboutPage.slideTo(index, 0);
        }
        $('#page-show').find('.btn-back').on('tap', function () {
            _this.back();
        });

        $.each(this.btnArray, function (i, btn) {
            $(btn).on('tap', function () {
                var index = _this.btnArray.index(this);

                _this.showTxt(i);
            })
        })
    },
    showTxt: function (index) {
        this.textBg.removeClass().addClass('main-bg bg' + (index + 1));
        this.textList.hide();
        this.textList.eq(index).show();
        //this.textList.find('.con').scrollTop(20);
    },
    hideTxt: function () {
        this.textBg.removeClass().addClass('main-bg');
        this.textList.hide();
    },
    back: function () {
        page.show(1, 'fadeIn', 2);
    }
};

/*
 var imgView = {

 init: function () {
 var _this = this;
 this.tImgs = $('#img-view').find('img');
 this.bCon = $('#page-img-box');
 this.btnExit = this.bCon.find('.btn-exit');

 this.bCon.on('click', function () {
 page.show(2, 'fadeIn', 3);
 });

 $.each(this.tImgs, function (i, img) {
 $(this).on('click', function (e) {
 _this.showBig($(this).data('index'))
 });
 })
 },
 showBig: function (index) {
 page.show(3, 'fadeIn');
 var a = createImgView();
 a.slideTo(index + 1, 0);
 }

 };
 */


function AllowZoom(flag) {
    if (flag == true) {
        $('head meta[name=viewport]').remove();
        $('head').prepend('<meta name="viewport" content="width=850,maximum-scale=10.0, minimum-scale=1, user-scalable=1" />');
    } else {
        $('head meta[name=viewport]').remove();
        $('head').prepend('   <meta name="viewport" content="width=850, user-scalable=no"/>');
    }
}


//3个页面切换
function crateSwipe() {
    var elem = document.getElementById('my-swiper');
    return new Swiper(elem, {
        speed: 400
    });
}

//大图浏览
function createImgView() {
    var elem = document.getElementById('swiper-img-box');
    return new Swiper(elem, {
        speed: 400,
        loop: true,
        direction: 'vertical'

    });
}
//小图浏览
function createSwipeImg() {
    var elem = document.getElementById('swiper-env');
    return new Swiper(elem, {
        speed: 400,

        slidesPerView: '2',
        spaceBetween: 20,
        direction: 'vertical'
    });
}

main.init();
