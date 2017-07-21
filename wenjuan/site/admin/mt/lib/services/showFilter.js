define([
    'app',
    '../../lib/services/options'
], function (md) {
    md.filter('showFilter', ['options', function (options) {
        return function(input, type){
            if(!type || !options[type]){
                return input;
            }

            var item = _.findWhere(options[type], {value:input});
            if(item){
                return item.name;
            } else {
                return input;
            }
        };
    }]);

    md.filter('checkListFilter',function(){
        return function(input, arr){
            if(!arr){
                return true;
            }

            if(arr.indexOf(input) != -1){
                return true;
            }
            return false;
        }
    });
});