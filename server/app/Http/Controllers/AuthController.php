<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            "name" => "required",
            "email" => "required",
            "password" => "required",
        ]);

        $user = User::create($validated);

        $token = $user->createToken("token")->plainTextToken;
 
        return [
            "user" => $user,
            "token" => $token,
        ];
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            "email" => "required",
            "password" => "required",
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken("token")->plainTextToken;
            return [
                "user" => $user,
                "token" => $token,
            ];
        } else {
            return response()->json([
                "status" => "error",
                "message" => "Wrong credentials"
            ], 403);
        }
    }
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(null, 204);
    }
    public function user(Request $request) {
        return $request->user();
    }
}
