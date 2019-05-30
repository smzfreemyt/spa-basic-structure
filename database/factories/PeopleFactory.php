<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\People::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'age'  => rand(1, 80),
        'address' => $faker->address
    ];
});
