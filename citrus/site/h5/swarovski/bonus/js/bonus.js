(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.baggg = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hongbao = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jhjhii = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["bonus_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vregwewe = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hongbao();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138,198);


(lib.hhuioo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.ghghgj = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.title();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,455);


(lib.gegegegr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.button();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,459,110);


(lib.dwfewwe = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.baggg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.bfeerr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.jhjhii();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,167);


(lib.cscwvwvwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dwfewwe();
	this.instance.setTransform(-1012.5,667.4,0.91,0.91,0,0,0,54.5,54.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-427.6,y:98.5,alpha:1},4,cjs.Ease.get(1)).to({x:-379.6,y:66.5},5,cjs.Ease.get(1)).to({x:-357.4,y:38.8},55).to({x:256.6,y:-980},10,cjs.Ease.get(1)).wait(16));

	// Layer 5
	this.instance_1 = new lib.dwfewwe();
	this.instance_1.setTransform(-533.9,1138.1,0.77,0.77,0,0,0,54.5,54.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:51,y:569.2,alpha:1},4,cjs.Ease.get(1)).to({x:99,y:537.2},5,cjs.Ease.get(1)).to({x:121.2,y:509.5},55).to({x:735.2,y:-509.3},10,cjs.Ease.get(1)).wait(16));

	// Layer 4
	this.instance_2 = new lib.dwfewwe();
	this.instance_2.setTransform(-824,1442.2,0.77,0.77,0,0,0,54.5,54.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:64.1,y:300.4,alpha:1},4,cjs.Ease.get(1)).to({x:112.1,y:268.4},5,cjs.Ease.get(1)).to({x:134.3,y:240.7},55).to({x:445.1,y:-205.2},10,cjs.Ease.get(1)).wait(16));

	// Layer 3
	this.instance_3 = new lib.dwfewwe();
	this.instance_3.setTransform(-1002,1172.1,0.9,0.9,0,0,0,54.5,54.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-417,y:603.2,alpha:1},4,cjs.Ease.get(1)).to({x:-369,y:571.2},5,cjs.Ease.get(1)).to({x:-346.9,y:543.5},55).to({x:267.1,y:-475.3},10,cjs.Ease.get(1)).wait(16));

	// Layer 1
	this.instance_4 = new lib.dwfewwe();
	this.instance_4.setTransform(-578.4,655.4,1,1,0,0,0,54.5,54.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:6.5,y:86.5,alpha:1},4,cjs.Ease.get(1)).to({x:54.5,y:54.5},5,cjs.Ease.get(1)).to({x:76.7,y:26.8},55).to({x:690.7,y:-992},10,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1062.1,600.9,570.2,883.2);


(lib.but = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gegegegr();
	this.instance.setTransform(229.5,55,1,1,0,0,0,229.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},5,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459,110);


(lib.brgeger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.vregwewe();
	this.instance.setTransform(590.2,-1057.3,1,1,0,0,0,69,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,y:169.1},5).to({rotation:45,y:93},5).to({rotation:30,y:133},5).wait(29));

	// Layer 3
	this.instance_1 = new lib.vregwewe();
	this.instance_1.setTransform(418.1,-1057.3,1,1,0,0,0,69,99);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:185.1},5).to({rotation:-45,y:109},5).to({rotation:-60,y:149.1},5).wait(26));

	// Layer 2
	this.instance_2 = new lib.vregwewe();
	this.instance_2.setTransform(241.1,-1057.3,1,1,0,0,0,69,99);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({rotation:-60,x:235.1,y:209.1},5).to({x:235.2,y:133},5).to({rotation:-75,x:235.1,y:173},5).wait(24));

	// Layer 1
	this.instance_3 = new lib.vregwewe();
	this.instance_3.setTransform(69,-1057.3,1,1,0,0,0,69,99);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({rotation:15,x:41,y:169.1},5).to({rotation:30,y:93},5).to({rotation:60,y:133},5).wait(21));

	// Layer 5
	this.instance_4 = new lib.vregwewe();
	this.instance_4.setTransform(152,-1112.2,1,1,0,0,0,69,99);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({rotation:30,x:132,y:91.6},5).to({rotation:45,x:132.1,y:27.4},5).to({rotation:30,x:101.6,y:80.8},5).wait(19));

	// Layer 6
	this.instance_5 = new lib.vregwewe();
	this.instance_5.setTransform(368.6,-1105.6,1,1,0,0,0,69,99);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({rotation:-15,x:303.1,y:154.2},5).to({y:74.2},5).to({rotation:-30,y:90.1},5).wait(16));

	// Layer 7
	this.instance_6 = new lib.vregwewe();
	this.instance_6.setTransform(539.2,-1093.6,1,1,0,0,0,69,99);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({rotation:-15,x:508.9,y:185},5).to({x:539.1,y:86.1},5).to({rotation:-30,x:515.2},5).wait(14));

	// Layer 11
	this.instance_7 = new lib.vregwewe();
	this.instance_7.setTransform(590.2,-1057.3,1,1,0,0,0,69,99);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({rotation:30,y:67.1},5).to({rotation:45,y:-9},5).to({rotation:30,y:-1.1},5).wait(19));

	// Layer 10
	this.instance_8 = new lib.vregwewe();
	this.instance_8.setTransform(418.1,-1057.3,1,1,0,0,0,69,99);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({y:83.1},5).to({rotation:-45,y:7},5).to({rotation:-60,y:15},5).wait(16));

	// Layer 9
	this.instance_9 = new lib.vregwewe();
	this.instance_9.setTransform(241.1,-1057.3,1,1,0,0,0,69,99);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({rotation:-60,x:235.1,y:107.1},5).to({x:235.2,y:31},5).to({rotation:-75,x:235.1,y:38.9},5).wait(14));

	// Layer 8
	this.instance_10 = new lib.vregwewe();
	this.instance_10.setTransform(69,-1057.3,1,1,0,0,0,69,99);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({rotation:15,x:41,y:67.1},5).to({rotation:30,y:-9},5).to({rotation:60,y:-1},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(521.2,-1156.3,138,198);


// stage content:



(lib.bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	mask.setTransform(320,568);

	// Layer 5
	this.instance = new lib.bfeerr();
	this.instance.setTransform(320,1136,1,0.125,0,0,0,320,167.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:167,scaleY:1.06},4,cjs.Ease.get(0.99)).to({scaleY:0.93},4,cjs.Ease.get(0.99)).to({scaleY:1},4,cjs.Ease.get(0.99)).wait(60));

	// Layer 4
	this.instance_1 = new lib.brgeger("synched",0,false);
	this.instance_1.setTransform(69,1025.3,1,1,0,0,0,69,99);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(60));

	// Layer 2
	this.instance_2 = new lib.but();
	this.instance_2.setTransform(320.1,1004.5,0.43,0.43,0,0,0,229.6,55);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({regX:229.5,scaleX:1.1,scaleY:1.1,x:320,y:710.2,alpha:1},6,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_3 = new lib.ghghgj();
	this.instance_3.setTransform(320,1004.5,0.21,0.21,0,0,0,320,227.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({regY:227.5,scaleX:1.1,scaleY:1.1,x:334,y:356,alpha:1},5,cjs.Ease.get(1)).to({regY:227.6,scaleX:0.95,scaleY:0.95,y:372.1},6,cjs.Ease.get(1)).to({regY:227.5,scaleX:1,scaleY:1,y:364},6,cjs.Ease.get(1)).wait(12));

	// Layer 9
	this.instance_4 = new lib.cscwvwvwe();
	this.instance_4.setTransform(474.1,222.1,1,1,0,0,0,54.5,54.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).wait(29));

	// Layer 10
	this.instance_5 = new lib.hhuioo();
	this.instance_5.setTransform(320,568,1,1,0,0,0,320,568);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1136);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;