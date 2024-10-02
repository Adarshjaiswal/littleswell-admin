<?php

namespace App\Http\Controllers;

use App\Models\roles;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RolesController extends Controller
{


    public function createrole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required',
            
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message' => $validator->errors()], 422);
        }
       

        $role = Admin::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
        ]);

        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'roles_data' => $role
        ], 201);
    }
    public function allroles($rowperpage, Request $request)
    {
        $query = Admin::query();
        // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%");
             
        });
    }

    $roles = $query->paginate($rowperpage);

    if ($roles) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'roles_data' => $roles,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
       
        
    }




    public function destroy($id)
    {
        $role = Admin::findOrFail($id);
        $role->delete();
        return response()->json([
            'status' => true,
            'message' => 'Role Deleted Successfully.'
        ], 200);

        
    }


    public function updateRole(Request $request, $id)
    {
    $role = Admin::find($id);

    if (!$role) {
        return response()->json([
            'status' => false,
            'message' => 'Role not found.',
        ], 404);
    }

    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|unique:roles,role_title,' . $id,
        'password' => 'required',
        'role' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json(['status' => false, 'message' => $validator->errors()], 422);
    }

    $role->name = $request->input('name');
    $role->email = $request->input('email');
    $role->password = bcrypt($request->input('password'));
    $role->role = $request->input('role');
    $role->save();

    return response([
        'status' => true,
        'message' => 'Role updated successfully.',
        'roles_data' => $role
    ], 200);
}

public function getRoleDetail($id)
{
    $role = Admin::find($id);

    if (!$role) {
        return response()->json([
            'status' => false,
            'message' => 'Role not found.',
        ], 404);
    }

    return response()->json([
        'status' => true,
        'message' => 'Role details fetched successfully.',
        'role_data' => $role
    ], 200);
}
}
