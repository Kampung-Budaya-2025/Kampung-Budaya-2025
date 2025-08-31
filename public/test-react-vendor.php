<?php
// Direct test for react-vendor file
$file = __DIR__ . '/build/assets/react-vendor-DhvPlQDy.js';

if (file_exists($file)) {
    // Set proper headers for JavaScript
    header('Content-Type: application/javascript; charset=utf-8');
    header('Cache-Control: max-age=31536000, public');
    header('Access-Control-Allow-Origin: *');
    
    // Output the file
    readfile($file);
} else {
    header('HTTP/1.0 404 Not Found');
    header('Content-Type: text/plain');
    echo 'File not found: ' . $file;
}
?>
