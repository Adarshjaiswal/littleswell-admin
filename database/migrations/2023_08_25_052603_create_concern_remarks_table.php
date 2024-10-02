<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('concern_remarks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('concern_id');
            $table->longText('admin_remark');
            $table->timestamps();

            $table->foreign('concern_id')
            ->references('id')
            ->on('concerns')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('concern_remarks');
    }
};
