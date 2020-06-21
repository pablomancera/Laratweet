<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ShowUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return User::all();
    }
}
