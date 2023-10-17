(function initTheme() {
  const currentThemeInLocalStorage = localStorage.getItem("currentTheme");
  if (currentThemeInLocalStorage === null) {
    localStorage.setItem("currentTheme", "light");
    document.querySelector("body").setAttribute("data-bs-theme", "light");
  } else {
    document
      .querySelector("body")
      .setAttribute("data-bs-theme", currentThemeInLocalStorage);
  }
})();
