<?php
require('./model/_connect.php');
$sel = "SELECT * FROM `cart`";
$sql = mysqli_query($conn, $sel);
$data = mysqli_fetch_all($sql,MYSQLI_ASSOC);
echo json_encode($data);
mysqli_close($conn);
?>