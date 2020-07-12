<?php


namespace app\lib\exception;


class UserExistException extends BaseException
{
    public $code = 407;
    public $msg = '检测到用户已登记信息，请勿重复登记。';
    public $errorCode = 66666;
}