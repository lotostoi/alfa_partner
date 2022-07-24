<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SanctumLoginController;
use App\Http\Controllers\FakeApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/is-login', [SanctumLoginController::class, 'isLogin']);

Route::post('login', [SanctumLoginController::class, 'login']);
Route::post('logout', [SanctumLoginController::class, 'logout']);

/**
 * Fake api
 */
Route::get('get-user', [FakeApiController::class, 'getUser']);
Route::get('get-data-for-selects-profile-payment', [FakeApiController::class, 'getDataForSelectsProfilePayment']);
Route::get('get-not-see-tickets', [FakeApiController::class, 'getCountNotSeeTickets']);
Route::get('get-not-see-news', [FakeApiController::class, 'getCountNotSeeNews']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
