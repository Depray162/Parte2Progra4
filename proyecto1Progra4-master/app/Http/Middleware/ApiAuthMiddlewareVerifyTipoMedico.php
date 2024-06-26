<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\JwtAuth;

class ApiAuthMiddlewareVerifyTipoMedico
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $jwt = new JwtAuth();
        $token=$request->header('bearertoken');
        $logged = $jwt->verifyTokenMed($token,true);

        $requiredTipoMedico = "Administrador";

        
        if (!is_bool($logged) && $logged->TipoMedico == $requiredTipoMedico) {
            return $next($request);
        } else {
            $response = [
                "status" => 403,
                "message" => "El médico no tiene la autorización para realizar esta acción. Se requiere ser un " . $requiredTipoMedico,
            ];
            return response()->json($response, 403);
        }
    }
    
}
