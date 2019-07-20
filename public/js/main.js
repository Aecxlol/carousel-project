/***********************************************NOUVEAU CODE EN M'AIDANT D'UN TUTO*****************************************/

let index = 1;

//Au lancement du programme j'affiche l'image 0
showSlides(index);

//On donne la classe active au point qui correspond à l'image et rien aux autres
function dotActive(index){
    let dots = document.getElementsByTagName("span");

    for(let i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index - 1].className += " active";
}

//A chaque appui sur next ou prev, j'incrémente ou décrémente mon index de 1
function next(prevOrNextValue){
    return function(){
        showSlides(index += prevOrNextValue);
        dotActive(index);
    }
}

//A chaque appui sur un des points, je lance la fonction showSlides qui va afficher l'image en fonction du point
function dotFunc(dotNumber){
    return function(){
        showSlides(index = dotNumber);
        dotActive(index);
    }
}

/* CREATION DES ELEMENTS HTML */
function createArrow(eltName, className, father){
    var eltName = document.createElement("i");
    eltName.setAttribute("class", className);
    father.appendChild(eltName);
}

let btnPrev = document.createElement("a");
btnPrev.setAttribute("class", "btn-prev");
document.getElementsByClassName("container")[0].appendChild(btnPrev);

let btnNext = document.createElement("a");
btnNext.setAttribute("class", "btn-next");
document.getElementsByClassName("container")[0].appendChild(btnNext);

createArrow("arrowLeftElt", "fas fa-arrow-left", btnPrev);
createArrow("arrowRightElt", "fas fa-arrow-right", btnNext);

let mainDivDotElt = document.createElement("div");
mainDivDotElt.style.textAlign = "center";
document.getElementsByClassName("container")[0].appendChild(mainDivDotElt);

for(let j = 0; j < document.getElementsByClassName("item-image").length; j++){
    let dotElt = document.createElement("span");
    dotElt.setAttribute("class", `dot dot${j}`);
    mainDivDotElt.appendChild(dotElt);
    dotElt.addEventListener("click", dotFunc(j + 1));
}

/* EVENT DES BOUTONS PREV ET NEXT */
btnPrev.addEventListener("click", next(-1));
btnNext.addEventListener("click", next(1));

//Par défault on met le 1er point en active
let dots = document.getElementsByTagName("span");
dots[0].className += " active";

/* FONCTION QUI AFFICHE LE CAROUSEL */
function showSlides(prevOrNextValue){
    //On récupère les div item-image
    let items = document.getElementsByClassName("item-image");

    //Si notre index vaut plus que le nombre d'images à afficher alors il revient à la première image
    if(prevOrNextValue > items.length){
        index = 1;
    }

    //Si notre index vaut moins que 1 alors il revient à la dernière image
    if(prevOrNextValue < 1){
        index = items.length;
    }

    //Par défaut on affiche aucune image
    for(let i = 0; i < items.length; i++){
        items[i].style.display = "none";
    }

    //On affiche juste l'image qui a pour index notre index -1 donc au début on affichera la div 0
    items[index - 1].style.display = "block";
}