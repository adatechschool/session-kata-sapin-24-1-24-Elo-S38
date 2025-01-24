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

//1.4 Seconde moitié et espaces

//fonction pour la seconde moitié de la pointe du sapin============> ne fonctionne pas
let espace = " ";
function afficherTriangeGauche(n) {
  for (let i = 0; i < n; i++) {
    lignEtoile = "";

    for (let etoile = 0; etoile < i; etoile++) {
      lignEtoile += "*";
    }
    lignEtoile += espace;
    lignEtoile += "\\";
    console.log(lignEtoile);
  }
}

afficherTriangeGauche(5);

//pas eu le temps de tester la methode pour inverser les caracteres string (src=https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)
/* function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

reverseString("hello"); */
