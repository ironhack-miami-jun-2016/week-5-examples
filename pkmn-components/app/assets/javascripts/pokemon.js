PokemonApp.Pokemon = class {

  // data-pokemon-uri="api/v1/pokemon/160/"
  // pokemonUri = "api/v1/pokemon/160/"
  constructor (pokemonUri) {
    this.id = PokemonApp.idFromUri( pokemonUri );
  }

  render () {
    console.log("Rendering pokemon: #" + this.id);

    $.ajax({
      type: "GET",
      url: `/api/pokemon/${this.id}`,
      success: function (response) {
        console.log("Pokemon info:");
        console.log(response);

        $(".js-pkmn-name").text(response.name);
        $(".js-pkmn-number").text(response.pkdx_id);
        $(".js-pkmn-height").text(response.height);
        $(".js-pkmn-weight").text(response.weight);
        $(".js-pkmn-hp").text(response.hp);
        $(".js-pkmn-attack").text(response.attack);
        $(".js-pkmn-defense").text(response.defense);
        $(".js-pkmn-sp-attack").text(response.sp_atk);
        $(".js-pkmn-sp-defense").text(response.sp_def);
        $(".js-pkmn-speed").text(response.speed);

        $(".js-types-list").empty();

        response.types.forEach(function (theType) {
          var typeHtml = `<li> ${theType.name} </li>`;

          $(".js-types-list").append(typeHtml);
        });

        $(".js-pokemon-modal").modal("show");
      },
      error: PokemonApp.handleError
    });
  }

}


PokemonApp.idFromUri = function (pokemonUri) {
  // pokemonUri = "api/v1/pokemon/160/"
                                            //     0      1       2        3     4
  var uriSegments = pokemonUri.split("/");  // [ "api", "v1", "pokemon", "160", "" ]
                                            // length = 5
  var secondLast = uriSegments.length - 2;  // secondLast = 3
  return uriSegments[secondLast];
};


PokemonApp.handleError = function (error) {
  console.log(`
    <guitar riff>
    Won't you take me to...
    <guitar riff>
    ERROR TOWN!?
  `);
  console.log(error);
};


$(document).on("ready", function () {

  $(".js-show-pokemon").on("click", function (event) {
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var pokemon = new PokemonApp.Pokemon(pokemonUri);
    pokemon.render();
  });

});
