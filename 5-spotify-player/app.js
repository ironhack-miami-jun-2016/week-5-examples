$(document).ready(function () {
  $(".js-search-form").on("submit", searchSpotify);
  $(".js-play-btn").on("click", playOrPause);

  $(".js-play-btn").removeClass("disabled");
});


function searchSpotify (event) {
  event.preventDefault();

  var searchTerm = $(".js-search-term").val();

  $.ajax({
    type: "GET",
    url: `https://api.spotify.com/v1/search?type=track&query=${searchTerm}`,
    success: updatePlayer,
    error: handleError
  });
}


function handleError (error) {
  console.log("There was an error");
  console.log(error.responseText);
}


function updatePlayer (response) {
  console.log("Search results")
  console.log(response);

  var firstResult = response.tracks.items[0];

  if (firstResult.album.images.length > 0) {
    var imageUrl = firstResult.album.images[0].url;
  }
  else {
    var imageUrl = "https://media.giphy.com/media/1vLHnnIiwUN7a/giphy.gif";
  }

  $(".title").text( firstResult.name );
  $(".author").text( firstResult.artists[0].name );
  $(".cover img").prop( "src", imageUrl );
  $(".js-audio-tag").prop( "src", firstResult.preview_url );
}


function playOrPause () {
  $(".js-play-btn").toggleClass("playing");

  if ( $(".js-play-btn").hasClass("playing") ) {
    $(".js-audio-tag").trigger("play");
  }

  else {
    $(".js-audio-tag").trigger("pause");
  }

}
