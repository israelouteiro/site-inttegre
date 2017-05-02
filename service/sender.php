<?php

	require_once '../vendor/swiftmailer/swiftmailer/lib/swift_required.php'; 

 	$name = addslashes($_POST['name']);
 	$email = addslashes($_POST['email']);
 	$message = addslashes($_POST['message']);

 	function sendMail($message, $subject, $target_mail){
		
		$idmail = time() . '.' . uniqid('prd') . date('YmdHis') . '@identifier.com' ; 
		$email_sender = 'inttegrepsicologia@gmail.com'; 
		$array_sender = array( $email_sender => '' ) ;  

		$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
			-> setUsername($email_sender)
		 	-> setPassword('mayemari');  

	 	try{

	 		$mailer = Swift_Mailer::newInstance( $transport );
			$message = Swift_Message::newInstance()
		            ->setId( $idmail )
		            ->setTo( array( $target_mail) )
		            ->setSubject( $subject )
		            ->setContentType('text/html')
		            ->setBody( $message )
		            ->setSender( $email_sender )
		            ->setReplyTo( $email_sender )
		            ->setReturnPath( $email_sender )
		            ->setFrom( $array_sender );

		    $headers = $message->getHeaders();
			$headers->addPathHeader( 'Return-Path' , $email_sender );

			return	$status = $mailer->send( $message ) ;

	 	}catch(Exception $e){     
	 		return 'catch';
	 	}
	}

	$xmessage = "<p>Olá, recebemos um novo contato em nosso site</p>";
	$xmessage .= "<p>&nbsp;</p>";
	$xmessage .= "<p><b>Nome:</b> ".$name."</p>";
	$xmessage .= "<p><b>Email:</b> ".$email."</p>";
	$xmessage .= "<p><b>Mensagem:</b> ".$message."</p>";

	$subject = "Novo contato recebido em www.inttegrepsicologia.com.br!";




	sendMail($xmessage, $subject, "inttegrepsicologia@gmail.com"); 

	echo 'ok';