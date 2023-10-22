<?php
if($_POST["message"]) {
    mail("kristijan.hornung1@gmail.com", "Here is the subject line",
    $_POST["insert your message here"]. "From: kristijan.hornung1@gmail.com");
    }
?>