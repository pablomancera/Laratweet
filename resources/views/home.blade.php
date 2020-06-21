@extends('layouts.app') @section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <tweet-manager v-bind:users="{{ \App\User::all() }}"></tweet-manager>
        </div>
    </div>
</div>
@endsection
