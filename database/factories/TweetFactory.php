<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tweet;
use Faker\Generator as Faker;

$factory->define(Tweet::class, function (Faker $faker) {
    return [
        'content' => $faker->text(512),
        'created_at' => $faker->dateTimeThisMonth(),
    ];
});
