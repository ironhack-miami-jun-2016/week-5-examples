// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
  $(".btn-pepperonni").on("click", function () {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
  });

  $(".btn-mushrooms").on("click", function () {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
  });

  $(".btn-green-peppers").on("click", function () {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
  });

  $(".btn-sauce").on("click", function () {
    $(".js-sauce-wrapper").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
  });

  $(".btn-crust").on("click", function () {
    $(".js-crust-wrapper").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
  });
});
