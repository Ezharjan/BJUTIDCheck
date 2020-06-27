<?php

namespace app\api\model;

class LoggedList extends BaseModel
{
    public static function check($ac, $se)//查看账号密码是否匹配
    {
        $app = self::where('account', '=', $ac)
            ->where('password', '=', $se)
            ->find();
        return $app;
    }
}
