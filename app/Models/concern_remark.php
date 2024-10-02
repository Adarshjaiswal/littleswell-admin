<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class concern_remark extends Model
{
    use HasFactory;
    protected $table = 'concern_remarks';
    protected $fillable = [
        'concern_id',
        'admin_remark',
        
    ];
}
