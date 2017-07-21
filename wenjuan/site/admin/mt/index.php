<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>面试系统-后台管理</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.min.css">
    <link rel="stylesheet" href="bower_components/ng-sortable/dist/ng-sortable.min.css">
    <link rel="stylesheet" href="bower_components/ng-sortable/dist/ng-sortable.style.min.css">
    <link rel="stylesheet" href="style/css/main.css">
    <script src="//cdn.bootcss.com/echarts/3.4.0/echarts.min.js"></script>
    <script src="//cdn.bootcss.com/echarts/3.4.0/extension/dataTool.min.js"></script>
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/underscore/underscore-min.js"></script>
    <link rel='stylesheet' href='bower_components/textAngular/dist/textAngular.css'>
    <script src="bower_components/textAngular/dist/textAngular-rangy.min.js"></script>
    <script src="bower_components/textAngular/dist/textAngular-sanitize.min.js"></script>
    <script src="bower_components/textAngular/dist/textAngular.min.js"></script>
    <script>
        var global_version = "1.2";
    </script>
    <script src="bower_components/requirejs/require.js" data-main="project/main.js?v=1.2"></script>
</head>
<body ng-controller="appCtrl">

<div class="view-root" ui-view></div>

</body>
</html>
