<?php

$fileName = $_FILES['file']['name'];
$tmpName = $_FILES['file']['tmp_name'];
$fileUpName = time().$fileName;
move_uploaded_file($tmpName,"/moved/".$fileUpName);

?>