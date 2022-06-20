<?php

    //Getting user input data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    //Server email
    $to = "mashabasipho1411@gmail.com";

    //Message body setting
    $body = "";
    $body .= "From : ".$email."\n\n\n";
    $body .= "Message : \r\n\n".$message."\r\n";

    //Sending the email
    mail($to, $subject, $body, $name);
    header("Location: index.html?mailsent");

?>