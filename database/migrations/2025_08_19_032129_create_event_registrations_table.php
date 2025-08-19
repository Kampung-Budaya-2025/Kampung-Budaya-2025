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
        Schema::create('event_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('event_type');
            $table->string('name');
            $table->string('category');
            $table->date('birthdate');
            $table->string('affiliation');
            $table->string('phone_number');
            $table->string('email')->unique();
            $table->string('instagram_username')->nullable();
            $table->string('id_line')->nullable();
            $table->string('registration_form_path')->nullable();
            $table->string('payment_proof_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_registrations');
    }
};
