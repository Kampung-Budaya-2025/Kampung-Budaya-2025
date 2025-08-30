<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Faq;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('LandingPage/Page', [
            'title' => 'Kampung Budaya 2025'
        ]);
    }

    public function faq()
    {
        // Ambil data FAQ dari database jika ada
        $faqs = Faq::orderBy('created_at', 'desc')->get();
        
        return Inertia::render('FAQ/Page', [
            'title' => 'FAQ - Kampung Budaya 2025',
            'faqs' => $faqs
        ]);
    }

    public function registerEvent()
    {
        return Inertia::render('RegisterEvent/Page', [
            'title' => 'Daftar Event - Kampung Budaya 2025'
        ]);
    }

    public function galeri()
    {
        return Inertia::render('Galeri/Page', [
            'title' => 'Galeri - Kampung Budaya 2025'
        ]);
    }

    public function registerForm(Request $request)
    {
        // Validasi query parameter eventType
        $eventType = $request->query('eventType');
        
        // Jika tidak ada eventType, redirect ke halaman register-event
        if (!$eventType) {
            return redirect()->route('register-event');
        }
        
        // Validasi eventType yang diperbolehkan
        $allowedEventTypes = ['kolaborasi-musik', 'bazar-kebudayaan', 'fashion-show'];
        if (!in_array($eventType, $allowedEventTypes)) {
            return redirect()->route('register-event');
        }
        
        return Inertia::render('RegisterForm/Page', [
            'title' => 'Daftar Event - Kampung Budaya 2025',
            'eventType' => $eventType
        ]);
    }

    public function registerUpload()
    {
        return Inertia::render('RegisterConfirmation/RegisterUpload/Page', [
            'title' => 'Upload Berkas - Kampung Budaya 2025'
        ]);
    }

    public function registerConfirmation()
    {
        return Inertia::render('RegisterConfirmation/Page', [
            'title' => 'Konfirmasi Pendaftaran - Kampung Budaya 2025'
        ]);
    }
}
