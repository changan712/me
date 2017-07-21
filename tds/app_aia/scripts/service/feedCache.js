'use strict';

define(['app'], function (md) {
    md.factory('feedCache', ['$rootScope', function ($rootScope) {

        window.feedItems = [];

        return {
            getAll: function () {
                return feedItems;
            },
            getItem: function (id) {
                return _.findWhere(feedItems, {id: id});
            },

            create: function (items) {
                return feedItems = items;
            },

            unShiftItem:function(item){
                feedItems.unshift(item);
                return feedItems;
            },

            addItems: function (items) {

                _.each(items,function(item){
                    if(_.indexOf(feedItems,item)==-1){
                        feedItems.push(item);
                    }
                });

                return feedItems;

            },

            setItem: function (item) {
                if (this.getItem(item.id)) {
                    feedItems[_.findIndex(feedItems, {id: item.id})] = item;

                } else {
                    feedItems.push(item);
                }

                $rootScope.$broadcast('feedChange', {id: item.id});
                return feedItems;
            },
            destroy: function () {
                return feedItems = [];
            }
        }
    }
    ]);
});