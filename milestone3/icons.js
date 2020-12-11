$(document).ready(function () {
  // icone come da milestone 1

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

  //TASK 3 inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

  //TASK4 definiamo dei colori per le icone (blue, orange, purple)

  //TASK5 aggiungiamo dei colori usando una funzione

  newIcons = Icons.map((element) => {
    element.family == "animals"
      ? (element.color = "blue")
      : element.family == "vegetables"
      ? (element.color = "orange")
      : (element.color = "purple");
    return element;
  });

  console.log(newIcons);

  //TASK6 inseriamo le icone colorate nel container

  function print(array, selector) {
    array.forEach((element) => {

      //potrei creare una const markup dove inserire ql da inserire nel dom
      selector.append(`
      <div class = "${element.family}">
        <i class="${element.prefix} ${element.type} ${element.color}"></i>
         <div class="title">${element.name}
      </div>
      </div>
      `);
    });
  }

  const printIcons = print(newIcons, container);
  
  //TASK 7 estrapoliamo i tipi di icone
  
 familyList = newIcons.map(element => {
    return element.family;
  })

  const familyListUnique = familyList.filter((element,index) => {
    // console.log(
    //   element,index,familyList.indexOf(element),familyList.indexOf(element) === index,
    // );
    return familyList.indexOf(element) === index;
  });

  console.log(familyListUnique);


  //TASK 8 aggiungiamo i tipi alla select


  const optionSelect = $('select');

  familyListUnique.forEach((element,index) => {

    optionSelect.append(`

    <option value="${index}">${element}</option>
    
    `);

  })

  

  //TASK 9 al change mostriamo solo le icone filtrate
  const animals = $('div.icons > div.animals');
  const vegetables = $('div.icons > div.vegetables');
  const users = $('div.icons > div.users');

  optionSelect.change(function (e) { 
    if (optionSelect.val() == 1) {
      animals.hide();
      vegetables.show();
      users.hide();
    } else if (optionSelect.val() == 0) {
      vegetables.hide();
      animals.show();
      users.hide();
    } else if (optionSelect.val() == 2) {
      animals.hide();
      users.show();
      vegetables.hide();
    } else if (optionSelect.val() == 3) {
      animals.show();
      users.show();
      vegetables.show();
    }
  
  });




  //TASK 10 mostriamo come passare un parametro a change e contemporaneamente destrutturiamo




  /* ---- FUNCTIONS ----*/
});