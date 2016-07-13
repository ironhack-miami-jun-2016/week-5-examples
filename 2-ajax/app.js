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
  var listContent = `
    <li>
      <h3> Yoda </h3>

      <ul>
        <li> Occupation: Grandmaster </li>
        <li> Weapon: Talking backwards </li>
      </ul>
    </li>

    <li>
      <h3> Obi-Wan Kenobi </h3>

      <ul>
        <li> Occupation: Liar </li>
        <li> Weapon: Lies </li>
      </ul>
    </li>

    <li>
      <h3> C-3PO </h3>

      <ul>
        <li> Occupation: Protocol Droid </li>
        <li> Weapon: Falling Down </li>
      </ul>
    </li>
  `;

  // $(".js-characters-list").empty();
  // $(".js-characters-list").append(html);

  $(".js-characters-list").html(listContent);
}
