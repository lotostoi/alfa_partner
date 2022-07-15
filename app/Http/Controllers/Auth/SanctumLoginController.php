<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SanctumLoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials =  $request->validate(
            [
                'email' => 'required',
                'password' => 'required',
            ]
        );

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['email not found']
            ]);
        }

        return response()->json(auth()->user());
    }

    public function LogOut()
    {
        return  Auth::logout();
    }

    public function isLogin(Request $request)
    {
        return response()->json((bool) auth()->user());
    }
}
