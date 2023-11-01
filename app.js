const text = '[ "Web Developer", "Programmer", "Student" ]';
const myArr = JSON.parse(text);

var typed = new Typed(".auto-type", {
  strings: myArr,
  typeSpeed: 120,
  backSpeed: 80,
  looped: true,
});

$(document).ready(function () {
  $("#hero").hover(
    function () {
      $(this).css(
        "background",
        " linear-gradient(to right, #0004ff, #742fff,#ea00ff)"
      );
    },
    function () {
      $(this).css("background-color", "pink");
    }
  );
});
