// app.js

$(document).ready(function () {
  console.log("The document is ready now");

  function doStuffOnClick () {
    alert("I told you not to click.");
  }

  $(".js-alert").on("click", doStuffOnClick);

  console.log( $(".js-alert") );
  console.log( $(".js-alert").length );
});


console.log("app.js end");
