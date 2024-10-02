<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employees';
    protected $fillable = [
        // 'user_id',
        // 'job_id',
        // 'job_location',
        // 'emp_id',
        // 'emp_name',
        // 'sex',
        // 'mother_toungue',
        // 'marital_status',
        // 'department',
        // 'designation',
        // 'uan',
        // 'qualification',
        // 'bank_name',
        // 'bank_ac_no',
        // 'ifsc',
        // 'doj',
        // 'is_job_ended',
        // 'end_date'


      'user_id',
      'job_id',
      'emp_name',
      'emp_id',
      'sex',
      'mother_toungue',
      'emp_father_name',
      'emp_mother_name',
      'marital_status',
      'emp_department',
      'designation',
      'salary',
      'company_name',
      'uan',
      'qualification',
      'bank_name',
      'bank_ac_no',
      'ifsc',
      'doj',
      'emp_pf_applicable',
      'emp_pt_applicable',
      'emp_esi_applicable',
      'emp_present_address',
      'emp_permanent_address',
      'emp_pf_no',
      'emp_esi_number',
      'old_empid',
      'pancard_number',
      'emp_branch',
      'is_job_ended',
      'is_imported_employee',
           
    ];
}
