<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventRegistration extends Model
{
    protected $fillable = [
        'event_type',
        'name',
        'category',
        'birthdate',
        'affiliation',
        'phone_number',
        'email',
        'instagram_username',
        'id_line',
        'registration_form_path',
        'payment_proof_path',
    ];

    protected $casts = [
        'birthdate' => 'date',
    ];

    public function getRegistrationFormUrlAttribute(): ?string
    {
        return $this->registration_form_path 
            ? asset('storage/' . $this->registration_form_path) 
            : null;
    }

    public function getPaymentProofUrlAttribute(): ?string
    {
        return $this->payment_proof_path 
            ? asset('storage/' . $this->payment_proof_path) 
            : null;
    }

    public function hasRegistrationForm(): bool
    {
        return !empty($this->registration_form_path);
    }

    public function hasPaymentProof(): bool
    {
        return !empty($this->payment_proof_path);
    }

    public static function isEmailRegistered(string $email): bool
    {
        return static::where('email', $email)->exists();
    }

    public static function getByEmail(string $email): ?self
    {
        return static::where('email', $email)->first();
    }
}
