@extends('layouts.app') @section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <nuevo-tweet v-on:fetch-tweets="fetchTweets()"></nuevo-tweet>
            <tweet-manager
                v-for="tweet in idTweets"
                :key="lengthTweets"
                v-bind:user="users[tweet.user_id-1]"
                v-bind:authuser="{{ Auth::user() }}"
                v-bind:tweet="tweet"
                v-on:eliminar-tweet="deleteTweet"
            ></tweet-manager>
        </div>
    </div>
</div>
@endsection
