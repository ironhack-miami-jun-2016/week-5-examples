PokemonApp.Pokemon = class {

  // data-pokemon-uri="api/v1/pokemon/160/"
  // pokemonUri = "api/v1/pokemon/160/"
  constructor (pokemonUri) {
    this.id = PokemonApp.idFromUri( pokemonUri );
  }

  render () {
    console.log("Rendering pokemon: #" + this.id);
  }

}


PokemonApp.idFromUri = function (pokemonUri) {
  // pokemonUri = "api/v1/pokemon/160/"
                                            //     0      1       2        3     4
  var uriSegments = pokemonUri.split("/");  // [ "api", "v1", "pokemon", "160", "" ]
                                            // length = 5
  var secondLast = uriSegments.length - 2;  // secondLast = 3
  return uriSegments[secondLast];
}


$(document).on("ready", function () {

  $(".js-show-pokemon").on("click", function (event) {
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var pokemon = new PokemonApp.Pokemon(pokemonUri);
    pokemon.render();
  });

});
