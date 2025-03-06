<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

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
        Log::info('Update Request Data:', $request->all());
        
        // Find the job record
        $job = Posts::findOrFail($id);
        
        // Validate the request - make content optional since we might not be updating it
        $request->validate([
            'type' => 'required|in:image,video',
            'text' => 'required|string',
            'content' => 'nullable|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:10240', // 10MB limit
        ]);
        
        // Update basic fields
        $job->type = $request->type;
        $job->text = $request->text;
        
        // Handle file upload only if a new file is provided
        if ($request->hasFile('content')) {
            // Delete old file if exists
            if ($job->content_path) {
                // Extract the relative path from the full URL if needed
                $relativePath = str_replace(url('/storage/'), '', $job->content_path);
                if (Storage::disk('public')->exists($relativePath)) {
                    Storage::disk('public')->delete($relativePath);
                }
            }
            
            // Store new file and get relative path
            $relativePath = $request->file('content')->store('uploads/posts', 'public');
            
            // Create full URL path with domain
            $fullPath = url('/storage/' . $relativePath);
            
            // Store the full URL path
            $job->content_path = $fullPath;
        }
        
        // Save the job
        $job->save();
        
        return response()->json(['message' => 'Post updated successfully!', 'post' => $job]);
    }




    /**
 * Create a new post
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Illuminate\Http\Response
 */
public function create(Request $request)
{
    Log::info('Create Post Request Data:', $request->all());
    
    // Validate the request
    $request->validate([
        'type' => 'required|in:image,video',
        'text' => 'required|string',
        'content' => 'required|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:10240', // 10MB limit
    ]);
    
    // Create new post
    $post = new Posts();
    $post->type = $request->type;
    $post->text = $request->text;
    
    // Handle file upload
    if ($request->hasFile('content')) {
        // Store file
        $relativePath = $request->file('content')->store('uploads/posts', 'public');
        
        // Create full URL path
        $fullPath = asset('storage/' . $relativePath);
        
        // Store the full URL path
        $post->content_path = $fullPath;
    }
    
    // Save the post
    $post->save();
    
    return response()->json([
        'message' => 'Post created successfully!', 
        'post' => $post
    ], 201);
}

}
