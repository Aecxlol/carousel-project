<?php

namespace App\Controller;

use Slim\Http\Request;
use Slim\Http\Response;
use App\Entity\Image;

class HomepageController
{
    private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function index(Request $request, Response $response)
    {
        $entityManager = require_once('../bootstrap.php');

        $imageRepository = $entityManager->getRepository(Image::class);
        $image = $imageRepository->findAll();

        $this->container->view->render($response, 'homepage.twig', [
            'images' => $image
        ]);
    }
}