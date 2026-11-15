(function(d){
  // Mobile nav
  // $(".mobile-nav-panel").click(function() {
  //   $(".nav").toggleClass("active")
  // });

  var menuButton = d.querySelector(".mobile-nav-panel");
  var navigation = d.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function() {
      var isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute("aria-label", isExpanded ? "ナビゲーションを開く" : "ナビゲーションを閉じる");
      navigation.classList.toggle("active", !isExpanded);
    });
  }
})(document);
