<?php

namespace App\Http\Controllers;

use App\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TweetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tweet = Tweet::all();
        Log::info("Consultando tweets", ['user' => auth()->id()]);
        return $tweet;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|max:512'
        ]);
        $tweet = new Tweet();
        $tweet->content = $request->content;
        $tweet->user_id = auth()->id();
        $tweet->save();
        Log::info("Tweet almacenado", ['id' => $tweet->id, 'user' => auth()->id()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tweet = Tweet::find($id);
        Log::info("Mostrando tweet", ['id' => $id, 'user' => auth()->id()]);
        return $tweet;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'content' => 'required|max:512'
        ]);
        $tweet = Tweet::find($id);
        $tweet->content = $request->content;
        if ($tweet->user_id === auth()->id()) {
            $tweet->save();
            Log::info("Actualizado tweet", ['id' => $tweet->id, 'user' => auth()->id()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tweet = Tweet::find($id);
        $tweet->delete();
        Log::info("Tweet eliminado", ['id' => $id, 'user' => auth()->id()]);
    }
}
