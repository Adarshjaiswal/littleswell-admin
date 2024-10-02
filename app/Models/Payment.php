<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payment';
    protected $fillable = [
        'user_id',
        'code',
        'message',
        'merchantTransactionId',
        'meta_data',
        'is_request_for_refund'
    ];
}
