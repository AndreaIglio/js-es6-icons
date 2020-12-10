$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1

  class icons {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const Icons = [
    new icons("cat", "fas", "fa-cat", "animals"),
    new icons("dog", "fas", "fa-dog", "animals"),
    new icons("dove", "fas", "fa-dove", "animals"),
    new icons("spider", "fas", "fa-spider", "animals"),
    new icons("carrot", "fas", "fa-carrot", "vegetables"),
    new icons("pepper", "fas", "fa-pepper-hot", "vegetables"),
    new icons("user-ninja", "fas", "fa-user-ninja", "users"),
    new icons("user-graduate", "fas", "fa-user-graduate", "users"),
    new icons("user-nurse", "fas", "fa-user-nurse", "users"),
  ];

  console.log(Icons);

  //TASK 2 Selezioniamo il container icons

  // const container = document.getElementsByClassName('div.icons')[0];
  const container = $("div.icons");
  console.log(container);
  //TASK 3 inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)


  //TASK4 definiamo dei colori per le icone (blue, orange, purple)

  //TASK5 aggiungiamo dei colori usando una funzione

newIcons = Icons.map((element) => {
  element.family == "animals"
    ? (element.color = "blue")
    : element.family == "vegetables"
    ? (element.color = "orange")
    : (element.color = "purple");
return element
});

console.log(newIcons);

function print(array, selector) {
  array.forEach((element) => {
    selector.append(`
      <div>
        <i class="${element.prefix} ${element.type} ${element.color}"></i>
      </div>`);
  });
}

const printIcons = print(newIcons, container);



  //TASK6 inseriamo le icone colorate nel container

  



});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
