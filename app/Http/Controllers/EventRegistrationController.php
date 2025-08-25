<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventRegistration;
use App\Exports\EventRegistrationExport;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\Rule;

class EventRegistrationController extends Controller
{
    private const EXPORT_PIN = 'Kampung-Budaya-2025-Jaya';

    public function store(Request $request)
    {
        $request->validate([
            'event_type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'birthdate' => 'required|date',
            'affiliation' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('event_registrations')->where(function ($query) use ($request) {
                    return $query->where('event_type', $request->event_type);
                })
            ],
            'instagram_username' => 'nullable|string|max:255',
            'id_line' => 'nullable|string|max:255',
            'registration_form' => 'nullable|file|mimes:pdf|max:2048', 
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg|max:2048', 
        ], [
            'email.unique' => 'Email sudah terdaftar untuk event type ini. Anda dapat mendaftar dengan email yang sama untuk event type yang berbeda.'
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

    public function checkEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'event_type' => 'required|string'
        ]);

        $exists = EventRegistration::isEmailRegisteredForEventType(
            $request->email, 
            $request->event_type
        );

        return response()->json([
            'exists' => $exists,
            'message' => $exists 
                ? 'Email sudah terdaftar untuk event type ini' 
                : 'Email tersedia untuk event type ini'
        ]);
    }

    public function getEmailRegistrations(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $eventTypes = EventRegistration::getEventTypesByEmail($request->email);
        $registrations = EventRegistration::where('email', $request->email)
                                        ->get(['event_type', 'name', 'created_at']);

        return response()->json([
            'email' => $request->email,
            'registered_event_types' => $eventTypes,
            'registrations' => $registrations,
            'total_registrations' => count($eventTypes)
        ]);
    }

    public function export(Request $request)
    {
        $request->headers->set('Accept', 'application/json');
        
        if (!$request->has('pin') || empty($request->pin)) {
            return response()->json([
                'error' => 'PIN diperlukan untuk mengakses endpoint export.',
                'message' => 'Parameter PIN tidak ditemukan. Silakan sertakan parameter ?pin=YOUR_PIN',
            ], 400);
        }

        if ($request->pin !== self::EXPORT_PIN) {
            return response()->json([
                'error' => 'PIN tidak valid. Akses ditolak.',
                'message' => 'PIN yang Anda masukkan salah.'
            ], 403);
        }

        $request->validate([
            'event_type' => 'nullable|string'
        ]);

        $eventType = $request->get('event_type');
        $export = new EventRegistrationExport($eventType);
        
        $filename = 'event_registrations_' . date('Y-m-d_H-i-s') . '.csv';
        
        if ($eventType) {
            $filename = 'event_registrations_' . str_replace(' ', '_', strtolower($eventType)) . '_' . date('Y-m-d_H-i-s') . '.csv';
        }

        $data = $export->getData();
       
        $csvContent = '';
        foreach ($data as $row) {
            $csvContent .= implode(',', array_map(function($field) {
                if (strpos($field, ',') !== false || strpos($field, '"') !== false || strpos($field, "\n") !== false) {
                    return '"' . str_replace('"', '""', $field) . '"';
                }
                return $field;
            }, $row)) . "\n";
        }

        return Response::make($csvContent, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ]);
    }

    public function index(Request $request)
    {
        $request->headers->set('Accept', 'application/json');
        
        if (!$request->has('pin') || empty($request->pin)) {
            return response()->json([
                'error' => 'PIN diperlukan untuk mengakses endpoint ini.',
                'message' => 'Parameter PIN tidak ditemukan. Silakan sertakan parameter ?pin=YOUR_PIN',
            ], 400);
        }

        if ($request->pin !== self::EXPORT_PIN) {
            return response()->json([
                'error' => 'PIN tidak valid. Akses ditolak.',
                'message' => 'PIN yang Anda masukkan salah.'
            ], 403);
        }

        $query = EventRegistration::orderBy('created_at', 'desc');
        
        if ($request->has('event_type') && $request->event_type) {
            $query->where('event_type', $request->event_type);
        }
        
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('affiliation', 'like', "%{$search}%");
            });
        }
        
        $registrations = $query->paginate(20);
        
        return response()->json($registrations);
    }
}
