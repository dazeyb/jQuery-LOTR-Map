console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  
const $sectionMiddleEarth = $("<section id='middle-earth'></section>"); 


  
  // 2. append the section to the body of the DOM.

$("body").append($sectionMiddleEarth);
  
  // 3abcd. use a for loop to iterate over the lands array that does the following:

  // Goes through lands array, pumps out article with land id, h1 inside article with land name, appends all to middle-earth section
  for(let i = 0; i < lands.length; i++){

    const $article = $(`<article id=${lands[i]}>
    <h1>"${lands[i]}"</h1></article>`);$("#middle-earth").append($article);
  }

//end of makeMiddle Earth
};



// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // // 81-82 makes UL inside the Shire with id Hobbit-List
  const $hobbitList = $("<ul id='Hobbit-List'>");
  $("#The-Shire").append($hobbitList);
  
    for(let i = 0; i < hobbits.length; i++){
      const $listItemHobbit = $(`<li class="hobbit">${hobbits[i]}</li>`);
      $($hobbitList).append($listItemHobbit);
    }

//end of makeHobbits
};



// ============
// Chapter 3
// ============
 const keepItSecretKeepItSafe = () => {

   const $theRingDiv = $("<div id='the-ring'></div>");

   $(".hobbit").eq(0).append($theRingDiv);

//end of keepItSecretKeepItSafe
};



// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor



  const $baddiesList = $("<ul id='Baddies-List'>");
  $("#Mordor").append($baddiesList);

    for(let i = 0; i < baddies.length; i++){
      
      const $listItemBaddy = $(`<li class="baddy">${baddies[i]}</li>`);
      $($baddiesList).append($listItemBaddy);
    }

//end of makeBaddies
};



// ============
// Chapter 5
// ============
const makeBuddies = () => {

  const $aside = $("<aside></aside>");
  $("#Mordor").after($aside);

  const $buddiesList = $("<ul id='Buddies-List'></ul>");
  $($aside).append($buddiesList);

  for(let i = 0; i < buddies.length; i++){
      
    const $listItemBuddy = $(`<li class="buddy">${buddies[i]}</li>`);
    $($buddiesList).append($listItemBuddy);
    }

//end of makeBuddies
};



// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  $("#Hobbit-List").appendTo("#Rivendell");

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
