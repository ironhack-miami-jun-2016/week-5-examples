if (window.PokemonApp === undefined) {
  window.PokemonApp = {};
}

PokemonApp.init = function () {
  // 3rd party setup code here
  console.log("Pokemon App ONLINE!");
};

$(document).ready(function () {
  PokemonApp.init();
});
