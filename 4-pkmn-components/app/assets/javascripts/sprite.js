PokemonApp.Sprite = class {

  constructor (spriteUri) {
    this.spriteUri = spriteUri;
  }

  render () {
    console.log("Rendering sprite: " + this.spriteUri);

    $(".js-sprite-wrapper").empty();

    $.ajax({
      type: "GET",
      url: this.spriteUri,
      success: PokemonApp.showSprite,
      error: PokemonApp.handleError
    });
  }

};


PokemonApp.showSprite = function (response) {
  console.log("Pokemon SPRITE:");
  console.log(response);

  var imgTag = `<img src="http://pokeapi.co${response.image}">`;

  $(".js-sprite-wrapper").html(imgTag);
};
