<?php

namespace App\Http\Controllers;

use App\Models\AppliedJobs;
use App\Models\city;
use App\Models\Job;
use App\Models\skills;
use App\Models\state;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB; // for raw database query
use Carbon\Carbon; // for date formate

class JobsController extends Controller
{
    //All Jobs 
    public function alljobs($rowperpage, Request $request)
    {
        $query = Job::query()->with('skill'); // Include the skill relationship
        $query->with('city:id,name'); // Include the city relationship and only select the city_name and id columns.

        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('job_title', 'like', "%{$searchTerm}%");
            });
        }
        $query->orderByDesc('created_at');
        $jobs = $query->paginate($rowperpage);
        if ($jobs) {
            // Transform the jobs data to include city names
            $jobsData = $jobs->map(function ($job) {
                $locationIds = json_decode($job->location); // Decode the JSON array of city IDs
                $cityNames = city::whereIn('id', $locationIds)->pluck('name')->toArray(); // Retrieve city names
                $cityIds = city::whereIn('id', $locationIds)->pluck('id')->toArray(); // Retrieve city names
                $stateIds = city::whereIn('id', $locationIds)->distinct()->pluck('state_id')->toArray(); // Retrieve city names
                // $stateNames = state::whereIn('id', $stateIds)->pluck('name')->toArray();

                return [
                    'id' => $job->id,
                    'job_title' => $job->job_title,
                    'skill_title' => $job->skill->skill_title,
                    'skill_id' => $job->skill_id,
                    'designation' => $job->designation,
                    'salary' => $job->salary,
                    'job_description'=>$job->job_description,
                    'experience'=>$job->experience,
                    'company_name' => $job->company_name,
                    'location' => $cityNames, // Store city names as an array
                    'cityId' => $cityIds,
                    'stateName' => $stateIds,
                    'created_at' => $job->created_at,
                    'exp_date' => $job->exp_date,
                ];
            });

            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'jobs_data' => $jobsData,
                'pagination' => [
                    'current_page' => $jobs->currentPage(),
                    'per_page' => $jobs->perPage(),
                    'total' => $jobs->total(),
                    'last_page' => $jobs->lastPage(),
                    'from' => $jobs->firstItem(),
                    'to' => $jobs->lastItem(),
                ],
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    ///Getting all skills for Job creation
    public function getSkills()
    {
        $skills = skills::where('is_status', 1)->get();

        if ($skills) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'skills_data' => $skills,
            ], 200);
        } else {
            return response([
                'status' => false,
                'message' => 'No skills found.',
            ], 204);
        }
    }



    public function destroy($id)
    {
        $role = Job::findOrFail($id);
        $role->delete();
        return response()->json([
            'status' => true,
            'message' => 'Role Deleted Successfully.'
        ], 200);
    }


    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'skill_id' => 'required|exists:skills,id',
            'job_title' => 'required|string',
            'company_name' => 'required|string',
            'location' => 'required|array', // Validate location as an array
            'exp_date' => 'required|date',
            'salary' => 'nullable',
            'job_description' => 'required|string',
            'experience' => 'required|string',
            'designation'=>'required|string',
        ]);

        // Convert the array of locations to a JSON string
        $locationJson = json_encode($validatedData['location']);

        // Create the job using the validated data
        $job = Job::create([
            'skill_id' => $validatedData['skill_id'],
            'job_title' => $validatedData['job_title'],
            'company_name' => $validatedData['company_name'],
            'location' => $locationJson,
            'exp_date' => $validatedData['exp_date'],
            'job_description' =>$validatedData['job_description'],
            'salary' => $validatedData['salary'],
            'experience' => $validatedData['experience'],
            'designation'=> $validatedData['designation'],
        ]);

        if ($job) {
            return response()->json([
                'status' => true,
                'message' => 'Job created successfully.',
                'job' => $job,
            ], 201);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Failed to create job.',
            ], 500);
        }
    }

    /// Update Job
    public function updateJob(Request $request, $id)
    {
        $job = job::find($id);

        if (!$job) {
            return response()->json([
                'status' => false,
                'message' => 'Job not found.',
            ], 204);
        }

        $validator = Validator::make($request->all(), [
            'skill_id' => 'required',
            'job_title' => 'required|string',
            'company_name' => 'required|string',
            'location' => 'required|array', // Validate location as an array
            'exp_date' => 'required|date',
            'job_description' =>'required',
            'salary' => 'nullable',
            'experience' => 'required',
            'designation'=> 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 422);
        }
        $locationJson = json_encode($request->input('location'));
        $job->skill_id = $request->input('skill_id');
        $job->job_title = $request->input('job_title');
        $job->company_name = $request->input('company_name');
        $job->job_description = $request->input('job_description');
        $job->salary = $request->input('salary');
        $job->experience = $request->input('experience');
        $job->designation = $request->input('designation');
        $job->location = $locationJson;
        $job->exp_date = $request->input('exp_date');
        $job->save();

        return response([
            'status' => true,
            'message' => 'Role updated successfully.',
            'jobs_data' => $job
        ], 200);
    }

    // all state data 

    public function allStates()
    {

        $state = state::where('active', 1)->where('deleted', 0)->get();

        if ($state) {
            return response()->json([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'states_data' => $state,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Someting went wrong.',
            ], 500);
        }
    }


    public function allCities()
    {

        $cities = city::where('active', 1)->where('deleted', 0)->get();

        if ($cities) {
            return response()->json([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'cities_data' => $cities,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Someting went wrong.',
            ], 500);
        }
    }

    public function getCitiesByStates(Request $request)
    {
        $selectedStates = $request->input('selected_states'); // Array of selected state IDs

        // Fetch cities based on selected state IDs
        $cities = city::whereIn('state_id', $selectedStates)->where('active', 1)->where('deleted', 0)->get();

        return response()->json([
            'cities' => $cities,
        ]);
    }

    public function allJobsApplications(Request $request , $rowperpage){
        $query = AppliedJobs::query(); 

        $query->join('users', 'applied_jobs.user_id', '=', 'users.id')
      ->join('jobs', 'applied_jobs.job_id', '=', 'jobs.id')
      ->select('applied_jobs.*', 'users.name as user_name', 'users.phone_number as phone', 'users.dob as user_dob', 'users.gender as gender','users.marital_status as marital_status','users.mother_tounge as mother_tounge', 'jobs.job_title as job_title');

    
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhere('users.phone_number', 'like', "%{$searchTerm}%")
                ->orWhere('users.id', 'like', "%{$searchTerm}%");
            });
        }
    
        $query->orderBy('applied_jobs.created_at', 'desc');
        $app_job = $query->paginate($rowperpage);
    
        if ($app_job) {
            // Transform the jobs data to include city names
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'AppliedJobs_data' => $app_job,    
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }      
    }

    public function allJobsApplicationsReport(Request $request, $rowperpage){
        $query = AppliedJobs::query(); 
        //$skills = skills::query(); 

        $query->join('users', 'applied_jobs.user_id', '=', 'users.id')
        ->join('jobs', 'applied_jobs.job_id', '=', 'jobs.id')->join('skills', 'jobs.skill_id', '=', 'skills.id')
        ->leftJoin('employees', 'employees.user_id', '=', 'users.id')
        ->select('applied_jobs.*', 'users.id as user_id', 'users.name as user_name', 'skills.id as skill_id', 'skills.skill_title', 
        'jobs.designation as designation','jobs.exp_date', 'jobs.job_title as job_title', 'jobs.location as location', 'employees.emp_id');

     //   $query_data = $query->get();
    
       // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('users.name', 'like', "%{$searchTerm}%");
            });
        }
        if($request->startDate !=null ){
            // $request->startDate && $request->endDate,
            if($request->endDate == null){
                $request->endDate = $request->startDate;
            }
                $query->whereBetween(DB::raw('DATE(applied_jobs.created_at)'),
                        [
                            $request->startDate,
                            $request->endDate
                        ]);
        }
        if($request->has('skill_id')){
            $query->whereIn('skills.id', $request->skill_id);
        }
        if($request->has('report_status')){
            $query->whereIn('applied_jobs.status', $request->report_status);
        }
        if($request->designationSerch != null){
            $searchTerm = $request->input('designationSerch');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('jobs.designation', 'like', "%{$searchTerm}%");
            });
        }

        if ($request->has('location')) {
            // $locations = explode(',', $request->location);
            $locations=$request->location;
            $query->where(function ($query) use ($locations) {
                $query->where(function ($query) use ($locations) {
                    foreach ($locations as $loc) {
                        // Debugging statement

                        // Assuming location is stored as JSON array
                        $query->orWhereJsonContains('jobs.location', intval($loc));
                    }
                });
            });
        }

        $query->orderBy('applied_jobs.created_at', 'desc');
        $app_job = $query->paginate($rowperpage);
        $app_jobs = $app_job->map(function ($job){
            $locationIds = json_decode($job->location); // Decode the JSON array of city IDs
            $cityNames = city::whereIn('id', $locationIds)->pluck('name')->toArray(); // Retrieve city names

            return [
                'user_id' => $job->user_id,
                'user_name' => $job->user_name,
                'location' => implode(',', $cityNames),
                'status' => $job->status,
                'job_id' => $job->job_id,
                'job_title' => $job->job_title,
                'skill_id' => $job->skill_id,
                'skill_title' => $job->skill_title,
                'designation' => $job->designation,
                'location' => implode(',', $cityNames), // Store city names as an array
                'created_at' => Carbon::parse($job->created_at)->format('Y-m-d'),
                'exp_date' => strval($job->exp_date),
            ];
        });
        $query1 = AppliedJobs::query()->get();
        if ($app_job) {
            // Transform the jobs data to include city names
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'AppliedJobs_data' => $app_jobs,
                'pagination' => [
                    'current_page' => $app_job->currentPage(),
                    'per_page' => $app_job->perPage(),
                    'total' => $app_job->total(),
                    'last_page' => $app_job->lastPage(),
                    'from' => $app_job->firstItem(),
                    'to' => $app_job->lastItem(),
                ],
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        } 
    }

    public function downloadJobReport(Request $request){
        $query = AppliedJobs::query(); 
        //$skills = skills::query(); 

        $query->join('users', 'applied_jobs.user_id', '=', 'users.id')
      ->join('jobs', 'applied_jobs.job_id', '=', 'jobs.id')
      ->join('skills', 'jobs.skill_id', '=', 'skills.id');
     //   ->join('city', 'jobs.location', '=', 'city.city.id');
     //   ->select('applied_jobs.*', 'users.name as user_name', 'skills.id as skill_id', 'skills.skill_title', 'jobs.designation as designation', 'jobs.job_title as job_title', 'jobs.location as location');

    
       // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('users.name', 'like', "%{$searchTerm}%");
            });
        }
        if($request->startDate !=null ){
            // $request->startDate && $request->endDate,
            if($request->endDate == null){
                $request->endDate = $request->startDate;
            }
                $query->whereBetween(DB::raw('DATE(applied_jobs.created_at)'),
                        [
                            $request->startDate,
                            $request->endDate
                        ]);
        }
        if($request->skill_id !=null){
            $query->whereIn('skills.id', $request->skill_id);
        }
        if($request->report_status != null){
            $query->whereIn('applied_jobs.status', $request->report_status);
        }
        if($request->designationSerch != null){
            $searchTerm = $request->input('designationSerch');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('jobs.designation', 'like', "%{$searchTerm}%");
            });
        }

        if ($request->location != null) {
            $locations=$request->location;
                $query->where(function ($query) use ($locations) {
                    foreach ($locations as $loc) {
                        $query->orWhereJsonContains('jobs.location', intval($loc));
                    }
                });
        }

        $jobs = $query->get();

        if ($jobs) {
            // Transform the jobs data to include city names
            $jobsData = $jobs->map(function ($job) {
                $locationIds = json_decode($job->location); // Decode the JSON array of city IDs
                $cityNames = city::whereIn('id', $locationIds)->pluck('name')->toArray(); // Retrieve city names

                return [
                    //User Details....
                    'Application Status' => $job->status,
                    'User_id' => $job->user_id,
                    'user name' => $job->name,
                    'User DOB' => $job->dob,
                    'Gender' => $job->gender,
                    'Is User phone verified' => $job->is_phone_verified==1 ? "Yes" : "No",
                    'Is User Payment Verify' => $job->payment_status==1 ? "Yes" : "No",
                    'Is Payment rufund' => $job->is_refund==1 ? "Yes" : "No",

                    // Job Details....
                    'Job_title' => $job->job_title,
                    'Job Skill' => $job->skill_title,
                    'Experience required'=>$job->experience,
                    'Company_name' => $job->company_name,
                    'Designation' => $job->designation,
                    'Salary' => $job->salary,
                    'Description' => $job->description,
                    'Job Location' => implode(' ', $cityNames), // Store city names as an array
                    'Job Created_at' => Carbon::parse($job->created_at)->format('Y-m-d'),
                    // 'Applied Date' => Carbon::parse($job->created_at)->format('Y-m-d'),
                    'Job Exp_date' => strval($job->exp_date),
                ];
            });
        }
        if ($jobsData) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'AppliedJobs_data' => $jobsData,
                // 'demo' =>$jobs,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        } 
    }

}
