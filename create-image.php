<?php
# create-image.php

$entityManager = require_once join(DIRECTORY_SEPARATOR, [__DIR__, 'bootstrap.php']);

use App\Entity\Image;

// Instanciation de l'image

$image = new Image();
$image->setUrl("https://cdn.pixabay.com/photo/2019/06/24/10/32/venice-4295681_960_720.jpg");

// Gestion de la persistance
$entityManager->persist($image);
$entityManager->flush();

// Vérification du résultats
echo "Identifiant d'image créée' : ", $image->getId();