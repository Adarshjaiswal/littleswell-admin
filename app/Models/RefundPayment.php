<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefundPayment extends Model
{
    use HasFactory;

    protected $table = 'payment_refund';
    protected $fillable = [
        'user_id',
        'pay_id',
        'code',
        'message',
        'meta_data'
    ];


}
