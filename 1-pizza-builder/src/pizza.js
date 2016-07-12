// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
  $(".btn-pepperonni").on("click", function () {
    $(".pep").toggle();
  });

  $(".btn-mushrooms").on("click", function () {
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").on("click", function () {
    $(".green-pepper").toggle();
  });

  $(".btn-sauce").on("click", function () {
    $(".js-sauce-wrapper").toggleClass("sauce-white");
  });

  $(".btn-crust").on("click", function () {
    $(".js-crust-wrapper").toggleClass("crust-gluten-free");
  });
});
