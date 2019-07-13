<?php

/* 内部文字エンコーディングをUTF-8に設定 */
mb_internal_encoding("UTF-8");

define('APP_BASE', __DIR__."/data/");

date_default_timezone_set('Asia/Tokyo');

// エラー制御
ini_set( 'display_errors', "1" ); error_reporting(-1);

require "ApiService.php";

/*
 * 環境
 */

define('DB_HOST'    , 'localhost');
define('DB_NAME'    , 'at');
define('DB_USER'    , 'root');
define('DB_PASSWORD', 'password');

header('Content-Type: text/json; charset=UTF-8');

$app = new ApiService();

$target = $_GET['target'];


$ret = array();

switch ($target) {
    case 'company':
        $ret = $app->getCompany();
        break;
    case 'company_data':
        $company_data = $_GET['company_data'];
         $ret = $app->getSales($company_data);
         break;
    default:
        echo "ターゲットが不正です。";
        exit;
}

$obj = new stdClass();
$obj->data = $ret;

echo json_encode($obj);

exit;
