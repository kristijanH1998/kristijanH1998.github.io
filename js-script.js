const popupLinks = document.getElementsByClassName("popup-links");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");
for(let i = 0; i < popupLinks.length; i++){
  popupLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
}