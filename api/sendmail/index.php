<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require '../vendor/autoload.php';

    define('USERNAME', 'info@strategymrc.com');
    define('PASSWORD', 'Z]<Q\b99ej{dJB@');
    define('FROM_NAME', 'Urban Sports Hub');

    // header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: POST");
    header('Content-Type: application/json;charset=utf-8');
    
    if (($_SERVER['HTTP_HOST'] === 'urbansportshub.com') && ($_SERVER['REQUEST_URI'] === '/api/sendmail/')) {
        $data = json_decode(file_get_contents('php://input'));
        $res = null;
    
        if (!isValid($data)) {
            http_response_code(404);
            echo json_encode(array(
                'status' => false,
                'message' => 'Please fill the form correctly. All fields are required'
            ));
            exit();
        }
    
        $res = notifyAdmin($data);
    
        if(!$res['status']) {
            http_response_code(404);
        } else {
            notifyUser($data);
            http_response_code(200);
        }
    
        echo json_encode($res);
        exit();
    } else {
        http_response_code(403);
        echo 'Forbidden Access';die;
    }

    /*||||||||||||||||||||||||||||||||||||||||||||||UTILS||||||||||||||||||||||||||||||||||||||||||||||*/

    function notifyAdmin($data) {
        $viewContent = 'Received a request from ' . $data->firstname;

        $view = str_replace(
            [
                '[MESSAGE]',
                '[firstname]',
                '[lastname]',
                '[telephone]',
                '[email]',
                '[user_message]',
                '[page]',
            ],
            [
                $viewContent,
                $data->firstname,
                $data->lastname,
                $data->telephone,
                $data->email,
                $data->message,
                $data->page,

            ],
            file_get_contents('./views/admin.html')
        );

        $subject = '[' . $data->page . '] request from portal | Admin | Urban Sports Hub';
        
        $res = sendMail($data, $subject, $view, 'urbansportshub@gmail.com');

        return $res;
    }

    function notifyUser($data) {
        $viewContent = $data->page == 'Contact Us' ? 
        'We successfully received your query, we will get back to soon as possible. Thank you.' : 
        'Thank you submitting your request for ' . $data->page . ', we will get back to soon as possible. Thank you.';

        $view = str_replace(
            ['[NAME]', '[MESSAGE]'],
            [
                ($data->firstname . ' ' . $data->lastname), 
                $viewContent
            ],
            file_get_contents('./views/user.html')
        );

        $subject = 'Received your request | ' . $data->page . ' | Urban Sports Hub';
        
        $res = sendMail($data, $subject, $view);

        return $res;
    }

    function sendMail($input, $subject, $view, $to = NULL) {

        //Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        $response = array();
        
        try {
            //Tell PHPMailer to use SMTP
            // $mail->isSMTP();

            //Enable SMTP debugging
            //SMTP::DEBUG_OFF = off (for production use)
            //SMTP::DEBUG_CLIENT = client messages
            //SMTP::DEBUG_SERVER = client and server messages
            $mail->SMTPDebug = SMTP::DEBUG_OFF;

            //Set the hostname of the mail server
            $mail->Host = 'relay-hosting.secureserver.net';
            //Use `$mail->Host = gethostbyname('smtp.gmail.com');`
            //if your network does not support SMTP over IPv6,
            //though this may cause issues with TLS

            //Set the SMTP port number:
            // - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
            // - 587 for SMTP+STARTTLS
            $mail->Port = 25;

            //Set the encryption mechanism to use:
            // - SMTPS (implicit TLS on port 465) or
            // - STARTTLS (explicit TLS on port 587)
            $mail->SMTPSecure = false;//PHPMailer::ENCRYPTION_SMTPS

            //Whether to use SMTP authentication
            $mail->SMTPAuth = false;

            //Username to use for SMTP authentication - use full email address for gmail
            // $mail->Username = USERNAME;

            //Password to use for SMTP authentication
            // $mail->Password = PASSWORD;

            //Set who the message is to be sent from
            //Note that with gmail you can only use your account address (same as `Username`)
            //or predefined aliases that you have configured within your account.
            //Do not use user-submitted addresses in here
            $mail->setFrom(USERNAME, FROM_NAME);

            //Set an alternative reply-to address
            //This is a good place to put user-submitted addresses
            // $mail->addCC('urbansportshub@gmail.com');

            //Set who the message is to be sent to
            $mail->addAddress(
                empty($to) ? $input->email : $to
            );

            //Set the subject line
            $mail->Subject = $subject;

            //Read an HTML message body from an external file, convert referenced images to embedded,
            //convert HTML into a basic plain-text alternative body
            $mail->msgHTML($view);
            //Replace the plain text body with one created manually
            // $mail->AltBody = $input->message;

            //send the message, check for errors
            if (!$mail->send()) {
                $response = array(
                    'status' => false,
                    'message' => 'Mailer Error: ' . $mail->ErrorInfo
                );
            } else {
                $response = array(
                    'status' => true,
                    'message' => 'Thank you submitting your request, we will get back to soon as possible'
                );
            }
        } catch (Exception $e) {
            $response = array(
                'status' => false,
                'message' => 'Mailer Error: ' . $e->errorMessage()
            );
        } catch (\Exception $e) {
            $response = array(
                'status' => false,
                'message' => 'Mailer Error: ' . $e->getMessage()
            );
        }

        return $response;
    }

    function isValid($data) {
        if (empty($data->page) || 
            empty($data->firstname) || 
            empty($data->lastname) || 
            empty($data->telephone) || 
            (empty($data->email) || !isValidEmail($data->email)) || 
            empty($data->message)) 
        {
            return false;
        }

        return true;
    }

    function isValidEmail($email){ 
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
?>
