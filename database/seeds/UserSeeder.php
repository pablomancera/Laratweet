<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 16)->create()->each(function ($user) {
            $user->tweets()->createMany(
                factory(App\Tweet::class, 4)->make()->toArray()
            );
        });
    }
}
