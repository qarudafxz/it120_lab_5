<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Exception;

class WeatherController extends Controller
{
    //get the value of OPEN_WEATHER_API_KEY from the .env file

    private $apiKey;

    public function getWeather(string $place)
    {
        $this->apiKey = env('OPEN_WEATHER_API_KEY');

        $url = "https://api.openweathermap.org/data/2.5/weather?q={$place}&appid={$this->apiKey}&units=metric";

        $client = new Client();

        try {
            $weather = $client->request('GET', $url);

            $weatherResults = json_decode(
                $weather->getBody()->getContents(),
                true
            );

            return response()->json([
                'place' => $place,
                'weather' => $weatherResults,
            ]);
        } catch (Exception $e) {
            return response()->json(
                [
                    'message' => 'Error getting weather data for ' . $place,
                    'error' => $e->getMessage(),
                ],
                404
            );
        }
    }
}
