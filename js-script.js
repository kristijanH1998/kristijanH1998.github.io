const openPopupWindowButtons = document.querySelectorAll("[data-popupwindow-target]");
const closePopupWindowButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openPopupWindowButtons.forEach(button => {
	button.addEventListener("click", () => {
  	const popupWindow = document.querySelector(button.dataset.popupwindowTarget);
    openWindow(popupWindow);
  })
});

closePopupWindowButtons.forEach(button => {
	button.addEventListener("click", () => {
  	const popupWindow = button.closest(".popup-window");
    closeWindow(popupWindow);
  })
});

function openWindow(popupWindow){
	if(popupWindow == null) return;
  popupWindow.classList.add("active");
  overlay.classList.add("active");
}

overlay.addEventListener("click", () => {
	const windows = document.querySelectorAll(".popup-window.active");
  windows.forEach(window => {
  	closeWindow(window);
  });
});

function closeWindow(popupWindow){
	if(popupWindow == null) return;
  popupWindow.classList.remove("active");
  overlay.classList.remove("active");
}