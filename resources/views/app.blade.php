<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title inertia>{{ config('app.name', 'Kampung Budaya') }}</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.ico') }}" />
    
    @if(app()->environment('local'))
        @viteReactRefresh
    @endif
    
    {{-- Always use Vite helper for proper asset resolution --}}
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    
    @inertiaHead
</head>
<body>
    @inertia
    
    {{-- Debug info for production --}}
    @if(!app()->environment('local') && config('app.debug'))
        <script>
            console.log('Environment: {{ app()->environment() }}');
            console.log('Manifest exists: {{ file_exists(public_path("build/manifest.json")) ? "true" : "false" }}');
            console.log('Base URL: {{ config("app.url") }}');
            
            window.addEventListener('error', function(e) {
                console.error('JavaScript Error:', e.error);
            });
            
            window.addEventListener('unhandledrejection', function(e) {
                console.error('Unhandled Promise Rejection:', e.reason);
            });
        </script>
    @endif
</body>
</html>