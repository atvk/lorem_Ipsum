function handleEscape(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

function setCloseByClickListeners(popups) {
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("popup__close")) {
        closePopup(popup);
      }
      if (e.target.classList.contains("popup_is-opened")) {
        closePopup(popup);
      }
    });
  });
}

const buttonConnection = document.querySelector(".connection-button");
const popupOpen = document.querySelector(".popup_type_order");
const popupClose = document.querySelector("popup__close")
const popups = document.querySelectorAll(".popup");

buttonConnection.addEventListener("click", () => {
openPopup(popupOpen);
});

setCloseByClickListeners(popups);


