<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_job_preference extends Model
{
    use HasFactory;
    protected $table = 'user_job_preference';
    protected $fillable = [
        'user_id',
        'location',
        'pre_skills',
        'pre_sub_skills',   
    ];
}
