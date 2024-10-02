<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class city extends Model
{
    use HasFactory;
    protected $table = 'City';
    protected $fillable = [
        'name',
        'active',
        'deleted'    
    ];


    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function jobs()
    {
        return $this->hasMany(Job::class, 'location'); // 'location' is the foreign key in the jobs table.
    }

}
