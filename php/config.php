<?php

$conn = new mysqli("localhost:3308", "root", "Wapapatoi&4SQL", "chat");

if (!$conn) {
    echo("Connection failed: " . mysqli_connect_error());
}

?>