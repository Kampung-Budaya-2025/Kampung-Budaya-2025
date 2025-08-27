<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\PageController;

// API Routes
Route::prefix('api')->group(function () {
    Route::post('/event-registrations', [EventRegistrationController::class, 'store']);
    Route::get('/event-registrations', [EventRegistrationController::class, 'index']);
    Route::get('/event-registrations/export', [EventRegistrationController::class, 'export']);
    Route::post('/event-registrations/{registration}/attachments', [EventRegistrationController::class, 'updateAttachments']);
    Route::post('/event-registrations/check-email', [EventRegistrationController::class, 'checkEmail']);
    Route::get('/event-registrations/email-registrations', [EventRegistrationController::class, 'getEmailRegistrations']);
});

// Web Routes using Inertia
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/register-event', [PageController::class, 'registerEvent'])->name('register-event');
Route::get('/register-form', [PageController::class, 'registerForm'])->name('register-form');
Route::get('/register-upload', [PageController::class, 'registerUpload'])->name('register-upload');
Route::get('/register-confirmation', [PageController::class, 'registerConfirmation'])->name('register-confirmation'); 