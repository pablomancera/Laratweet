@extends('layouts.app') @section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <nuevo-tweet v-on:fetch-tweets="fetchTweets()"></nuevo-tweet>
            <tweet-manager
                v-for="(tweet, index) in reversedTweets"
                :key="index"
                v-bind:user="users[tweet.user_id-1]"
                v-bind:tweet="tweet"
            ></tweet-manager>
        </div>
    </div>
</div>
@endsection
