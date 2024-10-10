$(document).ready(function () {
  $(".hamburger").click(function () {
    let hamburger = this;

    let firstChild = $(hamburger).parent().children().children().eq(1);
    let secChild = $(hamburger).parent().children().children().eq(2);
    let lastChild = $(hamburger).parent().children().children().eq(3);

    firstChild.toggleClass("top");
    secChild.toggleClass("mid");
    lastChild.toggleClass("low");

    let menu = $(".menu");

    menu.toggleClass("active");
  });

  $(".logo__img").click(function (event) {
    event.preventDefault();

    //  redirect to home page
    window.location = window.origin;
  });

  let playButton = $(".video__button");

  $(".video__button").click(function (e) {
    playButton.css({
      display: "none",
    });

    $(".video").get(0).play();
  });

  $(".video").click(function () {
    let video = $(".video").get(0);
    if (video.paused) {
      video.play();

      playButton.css({
        display: "none",
      });
    } else {
      video.pause();
      playButton.css({
        display: "",
      });
    }
  });
});
