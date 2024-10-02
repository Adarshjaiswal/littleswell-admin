<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_pre_sub_skills extends Model
{
    use HasFactory;
    protected $table = 'pre_sub_skills';
    protected $fillable = [
        'pre_skill_id',
        'title'
    ];

 
 

    

}
