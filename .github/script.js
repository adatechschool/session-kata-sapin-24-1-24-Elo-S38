//---------------Etape 1-----------------------------------------

//1.1 Ligne d'étoiles
let lignEtoile = "";

//fonction afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n
function afficherEtoiles(n) {
  for (let i = 0; i < n; i++) {
    lignEtoile += "*";
  }
  console.log(lignEtoile);
}

afficherEtoiles(2);
afficherEtoiles(5);

//1.2 Carré d'étoiles

//fonction afficherRectangle(hauteur, largeur)
function afficherRectangle(hauteur, largeur) {
  for (let i = 0; i < hauteur; i++) {
    lignEtoile = "";
    afficherEtoiles(largeur);
  }
}

afficherRectangle(5, 5);

//1.3 Triangle d'étoiles

//fonction pour afficher la partie droite du sapin
function afficherTriangleDroite(n) {
  //boucle pour vider chaque ligne avant incrementation d'une etoile et rajouter un back slash en fin de ligne
  for (let i = 0; i < n; i++) {
    lignEtoile = "";
    for (let etoile = 0; etoile < i; etoile++) {
      //boucle imbriquée pour incrementer une etoile de plus a chaque iteration
      lignEtoile += "*";
      // lignEtoile += "\\"
      // console.log(lignEtoile);
    }
    lignEtoile += "\\"; //1ere ligne car ne rentre pas dans la boucle imbriquée
    console.log(lignEtoile);
  }
}

afficherTriangleDroite(5);
