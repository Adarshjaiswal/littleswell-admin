<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalarySlip extends Model
{
    use HasFactory;
    protected $table = 'salary_slips';
    protected $fillable = [
        'emp_id',
        'year',
        'month',
        'date',
        'salary_slip',   
    ];

}
