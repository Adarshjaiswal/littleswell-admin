<?php

namespace App\Http\Controllers;

use App\Models\AadharVerification;
use App\Models\acc_deactivation;
use App\Models\AppliedJobs;
use App\Models\AppUser;
use App\Models\Employee;
use App\Models\Job;
use App\Models\Payment;
use App\Models\skills;
use App\Models\User;
use App\Models\city;
use App\Models\user_pre_skills;
use App\Models\user_pre_sub_skills;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB; // for raw database query
use Carbon\Carbon; // for date formate
use Ixudra\Curl\Facades\Curl;
use App\Models\children;
// use Maatwebsite\Excel\Facades\Excel;
// use App\Imports\EmpBulkImport;

class AppUserController extends Controller
{
    //All user
    public function allUsers($rowPerPage, Request $request)
    {
        $query = AppUser::query();
    
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');
    
            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
                  ->orWhere('phone_number', 'like', "%{$searchTerm}%");
            });
        }
    
        $query->orderBy('created_at', 'desc');
        $users = $query->paginate($rowPerPage);
    
        if ($users->isNotEmpty()) {
            return response()->json([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'users_data' => $users,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'No users found.'
            ], 404);
        }
    }
    
    /// All deactivation requests
    public function alldeactivationrequests($rowperpage, Request $request)
    {
        $query = acc_deactivation::query();
        $query->join('users', 'acc_deactivations.user_id', '=', 'users.id')
        
            ->select('acc_deactivations.*',  'users.name as user_name'); // Include user's name in the selection
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%")
               
                ->orWhere('users.id', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('acc_deactivations.created_at', 'desc');
        $reqs = $query->paginate($rowperpage);

        if ($reqs) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'requests_data' => $reqs,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    // change deactivation status for account 
    public function changeStatusForAccDeactivation($id)
    {
        // Check if the ID exists in the acc_deactivation table
        $accDeactivation = acc_deactivation::find($id);
    
        if (!$accDeactivation) {
            return response()->json([
                'status' => false,
                'message' => 'ID not found in acc_deactivation table.'
            ], 404);
        }
    
        // Toggle the status in acc_deactivation
        $accDeactivation->status = !$accDeactivation->status;
        $accDeactivation->save();
    
        // Get the user_id associated with the acc_deactivation record
        $user_id = $accDeactivation->user_id;
    
        // Toggle the is_deactivated column in the users table
        $appUser = Appuser::where('id',$user_id)->first();
    
        if ($appUser) {
            $appUser->is_deactivated = !$appUser->is_deactivated;
            $appUser->save();
    
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'User not found.'
            ], 404);
        }
    }

    ///User details function
    public function UserDetails($id)
        {
            // Find the user record
            $user = AppUser::find($id);

            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found.'
                ], 404);
            }
            $child = children::where('user_id','=',$user->id)->get();
            return response()->json([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'user_details' => $user,
                'child_details'=> $child

            ], 200);
        }



    ///Dashboard -Data
    public function dashboard(){
        // jobApplications data count
        $jobApplications = AppliedJobs::count();
        // listed job data count
        $listedJobs = Job::count();
        // listed skill data count
        $listedSkills = skills::count();
        // all user data count
        $allUser = User::where('is_phone_verified', '=', '1')->leftJoin('employees','employees.user_id','=','users.id')->count();
        // $allUser = User::join('skills','skills.id','=','users.skills')->join('aadhar_verifications', 'aadhar_verifications.user_id', '=', 'users.id')->count();

        return response()->json([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'jobApplications' => $jobApplications,
            'listedJobs' => $listedJobs,
            'listedRoles' =>$listedSkills,
            'allUsers'=>$allUser

        ], 200);
    }

    // Update User by Admin
    public function updateuserbyadmin(Request $request, $id)
    {
        $updatedPhone = $request->input('phone_number');
        $user = AppUser::find($id);
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ], 404);
        }

        $isUser = AppUser::find($request->input('phone_number'));
        if($user->phone_number != $updatedPhone && $isUser){
                return response()->json([
                    'status' => false,
                    'message' => 'User Phone is already exists in database.',
                ], 404);
        }

        $validator = Validator::make($request->all(), [
            'phone_number' => 'required|unique:users,phone_number,' . $id,
            'name' => 'required',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 422);
        }
    
        $user->phone_number = $updatedPhone;
        $user->name = $request->input('name');
        $user->save();
        return response([
            'status' => true,
            'message' => 'Skill updated successfully.',
            'skills_data' => $user
        ], 200);
    }

// change Aadhar status
public function ChangeAadharStatus($id){
    $verification = AadharVerification::where('user_id','=',$id)->first();

    if (!$verification) {
        return response()->json([
            'status' => false,
            'message' => 'Adhar verification record not found.',
        ], 404);
    }

    // Toggle the is_verified status
    $verification->is_verified = !$verification->is_verified;
    $verification->save();

    return response()->json([
        'status' => true,
        'message' => 'Adhar verification status updated successfully.',
        'new_status' => $verification->is_verified,
    ], 200);

}

 //All user
 public function allUsersReport($rowperpage, Request $request)
 {
    $query = AppUser::leftJoin('aadhar_verifications', 'aadhar_verifications.user_id', '=', 'users.id')
    ->leftJoin('skills','skills.id', '=','users.skills')
    ->leftJoin('employees', 'employees.user_id', '=', 'users.id')
    ->select('users.*', 'aadhar_verifications.aadhar_number', 'aadhar_verifications.is_verified', 'skills.skill_title as skill_title', 'employees.emp_id');
     // Check if the "searchQuery" parameter is provided
     if ($request->has('searchQuery')) {
         $searchTerm = $request->input('searchQuery');

         // Apply the search filter to the query
         $query->where(function ($q) use ($searchTerm) {
             $q->where('name', 'like', "%{$searchTerm}%")
             ->orWhere('users.id', 'like', "%{$searchTerm}%")
             ->orWhere('phone_number', 'like', "%{$searchTerm}%")
             ->orWhere('aadhar_number', 'like', "%{$searchTerm}%");
         });
     }
     if($request->startDate !=null ){
        // $request->startDate && $request->endDate,
        if($request->endDate == null){
            $request->endDate = $request->startDate;
        }
            $query->whereBetween(DB::raw('DATE(users.created_at)'),
                    [
                        $request->startDate,
                        $request->endDate
                    ]);
    }
    if($request->has('skill_id') ){
        $query->whereIn('skills.id', $request->skill_id);
    }
    if($request->has('payment_status')){
        if($request->payment_status=="Accepted"){
            $query->where('users.payment_status', '1');
        }else{
            $query->where('users.payment_status', '0');
        }
    }

    // if ($request->location != null) {
    //         $query->whereIn('users.location', $request->location);
    // }

     $query->orderBy('users.created_at', 'desc');
     $users = $query->paginate($rowperpage);
    //  $users = $query->get();

     if ($users) {
         return response([
             'status' => true,
             'message' => 'Request Successful, Data is Attached within this packet.',
             'users_data' => $users,
         ], 200);
     } else {
         return response()->json([
             'status' => false,
             'message' => 'Something went wrong.'
         ], 500);
     }
 }

 public function downloadUsersReport(Request $request){
    $query = AppUser::
    leftJoin('aadhar_verifications','aadhar_verifications.user_id','=','users.id')
    ->leftJoin('skills','skills.id','=','users.skills')
    ->leftJoin('employees','employees.user_id','=','users.id')
    ->select('users.id','users.name', 'users.email', 'users.phone_number', 'users.location', 'users.is_phone_verified',
     'users.payment_status', 'users.created_at', 'aadhar_verifications.is_verified as adhar_verified',
      'aadhar_verifications.aadhar_number', 'skills.skill_title', 'employees.emp_id');
    // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%");
        });
    }
    if($request->startDate !=null ){
       // $request->startDate && $request->endDate,
       if($request->endDate == null){
           $request->endDate = $request->startDate;
       }
           $query->whereBetween(DB::raw('DATE(users.created_at)'),
                   [
                       $request->startDate,
                       $request->endDate
                   ]);
   }
   if($request->has('skill_id') ){
      $query->whereIn('skills.id', $request->skill_id);
    }

   if ($request->location != null) {
           $query->whereIn('users.location', $request->location);
   }

   if($request->has('payment_status')){
        if($request->payment_status=="Accepted"){
            $query->where('users.payment_status', '1');
        }else{
            $query->where('users.payment_status', '0');
        }
    }

    $query->orderBy('users.created_at', 'desc');
    // $users = $query->get();
    $totalRows = $query->count();
            $chunkSize = min(max(1000, ceil($totalRows / 50)), 5000);
            $chunks = [];
            $query->chunk($chunkSize, function ($users) use (&$chunks) {
                // Collect each chunk of data
                $chunks[] = $users->toArray();
            });

    if ($chunks) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'users_data' => $chunks,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
}


public function nonApplicantUsersReport($rowperpage, Request $request)
{
    $query = AppUser::
        leftJoin('aadhar_verifications', 'aadhar_verifications.user_id', '=', 'users.id')
        ->leftJoin('skills', 'skills.id', '=', 'users.skills')
        ->leftJoin('user_job_preference', 'user_job_preference.user_id', '=', 'users.id')
        ->whereNotExists(function ($subquery) {
            $subquery->select(DB::raw(1))
                ->from('applied_jobs')
                ->whereRaw('applied_jobs.user_id = users.id');
        })
        ->whereNotExists(function ($subquery) {
            $subquery->select(DB::raw(1))
                ->from('employees')
                ->whereRaw('employees.user_id = users.id');
        })
        ->select('users.*', 'user_job_preference.pre_skills', 'user_job_preference.pre_sub_skills', 'user_job_preference.location as prefered_job_locaction',
         'aadhar_verifications.aadhar_number', 'aadhar_verifications.is_verified', 'skills.skill_title as skill_title');

    // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');
        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%")
            ->orWhere('users.id', 'like', "%{$searchTerm}%")
            ->orWhere('phone_number', 'like', "%{$searchTerm}%")
            ->orWhere('aadhar_number', 'like', "%{$searchTerm}%");
        });
    }

    if ($request->startDate != null) {
        if ($request->endDate == null) {
            $request->endDate = $request->startDate;
        }
        $query->whereBetween(DB::raw('DATE(users.created_at)'), [
            $request->startDate,
            $request->endDate
        ]);
    }

    if ($request->has('skill_id')) {
        $query->whereIn('skills.id', $request->skill_id);
    }

    if ($request->has('payment_status')) {
        $query->where('users.payment_status', ($request->payment_status == "Accepted") ? '1' : '0');
    }

    $query->orderBy('users.created_at', 'desc');
    $users = $query->paginate($rowperpage);

    $non_applicant_users = $users->map(function ($user) {
        $prefered_sub_skills = $user->pre_sub_skills ? user_pre_sub_skills::whereIn('id', explode(',', $user->pre_sub_skills))->get() : "";
        $prefered_skills = $user->pre_skills ? user_pre_skills::where('id', $user->pre_skills)->get() : [];

        $locationIds = $user->prefered_job_locaction ? explode(',', $user->prefered_job_locaction) : "";
        $cityNames = $locationIds ? city::whereIn('id', $locationIds)->pluck('name')->toArray() : "";

        return [
            'id' => $user->id,
            'name' => $user->name,
            'dob' => $user->dob,
            'email' => $user->email,
            'phone_number' => $user->phone_number,
            'prefered_skills' => $prefered_skills ? $prefered_skills->pluck('pre_skill_title')->implode(','): "",
            'prefered_sub_skills' => $prefered_sub_skills ? $prefered_sub_skills->pluck('title')->implode(','): "",
            'gender' => $user->gender,
            'location' => $user->location,
            'marital_status' => $user->marital_status,
            'mother_tounge' => $user->mother_tounge,
            'is_phone_verified' => $user->is_phone_verified,
            'payment_status' => $user->payment_status,
            'aadhar_number' => $user->aadhar_number,
            'skill_title' => $user->skill_title,
            'prefered_job_location' => $cityNames ? implode(',',$cityNames) : "", 
            'created_at' => Carbon::parse($user->created_at)->format('Y-m-d'),
        ];
    });

    if ($non_applicant_users) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'users_data' => $non_applicant_users,
            'pagination' => [
                'current_page' => $users->currentPage(),
                'per_page' => $users->perPage(),
                'total' => $users->total(),
                'last_page' => $users->lastPage(),
                'from' => $users->firstItem(),
                'to' => $users->lastItem(),
            ],
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
}

public function downloadNonApplicantUsersReport(Request $request){
    $query = AppUser::
        leftJoin('aadhar_verifications', 'aadhar_verifications.user_id', '=', 'users.id')
        ->leftJoin('skills', 'skills.id', '=', 'users.skills')
        ->leftJoin('user_job_preference', 'user_job_preference.user_id', '=', 'users.id')
        ->whereNotExists(function ($subquery) {
            $subquery->select(DB::raw(1))
                ->from('applied_jobs')
                ->whereRaw('applied_jobs.user_id = users.id');
        })
        ->whereNotExists(function ($subquery) {
            $subquery->select(DB::raw(1))
                ->from('employees')
                ->whereRaw('employees.user_id = users.id');
        })
        ->select('users.*', 'user_job_preference.pre_skills', 'user_job_preference.pre_sub_skills', 'user_job_preference.location as prefered_job_locaction',
         'aadhar_verifications.aadhar_number', 'aadhar_verifications.is_verified', 'skills.skill_title as skill_title');

    // Check if the "searchQuery" parameter is provided
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');
        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%")
            ->orWhere('users.id', 'like', "%{$searchTerm}%")
            ->orWhere('phone_number', 'like', "%{$searchTerm}%")
            ->orWhere('aadhar_number', 'like', "%{$searchTerm}%");
        });
    }

    if ($request->startDate != null) {
        if ($request->endDate == null) {
            $request->endDate = $request->startDate;
        }
        $query->whereBetween(DB::raw('DATE(users.created_at)'), [
            $request->startDate,
            $request->endDate
        ]);
    }

    if ($request->has('skill_id')) {
        $query->whereIn('skills.id', $request->skill_id);
    }

    if ($request->has('payment_status')) {
        $query->where('users.payment_status', ($request->payment_status == "Accepted") ? '1' : '0');
    }

    $query->orderBy('users.created_at', 'desc');
    $users = $query->get();

    $non_applicant_users = $users->map(function ($user) {
        $prefered_sub_skills = $user->pre_sub_skills ? user_pre_sub_skills::whereIn('id', explode(',', $user->pre_sub_skills))->get() : "";
        $prefered_skills = $user->pre_skills ? user_pre_skills::where('id', $user->pre_skills)->get() : [];

        $locationIds = $user->prefered_job_locaction ? explode(',', $user->prefered_job_locaction) : "";
        $cityNames = $locationIds ? city::whereIn('id', $locationIds)->pluck('name')->toArray() : "";

        return [
            'id' => $user->id,
            'name' => $user->name,
            'dob' => $user->dob,
            'email' => $user->email,
            'phone_number' => $user->phone_number,
            'location' => $user->location,
            'prefered_skills' => $prefered_skills ? $prefered_skills->pluck('pre_skill_title')->implode(','): "",
            'prefered_sub_skills' => $prefered_sub_skills ? $prefered_sub_skills->pluck('title')->implode(','): "",
            'gender' => $user->gender,
            'marital_status' => $user->marital_status,
            'mother_tounge' => $user->mother_tounge,
            'is_phone_verified' => $user->is_phone_verified,
            'is_deactivated' => $user->is_deactivated,
            'is_refund' => $user->is_refund,
            'payment_status' => $user->payment_status,
            'aadhar_number' => $user->aadhar_number,
            'skill_title' => $user->skill_title,
            'prefered_job_location' => $cityNames ? implode(',',$cityNames) : "", 
            'created_at' => Carbon::parse($user->created_at)->format('Y-m-d'),
        ];
    });

  

    if ($non_applicant_users) {
        return response([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'users_data' => $non_applicant_users,
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.'
        ], 500);
    }
}


   /// replace null values to string empty
   private function replaceNullWithEmptyString($data)
   {
       if (is_array($data) || is_object($data)) {
           foreach ($data as &$value) {
               $value = $this->replaceNullWithEmptyString($value);
           }
       } elseif ($data === null) {
           return ''; // Replace null with an empty string
       }
   
       return $data;
   }

//    Verify Excel sheet for duplicate value before uploading
public function verifybulkdata(Request $request)
{
    try {
        // Validate the incoming data (optional)
        $data = $request->json()->all();
        $data['StringJsonData'] = $this->replaceNullWithEmptyString($data['StringJsonData']);

        // Extract EmpId and EmpPhone values
        $empIds = array_column($data['StringJsonData'], 'EmpId');
        $empPhones = array_column($data['StringJsonData'], 'EmpPhone');

        // Check for duplicate EmpId or EmpPhone
        $existingEmpIds = Employee::whereIn('emp_id', $empIds)->pluck('emp_id')->toArray();
        $existingEmpPhones = AppUser::whereIn('phone_number', $empPhones)->pluck('phone_number')->toArray();

        if (!empty($existingEmpIds)) {
            return response()->json([
                'message' => 'Data Has Some Duplicate Employee Id in Employee Table',
                'existingEmpIds' => $existingEmpIds,
                'status' => "FAILED",
            ], 200);
        }

        if (!empty($existingEmpPhones)) {
            return response()->json([
                'message' => 'Data Has Some Duplicate Phone in user Table',
                'existingEmpPhones' => $existingEmpPhones,
                'status' => "FAILED",
            ], 200);
        }

        return response()->json([
            'message' => 'Data Has No Duplicate Employee Id',
            'data' => count($empIds),
            'status' => "SUCCESS",
        ], 200);

    } catch (Exception $e) {
        return response()->json(['error' => $e], 500);
    }
}

//  Import Excel sheet data into database
   public function importbulkdata(Request $request)
   {
       try {
           // Validate the incoming data (optional)
           $data = $request->json()->all();

           $data['StringJsonData'] = $this->replaceNullWithEmptyString($data['StringJsonData']);

           
           // Use array_map to extract EmpId values
           $empIds = array_map(function ($row) {
            return $row['EmpId'];
           }, $data['StringJsonData']);
        //    $ifEmpIdExists = Employee::whereIn('emp_id', $empIds);
              $ifEmpIdExists = Employee::whereIn('emp_id', $empIds)->count() > 0;
              if ($ifEmpIdExists) 
              {
                return response()->json([
                    'message' => 'Data Has Some Duplicate Employee Id',
                    'ifEmpIdExists' => $ifEmpIdExists,
                ], 200);
            
              }else{
                foreach ($data['StringJsonData'] as $row) {
                    // Extract the phone_number from the Excel data
                    $phone_number = $row['EmpPhone'];
     
                    // Create or find the user by phone number
                    $user = AppUser::updateOrCreate(
                        ['phone_number' => $phone_number],
                        [
                            'name' => $row['Empfname'],
                           'dob' => $row['EmpDtofBirth'],
                            'payment_status' => 1,
                            'is_phone_verified' => 1                        
                        ]
                    );
                    //Create a aadharcard instance and set value
                    // Check if an AadharVerification record exists for the user
                   $aadharVerification = AadharVerification::where('user_id', $user->id)->first();
     
                     if (!$aadharVerification) {
                         // Create a new AadharVerification instance and set values
                         $aadharVerification = new AadharVerification();
                         $aadharVerification->user_id = $user->id;
                     }
     
                  // Update or set AadharVerification values
                  $aadharVerification->aadhar_number = $row['AadharCardNo'];
                  // ... (other fields)
     
                  // Save the AadharVerification record
                  $aadharVerification->save();
                    
                    $employee = Employee::where('user_id', $user->id)->first();
     
                    if (!$employee) {
                      
                    // Create a new Employee instance and set values
                    $employee = new Employee();
                    $employee->user_id = $user->id;
                    $employee->emp_name = $row['Empfname'];
                    $employee->emp_father_name = $row['EmpFatherName'];
                    $employee->emp_mother_name = '';
                    $employee->emp_department = '';
                    // $employee->date_of_birth = $row['EmpDtofBirth'];
                    $employee->sex = $row['EmpSex'];	
                    $employee->client_id = '';
                    $employee->emp_branch = '';
                    $employee->emp_division = '';
                    $employee->emp_type = '';
                    $employee->marital_status = $row['EmpMaritalStatus'];
                    $employee->designation = $row['EmpDesgn'];
                    $employee->doj = $row['EmpDtofJoining'];
                    $employee->uan = $row['EmpUANNumber'];
                    // $employee->mobile_number = $row['AadharCardNo'];
                    $employee->pancard_number = $row['PanCardNo'];
                    $employee->bank_name = $row['Bankname']; 
                    $employee->ifsc	 = $row['EmpIFSCcode'];
                    $employee->old_empid = $row['oldempid'];
                    $employee->bank_ac_no = $row['EmpBankAcNo']; 
                    $employee->emp_pf_applicable = $row['EmpPFDeduct'];
                    $employee->emp_pt_applicable = $row['EmpPTDeduct'];
                    $employee->emp_esi_applicable = $row['EmpESIDeduct']; 
                    $employee->emp_pf_no = $row['EmpEpfNo'];
                    $employee->emp_esi_number = $row['EmpESINo'];
                    $employee->emp_present_address = $row['EmppresentAddress'];
                    $employee->emp_permanent_address = $row['EmpPermanentAddress'];
                    // $employee->mobile_number = $row['UnitIDName'];
                    // $employee->mobile_number = $row['ServiceNo'];
                    // $employee->mobile_number = $row['Rank'];
                    if($row['EmpDtofLeaving'] == 'NA'){
                        $employee->is_job_ended = 0;
                        $employee->end_date = 'Present';
                    }else{
                        $employee->is_job_ended = 1;
                        $employee->end_date = $row['EmpDtofLeaving'];
                    }
                    // $employee->mobile_number = $row['Empstatus'];
                    // $employee->mobile_number = $row['Online'];
                    // $employee->mobile_number = $row['PSARA'];
                    $employee->emp_id = $row['EmpId'];
                    $employee->is_imported_employee = 1;
                    $employee->imported_sheet_name = $data['fileName'];
                    $employee->save();
                    }
                }
                // ==========
                $count = Employee::where('is_imported_employee', 1)
                     ->where('imported_sheet_name', $data['fileName'])
                     ->count();

                return response()->json([
                    'message' => 'Data received and processed successfully',
                    'data' => $data['StringJsonData'],
                    'ifEmpIdExists' => $ifEmpIdExists,
                    "count" => $count,
                    ], 200);
              }

       } catch (Exception $e) {
           return response()->json(['error' => $e], 500);
       }
   }

//   Show uploaded sheet data on page   
   public function fetchExcelSheetFromDB($rowperpage, Request $request)
    {
        $fileName = $request->input('fileName');
        $query = Employee::where('employees.is_imported_employee', '=', '1')->where('employees.imported_sheet_name', '=', $fileName)
        ->leftJoin('aadhar_verifications', 'aadhar_verifications.user_id', '=', 'employees.user_id')
        ->leftJoin('users', 'users.id', '=', 'employees.user_id')
        ->select('employees.*', 'users.*', 'aadhar_verifications.aadhar_number', 'aadhar_verifications.is_verified', 'employees.emp_id as emp_id');
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('employees.created_at', 'desc');
        $users = $query->paginate($rowperpage);

        if ($users) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'users_data' => $users,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    public function addUserFrompanel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'mobileNumber' => 'required|unique:users,phone_number|digits:10',
            'dob' => 'required|date',
            'email' => 'nullable|email',
            'location' => 'required|string',
            'adhaar' => 'nullable',
            'skill_id' => 'required|numeric',
            'gender' => 'required|string',
            'materialStatus' => 'required|string',
            'mother_tounge' => 'required|string',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        // Check if the phone number or email already exists
        $existingUserByPhone = AppUser::where('phone_number', $request->mobileNumber)->first();
      
    
        if ($existingUserByPhone ) {
            return response()->json(['error' => 'Phone number or email already exists'], 400);
        }
    
        // Create a new user
        $user = new AppUser();
        $user->name = $request->name;
        $user->phone_number = $request->mobileNumber;
        $user->dob = $request->dob;
        $user->email = $request->email;
        $user->location = $request->location;
      //  $user->adhaar = $request->adhaar; 
        $user->skills = $request->skill_id;
        $user->gender = $request->gender;
        $user->marital_status = $request->materialStatus;
        $user->mother_tounge = $request->mother_tounge;
        $user->is_phone_verified = 1;
        $user->save();
        if ($request->has('adhaar')) {
            $aadharVerification = new AadharVerification();
            $aadharVerification->user_id = $user->id; // Assuming user_id is the foreign key in AadharVerification table
            $aadharVerification->aadhar_number = $request->adhaar;
            $aadharVerification->save();
        }
    
        return response()->json(['message' => 'User added successfully'], 201);
    }
    

    public function addPaymentToUser(Request $request){
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
       // return $res_data;
        if($res_data->code == 'PAYMENT_SUCCESS'){
            $payment = Payment::where('merchantTransactionId','=', $transactionId)->where('user_id','=',$userid)->first();
            if($payment){
                $payment->code = $res_data->code;
                $payment->message = $res_data->message;
                $payment->meta_data = json_encode($res_data->data);
                $payment->save();
                $user = AppUser::find($userid);
                $user->payment_status=1;
                $user->save();
                return response()->json([
                    'status' => true,
                    'message' => 'Request Successful, Data is Attached within this packet.',
                    'payment_status' => $res_data
                ], 200);
            }else{
                $payments =new Payment();
                $payments->user_id = $userid;
                $payments->code = $res_data->code;
                $payments->message = $res_data->message;
                $payments->merchantTransactionId = $res_data->data->merchantTransactionId;
                $payments->meta_data = json_encode($res_data->data);
                $payments->save();
         
         
              if($payments){
                $user = AppUser::find($userid);
                $user->payment_status=1;
                $user->save();
                   return response([
                     'status' => true,
                     'message' => 'Request Successful, Data is Attached within this packet.',
                     'payment_data' => $res_data
                 ], 200);
         
              }
            }
          
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

    
}
