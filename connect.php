<?php

$host="localhost";
$user="root";
$pass="";
$db="login";
$conn = new mysqli('127.0.0.1', 'root', '', 'login', 3307);


if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>