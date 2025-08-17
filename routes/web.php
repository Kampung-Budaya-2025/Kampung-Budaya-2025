<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // atau ganti dengan view utama kamu, misal 'app'
})->where('any', '.*');
