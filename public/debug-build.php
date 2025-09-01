<?php
// Comprehensive server diagnostics for build assets
header('Content-Type: text/html; charset=utf-8');

$buildPath = __DIR__ . '/build';
$testFiles = [
    'assets/react-vendor-DhvPlQDy.js',
    'assets/react-icons-Cqto-WUl.js', 
    'assets/framer-motion-CtSIk6Mq.js',
    'assets/app.Cacu5y9W.css'
];

echo "<h1>Build Assets Diagnostic Report</h1>";
echo "<p>Generated: " . date('Y-m-d H:i:s') . "</p>";

echo "<h2>Server Information</h2>";
echo "<ul>";
echo "<li>Server Software: " . ($_SERVER['SERVER_SOFTWARE'] ?? 'unknown') . "</li>";
echo "<li>Document Root: " . ($_SERVER['DOCUMENT_ROOT'] ?? 'unknown') . "</li>";
echo "<li>Script Path: " . __FILE__ . "</li>";
echo "<li>Build Path: " . $buildPath . "</li>";
echo "<li>PHP Version: " . phpversion() . "</li>";
echo "</ul>";

echo "<h2>Directory Status</h2>";
echo "<ul>";
echo "<li>Build directory exists: " . (is_dir($buildPath) ? '✅ YES' : '❌ NO') . "</li>";
echo "<li>Build directory readable: " . (is_readable($buildPath) ? '✅ YES' : '❌ NO') . "</li>";
if (is_dir($buildPath)) {
    $perms = substr(sprintf('%o', fileperms($buildPath)), -4);
    echo "<li>Build directory permissions: " . $perms . "</li>";
}
echo "</ul>";

echo "<h2>File Analysis</h2>";
echo "<table border='1' style='border-collapse: collapse; width: 100%;'>";
echo "<tr><th>File</th><th>Exists</th><th>Readable</th><th>Size</th><th>Permissions</th><th>MIME Type</th><th>Direct URL Test</th></tr>";

foreach ($testFiles as $file) {
    $fullPath = $buildPath . '/' . $file;
    $url = 'https://kampungbudaya.ub.ac.id/build/' . $file;
    
    echo "<tr>";
    echo "<td>" . htmlspecialchars($file) . "</td>";
    echo "<td>" . (file_exists($fullPath) ? '✅ YES' : '❌ NO') . "</td>";
    echo "<td>" . (is_readable($fullPath) ? '✅ YES' : '❌ NO') . "</td>";
    echo "<td>" . (file_exists($fullPath) ? number_format(filesize($fullPath)) . ' bytes' : 'N/A') . "</td>";
    echo "<td>" . (file_exists($fullPath) ? substr(sprintf('%o', fileperms($fullPath)), -4) : 'N/A') . "</td>";
    
    // Get MIME type
    $mimeType = 'unknown';
    if (file_exists($fullPath)) {
        if (function_exists('mime_content_type')) {
            $mimeType = mime_content_type($fullPath);
        } elseif (function_exists('finfo_file')) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mimeType = finfo_file($finfo, $fullPath);
            finfo_close($finfo);
        }
    }
    echo "<td>" . htmlspecialchars($mimeType) . "</td>";
    
    echo "<td><a href='" . htmlspecialchars($url) . "' target='_blank'>Test URL</a></td>";
    echo "</tr>";
}

echo "</table>";

echo "<h2>Apache/Web Server Tests</h2>";
echo "<ul>";

// Test if mod_rewrite is working
if (function_exists('apache_get_modules')) {
    $modules = apache_get_modules();
    echo "<li>mod_rewrite enabled: " . (in_array('mod_rewrite', $modules) ? '✅ YES' : '❌ NO') . "</li>";
    echo "<li>mod_mime enabled: " . (in_array('mod_mime', $modules) ? '✅ YES' : '❌ NO') . "</li>";
    echo "<li>mod_headers enabled: " . (in_array('mod_headers', $modules) ? '✅ YES' : '❌ NO') . "</li>";
} else {
    echo "<li>Apache module info: ❌ Not available (not Apache or limited access)</li>";
}

// Check .htaccess
$htaccessPath = $buildPath . '/.htaccess';
echo "<li>.htaccess in build directory: " . (file_exists($htaccessPath) ? '✅ EXISTS' : '❌ MISSING') . "</li>";
if (file_exists($htaccessPath)) {
    echo "<li>.htaccess readable: " . (is_readable($htaccessPath) ? '✅ YES' : '❌ NO') . "</li>";
    echo "<li>.htaccess size: " . filesize($htaccessPath) . " bytes</li>";
}

echo "</ul>";

// Show .htaccess content
if (file_exists($htaccessPath) && is_readable($htaccessPath)) {
    echo "<h2>.htaccess Content</h2>";
    echo "<pre style='background: #f5f5f5; padding: 10px; border: 1px solid #ddd;'>";
    echo htmlspecialchars(file_get_contents($htaccessPath));
    echo "</pre>";
}

echo "<h2>HTTP Headers Test</h2>";
echo "<p>Testing HTTP headers for one JS file:</p>";

// Test headers for react-vendor file
$testFile = $buildPath . '/assets/react-vendor-DhvPlQDy.js';
if (file_exists($testFile)) {
    echo "<pre style='background: #f5f5f5; padding: 10px; border: 1px solid #ddd;'>";
    echo "File: assets/react-vendor-DhvPlQDy.js\n";
    echo "Size: " . filesize($testFile) . " bytes\n";
    echo "Last Modified: " . date('Y-m-d H:i:s', filemtime($testFile)) . "\n";
    
    // Read first few characters to verify it's not corrupted
    $handle = fopen($testFile, 'r');
    $firstChars = fread($handle, 100);
    fclose($handle);
    echo "First 100 chars: " . htmlspecialchars($firstChars) . "\n";
    echo "</pre>";
}

echo "<h2>Recommended Actions</h2>";
echo "<ol>";
echo "<li>If files exist but URLs return 404: Check web server configuration</li>";
echo "<li>Verify .htaccess is working and not blocking JS files</li>";
echo "<li>Check server error logs for specific blocking reasons</li>";
echo "<li>Ensure proper MIME types are set for .js files</li>";
echo "<li>Verify directory and file permissions (should be 755 for dirs, 644 for files)</li>";
echo "</ol>";

?>
