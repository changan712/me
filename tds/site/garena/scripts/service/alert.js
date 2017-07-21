define(['app'], function (md) {
    md.service('alertService', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
            var alerts = [];
            var timer = null;
            return {
                add: add,
                closeAlert: closeAlert,
                closeAlertIdx: closeAlertIdx,
                clear: clear,
                get: get
            };

            function add(msg, time, type) {
                if (_.findWhere(alerts, {msg: msg})) {
                    return false;
                }
                var item = {
                    type: type || 'success ',
                    msg: msg,
                    close: function () {
                        return closeAlert(this);
                    }

                };

                if (time) {
                    timer = $timeout(function () {
                        closeAlert(item);
                    }, time)
                }
                return alerts.push(item);
            }

            function closeAlert(alert) {
                return closeAlertIdx(alerts.indexOf(alert));
            }

            function closeAlertIdx(index) {
                return alerts.splice(index, 1);
            }

            function clear() {
                alerts = [];
            }

            function get() {
                return alerts;
            }
        }]
    )

});