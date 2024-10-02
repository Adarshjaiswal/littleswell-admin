<?php

namespace App\Http\Controllers;

use App\Models\AppliedJobs;
use App\Models\AppUser;
use App\Models\Employee;
use App\Models\SalarySlip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

class EmployeeController extends Controller
{
    //Add Employee
    public function AddEmployee(Request $request, $id)
    {
        try {
            // $last_emp_id =  Employee::latest('id')->value('id');
            // $new_emp_id = $last_emp_id + 1;
            // $prefix = $request->get('emp_id'); // Replace 'YourPrefix' with your actual prefix
            // $desired_length = 9;

            // $padded_emp_id = str_pad($new_emp_id, $desired_length - strlen($prefix), '0', STR_PAD_LEFT);
            // $formatted_emp_id = $prefix . $padded_emp_id;

            // $request->merge(['emp_id' => $formatted_emp_id]);

            $is_emp = Employee::where('emp_id', $request->get('emp_id'))->first();
            if($is_emp){
                return response()->json([
                    'status' => false,
                    'message' => 'Employee Id Alredy Exists in Database'
                ], 201);
            }


            // Define validation rules
            $rules = [
                'user_id' => 'required|numeric',
                // 'job_id' => 'required|numeric',
                'emp_name' => 'required|string|max:255',
                'emp_id' => 'required',
                'sex' => 'required|in:Male,Female',
                'mother_toungue' => 'required|string|max:255',
                'marital_status' => 'required|in:unmarried,married,divorced',
                'emp_father_name' => 'string',
                'emp_mother_name' => 'string',
                // 'blood_group' => 'required|string|max:10',
                'emp_department' => 'required|string|max:255',
                'designation' => 'required|string|max:255',
                'annual_salary' => 'nullable',
                'company_name' => 'string',
                'uan' => 'required|string|max:20',
                // 'qualification' => 'required|string|max:255',
                'bank_name' => 'required|string|max:255',
                'bank_ac_no' => 'required|string|max:50',
                'ifsc' => 'required|string|max:15',
                'doj' => 'required|date',
                    'emp_pf_applicable' => 'nullable',
                    'emp_pt_applicable' => 'nullable',
                    'emp_esi_applicable' => 'nullable',
                    'emp_present_address' => 'nullable|string',
                    'emp_permanent_address' => 'nullable|string',
                    'emp_pf_no' => 'nullable',
                    'emp_esi_number' => 'nullable',
                    'pancard_number'=> 'required|string',
                    'old_empid' => 'nullable',
                    'emp_branch'=> 'string',

                'job_location' => 'required|string',
                // 'annual_salary' => 'required'
            ];
            
            // Validate the request data
            $validatedData = $request->validate($rules);

            // Check if the user with the same user_id already exists
            $existingUser = Employee::where('user_id', $validatedData['user_id'])->where('is_job_ended', 0)->first();
            $updateJobApplication = AppliedJobs::find($id);
            if ($updateJobApplication) {
                //update job application table
                $updateJobApplication->update([
                    'status' => 'Accepted',
                ]);
                /// add to emp table
                if ($existingUser) {
                    // If the user exists, update the is_job_ended and end_date fields
                    $existingUser->update([
                        'is_job_ended' => 1, // Update with your logic
                        'end_date' => now(), // Update with your logic
                    ]);
                    Employee::create($validatedData);
                    $userData=AppUser::where('id','=',$validatedData['user_id'])->first();
                    $Approvalsms = approvalSms($userData->phone_number, $userData->name);
                    if($Approvalsms){
                        return response()->json([
                            'status' => true,
                            'message' => 'Employee Job Updated with New.'
                        ], 201);

                    }
                  
                } else {
                    // If the user does not exist, create a new record
                    Employee::create($validatedData);
                    $userData=AppUser::where('id','=',$validatedData['user_id'])->first();
                    $Approvalsms = approvalSms($userData->phone_number, $userData->name);
                    if($Approvalsms){
                        return response()->json([
                            'status' => true,
                            'message' => 'Employee Added with Job Role.'
                        ], 201);

                    }
                  
                }
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    // update status on Rejected 

    public function updateStatus(Request $request, $applicationId)
    {
        try {
            // Get the new status from the request
            $newStatus = $request->input('status');

            // Find the job application by ID
            $application = AppliedJobs::findOrFail($applicationId);

            // Update the status
            $application->status = $newStatus;
            $application->save();

            $userData=AppUser::where('id','=',$application->user_id)->first();
            $Rejectedsms = rejectedSms($userData->phone_number, $userData->name);
            if($Rejectedsms){
                return response()->json([
                    'status' => true,
                    'message' => 'Status updated successfully.'
                ], 200);


            } 

          
        } catch (\Exception $e) {
            // Handle any exceptions and return an error response
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    // status detail api
    public function UserStatusDetail($id)
    {
        $user_query = AppliedJobs::join('users', 'applied_jobs.user_id', '=', 'users.id')
            ->select('applied_jobs.*', 'users.*')->where('applied_jobs.id', '=', $id)->get();
        $job_query = AppliedJobs::join('jobs', 'applied_jobs.job_id', '=', 'jobs.id')->join('skills', 'skills.id', '=', 'jobs.skill_id')
            ->select('applied_jobs.*', 'jobs.*', 'skills.skill_title')->where('applied_jobs.id', '=', $id)->get();

        return response()->json([
            'status' => true,
            'message' => 'Request Successful, Data is Attached within this packet.',
            'user_details' => $user_query,
            'job_details' => $job_query
        ], 200);
    }

    // All Employee 
    public function allEmployee($rowperpage, Request $request)
    {
        $query = Employee::select('employees.*');
        // $query = Employee::query();
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('emp_name', 'like', "%{$searchTerm}%")
                 ->orWhere('emp_id', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('employees.created_at', 'desc');
        $users = $query->paginate($rowperpage);

        if ($users) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'employee_data' => $users,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    public function allEmployeesForReport($rowPerPage, Request $request)
    {
        $query = Employee::join('users', 'users.id', '=', 'employees.user_id')
        ->select('employees.*', 'users.phone_number as phone_number');
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQuery')) {
            $searchTerm = $request->input('searchQuery');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('emp_name', 'like', "%{$searchTerm}%")
                ->orWhere('phone_number', 'like', "%{$searchTerm}%")
                ->orWhere('employees.emp_id', 'like', "%{$searchTerm}%");
            });
        }
        
        if($request->startDate !=null ){
            // $request->startDate && $request->endDate,
            if($request->endDate == null){
                $request->endDate = $request->startDate;
            }
                $query->whereBetween(DB::raw('DATE(employees.created_at)'),
                        [
                            $request->startDate,
                            $request->endDate
                        ]);
        }
        if ($request->has('designationSerch')) {
            $searchTerm = $request->input('designationSerch');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('designation', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('employees.created_at', 'desc');
        $users = $query->paginate(25);
        if ($users) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'employee_data' => $users,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

    public function DownloadEmployeesReport(Request $request)
{
    $query = Employee::leftJoin('users', 'users.id', '=', 'employees.user_id')->select('employees.*', 'users.phone_number as phone_number');
    
    // Apply search filters
    if ($request->has('searchQuery')) {
        $searchTerm = $request->input('searchQuery');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('emp_name', 'like', "%{$searchTerm}%")
            ->orWhere('phone_number', 'like', "%{$searchTerm}%")
            ->orWhere('employees.emp_id', 'like', "%{$searchTerm}%");
        });
    }
    

    if($request->startDate !=null ){
        // $request->startDate && $request->endDate,
        if($request->endDate == null){
            $request->endDate = $request->startDate;
        }
            $query->whereBetween(DB::raw('DATE(employees.created_at)'),
                    [
                        $request->startDate,
                        $request->endDate
                    ]);
    }
    if ($request->has('designationSerch')) {
        $searchTerm = $request->input('designationSerch');

        // Apply the search filter to the query
        $query->where(function ($q) use ($searchTerm) {
            $q->where('designation', 'like', "%{$searchTerm}%");
        });
    }

    // Pagination
    $limit = $request->has('limit') ? $request->input('limit') : 5000; // Default limit to 1000 if not provided
    $offset = $request->has('offset') ? $request->input('offset') : 0;
    $totalRows = $query->count();
    $remainingRows = max($totalRows - ($offset + $limit), 0); // Calculate remaining rows

    $chunks = $query->offset($offset)->limit($limit)->get()->toArray();

    return response([
        'status' => true,
        'message' => 'Request Successful, Data is Attached within this packet.',
        'totalRows' => $totalRows,
        'remainingRows' => $remainingRows,
        'employee_data' => $chunks,
        'limit'=>$limit,
        'offset'=>$offset,
    ], 200);
}


    //     public function DownloadEmployeesReport( Request $request)
    // {
    //     $query = Employee::join('users', 'users.id', '=', 'employees.user_id')->select('employees.*', 'users.phone_number as phone_number');
    //     // Check if the "searchQuery" parameter is provided
    //     if ($request->has('searchQuery')) {
    //         $searchTerm = $request->input('searchQuery');

    //         // Apply the search filter to the query
    //         $query->where(function ($q) use ($searchTerm) {
    //             $q->where('emp_name', 'like', "%{$searchTerm}%");
    //         });
    //     }
        
    //     if($request->startDate !=null ){
    //         // $request->startDate && $request->endDate,
    //         if($request->endDate == null){
    //             $request->endDate = $request->startDate;
    //         }
    //             $query->whereBetween(DB::raw('DATE(employees.created_at)'),
    //                     [
    //                         $request->startDate,
    //                         $request->endDate
    //                     ]);
    //     }
    //     if ($request->has('designationSerch')) {
    //         $searchTerm = $request->input('designationSerch');

    //         // Apply the search filter to the query
    //         $query->where(function ($q) use ($searchTerm) {
    //             $q->where('designation', 'like', "%{$searchTerm}%");
    //         });
    //     }

    //     $totalRows = $query->count();

    //     // Calculate the chunk size based on the total number of rows
    //     $chunkSize = min(max(1000, ceil($totalRows / 50)), 5000); // Adjust the range and step size as needed
    
    //     // Chunk the data and return the response
    //     $chunks = [];
    //     $query->chunk($chunkSize, function ($users) use (&$chunks) {
    //         // Collect each chunk of data
    //         $chunks[] = $users->toArray();
    //     });
    
    //     return response()->json([
    //         'status' => true,
    //         'message' => 'Request Successful, Data is Attached within this packet.',
    //         'total_rows' => $totalRows,
    //         'chunk_size' => $chunkSize,
    //         'employee_data' => $chunks,
    //     ], 200);
    // }


    //salary slip for selected employee
    public function fetchSalarySlips(Request $request, $rowPerPage)
    {
        $empId = $request->query('empId');
        $currentPage = $request->query('page');

        if (!$empId) {
            return response()->json(['error' => 'No employee selected.'], 400);
        }
        $query = SalarySlip::where('emp_id', '=', $empId);
        // $query = SalarySlip::join('employees', 'employee.id', '=', 'salary_slips.emp_id')->select('salary_slips.*','employee.emp_name')->where('salary',0);
        // Check if the "searchQuery" parameter is provided
        if ($request->has('searchQueryYear')) {
            $searchTerm = $request->input('searchQueryYear');

            // Apply the search filter to the query
            $query->where(function ($q) use ($searchTerm) {
                $q->where('year', 'like', "%{$searchTerm}%");
            });
        }

        $query->orderBy('salary_slips.created_at', 'desc');
        $users = $query->paginate($rowPerPage);

        if ($users) {
            return response([
                'status' => true,
                'message' => 'Request Successful, Data is Attached within this packet.',
                'salarySlip_data' => $users,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong.'
            ], 500);
        }
    }

  // Add salary slip

  public function AddSalarySlip(Request $request)
{
    $validator = Validator::make($request->all(), [
        'emp_id' => 'required',
        'salary_slip' => 'required|mimes:pdf|max:5120',
        'date' => 'required|date'
    ]);

    if ($validator->fails()) {
        return response()->json(['status' => false, 'message' => $validator->errors()->all()], 422);
    }

    // Check if a salary slip already exists for the same employee, year, and month
    $emp_id = $request->input('emp_id');
    $date = $request->input('date');
    $year = date('Y', strtotime($date));
    $month = date('m', strtotime($date));

    $existingSlip = SalarySlip::where('emp_id', $emp_id)
        ->where('year', $year)
        ->where('month', $month)
        ->first();

    if ($existingSlip) {
        return response()->json([
            'status' => false,
            'message' => 'Salary Slip already exists for this employee and month.',
        ], 422);
    }

    // Create a new document record if it doesn't exist
    $salaryslip = new SalarySlip();
    $salaryslip->emp_id = $emp_id;
    $salaryslip->date = $date;
    $salaryslip->year = $year; // Store the extracted year
    $salaryslip->month = $month; // Store the extracted month

    if ($request->hasFile('salary_slip')) {
        $file = $request->file('salary_slip');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $file->move(public_path('salary_slip'), $filename);
        $filepath = url('salary_slip/' . $filename);
        $salaryslip->salary_slip = $filepath;
    }

    $salaryslip->save();

    if ($salaryslip) {
        return response()->json([
            'status' => true,
            'message' => 'Salary Slip Uploaded.',
        ], 201);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Something went wrong.',
        ], 500);
    }
}



}
