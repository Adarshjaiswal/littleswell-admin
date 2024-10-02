<?php
use GuzzleHttp\Client;

if(!function_exists('approvalSms')){
    function approvalSms($phone_number,$UserName)
    {
        $user_name = $UserName;
        $number = $phone_number;
        $message = "Dear " . $user_name . ", Welcome to ROJGAAR RAKSHAK KE SATH. Your application has been approved. Please use the app for more details. - RAKSHAK SECURITAS";
        $senderId = env('SENDER_ID');
        $apikey = env('SMS_API_KEY_TRANS');
        $templateId = env('TEMPLATE_ID_JOB_APPROVAL');

        $url = "https://smsapi.edumarcsms.com/api/v1/sendsms";

        $data = [
            "apikey" => $apikey,
            "number" => $number,
            "message" => $message,
            "senderId" => $senderId,
            "templateId" => $templateId,
        ];

        $client = new Client();

        try {
            $response = $client->post($url, [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => $data,
            ]);

            $statusCode = $response->getStatusCode();
            $responseBody = $response->getBody()->getContents();

            return $responseBody;
        } catch (\Exception $e) {
            return "Error: " . $e->getMessage();
        }
    }
}

if(!function_exists('rejectedSms')){
    function rejectedSms($phone_number,$UserName)
    {
        $user_name = $UserName;
        $number = $phone_number;
        $message = "Dear " . $user_name . ", Your application has been rejected, Please try later or contact Customer Support RAKSHAK SECURITAS";
        $senderId = env('SENDER_ID');
        $apikey = env('SMS_API_KEY_TRANS');
        $templateId = env('TEMPLATE_ID_JOB_DENY');

        $url = "https://smsapi.edumarcsms.com/api/v1/sendsms";

        $data = [
            "apikey" => $apikey,
            "number" => $number,
            "message" => $message,
            "senderId" => $senderId,
            "templateId" => $templateId,
        ];

        $client = new Client();

        try {
            $response = $client->post($url, [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => $data,
            ]);

            $statusCode = $response->getStatusCode();
            $responseBody = $response->getBody()->getContents();

            return $responseBody;
        } catch (\Exception $e) {
            return "Error: " . $e->getMessage();
        }
    }
}
