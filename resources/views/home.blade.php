@extends('layouts.app') @section('content')
<tweet-seleccionado v-bind:tweetselecc="tweetselecc"></tweet-seleccionado>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <nuevo-tweet
                v-bind:tweet="tweet"
                v-on:nuevo-tweet="storeTweet"
            ></nuevo-tweet>
            <mostrar-tweets
                v-for="tweet in tweets.reverse()"
                :key="tweets.id"
                v-bind:tweet="tweet"
                v-on:show-tweet="showTweet"
            ></mostrar-tweets>
        </div>
    </div>
</div>
@endsection
