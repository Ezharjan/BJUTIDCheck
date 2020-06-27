<?php


namespace app\api\controller\v1;


class GetNameList
{
    public function getList()
    {
        $rs = db('logged_list')->select();
        $rs1 =  $this->json(0, 'Succeed!', 1000, $rs);
        dump($rs1);
        echo dump($rs1);
        die;//打印出来
        return $this->fetch();
    }


    function json($code,$msg="",$count,$data=array()){
        $result=array(
            'code'=>$code,
            'msg'=>$msg,
            'count'=>$count,
            'data'=>$data
        );
        //输出json
        echo json_encode($result);
        exit;
    }
}