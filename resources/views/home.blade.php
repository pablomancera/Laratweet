@extends('layouts.app') @section('content')
<ver-tweet
    v-bind:tweet="tweet"
    v-bind:user="users.find(user => user.id === tweet.user_id)"
    v-bind:authuser="{{ Auth::user() }}"
    v-on:actualizar-tweet="updateTweet"
></ver-tweet>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <nuevo-tweet v-on:fetch-tweets="fetchTweets()"></nuevo-tweet>
            <tweet-manager
                v-for="(tweet, index) in idTweets"
                :key="changeCount"
                v-bind:user="users.find(user => user.id === tweet.user_id)"
                v-bind:authuser="{{ Auth::user() }}"
                v-bind:tweet="tweet"
                v-bind:index="index"
                v-on:eliminar-tweet="deleteTweet"
                v-on:ver-tweet="showTweet"
            ></tweet-manager>
        </div>
    </div>
</div>
@endsection
