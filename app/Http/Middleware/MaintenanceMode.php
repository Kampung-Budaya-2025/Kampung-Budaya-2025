<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class MaintenanceMode
{

    public function handle(Request $request, Closure $next): Response
    {
        $maintenanceMode = config('app.maintenance_mode', false) || cache()->get('maintenance_mode', false);
        
        if ($maintenanceMode) {
            $exemptRoutes = [
                'maintenance/*',
                'api/*',
            ];
            
            foreach ($exemptRoutes as $route) {
                if ($request->is($route)) {
                    return $next($request);
                }
            }
            
            $exemptIps = config('app.maintenance_exempt_ips', []);
            if (in_array($request->ip(), $exemptIps)) {
                return $next($request);
            }
            
            if ($request->is('api/*') || $request->expectsJson()) {
                return response()->json([
                    'message' => 'Aplikasi sedang dalam mode maintenance. Silakan coba lagi nanti.',
                    'status' => 'maintenance'
                ], 503);
            }
            
            return Inertia::render('ComingSoon/Page', [
                'title' => 'Maintenance Mode - Kampung Budaya 2025'
            ])->toResponse($request)->setStatusCode(503);
        }

        return $next($request);
    }
}
