<?php

$host = "localhost";
$user = "root";
$password = "root";
$database = "nome_do_banco";

$mysqli = mysqli_connect($host, $user, $password, $database);

if (!$mysqli) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}


?>