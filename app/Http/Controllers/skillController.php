<?php

namespace App\Http\Controllers;

use App\Models\skills;
use App\Models\user_pre_skills;
use App\Models\user_pre_sub_skills;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class skillController extends Controller
{
    //create skill
    public function createSkill(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'skill_title' => 'required|unique:skills',
            'description' => 'required',
            
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message' => $validator->errors()], 422);
        }
       

        $skill = skills::create([
            'skill_title' => $request->input('skill_title'),
            'description' => $request->input('description'),
        ]);

        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'skill_data' => $skill
        ], 201);
    }
    
    //create Prefered skill
    public function createPreferedSkill(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'skill_title' => 'required',
            
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message' => $validator->errors()], 422);
        }
       

        $skill = user_pre_skills::create([
            'pre_skill_title' => $request->input('skill_title'),
        ]);

        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'skill_data' => $skill
        ], 201);
    }

    
    // all skill 
    public function allSkills($rowperpage, Request $request)
    {
        $query = skills::query();
        // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('skill_title', 'like', "%{$searchTerm}%");
             
        });
    }

    $query->orderBy("skills.created_at", "desc");
    $skill = $query->paginate($rowperpage);

    if ($skill) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'skills_data' => $skill,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
       
        
    }

    //get All Prefered Skills
    // public function allPreferedSkills($rowperpage, Request $request)
    // {
    //     $query = user_pre_skills::leftJoin( 'pre_sub_skills.pre_skill_id', '=', 'preference_skills.id');
    //     // Check if the "searchQuery" parameter is provided
    //     if ($request->has('searchQuery')) {
    //         $searchTerm = $request->input('searchQuery');

    //         // Apply the search filter to the query
    //         $query->where(function ($q) use ($searchTerm) {
    //             $q->where('pre_skill_title', 'like', "%{$searchTerm}%");
                
    //         });
    //     }

    //     $query->orderBy("created_at", "desc");
    //     $skill = $query->paginate($rowperpage);

    //     if ($skill) {
    //         return response([
    //             'status' => true,
    //             'message' => 'Request Successful, Data is Attached within this packet.',
    //             'skills_data' => $skill,
    //         ], 200);
    //     } else {
    //         return response()->json([
    //             'status' => false,
    //             'message' => 'Something went wrong.'
    //         ], 500);
    //     }
       
        
    // }


    public function allPreferedSkills($rowperpage, Request $request)
    {
        $query = user_pre_skills::query()->with('subSkills'); // Assuming the relationship is named 'subSkills'
    
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('pre_skill_title', 'like', "%{$searchTerm}%");
            });
        }
    
        $query->orderBy("created_at", "desc");
        $skills = $query->paginate($rowperpage);
    
        if ($skills) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'skills_data' => $skills,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }
    

 
    
    // Delete skills
    public function destroy($id)
    {
        $role = skills::findOrFail($id);
        $role->delete();
        return response()->json([
            'status' => true,
            'message' => 'Skill Deleted Successfully.'
        ], 200);
 
    }

    // Delete Prefered skills
    public function destroyPreferedSkill($id)
    {
        $role = user_pre_skills::findOrFail($id);
        $role->delete();
        return response()->json([
            'status' => true,
            'message' => 'Skill Deleted Successfully.'
        ], 200);
        
    }

     // Delete Prefered skills
     public function destroyPreferedSubSkill($id)
     {
         $role = user_pre_sub_skills::findOrFail($id);
         $role->delete();
         return response()->json([
             'status' => true,
             'message' => 'Skill Deleted Successfully.'
         ], 200);
         
     }

// Update skill
    public function updateSkill(Request $request, $id)
    {
    $skill = skills::find($id);

    if (!$skill) {
        return response()->json([
            'status' => false,
            'message' => 'Skill not found.',
        ], 404);
    }

    $validator = Validator::make($request->all(), [
        'skill_title' => 'required|unique:skills,skill_title,' . $id,
        'description' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json(['status' => false, 'message' => $validator->errors()], 422);
    }

    $skill->skill_title = $request->input('skill_title');
    $skill->description = $request->input('description');
    $skill->save();

    return response([
        'status' => true,
        'message' => 'Skill updated successfully.',
        'skills_data' => $skill
    ], 200);
}


// Update Prefered skill
public function updatePreferedSkill(Request $request, $id)
{
    $skill = user_pre_skills::find($id);

    if (!$skill) {
        return response()->json([
            'status' => false,
            'message' => 'Skill not found.',
        ], 404);
    }

    $validator = Validator::make($request->all(), [
        'pre_skill_title' => 'required|unique:preference_skills,pre_skill_title,' . $id,
    ]);

    if ($validator->fails()) {
        return response()->json(['status' => false, 'message' => $validator->errors()], 422);
    }

    $skill->pre_skill_title = $request->input('pre_skill_title');
    $skill->save();

    return response([
        'status' => true,
        'message' => 'Skill updated successfully.',
        'skills_data' => $skill
    ], 200);
}

// Update Prefered sub-skill
public function updatePreferedSubSkill(Request $request)
{
    // Retrieve the array of sub-skills from the request
    $subSkillsData = $request->input('subSkillsData');

    // Check if sub-skills data is provided
    if (empty($subSkillsData)) {
        return response()->json([
            'status' => false,
            'message' => 'No sub-skills data provided.',
        ], 422);
    }

    // Use the map method to iterate through the sub-skill data
    collect($subSkillsData)->map(function ($subSkillData) {
        // Check if the 'id' key is present in the sub-skill data
        if (!isset($subSkillData['id'])) {
            return response()->json([
                'status' => false,
                'message' => 'ID not provided in sub-skill data.',
            ], 422);
        }

        // Find the sub-skill by its ID
        $subskill = user_pre_sub_skills::find($subSkillData['id']);

        // Check if the sub-skill is found
        if (!$subskill) {
            return response()->json([
                'status' => false,
                'message' => 'Sub-skill not found.',
            ], 404);
        }

        // Validate the title for uniqueness
        $validator = Validator::make($subSkillData, [
            'title' => 'required|unique:pre_sub_skills,title,' . $subSkillData['id'],
        ]);

        // If validation fails, return the error response
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 422);
        }

        // Update the sub-skill's title
        $subskill->title = $subSkillData['title'];
        $subskill->save();
    });

    return response([
        'status' => true,
        'message' => 'Sub Skills updated successfully.',
    ], 200);
}





// // Add Prefered Sub Skills
public function createPreferedSubSkill(Request $request, $id,)
{
    $validator = Validator::make($request->all(), [
        'pre_sub_skill_title' => 'required',
        
    ]);
    if ($validator->fails()) {
        return response()->json(['status'=>false,'message' => $validator->errors()], 422);
    }
   

    $skill = user_pre_sub_skills::create([
        'pre_skill_id' => $id,
        'title' => $request->input('pre_sub_skill_title'),
    ]);

    return response([
        'status' => true,
        'message' => 'Request Successful, Data is Attached within this packet.',
        'skill_data' => $skill
    ], 201);
}
// public function createOrUpdatePreferedSubSkill(Request $request, $id)
// {
//     $validator = Validator::make($request->all(), [
//         'pre_sub_skill_title' => 'required',
//     ]);

//     if ($validator->fails()) {
//         return response()->json(['status' => false, 'message' => $validator->errors()], 422);
//     }

//     // Use updateOrCreate to insert or update the record
//     $skill = user_pre_sub_skills::updateOrCreate(
//         ['pre_skill_id' => $id, 'title' => $request->input('pre_sub_skill_title')],
//         ['pre_skill_id' => $id, 'title' => $request->input('pre_sub_skill_title')]
//     );

//     return response([
//         'status' => true,
//         'message' => 'Request Successful, Data is Attached within this packet.',
//         'skill_data' => $skill
//     ], 201);
// }


    // Get All Prefered Sub Skills
    public function allPreferedSubSkills($rowperpage, Request $request)
    {
        $query = user_pre_sub_skills::query();
        // Check if the "searchQuery" parameter is provided
    // if ($request->has('searchQuery')) {
    //     $searchTerm = $request->input('searchQuery');

    //     // Apply the search filter to the query
    //     $query->where(function ($q) use ($searchTerm) {
    //         $q->where('pre_skill_title', 'like', "%{$searchTerm}%");
             
    //     });
    // }

    $query->orderBy("created_at", "desc");
    $skill = $query->paginate($rowperpage);

    if ($skill) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'sub_skills_data' => $skill,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
       
        
    }


    
}
