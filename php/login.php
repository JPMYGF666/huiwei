<?php
//接受前端数据
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//链接数据库
$conn = mysqli_connect('localhost','root','root','test');

//书写sql语句
$sql = "SELECT * FROM `list` WHERE `name`='$username' AND `pass`='$password'";

//执行sql语句
$result = mysqli_query($conn,$sql);

//解析查询结果
$data= mysqli_fetch_assoc($result);
// echo $data;
if($data){
    $arr = array('code'=>1,'data'=>array('name'=>$username));
}else{
    $arr = array('code'=>0,'msg'=>'用户名或密码错误');
}
echo json_encode($arr);
?>