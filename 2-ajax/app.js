// app.js

$(document).ready(function () {

  $(".js-character-form").on("submit", createCharacter);

  $(".js-fetch-characters").on("click", fetchCharacters);

});



function createCharacter (event) {
  event.preventDefault();

  // $('[name="name"]')
  // $('[name="occupation"]')
  // $('[name="weapon"]')
  var name = $(".js-name-input").val();
  var occupation = $(".js-occupation-input").val();
  var weapon = $(".js-weapon-input").val();


  var listContent = `
    <li>
      <h3> ${name} </h3>

      <ul>
        <li> Occupation: ${occupation} </li>
        <li> Weapon: ${weapon} </li>
      </ul>
    </li>
  `;

  $(".js-characters-list").append(listContent);

}


function fetchCharacters () {
  $.ajax({
    type: "GET",
    url: "https://ironhack-characters.herokuapp.com/characters",
    success: showCharacters,
    error: handleError
  });
}


function showCharacters (response) {
  var charactersArray = response;

  $(".js-characters-list").empty();

  charactersArray.forEach(function (theCharacter) {
    var listContent = `
      <li>
        <h3> ${theCharacter.name} </h3>

        <ul>
          <li> Occupation: ${theCharacter.occupation} </li>
          <li> Weapon: ${theCharacter.weapon} </li>
        </ul>
      </li>
    `;

    $(".js-characters-list").append(listContent);
  });
}

function handleError (error) {
  console.log("Oh no! There was an error.");
  console.log(error.responseText);
}



