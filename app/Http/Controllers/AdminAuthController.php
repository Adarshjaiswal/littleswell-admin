<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        if (!auth::guard('admin')->attempt($request->only('email', 'password'))) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    
        $user = auth()->guard('admin')->user();
        $accessToken = $user->createToken('authToken')->accessToken;
        $userAbilities = [];
        if ($user->role === 'admin') {
            $userAbilities = [
                ["action" => "manage", "subject" => "all"]
                // Add more abilities for admin role as needed
            ];
        } elseif ($user->role === 'account') {
            $userAbilities = [
                ["action" => "manage", "subject" => "all"]
                //["action" => "read", "subject" => "dashboard"],
                //["action" => "manage", "subject" => "apps-paymentamount"],
                // Add more abilities for account role as needed
            ];
        } elseif ($user->role === 'recruitment') {
            $userAbilities = [
                ["action" => "manage", "subject" => "all"]
                // ["action" => "read", "subject" => "dashboard"],
                // ["action" => "manage", "subject" => "apps-jobapplication"],
                 //["action" => "manage", "subject" => "apps-salaryslip"],
                // Add more abilities for recruitment role as needed
            ];
        } elseif ($user->role === 'compliances') {
            $userAbilities = [
                ["action" => "manage", "subject" => "all"]
                // ["action" => "read", "subject" => "dashboard"],
                // Add more abilities for compliances role as needed
            ];
        }
    
        return response(['userData' => $user, 'accessToken' => $accessToken, 'userAbilities' =>$userAbilities], 200);
    }

 
public function logout (Request $request)
{
    $token = $request->user()->token();
    $token->revoke();
    $response = ['message' => 'You have been successfully logged out!'];
    return response($response, 200);
}
}