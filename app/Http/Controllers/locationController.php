<?php

namespace App\Http\Controllers;

use App\Models\city;
use App\Models\state;
use Illuminate\Http\Request;

class locationController extends Controller
{
    //All State with Pagination
    public function allStates($rowperpage, Request $request)
    {
        $query = State::where('deleted', 0); // Filter only non-deleted states
        
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%");
            });
        }
    
        $states = $query->paginate($rowperpage);
    
        if ($states) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'states_data' => $states,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }     
    }

    /// Get cities acccording to state
    public function getCities($rowPerPage, Request $request)
    {
        $stateIds = explode(',', $request->input('state_id')); // Convert comma-separated string to an array
        $page = $request->input('page', 1);
        $searchQuery = $request->input('searchQuery', '');

        $query = City::query()->whereIn('state_id', $stateIds)->where('deleted',0);

        if (!empty($searchQuery)) {
            $query->where('name', 'like', '%' . $searchQuery . '%');
        }

        $cities = $query->paginate($rowPerPage, ['*'], 'page', $page);

        return response()->json([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'cities_data' => $cities,
        ], 200);
    }
    
    

/// Toggele state status
public function toggleActive($id)
    {
        $state = State::find($id);

        if (!$state) {
            return response()->json([
                'status' => false,
                'message' => 'State not found.',
            ], 404);
        }

        // Toggle the active value
        $state->active = !$state->active;
        $state->save();

        return response()->json([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'state' => $state,
        ], 200);
    }


    ///Soft Delete
    public function softDelete($id){
        $resource = state::find($id);

        if (!$resource) {
            return response()->json([
                'status' => false,
                'message' => 'State not found.',
            ], 404);
        }

        // Update the 'deleted' column to 1
        $resource->update(['deleted' => 1]);

        return response()->json([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'resource' => $resource,
        ]);

    }



    /// Toggele City status
public function toggleActiveCity($id)
{
    $city = city::find($id);

    if (!$city) {
        return response()->json([
            'status' => false,
            'message' => 'City not found.',
        ], 404);
    }

    // Toggle the active value
    $city->active = !$city->active;
    $city->save();

    return response()->json([
        'status' => true,
        'message' => 'Request Successful, Data is Attached within this packet.',
        'state' => $city,
    ], 200);
}


///Soft Delete City
public function softDeleteCity($id){
    $resource = city::find($id);

    if (!$resource) {
        return response()->json([
            'status' => false,
            'message' => 'City not found.',
        ], 404);
    }

    // Update the 'deleted' column to 1
    $resource->update(['deleted' => 1]);

    return response()->json([
        'status' => true,
        'message' => 'Request Successful, Data is Attached within this packet.',
        'resource' => $resource,
    ]);

}
}
