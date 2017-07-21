define([
    'app',
    'd3'
], function (md) {

    md.directive('d3Overall', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                height: '@',
                data: '=',
                fills: '@'
            },
            link: function ($scope, ele, attr) {
                if (!angular.isArray($scope.data)) {
                    return;
                }

                ele.addClass('d3-overall');
                //  angular.element(document).ready(function () {
                var data = $scope.data || [];
                var height = $scope.$eval($scope.height) || 160;
                var width;
                var fills = $scope.$eval($scope.fills) || ['#d31145', '#d1d3d4'];
                var padding = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 20
                };
                var columnWidth = 40;
                var textMt = 15;

                var svg = d3.select(ele[0])
                    .append('svg')
                    .attr('width', '100%')
                    .attr('height', height + padding.bottom + padding.top);

                width = svg.node().clientWidth;

                var columnGap = 20;

                var xScale = d3.scale.ordinal()
                    .domain(d3.range(data.length))
                    .rangeRoundBands([0, width]);

                var yScale = d3.scale.linear()
                    .domain([0, d3.max(data, function (item) {
                        return item.size;
                    })])
                    .range([height, 0]);

                //column
                var _lastPos;
                var columns = svg.selectAll('.column')
                    .data($scope.data)
                    .enter()
                    .append('rect')
                    .attr('class', 'column')
                    .attr('x', function (d, i) {
                        return xScale(i);
                    })
                    .attr('transform', 'translate(' + columnGap / 2 + ')')
                    .attr('y', function (d, i) {
                        if (i % 2) {
                            return _lastPos;
                        } else {
                            _lastPos = yScale(d.size);
                            return yScale(d.size);
                        }
                    })
                    .attr('height', function (d, i) {
                        return height - yScale(d.size);
                    })
                    .attr('width', xScale.rangeBand() - columnGap)

                    .attr('fill', function (d, i) {
                        return fills[i % fills.length];
                    });
                // })

                //label
                var _lastLabelPos;
                var label = svg.selectAll('.label-svg')
                    .data(data)
                    .enter()
                    .append('text')
                    .attr('class', 'label-svg')
                    .attr('x', function (d, i) {
                        return xScale(i);
                    })
                    .attr('y', function (d, i) {
                        if (i % 2) {
                            return _lastLabelPos;
                        } else {
                            _lastLabelPos = yScale(d.size);
                            return yScale(d.size);
                        }
                    })
                    .attr('dx', function () {
                        return xScale.rangeBand() / 2;
                    })
                    .attr('dy', function () {
                        return textMt;
                    })
                   // .attr('font-weight', 'bold')
                    .attr('text-anchor', 'middle')
                    .attr('fill', function (d, i) {
                        if (i % 2) {
                            return '#333';
                        } else {
                            return '#fff';
                        }
                    })
                    .text(function (d) {
                        return d.size;
                    });

                //labelPercent
                var _lastLabelPercentPos;
                var labelPercent = svg.selectAll('.label-percent-svg')
                    .data(data)
                    .enter()
                    .append('text')
                    .attr('class', 'label-svg')
                    .attr('x', function (d, i) {
                        return xScale(i);
                    })
                    .attr('y', function (d, i) {
                        if (i % 2) {
                            return _lastLabelPercentPos;
                        } else {
                            _lastLabelPercentPos = yScale(d.size);
                            return yScale(d.size);
                        }
                    })
                    .attr('dx', function () {
                        return xScale.rangeBand() / 2;
                    })
                    .attr('dy', function () {
                        return textMt+12;
                    })
                    .attr('fill', function (d, i) {
                        if (i % 2) {
                            return '#333';
                        } else {
                            return '#fff';
                        }
                    })
                   // .attr('font-weight', 'bold')
                    .attr('text-anchor', 'middle')
                    .text(function (d) {
                        return '(' + d.percent + '%)';
                    });

                //axis
                var values = _.pluck(data, 'label');

                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .tickSize(0)
                    .tickPadding(6)
                    .tickFormat(function (i) {
                        return data[i]['label'];
                    })
                    .orient('bottom');

                svg.append('g')
                    .attr('class', 'axis')
                    .attr("transform", "translate(" + padding.left + "," + (height + 2) + ")")
                    .call(xAxis);

            }

        }
    }])

});