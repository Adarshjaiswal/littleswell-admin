<?php

namespace App\Http\Controllers;

use App\Models\Concern;
use App\Models\concern_remark;
use Illuminate\Http\Request;


class ConcernController extends Controller
{
    //All states Data


    public function allConcerns($rowperpage, Request $request)
    {
        $query = Concern::query(); // Filter only non-deleted states
        
        // Include the user data in the query by joining the users table
        $query->join('users', 'concerns.user_id', '=', 'users.id')->leftJoin('employees', 'concerns.user_id', '=', 'employees.user_id')
              ->select('concerns.*', 'users.name as user_name', 'employees.emp_id'); // Include user's name in the selection
    
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('caseId', 'like', "%{$searchTerm}%")
                ->orWhere('name', 'like', "%{$searchTerm}%")
                ->orWhere('emp_id', 'like', "%{$searchTerm}%")
                ->orWhere('users.id', 'like', "%{$searchTerm}%");
            });
        }
    
        $query->orderBy('concerns.created_at', 'desc');
        $cons = $query->paginate($rowperpage);
    
        if ($cons) {
            // Transform the jobs data to include city names
            $conData = $cons->map(function ($con) {
                $id = $con->id;
                $remark = concern_remark::where('concern_id', $id)->pluck('admin_remark')->toArray(); // Retrieve city names
                $remarkString = implode(', ', $remark);
                return [
                    'id' => $con->id,
                    'user_id' => $con->user_id,
                    'emp_id' => $con->emp_id,
                    'caseId' => $con->caseId,
                    'message' => $con->message,
                    'remark' => $remarkString, // Store city names as an array
                    'status'=> $con->status,
                    'user_name'=> $con->user_name,
                    'created_at' => $con->created_at,
                   
                ];
            });

            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'concerns_data' => $conData,
                'pagination' => [
                    'current_page' => $cons->currentPage(),
                    'per_page' => $cons->perPage(),
                    'total' => $cons->total(),
                    'last_page' => $cons->lastPage(),
                    'from' => $cons->firstItem(),
                    'to' => $cons->lastItem(),
                ],
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }    
    }

    /// Add Remark
    public function addRemark(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'concern_id' => 'required|exists:concerns,id',
            'message' => 'required|string',
        ]);
    
        try {
            // Create a new Remark model instance
            $remark = new concern_remark;
            $remark->concern_id = $validatedData['concern_id'];
            $remark->admin_remark = $validatedData['message'];
    
            // Save the remark
            $remark->save();
    
            // Update the status in the concerns table
            Concern::where('id', $validatedData['concern_id'])->update(['status' => 1]);
    
            // You can return a success response or any additional data you need
            return response()->json([
                'status' => 'success',
                'message' => 'Remark saved successfully',
                'remark' => $remark,
            ], 201);
        } catch (\Exception $e) {
            // Handle any errors that occur during the saving process
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }


    // Update remark

public function updateRemark(Request $request)
{
    // Validate the request data, you may add validation rules here
    $request->validate([
        'concern_id' => 'required|exists:concerns,id',
        'message' => 'required|string',
    ]);

    // Find the concern by ID
    $concern = concern_remark::where('concern_id', $request->input('concern_id'))->first();

    if (!$concern) {
        return response()->json([
            'status' => 'error',
            'message' => 'Concern not found.',
        ], 204);
    }

    // Update the remark
    $concern->admin_remark = $request->input('message');
    $concern->save();

    return response()->json([
        'status' => 'success',
        'message' => 'Remark updated successfully.',
    ], 200);
}

    
    
    
}
