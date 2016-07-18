PokemonApp.Evolution = class {

  constructor (evolutionsArray) {
    this.evolutionsArray = evolutionsArray;
  }

  render () {
    console.log("Rendering evolutions:");
    console.log(PokemonApp.evolutionsArray);

    $(".js-evolutions-list").empty();

    PokemonApp.evolutionsArray.forEach(function (theEvolution) {
      $.ajax({
        type: "GET",
        url: theEvolution.resource_uri,
        success: PokemonApp.showEvolutions,
        error: PokemonApp.handleError
      });
    });

    $(".js-evolutions-modal").modal("show");
  }

}


PokemonApp.showEvolutions = function (response) {
  var evoName = response.name;

  $.ajax({
    type: "GET",
    url: response.sprites[0].resource_uri,
    success: function (spriteResponse) {

      var html = `
        <li>
          <h4> ${evoName} </h4>
          <img src="http://pokeapi.co${spriteResponse.image}">
        </li>
      `;

      $(".js-evolutions-list").append(html);
    },
    error: PokemonApp.handleError
  });

}


$(document).on("ready", function () {

  $(".js-evolutions-btn").on("click", function () {
    var evolutionsArray = PokemonApp.evolutionsArray;

    if (evolutionsArray.length > 0) {
      var evolutionsComponent = new PokemonApp.Evolution( evolutionsArray );
      evolutionsComponent.render();
    }
  });

});
