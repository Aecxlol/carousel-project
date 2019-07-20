<?php

use App\Controller\HomepageController;

require '../vendor/autoload.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

require('../src/container.php');

$app->get('/', HomepageController::class.':index');

$app->run();