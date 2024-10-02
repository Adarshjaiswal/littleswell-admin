<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Concern extends Model
{
    use HasFactory;
    protected $table = 'concerns';
    protected $fillable = [
        'user_id',
        'caseId',
        'message'
           
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
