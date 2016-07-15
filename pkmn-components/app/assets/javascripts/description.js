PokemonApp.Description = class {

  constructor (descriptionsArray) {
    this.descriptionsArray = descriptionsArray;
  }

  render () {
    var latestDescription = this.findLatestDescription();

    console.log("Rendering description:");
    console.log(latestDescription);

    $.ajax({
      type: "GET",
      url: latestDescription.resource_uri,
      success: PokemonApp.showDescription,
      error: PokemonApp.handleError
    });
  }

  findLatestDescription () {
    var sortedArray = this.descriptionsArray.sort(function (descA, descB) {
      // Return -1 if A should be sorted before B
      if (descA.name > descB.name) {
        return -1;
      }

      // Return -1 if B should be sorted before A
      else if (descB.name > descA.name) {
        return 1;
      }

      // Return 0 if A and B are "tied"
      else {
        return 0;
      }
    });

    // We sorted in descending order,
    // so the first element is the most recent description.
    return sortedArray[0];
  }

};


PokemonApp.showDescription = function (response) {
  console.log("Pokemon DESCRIPTION:");
  console.log(response);

  $(".js-description-tag").text(response.description);
};
