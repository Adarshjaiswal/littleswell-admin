<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $table = 'jobs';
    protected $fillable = [
        'skill_id',
        'job_title',
        'company_name',
        'location',
        'salary',
        'job_description',
        'experience',
        'exp_date',
        'designation'
        
       
    ];


    public function skill()
    {
        return $this->belongsTo(skills::class, 'skill_id');
    }

    public function city()
    {
        return $this->belongsTo(city::class, 'location'); // 'location' is the foreign key in the jobs table.
    }
}
