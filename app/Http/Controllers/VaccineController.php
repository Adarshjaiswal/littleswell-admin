<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vaccine;


class VaccineController extends Controller
{

    public function allVaccine($rowperpage, Request $request)
    {
        $query = Vaccine::query();
        // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('vaccine_name', 'like', "%{$searchTerm}%");
             
        });
    }

    $query->orderBy("created_at", "desc");
    $vac = $query->paginate($rowperpage);

    if ($vac) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'vaccine_data' => $vac,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
       
        
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'vaccine_name' => 'required|string',
            'description' => 'required|string', // Ensure this matches the column name
            'vac_time' => 'required|integer',  // Ensure this is an integer
            'time_value' => 'required|string|in:day,week,month', // Validate the type of time unit
            'status' => 'required',
        ]);

        // Calculate the number of days based on time_value
        switch ($validatedData['time_value']) {
            case 'week':
                $days = $validatedData['vac_time'] * 7; // 1 week = 7 days
                break;
            case 'month':
                $days = $validatedData['vac_time'] * 30; // Approximation: 1 month = 30 days
                break;
            case 'day':
            default:
                $days = $validatedData['vac_time']; // If 'day', no conversion needed
                break;
        }

        // Add the calculated number of days to the validated data
        $validatedData['day_for_vaccine'] = $days;

        try {
            // Create a new Vaccine record using the validated data
            $vaccine = Vaccine::create($validatedData);

            // Return a successful response with the created vaccine data
            return response()->json([
                'status' => true,
                'message' => 'Vaccine created successfully.',
                'vaccine' => $vaccine,
            ], 201);
        } catch (\Exception $e) {
            // Handle any errors that may occur during the database operation
            return response()->json([
                'status' => false,
                'message' => 'Failed to create vaccine. ' . $e->getMessage(),
            ], 500);
        }
    }


    public function update(Request $request, $id)
    {
        // Fetch the vaccine record from the database by its ID
        $vaccine = Vaccine::find($id);

        if (!$vaccine) {
            return response()->json([
                'status' => false,
                'message' => 'Vaccine not found.',
            ], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'vaccine_name' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'vac_time' => 'sometimes|required|integer',
            'time_value' => 'sometimes|required|string|in:day,week,month',
            'status' => 'sometimes|required',
        ]);

        // Calculate the number of days based on time_value, if provided
        if (isset($validatedData['vac_time']) && isset($validatedData['time_value'])) {
            switch ($validatedData['time_value']) {
                case 'week':
                    $days = $validatedData['vac_time'] * 7; // 1 week = 7 days
                    break;
                case 'month':
                    $days = $validatedData['vac_time'] * 30; // Approximation: 1 month = 30 days
                    break;
                case 'day':
                default:
                    $days = $validatedData['vac_time']; // If 'day', no conversion needed
                    break;
            }

            // Add the calculated number of days to the validated data
            $validatedData['day_for_vaccine'] = $days;
        }

        try {
            // Update the vaccine record with the validated data
            $vaccine->update($validatedData);

            // Return a successful response with the updated vaccine data
            return response()->json([
                'status' => true,
                'message' => 'Vaccine updated successfully.',
                'vaccine' => $vaccine,
            ], 200);
        } catch (\Exception $e) {
            // Handle any errors that may occur during the database operation
            return response()->json([
                'status' => false,
                'message' => 'Failed to update vaccine. ' . $e->getMessage(),
            ], 500);
        }
    }

    public function destroy($id)
    {
        // Fetch the vaccine record from the database by its ID
        $vaccine = Vaccine::find($id);

        if (!$vaccine) {
            return response()->json([
                'status' => false,
                'message' => 'Vaccine not found.',
            ], 404);
        }

        try {
            // Delete the vaccine record from the database
            $vaccine->delete();

            // Return a successful response indicating the vaccine was deleted
            return response()->json([
                'status' => true,
                'message' => 'Vaccine deleted successfully.',
            ], 200);
        } catch (\Exception $e) {
            // Handle any errors that may occur during the deletion
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete vaccine. ' . $e->getMessage(),
            ], 500);
        }
    }



}
