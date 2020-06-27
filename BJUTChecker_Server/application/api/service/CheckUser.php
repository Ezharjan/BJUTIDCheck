<?php


namespace app\api\service;


use app\api\model\LoggedList;
use app\api\model\LoginInfo;
use app\lib\exception\UserExistException;

class CheckUser extends Token
{
    public function checkUserExistion($account, $password)
    {
        $app = LoginInfo::check($account, $password);

        if (!$app) {
//            return true;
            return $app;
        } else {
            throw new UserExistException();
//            echo '!!';
        }
    }

    public function checkUserLogState($account, $password)
    {
        $app = LoggedList::check($account, $password);

        if (!$app) {
//            return true;
            return $app;
        } else {
            throw new UserExistException();
//            echo '!!';
        }
    }
}