<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class user_pre_skills extends Model
{
    use HasFactory;
    protected $table = 'preference_skills';
    protected $fillable = [
        'pre_skill_title',
        'is_active', 
    ];

    public function subSkills()
    {
        return $this->hasMany('App\Models\user_pre_sub_skills', 'pre_skill_id', 'id');
    }

}
