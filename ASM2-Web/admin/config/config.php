<?php
$mysqli =  mysqli("localhost","root","","web design");

// Check connection
if ($mysqli -> connect_errno) {
  echo "ket noi loi " . $mysqli -> connect_error;
  exit();
}
?>