<?php
include "conexao.php";

$sql = "SELECT * FROM EVENTOS";

$result = $mysqli->query( $sql );
$myArray = array();

while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[] = $row;
}

echo json_encode($myArray);

?>
