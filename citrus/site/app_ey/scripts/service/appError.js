define([
    'app'
], function (md) {
    md.service('appError', [function () {

            return {
                getTip: getTip
            };

            function getTip(error) {
                var tip = '';
                var k = 0;
                for (key in error) {
                    k++;

                    switch (key) {
                        case 'required':
                            tip = getErrorStr(error[key], 'required');
                            break;
                        default:
                            tip = getErrorStr(error[key]);

                    }
                    if (k >= 1) {
                        break;
                    }
                }

                return tip;


            }

            function getErrorStr(arr, type) {
                var str = '';
                if (type == 'required') {
                    if (arr[0].errorLabelType == 'selector') {
                        str = '请选择' + (arr[0]['errorLabel'] || arr[0]['$name']) + ' !';
                    } else {
                        str = '请填写' + (arr[0]['errorLabel'] || arr[0]['$name']) + ' !';
                    }
                } else {
                    str = (arr[0]['errorLabel'] || arr[0]['$name']) + '格式不正确 !'
                }

                return str;
            }
        }]
    )

});