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
  console.log(lignEtoile);
}

afficherRectangle(5, 5);

/* //fonction afficherPointeSapin() qui prendra en paramètre la hauteur de ce triangle
function afficherPointeSapin(hauteur) {}
afficherPointeSapin(4);
 */
