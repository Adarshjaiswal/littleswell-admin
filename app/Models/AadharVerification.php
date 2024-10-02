<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AadharVerification extends Model
{
    use HasFactory;
    protected $table = 'aadhar_verifications';
    protected $fillable = [
        'user_id',
        'aadhar_number',
        'is_verified'
    ];


}
