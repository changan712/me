<?
$corp_id = $_GET['corp_id'];
$regex = '/[^\d\w_]*/';
$corp_id = preg_replace($regex, "", $corp_id);

$url = "http://{$_SERVER['HTTP_HOST']}/api/app/common/version?txt=1&corp_id=".$corp_id;
$version = file_get_contents($url);
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title ng-bind="title">易行动</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link href="/bower_components/ionic/release/css/ionic.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style/css/main.css?v=<?=$version?>">
    <!--<link rel="stylesheet" ng-if="corp.css" ng-href="..{{corp.css}}">-->
</head>
<body ng-controller="appCtrl">

<div class="wel " ng-if="!vm.initialized">
    <div class='loader loader-glisteningWindow'></div>
    <div class="text">正在加载请稍后</div>
</div>
<div class="alert-wrap " ng-if="vm.alerts.length" ng-class="{' show':vm.alerts.length}" style="display: none;">
    <div class="alert" ng-repeat="alert in vm.alerts" ng-class=" alert.type"><i
            class="icon  sigh ion-ios-information"></i> {{alert.msg}}
        <i class=" pull-right icon ion-close" ng-click=" alert.close()"></i>
    </div>
</div>

<div class="app-tip" ng-if="vm.tip" ng-class="{'show':vm.tip}" >
    <i class="ion-ios-close-outline icon" ng-if="vm.tip.hasHideIcon" ng-click="vm.tip.hide()"></i>
    <div ng-bind-html="vm.tip.msg"></div>
</div>

<ion-nav-view></ion-nav-view>
<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
    var global_version = "<?=$version?>";
</script>
<script src="/bower_components/requirejs/require.js" data-main="scripts/main.js?v=<?=$version?>"></script>
</body>
</html>