<?php
require("./PHPMailer_v5.1/class.phpmailer.php");



$mail = new PHPMailer(true);
      $mail->IsSMTP();
      $mail->SMTPDebug = 0;
      $mail->SMTPAuth = true;  // Gmail requires authentication
      $mail->SMTPSecure = 'ssl'; // Gmail requires SSL connection
      $mail->Host = 'smtp.gmail.com';
      $mail->Port = 465; 
      $mail->Username = "test2dnya@gmail.com"; // <-- Update this with your GMail username  
      $mail->Password = "admin791911"; // <-- Update this with your GMail password 
      $mail->SetFrom('zaradite');
      $mail->Subject = 'Test';
      $mail->Body = 'Test mail';
      $mail->AddAddress("andrew13dorosh@gmail.com");
      if(!$mail->Send()) {
            $error = 'Mail error: '.$mail->ErrorInfo; 
            echo $error;
      } else {
            $success = 'Message sent!';
            echo $success;
      }
?>