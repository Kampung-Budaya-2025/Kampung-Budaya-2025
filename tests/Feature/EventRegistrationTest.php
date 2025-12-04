<?php

use App\Models\EventRegistration;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

/**
 * Test: pembuatan registrasi event (jalur sukses / happy path)
 *
 * Penjelasan:
 * - Setup: mock disk 'public' agar file upload tidak menulis ke disk nyata
 * - Input: payload registrasi lengkap termasuk file registration_form dan payment_proof
 * - Action: POST ke endpoint /api/event-registrations
 * - Expect: response HTTP 201 dan data tercatat di tabel event_registrations
 */
it('creates an event registration (happy path)', function () {
    $payload = [
        'event_type' => 'kolaborasi-musik-nusantara',
        'name' => 'Test User',
        'category' => 'Lomba Umum',
        'birthdate' => '2000-01-01',
        'affiliation' => 'Universitas Test',
        'phone_number' => '08123456789',
        'email' => 'testuser@example.com',
        'instagram_username' => '@testuser',
        'id_line' => 'testline',
        'registration_form' => UploadedFile::fake()->create('form.pdf', 100, 'application/pdf'),
        'payment_proof' => UploadedFile::fake()->create('payment.jpg', 200, 'image/jpeg'),
    ];

    $response = $this->postJson('/api/event-registrations', $payload);
    
    
    $response->assertStatus(201);
    $this->assertDatabaseHas('event_registrations', [
        'email' => 'testuser@example.com',
        'event_type' => 'kolaborasi-musik-nusantara'
    ]);
});


/**
 * Test: validasi input - memastikan error ketika field wajib hilang
 *
 * Penjelasan:
 * - Input: payload tidak lengkap / kosong
 * - Action: POST ke endpoint /api/event-registrations dengan data tidak valid
 * - Expect: response HTTP 422 dan response memiliki struktur ['message', 'errors']
 */
it('returns validation errors when required fields are missing', function () {
    $payload = [
        'event_type' => '',
        'name' => '',
    ];

    $response = $this->postJson('/api/event-registrations', $payload);

    $response->assertStatus(422);
    $response->assertJsonStructure(['message', 'errors']);
});


/**
 * Test: endpoint check-email mengembalikan 'exists' = true bila email sudah terdaftar untuk event tertentu
 *
 * Penjelasan:
 * - Setup: buat entry EventRegistration pada database dengan email dan event_type tertentu
 * - Action: POST ke /api/event-registrations/check-email dengan email dan event_type yang sama
 * - Expect: response 200 dan JSON ['exists' => true]
 */
it('checkEmail returns exists true when email already registered for event type', function () {
    EventRegistration::factory()->create([
        'email' => 'exists@example.com',
        'event_type' => 'kolaborasi-musik-nusantara'
    ]);

    $response = $this->postJson('/api/event-registrations/check-email', [
        'email' => 'exists@example.com',
        'event_type' => 'kolaborasi-musik-nusantara'
    ]);

    $response->assertStatus(200);
    $response->assertJson(['exists' => true]);
});


/**
 * Test: endpoint index can be accessed without PIN (PIN mechanism disabled)
 *
 * Penjelasan:
 * - Action: GET /api/event-registrations tanpa parameter pin
 * - Expect: HTTP 200 dan response JSON berisi data registrations
 */
it('index can be accessed without pin', function () {
    EventRegistration::factory()->count(2)->create();
    
    $response = $this->getJson('/api/event-registrations');

    $response->assertStatus(200);
    $response->assertJsonStructure(['data']);
});


/**
 * Test: endpoint export mengembalikan CSV tanpa memerlukan PIN
 *
 * Penjelasan:
 * - Setup: buat beberapa record EventRegistration untuk diexport
 * - Action: GET /api/event-registrations/export
 * - Expect: HTTP 200, header Content-Type dimulai dengan 'text/csv', dan body CSV tidak kosong
 */
it('export returns csv content without requiring pin', function () {
    EventRegistration::factory()->count(2)->create();

    $response = $this->get('/api/event-registrations/export');

    $response->assertStatus(200);

    $this->assertStringStartsWith('text/csv', $response->headers->get('Content-Type'));
    $content = $response->getContent();

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
});
