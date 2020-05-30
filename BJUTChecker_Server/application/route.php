<?php
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2021 All rights reserved.
// +----------------------------------------------------------------------
// | Author: Alexadner <bjutsoft@sina.com>
// +----------------------------------------------------------------------

use think\Route;

/**
 * 公共资源目录示例——替dui 换public后面的资源名称即可
 * @url:http://localhost:88/BJUTChecker/public/images/banner1.png
 */

/**
 * 获取信息:不需要令牌校验
 * @GET
 */

/**
 * 登录及注册:不需要令牌校验
 * @POST
 */
//登录账号并获取令牌
Route::post('api/:version/login', 'api/:version.Login/getAppToken');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/login

//专门用于获取令牌的接口
Route::post('api/:version/get_token', 'api/:version.Token/getAppToken');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/get_token

//注册账号，后台校验账号冗余性
Route::post('api/:version/register', 'api/:version.Register/registerAccount');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/register

//微信用户获取令牌的方式（微信坂测试）
Route::post('api/:version/token/wx_user', 'api/:version.Token/getToken');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/token/wx_user



/**
 * 用户特殊行为:需要令牌校验
 * @POST
 */
//给指定的用户增加个人信息
Route::post('api/:version/add_user_info', 'api/:version.UserInfo/createOrUpdateUser');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/add_user_info

//获取指定用户的个人信息(注意：body里不传参，需在headers传uid即可)
Route::post('api/:version/get_user_info', 'api/:version.UserInfo/getUserInfo');
//用法：http://localhost:88/BJUTChecker/public/index.php/api/v1/get_user_info


