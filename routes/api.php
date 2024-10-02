<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AppUserController;
use App\Http\Controllers\ConcernController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\locationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\skillController;
use Illuminate\Support\Facades\Route;




use App\Http\Controllers\VaccineController;
/*
|--------------------------------------------------------------------------all-user
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AdminAuthController::class, 'logout']);
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'web'
], function ($router) {
    Route::post('/admin-login', [AdminAuthController::class, 'login']);
    /// Route::post('/create-role', [RolesController::class, 'createrole']);
    Route::get('/all-roles/{rowperpage}', [RolesController::class, 'allroles']);
    Route::post('/create-role', [RolesController::class, 'createrole']);
    Route::get('/role/{role_id}', [RolesController::class, 'getRoleDetail']);
    Route::put('/update-role/{role_id}', [RolesController::class, 'updateRole']);
    Route::delete('/role/delete/{id}', [RolesController::class, 'destroy']);






    //vaccine 
    Route::post('/vaccine/create-vaccine', [VaccineController::class, 'store']);
    Route::get('/all-vaccine/{rowperpage}', [VaccineController::class, 'allVaccine']);
    Route::delete('/vaccine/delete/{id}', [VaccineController::class, 'destroy']);








    // Jobs routes
   
    Route::delete('/job/delete/{id}', [JobsController::class, 'destroy']);
    Route::get('/job/get-roles', [JobsController::class, 'getroles']);
    Route::get('/job/get-skills', [JobsController::class, 'getSkills']);

    Route::post('/job/create-job', [JobsController::class, 'store']);

    Route::get('/job/get-state', [JobsController::class, 'allStates']);
    Route::get('/job/get-states', [JobsController::class, 'allStates']);
    Route::get('/job/get-cities', [JobsController::class, 'allCities']);
    Route::get('/job/get-cities-by-states', [JobsController::class, 'getCitiesByStates']);
    Route::put('/update-job/{job_id}', [JobsController::class, 'updateJob']);

    //Skills Route
    Route::post('/skill/create-skill', [skillController::class, 'createSkill']);
    Route::get('/skill/all-skills/{rowperpage}', [skillController::class, 'allSkills']);
    Route::put('/skill/update-skill/{skill_id}', [skillController::class, 'updateSkill']);
    Route::delete('/skill/delete/{id}', [skillController::class, 'destroy']);
    Route::post('/prefered-skill/create-skill', [skillController::class, 'createPreferedSkill']);
    Route::get('/skill/all-prefered-skills/{rowperpage}', [skillController::class, 'allPreferedSkills']);
    Route::put('/prefered-skill/update-skill/{skill_id}', [skillController::class, 'updatePreferedSkill']);
    Route::delete('/prefered-skill/delete/{id}', [skillController::class, 'destroyPreferedSkill']);
    Route::post('/prefered-sub-skill/create-skill/{skill_id}', [skillController::class, 'createPreferedSubSkill']);
    Route::get('/skill/all-prefered-sub-skills/{id}/{rowperpage}', [skillController::class, 'allPreferedSubSkills']);
    Route::put('/prefered-subskill/update-subskill', [skillController::class, 'updatePreferedSubSkill']);
    Route::delete('/prefered-subskill/delete-subskill/{id}', [skillController::class, 'destroyPreferedSubSkill']);
    

    /// State Routes
    Route::get('/state/all-states/{rowperpage}', [locationController::class, 'allStates']);
    Route::put('/state/{id}/toggle-active', [locationController::class, 'toggleActive']);
    Route::delete('/state/delete/{id}', [locationController::class, 'softdelete']);
    Route::get('/city/get-cities/{rowperpage}', [locationController::class, 'getCities']);
    Route::put('/city/{id}/toggle-active', [locationController::class, 'toggleActiveCity']);
    Route::delete('/city/delete/{id}', [locationController::class, 'softdeleteCity']);

    /// Concern Routes
    Route::get('/concern/all-concern/{rowperpage}', [ConcernController::class, 'allConcerns']);
    Route::post('/concern/add-remark', [ConcernController::class, 'addRemark']);
    Route::post('/concern/update-remark', [ConcernController::class, 'updateRemark']);

    // Job Application
    Route::get('/all-job-application/{rowperpage}', [JobsController::class, 'allJobsApplications']);
    Route::post('/application/add-emp/{id}', [EmployeeController::class, 'AddEmployee']);
    Route::put('/application/update-status/{applicationId}', [EmployeeController::class, 'updateStatus']);
    Route::get('/application/user-job-status-details/{id}', [EmployeeController::class, 'UserStatusDetail']);

    // Reports route
    Route::get('/all-job-application-report/{rowperpage}', [JobsController::class, 'allJobsApplicationsReport']);
    Route::get('/download-job-application-report',[JobsController::class, 'downloadJobReport']);
    Route::get('/user/all-users-report/{rowperpage}', [AppUserController::class, 'allUsersReport']);
    Route::get('/download-all-users-report',[AppUserController::class, 'downloadUsersReport']);
    Route::get('/emp/all-emp-on-report-section/{rowperpage}', [EmployeeController::class, 'allEmployeesForReport']);
    Route::get('/emp/download-all-employees-report', [EmployeeController::class, 'DownloadEmployeesReport']);
    Route::get('/user/non-applicant-users-report/{rowperpage}', [AppUserController::class, 'nonApplicantUsersReport']);
    Route::get('/download-non-applicant-users-report',[AppUserController::class, 'downloadNonApplicantUsersReport']);

    // Account Deactivation requests
    Route::get('/account/deactivation-requests/{rowperpage}', [AppUserController::class, 'alldeactivationrequests']);
    Route::put('/account/change-status/{id}', [AppUserController::class, 'changeStatusForAccDeactivation']);

    /// Employee Route
    Route::get('/emp/all-emp/{rowperpage}', [EmployeeController::class, 'allEmployee']);
    Route::get('/emp/salary-slip/{rowPerPage}', [EmployeeController::class, 'fetchSalarySlips']);
    Route::post('/emp/add-salary-slip',[EmployeeController::class, 'AddSalarySlip']);
    Route::post('/emp/get-last-emp-id',[EmployeeController::class, 'getLastEmpId']);

    //Dashboard
    Route::get('/dashboard_details', [AppUserController::class, 'dashboard']);
    Route::patch('/user/update/{id}', [AppUserController::class, 'updateuserbyadmin']);

    /// App User routes
    Route::get('/user/all-user/{rowperpage}', [AppUserController::class, 'allusers']);
    Route::get('/user/details/{id}', [AppUserController::class, 'UserDetails']);
    Route::get('/user/change-aadhar-status/{id}', [AppUserController::class, 'ChangeAadharStatus']);
    Route::post('/user/import-bulk-data',[AppUserController::class,'importbulkdata']);
    Route::post('/user/verify-bulk-data-sheet',[AppUserController::class,'verifybulkdata']);
    Route::post('/user/employee/fetch-excell-sheet/{rowperpage}',[AppUserController::class,'fetchExcelSheetFromDB']);

    // add user 
    Route::post('/user/add-user',[AppUserController::class,'addUserFrompanel']);
    Route::post('/user/add-payment', [AppUserController::class, 'addPaymentToUser']);

    /// Payment refund
    Route::get('/payment/all-refund-request/{rowperpage}', [PaymentController::class, 'allRefundRequest']);
    Route::post('/payment/initiate-refund/{id}', [PaymentController::class, 'initiatePayement']);
    Route::get('/payment/all-refund-payments/{rowperpage}', [PaymentController::class, 'allRefundpayments']);
    Route::post('/payment/refund-status/{id}', [PaymentController::class, 'refundStatus']);
    Route::post('/payment/payment-status', [PaymentController::class, 'checkPaymentStatus']);
    Route::get('/payment/amount/{rowperpage}', [PaymentController::class, 'allAmount']);
    Route::put('payment/update-amount/{amount_id}', [PaymentController::class, 'updateAmount']);
    Route::get('/payment/all-payments/{rowperpage}', [PaymentController::class, 'allPayments']); 
    
    
});
