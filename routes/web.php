<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventRegistrationController;

Route::prefix('api')->group(function () {
    Route::post('/event-registrations', [EventRegistrationController::class, 'store']);
    Route::get('/event-registrations', [EventRegistrationController::class, 'index']);
    Route::get('/event-registrations/export', [EventRegistrationController::class, 'export']);
    Route::post('/event-registrations/{registration}/attachments', [EventRegistrationController::class, 'updateAttachments']);
    Route::post('/event-registrations/check-email', [EventRegistrationController::class, 'checkEmail']);
    Route::get('/event-registrations/email-registrations', [EventRegistrationController::class, 'getEmailRegistrations']);
});

Route::get('/{any}', function () {
    return view('app'); 
})->where('any', '.*');
