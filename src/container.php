<?php

//on charge notre container
$container = $app->getContainer();

//on crée une nouvelle clé pour notre container en lui donnant l'objet twig
$container['view'] = function ($container) {
    $dir = dirname(__DIR__);
    $view = new \Slim\Views\Twig($dir.'/templates', [
        'cache' => false //$dir.'/tmp/cache'
    ]);

    // Instantiate and add Slim specific extension
    $router = $container->get('router');
    $uri = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));
    $view->addExtension(new \Slim\Views\TwigExtension($router, $uri));

    return $view;
};