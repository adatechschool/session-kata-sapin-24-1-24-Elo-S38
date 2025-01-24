//---------------Etape 1-----------------------------------------
//1.1 Ligne d'étoiles

// afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n
function afficherEtoiles(n) {
  let lignEtoile = "";
  for (let i = 0; i < n; i++) {
    lignEtoile += "*";
  }
  console.log(lignEtoile);
}

afficherEtoiles(2);
afficherEtoiles(5);

/* //fonction afficherPointeSapin() qui prendra en paramètre la hauteur de ce triangle
function afficherPointeSapin(hauteur) {}
afficherPointeSapin(4);
 */
