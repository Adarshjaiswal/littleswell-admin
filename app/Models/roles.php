<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class roles extends Model
{
    use HasFactory;

    protected $fillable = [
        'role_title',
        'description'
       
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class, 'role_id');
    }

}
