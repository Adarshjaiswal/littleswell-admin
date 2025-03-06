<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Illuminate\Support\Facades\Storage;

class PostsController extends Controller
{
    public function allPosts($rowperpage, Request $request)
    {
        $query = Posts::query();
        // Check if the "searchQuery" parameter is provided
   

    $query->orderBy("created_at", "desc");
    $vac = $query->paginate($rowperpage);

    if ($vac) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'posts_data' => $vac,
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
        // Fetch the vaccine record from the database by its ID
        $vaccine = Posts::find($id);

        if (!$vaccine) {
            return response()->json([
                'status' => false,
                'message' => 'Posts not found.',
            ], 404);
        }

        try {
            // Delete the vaccine record from the database
            $vaccine->delete();

            // Return a successful response indicating the vaccine was deleted
            return response()->json([
                'status' => true,
                'message' => 'Posts deleted successfully.',
            ], 200);
        } catch (\Exception $e) {
            // Handle any errors that may occur during the deletion
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete Posts. ' . $e->getMessage(),
            ], 500);
        }
    }



    public function update(Request $request, $id)
    {
        // Validate the request
        // $request->validate([
        //     'type' => 'required|in:image,video',
        //     'text' => 'required|string',
        //     'content' => 'required|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:10240', // 10MB limit
        // ]);

        // // Find the job record
        // $job = Posts::findOrFail($id);

        // // Update fields
        // $job->type = $request->type;
        // $job->text = $request->description;

        // // Handle file upload
        // if ($request->hasFile('content')) {
        //     // Delete old file if exists
        //     if ($job->content_path) {
        //         Storage::delete($job->content_path);
        //     }

        //     // Store new file
        //     $filePath = $request->file('content')->store('uploads/posts', 'public');
        //     $job->content_path = $filePath;
        // }

        // // Save the job
        // $job->save();

        return response()->json(['message' => 'Posts updated successfully!', 'post' => $request]);
    }


}
