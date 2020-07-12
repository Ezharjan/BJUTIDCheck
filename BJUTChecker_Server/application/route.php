<?php
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2021 All rights reserved.
// +----------------------------------------------------------------------
// | Author: Alexadner <bjutsoft@sina.com>
// +----------------------------------------------------------------------

use think\Route;

/**
 * 公共资源目录示例——替dui 换public后面的资源名称即可
 * @url:http://localhost:88/BJUTIDCheck/BJUTChecker_Server/public/images/banner1.png
 */

////////////////////////////////////////////////////////////////////////////
//扩展及测试接口
////////////////////////////////////////////////////////////////////////////

//专门用于获取令牌的接口
Route::post('api/:version/get_token', 'api/:version.Token/getAppToken');
//用法：http://localhost:88/BJUTIDCheck/BJUTChecker_Server/public/index.php/api/v1/get_token

//直接通过传入姓名及学号的方式注册需要进校人员的信息
Route::post('api/:version/register', 'api/:version.Register/registerAccount');
//用法：http://localhost:88/BJUTIDCheck/BJUTChecker_Server/public/index.php/api/v1/register




////////////////////////////////////////////////////////////////////////////
//实际使用接口
////////////////////////////////////////////////////////////////////////////

//登记进校，后台校验账号有效性及冗余性
Route::post('api/:version/login', 'api/:version.Login/getAppToken');
//用法：http://localhost:88/BJUTIDCheck/BJUTChecker_Server/public/index.php/api/v1/login


//获取进校人员名单并在前端呈现
Route::get('api/:version/get_list','api/:version.GetNameList/getList');
//用法：http://localhost:88/BJUTIDCheck/BJUTChecker_Server/public/index.php/api/v1/get_list
