<?php
    $link = mysqli_connect('localhost',"root","root","shoping");
    $sel = "SELECT * FROM `cart`";
    $sql = mysqli_query($link, $sel);
    $data = mysqli_fetch_all($sql,MYSQLI_ASSOC);
    echo json_encode($data);
    mysqli_close($link);
?>