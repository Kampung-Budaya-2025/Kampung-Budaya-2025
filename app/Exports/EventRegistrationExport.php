<?php

namespace App\Exports;

use App\Models\EventRegistration;

class EventRegistrationExport
{
    protected $eventType;

    public function __construct($eventType = null)
    {
        $this->eventType = $eventType;
    }

    public function getData()
    {
        $query = EventRegistration::orderBy('created_at', 'desc');
        
        if ($this->eventType) {
            $query->where('event_type', $this->eventType);
        }
        
        $registrations = $query->get();

        $data = [];
        
        $data[] = [
            'ID',
            'Event Type',
            'Name',
            'Category',
            'Birth Date',
            'Affiliation',
            'Phone Number',
            'Email',
            'Instagram Username',
            'Line ID',
            'Has Registration Form',
            'Registration Form URL',
            'Has Payment Proof',
            'Payment Proof URL',
            'Registration Date'
        ];

        foreach ($registrations as $registration) {
            $data[] = [
                $registration->id,
                $registration->event_type,
                $registration->name,
                $registration->category,
                $registration->birthdate ? $registration->birthdate->format('Y-m-d') : '',
                $registration->affiliation,
                $registration->phone_number,
                $registration->email,
                $registration->instagram_username ?? '',
                $registration->id_line ?? '',
                $registration->hasRegistrationForm() ? 'Yes' : 'No',
                $registration->getRegistrationFormUrlAttribute() ?? '',
                $registration->hasPaymentProof() ? 'Yes' : 'No',
                $registration->getPaymentProofUrlAttribute() ?? '',
                $registration->created_at->format('Y-m-d H:i:s')
            ];
        }

        return $data;
    }
}
