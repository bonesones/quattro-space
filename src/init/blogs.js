export const initBlogsPage = async () => {
  initBackButton();
};

function initBackButton() {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    });
  }
}
