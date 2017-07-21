define([], function () {

    describe('myApp test', function () {

       beforeEach(module('app'));

        var $controller;

        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('11',function(){
            console.log($controller);
            expect($controller).toBeDefined();

        })

    });

});