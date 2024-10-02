<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class acc_deactivation extends Model
{
    use HasFactory;

    protected $table = 'acc_deactivations';
    protected $fillable = [
        'user_id',
        'status'  
    ];

}
