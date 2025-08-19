<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventRegistration;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class EventRegistrationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'event_type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'birthdate' => 'required|date',
            'affiliation' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'email' => 'required|email|max:255|unique:event_registrations,email',
            'instagram_username' => 'nullable|string|max:255',
            'id_line' => 'nullable|string|max:255',
            'registration_form' => 'nullable|file|mimes:pdf|max:2048', 
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg|max:2048', 
        ]);

        $data = $request->only([
            'event_type', 'name', 'category', 'birthdate', 'affiliation',
            'phone_number', 'email', 'instagram_username', 'id_line'
        ]);

        if ($request->hasFile('registration_form')) {
            $registrationFormPath = $request->file('registration_form')->store(
                'event-registrations/forms', 
                'public'
            );
            $data['registration_form_path'] = $registrationFormPath;
        }

        if ($request->hasFile('payment_proof')) {
            $paymentProofPath = $request->file('payment_proof')->store(
                'event-registrations/payments', 
                'public'
            );
            $data['payment_proof_path'] = $paymentProofPath;
        }

        $registration = EventRegistration::create($data);

        return response()->json([
            'message' => 'Registration created successfully',
            'data' => $registration
        ], 201);
    }

    public function updateAttachments(Request $request, EventRegistration $registration)
    {
        $request->validate([
            'registration_form' => 'nullable|file|mimes:pdf|max:2048',
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = [];

        if ($request->hasFile('registration_form')) {
            if ($registration->registration_form_path) {
                Storage::disk('public')->delete($registration->registration_form_path);
            }
            
            $registrationFormPath = $request->file('registration_form')->store(
                'event-registrations/forms', 
                'public'
            );
            $data['registration_form_path'] = $registrationFormPath;
        }

        if ($request->hasFile('payment_proof')) {
            if ($registration->payment_proof_path) {
                Storage::disk('public')->delete($registration->payment_proof_path);
            }
            
            $paymentProofPath = $request->file('payment_proof')->store(
                'event-registrations/payments', 
                'public'
            );
            $data['payment_proof_path'] = $paymentProofPath;
        }

        $registration->update($data);

        return response()->json([
            'message' => 'Attachments updated successfully',
            'data' => $registration
        ]);
    }

    /**
     * Check if email is already registered.
     */
    public function checkEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $exists = EventRegistration::where('email', $request->email)->exists();

        return response()->json([
            'exists' => $exists,
            'message' => $exists ? 'Email sudah terdaftar' : 'Email tersedia'
        ]);
    }
}
