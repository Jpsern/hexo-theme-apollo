(function(d){
  // Mobile nav
  // $(".mobile-nav-panel").click(function() {
  //   $(".nav").toggleClass("active")
  // });

  d.querySelector(".mobile-nav-panel").addEventListener("click", function() {
    d.querySelector(".nav").classList.toggle("active");
  });
})(document);
