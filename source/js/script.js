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

  // Copy the current article URL from the share area.
  d.querySelectorAll(".sns-share--copy").forEach(function(button) {
    button.addEventListener("click", function() {
      var articleUrl = new URL(button.getAttribute("data-copy-url"), window.location.href);
      articleUrl.host = window.location.host;
      articleUrl.protocol = window.location.protocol;
      var url = articleUrl.href;
      var status = button.closest(".sns-share--area").nextElementSibling;

      function showResult(success) {
        var icon = button.querySelector("i");
        button.setAttribute("aria-label", success ? "URLをコピーしました" : "URLをコピーできませんでした");
        button.setAttribute("title", success ? "URLをコピーしました" : "URLをコピーできませんでした");
        icon.className = success ? "fa-solid fa-check fa-lg" : "fa-solid fa-triangle-exclamation fa-lg";
        status.textContent = success ? "URLをコピーしました" : "URLをコピーできませんでした";
        window.setTimeout(function() {
          button.setAttribute("aria-label", "URLをコピー");
          button.setAttribute("title", "URLをコピー");
          icon.className = "fa-solid fa-copy fa-lg";
          status.textContent = "";
        }, 2500);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(function() {
          showResult(true);
        }).catch(function() {
          showResult(false);
        });
        return;
      }

      var input = d.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      d.body.appendChild(input);
      input.select();
      var copied = d.execCommand("copy");
      d.body.removeChild(input);
      showResult(copied);
    });
  });
})(document);
