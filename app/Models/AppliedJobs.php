<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppliedJobs extends Model
{
    use HasFactory;

    protected $table = 'applied_jobs';
    protected $fillable = [
        'user_id',
        'job_id',
        'status'
           
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
