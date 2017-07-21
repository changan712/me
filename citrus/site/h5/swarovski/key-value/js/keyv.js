(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 450,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.keyvvvvv = function() {
	this.spriteSheet = ss["keyv_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kira = function() {
	this.spriteSheet = ss["keyv_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.kira_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.kira();
	this.instance.setTransform(-34.8,-33.4,0.87,0.507);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-33.4,69.6,66);


(lib.kira_mc_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.kira = new lib.kira_1();
	this.kira.setTransform(0,0,0.255,0.255);
	this.kira._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kira).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1},9).to({scaleX:0.26,scaleY:0.26},10).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.kira_mc_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.kira = new lib.kira_1();
	this.kira.setTransform(0,0,0.255,0.255);
	this.kira._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kira).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},9).to({scaleX:0.26,scaleY:0.26},10).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-22.6,47.2,44.7);


(lib.kira_mc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.kira = new lib.kira_1();
	this.kira.setTransform(0,0,0.255,0.255);
	this.kira._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kira).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1},9).to({scaleX:0.26,scaleY:0.26},10).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-33.4,69.6,66);


(lib.kira_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.kira = new lib.kira_1();
	this.kira.setTransform(0,0,0.255,0.255);

	this.timeline.addTween(cjs.Tween.get(this.kira).to({scaleX:1,scaleY:1},9).to({scaleX:0.26,scaleY:0.26},10).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-33.4,69.6,66);


// stage content:



(lib.keyv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.kira_mc_4();
	this.instance.setTransform(476.6,286.7,0.289,0.289);

	this.instance_1 = new lib.kira_mc_3();
	this.instance_1.setTransform(435.6,212.5,0.471,0.471);

	this.instance_2 = new lib.kira_mc_3();
	this.instance_2.setTransform(275.5,199.1,0.465,0.465,0,0,0,0,-0.5);

	this.instance_3 = new lib.kira_mc_3();
	this.instance_3.setTransform(130.7,135.2,0.471,0.471);

	this.instance_4 = new lib.kira_mc_3();
	this.instance_4.setTransform(195.9,197.6,0.427,0.427);

	this.instance_5 = new lib.kira_mc_3();
	this.instance_5.setTransform(357.6,168.2,0.581,0.581);

	this.instance_6 = new lib.kira_mc_3();
	this.instance_6.setTransform(126.7,199.3,0.353,0.353,0,0,0,0,-0.3);

	this.kira_mc = new lib.kira_mc_2();
	this.kira_mc.setTransform(217.9,268.7,0.279,0.279,0,0,180);

	this.instance_7 = new lib.kira_mc_3();
	this.instance_7.setTransform(534.6,307.8,0.581,0.581);

	this.instance_8 = new lib.kira_mc_4();
	this.instance_8.setTransform(518.6,232.8,0.365,0.365);

	this.kira_mc_1 = new lib.kira_mc_1();
	this.kira_mc_1.setTransform(434.8,182.5,0.362,0.362,0,0,180,0,0.4);

	this.kira_mc_2 = new lib.kira_mc_2();
	this.kira_mc_2.setTransform(336.1,240,0.453,0.453,0,0,180,0,0.6);

	this.instance_9 = new lib.kira_mc_3();
	this.instance_9.setTransform(74.8,182,0.318,0.318,0,0,0,0,-0.5);

	this.instance_10 = new lib.kira_mc_4();
	this.instance_10.setTransform(73.4,133.2,0.318,0.318);

	this.kira_mc_3 = new lib.kira_mc_1();
	this.kira_mc_3.setTransform(472.1,205.9,0.502,0.502,0,0,180,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kira_mc_3},{t:this.instance_10},{t:this.instance_9},{t:this.kira_mc_2},{t:this.kira_mc_1},{t:this.instance_8},{t:this.instance_7},{t:this.kira_mc},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(50));

	// Layer 1
	this.instance_11 = new lib.keyvvvvv();
	this.instance_11.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,225.1,640,449.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;