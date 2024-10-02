<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppUser extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = [
        'name',
        'dob',
        'email',
        'location',
        'phone_number',
        'is_deactivated',
        'is_phone_verified'
        
       
    ];
}
