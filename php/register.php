<?php
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$conn = mysqli_connect('localhost','root','root','test');
$sql = "SELECT * FROM `list` WHERE `name`='$username'";
$result = mysqli_query($conn,$sql);
$data = mysqli_fetch_assoc($result);
if($data){
    $arr = array('code'=>0,'msg'=>'用户名已经被注册');
}else{
    $sql = "INSERT INTO `list` (`name`,`pass`) VALUES ('$username','$password')";
    $result = mysqli_query($conn,$sql);
    if($result){
        $arr = array('code'=>1,'data'=>array('name'=>$username,'tip'=>'注册成功，请登录'));
    }else{
        $arr = array('code'=>0,'msg'=>'后端出错了');
    }
}
echo json_encode($arr);
?>