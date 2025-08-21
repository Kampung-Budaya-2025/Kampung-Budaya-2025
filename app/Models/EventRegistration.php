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

    protected $appends = [
        'registration_form_url',
        'payment_proof_url',
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

    public static function isEmailRegisteredForEventType(string $email, string $eventType): bool
    {
        return static::where('email', $email)
                    ->where('event_type', $eventType)
                    ->exists();
    }

    public static function getByEmail(string $email): ?self
    {
        return static::where('email', $email)->first();
    }

    public static function getByEmailAndEventType(string $email, string $eventType): ?self
    {
        return static::where('email', $email)
                    ->where('event_type', $eventType)
                    ->first();
    }

    public static function getEventTypesByEmail(string $email): array
    {
        return static::where('email', $email)
                    ->pluck('event_type')
                    ->toArray();
    }
}
