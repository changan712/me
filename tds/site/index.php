<?php

// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

setlocale(LC_CTYPE, "UTF8", "en_US.UTF-8");

require(__DIR__ . '/../vendor/autoload.php');
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

// get url_name of a company
$company_config = require(__DIR__ . '/../config/company.php');
if($company_config != 'gii') {
    $spec_path_1 = __DIR__ . "/../config/{$company_config}.php";
    $spec_path_2 = __DIR__ . "/../config/companies/{$company_config}.php";
    if (file_exists($spec_path_1)) {
        $spec_path = $spec_path_1;
    } elseif (file_exists($spec_path_2)) {
        $spec_path = $spec_path_2;
    } else {
        exit('config file not exists');
    }
    $config = yii\helpers\ArrayHelper::merge(
        include(__DIR__ . '/../config/web.php'),
        include($spec_path)
    );
} else {
    // just to make gii work again
    $config = yii\helpers\ArrayHelper::merge(
        include(__DIR__ . '/../config/web.php'),
        include(__DIR__ . '/../config/companies/demo.php')
    );
}

(new yii\web\Application($config))->run();
