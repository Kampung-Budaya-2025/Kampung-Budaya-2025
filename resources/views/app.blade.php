<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title inertia>{{ config('app.name', 'Kampung Budaya') }}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    
    @if(app()->environment('local'))
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @else
        {{-- Production: Load built assets --}}
        @if(file_exists(public_path('build/manifest.json')))
            @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @else
            {{-- Fallback if Vite build files don't exist --}}
            <link rel="stylesheet" href="{{ asset('build/assets/app.css') }}" />
            <script type="module" src="{{ asset('build/assets/app.js') }}"></script>
        @endif
    @endif
    
    @inertiaHead
</head>
<body>
    @inertia
    
    {{-- Error handling for production --}}
    @if(!app()->environment('local'))
        <script>
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