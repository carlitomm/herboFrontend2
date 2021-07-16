<?php
require 'PHPMailer/PHPMailerAutoload.php';

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['mail'];
$messaje = $_POST['messaje'];
$subject = $_POST['subject'];

$mail = new PHPMailer();
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'cordovisandy@gmail.com';                 // SMTP username
$mail->Password = 'lamisma95';                           // SMTP password
$mail->SMTPSecure = 'tsl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($email, 'Form '. $name .' '. $lastname);
$mail->addAddress('info@eandsolutions.com', 'Company');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Subject: '.$subject;
$mail->Body = 'Form the company by:   <b>'. $name .' '. $lastname . '</b><br> <b> Email: '.$email .'</b>
<br><p>'.$messaje.'</p>';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
