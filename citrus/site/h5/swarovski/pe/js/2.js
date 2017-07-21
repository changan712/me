(function (lib, img, cjs) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 640,
        height: 885,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            {src:"images/demo_c_bg.jpg", id:"demo_c_bg"}
        ]
    };

// stage content:
    (lib.calender = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Egx/BFIMAAAiKQMBj+AAAMAAACKQg");
        mask.setTransform(320,442.5);

        // monkey1
        this.instance = new lib.regerr();
        this.instance.setTransform(152,340.3,0.298,0.298,0,0,0,139.1,145.6);

        this.instance_1 = new lib.regerr();
        this.instance_1.setTransform(69.6,340.3,0.298,0.298,0,0,0,139.3,145.6);

        this.instance_2 = new lib.regerr();
        this.instance_2.setTransform(557,233.7,0.298,0.298,0,0,0,139.2,145.4);

        this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

        // monkey2
        this.instance_3 = new lib.gfereggreer();
        this.instance_3.setTransform(236.4,340.3,0.298,0.298,0,0,0,138.6,143.4);

        this.instance_4 = new lib.gfereggreer();
        this.instance_4.setTransform(318.9,340.3,0.298,0.298,0,0,0,138.6,143.4);

        this.instance_5 = new lib.gfereggreer();
        this.instance_5.setTransform(481.9,340.3,0.298,0.298,0,0,0,138.6,143.4);

        this.instance_6 = new lib.gfereggreer();
        this.instance_6.setTransform(400.4,340.3,0.298,0.298,0,0,0,138.7,143.4);

        this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(200));

        // 图层 8
        this.instance_7 = new lib.csdwffweww();
        this.instance_7.setTransform(401.6,686.9,0.22,0.22,0,0,0,-1191.8,758.3);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200));

        // 图层 1
        this.instance_8 = new lib.demo_c_bg();

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(320,442.5,640,885);


// symbols:
    (lib.demo_c_bg = function() {
        this.initialize(img.demo_c_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,885);


    (lib.vrferwgwe = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AhiCgQgOgEgIgNQgFgIgDgOIgCgUQAAgVABgGIAMhXIAGgbQADgQAFgMQAMglAYgXQAMgOAVgKIAUgHIAUgCIAVACIAWAFIAZAKIABAAIAAABIAVANIAJAHQANAOACAEQAOAWgEAZQgDAWgLAUQgGAMgQAVQgXAggbAdQgbAggZATQggAYgcAHQgIACgIAAQgIAAgGgCgAgvhsQgUASgRAeIgNAZIgJAYQgGAOgGAZIgIAuQgCASABAJQACAaAJAOQAHALAMACQALACAQgFQAXgHAfgaQAagXAVgcQAagfAUgeQANgSAGgOQAIgPACgUQACgPgJgPIgLgMIgIgFIgRgJIgGgCQgMgFgGgBIgIgDIgIgBQgEgBgNAAIgBAAQgbAAgZAWg");
        this.shape.setTransform(39.5,16.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E8212D").s().p("Ah5A7QASiKA3gwQAwgsBKAjQA/AegQA5QgNAqhEBOQg+BLg1AGIgHABQgzAAAMheg");
        this.shape_1.setTransform(38.9,17.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AhBEHIgZgJIgIgEQgdgQgWggQgSgbgLgiQgJgdgEgjQgCgkAEgcIANg6QAHgfAIgYQAUg7AbglQAfgpAngQQASgHASgDIAdgBQAXABAVAFIAeAJQAaAJAPAIQAQAJAKAKQAPAOAIASQAHASAAAaQAAAVgHAbQgIAhgYBCQgPA3gdA4QgjBDgpAmQgfAcgcAIQgLADgLAAQgIAAgJgCgAgrj5QglAQgaAqQgZAngQA4QgIAZgGAeIgHAkIgBAEIgDAQQgGA/AUA5QAMAhAPAVQAUAbAZANIAGADIAOAFIAHACQAMACAOgEQAZgIAVgXQAlgmAfg9QAZgvATg7QAHgSAOgfIATgvQATgygKggQgFgRgMgNQgLgMgNgIQgMgIgbgLIgdgJQgWgGgWgBIgEAAQggAAgcANg");
        this.shape_2.setTransform(32.1,26.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FEF198").s().p("AhFD/QhCgTgehTQgdhNARhMQAch/Aig1QBDhpCAAmQBvAigHBSQgDAwgsBlQgcBeg1BIQg3BKgxAAQgLAAgKgDg");
        this.shape_3.setTransform(32.1,26);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AAXDtIgPgBIgNgEQgYgEgGgDIgcgJIgbgLQg3gagdgpQgbgkgHgvQgDgeABgHQgBgKADgUQADgaAFgSIAJgeQAKgXALgQQATgcAfgWQAigYAwgRQAxgRA3gDQAigCAaADQAVADALADQALADAGAEIAEACIACABIABAAIAAABIACABIAFAEIACADIABACQAIAMAFAXQADAPACARQACAagCAoQgDBFgQA8QgTBNgiAuQgVAdgcARQgbAPgeAAIgJgBgAghjEQguALgjAUQgLAGgTAPIgVAWQgKALgNAaIgJAeQgFAQgEAbQgDAhAFAhQAJAuAcAhQAeAlA0AWQA2AWA4AGQAeABAYgPQAYgOASgbQAdgqAShKQAOg/AAg+QABgegDggIgFgdQgEgQgFgHQgFgJgngFQgWgDghAAQg1ABgvAKg");
        this.shape_4.setTransform(22,28.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FED230").s().p("AAPDgQiLgXg0hVQgvhNAjhxQAhhtCZghQA4gMA4ADQA0ADATAOQASANAEBJQADBNgQBNQgTBcgoAzQgnAzg3AAQgLAAgLgCg");
        this.shape_5.setTransform(21.3,28.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#814320").ss(3).p("AGJAEIqli1QgugMgpAWQgpAXgHApQgLBDAcA8QAdA/A8ApQAmAaAvAIQAvAHAugMQBRgWBSgCQBxgCBuAiQCpA0ADhlQABgggPgrg");
        this.shape_6.setTransform(42.3,43);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FED230").s().p("AD7ClQhugihxACQhSAChRAWQguAMgvgHQgvgIgmgaQg8gpgdg/Qgcg8ALhDQAHgpApgXQApgWAuAMIKlC1IAQAlQAPArgBAgQgCBChLAAQgmAAg5gRg");
        this.shape_7.setTransform(42.3,43);

        this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-5.4,0,91.7,65.4);


    (lib.vegeger = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F9F9F9").s().p("AAeAkIAPgFQAMAVARAlIgWAEQgHgcgPgdgAgqBFQADgNgFgLQARAJAFAAQAEABADgHIAWgyQghgQgPgEQgLgEgJAAQABgIgBgJQAGAAAGgIQARgZAGgQQAaAOAoAOQApAOASADQgBANAEAHQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgDgBQgIgFhqgpIgUAjIAvAWQALgYACgLIAUAMQAEACAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgCAEIgKAWQAkAOAdALIgHARQgZgOgmgRIgZA5QgFAMgGAAIgCABQgHAAgWgGgAhmARQAngFAZgSQAFAHAJAHQAGAGgJgBQgDAAgLAEQgKAFglAMQgFgIgJgJg");
        this.shape.setTransform(71.2,37.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F9F9F9").s().p("AASBCQgFgUAHgZIgBgBQgOAVgRAKQgTAKgbABQgCgGgIgLQAyACAWgiQgRgIgPgFIAHgNQAIAFAXAKQAKgPAKgVIgcgMIAGgOIAbAOIANgfIAUALIADACQAAABAAAAQAAAAAAAAQgBAAAAAAQgBABgBAAQgEAAgNAXQAjAQALADIgIANIgTAkIAVAIIgHAPQgGgFgagMIgXgKQgBAbAIAOQAGANAVASQgLADgKAJQgTgWgFgVgAAaAJIAdAOIAUglIgegNgAhgAsQAMgTAEgJIAuhkIAJgYQAJAHAJADQAFACAAACQAAACgFAAQgFABgCAGIg+CKgAgVgcQACgOgCgSIARACIACAggAhdgnQARgRAKgbIAQAIIgaAug");
        this.shape_1.setTransform(52.2,28.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F9F9F9").s().p("AgVBPQADgKgCgKQAQAKAFAAQAGAAAEgJIAPgeIg3gaIgXA0QgIATgEAMIgVgKQALgSAFgKIAYgyIgxgVIAHgPQAMAIA3AZQAwAVAVAHIgYAwQgHAOgGABIgCAAQgIAAgXgIgAAigQIgKASIgQgFIAJgUIgjgRIgJAUIgRgIIAJgUQgigQgVgHIAHgPQAJAFAtAVIAIgVIATAKIABABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQAAABgBAAIgGAOIAkARQAHgQABgFQAKAGAIADIACACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABQAAAAgBABIgGANQAoASAQAGIgHANQgOgIgogRg");
        this.shape_2.setTransform(34.3,17.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F9F9F9").s().p("AABBaIADgHIhCgeIgFAJIgRgIQAHgLAEgIIARgkQgSABgWACQAAgHgIgKQAsACAbgKQgXgKgYgJIAGgNIA3AbQAJgFAGgFQgegOgTgHIAGgNQAcAPAVALIAKgMQghgRgcgKIAFgNQAVALApAUQAJgMAAgFIALAIIALAFQAGACgJADQgDABgHAGQAXALAuATIgHAMQgZgOgtgUQgFAIgFAEIAPAHQAiAPAUAHIgGALQgagMgbgMIgTgIIgLAKIAkASQAeAMAaAKIgGANQgVgMgXgKQADALAMANQANAMARAJQgKAGgHAIQgSgRgHgKIgQAiQgFAOgDAJgAg5AqIBCAfIAHgOIhDgfgAguASIBCAfIAGgOIhCgfgAgmgFIAlAPIAgAPQgGgNgBgKIgngQQgKAFgNAEg");
        this.shape_3.setTransform(12,9.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#777777").s().p("AAeAkIAPgFQAMAUARAmIgWAEQgHgcgPgdgAgqBEQACgMgEgLQARAIAFABQAEAAADgGIAWgyQghgPgPgFQgLgEgJAAQABgIgBgJQAGAAAGgIQARgbAGgPQAaAOAoAOQApAPASACQgBAOAEAHQACAGgFgDQgIgGhqgpIgUAjIAvAWQALgYACgLQAKAIAKAEQAEACAAACQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgCAEIgKAWQArASAWAHIgHAQQgegQghgPIgZA7QgFALgGAAIgCABQgHAAgWgHgAhmASQAmgHAagRQAGAIAIAHQAFAFgIgCQgDABgLAEQgWAJgZAIQgEgIgKgIg");
        this.shape_4.setTransform(69.7,38.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#777777").s().p("AASBCQgFgUAHgZIgBgBQgOAUgRAKQgTAKgbACQgCgHgIgKQAxACAXgiQgWgLgKgCIAHgNQAHAFAYAKQALgQAJgVQgQgHgMgEIAGgOIAbAOIANgfQAJAGALAFQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgBABgBAAQgEAAgNAXQAjAQALADIgIAMIgTAlIAVAIIgHAPQgKgHgWgKIgXgLQgBAbAIAPQAGANAVASQgMADgJAJQgTgWgFgVgAAaAJIAdAOIATglIgdgOgAhgAsIAQgcIA3h8IASAKQAJAFgKABQgEAAgCAHIgzBsQgGAOgFAQgAgVgcQACgOgCgSIARACIACAfgAhdgnQARgRAKgbIAQAIIgaAug");
        this.shape_5.setTransform(50.7,29.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#777777").s().p("AgVBPQADgKgCgKQAQAKAFAAQAGgBAEgJIAPgdIg3gaIgXA0QgGAMgGATIgVgKQAMgTAEgKIAXgxQgdgOgTgHIAGgPQAHAEA9AdQA3AXAOAFIgYAwQgHANgGACIgCAAQgIAAgXgIgAAigQIgKASIgQgFIAJgUIgjgRIgJAUIgRgIIAJgUQgmgRgRgGIAHgPQARAJAlARIAIgVIATAKIABABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABIgGANIAkARQAHgOABgGIASAJIACACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgGANQAlARATAHIgHANQgYgLgegOg");
        this.shape_6.setTransform(32.8,18.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#777777").s().p("AABBaIADgHIhCgfIgEAKIgSgIQAHgLADgIIASgkQgQABgXACQgDgJgFgIQArACAbgKIgvgTIAGgNQASAKAkARQAKgFAGgFQgegOgUgHIAHgNQAPAJAjARQAFgGAFgGQgjgQgbgLIAFgNIA+AfQAIgNAAgEQAJAIAOAFQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgEABQgEABgIAHQAjAQAiANIgGANQgZgOgsgUIgLAMIAPAGQAfAPAXAIIgHALQgUgKgggOIgTgIIgMAKIAlASQAeAMAaAKIgFANIgtgXQAEAMAMANQALAMASAJQgJAGgIAHQgPgNgLgNIgPAiQgFAMgDALgAg5AqIBCAfIAGgOIhBgfgAguASIBCAfIAGgOIhCgfgAgmgFIBFAeQgGgLgBgMIgmgQIgYAJg");
        this.shape_7.setTransform(10.5,10.6);

        this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,81.5,47.5);


    (lib.vdwvwewew = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AAbC1QgEgBgGgFQgJgHgIgTIgJgeIgFgJIgCgCIgBAAIgDAAIgNgCQgYgCgJgDQgVgGgOgPQgNgOgHgXQgGgSgBgXIAAgTIACgWQAHgtAcglQAcglAugQIALgDIAVgDIAMABIAHACIAAABIABAAIABAAIACABIAKAGIASAMQAiAbARAqQAPAmgEArIgIAnIgBACIgBACIgIAYQgMAhgNAWQgJATgQAUQgNAPgJAGIgHAEIgFACgAAPioIgJACIgRAHQgiASgYAkQgVAfgFAoQgBAGAAAMIAAARQACAXADAKQAIAgAaAKQAJAEASADQAIABAHADIAJAEIADACIADADIADAKIACAHIAHAgQADASAGAIIAGAGIAHgGQAHgJAIgPQAMgWAGgSQAMgfAHgYIAHgZIAAgBIABgBIAIgkQAHgpgHggQgHgXgIgNQgKgPgRgOQgTgPgRgEIgJAAg");
        this.shape.setTransform(20.6,35);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E8212D").s().p("AACCMQgHgigGgGQgEgEgSgDQgXgDgMgFQgugTAAhLQAAhVA7gyQA1gsAhAPQAqATAXAnQAiA7gaBUQgYBSgeAqIgZAaQgOgIgJgeg");
        this.shape_1.setTransform(20.8,35.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AhDELIgJAAIgSgDIgIgDQgSgGgPgPQgWgXgLgnQgOg2AEhMQAFg+AQg2QAPhGAKggQAKgcAJgRQAMgTASgOQAOgLAWgFQAPgDARABQAPAAAbAGIAeAIQAaAKAPAIIANAIIANAKQAOAMAMAPQAYAiAFAzQAEAtgOA7QgHAbgJAdIgMAjIgBAEIgHASQgMAbgVAcQgTAbgZAWQgdAYgbAMQgeAOgfAAIgGAAgAgPkFQgSABgMAEQgRAEgOAMQgZAXgLA0QgDAOgEAkQgFAigFAUQgOA7gEA1QgFBGALAyQAJAiAQARQAJAKAMAFIAHADIAPADIAHAAQAbACAfgMQAYgLAagVQAvglAcg6IAIgUIANgjQALggAGgUQAQg4gBgvQgBgxgXghQgRgbghgTQgRgKgXgHIgegIQgagEgMAAIgDAAg");
        this.shape_2.setTransform(30.1,37.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FEF198").s().p("AhgEAQg+gRgJhvQgIhYAZhdQARhvAWgrQAmhJBuAdQCCAjADB9QABA+gsB8QgZBJhBAyQgzAqgyAAQgQAAgQgEg");
        this.shape_3.setTransform(30.6,37.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AgcD8Ig6gMIgdgKIgPgFIgOgHQgfgQgRgeQgPgdgDgkQgEg6AXhJQATg8Ahg9QAUgkAQgUQALgQAKgJQAQgRAMgGIADgBIAKgDIACAAIADAAIAEABQAIAAALADQANAEAPAIQAYAKAcAUQAsAeAkArQAfAmARAoQAPAkABAeQACAUgEAZIgEAPIAAAAIgEAPQgEAOgMAcQgJASgGAKQgGAKgPAUQgfAkgqASQgiAPgqAAQgNAAgPgCgAgpjcQgHADgMAMIgTAWQgQAVgTAfQghA3gVA8QgYBGADAzQABAhANAZQANAZAaAPQA1AaA4AJQA2AIAugQQApgNAfgjQAYgaAOgfQAKgWAFgTIAIgeIABgTQABgNgCgMIgHgcQgHgTgHgOQgUgkgighQghghgvgeQgbgRgWgJQgagMgMAAIgFABg");
        this.shape_4.setTransform(35.8,41.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FED230").s().p("AiCDVQhBgagIhNQgHhAAghWQAbhMArg/QAqg9AXgCQAXgBAsAZQAxAaArApQBxBsgdBsQgfB0hQApQgoAVgxAAQg6AAhIgeg");
        this.shape_5.setTransform(36.2,42.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#814320").ss(3).p("ACMCVQgrAehAAbIg1AVQgWhJgehNQg9iYgngQQgngQgCg8IAFg6IBwAtQCFA9B5BXQB4BViKBgg");
        this.shape_6.setTransform(21.5,22.6);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FED230").s().p("AhIBMQg9iYgngQQgngQgCg8IAFg5IBwAsQCFA+B5BWQB4BWiKBfQgrAehAAbIg1AVQgWhJgehNg");
        this.shape_7.setTransform(21.5,22.7);

        this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-10.2,-2.1,67.3,69.3);


    (lib.vdwvwewe = function() {
        this.initialize();

        // 隔离模式
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#F8DB97").ss(9).p("AIwHMQAZAXASBVQASBTAABZQAABMgOAvQgQA1gfAJQhAAMjMAPQjmARisAAQixAAhIgWQhBgMglgUQgggQgdghQg1gwAAjUIAAu7QAAiDgWicQgWicAAgeQAAg2ASgdQAUghAvgOQBggQA5AAQA9AAAmARQAeANAaAfQAgAgARBMQAPBLAHCaQABAbANPXQAABOCfAAQBgAADAggQDAgfAiAAQAQAAAMAFg");
        this.shape.setTransform(2625.2,144.5,0.95,0.95);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D84949").s().p("AloOzQg/gMgngUQgfgRgegfQg0gyAAjSIAAu8QAAiDgWicQgWicAAgdQgBg3ATgdQAUghAvgOQBggQA5AAQA9AAAmARQAdAOAaAeQAhAgARBMQAPBLAGCbIAPPxQAABOCfAAQBgAADAggQDAgfAiAAQAPAAANAFQAYAXATBUQASBUAABZQAABMgOAvQgQA2gfAHQhAANjMAPQjnARisAAQiwAAhJgWg");
        this.shape_1.setTransform(2625.2,144.5,0.95,0.95);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#F8DB97").ss(9).p("AEHpzQBpF5BIENIBDgLQA2AAAUASQAOANAAAeQgPBagSAiQgeA3gWAhQAqCEBWDHQA8CLAAAwQAAAfgQAYQgPAYghAUQiZBFhMAAQgbAAgXgJQgRgGgWgPQhOgvg5igQghhegli0IgIgtIlQA7QgUBbgaCRQgUBxgMAoQgRA7gaAZQgbAZg1ACQiBgJg5gfQgsgYgRgxQgQghAAg6QAAhOAah1IAjiBQg4gpAAhIQAAgXADgLQAAgeATgXQATgWAqgVIAtgJQBOkQAxjaQAgiVAmjkQAYiWAQgdQAeg2AigXQA0gkBfAAQBrACAuAIQAyAJAjAZQA1AcAxCKQAZBFAOA/gAh3h0QgSBRgjCfIDZgkQgxjsg8jCQgXBTggCPg");
        this.shape_2.setTransform(2495.7,144.4,0.95,0.95);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D84949").s().p("AprOiQgtgYgQgxQgRghAAg6QAAhOAbh1IAiiBQg3gpAAhIQAAgXADgLQAAgeASgXQATgWArgVIAsgJQBOkQAxjaQAgiVAmjkQAZiWAPgdQAeg2AigXQA0gkBfAAQBrACAvAIQAxAJAjAZQA0AcAyCKQAZBFAPA/QBoF5BJENIBCgLQA2AAAUASQAOANABAeQgQBagSAiQgeA3gWAhQArCEBVDHQA8CLAAAwQAAAfgQAYQgPAYghAUQiZBFhMAAQgbAAgXgJQgRgGgWgPQhOgvg4igQgihegli0IgIgtIlPA7QgVBbgaCRQgUBxgLAoQgRA7gbAZQgbAZg1ACQiBgJg4gfgAh3h0Ig1DwIDZgkQgxjsg8jCQgWBTghCPg");
        this.shape_3.setTransform(2495.7,144.4,0.95,0.95);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#F8DB97").ss(9).p("AL/ruQAABLgaBuQgOA3gMAoQgjB3gsCcQhYE2gpC5IgkCeQgsDDgRBGQgbBngPAeQgeA2ghAXQg0AkhfAAQh0gDg6gIQhJgKghgXQg0gcg4iKIgviFQhGjShKjaQiSmzgLgtQgqiChXjIQg7iLAAgxQAAgfAPgXQAPgYAigVQCZhFBMAAQAaAAAXAJQARAGAWAPQBFAmA5CfQAcBQAPBIIBpFtQBzGRA9DAQAqhQBelIQAwilAvivQAahwAZiSQAYiMAJglQARhIAZgeQAdgiA1gCQCBAKA5AfQAsAXARAyQAQAhAAA3g");
        this.shape_4.setTransform(2366.1,144.5,0.95,0.95);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D84949").s().p("AgPO+QhKgKgggYQg0gbg5iKIguiFIiRmsQiTmzgKgtQgqiBhWjJQg8iLAAgxQAAgeAPgYQAQgYAggVQCbhFBLAAQAaAAAXAJQARAHAXAOQBFAnA4CfQAcBPAPBIIBpFsQBzGSA9C/QAqhQBelGQAwinAwiuQAZhwAZiSQAYiMAJgkQARhJAageQAcghA1gDQCBAKA4AfQAtAXARAyQAQAhAAA4QAABKgaBuQgOA3gNAoQgjB3gsCcQhXE1gpC6IgkCdQgsDEgSBGQgZBngPAdQgfA3ghAXQg0AkhfAAQh0gDg5gIg");
        this.shape_5.setTransform(2366.1,144.5,0.95,0.95);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#F8DB97").ss(9).p("ADQpmQgCAsAADbQAAGrALC5QAKDSAPCoQAFA3AOCJQAABjgvALQgPAQggAKQgjAKgtAAQgoAAgrgIQhAgNglgXQgegSgeglQghgdgOhhQgJg/AAhVIAAu7QgGh/gVikQgUiUAAgoQAAg4AUgeQAVggAygOQBSgOBHAAQA9AAAmARQAeANAYAfQAoAmASBlQANBIAABag");
        this.shape_6.setTransform(2264.4,144.8,0.95,0.95);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#D84949").s().p("AAEPJQhAgNgmgXQgdgSgfglQgggdgOhhQgJg/AAhVIAAu7QgGh/gWikQgTiUAAgoQAAg4ATgeQAWggAygOQBRgOBHAAQA+AAAlARQAfANAXAfQAoAmATBlQANBIAABaQgCAsgBDbQAAGrALC5QALDSAPCoQAFA3AOCJQAABjgvALQgPAQggAKQgjAKgtAAQgoAAgrgIg");
        this.shape_7.setTransform(2264.4,144.8,0.95,0.95);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#F8DB97").ss(9).p("AF/oiIjHBAQAcGnAOEuQAKDVAPCoQACAXARCrQAAA3gNAXQgGAKgcAXQgQAPggAKQgkALgrAAQgkAAgtgIQhAgOgpgXQgdgSgegiQgigfgOhiQgKhAAAhWIAAu+IkJAyQgRADgTAAQg/AAgagqQg/g2AAkmIAAg7QAQADAhAAQARAAAggBQAhgCASAAQAvAABDgIQB2gNB3giQCYgqDngyQDjgxApAAQAOAAAWgDQAaAAARAJQAPAIARAWQARAXATB7QALBLAIBcQg+ABjUBBg");
        this.shape_8.setTransform(2168.5,144.1,0.95,0.95);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#D84949").s().p("AARO9QhAgOgpgXQgdgSgegiQgigfgOhiQgKhAAAhWIAAu+IkJAyQgRADgTAAQg/AAgagqQg/g2AAkmIAAg7QAQADAhAAIAxgBIAzgCQAvAABDgIQB2gNB3giQCYgqDngyQDjgxApAAQAOAAAWgDQAaAAARAJQAPAIARAWQARAXATB7QALBLAIBcQg+ABjUBBIjHBAQAcGnAOEuQAKDVAPCoIATDCQAAA3gNAXQgGAKgcAXQgQAPggAKQgkALgrAAQgkAAgtgIg");
        this.shape_9.setTransform(2168.3,144.1,0.95,0.95);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#F8DB97").ss(9).p("AJHomQAQBUAGA+QhCgWhZAAQhhAAhtAbIhaAaQhFAYhMAlQiWBJgjA+QgRAbAAAaQAAAdAcANQAOAHAOAAIAfgDQAvgEBNgEQAfAAA3gCQEjAABYBYQAgAmAUA0QAcBJAABXQAACwhxDFQhsDAjwBUQilA7jMAAQhAAAgWgDQhogIgzhPQgshGAAh9QAAhhAQkMQBAAmBeAYQBiAYBgAAQBeAABQgZQB2grA9gtQBAgvAEg1QAAgdgWgNQgSgLgdAAQgTAAgWAEIgRAEQicAZixAZQgZADgpAAQhcAAhEgaIgzgbQgbgSgcgrQg3hTAAh3QAAhhAmh0QBTj8EOixQC3h5C2gtQBggWBAAAQAnAAAWAGIAQACQATAFASAKQA7AgAaBIQAvBvAfCpg");
        this.shape_10.setTransform(2041.2,144.8,0.95,0.95);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#D84949").s().p("AleO7QhogIgzhPQgshGAAh9QAAhhARkMQA/AmBeAYQBiAYBgAAQBeAABQgZQB3grA8gtQBAgvAEg1QAAgdgWgNQgSgLgdAAQgTAAgVAEIgSAEQibAZixAZQgZADgqAAQhcAAhEgaIgygbQgcgSgbgrQg4hTAAh3QAAhhAnh0QBTj8ENixQC4h5C1gtQBggWBBAAQAmAAAWAGIAQACQATAFASAKQA8AgAaBIQAuBvAfCpQAQBUAGA+QhCgWhZAAQhhAAhtAbIhaAaQhFAYhMAlQiWBJgiA+QgRAbgBAaQAAAdAcANQAOAHAOAAIAfgDQAvgEBOgEQAeAAA3gCQEjAABYBYQAgAmAUA0QAdBJgBBXQABCwhyDFQhsDAjwBUQilA7jMAAQg/AAgXgDg");
        this.shape_11.setTransform(2040.9,144.8,0.95,0.95);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#F8DB97").ss(9).p("ACqoNQjsAVhYALIAAFGQDUgsFGAAQAhADARAIQAbAOAAAhQAAASgIAaQgwCviSBDQhcAqjrAYIhQAIIAAF7QCJghDJgLQB1gHDigEQBRAHAABMQAAAugcA7QgbA3glAnQgwAthkAkIhZAbQhGALhgALQi/AWiGAAQiJAAg+gWQgXgGgVgTQgngTgZgiQg4gxAAjVIAAg1QgCmLAAjIQAAjIAChmQgEh/gVifQgTiSAAgmQAAg4ASgdQAUgfAzgOQBfgRA5AAQA9AAAmATQAdAOAYAfQASAOANAeQA5gPA1gKQCfgeDdAAQB0AAA3AFQBQAIAABLQAAAugbA7QgaA3gmAoQhQBFjTAdg");
        this.shape_12.setTransform(1923.2,144.6,0.95,0.95);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#D84949").s().p("AmVOvQgXgGgWgTQglgTgagiQg3gxgBjVIAAg1QgCmLAAjIQAAjIAChmQgEh/gVifQgTiSAAgmQAAg4ASgdQAVgfAygOQBfgRA5AAQA9AAAmATQAeAOAXAfQASAOAMAeQA7gPA0gKQCfgeDdAAQB0AAA3AFQBQAIAABLQAAAugbA7QgaA3glAoQhRBFjSAdQjtAVhYALIAAFGQDUgsFGAAQAhADARAIQAbAOABAhQAAASgJAaQgwCviSBDQhcAqjqAYIhRAIIAAF7QCKghDJgLQB0gHDigEQBQAHABBMQAAAugcA7QgbA3glAnQgwAthkAkIhaAbQhFALhgALQi+AWiHAAQiIAAg/gWg");
        this.shape_13.setTransform(1923.2,144.6,0.95,0.95);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#F8DB97").ss(9).p("AHwvCQAgADAXAQQAiAXAAAsQAAASgIAdQgPA1gQAaQgRAcguAtQgxAuhzAhIhpAXQgiAJg+ALQh5AXiHAPIAAFlQCOgcCmgWQBxgWB6AAQAjADARAIQAcAOAAAhQAAAqghBMQgiBKgjAhQgyAvhWAkIhNAcQiKAhilAZIAAF9QAAClgvBVQhABxiaAAQgzAAgog5QhGhkAAjyIAAucQAAhBgMiAQgNiBAAg0QAAiVBIgLQCEgXE3gYQCagMCBgHg");
        this.shape_14.setTransform(1802.2,144.5,0.95,0.95);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#D84949").s().p("AnoOKQhHhjABjyIAAudQAAhAgNiAQgNiBAAg0QABiVBHgLQCEgXE3gYQCagMCBgHIEagEQAgAEAXAPQAhAYABAsQAAASgJAcQgPA2gPAaQgRAcguAtQgxAuhzAhIhpAXQgiAJg+AKQh5AXiHAQIAAFkQCOgbCmgWQBwgWB7AAQAjADARAIQAcAOAAAhQAAAqgiBMQghBKgjAgQgyAvhXAlIhMAbQiLAiikAZIAAF9QABClgwBVQg/BwibAAQgzAAgng5g");
        this.shape_15.setTransform(1802.2,144.5,0.95,0.95);

        // Layer 1
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#F8DB97").ss(9).p("AJknYQgJAggLAZQgEAPgSAAQgOAAgTgHIgRgIQghgPg3gPQhtgehmAAQiMAAhoA6QiFBIhJChQgsCMAAB3QAADKBwB2QBuB2C3AAQBLAABagWQAKgiAPhhQAUiIAKg0Qk0Acg6AAQgvgFgFgBQgggMAAgoQAAgMAFgXIAGgPQAQgyAFgKQAMgcAaghQAjglCqgnQBWgUBOgMQAOgCAbAAQBOAABBAYQBNAdAWA0QAPAXAIA+QAKBAAABSQAACgghCQQgzC2hYBPQiABzkTAAQgoAAg8gKQh9gWhsg4Qlbi1g6nSIAAgyQAAoJF3kKQCFheCjgyQB+glBeAAQBfAAA5AZQCFAtA8BSQAvBBAABWQAAAxgPA0g");
        this.shape_16.setTransform(1516.3,131.1);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#D84949").s().p("AgSNjQh9gWhsg4Qlbi1g6nSIAAgyQABoJF2kKQCFheCjgyQB+glBeAAQBeAAA6AZQCEAtA9BSQAuBBABBWQAAAxgPA0QgJAggMAZQgDAPgSAAQgOAAgTgHIgRgIQghgPg3gPQhtgehmAAQiMAAhoA6QiFBIhIChQgtCMABB3QAADKBuB2QBvB2C3AAQBLAABagWQAKgiAOhhQAViIAKg0Qk0Acg5AAQgvgFgGgBQgggMAAgoQAAgMAGgXIAFgPQAQgyAFgKQAMgcAaghQAiglCrgnQBWgUBOgMQAOgCAbAAQBPAABBAYQBLAdAXA0QAOAXAJA+QAJBAAABSQABCgghCQQgzC2hYBPQiABzkTAAIgDAAQgoAAg5gKg");
        this.shape_17.setTransform(1516.3,131.1);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#F8DB97").ss(9).p("ALCnvIAADVQAAFsAICcQAMC+APCZQACAPARCfQAABZguALQgPAOgfAJQgjAJgsAAQglAAgtgHQhDgOgngVQhHgsh5iZQgLgOicjVQjFkZiQjMQAACrAICDQAMC/APCYQAFA1AOB5QAABZguALQgQAOgeAJQgjAJgsAAQglAAgtgHQhBgMglgWQgdgPgegiQgggagNhXQgJg6AAhNIAAtiQAAh5gXiPQgXiPAAgbQAAgzATgbQAVgdAxgNQBjgPA5AAQA7AAAnARQBHAWBZB2QAsA7AeA3QDCE7AfAwQCFDOB0CSQgGl6gVj7QgKh7gJhjQAAgyATgcQAVgdAygNQBOgNBHAAQA/AAAlAQQAeAMAXAbQAoAkASBbQANBBAABSQAAAjgDAZg");
        this.shape_18.setTransform(1369,130.1);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#D84949").s().p("AH7NwQhDgOgngVQhHgrh5iaIinjjIlVnkQAACpAICEQAMC/APCYIATCuQAABZguAKQgQAOgeAKQgjAJgsAAQglAAgtgHQhBgMglgWQgdgPgegiQgggagNhYQgJg5AAhOIAAthQAAh5gXiPQgXiPAAgaQAAgzATgbQAVgeAxgNQBjgPA5AAQA7AAAnARQBHAWBZB2QAsA7AeA3QDCE7AfAwQCFDOB0CSQgGl6gVj7IgTjdQAAgzATgbQAVgeAygNQBOgMBHAAQA/AAAlAPQAeAMAXAcQAoAjASBbQANBCAABRQAAAjgDAZIAADVQAAFtAICbQAMC9APCaIATCuQAABZguAKQgPAOgfAKQgjAJgsAAQglAAgtgHg");
        this.shape_19.setTransform(1369,130.1);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#F8DB97").ss(9).p("ADNotQgDAoAADGQAAGDALCoQALC+AOCZQADAgAQCOQAABZguALQgQAOgfAJQgiAKgtAAQgkAAgtgHQg/gNglgUQgegRgdghQgggagNhYQgJg5AAhOIAAtiQgGhzgWiVQgTiFAAgkQAAgzAUgbQAVgeAxgNQBOgMBIAAQA8AAAmAPQAeAMAWAcQAoAjASBbQANBCAABRg");
        this.shape_20.setTransform(1256.3,131.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#D84949").s().p("AAENuQg/gMglgUQgegSgdghQgggagNhXQgJg6AAhMIAAtjQgGhygWiVQgTiFAAglQAAgyAUgcQAVgdAxgNQBOgNBIAAQA8AAAmAQQAeAMAWAbQAoAkASBaQANBCAABSQgDAnAADGQAAGEALCnQALC+AOCZIATCuQAABaguAKQgQAOgfAJQgiAKgtAAQgkAAgtgIg");
        this.shape_21.setTransform(1256.3,131.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#F8DB97").ss(9).p("AJvipQgmB1hQBKQhJBEh6AvQAlA9BwDKQBbClBBBgQAeA0AAAYQAAAHgFAKQgGALAAAFQgJAeghAZQgoAfg8AOQgoAKghAAQgqAAgtgXQgwgRhNhyIhEhuIjTmHQgTADgxAAQgxAAgRgDIAHBsQAIB/AABlQAAEagyAJQgyAchDAAQgSAAgTgDIgOgCQg7gNgggTQgcgSgagjQgdgZgMhUQgIg5AAhLIAAtgQAAh3gUiNQgViNAAgbQAAg1ASgaQASgdAugNQBWgPAyAAQBTAAAlAmQAxgLBUgHQBTgHBWAAQA3AABSAFQChAEB9BMQDaCEAAE1QAABegOBNgAj0oSIAZGlQAIAAARACQARABAKAAQCgAABnguQCThAACiQQAAhZhPgyQhPgziMAAQhgAAhfAUg");
        this.shape_22.setTransform(1158.8,130.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#D84949").s().p("AFMNZQgwgRhOhyIhEhuIjSmGQgTACgxAAQgxAAgRgCIAIBrQAGB/AABlQAAEZgxAKQgyAbhDAAQgTAAgSgCIgPgCQg6gNgggUQgcgRgagkQgcgYgNhVQgIg4AAhLIAAtfQAAh4gUiNQgUiNgBgbQAAg0ASgbQASgcAugNQBVgQAzABQBUAAAkAlQAxgLBUgHQBTgHBWAAQA3AABSAFQCgAFB+BLQDaCFAAE1QAABegOBMQglB1hRBKQhJBEh6AvQAlA9BwDJQBbCmBABgQAfAzAAAZQgBAHgFAKQgFALAAAEQgKAeggAaQgnAeg9AOQgoAKghAAQgrAAgsgWgAjzoSIAYGlIAZACIAbABQCgAABnguQCThAABiPQAAhahOgyQhPgziMAAQhgAAheAUg");
        this.shape_23.setTransform(1158.8,130.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#F8DB97").ss(9).p("AJCilQhEDYjjBuQi1BYjeAAIgmAAIAGBiQAFB2AABfQAAEQgvAJQgxAbhAAAQgTAAgTgCIgPgDQg6gMgggUQgbgQgbgiQgbgZgLhSQgIg3AAhKIAAtYQAAh3gUiMQgViLAAgZQAAgyARgbQASgcAsgNQBWgPAyAAQAtAAAdAKQAaAJARASQBtgZCDAAQEaAACWBqQCzB/AAEcQAABcgOBRgADXmSQgehHhGgcQgSgGgegHQg+gMg+AAQhEAAg5AMIAVGhQAKAAATABQATABAJAAQEwAAAgjsQAAgggRgng");
        this.shape_24.setTransform(1028.3,132.2);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#D84949").s().p("AlYNiIgPgDQg7gMgggUQgbgQgagiQgbgZgMhSQgIg3AAhKIAAtYQAAh3gUiMQgViLAAgZQABgyAQgbQASgcAsgNQBWgPAyAAQAtAAAdAKQAaAJARASQBtgZCDAAQEaAACWBqQCzB/AAEcQAABcgOBRQhEDYjjBuQi0BYjfAAIgmAAIAGBiQAFB2AABfQAAEQgvAJQgxAbhAAAQgTAAgSgCgAi2oCIAVGhIAdABIAcABQExAAAfjsQAAgggRgnQgehHhGgcQgRgGgggHQg8gMg/AAQhDAAg6AMg");
        this.shape_25.setTransform(1028.3,132.2);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#F8DB97").ss(9).p("AI+nzQAPBNAGA4QhBgUhXAAQhgAAhrAYIhZAYQhEAWhLAhQiTBDgiA4QgRAYAAAYQAAAaAcAMQANAGAOABIAegDQAvgEBMgDQAeAAA2gDQEfAABWBQQAfAiAUAvQAcBDAABPQAACfhvCzQhqCujtBMQiiA1jJAAQg/AAgVgCQhZgHgrgnQgagYgWg6QgKgagDghQgDgbAAgqQAAhfAQjsQA+AjBeAVQBfAWBfAAQBdAABOgXQB0gmA9gpQA+grAEgwQAAgagWgMQgRgKgdAAQgSAAgWAEIgRAEQiZAWiuAXQgZACgpAAQhaAAhDgXIgygYQgbgRgbgnQg3hLAAhsQAAhYAnhpQBRjkEJihQC1htCygpQBfgUA/AAQAmAAAWAFIAQACQATAEASAJQA6AdAZBCQAuBlAfCYg");
        this.shape_26.setTransform(904,131.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#D84949").s().p("AlYNiQhZgHgrgnQgagYgWg6QgKgagDghQgDgbAAgqQAAhfAQjsQA/AjBdAVQBgAWBeAAQBdAABOgXQB0gmA9gpQA+grAEgwQABgagWgMQgRgKgdAAQgTAAgWAEIgRAEQiZAWiuAXQgYACgpAAQhbAAhDgXIgxgYQgbgRgcgnQg2hLAAhsQgBhYAnhpQBRjkEJihQC1htCygpQBfgUBAAAQAmAAAWAFIAPACQATAEASAJQA6AdAaBCQAuBlAeCYQAPBNAHA4QhCgUhXAAQhfAAhsAYIhZAYQhEAWhLAhQiTBDgiA4QgRAYAAAYQABAaAbAMQAOAGANABIAfgDQAugEBNgDQAeAAA2gDQEeAABWBQQAfAiAVAvQAbBDAABPQAACfhvCzQhqCujsBMQijA1jJAAQg+AAgWgCg");
        this.shape_27.setTransform(903.7,131.5);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#F8DB97").ss(9).p("AKlqsQgIAziFDSQjgFiguBLQAACdAQC4QAKB1AdDvQAABVgtAtQgrArhRAAQgsAAgrgKQh/gbgyiHQgihcAAiiIAAnMQgpg4hIhMQhFhFgIgJQgigqjSjmQhghqAAg2QAAgnAjgkQBUhKA7ggQA1gdApAAQAQAAAhAKQBMALBnB4QAzA8AkA5ICcDTIAkgtQA7hWA7hlQAgg2AvhTQAkg8AbgYQAfgdAmAAQATAAAZAIQB5A2AtAuQAjAkAAAvg");
        this.shape_28.setTransform(603.2,131.5);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#D84949").s().p("ABBNiQh/gbgyiHQgihcAAiiIAAnMQgpg4hIhMIhNhOQgigqjSjmQhghqAAg2QAAgnAjgkQBUhKA7ggQA1gdApAAQAQAAAhAKQBMALBnB4QAzA8AkA5ICcDTIAkgtQA7hWA7hlIBPiJQAkg8AbgYQAfgdAmAAQATAAAZAIQB5A2AtAuQAjAkAAAvQgIAziFDSQjgFiguBLQAACdAQC4QAKB1AdDvQAABVgtAtQgrArhRAAQgsAAgrgKg");
        this.shape_29.setTransform(603.2,131.5);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#F8DB97").ss(9).p("ADYmSQgehHhGgcQgSgGgfgHQg9gMg/AAQhDAAg6AMIAWGhQAJAAAUABQATABAJAAQEwAAAgjsQAAgggRgngAJCilQhEDYjiBuQi1BYjeAAIgmAAIAFBiQAGB2AABfQAAEQgvAJQgyAbhAAAQgTAAgSgCIgPgDQg6gMgggUQgcgQgbgiQgagZgLhSQgIg3AAhKIAAtYQAAh3gViMQgUiLAAgZQAAgyAQgbQATgcAsgNQBVgPAzAAQAsAAAeAKQAZAJARASQBugZCCAAQEbAACVBqQCzB/AAEcQAABggOBNg");
        this.shape_30.setTransform(472.4,132.2);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#D84949").s().p("AlZNiIgOgDQg6gMgggUQgcgQgagiQgbgZgLhSQgIg3AAhKIAAtYQgBh3gUiMQgViLAAgZQABgyAQgbQASgcAtgNQBVgPAyAAQAtAAAdAKQAaAJARASQBtgZCDAAQEaAACWBqQCzB/AAEcQAABggOBNQhEDYjjBuQi0BYjfAAIgmAAIAGBiQAGB2gBBfQAAEQguAJQgyAbhAAAQgTAAgTgCgAi2oCIAWGhIAcABIAdABQEvAAAhjsQAAgggRgnQgfhHhFgcQgSgGgfgHQg+gMg+AAQhEAAg5AMg");
        this.shape_31.setTransform(472.4,132.2);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#F8DB97").ss(9).p("AJCilQhFDYjiBuQi0BYjfAAIgmAAIAGBiQAFB2AABfQAAEQgvAJQgxAbhAAAQgTAAgSgCIgPgDQg7gMgggUQgbgQgbgiQgagZgMhSQgIg3AAhKIAAtYQAAh3gUiMQgUiLAAgZQAAgyAQgbQATgcArgNQBXgPAyAAQAsAAAdAKQAZAJASASQBtgZCDAAQEaAACWBqQCyB/AAEcQAABdgNBQgAi2oCIAWGhQAJAAATABQATABAJAAQExAAAfjsQAAgggQgnQgfhHhGgcQgRgGgggHQg8gMg/AAQhDAAg6AMg");
        this.shape_32.setTransform(347,132.2);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#D84949").s().p("AlYNiIgPgDQg7gMgggUQgcgQgZgiQgbgZgMhSQgIg3AAhKIAAtYQAAh3gUiMQgViLAAgZQABgyAQgbQASgcAsgNQBWgPAyAAQAtAAAdAKQAaAJARASQBtgZCDAAQEaAACWBqQCzB/AAEcQgBBdgOBQQhEDYjiBuQi0BYjfAAIgmAAIAGBiQAFB2AABfQAAEQgvAJQgxAbhAAAQgTAAgSgCgAi2oCIAWGhIAcABIAcABQExAAAfjsQAAgggRgnQgehHhGgcQgRgGgggHQg8gMg/AAQhEAAg5AMg");
        this.shape_33.setTransform(347,132.2);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#F8DB97").ss(9).p("AI8AXQAOAMAAAbQgQBUgRAdQgdAygWAeQApB2BVC1QA7B+AAAsQAAAcgPAWQgPAWghASQiXA/hLAAQgaAAgWgIQgRgGgWgOQhNgqg3iSQghhVgkijIgIgoIlKA1QgUBTgaCDQgUBngLAkQgRA1gaAWQgbAXg0ACQh/gIg4gcQgrgWgQgsQgRgeAAg1QAAhHAahpIAih1Qg2glAAhCQAAgUACgKQAAgcATgVQATgUApgTIAsgIQBKjsAzjQQAgiHAljOQAYiIAQgbQAdgxAigVQAzghBdAAQBqACAtAIQAxAIAjAWQAzAZAxB+QAYA/AOA5QBoFVBHD0IBBgKQA2AAATAQgAh0hpQgSBKgjCPIDVggQgvjTg7izQgXBMgfCBg");
        this.shape_34.setTransform(215.7,131.1);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#D84949").s().p("ApiNLQgrgWgQgsQgRgeAAg1QAAhGAahqIAih1Qg2glAAhCQAAgUACgKQAAgcATgUQATgVApgTIAsgIQBKjrAzjQQAgiIAljOQAYiIAQgaQAdgyAigVQAzghBdAAQBqADAtAHQAxAJAjAWQAzAZAxB9QAYA/AOA5QBoFVBHD0IBBgKQA2AAATARQAOALAAAbQgQBUgRAdQgdAygWAfQApB1BVC2QA7B+AAAsQAAAbgPAWQgPAWghATQiXA+hLAAQgaAAgWgIQgRgGgWgNQhNgrg3iRQghhWgkijIgIgoIlKA1QgUBTgaCDQgUBngLAkQgRA2gaAVQgbAYg0ACQh/gJg4gcgAh0hpIg1DaIDVghQgvjTg7iyQgXBLgfCBg");
        this.shape_35.setTransform(215.7,131.1);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#F8DB97").ss(9).p("AJcnjIAAD8QA4AAATAQQAPAMAAAdQgRBUgQAdQgaAxgfAlQAACWAFA/QAQC1AQCcQAJBRALBeQAAAwgMAWQgJAQgcAVQg5AXg8AAQgqAAgogKQhDgJgngUQgggQgWgeQgkgdgPhYQgJg6AAhMIAAl+Qj+AtiAAaIAAAKQAOC7AQCSQAIBOALBWQAAAwgNAWQgGAJgeAcQgPAJgjAJQgrAKguAAQgQAAgsgFQhKgSgegQQgigQgUghQgjgdgPhfQgKg+AAhLIAAkyQgsgPgVgcQgWgcAAgvQAAgGAGgnQAAgbATgVQATgSArgUQgGkqgVjXQgTjHAAgFQAAgxASgbQAUgdAxgNQBmgPA4AAQA9AAAlAQQAdANAXAdQA/A6AADhIAAGXQAwgICKgUQB4gTBRgNQgHi+gViuQgTifAAgYQAAgzAUgcQAUgeAygRQBSgHA2AAQBIAAAnAOQAgANAdAeQA+A3AADJQAAArgCAgg");
        this.shape_36.setTransform(69.4,131.1);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#D84949").s().p("AGdNmQhDgKgngSQgggRgWgeQgkgdgPhYQgJg6AAhMIAAl+Qj+AuiAAZIAAAKQAOC6AQCSIATCkQAAAwgNAXQgGAJgeAcQgPAKgjAHQgrAKguAAQgQAAgsgEQhKgSgegQQgigQgUghQgjgdgPhfQgKg+AAhLIAAkxQgsgQgVgcQgWgdAAgtQAAgHAGgmQAAgcATgWQATgSArgSQgGkrgVjXIgTjMQAAgxASgaQAUgeAxgNQBmgPA4AAQA9ABAlAPQAdANAXAdQA/A6AADhIAAGWIC6gcQB4gRBRgOQgHi9gVivQgTifAAgYQAAgyAUgdQAUgeAygRQBSgHA2AAQBIAAAnAPQAgAMAdAfQA+A2AADJQAAArgCAgIAAD7QA4AAATARQAPAMAAAdQgRBUgQAdQgaAxgfAlQAACWAFA/QAQC1AQCbIAUCwQAAAwgMAWQgJAPgcAWQg5AXg8AAQgqAAgogKg");
        this.shape_37.setTransform(69.4,131.1);

        this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-23,7.9,2723,248.1);


    (lib.vdegegegre = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("ABpCuQgQgEgQgOIgTgSIgUgRIgHgDIgCAAIgCgBIgHABIgIAAIgkAFQgbABgQgCQgcgFgSgLQgpgVgVg8QgJgZABgbQADgeANgYQAXgtA4gcQAYgNAagFQAPgDAMABIAYADQA4AKApAWQAwAYAVAuIAIAXQACAHACAQIABAVIAAAMIAAACIAAAFQgEArgJAdQgIAegOAVQgKARgOALIgHAGIgEACIgNgCgAAaBgIALADIAHAFQAJAHANARIAPATQAMAPAOAGQAHAEAEAAQACgBAFgHQALgPAGgOQAHgTAHggQAGghAAgjIAAgRIgCgUQgCgUgHgRQgTgsgjgXQglgcg0gJIgXgDQgLAAgNAEQgWAGgXAPQgsAdgUAqQgJAUgBAXQAAAVAIAUIAMAaIAJAMIAGAIIAHAHIAPALQAbARAtAAIAtgBg");
        this.shape.setTransform(60.7,28.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E8212D").s().p("ABECOQgbgfgKgFQgIgDgaACQgkADgTgBQhLgHgehLQghhRBEhAQAbgaAigOQAhgOAXADQBEAHAxAhQBIAwgEBZQgDBWgcAxQgNAYgNAHQgZgDgYgbg");
        this.shape_1.setTransform(60.8,28.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AhAEBQgbgRgVgjQgcgvgPhLQgLg8ABg6IgBg1QgCghABgTQACgcAFgUQAIgZAMgPQANgQASgIQALgGATgFQASgEAagBIAgAAQAUABAWAGIAdAKQARAIAPAMQAgAaASAwQAPApADBBQAAAZgBAfIgFA8QgEAegNAgQgNAhgSAZQgWAfgXATQgeAYghAHIgHACIgaABQgTgCgSgKgAgikJQgfADgMAEQgPAEgOAIQgRAMgIAMQgSAbADA3IAFAyQAEAiABAVQABA4ALA4QAMBEAYAuQAQAeAWAOQAMAIAMABIAHABIAPgBIAFgCQAcgFAagUQAUgPAWgdQAkgyALg8IADgTIAAgDIABgIIAGhUQABg7gNgsQgOgvgfgaQgXgWgkgKQgNgDgcgDg");
        this.shape_2.setTransform(73.7,27);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FEF198").s().p("Ah5CdQgehUAAhfQgMhvAKgwQAShRBzAAQCFAAAjB5QARA7gKCDQgGBNgxBCQg2BGhCABQhAAAglhqg");
        this.shape_3.setTransform(73.8,26.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AgwD1IgQgBIgfgEQgjgJgXgYQgWgWgMgkQgSg0AChRQADg9ARhEQAKgnAKgXQAHgUAGgLQAOgWAIgHIACgCIALgFIACAAIABgBIAFgBIASgBQAMAAAUADQAeAGAbAKQAzATAsAgQApAdAaAhQAXAfAKAfQAHATACAZIAAAdQAAAKgEAiQgFAZgDAGQgCAKgKAaQgUAqglAcQgoAfg8AIIg4AEIgFAAIgKgBgAhsjTQgHAHgIANIgNAbQgMAfgIAbQgSBAgFA8QgFBKAQAyQALAhASATQAUAWAcAHQA5ALA4gFQA3gGApgbQAjgYAXgpQAQghAFggQAEgYAAgUIAAgdQgFgcgGgOIgOgcQgMgRgLgLQgbgdgqgYQgqgYgygQQgcgJgagEQgSgDgMAAQgMAAgEADg");
        this.shape_4.setTransform(81.8,29.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FED230").s().p("AhTDnQhFgJgchIQgXg8AIhcQAHhQAahIQAZhGAVgHQAWgHAzAMQA0ANA0AcQCJBLAABwQAAB4hDA9Qg5A0hiAAQgcAAgfgEg");
        this.shape_5.setTransform(82.3,29.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#814320").s().p("AheClQgWgLgNgYQgIgPgFgPIgGgWIgHggIgHgwIAAgfIACgRQAAgIAEgKQAKgsAjgaQAggZA2gHIAXgBIAuACQALAAANADQAdAFATAJQAeANALAYQAKAWgHAgQgFAVgMAZQgSAggfAtQgaAmggAbQghAcggALQgSAGgQAAQgRAAgOgHgAgViLQgsAGgdATQgdATgOAhQgDAGgCAKIgFAPIgEAdIAAAZIAJBBIADALQAHAUAFAJIANATQAKAJAMAFQAOAGAOgBQARgBAPgHQAfgNAcgdQAfgdAWgjQAcgrAQghQAKgWAEgUQAFgYgIgPQgJgPgUgIQgSgIgYgCIgWgCIgqgBg");
        this.shape_6.setTransform(38.9,28.8);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E8212D").s().p("AiNBTQgiiKA5g+QA0g3B1ALQBnAKAAA8QABAsg+BeQg7BbhGAVQgPAEgNAAQg5AAgUhQg");
        this.shape_7.setTransform(38.6,29.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#814320").s().p("AALENIgQgDQghgHgegYQgXgTgWgfQgSgZgNghQgMghgFgdIgFg8QgBgfAAgZQADhBAPgpQASgwAggaQAPgMARgIIAPgGIAOgEQAXgGATgBIAgAAQAaABASAEQATAFALAGQASAIANAQQAOARAGAXQAFAUACAcQABAhgDBIQABA6gLA8QgPBLgcAvQgVAjgbARQgSAKgSACgAglkDQgkAKgXAWQgfAagOAvQgNAsABA7IAGBUIABAIIAAADIADATQALA8AkAyQAWAdAUAPQAaAUAcAFIAFACIAPABIAHgBQAMgBAMgIQAWgOAQgeQAYguAMhEQALg4ABg4QABgVAEgiIAFgyQAEg1gTgdQgIgMgRgMQgNgHgPgFQgOgEgegDIgfAAQgcADgNADg");
        this.shape_8.setTransform(28.6,27);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FEF198").s().p("AhjDAQgxhCgGhNQgKiDARg7QAih5CFAAQB0AAASBRQAKAwgMBvQAABfgeBUQglBqhBAAQhBgBg2hGg");
        this.shape_9.setTransform(28.5,26.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#814320").s().p("AAiD2Ig4gEQg8gIgogfQglgcgUgqQgKgagCgKQgDgGgFgZQgEgiAAgKIAAgdQACgZAHgTQAKgfAXgfQAaghApgdQAsggAygTQAcgKAegGQAUgDAMAAIASABIAFABIABABIACAAIALAFIACACQAKAJAMAUQAGALAHAUQAKAXAKAnQARBEADA9QACBRgSA0QgMAkgWAWQgXAYgjAJIgfAEIgaACIgFAAgAA/jTQgaAEgcAJQgyAQgqAYQgqAYgbAdQgLALgMARIgOAcQgGAOgFAcIAAAdQAAAUAEAYQAFAgAQAhQAXApAjAYQApAbA3AGQA4AFA5gLQAcgHAUgWQASgTALghQAQgygFhKQgFg8gShAQgIgbgMgfIgNgbQgIgOgHgGQgEgDgMAAQgLAAgTADg");
        this.shape_10.setTransform(20.5,29.2);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FED230").s().p("AiCC3QhDg9AAh4QAAhwCJhLQA0gcA0gNQAzgMAWAHQAVAHAZBGQAaBIAHBQQAIBcgXA8QgcBIhFAJQgfAEgcAAQhiAAg5g0g");
        this.shape_11.setTransform(20,29.6);

        this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,102.3,54);


    (lib.regeggrer = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AAWE3QgtgEgrgMQgzgPgqgYQgvgagngoQgZgbgMgSQgTgbgLgYQgOgcgGgdIgCgIIgEgWQgCgMAAgSQAAg/Acg7QAcg5AygpQAagVAbgOQAcgOAegJIAfgHQAQgDAPAAQAPgBARACQAQABAOAEQBAAQAwAvQAxAvAOBDQAHAjgFAhQgFAigRAdQgQAdgaAXQgaAYgfAMQgjAOgeAAQgiABgggOQgggNgYgZQgXgYgMgeIgIgXIAAgDIAAgBIgDgSIAAgSQACggAQgdQAQgbAagSIANgIIAbgLIAKgDIABAAIACAAIACgBQAOgCAPABQAPABANAFQAZAKATAUQASAUAHAZIACAJIAAABIABABIAAACIABALQAAANgDAMQgGAXgQARQgPARgUAGIgJABIgBAAIgBAAIgBABIgBAAIgEAAIgTgBQgRgBgPgLQgYgTgBgfQAAgVAPgQQAJgJAMgDIAIgCQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgBAAIgFADQgJAEgFAJQgKAMAEAQQAEAVARAJQALAGAJAAIAGAAIAJgCIABAAIABgBIAGgCQAJgGAIgKQAIgLABgNQABgHgBgGIgBgIIgDgGQgEgMgMgMQgKgKgPgEQgHgCgIAAIgHAAIgCAAIgCAAIgGACIAAAAIgBAAIgCABIgEABIgPAHIgIAGQgNAKgJARQgSAhARAnQAQAmAoASQAUAJAWAAQASABAYgIQAvgRAbgqQAdgsgHg1QgHg5gjgrQgmgvg2gRQg2gSg9ASQg6ARgpAqQgVAVgPAYQgOAYgJAaQgRAzAEA3QAEAwAWAwQAVAtAiAkQAfAhArAbQAmAXArAPQBEAYBYACQA9ABBAgLQAkgGAtgLIAcgIQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgbAMQggANgvAPQhDATg+AEIgjACQgWAAgZgCg");
        this.shape.setTransform(34.1,31.3);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,68.3,62.6);


    (lib.hthehehre = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AjZCNQgDgXABgOIABgZIAEgaIASg2IAHgQIAIgOQAFgKAOgTQAUgcAfgZIAPgMIAQgKIAigSIAlgMIAmgHIAFgBIAgAAQAXACAOAFQAlAJAcAaQAYAXAMAdQAKAYAEAaQACAOAAAVIgCAZIgBAIIgJgfQgFgQgHgPQgKgXgMgQQgPgVgUgOQgVgOgagEIgbgCIAAAAIgDAAIgaACIgDABIgcAGIgNAFIgOAFIgcAOIgaARIgMAKIgLAJIgWAVIgSAXIgeAtIgVAtIgGAVIgJAiIgFAhg");
        this.shape.setTransform(240.8,33);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F38A79").s().p("AifCmQg3g4AIhXQAIhXBDhFQBChFBUgKQBWgJA3A4QA3A3gIBZQgIBWhCBFQhDBFhUAKIgZABQhFAAgvgwg");
        this.shape_1.setTransform(242.1,41.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("Ah/FiQgvgNgmgaIgSgOIgWgVIAAgBIgBgBIgIgJIgNgUQgRgfgIgvQgJg3AKhOIAJg0IAKgtQAGgbAKgjIAHgVQACgIAGgOQAMgeASgaQAOgWAOgPQATgWAVgRQAEgEAVgOQAHgFAWgLIAQgIIAhgMIASgEQAZgGALgBIAUgCIAoAAIAsAIIAVAIQApAPAjAkQAfAgAVAsQAmBOAGBmQAFBlgjBWIgYAsIgdAoQgFAHgLALIgSASIgTAQIgTAPIgrAaIg4AYIgkAJIguAGIgTABQgnAAglgKgAgEk1IgQACQhCAHgyAaQgVAKgWASIgRAQIgOAQQgTAXgOAeIgOAqQgHAcgEAiQgDAbgBASQgBAbACAYQAEBBARA4QALAjAQAXIAIAMIAHAHIABACIABAAIAQAOIAOAKQA9AnBQgBIAmgDIAegHIAKgDQAdgHAvgbIA8gtIAdgcIALgNIANgRIAMgTQAuhNgEheQgDhcgzhJQgvhFhIgZIghgJIgQgCIgEgBIgXgBIgaABIgHAAIgIABg");
        this.shape_2.setTransform(247.7,36.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E9B87C").s().p("AjpEHQg9hBAFiYQAEhxAbhIQANgwArgwQBWhiCWgCQBYgBBBA6QA7A1AbBZQAbBWgOBYQgNBeg2BBQhoB+iNALIgcACQhuAAhFhJg");
        this.shape_3.setTransform(248.2,36.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AjXCFQgGgKgFgMQgIgUgDgSQgGgaAAgZQACghANgcQARgjAfgWQAQgMASgIIAegLIAFgCQAhgHAHgBIAngCIAlAEIATAEIATAFQAlAMAeAUQAWAOAHAGIANAKIAhAkIARAYIAOAVIAKAWQAGAOAGAXIAGAgIgFgHIgMgVIgKgOQgGgKgFgGIgOgRIgRgSIgTgPIgugiQgIgFgSgJIgcgNIgegJIgcgGIgggDIgPgBIgQACIgdAFIgDAAIgZAIIgCABIgBAAIgBAAIACAAQgPAFgLAGQgYAPgOAVQgOASgGAZQgFASgCAbIABAkQABAVADAMg");
        this.shape_4.setTransform(40.4,68.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F38A79").s().p("AhICkQhdgqgshNQgthLAehFQAfhEBXgSQBXgTBbApQBeAqAsBNQAtBMgfBEQgeBEhXATQgbAFgcAAQg7AAhBgcg");
        this.shape_5.setTransform(40.5,78.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#814320").s().p("AgEFaIg9gPIgYgIIgYgKQgOgGgIgGIgqgaIgmghQhBhCgihmQgghhAHhXQAEgzARgoQATguAhgfIASgPIASgNIAUgLIAZgLIACAAIABgBIABAAIAdgIQAOgFAYgDIASgDIAlAAQAGgBALACIAiAFIAcAHQAWAHAfAPQAUALAUANQAbATAWAYIAQARIAOASQAOARAZAkIAZAnIAcAvQAnBHAMA1QAKAvgGAkQAAAHgEAQIgDAKIgBACIgBACIAAAAIAAACIgYAuQgaAngoAdQgnAdgvAPIgMAEIg9ALIgMACIgmAAgAhpkqIg6ATIgmATIgdAVQg7AygTBUQgUBXAfBXQAgBcBIA5IAlAYIAPAIIAEACIAhAOIALADIAUAHQAHADAOADIAWAFQAzAHAggDIALgBIAegFIAngMQBOgcAqg8IAKgPIAKgTIAAgBIAFgLIADgOQAGgZgCgpQgEg7gVg9QgLghgIgRQgJgVgLgVQgPgbgTgbIgOgSIAAAAQgFgGgKgLQgWgWgdgQIgTgKIgWgIQgcgJgXgCQgPgCgPAAQgqAAgwANg");
        this.shape_6.setTransform(34.2,76.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E9B87C").s().p("AiPERQhLgqgwhUQguhQgHhZQgHhfAkhIQAohPBUgfQCRg2BzA8QA7AeAeApQA1A6AuBrQA9CMgiBUQgrBqh+AmQgwAPgxAAQhbAAhfg1g");
        this.shape_7.setTransform(33.5,76.4);

        this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,278.2,111.9);


    (lib.gregere = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AAWE3QgtgEgrgMQgxgPgsgYQgtgZgpgpQgWgYgPgVQgTgbgLgYQgNgcgHgdIgGgeIgCgeQAAg/Acg7QAdg5AxgpQAbgVAagOQAdgPAdgIIAfgHQAQgDAQAAQAOgBARACQAPABAPAEQBBAQAvAvQAxAvAOBDQAIAhgGAjQgFAigRAdQgQAdgaAXQgaAYgfAMQgjAOgeAAQgiABgggOQgfgNgYgZQgXgXgNgfIgFgOIgCgIIgBgBIAAgDIAAgBIgDgSIAAgSQACggARgdQAOgbAbgSIANgIIAbgLIAKgDIABAAIACAAIACgBQAPgCAOABQAPABANAFQAZAJATAVQASAUAHAZIACAJIAAABIABABIAAACIABAEIAAAHQAAANgDAMQgGAXgQARQgPARgUAGIgJABIgBAAIgBAAIgBABIgBAAIgDAAIgUgBQgSgBgOgLQgYgTgBgfQAAgVAPgQQAJgJAMgDIAIgCQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgBAAIgBAAIgFADQgJAEgFAJQgJAMADAQQADAUASAKQALAGAKAAIAFAAIAJgCIABAAIABgBIAGgCQAJgGAIgKQAIgLABgNQABgHgBgGIgBgIIgDgGQgFgOgLgKQgKgKgPgEQgGgCgJAAIgHAAIgCAAIgCAAIgFACIgBAAIgBAAIgCABIgEABIgPAHIgHAGQgOAKgJARQgRAgAQAoQAHASAPAOQAPAPATAJQAUAJAWAAQASABAYgIQAwgRAagqQAdgsgHg1QgGg4gkgsQgmgvg2gRQg2gSg9ASQg6ARgpAqQgVAVgOAYQgQAYgIAaQgRAyAEA4QAEAwAWAwQAVAtAiAkQAgAiAqAaQAlAXAsAPQBEAYBYACQA9ABBBgLQAjgGAtgLIAcgIQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgbAMQghAOguAOQhCATg/AEIgiABQgWAAgagBg");
        this.shape.setTransform(34.1,31.3);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,68.3,62.6);


    (lib.gregegerr = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D84949").s().p("AC7EZQgrgPgegVQgcgUgmgdIg+gzIAQgiQAUgkgEgRQgFgSgjgdIgtBHIghgmQhdhxglhmQgNgigEgtQgBgUAKgKQALgJATAEQAqAIAZAQQD4CbB7EVQAKAXAGAmQAJA3gmAAQgNAAgRgGg");
        this.shape.setTransform(1054.7,276.4,1.247,1.247);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F5CB7D").s().p("AjVDOIAImkIGkAJIgIGkg");
        this.shape_1.setTransform(1146.2,199,1.247,1.247);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F5CB7D").s().p("AkgkdQAkgnAcgFQAbgFAvAYQA8AeA6AxQAsAmA4A9QB+CGA/CIQANAdAHAWQASA4gIAZQgIAZgvAjQisl6lcjtg");
        this.shape_2.setTransform(1221.7,135.3,1.247,1.247);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F5CB7D").s().p("AB1FlQgxgTgxglQgigbgzguIgLgLQgwAhgeAAQgeAAgvggIgYgPQgdgRgUAdIgTAdQgigIAKgfIAGgiQAFgbAMgLQALgKAcgCQAagCAbAMQAOAHAhAVQAPALAIAEQANAGAKgKIhBhfQgng4gXgnQgbgwgfhfQgVhDA5gpQA3goAmgoQAPgRAQAAQAOAAARAMIBcBCQAzAnAiAgQC2CpBlDMQAcA7gDARQgEARgxApIgeAYQgRAOgLALQggAggoAAQgYAAgbgMgAgYBrQAEARgUAkIgSAiIA+AzQAmAdAcAUQAeAVArAPQBHAYgMhJQgGgmgKgXQh7kVj4ibQgZgQgqgIQgTgEgLAJQgKAKABAUQAEAtANAiQAlBmBdBxIAhAmIAthHQAlAdAFASg");
        this.shape_3.setTransform(1060.2,270.3,1.247,1.247);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D84949").s().p("AlaIyQgxhMhKhXQhKhYhDg8QhRhKhWgxIB0hjIODr6QANgLALgBQALgBAOAIQA8AfA7AyQAvAnA6A9QChCpBPClQAfA/gEATQgEASg3AuIvMM3Qgihcg7hcgAjHDCIGkAJIAImkImkgJg");
        this.shape_4.setTransform(1144.4,200.5,1.247,1.247);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D84949").s().p("ACKEzQgngUgbgbQgYgYgggjIg1g8IAXgfQAXgggBgSQgCgSgdgjIg4A/IgagrQhKh/gUhpQgHgnAEgqQACgUAMgHQAMgIASAHQApAQAUATQDcDBBLEkQAHAZgBAlQAAAygeAAQgPAAgVgLg");
        this.shape_5.setTransform(734.5,287.7,1.247,1.247);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F5CB7D").s().p("Aj0CoIBNmcIGcBNIhNGcg");
        this.shape_6.setTransform(837,226.3,1.247,1.247);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F5CB7D").s().p("AjxlIQAqggAcgBQAcAAArAeQA1AnAwA6QAnAuAtBEQBmCYAoCRQAIAbADAaQAJA6gMAYQgMAXg0AbQhsmSkwkgg");
        this.shape_7.setTransform(922.1,176.1,1.247,1.247);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F5CB7D").s().p("ABdFyQgtgbgrgsQgdgggqg3IgJgLQg0AYgegFQgdgFgqgnQgJgJgLgJQgcgWgWAZIgYAZQgggNAOgcIAMghQAJgaANgIQANgJAcADQAaACAZAQQAOAKAbAZQANAOAHAFQAMAHAMgHIgxhpQgdg7gQgrQgTgygPhlQgKhFA/ggQA6gdAugiQAhgZAdAeIBOBQQAuAvAcAlQCYDEBBDZQATA/gGAQQgGAQg3AgQg1AegNAJQgcAVgfAAQgfAAgigVgAgFBkQABASgZAgIgXAfIA1A8QAgAjAYAYQAbAbAnAUQBCAjAAhKQABglgHgZQhLkkjcjBQgUgTgpgQQgSgHgMAIQgMAHgCAUQgEAqAHAnQAUBpBKB/IAaArIA4g/QAfAjACASg");
        this.shape_8.setTransform(736.3,282.7,1.247,1.247);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#D84949").s().p("AmyHxQgkhUg6hhQg7hig4hHQhEhVhMg+ICChNIPxpeQAOgIALAAQAKABANAKQA2AoAzA8QAmAtAwBGQCDC/AzCwQAUBDgHASQgHAPg8AlIwqJ/IgZAOQgThggrhjgAjmCeIGcBNIBNmcImchNg");
        this.shape_9.setTransform(835.2,227.6,1.247,1.247);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#D84949").s().p("AB5EOQgigTgYgXQghghg/hHIAVgbQAUgdgBgPQgCgQgZgfIgxA4IgXgmQhAhvgShdQgHgjAEglQABgRALgHQAKgGAQAGQAjAOATAQQDACqBEEBQAGAXgBAgQgBAsgaAAQgNAAgTgKg");
        this.shape_10.setTransform(509.6,228.6,1.247,1.247);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F5CB7D").s().p("AjWCUIBDlqIFqBDIhDFqg");
        this.shape_11.setTransform(599.7,174.6,1.247,1.247);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F5CB7D").s().p("AjTkgQAlgdAYAAQAZgBAlAcQAvAiAqAzQAiApAnA7QBbCGAiB/QAIAZACAWQAIAygLAVQgKAVguAXQhflgkKj+g");
        this.shape_12.setTransform(674.6,130.4,1.247,1.247);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F5CB7D").s().p("ABRFFQgngYgmgnQgZgcglgvIgIgLQguAWgagFQgagEgkgjIgSgPQgYgUgUAXIgVAWQgPgGgEgJQgDgJAGgNIALgdQAIgWALgIQAMgHAYACQAXACAWAOQAMAIAYAXIASAQQAKAHALgHIgshbQgZg0gOgmQgRgvgNhWQgJg8A4gcQAzgaAogeQAdgWAaAaIBEBGQAoAqAZAgQCFCsA6C/QARA4gGAOQgFAOgxAcQgxAdgIAGQgZARgcAAQgbAAgegSgAgFBYQABAQgWAcIgUAbQA+BHAiAiQAYAXAiASQA6AgAAhCQABgggGgXQhDkAjAiqQgTgRgjgNQgQgHgLAHQgKAGgCASQgEAkAHAjQASBdBABvIAXAmIAxg3QAcAeABAQg");
        this.shape_13.setTransform(511.3,224.2,1.247,1.247);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#D84949").s().p("Al9G0QgfhJg0hWQg0hXgxg9Qg8hMhDg1IPppZQAMgHAKABQAKAAALAJQAvAkAtA0QAiAoAqA9QBzCnAtCbQASA8gHAPQgGANg1AgIu/I/QgQhUgmhYgAjKCLIFqBDIBElqIlqhDg");
        this.shape_14.setTransform(598.2,175.7,1.247,1.247);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#D84949").s().p("ADlDqQgqgGgigPQgdgOgqgVIhGglIALgkQAMgmgHgPQgHgQgngWIgPAkIgPAoIgmgeQhuhbg2haQgTgggLgpQgFgTAIgLQAJgLATABQAoAAAcAKQEJBoCnDxQANATANAkQAVA7gzAAIgSgBg");
        this.shape_15.setTransform(2402.9,297.5,1.247,1.247);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#F5CB7D").s().p("AjqinIGShDIBDGRImSBEg");
        this.shape_16.setTransform(2476.3,207.1,1.247,1.247);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#F5CB7D").s().p("AlEjZQAcgsAagKQAZgJAxAOQA+ASBBAkQAzAdA9AvQCSBsBUB0QAQAXAMAWQAbAygDAaQgDAZgnAqQjplLl2iig");
        this.shape_17.setTransform(2536.6,132.5,1.247,1.247);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#F5CB7D").s().p("ACkFAQgygKg2gaQgngTg2gkIgMgHQgoAngdAGQgdAFgzgWIgYgKQghgLgMAfIgOAfQghgCADgeIABgjQgBgaAKgMQAJgMAagHQAYgHAcAHQAQAEAiAOIAYAKQAOAEAIgMIhQhPQgugugegiQghgmgwhXQggg8AvgyQArgtAfgwQAMgSAPgDQAOgDARAJIBkAuQA6AcAmAYQDKCACFCyQAmAzAAARQgBAQgnAwIgYAcQgOARgJANQgeAsg1AAQgPAAgQgDgAgPBrQAHAPgMAmIgLAkIBEAlQAqAVAdAOQAiAPAqAGQBIALgYhFQgNgkgNgTQinjxkJhoQgcgKgoAAQgTgBgJALQgIALAFATQALApATAgQA2BYBuBdIAmAeIAPgoIAPgkQApAWAHAQg");
        this.shape_18.setTransform(2408.5,290.6,1.247,1.247);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#D84949").s().p("AjkJXQg8hAhWhFQhXhHhLguQhag3hbggIBdhyILRt6QAKgMAKgDQAKgCAPAEQA/ATBCAlQAyAdBEAwQC4CFBoCOQApA3gBASQAAASgsA2IsLPAQgxhShJhNgAjei0IBEGSIGShEIhEmSg");
        this.shape_19.setTransform(2474.7,208.7,1.247,1.247);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#D84949").s().p("AC7DzQgkgKgggUQgagQgkgaIg7grIALgfQAQgggFgPQgFgPghgZIgSAdIgSAiIggghQhchigohYQgPghgFglQgDgRAJgIQAJgJASAEQAlAGAYANQDqCFCBDwQALAWAHAfQALAxgjAAQgLAAgPgFg");
        this.shape_20.setTransform(34.3,199.3,1.247,1.247);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#F5CB7D").s().p("AizC5IgUlxIF6AAIAVFxg");
        this.shape_21.setTransform(111.6,129.8,1.247,1.247);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#F5CB7D").s().p("AkVj1QAegjAZgFQAYgFAsAVQA3AZA4AqQArAhA1A1QB7B0BBB1QALATALAaQATAwgFAXQgGAWgoAgQi1lLlHjJg");
        this.shape_22.setTransform(175.2,72.6,1.247,1.247);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#F5CB7D").s().p("AB3E4QgtgQgvggQghgXgvgoIgLgIQgpAdgbABQgbAAgtgcIgWgMQgcgPgPAaIgQAaQgegHAGgaIAEgfQACgYAKgJQAKgJAYgDQAYgCAZALQAPAFAdASIAVANQANAFAIgJIhBhSQgmgxgYghQgagogjhVQgYg7AxglQArghAjgmQANgPAOgBQANAAAQAKIBXA5QAyAhAfAcQCvCSBoCxQAdAzgCAPQgCAPgpAkQgiAdgPAQQgcAcglAAQgVAAgYgJgAgYBfQAFAPgQAgIgNAeIA7AsQAkAZAaAQQAgAUAkALQBBAUgPhBQgHgfgLgVQiBjwjqiFQgYgOglgGQgSgDgJAIQgJAIADASQAFAlAPAhQAoBXBcBiIAgAiIASgiIASgeQAjAaAFAPg");
        this.shape_23.setTransform(40.1,193.8,1.247,1.247);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#D84949").s().p("AkSHzQgxhChIhLQhIhMhBg0QhNg/hRgqINZsFQAKgJAKgBQAJgBAOAGQA4AbA5ArQAsAhA4A1QCcCRBSCQQAgA3gCAQQgDAQguAqIs0LiQglhQg7hQgAimCuIF6AAIgUlxIl6AAg");
        this.shape_24.setTransform(110,131.2,1.247,1.247);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#D84949").s().p("ACgEiQglgQgfgZQgpgjhMhJIAUggQAUgigCgRQgDgRggggIgYAeIgaAkIgdgoQhSh3gchlQgKglAAgqQAAgUALgIQALgIATAFQAnALAYASQDnCrBhEZQAIAWADAmQAEA0ghAAQgOAAgTgIg");
        this.shape_25.setTransform(1658.6,167.2,1.247,1.247);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#F5CB7D").s().p("AjiC4IArmZIGZApIgpGag");
        this.shape_26.setTransform(1754.1,98.8,1.247,1.247);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#F5CB7D").s().p("AkEkuQAmgjAcgDQAbgDAsAbQA4AiA1A1QAoApAxBAQBwCLA0CMQAKAeAFAWQANA3gKAZQgKAYgwAeQiLmAlAkDg");
        this.shape_27.setTransform(1833.3,42.6,1.247,1.247);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#F5CB7D").s().p("ABnFnQgugXgtgoQgfgdgugyIgKgKQgxAcgdgDQgegCgrgkIgWgQQgdgTgUAbIgVAbQgRgGgFgJQgFgKAGgPIAJghQAHgaANgKQAMgJAbAAQAZABAaAOQAPAIAcAWQAOANAHAEQANAHALgJIg5hiQghg5gTgoQgWgvgXhjQgQhCA7gkQA6gkAngjQARgPAPABQAOABAPANIBVBIQAvArAfAhQCkC1BSDPQAXA8gEAQQgFAQg0AlQg0AkgIAHQgcAYggABIgFAAQgbAAgfgPgAgOBmQACASgWAiIgUAgQBMBJApAiQAfAZAlAQQBEAegGhJQgDgmgIgXQhhkYjnisQgYgRgngLQgTgGgLAIQgLAIAAAUQAAArAKAkQAcBlBSB3IAdApIAagkIAYgfQAiAgADARg");
        this.shape_28.setTransform(1662.2,161.7,1.247,1.247);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#D84949").s().p("AmAIKQgqhQhBhaQhChcg8hAQhKhPhQg3IB6hVIOsqkQANgJALAAQAKAAAOAJQA4AjA2A2QAqApA1BBQCPCyBBCnQAZBBgGASQgGARg4ApIv5LXQgahdgyhegAjTCtIGaAqIAqmaImagqg");
        this.shape_29.setTransform(1752.4,100.2,1.247,1.247);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#D84949").s().p("ACgEhQgngRgdgYQgpgihMhJIAUggQAUgigCgRQgDgRggggIgYAeIgaAkIgdgoQhSh4gchkQgKgnAAgoQAAgUALgIQALgIATAGQAmAKAZASQDmCsBiEXQAIAXADAmQADA0ghAAQgNAAgTgJg");
        this.shape_30.setTransform(2117.2,308.2,1.247,1.247);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#F5CB7D").s().p("AjhC4IApmZIGaAqIgqGZg");
        this.shape_31.setTransform(2212.5,239.8,1.247,1.247);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#F5CB7D").s().p("AkEkuQAmgjAcgCQAbgDAsAbQA4AiA1A0QAoAqAxA/QBwCMAzCLQAIAXAIAcQANA4gKAYQgKAYgxAeQiKl/lAkDg");
        this.shape_32.setTransform(2291.6,183.8,1.247,1.247);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#F5CB7D").s().p("ABnFmQgtgXgugoQgegcgvgyIgKgLQgxAcgdgDQgdgCgsgjQgJgIgNgIQgcgUgUAbIgWAbQgRgGgEgJQgFgKAFgPIAKghQAHgaAMgJQAMgKAbABQAaAAAZAOQAOAIAeAXQANAMAIAEQAMAHALgJIg4hiQghg4gUgpQgOgegMgpQgHgYgMgyQgPhCA6gkQA2ggAsgnQAQgOAQAAQANABAPANIBVBIQAvArAfAhQCjC0BSDPQAYA8gFARQgFAQgzAkQgvAggOALQgcAYgfABIgFABQgbAAgfgQgAgOBmQACARgWAiIgUAgQBMBJApAiQAdAYAnARQBDAegFhJQgDgmgIgXQhikXjmisQgZgSgmgKQgTgGgLAIQgLAIAAAUQAAAoAKAnQAcBkBSB4IAdAoIAagkIAYgeQAiAgADARg");
        this.shape_33.setTransform(2120.8,302.6,1.247,1.247);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#D84949").s().p("Al/IJQgqhQhBhaQhChbg8hBQhJhOhQg3IB5hVQIhmFGKkdQANgJALAAQAKAAANAIQA4AjA3A2QApApA1BBQCPCxBACnQAZBBgFASQgGARg4ApIv3LVQgahcgyhegAjTCtIGaAqIApmZImZgqg");
        this.shape_34.setTransform(2210.8,241.2,1.247,1.247);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#D84949").s().p("ACqEpQgpgSgegZIg+g3Ig8g5IAUggQAUgigDgRQgDgRghgiIgZAfIgZAkIgegqQhXh7gfhmQgLglgBgsQAAgUALgIQALgIAUAGQAnALAaATQDvC0BqEeQAJAXADAmQAFA0ghAAQgOAAgUgJg");
        this.shape_35.setTransform(2660.6,216.9,1.247,1.247);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#F5CB7D").s().p("AjjC3IAjmfIGkAyIgiGfg");
        this.shape_36.setTransform(2756.9,149.4,1.247,1.247);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#F5CB7D").s().p("AkQk4QAmgiAcgDQAcgCAuAcQA5AkA4A3QApAqA1BCQB2CRA2COQAKAYAHAcQAPA5gKAYQgKAYgxAeQiVmJlNkNg");
        this.shape_37.setTransform(2836.7,94,1.247,1.247);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#F5CB7D").s().p("ABtFuQgwgZgvgpQgggegwg0IgKgLQgyAcgegDQgegDguglIgWgRQgegVgUAcIgWAaQghgLALgdQAEgLAFgXQAHgaAMgJQANgJAbAAQAaABAbAPQAPAJAeAXQAOANAIAEQANAHALgIIg8hlQgjg6gVgqQgYgygZhiQgShEA9gjQA3ggArgmQAQgOAQABQAOABAQANIBYBLQAxAsAgAjQCsC5BYDVQAZA+gFAQQgEARg0AjQg1AkgIAHQgdAYggABIgDAAQgcAAghgRgAgRBnQADARgWAiIgUAgIA8A5IA+A3QAeAZApASQBFAfgHhKQgDgmgJgXQhqkejvi0QgagTgngLQgUgGgLAIQgLAIAAAUQABAsALAlQAfBmBXB7IAeAqIAZgkIAZgfQAjAiADARg");
        this.shape_38.setTransform(2664.7,211.4,1.247,1.247);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#D84949").s().p("Al+IJQgshQhFheQhFhfg/hCQhNhRhTg6IB7hTIO0qaQANgJALAAQALAAAOAJQA6AlA4A3QAsArA3BDQCVC1BHCtQAbBCgGASQgFASg5AoIwBLMQgdheg1hhgAjUCsIGkAyIAimfImkgyg");
        this.shape_39.setTransform(2755.1,150.7,1.247,1.247);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#D84949").s().p("ACuE6QgqgSgggaQgbgXgmgjIg/g7IAWgjQAXglgDgSQgEgTgigjIg2BIIgggsQhaiCgehtQgLgoAAguQABgVAMgJQAMgJAUAGQArANAaASQD6C7BqEwQAKAaACAoQAEA5gjAAQgPAAgVgKg");
        this.shape_40.setTransform(1878.9,257.1,1.247,1.247);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#F5CB7D").s().p("Aj1DIIAtm9IG+AtIguG+g");
        this.shape_41.setTransform(1982.7,182.7,1.247,1.247);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#F5CB7D").s().p("AkblIQAqgmAegDQAdgDAwAdQA8AlA7A6QArAsA2BFQB6CZA3CXQAKAbAHAdQAOA8gKAbQgLAag1AhQiXmilckZg");
        this.shape_42.setTransform(2068.7,121.7,1.247,1.247);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#F5CB7D").s().p("ABxGFQgygZgygrQgigggxg2IgLgLQg2AegfgCQgggDgwgnIgXgRQgfgVgWAdIgYAdQgSgGgFgKQgGgKAHgRIAKgkQAIgcANgKQANgLAeABQAbAAAcAPQAQAJAfAZQAPANAIAFQAOAHAMgJIg+hrQgkg9gVgtQgPghgNgsQgIgcgNg0QgRhJBAgnQA8gkAugpQASgQARABQAPABAQAOIBcBPQA0AuAhAkQCyDEBZDiQAaBBgGARQgFASg4AnIghAXQgUAOgNALQgeAZgiACIgFABQgeAAghgSgAgPBvQADASgZAlIgWAjIA/A7QAmAjAbAXQAgAaAqASQBJAhgGhQQgCgogKgaQhqkwj6i7QgagSgrgNQgUgGgMAJQgMAJgBAVQAAAuALAoQAeBtBaCCIAgAsIA2hIQAkAjAEATg");
        this.shape_43.setTransform(1882.8,251.1,1.247,1.247);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#D84949").s().p("AmhI2QguhVhGhiQhIhkhBhGQhQhVhXg8ISBs7QAOgJAMgBQALAAAPAJQA9AnA7A6QAtAtA5BGQCbDABHC3QAbBHgGATQgGATg9AsIxRMVQgchkg2hngAjlC8IG9AuIAtm+Im9gtg");
        this.shape_44.setTransform(1980.8,184.2,1.247,1.247);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#D84949").s().p("AkaEWQgPgQALgmQAPgyAdgxQANgXAXggIAng2QAIgLAJgDQAKgCANAIQALAGARAIIAdAMIBAg1IhVgtQBQhPA9guQBSg8BUgcQAbgIAKgBQAVgCAKAQQAHAMAAAUQAAASgFARQgSA4glA5QgdArgxA3QiSCoiZBQQglATguALQgOAEgLAAQgTAAgJgKg");
        this.shape_45.setTransform(877,396.2,1.247,1.247);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F5CB7D").s().p("Aj+DEIA9nBIHBA7Ig9HAg");
        this.shape_46.setTransform(945.8,466.6,1.247,1.247);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F5CB7D").s().p("AkXFJQgbgJgggsQGJjVDmmKQAuArAGAcQAHAcgaA5QgdBCgxBCQgnAyg9BAQiKCRiNBNQggARgeAKQghAMgXAAQgMAAgKgDg");
        this.shape_47.setTransform(995.1,517.1,1.247,1.247);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#F5CB7D").s().p("AjaGMQgVgCg2g2IhChDQgeggAMg5QAIgsAXguQASgjAggvQAQgVApg2IgOgSQgogzAYg7QAFgNAQgdQAVglgCgMQgDgMghgYQgOgKgBgSQgBgSAMgLQAJgJAPgMQBJAcASA0QASAzgnBCQgQAagDAHQgCAGAAALIABAWQAcgYAzguQAsgoAggWQBJg1BjgzQBVgqA9BMQAdAlA6A2QAOANACAOQACAMgIASQgvBthcBrQirDLjEB4Qg/AngWAAIgCgBgAjOgnQgJACgIAMIgnA0QgXAggOAXQgdAwgOAzQgLAmAPAQQAOAPAngJQAugMAkgTQCbhQCQimQAyg4AcgrQAmg6ARg4QAGgRAAgRQAAgVgHgLQgKgQgVABQgLABgaAJQhUAchQA7Qg/AuhQBPIBUAuIg/A3IgdgNQgSgHgLgHQgKgFgIAAIgEAAg");
        this.shape_48.setTransform(884.1,401.6,1.247,1.247);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#D84949").s().p("AAUJ6QgSgDgvgzIo+pLIgOgQQGNjXDkmLIBVBYIIHIUQAkAiACANQACAOgZAtQg7Bxh+CFQikCtihBaQg6AggUAAIgDAAgAjlDfIHBA7IA9nBInAg7g");
        this.shape_49.setTransform(942.6,463.2,1.247,1.247);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#D84949").s().p("AkaEWQgPgQALgmQAOgxAegyQAWgmA1hHQAIgMAJgCQAKgCANAHQALAHARAHIAdANIBAg1IhVguQBShPA8gtQBSg8BTgcQAbgJAKgBQAWgBAJAQQAHAMAAAUQAAARgFARQgSA5glA5QgdAsgxA2QiUCpiXBOQgnAVgsAKQgOAEgLAAQgSAAgKgKg");
        this.shape_50.setTransform(597.3,358.1,1.247,1.247);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#F5CB7D").s().p("Aj/DDIA+nAIHAA7Ig9HAg");
        this.shape_51.setTransform(666.1,428.6,1.247,1.247);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#F5CB7D").s().p("AkXFJQgbgKgggrQGKjWDlmJQAuArAHAbQAGAcgaA6QgdBBgxBDQgnAxg9BBQiKCRiNBNQgfAQgfALQghAMgXAAQgMAAgKgDg");
        this.shape_52.setTransform(715.4,479,1.247,1.247);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#F5CB7D").s().p("AjaGNQgVgDg2g2IhChDQgdgfALg5QAIgsAXguQASgkAgguQASgYAng0IgOgRQgog1AYg6QAFgNAQgdQAVglgCgMQgDgMghgYQgOgJgBgTQgBgSAMgLIAYgVQBJAdASAzQASAzgnBCIgKARQgGAJgDAIQgCAGABAKIAAAWIBPhGQAsgnAggXQBLg3BhgwQBVgrA9BMQAdAlA7A3QAOAMABAOQACANgIARQguBshdBsQiqDLjFB5Qg/AmgWAAIgCAAgAjOgnQgJACgIAMQg1BFgXAmQgdAygOAxQgLAmAPAQQAOAPAngJQArgKAngVQCahOCRinQAxg4AdgsQAmg5ARg5QAGgRAAgRQAAgUgHgMQgKgQgVABQgLABgaAJQhUAchQA8Qg+AthRBPIBUAuIg/A3IgdgNQgRgHgMgHQgKgFgHAAIgFAAg");
        this.shape_53.setTransform(604.4,363.5,1.247,1.247);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#D84949").s().p("AAUJ6QgSgDgvgzIo+pLIgOgQQGMjXDlmLIJcJsQAkAiACANQACAOgZAtQg9B0h8CDQikCtihBZQg6AggUAAIgDAAgAjlDfIHBA7IA9nBInAg6g");
        this.shape_54.setTransform(662.9,425.1,1.247,1.247);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#D84949").s().p("AiNFzQgUgHgGgoQgHg3AFg1QACgaAIgnIAMhCQAFgbAbADIAgABIAggBIAihLIhggGQAohqAlhDQAvhZBAg9QAUgTAKgFQASgKAQAKQALAHAJATQAHAQADARQAHA7gKBEQgHAzgVBIQg+DUhoCKQgcAkgiAaQgXATgRAAQgGAAgFgCg");
        this.shape_55.setTransform(2735.8,335.2,1.247,1.247);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F5CB7D").s().p("AkbiSIGviLICIGxImwCJg");
        this.shape_56.setTransform(2827.7,369.8,1.247,1.247);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#F5CB7D").s().p("AjJGMQEKlpApnFQA8ATARAWQASAXABA/QABBIgQBQQgNBAgcBSQhAC+hfCCQgUAagZAZQgmAlgdAEIgHAAQgbAAgqgXg");
        this.shape_57.setTransform(2895.1,394.4,1.247,1.247);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F5CB7D").s().p("AgyGmIhYghQgWgJgOgUQgLgQgHgbQgLgrACg0QABgnAJg4IATheIgUgKQg6gcgEhAQgBgSADgdQAEgqgIgKQgHgKgpgHQgQgDgJgQQgJgQAHgQIAMgcQBPgFAmAmQAmAngIBNIgCATQgCALABAIQABAGAFAJIAKAUIAphhQAYg2ATgiQAvhSBBhWQA7hLBYAsQAqAVBMAZQARAGAIALQAHALAAATQAEB1glCLQhFD+iBDCQgrBAgUAHQgDABgGAAQgZAAg4gVgAiOA8IgMBCQgIAngCAaQgFA1AHA3QAGAoAUAHQAUAIAfgZQAigaAcgkQBoiKA+jUQAVhIAHgzQAKhEgHg7QgDgRgHgQQgJgTgLgHQgQgKgSAKQgKAFgUATQhAA9gvBZQglBDgoBqIBgAGIgiBLIggABIgggBIgEAAQgXAAgFAYg");
        this.shape_58.setTransform(2735.2,338.3,1.247,1.247);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#D84949").s().p("ADGIjIr/kiIgUgJQENlpAonGIB0ArIK1EHQAvARAIALQAHAMgCAzQgHCEg5CnQhNDkhrCUQgpA5gSAFIgIABQgWAAg2gVgAj8iCICHGwIGviKIiHmwg");
        this.shape_59.setTransform(2823.9,367.8,1.247,1.247);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#D84949").s().p("AjPFTQgSgMABgoQACg0AQg2QAIgaAOglIAZg9QAFgOAIgEQAIgFAPAEQAUAGAqAGIAwhDIhdgXQA6hgAwg8QBBhOBLgwQAWgPALgDQAVgHANANQAKAKAEATQAFARgBASQgEA7gWBBQgRAxgiBDQhmDFh/BzQgiAdgnAVQgVALgPAAQgKAAgHgEg");
        this.shape_60.setTransform(2490.9,389,1.247,1.247);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#F5CB7D").s().p("Aj6jGIHBg1IA0HBInCA2g");
        this.shape_61.setTransform(2574.7,440.4,1.247,1.247);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#F5CB7D").s().p("AjCGFQgdgCgpgiQFJkwB9m2QA4AeANAaQAMAZgKA/QgMBGggBMQgZA9grBKQhkCxh0BsQgZAWgcATQgqAcgcAAIgEgBg");
        this.shape_62.setTransform(2635.4,477,1.247,1.247);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#F5CB7D").s().p("Ai1GHIhQgxQgVgNgJgWQgIgTgCgbQgCgtALgyQAIgnAUg1IAkhXIgRgNQg0gpAIg/QADgSAIgbQALgpgFgLQgFgMgngPQgPgFgGgSQgFgRAJgOIARgaQBOAKAfAtQAeAtgWBKQgKAdAAAIQgBAGADAKIAGAVQAWgeAlg5QAigxAZgeQA8hGBRhJQBJg+BNA7QAmAdBFAmQARAJAFANQAFAMgDATQgTB1g/CAQhzDsihCmQg3A4gUACIgDABQgWAAg+glgAi+AAQgIAFgFANIgZA+QgOAlgIAZQgQA3gCA0QgBAnASAMQASAMAjgTQAngVAigdQB/hyBmjGQAihDARgxQAWhAAEg7QABgSgFgRQgEgUgKgJQgNgNgVAGQgLAEgWAOQhLAwg/BOQgyA8g6BgIBdAYIgwBDQgqgGgUgGQgHAAgGAAQgGAAgEAAg");
        this.shape_63.setTransform(2496.4,393.8,1.247,1.247);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#D84949").s().p("ABfI/IrNm6QFMkwB9m3IBqBAIJ3GFQArAZAGANQAFANgMAyQggB9hYCdQh1DRiFB9Qg0AxgTABIgCABQgTAAg5gkgAjciwIAzHCIHCg2Ig0nBg");
        this.shape_64.setTransform(2571,437.7,1.247,1.247);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#D84949").s().p("AjPFTQgSgMABgnQACg1AQg2QANgrAihRQAFgOAIgEQAIgFAPAFQAMADATADIAfAFIAwhCIhdgYQA6hgAwg8QBBhOBLgwQAXgPAKgDQAUgHAOANQAKAKAEATQAFARgBASQgEA7gWBBQgRAxgiBDQhlDEiAB0QgiAegnAUQgVALgPAAQgKAAgHgEg");
        this.shape_65.setTransform(2259.6,433.1,1.247,1.247);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#F5CB7D").s().p("Aj6jGIHBg1IA0HBInCA2g");
        this.shape_66.setTransform(2343.5,484.5,1.247,1.247);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#F5CB7D").s().p("AjCGFQgdgBgpgjQFIkwB+m1QA4AdANAaQAMAagKA+QgMBHggBMQgZA8grBKQhiCvh2BuQgcAZgZAQQgqAbgcAAIgEAAg");
        this.shape_67.setTransform(2404.2,521,1.247,1.247);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#F5CB7D").s().p("Ai1GHQglgWgrgcQgVgNgJgWQgIgSgCgcQgCgsALgzQAIgmAUg1IAkhXIgRgOQg0goAIg/QADgTAIgbQALgpgFgLQgFgLgngPQgPgGgGgRQgGgSAKgOIARgZQBOAJAfAuQAeAtgXBJIgFATQgEALAAAHQgBAGADAKIAGAWIA7hYQAigxAZgdQA5hEBUhLQAjgfAmgBQAmgBAnAeQAmAcBFAnQARAJAFANQAFALgDATQgTB1g/CBQhzDsihCmQg3A3gVADIgCABQgWAAg+glgAi+AAQgIAEgFAOQgiBRgNArQgQA2gCA1QgBAnASAMQASALAjgSQAngUAigeQCAh0BljEQAihDARgxQAWhBAEg7QABgSgFgRQgEgTgKgKQgOgNgUAHQgKADgXAPQhLAwg/BOQgyA8g6BgIBdAYIgwBCIgfgFQgTgDgMgDQgHAAgGAAQgGAAgEAAg");
        this.shape_68.setTransform(2265.1,437.9,1.247,1.247);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#D84949").s().p("ABfI/IrMm6QFMkwB8m3IBqBAIJ3GFQAsAaAFAMQAFANgMAyQgfB8hYCeQh2DRiFB9QgzAxgUACIgBAAQgTAAg6gkgAjbiwIAzHCIHBg2IgznBg");
        this.shape_69.setTransform(2339.7,481.7,1.247,1.247);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#D84949").s().p("AjPFTQgSgMABgnQACg1AQg2QANgqAihSQAFgNAIgFQAJgEAOAEQAMADATADIAfAFIAwhCIhdgYQA7hhAvg7QBBhOBLgwQAWgOALgEQAVgHANANQAKAKAEATQAFARgBASQgDA7gXBBQgRAwgiBEQhmDGh/ByQghAdgoAVQgVALgPAAQgKAAgHgEg");
        this.shape_70.setTransform(1174.1,352.1,1.247,1.247);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#F5CB7D").s().p("Aj6jFIHBg2IA0HCInCA1g");
        this.shape_71.setTransform(1257.9,403.5,1.247,1.247);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#F5CB7D").s().p("AjCGFQgdgCgpgiQFIkxB9m1QA4AeANAaQANAagLA+QgMBGggBMQgZA8grBLQhiCvh2BtQgbAZgaARQgpAcgcAAIgEgBg");
        this.shape_72.setTransform(1318.6,440.1,1.247,1.247);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#F5CB7D").s().p("Ai1GHIhQgxQgVgNgJgWQgIgTgCgbQgCgtALgyQAJgoATg0QALgdAZg6IgRgOQg0gnAIhAQADgQAIgeQALgpgFgLQgFgLgngPQgPgGgGgRQgFgRAJgOIASgaQBOAKAeAtQAeAtgWBKQgJAcgBAJQgBAGADAKIAGAVQAWgeAlg5QAigxAZgeQA6hEBThLQBJg+BNA7QAlAcBGAnQARAJAFANQAFAMgDATQgSBxg/CEQh1DtigClQg3A3gUADIgDABQgWAAg+glgAi+AAQgIAFgFANQgiBSgNAqQgQA2gCA1QgBAnASAMQATALAigSQAogVAhgdQB/hyBmjGQAihEARgwQAXhBADg7QABgSgFgRQgEgTgKgKQgNgNgVAHQgLAEgWAOQhLAwg/BOQgxA7g7BhIBdAYIgwBCIgfgFQgTgDgMgDQgHAAgFAAQgGAAgFAAg");
        this.shape_73.setTransform(1179.6,357,1.247,1.247);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#D84949").s().p("ABfJAIq7mvIgRgMQFLkwB9m3ILhHFQArAaAFAMQAGANgNAyQgeB7hZCfQh2DRiEB9Qg0AxgTACIgCAAQgTAAg5gjgAjcivIAzHBIHCg1Ig0nCg");
        this.shape_74.setTransform(1254.1,400.8,1.247,1.247);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#D84949").s().p("AjPFTQgSgMABgnQACg1AQg2QANgqAihSQAFgOAIgEQAIgFAPAFQAMADATADIAfAFIAwhCIhdgYQA7hhAvg7QBBhOBLgwQAXgPAKgDQAVgHANANQAKAKAEATQAFARgBASQgEA7gWBBQgRAxgiBDQhlDFiABzQggAdgpAVQgVALgPAAQgKAAgHgEg");
        this.shape_75.setTransform(87.5,316.2,1.247,1.247);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#F5CB7D").s().p("Aj6jFIHBg2IA0HCInCA1g");
        this.shape_76.setTransform(171.3,367.6,1.247,1.247);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#F5CB7D").s().p("AjCGFQgdgCgpgiQFJkxB9m1QA3AeANAaQANAZgLA+QgMBHgfBMQgZA8grBLQhjCwh2BsQgZAYgcASQgpAcgcAAIgEgBg");
        this.shape_77.setTransform(232,404.2,1.247,1.247);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#F5CB7D").s().p("Ai1GHIhQgxQgVgNgJgWQgIgSgCgcQgCgtALgyQAJgnATg0IAkhXIgRgOQg0goAIg/QACgNAJghQALgpgFgLQgFgLgngPQgPgGgGgSQgFgRAJgOIASgaQBOAKAeAtQAeAugWBJQgKAcAAAJQgBAGADAKIAGAVQAWgeAlg5QAigxAZgeQA5hCBUhNQBIg+BOA7QAoAeBDAlQARAJAFANQAFAMgDATQgSBzhACCQh0DtigClQg3A4gUADIgDAAQgWAAg+glgAi+AAQgIAFgFANQgiBSgNAqQgQA3gCA0QgBAoASALQATAMAigTQApgVAggdQCAhyBljGQAihDARgxQAWhAAEg7QABgSgFgRQgEgTgKgKQgNgNgVAGQgKAEgXAPQhLAvg/BOQgxA7g7BhIBdAYIgwBDIgfgFQgTgDgMgEQgIAAgFAAQgGAAgEAAg");
        this.shape_78.setTransform(93,321,1.247,1.247);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#D84949").s().p("ABfI/Iq7muIgRgMQFLkwB9m3ILhHFQAsAaAFAMQAFANgMAyQgfB8hZCeQh1DQiFB+Qg0AxgTACIgBAAQgUAAg5gkgAjcivIAzHBIHCg1Ig0nCg");
        this.shape_79.setTransform(167.6,364.9,1.247,1.247);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#D84949").s().p("AkOEVQgPgPAKgmQAOgzAbgvQANgXAVgfIAlg1QAIgMAJgCQAJgDANAHQAJAGAwAUIA9g1IhUgsQBMhOA7guQBPg7BSgeQAagJAKAAQAVgCAKAPQAHAMAAATQAAASgEAQQgQA4gkA5QgbAqgvA2QiNCoiTBQQgmAUgqALQgPAEgLAAQgRAAgJgJg");
        this.shape_80.setTransform(1991.8,387.9,1.247,1.247);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#F5CB7D").s().p("Aj1DEIAym5IG5AzIgyG4g");
        this.shape_81.setTransform(2060.6,455.8,1.247,1.247);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#F5CB7D").s().p("AkKFHQgcgJgfgqQF8jXDYmFQAvApAHAbQAGAcgYA4QgbBBgvBBQgkAyg7BAQiFCRiHBMQgfARgdALQghAMgXAAQgLAAgJgCg");
        this.shape_82.setTransform(2109.9,504.4,1.247,1.247);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#F5CB7D").s().p("AjNGEQgUgCg2g0IhChBQgegeAKg4QAHgrAWguQARgiAegvQARgXAlgzIgOgRQgogxAWg7QAGgSAOgYQAUgkgDgMQgCgMgigXQgNgJgCgSQgBgRALgMIAXgUQBIAaATAyQATAyglBCQgPAYgDAJQgCAFABAKIABAWIBMhGQAqgnAfgXQBEg0BigzQBSgsA+BKQAdAkA6A0QAOAMACAOQACAMgHASQgrBohZBtQikDLi8B4Qg+AmgVAAIgCAAgAjKgmQgJACgIAMIglAzQgVAfgNAXQgbAvgOAzQgKAmAPAPQAPAPAlgKQAqgLAmgUQCVhQCLimQAvg4AbgqQAkg5AQg4QAEgQAAgSQAAgTgHgMQgKgPgVACQgKAAgaAJQhSAehNA7Qg9AuhMBOIBUAsIg9A3QgwgUgJgGQgKgFgHAAIgFABg");
        this.shape_83.setTransform(1998.8,393.5,1.247,1.247);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#D84949").s().p("AAhJsQgSgCgvgxIpMpGQGBjZDXmGIBVBVIIGIBQAkAhACANQACANgWAtQg6Byh3CCQifCtiaBZQg4AhgUAAIgCgBgAjbDeIG5AyIAym4Im4gyg");
        this.shape_84.setTransform(2057.3,452.5,1.247,1.247);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#D84949").s().p("Aj8D/QAGgvAQglQAPggAXguIAnhOIAnALQAqANARgIQARgIAXgrIhUggIAhgqQBkh7Bhg8QAjgWAsgMQAVgGAMAJQALAJAAAWQAAAugKAcQhtEkkHC8QgYARgkANQgTAHgNAAQgnAAAHg7g");
        this.shape_85.setTransform(1690.3,284.5,1.247,1.247);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#F5CB7D").s().p("AkEizIG4hRIBRG4Im4BRg");
        this.shape_86.setTransform(1790.7,363.5,1.247,1.247);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#F5CB7D").s().p("AjfFoQgcgDgugqQFnkGCsmcQAxAdALAcQALAcgPA2QgSBEgnBIQgfA3gzBGQh0Chh/BfQgYASgYANQgyAcgcAAIgFAAg");
        this.shape_87.setTransform(1873.5,428.6,1.247,1.247);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#F5CB7D").s().p("AjsFoIgggaQgTgPgNgJQg/grAQhSQAKg3Acg7QAUgrAmg9IAIgOQgsgrgGgfQgGgfAXg5IAKgbQAMgkgigNIgjgOQABgTAIgIQAJgIARABIAmAAQAdAAANAJQAOAKAIAdQAHAagGAfQgEASgPAlQgJASgCAJQgEAPANAJIBVhZQAyg0AmghQAoglBfg2QBBgkA4AzQA0AwAzAgQAUANAEAQQADAOgJAUIgxBuQgeBBgaAqQiJDejBCWQg3ArgTAAQgSAAg1grgAj9AsQgXAugPAhQgQAkgGAwQgKBPBKgcQAkgNAYgQQEHi8BtkkQAKgdAAguQAAgVgLgJQgMgJgVAGQgsAMgjAWQhfA7hmB7IghArIBUAgQgXAsgRAJQgRAIgqgNIgngMIgnBMg");
        this.shape_88.setTransform(1697.9,290.6,1.247,1.247);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#D84949").s().p("AE4MPQgTAAg8gvIwqtIQBYg3BUhRQBFhEBLhfQBMhhAxhSQA8hkAhhkIB/BkQGsFTIwG2QANAKAEAMQADALgFAQQgUBFgnBKQgfA4g0BKQiLDJidB4Qg7AtgVAAIgBAAgAj2ilIBRG4IG4hRIhRm4g");
        this.shape_89.setTransform(1788.9,361.8,1.247,1.247);

        this.addChild(this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,2920.4,569.7);


    (lib.greeheerr = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D84949").s().p("ACOFcIhZCsIhUjXIlMEWIBwmLIidAdIBhhlIlTjEIF2AaQgYgyguhYIgohPIDqA1IhTmoIEEFRIBhj5IA/ELIDmjtIhYF5IFEAiIlPDVIEaC0Ik5ggICOGLg");
        this.shape.setTransform(278.2,269.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AFRM6IjTGYIjJn+IsTKSIEIuoIl1BFIDnjuIsjnUIN3A+Qg6h5hsjRIhfi5IIqB7IjFvsIJsMhIDlpRICXJ8IIgo0IjPN9IL/BRIsaH8IKdGrIrnhLIFSOpg");
        this.shape_1.setTransform(278.2,269.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F5CB7D").s().p("AJLWgIluLFIlht2I1bR6IHN5fIqKB3IGSmeI14swIYLBsQhnjTi7ltIimlDIPFDYIlX7XIQ6V1IGPwKIEIRUIOzvVIlpYTIU5CNI1oN1ISOLpI0PiDIJNZig");
        this.shape_2.setTransform(269.2,266.1);

        this.addChild(this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,538.4,532.1);


    (lib.ClipGroup = function() {
        this.initialize();

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ApaEIIAAoPIS1AAIAAIPg");
        mask.setTransform(60.3,26.4);

        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E8212D").s().p("AEICVQjIh+h6g9QhhgxjDhFIj8hXIAJgUQBTAgB8AiQD4BEDOAJQEGAKBygrQB3AvAoAOIijFkQhLgzhlhAg");
        this.shape.setTransform(60.3,26.4);

        this.shape.mask = mask;

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,120.7,52.8);


    (lib.degergerre = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#393A3A").s().p("ArUJyIi1gDIhagCIhagEIhYgEIhZgGIiugOQidgOi2gZIjzgoQgzgJgcgGQiXgfiXgnQhmgcgngNIiIgrQkChXjRhsQi+hiiOhpQhuhQhQhUQgagagTgYIgOgSQgCgDAAgEQABgEADgDQAIgFAGAHQATAWArAlQAfAbAzAmIA2AmIA/ApIBIAqIAnAWIApAWIBZAqQAhAQBAAcQAiAPBHAcIBxAqIA7AUIA9AUIA/ATIBBASICGAkQAYAGB0AaQCHAeChAaIBOALIBOAMIBQAKIBRAJQCiASCqAKIBVAGIBWAEIBXADICvAEIIWgJIBagCIC0gEQBtgCBIgDQDDgJCkgfQCjgeC3hDQCbg4CohZQAmgUBzhAICWhTQCChKClhZQC/hmBlgvQCjhMB+gtQBTgdA7gRQBFgVBGgRQD4g9ECgUQDLgPC9AIQB5AECBAOIBYAMQAEABADADQADADgBAEQgBAIgHABIgBAAIhXANQhAAKgpAFIiMAVQjGAfiyAkQigAjhCAQQh4Afh/AmQkBBPkcB1Qh4AxitBPIiXBDQhZAphEAcIiiBBQhZAhhPAbQhGAYhlAgIiuA1Qh/AmjhA9Qj2BBhxAbIi1AlQgrAIgxAHIhcAMQhtALhLACIhdACIgYAAIhDgBg");
        this.shape.setTransform(2360.9,1116.6,1.247,1.247);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#323333").s().p("AwVM4QhYgChHgEQiDgFi6gRQisgQiSgVQiogXiVgeQihgeiagpQlEhTkih1Qj/hmlKimQhZgsjDhlQi4hdhjgyQlKiij3hbQo1jWqPg5QiogOiOgFQg0gChngCIibgBQjOAEhmAGIiZAKQh1ALgjAEQpyBCobDOQj0BdkiCQQhlAzicBQIkACHIhKAmIAAjTID5h3QCZhJBygyQEviHEAhTQEohiEng3QEdg3FGgaQEMgVFigBICcADQBpACA0ADQB2AEDEAQQCQAOCrAWQCkAZCVAeQE0BAEzBqQEUBiE9CQQBYApDJBfQC5BWBnAuQE2CQERBgQEiBmE4BFQCGAeCsAcQCTAZChARQEjAgFIAJQCKAECsgBIEzgIQFDgMEagiQJmhLIdi7QEAhZEbh/QB2g0GWi+QEniNDmheQEdh1D6hIQELhQEOgyQEAgvESgaQDwgXESgGIEZgCIDTAEQOfAWMxB1QK5BiJyCnQD+BFDfBLQCzA7CoBEQB3AxBaAqIBHAjQAEADABAFQACAFgCAEQgFAIgLgEIgBAAIhHgbQhqgnhsgjQijg1i8gwQjog/j5gzQpch9rKhIQtDhQt6ACInkAJQj1AKj6AbQobA7neCUQj0BKkKBtQihBBlgCiIkGB6QiaBJhzAxQk1CFj+BUQklBgkuA/QkcA8lLAjQkuAglDAHIk7ACQhpgCg1gCg");
        this.shape_1.setTransform(955.5,1096.7);

        this.addChild(this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,1013.9,2825.9,180.9);


    (lib.breheer = function() {
        this.initialize();

        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AhCAOIAAgbICFAAIAAAbg");
        this.shape.setTransform(43.7,50.7);

        // Layer 2
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#814320").s().p("AhCAPIAAgcICFAAIAAAcg");
        this.shape_1.setTransform(43.8,34.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgTAAgPgOg");
        this.shape_2.setTransform(53.8,33.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#814320").s().p("AghAjQgPgPAAgUQAAgTAPgPQAOgOATAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgTAAgOgOg");
        this.shape_3.setTransform(33.8,33.7);

        // Layer 1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgTAAgPgOg");
        this.shape_4.setTransform(54,50.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#814320").s().p("Ag0FJQglgCgXgLQgfgPgQgbQgOgYgEgjIgCgQIgGoPIFOACIAiFvIADEYIAAAEIi0ADIgqABIgQAAgAibkqIgFHFQABAuABALQAEAgALAVQAMAXAaANQAVAKAhACIA5ABICsADIACiIQABhFgBhGIg1lWg");
        this.shape_5.setTransform(61.3,33);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FED230").s().p("AguE+QhAAAgfggQgigiAAhKIAAnvIEzAAIAsFjIAAEYg");
        this.shape_6.setTransform(61.9,33.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#814320").s().p("AghAjQgPgPAAgUQAAgTAPgPQAOgOATAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgTAAgOgOg");
        this.shape_7.setTransform(33.9,50.6);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#814320").s().p("AgFFIIi0gDIAAgEIACiMIABiLIAAgBIAilvIFOgCIgGIPIgCAQQgEAjgOAYQgQAbgfAPQgXALglACIgQAAIgqgBgAizAqIAACLIACCIICsgDIA5gBQAhgCAVgKQAZgMANgYQAMgVADggQABgLABguIgFnFIkagCg");
        this.shape_8.setTransform(26.6,33);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FED230").s().p("AivE+IAAkYIAsljIEzAAIAAHvQAABKgiAiQgfAghAAAg");
        this.shape_9.setTransform(26,33.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#814320").s().p("ACGFNIgvgJIgvgPIgBAAIgBAAQgPgIgFgQQgDgMAAgLQgBgOADgXIAJhDQADgSAAgNQABgRgDgMQgCgLgHgFQgHgFgLAAQgLAAgHAFQgGAEgDAMQgCAKAAATIACAfIAKBDQACAVAAAQQgBAOgDAIQgEAQgPAIIgBAAIgBAAIgXAJIgvALIgYAEQgtAFgygDQgrgCgygJIgugJIgugMIAAAAQgDgBgDgDQgNgUgCgQQgCgUALgTQAJgPAPgNQALgKARgLQAZgPAlgQIAggMIAXgIIgIgKIgOgTIgLgVQgFgLgEgKIgGgWIgFgXIgCgVIgCgXQgBgnAIg0QACgVAGgZIAMgsIABgBIAAAAIAyhpQADgIAJAAIBxgCIBvgBIBwAAIBwABQAKAAAEAJIA0BoIAAAAIANAuQAGAZADAVQAHAzgCApIgBAXIgEAVIgFAXIgIAWQgEAMgFAJIgMAUIgOASIgOAOQAgAIAeAMQAlAPAZAPQAmAXAPAZQALATgCAUQgCATgNASIgGAEIAAAAIguAMIguAJQgsAIgyADIgiABQgiAAgbgDgAkKjRIgOAoIgLAsQgIAqgBAuIADAqQABAMADAKIAGAVIAIAUIAKAUIANARIAPAQQAFAFgFAEIgCACQgbAIgkAQQgiAPgZARQggAWgMAWQgHANACAOQACAMAIALIBWAPQAtAFAtABQAwABAqgHIAWgEIAVgFIAngNIACgDQABgDAAgIQAAgNgCgSIgLhCIgEgkQgBgVADgSQAFgPADgGQAFgLALgJQASgNAaAAQAbAAARANQAKAHAHANQAFAJADAMQAEASgBAVQgBARgDATIgLBDQgDAVABAJQAAAHABAEIABACIAAAAIAAAAIAnAOIArAJQAoAFAxAAIAtgCIAugEIAtgHIApgIQAIgLABgLQADgNgIgNQgGgMgMgNQgMgLgOgKQgYgRghgQQgjgQgcgKQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIAPgRIAMgTIAJgTIANgqIADgWIACgqQgBgogKgwQgEgWgGgVIgNgoIgyhdImsgCgAA5ESg");
        this.shape_10.setTransform(43.7,63.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#CC7E34").s().p("AAvEjQgPgIAEgoIALhQQAPhsg+AAQg9AAAPBsIAMBQQADAogPAIQhdAniRgQQgtgFgugJIgkgJQgtg8Bkg7QAhgSAqgQIAkgNQhJhFAOiNQAEgtANgvIALgmIA1hnIG/AAIA1BnIALAmQANAvAFAtQANCNhJBFIAkANQAqAQAhASQBkA7gtA8Qg3APhIAIQgpAFglAAQheAAhCgcg");
        this.shape_11.setTransform(43.7,64);

        this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,87.4,97.6);


    (lib.bfhehrer = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("ADSBtQACgVgBgPQgBgbgEgRQgGgagMgRQgPgWgWgOQgIgFgQgHIgBgBIgCAAIgYgJIgDAAQgSgFgLAAIgPgCIgPAAIgPAAIgQABIg6AOQgTAHgJAFQgQAHgKAGIgMAHIgXAQIgKAJIgUAOIgfAiIgWAcIgRAcIAGghQAHgWAGgNIALgWIAOgUIARgXIAKgMIAlggQAJgHAUgMQAbgRAogNIASgEIASgDQAcgEAKABIAnADQAIAAAfAJIAFABIAdAMQAUALAMAKQAeAWAQAkQANAdAAAfQAAAYgHAbQgEARgJATQgEAJgHAMIgEAHIAEgfg");
        this.shape.setTransform(237.3,75.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F38A79").s().p("AhjC8QhUgZgdhJQgchJAqhMQAqhOBXglQBXgmBSAZQBTAZAeBJQAcBJgqBLQgqBOhXAmQg2AXgxAAQgiAAgggKg");
        this.shape_1.setTransform(237.5,86);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AhMFWIgMgCIgwgJIgXgIQgugQgmgdQgmgegYgnIgMgUIgLgaIgBgCIAAgBIAAgBIgIgjQgEgkALguQAOg0AohEIAdguIAaglIAngzIAPgRIAPgRQAXgWAbgSQAcgSANgGQAcgNAYgGIAcgHQAHgCAagCIARgBIA2AFQAWAEAPAFIAdAJIABAAIAAAAIAWAKIAEACIAUAMIAjAcQAgAhARAsQAQArACAwQAEBWgiBeQglBjhAA/IgnAgIgqAZQgIAFgOAFIgYAKIgXAHIgYAHIgvAHgAkGCgIAKAPQAoA8BLAeIAmANIAoAGQAdAFA1gGIA/gPIAKgEIAqgQIAKgFQAIgEALgHIASgNQBJg0AhhbQAhhUgRhXQgRhSg4gzIgcgVIgOgIIgWgMIAAABIAAAAIgBgBIgZgJIgQgGIgQgFQg/gTg2AEQgaACgYAIIgWAHIgTAJQgcAPgXAWIgPAQIgBAAIgOARQgSAXgRAdIgUApQgJASgLAeQgWA/gGA3QgDAoAFAYIAHAbIAAAAIAAgBg");
        this.shape_2.setTransform(243.2,83.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E9B87C").s().p("AiQEuQh8gqgnhpQgfhTBAiIQAwhoA2g4IAWgXQAegbAlgRQBzg4CNA6QBRAhAlBOQAiBIgJBdQgKBYgvBNQgyBRhLAnQhaAvhUAAQg1AAgzgRg");
        this.shape_3.setTransform(244,83.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("ADMCDQgCgNgCgGIgHgVIgIgXIgLgYIgUgkIgJgLIgSgXIgVgWIgYgVIgagRIgcgPIgOgGIgOgFIgNgEIgSgFIgEAAIgVgCIgEAAQgNAAgOABQgbAEgWANQgWAPgOAUQgNAQgLAWIgNAgIgKAfIgBgIQgBgQAAgHQAAgVAEgSQAEgaALgXQAPggAXgUQAegZAlgJQARgEAVgBIAlACQAhAGAFACIATAFIASAIQAIAEAbAPQAGAEAKAIIAPALQAeAbAUAcQAQAZACAFIAIAQIARArIAGAcIAEAbIAAAYIgDAnIgHAgg");
        this.shape_4.setTransform(37.9,34.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F38A79").s().p("AAZDVQhVgRhGhKQhGhLgKhWQgLhZA2gzQA3gyBYAQQBVARBGBLQBFBKALBXQALBZg3AyQgpAng7AAQgUAAgWgFg");
        this.shape_5.setTransform(37.1,41.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#814320").s().p("AAZFyIgvgHIhHgZIgWgMIgLgGIgfgVIgTgQIgTgRIgigmIgWgeIgdg4QghhWAIhpQAJhoAohNQAXgtAhgfQAjgiArgQIAVgHIAtgHIAGgBIAFABIATAAIACAAIAbAEQAMABAaAGIATAFIAhAOIAQAIQAWAMAHAFIAZATQAUARAUAXQAPASAMAVQAQAaANAgIAIAWIAGAWQAHAYAIAoIAQBiQAIBQgLA4QgJAugTAgIgOAUIgIAJIgBABIgXAWIgTANQgnAagvALQghAJgiAAQgPAAgPgCgAhGk6IgjAIQgjALgfAXQghAYgYAiQg1BJgGBeQgIBfAtBQIAZAmIAnAqIAIAHIAQAOIASAOIARAMQAxAdAcAJIAoAKIAnAFQBTAEA+gnIAcgUIADgDIABgBIAIgIIAJgMQAQgWANglQATg3AGhDQACghAAgTQAAgcgCgSQgDgjgHgcIgNgrQgLgdgVgbIgOgQIgRgQQgUgSgXgNQgxgbhDgKIgRgCIgPgBIgcgCIgWAAg");
        this.shape_6.setTransform(30.8,37.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E9B87C").s().p("AATFVQiPgQhmiDQg1hEgMhgQgKhZAdhXQAehaA+g0QBEg5BYAEQCZAHBVBlQAqAzAMAxQAaBKAABzQABCahABAQhFBFhpAAQgTAAgTgCg");
        this.shape_7.setTransform(30.4,37);

        this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,277.2,117.8);


    (lib.vdgvwwewe = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFDEA").s().p("AgHAlQgPgDgJgOQgJgNAEgOQADgPAOgJQANgJAOAEQAPAEAJANQAJANgEAOQgDAPgOAJQgJAGgLAAIgHgBg");
        this.shape.setTransform(91.2,139.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#814320").s().p("ABHBNQgQgLgZggIgRgUQgJgJgIgDQgKgCgQADIgaAKIgZAMQgQAGgMADQgdAHgbgKIgXgLQgMgHgIgJQgRgRgBgXQgBgQAFgQIAJgTIAEgGIACAAIABACIgCAGIgBATQgBAOADANQAFAQAMALQAHAHAIAEIAUAHQAZALATAAQAZABAbgNIAagKQARgHANAAQAGAAAJADIAPAHQAJAFAOAOQAaAaAMAHQASAMAWABIAVABIAUgDQAQgEANgLQAJgIAIgOIAHgRIABgGQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABAHQAAALgBAJQgEASgKAMQgMASgXAJIgLAFIgNACQgOADgMAAQgggBgYgRg");
        this.shape_1.setTransform(129.7,162);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFDEA").s().p("AgIApQgRgDgJgPQgKgPAEgQQAEgRAPgJQAOgKAQAEQARAEAKAOQAJAPgEAPQgDASgPAJQgLAHgMAAIgIgBg");
        this.shape_2.setTransform(84.9,128);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFDEA").s().p("AgQBRQgigHgTgdQgSgdAHggQAIgiAdgTQAdgSAfAHQAiAIATAdQASAdgHAfQgHAigdATQgVANgXAAQgHAAgKgCg");
        this.shape_3.setTransform(102.4,128.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#844320").s().p("AgkCsQhIgQgng9Qgog+AQhFQAQhIA9gnQA+goBFAQQBHAPAoA+QAoA9gQBGQgPBHg+AoQgsAcgxAAQgSAAgUgEg");
        this.shape_4.setTransform(96.2,130.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#814320").s().p("AAqAVQgCgCgGgCIgPgIIgSgFIgGgCIgJgBIgJAAIgJAAIgUACIADgEIADgGIAHgGIAJgGQAGgDAGgBQAJgCAFAAQAEAAAIACQAGABAIAEIALAHIAIAJIAGAHQADADAAAFIACAHIACAGg");
        this.shape_5.setTransform(131.3,152.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F38A79").s().p("AgJAvQg2gLgjgXQgigUAEgUQAEgTApgGQApgGA0AMQA2AMAjAWQAjAUgFAUQgEAUgpAFQgNACgPAAQgeAAgjgIg");
        this.shape_6.setTransform(69.5,141.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F38A79").s().p("AgJAvQg1gLgjgXQgjgUAEgUQAEgTApgGQApgGA0AMQA2AMAjAWQAjAUgFAUQgEAUgpAFQgNACgPAAQgeAAgjgIg");
        this.shape_7.setTransform(193.9,168.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFDEA").s().p("AgHAlQgPgDgJgNQgJgOAEgNQAEgQANgJQANgJAOAEQAPAEAJANQAJANgEAOQgDAPgOAJQgJAGgLAAIgHgBg");
        this.shape_8.setTransform(174,157.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFDEA").s().p("AgIApQgRgDgJgPQgKgPAEgQQAEgRAPgJQAOgKAQAEQARAEAKAPQAJAOgEAQQgDARgPAKQgLAGgMAAIgIgBg");
        this.shape_9.setTransform(184.4,150);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFDEA").s().p("AgQBRQgigHgTgdQgSgeAHgfQAHgiAdgTQAegSAfAHQAiAIATAdQASAdgHAfQgHAigdATQgVANgYAAQgHAAgJgCg");
        this.shape_10.setTransform(168.2,143.6);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#844320").s().p("AgkCsQhIgPgng+Qgog+AQhFQAQhIA9gnQA+goBFAQQBIAQAnA9QAoA+gQBFQgPBIg+AnQgsAdgyAAQgRAAgUgFg");
        this.shape_11.setTransform(173,147.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#814320").s().p("AgbJtIg/gLIAAABIgVgFIgBAAIgVgEIAAgBIg9gQIhQgcIhOgiQgpgUgigUQgtgagbgTIgigYQgTgNgPgNQgdgWgkggQgkghgYgaQgXgYgggpQgdgkgUghQgZgngQgkQgUgsgIgjIgHgsIAAgLIAAgFIAAgGIACgWQADgWALgVQAMgUARgPQAdgaAygLQAlgIAnABQgDgcABgjQAAgjAHglQANhQAkg4QAWgjAZgVQAYgWAkgTQAlgSAfgHIAkgHIAkgEIA3gCIASABIBIAIIA+AQIBMAhQAmAXAXASQAcAXAZAaQAJAJAQASIAWAeQAQAWANAWQAVgQAXgNIAggSQAWgLAMgEQAhgOAlgJQAigJAngEIBUAAIBAALIBYAdIAxAYIABABIABAAIACABIArAcIAqAkIAZAcQAYAgAOAgQANAgAFAoQAIBEgYBNQgWBFgnA5QApAPAfAXQAnAcARAkQAKAVACAWQABAWgGAWIgDALIgNAeIgYAkQgYAegiAgQgaAWgqAdQggAWgpAVQgoAVglAPQgkAPgrAOQgwAPgiAIIgpAJIgpAIQgnAHgtAEQgoAEgtABgArojGQgsAMgZAXQgcAZgFApIgBATIABAUIAHAmQAIAeAVArQAOAeAaApQASAaAfAnQAeAlAZAYQAZAaAiAfQAlAgAaATQAOALATAOIAiAXQAdATApAXQAYAOAxAYIBLAfIBNAbICgAjIChAKQAtgBAlgCQA3gFAbgFIBQgOQAkgIAsgNQAugOAfgMQAcgLAvgWQAxgZAXgOQAlgWAegZQAkgeAWgaIAXghIAQgkQANgogPgkQgNghgkgeQgggZgmgRIgCgBIABgCQARgdANgjQAOggAIghQAThKgKhBQgHglgNgdQgNgcgXgdIgYgZIgMgLIgOgLIg6gkIhBgcIhSgXIgrgGIhNABQgnAEgdAIQgfAIgiAOIggAOIgeARQgeARgbAVIgRAOIgKgTQgPgggTgcQgUgcgXgaQgWgbgagVQgUgRgkgYIhHgiIgpgNIhWgPIhHgCIg0AGIgzANIggANQggAQgaAXQgaAYgTAeQgjA3gLBMQgGAkAAAiQAAApAFAdIABAKIgKAAIgLAAQgkAAghAIg");
        this.shape_12.setTransform(134.1,134.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F8E2A6").s().p("AhtJPIAAgBIgBAAQkzhDjpjfQhjhgg5hlQg4hjAAhLQAAhgBigfQAxgPAxAEQgPhgAdhiQA6jFDcgOQDJgNCPB4QBPBEAtBbQBNhABngdQC0gxCxBfQDDBogeDLQgPBkg1BRIAcAMQAhASAYAVQBMBFgoBXQggBHhcBDQheBDiCAuQi8BBi8AAQh2AAh0gZg");
        this.shape_13.setTransform(134.4,134.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A65F2A").s().p("AiAhCQAdiHBxiQIgxCLQgWBUAdA3QALASAPAQQCQBuADgGIh1DwIh1AkQhUjQAtjNg");
        this.shape_14.setTransform(61.3,103);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#A65F2A").s().p("AiVEBIgHkJQAAAFBVgRQBPgRANgFQAUgIASgNQAwgkAHhZQgChoAEguQAcByAHAsQANBbgPBFQgtDOihCZg");
        this.shape_15.setTransform(215.6,138.1);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#814320").s().p("Aj8OzQhagbhXgrQhXgshKg4QhNg7g/hFQg/hHgvhTQhiirgFi8QgDhfAXhaQAXhdAuhSQAthRBChHQAfggAnggQAlgeAngaQBKguBegoQBJgeBoghIBYgcQAygRAjgPIApgTIAmgUQAqgYAegaQAkgfAXggIAXglIAagqQAUgaAUgNIAOgIIAdgIIAagBIATAEQAMADAQAKQAZARANAcQAXAwgOA7QgNAzgkAoQgPARgWAQIAYgLIAggRQAVgMARgDQAUgFAXAJIATAMQAHAGAHAKQAKARAEAWQAIArgYAhQgLARgRALQgRAKgSAFQgUAFgRAAIgRAAQBPAeBIAqQBVAxBEA7QBKBAA3BKQAaAhAcAuIAXApIAVArQAmBSASBkQAQBjgLBdQgMBlgkBWQglBZg8BPQg5BJhQA/QhLA6hZArQioBPjKAMQgeACgfAAQicAAifgugAEGurIgOAHQgNAJgMARQgJAMgOAaIgaAqQgbAogoAhQhEA5hhAnQg9AZh3AhQhoAchIAbQhdAihJAqQgpAYgjAaQgqAggbAbQhEBEgsBNQguBPgXBaQgWBgAEBUQAFBfAcBVQAbBUAyBRQBdCYCdBtQBLA1BSAmQBTAnBXAYQCzAxCygNQC2gMCkhNQBSgnBHg3QBKg5A1hDQA4hGAjhSQAkhTAMhYIAEgsIABgtQABglgGg0QgOheghhNIgSgqIgVgoQgagwgVgdQgzhKhEhAQh/h7izhQQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAYAAAMgCQAQgBASgHQAlgMAQgcQAQgbgHgkQgEgQgJgNIgKgLIgGgEIgBAAIAAgBIgBAAIgFgCQgOgEgOADQgMAEgRAKIgfATIgiARQgUAJgQAEQgUAGgTABQgUADgTgBIgVgCIgRgEQgIAAgFgHQgFgGABgIQAAgHAFgFQAFgFAGgBIACAAQAxgGAigRIAFgCIABgBIAAAAIANgHIAQgMQARgMAOgRQAcghAIgmQAKgsgRgfQgHgQgOgJQgJgFgFgBIgHgBIgKgBIgEABIgDAAg");
        this.shape_16.setTransform(140.4,99.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#CC7E34").s().p("AinOsQi5goichiQiXhehniGQhniGgniaQgoifAiiaQAKgwARgtQAdhMAthDQAuhEA7g3QBThPB5g6QBfguCHgpQB6gkAfgLQBVgeA7gjQBkg6AxhSQAlg9AJgKQAfgjAsAEQAkAEAVAfQAUAfgCArQgFBphtA5QgpAUg3AHIAUAEQAeAEAfgEQAxgGA3ggQAjgUALgEQAagJAYAMQAWAKAKAdQALAegJAeQgWBQh3gHQEzB6CjEBQClECg9EYQgiCdhnB/QhjB8iVBPQiWBPiwAXQhEAIhEAAQhxAAh1gZg");
        this.shape_17.setTransform(139.5,99.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

        // Layer 2
        this.instance = new lib.bfhehrer();
        this.instance.setTransform(138.6,122.4,1,1,0,0,0,138.6,58.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:115.2},5,cjs.Ease.get(1)).to({y:122.4},5,cjs.Ease.get(1)).to({y:115.2},5,cjs.Ease.get(1)).to({y:122.4},5,cjs.Ease.get(1)).wait(11));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,277.2,198.7);


    (lib.frneer = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.greeheerr();
        this.instance.setTransform(269.2,266.1,0.38,0.38,0,0,0,269.1,266.1);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.49,scaleY:1.49,rotation:360,x:269.1,y:266.2,alpha:1},4,cjs.Ease.get(1)).to({regY:266,scaleX:0.35,scaleY:0.35,rotation:720,x:269.2,y:266.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(166.9,165,204.5,202.2);


    (lib.Group = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.ClipGroup();
        this.instance.setTransform(60.3,26.4,1,1,0,0,0,60.3,26.4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,120.7,52.8);


    (lib.dwvwvwewe = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFDEA").s().p("Ai5A6QgNgLgBgtQBGgVBvgTQB1gTBdgCQAOAmgMAQQgKALizAfQiFAXgoAAQgNAAgEgCg");
        this.shape.setTransform(145.3,168.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#814320").s().p("Ag0ASIACgGQABgEACgEIAGgHIAJgJIAMgHIAOgFIAMAAIAOADIALAEIAJAHIAGAGIAFAEIADAFIgNgBIgIAAIgbgBIgHACIgJABIgZAKIgSAJg");
        this.shape_1.setTransform(143.9,155.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AAcDkIgRgCIgQgCQghgHgigOQghgOgbgTQgggWgVgXQgUgWgSgjQgPgbgNgiQgOgkgGgbQgEgRgBgQQgBgXAFgKIAAgBIAHgFIAHgEIAugRQAXgIAngLQA9gSBAgNQA4gNBHgJQBNgIA1ADIABAAIAKAEIAJAGQAIAGAFAJQAGAMAEAXQAEAcgDApQgDAigGAhIgGAfIgJAhQgLAjgPAdQgSAggWAZQgaAcgcARIgQAIIgiANIgPAEIgBAAIgBAAIgBAAIgRACIgOABIgFAAgABnjPQg3AFhHAMQhEALg6APQgeAHghAKIgtASIgHAEQgDABgCADQgFALACAVQACASAEAOQAKAgAOAcQAPAeASAbQAVAgATARQAWAVAeARQAbARAeALQAhAOAbAEIAdAEIAPAAIAQgCIABAAIAcgIIAcgNQAagOAXgYQAUgVARgeQAQgbAKgfIAQg9QAHgjADgeQAEgngDgZQgDgTgFgKQgHgNgLgDIABAAQgYgCgdAAQgiAAgpADg");
        this.shape_2.setTransform(146.6,183.2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F38A79").s().p("AhCC/QhKgggpgwQgpgvgdhMQgehQAPgaQAMgWCygoQDCgsB2ALQAeAFAFA6QAFA5gWBdQgUBcg1A5QgxA0hAAMQgPADgPAAQguAAg6gZg");
        this.shape_3.setTransform(146.2,182.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#F38A79").s().p("AhVAzQgogHgEgUQgEgUAkgTQAjgWA2gKQA0gKApAHQApAHAEAUQAEAUgkATQgkAVg2AKQgeAGgcAAQgSAAgRgCg");
        this.shape_4.setTransform(85.4,169.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F38A79").s().p("AhVAzQgogHgEgUQgEgUAkgTQAjgWA2gKQA0gKApAHQApAHAEAUQAEAUgkATQgkAVg2AKQgeAGgcAAQgSAAgRgCg");
        this.shape_5.setTransform(209.4,145.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#844320").s().p("AhRAOIAygcQgTgUguABIgqAGIARgSQAXgUAZgNQBQgrBOAsQA2AfABA8QAAAfgLAZQhWg+hTAoQgbAMgXAVQgLALgHAIQgSgvAtgng");
        this.shape_6.setTransform(101.4,151.6);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFDEA").s().p("AgUAfQgNgJgDgPQgDgOAJgNQAJgNAPgDQAOgDANAJQANAJADAPQADAOgJANQgJAOgPADIgHAAQgKAAgKgHg");
        this.shape_7.setTransform(184.7,144.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFDEA").s().p("AgXAjQgOgKgDgSQgEgPAKgOQAKgPASgDQAPgEAPAKQAOAKAEASQADAPgKAOQgKAPgSADIgHABQgMAAgLgHg");
        this.shape_8.setTransform(191.3,133.1);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFDEA").s().p("AgtBEQgcgTgIgiQgGggAUgcQATgdAigGQAggHAdAUQAcATAGAiQAHAggUAcQgTAdgiAGQgIACgHAAQgYAAgVgPg");
        this.shape_9.setTransform(173.9,133.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#844320").s().p("AhiCSQg9gqgNhIQgOhGAqg8QApg9BIgNQBGgOA8AqQA8ApAOBIQAOBGgpA8QgqA8hIAOQgSAEgPAAQg0AAgtgfg");
        this.shape_10.setTransform(180,135.5);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#814320").s().p("AiWJzQgxgDgkgEQgqgGgqgIQgWgEgTgFIgpgKQgdgIg0gRQgvgRgggOQgfgOgtgYQgrgYgdgUQgogdgbgYQgkgjgVgdIgXgmIgIgQIgBgEIgHgVQgFgYACgVQACgZAKgTQATglAogcQAfgWAkgOQgOgZgNggQgLgbgLgoQgShOALhCQAHgoAOgeQAPghAYgdQAdgfAZgSQAHgHAIgEIAugcIBDgdIBYgYIAtgGIBTABQApAFAfAJQAjAIAjAPQAHACAaAOQAPAIARAKQAWANAWARQAMgWARgXIAXgdQAQgSAJgJQAagcAcgUQAWgSAogWIAigRIBYgcIASgDIBKgHIATgBIA4ADIAAABIACAAIAFABIAuAHIA1ARIAiAQQAiAUAZAZQAbAZASAiQAiA7AIBQQAHBLgNBDQAsgCAmAJQAvALAdAaQASAQAJATQAKARAEAZIAAAsIgIApQgJAlgUArQgUAngXAiQgQAagiArQgiAngXAXQgaAbgjAfQgeAZgkAcIgjAZQgOAKgVANQgiAWgnAVQgkAUgoARIhOAhIiPAoIAAAAIgVAFIgBAAIgVADIAAAAIhnAMIgrADgAnMnJIgRADIhVAXIhQAlIgrAdIgNAMIgZAYQgXAdgPAeQgOAdgGAlQgLBBATBLQAJAjAOAeQAPAjAQAbIAGAJIgKADQgoAPgeAYQglAcgOAfQgQAiAMAnIAGATIACAEIAHAOIAWAgQAUAcAjAeQAeAaAjAXQAZARAtAYQAtAXAdAMQAlAQAoANQArAOAkAJIAnAJIApAJQAmAHArAEQAoAFApABIBSAAICggRIAAAAIABAAIAAAAIB3geIBzgrQAogSAhgRQAugYAagQQAVgNANgKIAigWQAagTAngfQAmghAXgWQAagYAfgkQAggkATgcQAZghASgjQATgkAMgnIAFgSIAFgnIAAgUQgDgqgdgbQgZgZgtgNQgogMgpAAIgCAAIAAgCQAEgfgBgpQAAgjgGgjQgLhLgjg3QgTgfgZgWQgagYgdgPQgWgLgKgDIghgKIgQgDIgzgHIg2gCIgRABIhEAIIgRADIgpALIhHAgQgkAUgWARQgXASgdAcIgVAZQgNAPgIAMQgWAcgPAeIgLATIgRgOQgZgWgdgUQghgUgcgNQgfgPgigJQgbgKgogGIgjgDg");
        this.shape_11.setTransform(144.3,137.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F8E2A6").s().p("AoBIWQiBgxhbhHQhbhFgehIQgmhYBPhDQAZgVAhgQQARgIALgEQgzhQgMhmQgYjMDFhiQC1haCyA2QBlAfBNBCQAuhZBRhCQCSh0DJASQDcAUA0DHQAbBjgSBgIAeABQAlACAfALQBhAhgDBgQgCBLg7BiQg8BjhmBdQjuDZk1A6IgBAAQhmAUhnAAQjMAAjIhMg");
        this.shape_12.setTransform(144.5,137.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#A65F2A").s().p("AiUgZQgZiLAxivIAICVQAMBWAwAnQATAOATAHQANAGBOATQBUATABgEIgPEIIheBQQididgojQg");
        this.shape_13.setTransform(62.2,139);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#A65F2A").s().p("AghEzIhvjzQACAEBHgxQBEgtAJgKQARgQAJgSQAfg0gdhUQgohggPgrQBEBdAYAmQAxBPANBGQAoDPhbDMg");
        this.shape_14.setTransform(217.2,108.4);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#814320").s().p("Ah3PrQhhgGhbgXQhfgYhUgoQhagrhHg3QhMg6g8hJQg9hLgnhVQgnhWgPheQgPheAKheQAKhfAihWQAQgrAWgrQAVgpAcgoQAxhIBIhJQA4g4BThHIBFg9QAogjAagcQAOgOARgTIAcgiQAcgkATgmQAWgrAIgmIAHgrIAHgxQAIgfAOgVIAJgMIALgKIANgJIAOgHIAJgDIABgBIADgBIAPgDQAPgCAQADQAfAGAWAVQAnAjALA8QAJA0gTAzQgIAZgOAVIATgVIAWgcQARgUALgJQATgMAXAAIAHAAIAOADQAKADAKAHQAQALAMASQAXAmgIAnQgEAUgMAQQgKAQgQAMQgQAMgQAIIgPAGQBSgEBUALQBjAMBVAcQBaAdBTAvQAiATAuAhIAlAdIAlAfQBDA+A3BVQA3BXAZBZQAdBeAABfQABBggZBgQgYBcgxBXQgvBUhABJQh8CKi2BaQiqBUjCAXQg/AHg7AAQgiAAgggCgAiiu4IgHABIgJAEIgNAIIgGAFIgFAHQgIAMgFAWQgDANgDAeIgHAwQgLAxgXAtQgpBPhLBLQgvAvhgBMQhUBCg5A1QhIBEgzBDQgbAmgXAmQgaAugPAkQgkBWgLBYQgKBdAOBaQASBlAkBKQApBTA7BGQA4BABQA6QCRBnC7AoQBaATBaADQBbADBYgMQC2gYCjhSQCihTB6iHQA9hGAqhLQAvhUAWhQQAxiygwisQgCgLgEgKIgHgWIgQgpQgOgjgagtQgwhQg/g9IgggfIgjgeQgrghgfgTQhKgvhagiQilhAjCgDIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIABgBQAVgKAKgFQAQgJAMgMQAdgaAEggQAFgggVgeQgKgNgOgIQgHgFgGgBIgHgBIgBgBIgCAAIgEABQgPABgLAJQgJAGgLARIgVAeQgLAPgOAOQgLANgRAOQgQAMgRAJQgMAHgYAKIgkAJQgIADgHgEQgHgEgDgHQgCgHADgGQACgHAGgDIABgBQApgYAbgeIADgEIABgBIAUgdQAMgXAEgPQAOgqgIgmQgJgsgbgXQgMgLgRgDIgJgBIgGABg");
        this.shape_15.setTransform(139.9,100.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#CC7E34").s().p("AjcPHQiwgciThUQiThThgh+QhjiDgeidQgJg0gCgsQgDhTAPhOQAPhPAihKQAuhoBYhlQBFhPBthbQBlhUAVgTQBDg8Aqg5QBGhcAMheQALhIAEgMQAPgsArgOQAigKAfAUQAfAVAPAoQAlBjhPBfQgeAjgwAbIAUgEQAfgJAagPQArgYAmgzQAXghAHgHQAVgTAbACQAXABAVAXQAWAXAEAfQALBShwAoQFKgID6CtQD+CvA1EYQAeCdgtCeQgrCYhrCEQhrCDiZBaQifBdi6AjQhnAThjAAQhTAAhRgMg");
        this.shape_16.setTransform(138.9,100.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

        // Layer 2
        this.instance = new lib.hthehehre();
        this.instance.setTransform(139.1,126.2,1,1,0,0,0,139.1,55.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:118.4},5).to({y:126.2},5).to({y:118.4},5).to({y:126.2},5).wait(11));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,278.2,206.1);


    (lib.csdwffweww = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 8
        this.instance = new lib.frneer("synched",0,false);
        this.instance.setTransform(-2866.2,1305.7,0.65,0.65,0,0,0,269.1,266);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(9).to({x:-2367,y:1331.9},0).wait(9).to({x:-2087.2,y:1370},0).wait(9).to({x:-1779.8,y:1310.9},0).wait(9).to({x:-1241.8,y:1271.6},0).wait(9).to({x:-972.5,y:1360},0).wait(9).to({x:-694.2,y:1391.7},0).wait(9).to({x:-462.9,y:1347.7},0).wait(9).to({x:-217.3,y:1279.5},0).to({_off:true},9).wait(19).to({_off:false,x:-2170.3,y:933.8},0).to({_off:true},9).wait(6).to({_off:false,x:-339.2},0).to({_off:true},10).wait(20));

        // 图层 8
        this.instance_1 = new lib.frneer("synched",0,false);
        this.instance_1.setTransform(-2919.2,1051.1,0.65,0.65,0,0,0,269.1,266);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(9).to({x:-2437,y:1093.5},0).wait(9).to({x:-2201.4,y:1145.8},0).wait(9).to({x:-1887,y:1119.8},0).wait(9).to({x:-1281.5,y:1018.8},0).wait(9).to({x:-1054,y:1103.3},0).wait(9).to({x:-823.1,y:1160},0).wait(9).to({x:-554,y:1129.2},0).wait(9).to({x:-278.4,y:1069.4},0).to({_off:true},9).wait(36).to({_off:false,x:-1292.7,y:1409.5},0).to({_off:true},10).wait(29));

        // Layer 1
        this.instance_2 = new lib.gregegerr();
        this.instance_2.setTransform(-1562.6,1201.1,1,1,0,0,0,1460.2,284.8);
        this.instance_2.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D84949").s().p("AC7EZQgrgPgegVQgcgUgmgdIg+gzIAQgiQAUgkgEgRQgFgSgjgdIgtBHIghgmQhdhxglhmQgNgigEgtQgBgUAKgKQALgJATAEQAqAIAZAQQD4CbB7EVQAKAXAGAmQAJA3gmAAQgNAAgRgGg");
        this.shape.setTransform(-1968.1,1192.7,1.247,1.247);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F5CB7D").s().p("AjVDOIAImkIGkAJIgIGkg");
        this.shape_1.setTransform(-1876.7,1115.2,1.247,1.247);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F5CB7D").s().p("AkgkdQAkgnAcgFQAbgFAvAYQA8AeA6AxQAsAmA4A9QB+CGA/CIQANAdAHAWQASA4gIAZQgIAZgvAjQisl6lcjtg");
        this.shape_2.setTransform(-1801.1,1051.5,1.247,1.247);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#F5CB7D").s().p("AB1FlQgxgTgxglQgigbgzguIgLgLQgwAhgeAAQgeAAgvggIgYgPQgdgRgUAdIgTAdQgigIAKgfIAGgiQAFgbAMgLQALgKAcgCQAagCAbAMQAOAHAhAVQAPALAIAEQANAGAKgKIhBhfQgng4gXgnQgbgwgfhfQgVhDA5gpQA3goAmgoQAPgRAQAAQAOAAARAMIBcBCQAzAnAiAgQC2CpBlDMQAcA7gDARQgEARgxApIgeAYQgRAOgLALQggAggoAAQgYAAgbgMgAgYBrQAEARgUAkIgSAiIA+AzQAmAdAcAUQAeAVArAPQBHAYgMhJQgGgmgKgXQh7kVj4ibQgZgQgqgIQgTgEgLAJQgKAKABAUQAEAtANAiQAlBmBdBxIAhAmIAthHQAlAdAFASg");
        this.shape_3.setTransform(-1962.6,1186.5,1.247,1.247);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D84949").s().p("AlaIyQgxhMhKhXQhKhYhDg8QhRhKhWgxIB0hjIODr6QANgLALgBQALgBAOAIQA8AfA7AyQAvAnA6A9QChCpBPClQAfA/gEATQgEASg3AuIvMM3Qgihcg7hcgAjHDCIGkAJIAImkImkgJg");
        this.shape_4.setTransform(-1878.4,1116.7,1.247,1.247);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D84949").s().p("ACKEzQgngUgbgbQgYgYgggjIg1g8IAXgfQAXgggBgSQgCgSgdgjIg4A/IgagrQhKh/gUhpQgHgnAEgqQACgUAMgHQAMgIASAHQApAQAUATQDcDBBLEkQAHAZgBAlQAAAygeAAQgPAAgVgLg");
        this.shape_5.setTransform(-2288.4,1204,1.247,1.247);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F5CB7D").s().p("Aj0CoIBNmcIGcBNIhNGcg");
        this.shape_6.setTransform(-2185.9,1142.6,1.247,1.247);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F5CB7D").s().p("AjxlIQAqggAcgBQAcAAArAeQA1AnAwA6QAnAuAtBEQBmCYAoCRQAIAbADAaQAJA6gMAYQgMAXg0AbQhsmSkwkgg");
        this.shape_7.setTransform(-2100.8,1092.3,1.247,1.247);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F5CB7D").s().p("ABdFyQgtgbgrgsQgdgggqg3IgJgLQg0AYgegFQgdgFgqgnQgJgJgLgJQgcgWgWAZIgYAZQgggNAOgcIAMghQAJgaANgIQANgJAcADQAaACAZAQQAOAKAbAZQANAOAHAFQAMAHAMgHIgxhpQgdg7gQgrQgTgygPhlQgKhFA/ggQA6gdAugiQAhgZAdAeIBOBQQAuAvAcAlQCYDEBBDZQATA/gGAQQgGAQg3AgQg1AegNAJQgcAVgfAAQgfAAgigVgAgFBkQABASgZAgIgXAfIA1A8QAgAjAYAYQAbAbAnAUQBCAjAAhKQABglgHgZQhLkkjcjBQgUgTgpgQQgSgHgMAIQgMAHgCAUQgEAqAHAnQAUBpBKB/IAaArIA4g/QAfAjACASg");
        this.shape_8.setTransform(-2286.5,1199,1.247,1.247);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#D84949").s().p("AmyHxQgkhUg6hhQg7hig4hHQhEhVhMg+ICChNIPxpeQAOgIALAAQAKABANAKQA2AoAzA8QAmAtAwBGQCDC/AzCwQAUBDgHASQgHAPg8AlIwqJ/IgZAOQgThggrhjgAjmCeIGcBNIBNmcImchNg");
        this.shape_9.setTransform(-2187.6,1143.9,1.247,1.247);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#D84949").s().p("AB5EOQgigTgYgXQghghg/hHIAVgbQAUgdgBgPQgCgQgZgfIgxA4IgXgmQhAhvgShdQgHgjAEglQABgRALgHQAKgGAQAGQAjAOATAQQDACqBEEBQAGAXgBAgQgBAsgaAAQgNAAgTgKg");
        this.shape_10.setTransform(-2513.2,1144.8,1.247,1.247);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F5CB7D").s().p("AjWCUIBDlqIFqBDIhDFqg");
        this.shape_11.setTransform(-2423.1,1090.9,1.247,1.247);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F5CB7D").s().p("AjTkgQAlgdAYAAQAZgBAlAcQAvAiAqAzQAiApAnA7QBbCGAiB/QAIAZACAWQAIAygLAVQgKAVguAXQhflgkKj+g");
        this.shape_12.setTransform(-2348.3,1046.6,1.247,1.247);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F5CB7D").s().p("ABRFFQgngYgmgnQgZgcglgvIgIgLQguAWgagFQgagEgkgjIgSgPQgYgUgUAXIgVAWQgPgGgEgJQgDgJAGgNIALgdQAIgWALgIQAMgHAYACQAXACAWAOQAMAIAYAXIASAQQAKAHALgHIgshbQgZg0gOgmQgRgvgNhWQgJg8A4gcQAzgaAogeQAdgWAaAaIBEBGQAoAqAZAgQCFCsA6C/QARA4gGAOQgFAOgxAcQgxAdgIAGQgZARgcAAQgbAAgegSgAgFBYQABAQgWAcIgUAbQA+BHAiAiQAYAXAiASQA6AgAAhCQABgggGgXQhDkAjAiqQgTgRgjgNQgQgHgLAHQgKAGgCASQgEAkAHAjQASBdBABvIAXAmIAxg3QAcAeABAQg");
        this.shape_13.setTransform(-2511.6,1140.4,1.247,1.247);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#D84949").s().p("Al9G0QgfhJg0hWQg0hXgxg9Qg8hMhDg1IPppZQAMgHAKABQAKAAALAJQAvAkAtA0QAiAoAqA9QBzCnAtCbQASA8gHAPQgGANg1AgIu/I/QgQhUgmhYgAjKCLIFqBDIBElqIlqhDg");
        this.shape_14.setTransform(-2424.7,1092,1.247,1.247);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#D84949").s().p("ADlDqQgqgGgigPQgdgOgqgVIhGglIALgkQAMgmgHgPQgHgQgngWIgPAkIgPAoIgmgeQhuhbg2haQgTgggLgpQgFgTAIgLQAJgLATABQAoAAAcAKQEJBoCnDxQANATANAkQAVA7gzAAIgSgBg");
        this.shape_15.setTransform(-620,1213.7,1.247,1.247);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#F5CB7D").s().p("AjqinIGShDIBDGRImSBEg");
        this.shape_16.setTransform(-546.6,1123.3,1.247,1.247);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#F5CB7D").s().p("AlEjZQAcgsAagKQAZgJAxAOQA+ASBBAkQAzAdA9AvQCSBsBUB0QAQAXAMAWQAbAygDAaQgDAZgnAqQjplLl2iig");
        this.shape_17.setTransform(-486.2,1048.7,1.247,1.247);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#F5CB7D").s().p("ACkFAQgygKg2gaQgngTg2gkIgMgHQgoAngdAGQgdAFgzgWIgYgKQghgLgMAfIgOAfQghgCADgeIABgjQgBgaAKgMQAJgMAagHQAYgHAcAHQAQAEAiAOIAYAKQAOAEAIgMIhQhPQgugugegiQghgmgwhXQggg8AvgyQArgtAfgwQAMgSAPgDQAOgDARAJIBkAuQA6AcAmAYQDKCACFCyQAmAzAAARQgBAQgnAwIgYAcQgOARgJANQgeAsg1AAQgPAAgQgDgAgPBrQAHAPgMAmIgLAkIBEAlQAqAVAdAOQAiAPAqAGQBIALgYhFQgNgkgNgTQinjxkJhoQgcgKgoAAQgTgBgJALQgIALAFATQALApATAgQA2BYBuBdIAmAeIAPgoIAPgkQApAWAHAQg");
        this.shape_18.setTransform(-614.3,1206.8,1.247,1.247);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#D84949").s().p("AjkJXQg8hAhWhFQhXhHhLguQhag3hbggIBdhyILRt6QAKgMAKgDQAKgCAPAEQA/ATBCAlQAyAdBEAwQC4CFBoCOQApA3gBASQAAASgsA2IsLPAQgxhShJhNgAjei0IBEGSIGShEIhEmSg");
        this.shape_19.setTransform(-548.2,1125,1.247,1.247);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#D84949").s().p("ACgEiQglgQgfgZQgpgjhMhJIAUggQAUgigCgRQgDgRggggIgYAeIgaAkIgdgoQhSh3gchlQgKglAAgqQAAgUALgIQALgIATAFQAnALAYASQDnCrBhEZQAIAWADAmQAEA0ghAAQgOAAgTgIg");
        this.shape_20.setTransform(-1364.3,1083.5,1.247,1.247);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#F5CB7D").s().p("AjiC4IArmZIGZApIgpGag");
        this.shape_21.setTransform(-1268.7,1015,1.247,1.247);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#F5CB7D").s().p("AkEkuQAmgjAcgDQAbgDAsAbQA4AiA1A1QAoApAxBAQBwCLA0CMQAKAeAFAWQANA3gKAZQgKAYgwAeQiLmAlAkDg");
        this.shape_22.setTransform(-1189.5,958.9,1.247,1.247);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#F5CB7D").s().p("ABnFnQgugXgtgoQgfgdgugyIgKgKQgxAcgdgDQgegCgrgkIgWgQQgdgTgUAbIgVAbQgRgGgFgJQgFgKAGgPIAJghQAHgaANgKQAMgJAbAAQAZABAaAOQAPAIAcAWQAOANAHAEQANAHALgJIg5hiQghg5gTgoQgWgvgXhjQgQhCA7gkQA6gkAngjQARgPAPABQAOABAPANIBVBIQAvArAfAhQCkC1BSDPQAXA8gEAQQgFAQg0AlQg0AkgIAHQgcAYggABIgFAAQgbAAgfgPgAgOBmQACASgWAiIgUAgQBMBJApAiQAfAZAlAQQBEAegGhJQgDgmgIgXQhhkYjnisQgYgRgngLQgTgGgLAIQgLAIAAAUQAAArAKAkQAcBlBSB3IAdApIAagkIAYgfQAiAgADARg");
        this.shape_23.setTransform(-1360.7,1077.9,1.247,1.247);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#D84949").s().p("AmAIKQgqhQhBhaQhChcg8hAQhKhPhQg3IB6hVIOsqkQANgJALAAQAKAAAOAJQA4AjA2A2QAqApA1BBQCPCyBBCnQAZBBgGASQgGARg4ApIv5LXQgahdgyhegAjTCtIGaAqIAqmaImagqg");
        this.shape_24.setTransform(-1270.5,1016.4,1.247,1.247);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#D84949").s().p("ACgEhQgngRgdgYQgpgihMhJIAUggQAUgigCgRQgDgRggggIgYAeIgaAkIgdgoQhSh4gchkQgKgnAAgoQAAgUALgIQALgIATAGQAmAKAZASQDmCsBiEXQAIAXADAmQADA0ghAAQgNAAgTgJg");
        this.shape_25.setTransform(-905.7,1224.4,1.247,1.247);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#F5CB7D").s().p("AjhC4IApmZIGaAqIgqGZg");
        this.shape_26.setTransform(-810.3,1156.1,1.247,1.247);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#F5CB7D").s().p("AkEkuQAmgjAcgCQAbgDAsAbQA4AiA1A0QAoAqAxA/QBwCMAzCLQAIAXAIAcQANA4gKAYQgKAYgxAeQiKl/lAkDg");
        this.shape_27.setTransform(-731.3,1100,1.247,1.247);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#F5CB7D").s().p("ABnFmQgtgXgugoQgegcgvgyIgKgLQgxAcgdgDQgdgCgsgjQgJgIgNgIQgcgUgUAbIgWAbQgRgGgEgJQgFgKAFgPIAKghQAHgaAMgJQAMgKAbABQAaAAAZAOQAOAIAeAXQANAMAIAEQAMAHALgJIg4hiQghg4gUgpQgOgegMgpQgHgYgMgyQgPhCA6gkQA2ggAsgnQAQgOAQAAQANABAPANIBVBIQAvArAfAhQCjC0BSDPQAYA8gFARQgFAQgzAkQgvAggOALQgcAYgfABIgFABQgbAAgfgQgAgOBmQACARgWAiIgUAgQBMBJApAiQAdAYAnARQBDAegFhJQgDgmgIgXQhikXjmisQgZgSgmgKQgTgGgLAIQgLAIAAAUQAAAoAKAnQAcBkBSB4IAdAoIAagkIAYgeQAiAgADARg");
        this.shape_28.setTransform(-902.1,1218.9,1.247,1.247);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#D84949").s().p("Al/IJQgqhQhBhaQhChbg8hBQhJhOhQg3IB5hVQIhmFGKkdQANgJALAAQAKAAANAIQA4AjA3A2QApApA1BBQCPCxBACnQAZBBgFASQgGARg4ApIv3LVQgahcgyhegAjTCtIGaAqIApmZImZgqg");
        this.shape_29.setTransform(-812.1,1157.5,1.247,1.247);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#D84949").s().p("ACqEpQgpgSgegZIg+g3Ig8g5IAUggQAUgigDgRQgDgRghgiIgZAfIgZAkIgegqQhXh7gfhmQgLglgBgsQAAgUALgIQALgIAUAGQAnALAaATQDvC0BqEeQAJAXADAmQAFA0ghAAQgOAAgUgJg");
        this.shape_30.setTransform(-362.3,1133.1,1.247,1.247);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#F5CB7D").s().p("AjjC3IAjmfIGkAyIgiGfg");
        this.shape_31.setTransform(-265.9,1065.6,1.247,1.247);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#F5CB7D").s().p("AkQk4QAmgiAcgDQAcgCAuAcQA5AkA4A3QApAqA1BCQB2CRA2COQAKAYAHAcQAPA5gKAYQgKAYgxAeQiVmJlNkNg");
        this.shape_32.setTransform(-186.1,1010.3,1.247,1.247);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#F5CB7D").s().p("ABtFuQgwgZgvgpQgggegwg0IgKgLQgyAcgegDQgegDguglIgWgRQgegVgUAcIgWAaQghgLALgdQAEgLAFgXQAHgaAMgJQANgJAbAAQAaABAbAPQAPAJAeAXQAOANAIAEQANAHALgIIg8hlQgjg6gVgqQgYgygZhiQgShEA9gjQA3ggArgmQAQgOAQABQAOABAQANIBYBLQAxAsAgAjQCsC5BYDVQAZA+gFAQQgEARg0AjQg1AkgIAHQgdAYggABIgDAAQgcAAghgRgAgRBnQADARgWAiIgUAgIA8A5IA+A3QAeAZApASQBFAfgHhKQgDgmgJgXQhqkejvi0QgagTgngLQgUgGgLAIQgLAIAAAUQABAsALAlQAfBmBXB7IAeAqIAZgkIAZgfQAjAiADARg");
        this.shape_33.setTransform(-358.2,1127.6,1.247,1.247);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#D84949").s().p("Al+IJQgshQhFheQhFhfg/hCQhNhRhTg6IB7hTIO0qaQANgJALAAQALAAAOAJQA6AlA4A3QAsArA3BDQCVC1BHCtQAbBCgGASQgFASg5AoIwBLMQgdheg1hhgAjUCsIGkAyIAimfImkgyg");
        this.shape_34.setTransform(-267.7,1067,1.247,1.247);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#D84949").s().p("ACuE6QgqgSgggaQgbgXgmgjIg/g7IAWgjQAXglgDgSQgEgTgigjIg2BIIgggsQhaiCgehtQgLgoAAguQABgVAMgJQAMgJAUAGQArANAaASQD6C7BqEwQAKAaACAoQAEA5gjAAQgPAAgVgKg");
        this.shape_35.setTransform(-1143.9,1173.3,1.247,1.247);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#F5CB7D").s().p("Aj1DIIAtm9IG+AtIguG+g");
        this.shape_36.setTransform(-1040.1,1099,1.247,1.247);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#F5CB7D").s().p("AkblIQAqgmAegDQAdgDAwAdQA8AlA7A6QArAsA2BFQB6CZA3CXQAKAbAHAdQAOA8gKAbQgLAag1AhQiXmilckZg");
        this.shape_37.setTransform(-954.1,1038,1.247,1.247);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#F5CB7D").s().p("ABxGFQgygZgygrQgigggxg2IgLgLQg2AegfgCQgggDgwgnIgXgRQgfgVgWAdIgYAdQgSgGgFgKQgGgKAHgRIAKgkQAIgcANgKQANgLAeABQAbAAAcAPQAQAJAfAZQAPANAIAFQAOAHAMgJIg+hrQgkg9gVgtQgPghgNgsQgIgcgNg0QgRhJBAgnQA8gkAugpQASgQARABQAPABAQAOIBcBPQA0AuAhAkQCyDEBZDiQAaBBgGARQgFASg4AnIghAXQgUAOgNALQgeAZgiACIgFABQgeAAghgSgAgPBvQADASgZAlIgWAjIA/A7QAmAjAbAXQAgAaAqASQBJAhgGhQQgCgogKgaQhqkwj6i7QgagSgrgNQgUgGgMAJQgMAJgBAVQAAAuALAoQAeBtBaCCIAgAsIA2hIQAkAjAEATg");
        this.shape_38.setTransform(-1140,1167.3,1.247,1.247);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#D84949").s().p("AmhI2QguhVhGhiQhIhkhBhGQhQhVhXg8ISBs7QAOgJAMgBQALAAAPAJQA9AnA7A6QAtAtA5BGQCbDABHC3QAbBHgGATQgGATg9AsIxRMVQgchkg2hngAjlC8IG9AuIAtm+Im9gtg");
        this.shape_39.setTransform(-1042.1,1100.5,1.247,1.247);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#D84949").s().p("AkaEWQgPgQALgmQAPgyAdgxQANgXAXggIAng2QAIgLAJgDQAKgCANAIQALAGARAIIAdAMIBAg1IhVgtQBQhPA9guQBSg8BUgcQAbgIAKgBQAVgCAKAQQAHAMAAAUQAAASgFARQgSA4glA5QgdArgxA3QiSCoiZBQQglATguALQgOAEgLAAQgTAAgJgKg");
        this.shape_40.setTransform(-2145.9,1312.4,1.247,1.247);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#F5CB7D").s().p("Aj+DEIA9nBIHBA7Ig9HAg");
        this.shape_41.setTransform(-2077,1382.9,1.247,1.247);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#F5CB7D").s().p("AkXFJQgbgJgggsQGJjVDmmKQAuArAGAcQAHAcgaA5QgdBCgxBCQgnAyg9BAQiKCRiNBNQggARgeAKQghAMgXAAQgMAAgKgDg");
        this.shape_42.setTransform(-2027.7,1433.3,1.247,1.247);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#F5CB7D").s().p("AjaGMQgVgCg2g2IhChDQgeggAMg5QAIgsAXguQASgjAggvQAQgVApg2IgOgSQgogzAYg7QAFgNAQgdQAVglgCgMQgDgMghgYQgOgKgBgSQgBgSAMgLQAJgJAPgMQBJAcASA0QASAzgnBCQgQAagDAHQgCAGAAALIABAWQAcgYAzguQAsgoAggWQBJg1BjgzQBVgqA9BMQAdAlA6A2QAOANACAOQACAMgIASQgvBthcBrQirDLjEB4Qg/AngWAAIgCgBgAjOgnQgJACgIAMIgnA0QgXAggOAXQgdAwgOAzQgLAmAPAQQAOAPAngJQAugMAkgTQCbhQCQimQAyg4AcgrQAmg6ARg4QAGgRAAgRQAAgVgHgLQgKgQgVABQgLABgaAJQhUAchQA7Qg/AuhQBPIBUAuIg/A3IgdgNQgSgHgLgHQgKgFgIAAIgEAAg");
        this.shape_43.setTransform(-2138.8,1317.8,1.247,1.247);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#D84949").s().p("AAUJ6QgSgDgvgzIo+pLIgOgQQGNjXDkmLIBVBYIIHIUQAkAiACANQACAOgZAtQg7Bxh+CFQikCtihBaQg6AggUAAIgDAAgAjlDfIHBA7IA9nBInAg7g");
        this.shape_44.setTransform(-2080.2,1379.4,1.247,1.247);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#D84949").s().p("AkaEWQgPgQALgmQAOgxAegyQAWgmA1hHQAIgMAJgCQAKgCANAHQALAHARAHIAdANIBAg1IhVguQBShPA8gtQBSg8BTgcQAbgJAKgBQAWgBAJAQQAHAMAAAUQAAARgFARQgSA5glA5QgdAsgxA2QiUCpiXBOQgnAVgsAKQgOAEgLAAQgSAAgKgKg");
        this.shape_45.setTransform(-2425.6,1274.4,1.247,1.247);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F5CB7D").s().p("Aj/DDIA+nAIHAA7Ig9HAg");
        this.shape_46.setTransform(-2356.7,1344.8,1.247,1.247);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F5CB7D").s().p("AkXFJQgbgKgggrQGKjWDlmJQAuArAHAbQAGAcgaA6QgdBBgxBDQgnAxg9BBQiKCRiNBNQgfAQgfALQghAMgXAAQgMAAgKgDg");
        this.shape_47.setTransform(-2307.4,1395.3,1.247,1.247);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#F5CB7D").s().p("AjaGNQgVgDg2g2IhChDQgdgfALg5QAIgsAXguQASgkAgguQASgYAng0IgOgRQgog1AYg6QAFgNAQgdQAVglgCgMQgDgMghgYQgOgJgBgTQgBgSAMgLIAYgVQBJAdASAzQASAzgnBCIgKARQgGAJgDAIQgCAGABAKIAAAWIBPhGQAsgnAggXQBLg3BhgwQBVgrA9BMQAdAlA7A3QAOAMABAOQACANgIARQguBshdBsQiqDLjFB5Qg/AmgWAAIgCAAgAjOgnQgJACgIAMQg1BFgXAmQgdAygOAxQgLAmAPAQQAOAPAngJQArgKAngVQCahOCRinQAxg4AdgsQAmg5ARg5QAGgRAAgRQAAgUgHgMQgKgQgVABQgLABgaAJQhUAchQA8Qg+AthRBPIBUAuIg/A3IgdgNQgRgHgMgHQgKgFgHAAIgFAAg");
        this.shape_48.setTransform(-2418.5,1279.7,1.247,1.247);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#D84949").s().p("AAUJ6QgSgDgvgzIo+pLIgOgQQGMjXDlmLIJcJsQAkAiACANQACAOgZAtQg9B0h8CDQikCtihBZQg6AggUAAIgDAAgAjlDfIHBA7IA9nBInAg6g");
        this.shape_49.setTransform(-2359.9,1341.4,1.247,1.247);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#D84949").s().p("AiNFzQgUgHgGgoQgHg3AFg1QACgaAIgnIAMhCQAFgbAbADIAgABIAggBIAihLIhggGQAohqAlhDQAvhZBAg9QAUgTAKgFQASgKAQAKQALAHAJATQAHAQADARQAHA7gKBEQgHAzgVBIQg+DUhoCKQgcAkgiAaQgXATgRAAQgGAAgFgCg");
        this.shape_50.setTransform(-287,1251.4,1.247,1.247);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#F5CB7D").s().p("AkbiSIGviLICIGxImwCJg");
        this.shape_51.setTransform(-195.2,1286.1,1.247,1.247);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#F5CB7D").s().p("AjJGMQEKlpApnFQA8ATARAWQASAXABA/QABBIgQBQQgNBAgcBSQhAC+hfCCQgUAagZAZQgmAlgdAEIgHAAQgbAAgqgXg");
        this.shape_52.setTransform(-127.7,1310.7,1.247,1.247);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#F5CB7D").s().p("AgyGmIhYghQgWgJgOgUQgLgQgHgbQgLgrACg0QABgnAJg4IATheIgUgKQg6gcgEhAQgBgSADgdQAEgqgIgKQgHgKgpgHQgQgDgJgQQgJgQAHgQIAMgcQBPgFAmAmQAmAngIBNIgCATQgCALABAIQABAGAFAJIAKAUIAphhQAYg2ATgiQAvhSBBhWQA7hLBYAsQAqAVBMAZQARAGAIALQAHALAAATQAEB1glCLQhFD+iBDCQgrBAgUAHQgDABgGAAQgZAAg4gVgAiOA8IgMBCQgIAngCAaQgFA1AHA3QAGAoAUAHQAUAIAfgZQAigaAcgkQBoiKA+jUQAVhIAHgzQAKhEgHg7QgDgRgHgQQgJgTgLgHQgQgKgSAKQgKAFgUATQhAA9gvBZQglBDgoBqIBgAGIgiBLIggABIgggBIgEAAQgXAAgFAYg");
        this.shape_53.setTransform(-287.7,1254.5,1.247,1.247);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#D84949").s().p("ADGIjIr/kiIgUgJQENlpAonGIB0ArIK1EHQAvARAIALQAHAMgCAzQgHCEg5CnQhNDkhrCUQgpA5gSAFIgIABQgWAAg2gVgAj8iCICHGwIGviKIiHmwg");
        this.shape_54.setTransform(-199,1284,1.247,1.247);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#D84949").s().p("AjPFTQgSgMABgoQACg0AQg2QAIgaAOglIAZg9QAFgOAIgEQAIgFAPAEQAUAGAqAGIAwhDIhdgXQA6hgAwg8QBBhOBLgwQAWgPALgDQAVgHANANQAKAKAEATQAFARgBASQgEA7gWBBQgRAxgiBDQhmDFh/BzQgiAdgnAVQgVALgPAAQgKAAgHgEg");
        this.shape_55.setTransform(-531.9,1305.3,1.247,1.247);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F5CB7D").s().p("Aj6jGIHBg1IA0HBInCA2g");
        this.shape_56.setTransform(-448.1,1356.7,1.247,1.247);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#F5CB7D").s().p("AjCGFQgdgCgpgiQFJkwB9m2QA4AeANAaQAMAZgKA/QgMBGggBMQgZA9grBKQhkCxh0BsQgZAWgcATQgqAcgcAAIgEgBg");
        this.shape_57.setTransform(-387.4,1393.2,1.247,1.247);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F5CB7D").s().p("Ai1GHIhQgxQgVgNgJgWQgIgTgCgbQgCgtALgyQAIgnAUg1IAkhXIgRgNQg0gpAIg/QADgSAIgbQALgpgFgLQgFgMgngPQgPgFgGgSQgFgRAJgOIARgaQBOAKAfAtQAeAtgWBKQgKAdAAAIQgBAGADAKIAGAVQAWgeAlg5QAigxAZgeQA8hGBRhJQBJg+BNA7QAmAdBFAmQARAJAFANQAFAMgDATQgTB1g/CAQhzDsihCmQg3A4gUACIgDABQgWAAg+glgAi+AAQgIAFgFANIgZA+QgOAlgIAZQgQA3gCA0QgBAnASAMQASAMAjgTQAngVAigdQB/hyBmjGQAihDARgxQAWhAAEg7QABgSgFgRQgEgUgKgJQgNgNgVAGQgLAEgWAOQhLAwg/BOQgyA8g6BgIBdAYIgwBDQgqgGgUgGQgHAAgGAAQgGAAgEAAg");
        this.shape_58.setTransform(-526.5,1310.1,1.247,1.247);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#D84949").s().p("ABfI/IrNm6QFMkwB9m3IBqBAIJ3GFQArAZAGANQAFANgMAyQggB9hYCdQh1DRiFB9Qg0AxgTABIgCABQgTAAg5gkgAjciwIAzHCIHCg2Ig0nBg");
        this.shape_59.setTransform(-451.9,1353.9,1.247,1.247);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#D84949").s().p("AjPFTQgSgMABgnQACg1AQg2QANgrAihRQAFgOAIgEQAIgFAPAFQAMADATADIAfAFIAwhCIhdgYQA6hgAwg8QBBhOBLgwQAXgPAKgDQAUgHAOANQAKAKAEATQAFARgBASQgEA7gWBBQgRAxgiBDQhlDEiAB0QgiAegnAUQgVALgPAAQgKAAgHgEg");
        this.shape_60.setTransform(-763.2,1349.3,1.247,1.247);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#F5CB7D").s().p("Aj6jGIHBg1IA0HBInCA2g");
        this.shape_61.setTransform(-679.4,1400.7,1.247,1.247);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#F5CB7D").s().p("AjCGFQgdgBgpgjQFIkwB+m1QA4AdANAaQAMAagKA+QgMBHggBMQgZA8grBKQhiCvh2BuQgcAZgZAQQgqAbgcAAIgEAAg");
        this.shape_62.setTransform(-618.7,1437.3,1.247,1.247);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#F5CB7D").s().p("Ai1GHQglgWgrgcQgVgNgJgWQgIgSgCgcQgCgsALgzQAIgmAUg1IAkhXIgRgOQg0goAIg/QADgTAIgbQALgpgFgLQgFgLgngPQgPgGgGgRQgGgSAKgOIARgZQBOAJAfAuQAeAtgXBJIgFATQgEALAAAHQgBAGADAKIAGAWIA7hYQAigxAZgdQA5hEBUhLQAjgfAmgBQAmgBAnAeQAmAcBFAnQARAJAFANQAFALgDATQgTB1g/CBQhzDsihCmQg3A3gVADIgCABQgWAAg+glgAi+AAQgIAEgFAOQgiBRgNArQgQA2gCA1QgBAnASAMQASALAjgSQAngUAigeQCAh0BljEQAihDARgxQAWhBAEg7QABgSgFgRQgEgTgKgKQgOgNgUAHQgKADgXAPQhLAwg/BOQgyA8g6BgIBdAYIgwBCIgfgFQgTgDgMgDQgHAAgGAAQgGAAgEAAg");
        this.shape_63.setTransform(-757.7,1354.2,1.247,1.247);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#D84949").s().p("ABfI/IrMm6QFMkwB8m3IBqBAIJ3GFQAsAaAFAMQAFANgMAyQgfB8hYCeQh2DRiFB9QgzAxgUACIgBAAQgTAAg6gkgAjbiwIAzHCIHBg2IgznBg");
        this.shape_64.setTransform(-683.2,1398,1.247,1.247);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#D84949").s().p("AjPFTQgSgMABgnQACg1AQg2QANgqAihSQAFgNAIgFQAJgEAOAEQAMADATADIAfAFIAwhCIhdgYQA7hhAvg7QBBhOBLgwQAWgOALgEQAVgHANANQAKAKAEATQAFARgBASQgDA7gXBBQgRAwgiBEQhmDGh/ByQghAdgoAVQgVALgPAAQgKAAgHgEg");
        this.shape_65.setTransform(-1848.8,1268.4,1.247,1.247);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#F5CB7D").s().p("Aj6jFIHBg2IA0HCInCA1g");
        this.shape_66.setTransform(-1765,1319.8,1.247,1.247);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#F5CB7D").s().p("AjCGFQgdgCgpgiQFIkxB9m1QA4AeANAaQANAagLA+QgMBGggBMQgZA8grBLQhiCvh2BtQgbAZgaARQgpAcgcAAIgEgBg");
        this.shape_67.setTransform(-1704.2,1356.4,1.247,1.247);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#F5CB7D").s().p("Ai1GHIhQgxQgVgNgJgWQgIgTgCgbQgCgtALgyQAJgoATg0QALgdAZg6IgRgOQg0gnAIhAQADgQAIgeQALgpgFgLQgFgLgngPQgPgGgGgRQgFgRAJgOIASgaQBOAKAeAtQAeAtgWBKQgJAcgBAJQgBAGADAKIAGAVQAWgeAlg5QAigxAZgeQA6hEBThLQBJg+BNA7QAlAcBGAnQARAJAFANQAFAMgDATQgSBxg/CEQh1DtigClQg3A3gUADIgDABQgWAAg+glgAi+AAQgIAFgFANQgiBSgNAqQgQA2gCA1QgBAnASAMQATALAigSQAogVAhgdQB/hyBmjGQAihEARgwQAXhBADg7QABgSgFgRQgEgTgKgKQgNgNgVAHQgLAEgWAOQhLAwg/BOQgxA7g7BhIBdAYIgwBCIgfgFQgTgDgMgDQgHAAgFAAQgGAAgFAAg");
        this.shape_68.setTransform(-1843.3,1273.2,1.247,1.247);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#D84949").s().p("ABfJAIq7mvIgRgMQFLkwB9m3ILhHFQArAaAFAMQAGANgNAyQgeB7hZCfQh2DRiEB9Qg0AxgTACIgCAAQgTAAg5gjgAjcivIAzHBIHCg1Ig0nCg");
        this.shape_69.setTransform(-1768.7,1317,1.247,1.247);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#D84949").s().p("AkOEVQgPgPAKgmQAOgzAbgvQANgXAVgfIAlg1QAIgMAJgCQAJgDANAHQAJAGAwAUIA9g1IhUgsQBMhOA7guQBPg7BSgeQAagJAKAAQAVgCAKAPQAHAMAAATQAAASgEAQQgQA4gkA5QgbAqgvA2QiNCoiTBQQgmAUgqALQgPAEgLAAQgRAAgJgJg");
        this.shape_70.setTransform(-1031.1,1304.1,1.247,1.247);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#F5CB7D").s().p("Aj1DEIAym5IG5AzIgyG4g");
        this.shape_71.setTransform(-962.3,1372,1.247,1.247);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#F5CB7D").s().p("AkKFHQgcgJgfgqQF8jXDYmFQAvApAHAbQAGAcgYA4QgbBBgvBBQgkAyg7BAQiFCRiHBMQgfARgdALQghAMgXAAQgLAAgJgCg");
        this.shape_72.setTransform(-913,1420.7,1.247,1.247);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#F5CB7D").s().p("AjNGEQgUgCg2g0IhChBQgegeAKg4QAHgrAWguQARgiAegvQARgXAlgzIgOgRQgogxAWg7QAGgSAOgYQAUgkgDgMQgCgMgigXQgNgJgCgSQgBgRALgMIAXgUQBIAaATAyQATAyglBCQgPAYgDAJQgCAFABAKIABAWIBMhGQAqgnAfgXQBEg0BigzQBSgsA+BKQAdAkA6A0QAOAMACAOQACAMgHASQgrBohZBtQikDLi8B4Qg+AmgVAAIgCAAgAjKgmQgJACgIAMIglAzQgVAfgNAXQgbAvgOAzQgKAmAPAPQAPAPAlgKQAqgLAmgUQCVhQCLimQAvg4AbgqQAkg5AQg4QAEgQAAgSQAAgTgHgMQgKgPgVACQgKAAgaAJQhSAehNA7Qg9AuhMBOIBUAsIg9A3QgwgUgJgGQgKgFgHAAIgFABg");
        this.shape_73.setTransform(-1024.1,1309.7,1.247,1.247);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#D84949").s().p("AAhJsQgSgCgvgxIpMpGQGBjZDXmGIBVBVIIGIBQAkAhACANQACANgWAtQg6Byh3CCQifCtiaBZQg4AhgUAAIgCgBgAjbDeIG5AyIAym4Im4gyg");
        this.shape_74.setTransform(-965.5,1368.7,1.247,1.247);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#D84949").s().p("Aj8D/QAGgvAQglQAPggAXguIAnhOIAnALQAqANARgIQARgIAXgrIhUggIAhgqQBkh7Bhg8QAjgWAsgMQAVgGAMAJQALAJAAAWQAAAugKAcQhtEkkHC8QgYARgkANQgTAHgNAAQgnAAAHg7g");
        this.shape_75.setTransform(-1332.6,1200.8,1.247,1.247);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#F5CB7D").s().p("AkEizIG4hRIBRG4Im4BRg");
        this.shape_76.setTransform(-1232.2,1279.8,1.247,1.247);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#F5CB7D").s().p("AjfFoQgcgDgugqQFnkGCsmcQAxAdALAcQALAcgPA2QgSBEgnBIQgfA3gzBGQh0Chh/BfQgYASgYANQgyAcgcAAIgFAAg");
        this.shape_77.setTransform(-1149.3,1344.8,1.247,1.247);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#F5CB7D").s().p("AjsFoIgggaQgTgPgNgJQg/grAQhSQAKg3Acg7QAUgrAmg9IAIgOQgsgrgGgfQgGgfAXg5IAKgbQAMgkgigNIgjgOQABgTAIgIQAJgIARABIAmAAQAdAAANAJQAOAKAIAdQAHAagGAfQgEASgPAlQgJASgCAJQgEAPANAJIBVhZQAyg0AmghQAoglBfg2QBBgkA4AzQA0AwAzAgQAUANAEAQQADAOgJAUIgxBuQgeBBgaAqQiJDejBCWQg3ArgTAAQgSAAg1grgAj9AsQgXAugPAhQgQAkgGAwQgKBPBKgcQAkgNAYgQQEHi8BtkkQAKgdAAguQAAgVgLgJQgMgJgVAGQgsAMgjAWQhfA7hmB7IghArIBUAgQgXAsgRAJQgRAIgqgNIgngMIgnBMg");
        this.shape_78.setTransform(-1325,1206.8,1.247,1.247);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#D84949").s().p("AE4MPQgTAAg8gvIwqtIQBYg3BUhRQBFhEBLhfQBMhhAxhSQA8hkAhhkIB/BkQGsFTIwG2QANAKAEAMQADALgFAQQgUBFgnBKQgfA4g0BKQiLDJidB4Qg7AtgVAAIgBAAgAj2ilIBRG4IG4hRIhRm4g");
        this.shape_79.setTransform(-1234,1278,1.247,1.247);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},4).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},4).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},5).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},5).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},5).to({state:[]},4).wait(67));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},12).to({_off:true},16).wait(140));

        // Layer 11 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_23 = new cjs.Graphics().p("EkPSA6nMBMXh1NMHSOAAAMhMXB1Ng");
        var mask_graphics_24 = new cjs.Graphics().p("EkPPA6nMBMRh1NMHSOAAAMhMRB1Ng");
        var mask_graphics_25 = new cjs.Graphics().p("EkPMA6nMBMLh1NMHSOAAAMhMLB1Ng");
        var mask_graphics_26 = new cjs.Graphics().p("EkPJA6nMBMFh1NMHSOAAAMhMFB1Ng");
        var mask_graphics_27 = new cjs.Graphics().p("EkPGA6nMBL/h1NMHSOAAAMhL/B1Ng");
        var mask_graphics_28 = new cjs.Graphics().p("EkPDA6nMBL5h1NMHSOAAAMhL5B1Ng");
        var mask_graphics_29 = new cjs.Graphics().p("EkPAA6mMBLzh1LMHSOAAAMhLzB1Lg");
        var mask_graphics_30 = new cjs.Graphics().p("EkO9A6mMBLth1LMHSOAAAMhLtB1Lg");
        var mask_graphics_31 = new cjs.Graphics().p("EkO5A6mMBLlh1LMHSOAAAMhLlB1Lg");
        var mask_graphics_32 = new cjs.Graphics().p("EkO2A6mMBLfh1LMHSOAAAMhLfB1Lg");
        var mask_graphics_33 = new cjs.Graphics().p("EkOzA6mMBLZh1LMHSOAAAMhLZB1Lg");
        var mask_graphics_34 = new cjs.Graphics().p("EkOwA6mMBLTh1LMHSOAAAMhLTB1Lg");
        var mask_graphics_35 = new cjs.Graphics().p("EkOtA6mMBLNh1LMHSOAAAMhLNB1Lg");
        var mask_graphics_36 = new cjs.Graphics().p("EkOqA6mMBLHh1LMHSOAAAMhLHB1Lg");
        var mask_graphics_37 = new cjs.Graphics().p("EkOnA6mMBLBh1LMHSOAAAMhLBB1Lg");
        var mask_graphics_38 = new cjs.Graphics().p("EkOkA6lMBK7h1JMHSOAAAMhK7B1Jg");
        var mask_graphics_39 = new cjs.Graphics().p("EkOhA6lMBK1h1JMHSOAAAMhK1B1Jg");
        var mask_graphics_40 = new cjs.Graphics().p("EkOeA6lMBKvh1JMHSOAAAMhKvB1Jg");
        var mask_graphics_41 = new cjs.Graphics().p("EkObA6lMBKph1JMHSOAAAMhKpB1Jg");
        var mask_graphics_42 = new cjs.Graphics().p("EkOYA6lMBKjh1JMHSOAAAMhKjB1Jg");
        var mask_graphics_43 = new cjs.Graphics().p("EkOVA6lMBKdh1JMHSOAAAMhKdB1Jg");
        var mask_graphics_44 = new cjs.Graphics().p("EkOSA6lMBKXh1JMHSOAAAMhKXB1Jg");
        var mask_graphics_45 = new cjs.Graphics().p("EkOPA6lMBKRh1JMHSOAAAMhKRB1Jg");
        var mask_graphics_46 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_51 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_52 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_53 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_54 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_55 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_56 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_57 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_58 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_59 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_60 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_61 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_62 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_63 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_64 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_65 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_66 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_67 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_68 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_75 = new cjs.Graphics().p("EkOMA6kMBKLh1HMHSOAAAMhKLB1Hg");
        var mask_graphics_76 = new cjs.Graphics().p("EkOGA6lMBJ/h1JMHSOAAAMhJ/B1Jg");
        var mask_graphics_77 = new cjs.Graphics().p("EkOBA6lMBJ1h1JMHSOAAAMhJ1B1Jg");
        var mask_graphics_78 = new cjs.Graphics().p("EkN7A6lMBJph1JMHSOAAAMhJpB1Jg");
        var mask_graphics_79 = new cjs.Graphics().p("EkN2A6lMBJfh1JMHSOAAAMhJfB1Jg");
        var mask_graphics_80 = new cjs.Graphics().p("EkNwA6lMBJTh1JMHSOAAAMhJTB1Jg");
        var mask_graphics_81 = new cjs.Graphics().p("EkNrA6lMBJJh1JMHSOAAAMhJJB1Jg");
        var mask_graphics_82 = new cjs.Graphics().p("EkNmA6mMBI/h1LMHSOAAAMhI/B1Lg");
        var mask_graphics_83 = new cjs.Graphics().p("EkNgA6mMBIzh1LMHSOAAAMhIzB1Lg");
        var mask_graphics_84 = new cjs.Graphics().p("EkNbA6mMBIph1LMHSOAAAMhIpB1Lg");
        var mask_graphics_85 = new cjs.Graphics().p("EkNVA6mMBIdh1LMHSOAAAMhIdB1Lg");
        var mask_graphics_86 = new cjs.Graphics().p("EkNQA6mMBITh1LMHSOAAAMhITB1Lg");
        var mask_graphics_87 = new cjs.Graphics().p("EkNKA6mMBIHh1LMHSOAAAMhIHB1Lg");
        var mask_graphics_88 = new cjs.Graphics().p("EkNFA6mMBH9h1LMHSOAAAMhH9B1Lg");
        var mask_graphics_89 = new cjs.Graphics().p("EkNAA6mMBHzh1LMHSOAAAMhHzB1Lg");
        var mask_graphics_90 = new cjs.Graphics().p("EkM6A6mMBHnh1LMHSOAAAMhHnB1Lg");
        var mask_graphics_91 = new cjs.Graphics().p("EkM1A6nMBHdh1NMHSOAAAMhHdB1Ng");
        var mask_graphics_92 = new cjs.Graphics().p("EkMvA6nMBHRh1NMHSOAAAMhHRB1Ng");
        var mask_graphics_93 = new cjs.Graphics().p("EkMqA6nMBHHh1NMHSOAAAMhHHB1Ng");
        var mask_graphics_94 = new cjs.Graphics().p("EkMlA6nMBG9h1NMHSOAAAMhG9B1Ng");
        var mask_graphics_95 = new cjs.Graphics().p("EkMfA6nMBGxh1NMHSOAAAMhGxB1Ng");
        var mask_graphics_96 = new cjs.Graphics().p("EkMaA6nMBGnh1NMHSOAAAMhGnB1Ng");
        var mask_graphics_97 = new cjs.Graphics().p("EkMUA6nMBGbh1NMHSOAAAMhGbB1Ng");
        var mask_graphics_98 = new cjs.Graphics().p("EkMPA6nMBGRh1NMHSOAAAMhGRB1Ng");
        var mask_graphics_99 = new cjs.Graphics().p("EkMKA6nMBGHh1NMHSOAAAMhGHB1Ng");
        var mask_graphics_100 = new cjs.Graphics().p("EkMEA6nMBF7h1NMHSOAAAMhF7B1Ng");
        var mask_graphics_101 = new cjs.Graphics().p("EkL/A6nMBFxh1NMHSOAAAMhFxB1Ng");
        var mask_graphics_102 = new cjs.Graphics().p("EkL5A6nMBFlh1NMHSOAAAMhFlB1Ng");
        var mask_graphics_103 = new cjs.Graphics().p("EkL0A6nMBFbh1NMHSOAAAMhFbB1Ng");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_graphics_23,x:-4568.6,y:1180.2}).wait(1).to({graphics:mask_graphics_24,x:-4531.4,y:1180.2}).wait(1).to({graphics:mask_graphics_25,x:-4494.2,y:1180.2}).wait(1).to({graphics:mask_graphics_26,x:-4457,y:1180.2}).wait(1).to({graphics:mask_graphics_27,x:-4419.8,y:1180.2}).wait(1).to({graphics:mask_graphics_28,x:-4382.6,y:1180.2}).wait(1).to({graphics:mask_graphics_29,x:-4345.4,y:1180.2}).wait(1).to({graphics:mask_graphics_30,x:-4308.2,y:1180.2}).wait(1).to({graphics:mask_graphics_31,x:-4271,y:1180.2}).wait(1).to({graphics:mask_graphics_32,x:-4233.8,y:1180.2}).wait(1).to({graphics:mask_graphics_33,x:-4196.5,y:1180.2}).wait(1).to({graphics:mask_graphics_34,x:-4159.3,y:1180.2}).wait(1).to({graphics:mask_graphics_35,x:-4122.1,y:1180.2}).wait(1).to({graphics:mask_graphics_36,x:-4084.9,y:1180.2}).wait(1).to({graphics:mask_graphics_37,x:-4047.7,y:1180.2}).wait(1).to({graphics:mask_graphics_38,x:-4010.5,y:1180.2}).wait(1).to({graphics:mask_graphics_39,x:-3973.3,y:1180.2}).wait(1).to({graphics:mask_graphics_40,x:-3936.1,y:1180.2}).wait(1).to({graphics:mask_graphics_41,x:-3898.9,y:1180.2}).wait(1).to({graphics:mask_graphics_42,x:-3861.6,y:1180.2}).wait(1).to({graphics:mask_graphics_43,x:-3824.4,y:1180.2}).wait(1).to({graphics:mask_graphics_44,x:-3787.2,y:1180.2}).wait(1).to({graphics:mask_graphics_45,x:-3750,y:1180.2}).wait(1).to({graphics:mask_graphics_46,x:-3712.8,y:1180.2}).wait(5).to({graphics:mask_graphics_51,x:-3712.8,y:1180.2}).wait(1).to({graphics:mask_graphics_52,x:-3657.3,y:1180.2}).wait(1).to({graphics:mask_graphics_53,x:-3601.7,y:1180.2}).wait(1).to({graphics:mask_graphics_54,x:-3546.2,y:1180.2}).wait(1).to({graphics:mask_graphics_55,x:-3490.6,y:1180.2}).wait(1).to({graphics:mask_graphics_56,x:-3435.1,y:1180.2}).wait(1).to({graphics:mask_graphics_57,x:-3379.6,y:1180.2}).wait(1).to({graphics:mask_graphics_58,x:-3324,y:1180.2}).wait(1).to({graphics:mask_graphics_59,x:-3268.5,y:1180.2}).wait(1).to({graphics:mask_graphics_60,x:-3212.9,y:1180.2}).wait(1).to({graphics:mask_graphics_61,x:-3157.4,y:1180.2}).wait(1).to({graphics:mask_graphics_62,x:-3101.8,y:1180.2}).wait(1).to({graphics:mask_graphics_63,x:-3046.3,y:1180.2}).wait(1).to({graphics:mask_graphics_64,x:-2990.8,y:1180.2}).wait(1).to({graphics:mask_graphics_65,x:-2935.2,y:1180.2}).wait(1).to({graphics:mask_graphics_66,x:-2879.7,y:1180.2}).wait(1).to({graphics:mask_graphics_67,x:-2824.1,y:1180.2}).wait(1).to({graphics:mask_graphics_68,x:-2768.6,y:1180.2}).wait(7).to({graphics:mask_graphics_75,x:-2768.6,y:1180.2}).wait(1).to({graphics:mask_graphics_76,x:-2726.6,y:1180.2}).wait(1).to({graphics:mask_graphics_77,x:-2684.5,y:1180.2}).wait(1).to({graphics:mask_graphics_78,x:-2642.5,y:1180.2}).wait(1).to({graphics:mask_graphics_79,x:-2600.5,y:1180.2}).wait(1).to({graphics:mask_graphics_80,x:-2558.4,y:1180.2}).wait(1).to({graphics:mask_graphics_81,x:-2516.4,y:1180.2}).wait(1).to({graphics:mask_graphics_82,x:-2474.4,y:1180.2}).wait(1).to({graphics:mask_graphics_83,x:-2432.4,y:1180.2}).wait(1).to({graphics:mask_graphics_84,x:-2390.3,y:1180.2}).wait(1).to({graphics:mask_graphics_85,x:-2348.3,y:1180.2}).wait(1).to({graphics:mask_graphics_86,x:-2306.3,y:1180.2}).wait(1).to({graphics:mask_graphics_87,x:-2264.2,y:1180.2}).wait(1).to({graphics:mask_graphics_88,x:-2222.2,y:1180.2}).wait(1).to({graphics:mask_graphics_89,x:-2180.2,y:1180.2}).wait(1).to({graphics:mask_graphics_90,x:-2138.1,y:1180.2}).wait(1).to({graphics:mask_graphics_91,x:-2096.1,y:1180.2}).wait(1).to({graphics:mask_graphics_92,x:-2054.1,y:1180.2}).wait(1).to({graphics:mask_graphics_93,x:-2012.1,y:1180.2}).wait(1).to({graphics:mask_graphics_94,x:-1970,y:1180.2}).wait(1).to({graphics:mask_graphics_95,x:-1928,y:1180.2}).wait(1).to({graphics:mask_graphics_96,x:-1886,y:1180.2}).wait(1).to({graphics:mask_graphics_97,x:-1843.9,y:1180.2}).wait(1).to({graphics:mask_graphics_98,x:-1801.9,y:1180.2}).wait(1).to({graphics:mask_graphics_99,x:-1759.9,y:1180.2}).wait(1).to({graphics:mask_graphics_100,x:-1717.8,y:1180.2}).wait(1).to({graphics:mask_graphics_101,x:-1675.8,y:1180.2}).wait(1).to({graphics:mask_graphics_102,x:-1633.8,y:1180.2}).wait(1).to({graphics:mask_graphics_103,x:-1591.7,y:1180.2}).wait(65));

        // 图层 8
        this.instance_3 = new lib.vdwvwewe();
        this.instance_3.setTransform(-1568.7,1166.1,1,1,0,0,0,1359.7,83.8);
        this.instance_3._off = true;

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(130).to({alpha:0},14).wait(1));

        // Layer 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_23 = new cjs.Graphics().p("EjpHA6nMAAAh1NMHSPAAAMAAAB1Ng");
        var mask_1_graphics_24 = new cjs.Graphics().p("Ejt8B5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_25 = new cjs.Graphics().p("Ejq/B5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_26 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_27 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_28 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_29 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_30 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_31 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_32 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_33 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_34 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_35 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_36 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_37 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_38 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_39 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_40 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_41 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_42 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_43 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_44 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_45 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_46 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_47 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_48 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_49 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_50 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_51 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_52 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_53 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_54 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_55 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_56 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_57 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_58 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_59 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_60 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_61 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_62 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_63 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_64 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_65 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_66 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_67 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_68 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_69 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_70 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_71 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_72 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_73 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_74 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_75 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_76 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_77 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_78 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_79 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_80 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_81 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_82 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_83 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_84 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_85 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_86 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_87 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_88 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_89 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_90 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_91 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_92 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_93 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_94 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_95 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_96 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_97 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_98 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_99 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_100 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSOAAAMAAAB1Pg");
        var mask_1_graphics_101 = new cjs.Graphics().p("EjpGB5gMAAAh1PMHSNAAAMAAAB1Pg");
        var mask_1_graphics_102 = new cjs.Graphics().p("EjpHB5gMAAAh1PMHSPAAAMAAAB1Pg");
        var mask_1_graphics_103 = new cjs.Graphics().p("EjpGA6nMAAAh1NMHSNAAAMAAAB1Ng");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_1_graphics_23,x:-1591.7,y:1180.2}).wait(1).to({graphics:mask_1_graphics_24,x:-1523,y:777.7}).wait(1).to({graphics:mask_1_graphics_25,x:-1504,y:777.7}).wait(1).to({graphics:mask_1_graphics_26,x:-1478.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_27,x:-1440.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_28,x:-1402.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_29,x:-1364.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_30,x:-1326.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_31,x:-1289.1,y:777.7}).wait(1).to({graphics:mask_1_graphics_32,x:-1251.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_33,x:-1213.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_34,x:-1175.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_35,x:-1137.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_36,x:-1099.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_37,x:-1062.1,y:777.7}).wait(1).to({graphics:mask_1_graphics_38,x:-1024.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_39,x:-986.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_40,x:-948.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_41,x:-910.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_42,x:-872.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_43,x:-835,y:777.7}).wait(1).to({graphics:mask_1_graphics_44,x:-797.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_45,x:-759.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_46,x:-721.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_47,x:-683.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_48,x:-645.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_49,x:-608,y:777.7}).wait(1).to({graphics:mask_1_graphics_50,x:-570.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_51,x:-532.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_52,x:-494.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_53,x:-456.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_54,x:-418.8,y:777.7}).wait(1).to({graphics:mask_1_graphics_55,x:-381,y:777.7}).wait(1).to({graphics:mask_1_graphics_56,x:-343.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_57,x:-305.3,y:777.7}).wait(1).to({graphics:mask_1_graphics_58,x:-267.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_59,x:-229.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_60,x:-191.8,y:777.7}).wait(1).to({graphics:mask_1_graphics_61,x:-154,y:777.7}).wait(1).to({graphics:mask_1_graphics_62,x:-116.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_63,x:-78.3,y:777.7}).wait(1).to({graphics:mask_1_graphics_64,x:-40.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_65,x:-2.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_66,x:35.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_67,x:73,y:777.7}).wait(1).to({graphics:mask_1_graphics_68,x:110.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_69,x:148.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_70,x:186.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_71,x:224.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_72,x:262.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_73,x:300,y:777.7}).wait(1).to({graphics:mask_1_graphics_74,x:337.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_75,x:375.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_76,x:413.5,y:777.7}).wait(1).to({graphics:mask_1_graphics_77,x:451.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_78,x:489.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_79,x:527,y:777.7}).wait(1).to({graphics:mask_1_graphics_80,x:564.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_81,x:602.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_82,x:640.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_83,x:678.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_84,x:716.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_85,x:754.1,y:777.7}).wait(1).to({graphics:mask_1_graphics_86,x:791.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_87,x:829.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_88,x:867.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_89,x:905.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_90,x:943.2,y:777.7}).wait(1).to({graphics:mask_1_graphics_91,x:981.1,y:777.7}).wait(1).to({graphics:mask_1_graphics_92,x:1018.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_93,x:1056.7,y:777.7}).wait(1).to({graphics:mask_1_graphics_94,x:1094.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_95,x:1132.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_96,x:1170.3,y:777.7}).wait(1).to({graphics:mask_1_graphics_97,x:1208.1,y:777.7}).wait(1).to({graphics:mask_1_graphics_98,x:1245.9,y:777.7}).wait(1).to({graphics:mask_1_graphics_99,x:1283.8,y:777.7}).wait(1).to({graphics:mask_1_graphics_100,x:1321.6,y:777.7}).wait(1).to({graphics:mask_1_graphics_101,x:1359.4,y:777.7}).wait(1).to({graphics:mask_1_graphics_102,x:1397.3,y:777.7}).wait(1).to({graphics:mask_1_graphics_103,x:1435.1,y:1180.2}).wait(65));

        // Layer 2
        this.instance_4 = new lib.degergerre();
        this.instance_4.setTransform(-1192.3,693.4,1,1,0,0,0,1832.4,589.8);
        this.instance_4.alpha = 0;

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},12).wait(91).to({_off:true},1).wait(64));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3024.7,916.3,2922.3,569.7);


    (lib.brfeeger = function() {
        this.initialize();

        // Layer 2
        this.instance = new lib.vegeger();
        this.instance.setTransform(74,58.3,1,1,0,0,0,40.8,23.8);

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#814320").ss(3).p("AAzAYIgBACQgFAMgMAFQgMAEgLgGIgugYQgLgGgEgLQgEgLAFgMIABgCQAFgMANgFQALgEAMAGIAtAYQALAFAEALQAEAMgFAMg");
        this.shape.setTransform(139.4,61.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#136FB2").s().p("AAKApIgugYQgLgGgEgLQgEgLAFgMIABgCQAFgMANgFQALgEAMAGIAtAYQALAFAEALQAEAMgFAMIgBACQgFAMgMAFQgFABgFAAQgHAAgGgDg");
        this.shape_1.setTransform(139.4,61.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#814320").ss(3).p("AAzAYIgBACQgGAMgLAFQgMAEgMgGIgtgYQgLgFgEgMQgEgLAFgLIABgDQAFgMANgFQALgEAMAGIAtAYQALAGAEAKQAFAMgGAMg");
        this.shape_2.setTransform(117.9,110.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#136FB2").s().p("AAJApIgtgYQgLgFgEgMQgEgLAFgLIABgDQAFgMANgFQALgEAMAGIAtAYQALAGAEAKQAFAMgGAMIgBACQgGAMgLAFQgGACgFAAQgGAAgHgEg");
        this.shape_3.setTransform(117.9,110.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#814320").ss(3).p("AB8jDIi7GlQgEAJgIACQgJAEgIgEIgVgLQgIgEgDgJQgCgIADgJIC6mlQAEgIAJgEQAJgDAIAFIAVAKQAIAFADAIQADAIgEAJg");
        this.shape_4.setTransform(129.4,85.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#136FB2").s().p("AhcDtIgVgLQgIgEgDgJQgCgIADgJIC6mlQAEgIAJgEQAJgCAIADIAVALQAIAFADAIQADAJgEAIIi7GlQgEAJgIACIgHACQgFAAgFgCg");
        this.shape_5.setTransform(129.4,85.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#814320").ss(3).p("AA0AAQAEAMgFALIgBADQgFAMgMAFQgNAEgLgGIgtgYQgLgGgEgLQgEgLAFgLIABgDQAFgMAMgFQAMgEALAGIAuAYQALAGAEAKg");
        this.shape_6.setTransform(27,4.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#136FB2").s().p("AAJApIgtgYQgLgGgEgLQgEgLAFgLIABgDQAFgMAMgEQAMgFALAGIAuAYQALAFAEALQAEAMgFALIgBADQgFAMgMAEQgGACgFAAQgGAAgHgDg");
        this.shape_7.setTransform(27,4.5);

        this.instance_1 = new lib.Group();
        this.instance_1.setTransform(72.7,74.8,1,1,0,0,0,60.3,26.4);
        this.instance_1.alpha = 0.801;

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#814320").ss(3).p("AA0AAQAEAMgFAMIgBACQgFAMgMAFQgMAEgLgGIgugYQgLgGgEgLQgEgLAFgMIABgCQAFgMANgFQALgEAMAGIAtAYQALAGAEAKg");
        this.shape_8.setTransform(5.4,52.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#136FB2").s().p("AAKApIgugYQgLgGgEgLQgEgLAFgMIABgCQAFgMANgFQALgEAMAGIAtAYQALAGAEAKQAEAMgFAMIgBACQgFAMgMAFQgFABgFAAQgHAAgGgDg");
        this.shape_9.setTransform(5.4,52.9);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#814320").ss(3).p("AB8jDIi6GkQgEAJgJADQgJADgIgEIgVgLQgIgEgDgIQgCgJADgJIC7mkQADgJAJgDQAIgDAJAEIAVALQAIAEADAJQADAJgEAIg");
        this.shape_10.setTransform(17,27.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#136FB2").s().p("AhcDsIgVgKQgIgEgDgJQgCgJADgIIC7mlQADgIAJgEQAIgDAJAEIAVALQAIAEADAJQADAJgEAIIi6GlQgEAIgJADIgHACQgFAAgFgDg");
        this.shape_11.setTransform(17,27.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#814320").s().p("AC3FSIlSjFIn6jiIAAgCIB6k1IArhmIAJgWIDaCQIFyDeIBqA2IBIAgQAmASAiAOIBKAdIBKAaQBPAcBGAWIAOAFIgGAOQg8CWgXA2IhiDlgApdi4QgTAngfA5ICVAwICVAzIBKAcIDcBgIDPB0IDJB/IBtBIIBSiuIBZi7Qg1gUhQghIm2i4QgegOgogUIhHgkIjOh4IhDgsIhBgtIgtghg");
        this.shape_12.setTransform(73.2,57.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FC3C55").s().p("AEMFlQjkiPh6hAQh8g/jrhbIjRhQIC0mTICgBsQDBB+CqBYQCrBXDnBZQB0AuBRAcIi0GTQhZg7hzhIg");
        this.shape_13.setTransform(72.4,57.5);

        this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_1,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,147.9,117.8);


    (lib.bfeer = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.regeggrer();
        this.instance.setTransform(67.5,51.2,1,1,0,0,0,67.5,51.2);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,68.3,62.6);


    (lib.regerr = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 2
        this.instance = new lib.dwvwvwewe();
        this.instance.setTransform(143.2,196.3,1,1,0,0,0,143.2,196.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:143.3,rotation:-4.3,x:143.3,y:196.4},7,cjs.Ease.get(1)).to({regX:143.2,rotation:0,x:143.2,y:196.3},7,cjs.Ease.get(1)).wait(16));

        // Layer 1
        this.instance_1 = new lib.vdegegegre();
        this.instance_1.setTransform(144.9,216.2,1,1,0,0,0,51.1,29.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({y:212.6},3,cjs.Ease.get(1)).to({y:219.8},3,cjs.Ease.get(1)).to({y:212.6},3,cjs.Ease.get(1)).to({y:219.8},3,cjs.Ease.get(1)).to({y:216.2},3,cjs.Ease.get(1)).wait(1));

        // Layer 4
        this.instance_2 = new lib.breheer();
        this.instance_2.setTransform(144.6,242.1,1,1,0,0,0,43.6,48.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

        // Layer 3
        this.instance_3 = new lib.gregere();
        this.instance_3.setTransform(109.2,244.5,1,1,0,0,0,63,51.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:15,y:244.4},7,cjs.Ease.get(1)).to({rotation:0,y:244.5},7,cjs.Ease.get(1)).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,278.2,290.9);


    (lib.gfereggreer = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 6
        this.instance = new lib.brfeeger();
        this.instance.setTransform(123,201.9,1,1,0,0,0,72.5,57.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regY:57.3,scaleX:0.17,scaleY:0.17},0).to({scaleX:0.92,scaleY:0.92,y:200.5},7,cjs.Ease.get(1)).to({regY:57.4,scaleX:1,scaleY:1,y:201.9},7,cjs.Ease.get(1)).wait(17));

        // Layer 3
        this.instance_1 = new lib.vdgvwwewe();
        this.instance_1.setTransform(130.3,192.1,1,1,0,0,0,130.3,192.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.7},7,cjs.Ease.get(1)).to({rotation:0},7,cjs.Ease.get(1)).wait(31));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#814320").s().p("AhCAOIAAgbICFAAIAAAbg");
        this.shape.setTransform(128.6,239.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#814320").s().p("AhCAPIAAgcICFAAIAAAcg");
        this.shape_1.setTransform(128.6,224.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#814320").s().p("AghAjQgPgPAAgUQAAgTAPgPQAOgOATAAQAUAAAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgTAAgOgOg");
        this.shape_2.setTransform(138.6,224.2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#814320").s().p("AghAjQgPgPAAgUQAAgTAPgPQAOgOATAAQAUAAAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgTAAgOgOg");
        this.shape_3.setTransform(138.6,239.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#814320").s().p("AhjFFQglgHgYgSQgLgIgMgQIgJgOIgGgQQgKgcAAgkIgGn+IDEAAIBYABIBaACIAGACIACABIADAFIABACIAAABIABAEIAfFgIAHCMIAECLIAAAEIkKAEgAi4kqIgEHgQAAAiAIAYIAFANIAHANQAKAOAJAGQAWARAfAGIAeAEIERAEQACg8gBhLQgBg6gGhSQgFg6gEgdQgDglgJg0IgdimIAAgBg");
        this.shape_4.setTransform(148.8,222);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FED230").s().p("Ag2E+QhKAAglggQgngiAAhKIAAnvIFmAAQADAAATCaQAOBmAHBkQAICDAACUg");
        this.shape_5.setTransform(149.4,222.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#814320").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgTAAgPgOg");
        this.shape_6.setTransform(118.6,224.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#814320").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgTAAgPgOg");
        this.shape_7.setTransform(118.6,239.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#814320").s().p("AinFcIgRgmQgHgTgDgSQgHgjAAgpIAEiZIAEhUQABgwADgnIAGgsIAJgrQALgnAPgtIADgKQABgHAEgFQAGgNANgIQADgDAKgDIAOgCIEogBIgGH4IgBA+QgCAigLAdQgNAhgcATQgXAPgnAEIg+ABgAhmlBIgHACQgGAEgEAHIgIASQgSAtgMAkIgMApIgIAqQgHAlgEAxIgKDtQACArAHAgQAGAUAGAPIAPAgICzgDIAfAAIAegCQAigEATgOQAYgRAKgbQAJgXACgiQABgUgBgpIgEnaIkKgBIgFAAIgDAAg");
        this.shape_8.setTransform(109.6,219.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FED230").s().p("AidFTQgYgpgHgzQgFggABg8QABg6ADg4IAGhxQAFhCALgvQAMg2AehMQAEgLAJgGQAJgHALABIEdAAIAAIQQAABPgiAlQggAhg/AAg");
        this.shape_9.setTransform(108.9,220.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#814320").s().p("ACGFNIgwgJIgugPIgBAAIgBAAQgPgIgFgQQgDgJgBgOQAAgKACgbIAKhDIADgfQABgRgDgMQgCgLgHgFQgHgFgLAAQgLAAgHAFQgHAFgCALQgDAPABAOQAAAOACARIAKBDQACAVAAAQQgBAOgDAIQgFAQgOAIIgBAAIgBAAIguAPIgwAJQgtAFgygDQgsgCgxgJIgugJIgugMIAAAAQgDgBgDgDQgNgSgCgSQgCgTALgUQAJgPAPgNQANgMAPgJQAZgPAlgQIAggMIAXgIIgIgKIgOgTIgLgVQgFgLgEgKIgGgWIgFgXIgEgsQgBglAHg2IAVhaIAAgBIABAAIAyhpQADgIAJAAIBxgCIBvgBIBvAAIBxABQAKAAAEAJIA0BoIAAAAIAAACIAHAWIAGAWIAJAuQAHAzgCApIgFAsIgFAXQgDALgFALIgJAVIgMAUIgPASIgNAOQAhAIAcAMQAlAOAaAQQAlAWAQAaQALATgCAUQgCATgNASIgGAEIAAAAIguAMQgdAHgRACQgsAIgyADIgjABQghAAgbgDgAkYipQgGAUgFAYQgJAuAAAqIADAqIAKArIASAoIANARIAPAQQAFAFgFAEIgDACQgaAIgkAQQgiAPgZARQggAWgMAWQgHAPACAMQACAMAIALIApAIIAtAHQAtAFAtABQAwABAqgHQAPgCAGgCIAWgFIAogNIABgDIABgLQAAgNgCgSQgIgrgDgXQgEgTAAgRQgBgXADgQQADgMAFgJQAGgMAKgIQASgNAaAAQAaAAASANQAKAHAHANQADAGAFAPQADAOAAAZIgEAkQgDAXgIAsQgDAYABAGQAAAHABAEIABACIgCgBIAUAIIBAAQQAoAFAxAAIAtgCIAugEIAtgHIApgIQAIgMABgKQACgOgHgMQgGgNgNgMQgKgKgPgLQgZgRghgQQgggQgegKQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIAPgRIALgTIAKgTIAKggIACgKIAEgWIABgUIABgWQgBgogKgwQgEgWgGgVIgNgoIgyhdIlFABIhogDIg0BeIABgCg");
        this.shape_10.setTransform(128.3,253);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#CC7E34").s().p("AAwEjQgQgIADgoIAMhQQAPhsg+AAQg9AAAPBsIALBQQAEAogPAIQhcAniSgQQgtgFgugJIgkgJQgug8Bmg7QAygdA8gSQhJhFANiNQAEgtANgvIAMgmIA1hnIG/AAIA1BnIALAmQANAvAEAtQAPCNhKBFIAkANQAqAQAhASQBkA7gtA8Qg2APhJAIQgpAFglAAQheAAhBgcg");
        this.shape_11.setTransform(128.3,253);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

        // Layer 5
        this.instance_2 = new lib.vdwvwewew();
        this.instance_2.setTransform(185,223.9,1,1,0,0,0,23.4,32.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({x:149.4,y:204.9},0).to({x:189.3,y:225.3},7,cjs.Ease.get(1)).to({x:185,y:223.9},7,cjs.Ease.get(1)).wait(17));

        // Layer 4
        this.instance_3 = new lib.vrferwgwe();
        this.instance_3.setTransform(71.3,182.3,1,1,0,0,0,40.4,32.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({x:117.3,y:206.1},0).to({x:68.4,y:179.4},7,cjs.Ease.get(1)).to({x:71.3,y:182.3},7,cjs.Ease.get(1)).wait(17));

        // Layer 2
        this.instance_4 = new lib.bfeer();
        this.instance_4.setTransform(96.9,249.2,1,1,0,0,0,67,60.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:66.9,rotation:-9,x:96.8},7,cjs.Ease.get(1)).to({regX:67,rotation:0,x:96.9},7,cjs.Ease.get(1)).wait(31));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,277.2,286.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;