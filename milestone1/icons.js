$(document).ready(function () {
  //TASK 1 Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 

  class icons {
    constructor (name, prefix, type, family){
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
  const container = $('div.icons');
  console.log(container);
  //TASK 3 inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)


  function print(array,selector){

    array.forEach(element =>{

        selector.append(`
      <div>
        <i class="${element.prefix} ${element.type}"></i>
      </div>`
      );
      })
  }

  const printIcons = print(Icons, container);

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

