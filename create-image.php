<?php
# create-image.php

$entityManager = require_once join(DIRECTORY_SEPARATOR, [__DIR__, 'bootstrap.php']);

use App\Entity\Image;

//Création d'un tableau contenant les links
$imagesTab = [
    "https://cdn.pixabay.com/photo/2019/03/31/14/38/holland-4093234_960_720.jpg",
    "https://cdn.pixabay.com/photo/2010/12/13/10/21/beautiful-2703_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718_960_720.jpg"
];

//Instanciation des images
for($i = 0; $i < count($imagesTab); $i++)
{
    $image = new Image();
    $image->setUrl($imagesTab[$i]);
    
    // Gestion de la persistance
    $entityManager->persist($image);
    $entityManager->flush();
}

//php create-image.php ORM pour exécuter le fichier

// Vérification du résultats
echo "Identifiant d'image créée' : ", $image->getId();