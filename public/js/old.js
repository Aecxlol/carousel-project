/*- LE CODE CI DESSOUS PERMET DE CHANGER LA SRC DE LA PREMIERE DIV IMAGE PAR LA SUIVANTE OU LA PRECEDENTE SUIVANT SUR QUEL BOUTON ON APPUIE 
    CE CODE A ETE FAIT SANS UTILISER DE TUTO MAIS NE FONCTIONNE PAS CORRECTEMENT -*/
/*
//On récupère toutes les src qu'on stocke dans un tableau
let defaultContent = [];

for(let i = 0; i < document.getElementsByClassName("item-image").length; i++)
{
    defaultContent[i] += document.getElementsByClassName("img-img")[i].src;
}

let linkSrcLength = document.getElementsByClassName("img-img")[0].src;

let index = 1;
let indexPrev = defaultContent.length - 1;

function next(){
    //Si on appuie sur next, on va récupérer la chaine qui se trouve dans le tableau des lien à l'index suivant
    document.getElementsByClassName("img-img")[0].sr = defaultContent[index].replace('undefined', '');

    //Si mon index est inférieur à la taille du tab - 1
    if(index < defaultContent.length - 1){
        //je continue de l'incrémenter
        index++;
    }else{
        //sinon il vient à 0
        index = 0;
    }
    
}

function prev(){
    //Si on appuie sur prev, on va récupérer la chaine qui se trouve dans le tableau des lien à l'index précédent
    document.getElementsByClassName("img-img")[0].src = defaultContent[indexPrev].replace('undefined', '');

    if(indexPrev >= 0){
        indexPrev--;
    }else{
        indexPrev = 0
    }
}

//On boucle sur du deuxième élément image au dernier pour ne pas les afficher et n'avoir que l'élément n°1
for(let i = 1; i < document.getElementsByClassName("item-image").length; i++){
    document.getElementsByClassName("item-image")[i].innerHTML = "";
}*/