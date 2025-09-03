<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Config;

Route::prefix('maintenance')->group(function () {
    Route::post('/enable', function () {
        Config::set('app.maintenance_mode', true);
        cache()->put('maintenance_mode', true, now()->addDays(30));
        
        return response()->json(['message' => 'Maintenance mode enabled']);
    })->name('maintenance.enable');
    
    Route::post('/disable', function () {
        Config::set('app.maintenance_mode', false);
        cache()->forget('maintenance_mode');
        
        return response()->json(['message' => 'Maintenance mode disabled']);
    })->name('maintenance.disable');
    
    Route::get('/status', function () {
        $isEnabled = config('app.maintenance_mode', false) || cache()->get('maintenance_mode', false);
        return response()->json(['maintenance_mode' => $isEnabled]);
    })->name('maintenance.status');
});

Route::prefix('api')->group(function () {
    Route::post('/event-registrations', [EventRegistrationController::class, 'store']);
    Route::get('/event-registrations', [EventRegistrationController::class, 'index']);
    Route::get('/event-registrations/export', [EventRegistrationController::class, 'export']);
    Route::post('/event-registrations/{registration}/attachments', [EventRegistrationController::class, 'updateAttachments']);
    Route::post('/event-registrations/check-email', [EventRegistrationController::class, 'checkEmail']);
    Route::get('/event-registrations/email-registrations', [EventRegistrationController::class, 'getEmailRegistrations']);
});

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/register-event', [PageController::class, 'registerEvent'])->name('register-event');
Route::get('/register-form', [PageController::class, 'registerForm'])->name('register-form');
Route::get('/register-upload', [PageController::class, 'registerUpload'])->name('register-upload');
Route::get('/register-confirmation', [PageController::class, 'registerConfirmation'])->name('register-confirmation');
Route::get('/coming-soon', [PageController::class, 'comingSoon'])->name('coming-soon');