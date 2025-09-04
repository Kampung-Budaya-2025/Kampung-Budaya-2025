<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class DocumentController extends Controller
{
    /**
     * Download booklet document
     */
    public function downloadBooklet()
    {
        $fileName = 'booklet-kampung-budaya-2025.pdf';
        $filePath = 'documents/' . $fileName;
        
        if (!Storage::disk('public')->exists($filePath)) {
            abort(404, 'Dokumen booklet tidak ditemukan');
        }

        $file = Storage::disk('public')->get($filePath);
        
        return Response::make($file, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ]);
    }

    /**
     * Download form document
     */
    public function downloadForm()
    {
        $fileName = 'formulir-pendaftaran-kampung-budaya-2025.pdf';
        $filePath = 'documents/' . $fileName;
        
        if (!Storage::disk('public')->exists($filePath)) {
            abort(404, 'Dokumen formulir tidak ditemukan');
        }

        $file = Storage::disk('public')->get($filePath);
        
        return Response::make($file, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ]);
    }

    /**
     * View booklet in browser
     */
    public function viewBooklet()
    {
        $fileName = 'booklet-kampung-budaya-2025.pdf';
        $filePath = 'documents/' . $fileName;
        
        if (!Storage::disk('public')->exists($filePath)) {
            abort(404, 'Dokumen booklet tidak ditemukan');
        }

        $file = Storage::disk('public')->get($filePath);
        
        return Response::make($file, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $fileName . '"',
        ]);
    }

    /**
     * View form in browser
     */
    public function viewForm()
    {
        $fileName = 'formulir-pendaftaran-kampung-budaya-2025.pdf';
        $filePath = 'documents/' . $fileName;
        
        if (!Storage::disk('public')->exists($filePath)) {
            abort(404, 'Dokumen formulir tidak ditemukan');
        }

        $file = Storage::disk('public')->get($filePath);
        
        return Response::make($file, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $fileName . '"',
        ]);
    }
}
