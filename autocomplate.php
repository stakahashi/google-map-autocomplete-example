<?php
require_once "./vendor/autoload.php";
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

CONST root = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

$args = [
    'location' => '35.681167,139.767052',
    'radius' => 100,
    'input' => $_REQUEST['input'],
    'types' => '(regions)',
    'key' => getenv('KEY'),
    'language' => 'ja',
];

echo file_get_contents(root . '?' . http_build_query($args));