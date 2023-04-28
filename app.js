/**
 * Ajoute des options dans des listes déroulantes.
 * @Param String parentId : Id de l'élement select dans lequel on veut rajouter des options.
 * @Param Array<String> Tableau contenant les valeurs qu'on veut dans la liste déroulante.
 */


function setOptions(parentId, arr) {
  // Récupère l'élement parent
  const parent = document.getElementById(parentId);

  // Création des options
  for (var i = 0; i < arr.length; i++) {
      var option = document.createElement("option");
      option.value = arr[i];
      option.text = arr[i];

      // Ajout de l'option au parent.
      parent.appendChild(option);
  }
}

// on ajoute différentes options à un élément "select"
setOptions("weight", ["40-60", "61-80", "81-100", "101-120","121-140"]);
setOptions("height", ["140", "141-160", "161-180", "181-200"]);
setOptions("chest-height", ["140", "141-160", "161-180", "181-200"]);
setOptions("bra", ["40-60", "61-80", "81-100", "101-120", "121-140"]);
setOptions("bra2", ["A", "B", "C", "D", "E", "F"]);
setOptions("age", ["12-17", "18-25", "26-32", "33-39", "40-50", "51-60", "61-70", "71-80", "80-90"]);