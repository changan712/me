define([
    'app'
], function (md) {
    md.service('feedFor', [function () {

            var forList = [];

            return {
                get: function () {
                    return forList;
                },
                remove: function (id) {
                    return _.reject(forList, {id: id});
                },

                removeAll: function () {
                    forList = [];
                },

                set: function (list) {
                    forList = list;
                }
            }

        }]
    )

});