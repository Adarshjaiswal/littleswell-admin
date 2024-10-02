<?php

namespace App\Http\Controllers;

use App\Models\AppUser;
use App\Models\Payment;
use App\Models\PaymentAmount;
use App\Models\RefundPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Ixudra\Curl\Facades\Curl;

class PaymentController extends Controller
{
    //all refund request
    public function allRefundRequest($rowperpage, Request $request)
    {
        $query = Payment::query();

        $query->join('users', 'payment.user_id', '=', 'users.id')
            ->where('payment.is_request_for_refund', '=', 1)
            ->select('payment.*', 'users.name as user_name');


        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('payment.created_at', 'desc');
        $req_data = $query->paginate($rowperpage);

        if ($req_data) {
            // Transform the jobs data to include city names
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'request_data' => $req_data,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    //initiate refund
    public function initiatePayement($paymentid, Request $request)
    {
        $payments = Payment::find($paymentid);

        if (!$payments) {
            return response()->json([
                'status' => true,
                'message' => 'Payment record not found for the provided payment ID.',
            ], 404);
        }

        $metaData = json_decode($payments->meta_data);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to decode JSON data in meta_data column.',
            ], 400);
        }

        // Access the amount and transactionId keys from the decoded JSON
        $userid = $payments->user_id;
        $payid = $paymentid;
        $amount = $metaData->amount;
        $transactionId = uniqid();
        $merchatTransactionId = $metaData->merchantTransactionId;
        // =====================================-
        $merchantId='M1AOEB31BLM2';

        $saltKey = 'd45c57f6-ef87-46a3-989f-f7a6db75ac27';
        $saltIndex = 1;
        // $payload = [
        //     'merchantId' => 'MERCHANTUAT',
        //     'merchantUserId' => 'MUID123',
        //     'merchantTransactionId' => 'ROD620471739210623',
        //     'originalTransactionId' => 'OD620471739210623',
        //     'amount' => 100.00,
        //     'callbackUrl' => 'https://rakshak.synchsoft.in/build/apps/refundrequest',
        // ];
        $payload = [
            'merchantId' => $merchantId,
            'merchantTransactionId' => ($transactionId),
            'originalTransactionId' => $merchatTransactionId,
            'amount' => $amount,
            'callbackUrl' => 'https://adminpanel.rakshaksecuritas.com/build/apps/refundrequest',
        ];
        $encode = base64_encode(json_encode($payload));
        // $finalXHeader = hash('sha256','/pg/v1/refund/'.$saltKey).'###'.$saltIndex;
        $string = $encode.'/pg/v1/refund'.$saltKey;
        // $string = ($encode.'/pg/v1/refund'.'099eb0cd-02cf-4e2a-8aca-3e6c6aff0399');
        $sha256 = hash('sha256',$string);

        $finalXHeader = $sha256.'###'.$saltIndex;
        

        // $response = Curl::to('https://api.phonepe.com/apis/hermes/pg/v1/status/'.$merchantId.'/'.$transactionId)
        $response = Curl::to('https://api.phonepe.com/apis/hermes/pg/v1/refund')
                ->withHeader('Content-Type:application/json')
                ->withHeader('X-VERIFY:'.$finalXHeader)
                ->withData(json_encode(['request' => $encode]))
                ->post();
        // ===============================================

        $rData = json_decode($response);
        //return $rData;
        $RefundPayment = new RefundPayment();
        $RefundPayment->user_id = $userid;
        $RefundPayment->pay_id = $paymentid;
        $RefundPayment->code = $rData->code;
        $RefundPayment->message = $rData->message;
        $RefundPayment->meta_data = json_encode($rData->data);
        $RefundPayment->save();
        if ($RefundPayment) {
            $payments->is_refund_initiated = 1;
            $payments->save();

            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'payment_data' => $rData
            ], 201);
        }
    }


    /// All refund payments
    public function allRefundpayments($rowperpage, Request $request)
    {

        $query = RefundPayment::query();

        $query->join('users', 'payment_refund.user_id', '=', 'users.id')
            ->select('payment_refund.*', 'users.name as user_name');


        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('payment_refund.created_at', 'desc');
        $req_data = $query->paginate($rowperpage);

        if ($req_data) {
            // Transform the jobs data to include city names
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'request_data' => $req_data,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    /// check refund status
    public function refundStatus($id)
    {
        $refundPayment = RefundPayment::find($id);

        if (!$refundPayment) {
            return response()->json([
                'status' => false,
                'message' => 'RefundPayment not found.'
            ], 404);
        }

        $metaData = json_decode($refundPayment->meta_data);

        if ($metaData && isset($metaData->merchantTransactionId)) {
            $tra_id = $metaData->merchantTransactionId;
        } else {
          
            $tra_id = '65e85970c5263'; 

            $merchantId='M1AOEB31BLM2';

            $saltKey = 'd45c57f6-ef87-46a3-989f-f7a6db75ac27';
            $saltIndex = 1;
        $finalXHeader1 = hash('sha256','/pg/v1/status/'.$merchantId.'/'.$tra_id.$saltKey).'###'.$saltIndex;

        $responsestatus = Curl::to('https://api.phonepe.com/apis/hermes/pg/v1/status/'.$merchantId.'/'.$tra_id)
            ->withHeader('Content-Type:application/json')
            ->withHeader('accept:application/json')
            ->withHeader('X-VERIFY:' . $finalXHeader1)
            ->withHeader('X-MERCHANT-ID:' . $merchantId)
            ->get();

        $rData = json_decode($responsestatus);
       // return($rData);

        // Update the existing RefundPayment record
        $refundPayment->code = $rData->code;
        $refundPayment->message = $rData->message;
        $refundPayment->meta_data = json_encode($rData->data);

        if ($refundPayment->code == 'PAYMENT_SUCCESS') {
            $refundPayment->status = 1;
        } else {
            $refundPayment->status = 0;
        }
        $refundPayment->save();

        $user = AppUser::find($refundPayment->user_id);
        $user->is_refund = 1;
        $user->save();

        return response([
            'status' => true,
            'message' => 'RefundPayment record updated successfully.',
            'data' => $rData
        ], 200);
    }
}

    // check payment status
    public function checkPaymentStatus(Request $request)
    {
        $userid = $request->input('user_id');
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'transactionId' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()->all()], 422);
        }
        $transactionId = $request->input('transactionId');
        $merchantId='M1AOEB31BLM2';

        $saltKey = 'd45c57f6-ef87-46a3-989f-f7a6db75ac27';
        $saltIndex = 1;

        $finalXHeader = hash('sha256','/pg/v1/status/'.$merchantId.'/'.$transactionId.$saltKey).'###'.$saltIndex;

        // $response = Curl::to('https://api.phonepe.com/apis/hermes/pg/v1/status/'.$merchantId.'/'.$transactionId)
        $response = Curl::to('https://api.phonepe.com/apis/hermes/pg/v1/status/'.$merchantId.'/'.$transactionId)
                ->withHeader('Content-Type:application/json')
                ->withHeader('accept:application/json')
                ->withHeader('X-VERIFY:'.$finalXHeader)
                ->withHeader('X-MERCHANT-ID:'.$merchantId)
                ->get();

        $res_data = json_decode($response);
        if($res_data->code == 'PAYMENT_SUCCESS'){
            $payment = Payment::where('merchantTransactionId','=', $transactionId)->where('user_id','=',$userid)->first();
            $payment->code = $res_data->code;
            $payment->message = $res_data->message;
            $payment->meta_data = json_encode($res_data->data);
            $payment->save();

            if($payment){
                $user = AppUser::find($userid);
                $user->payment_status=1;
                $user->save();
            }
            return response()->json([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'payment_status' => $res_data
            ], 200);
        }else{
            $payment = Payment::where('merchantTransactionId','=', $transactionId)->where('user_id','=',$userid)->first();
            $payment->code = $res_data->code;
            $payment->message = $res_data->message;
            $payment->meta_data = json_encode($res_data->data);
            $payment->save();
            return response()->json([
                'status' => false,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'payment_status' => $res_data
            ], 200);

        }
    }

    /// All Amount data 
    public function allAmount($rowperpage, Request $request)
    {
        $query = PaymentAmount::query();
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('amount', 'like', "%{$searchTerm}%");
            });
        }

        $amount = $query->paginate($rowperpage);

        if ($amount) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'amount_data' => $amount,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    ///Edit Amount
    public function updateAmount(Request $request, $id)
    {
        $PaymentAmount = PaymentAmount::find($id);

        if (!$PaymentAmount) {
            return response()->json([
                'status' => false,
                'message' => 'PaymentAmount not found.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 422);
        }

        $PaymentAmount->amount = $request->input('amount');
        $PaymentAmount->save();

        return response([
            'status' => true,
            'message' => 'Skill updated successfully.',
            'amount_data' => $PaymentAmount
        ], 200);
    }

    public function allpayments($rowperpage, Request $request)
    {

        $query = Payment::query();

        $query->join('users', 'payment.user_id', '=', 'users.id')
            ->select('payment.*', 'users.name as user_name','users.phone_number as phone_number');


        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhere('payment.meta_data->transactionId', 'like', "%{$searchTerm}%")
                ->orWhere('phone_number', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('payment.created_at', 'desc');
        $req_data = $query->paginate($rowperpage);

        if ($req_data) {
            // Transform the jobs data to include city names
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'request_data' => $req_data,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

}
