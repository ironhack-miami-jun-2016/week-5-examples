// app.js

$(document).ready(function () {

  $(".js-character-form").on("submit", createCharacter);

  $(".js-fetch-characters").on("click", fetchCharacters);

});



function createCharacter (event) {
  event.preventDefault();

  alert("FORM SUBMITTED");
}


function fetchCharacters () {
  alert("FETCH CHARACTERS");
}
