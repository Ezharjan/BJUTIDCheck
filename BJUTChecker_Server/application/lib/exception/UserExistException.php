<?php


namespace app\lib\exception;


class UserExistException extends BaseException
{
    public $code = 403;//这里不要使用407之类的与系统本身相冲突的状态码
    public $msg = '检测到用户已登记信息，请勿重复登记。';
    public $errorCode = 66666;
}